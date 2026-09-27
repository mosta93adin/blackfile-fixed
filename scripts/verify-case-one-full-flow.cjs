const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');

async function main() {
  const { createCaseRuntime } = await import('../www/engine/case-dispatch.mjs');
  const {
    getCaseOnePresentationEvidenceId,
    getCaseOnePresentationSuspectId,
    getCaseOnePresentationQuestions,
    getCaseOneObjectionTextKey,
    getCaseOneDeductionTextKey,
    getCaseOneObjectionText,
    getCaseOneDeductionText
  } = await import('../www/engine/case-one-presentation.mjs');

  // --- Load TRANSLATIONS the same way the browser would (plain script, global var) ---
  const translationsSource = fs.readFileSync(path.join(ROOT, 'www', 'translations.js'), 'utf8');
  const translationContext = {};
  vm.createContext(translationContext);
  vm.runInContext(`${translationsSource}\nthis.TRANSLATIONS = TRANSLATIONS;`, translationContext);
  const TRANSLATIONS = translationContext.TRANSLATIONS;

  // --- Load EXTRA_TRANGS (the txx() dictionary) directly out of app.js source,
  //     the same way check-i18n.js does, so we can simulate txx(key) per language. ---
  const appSource = fs.readFileSync(path.join(ROOT, 'www', 'app.js'), 'utf8');
  function extractDict(content, dictName) {
    const dictStart = content.indexOf(`const ${dictName}`);
    const openBrace = content.indexOf('{', dictStart);
    let depth = 0, closeBrace = -1;
    for (let i = openBrace; i < content.length; i++) {
      if (content[i] === '{') depth++;
      if (content[i] === '}') depth--;
      if (depth === 0) { closeBrace = i; break; }
    }
    return content.substring(openBrace, closeBrace + 1);
  }
  const extraTrangsSrc = extractDict(appSource, 'EXTRA_TRANGS');
  const extraTrangsContext = {};
  vm.createContext(extraTrangsContext);
  vm.runInContext(`this.EXTRA_TRANGS = ${extraTrangsSrc};`, extraTrangsContext);
  const EXTRA_TRANGS = extraTrangsContext.EXTRA_TRANGS;

  const LANGS = ['en', 'ar', 'ary', 'fr', 'es', 'it', 'de', 'pt'];
  assert.deepStrictEqual(Object.keys(TRANSLATIONS).sort(), LANGS.slice().sort());

  function txx(lang, key) {
    const dict = EXTRA_TRANGS[lang] || EXTRA_TRANGS.en;
    if (dict[key] !== undefined) return dict[key];
    return EXTRA_TRANGS.en[key] !== undefined ? EXTRA_TRANGS.en[key] : '';
  }

  for (const lang of LANGS) {
    const data = TRANSLATIONS[lang];
    const c = data.cases[1]; // Case 1 = "Eye of the Nile Gem" (index 1, CASE_EYE_NILE_01)

    // --- Step 2/3: title + evidence are correct and the 6th item exists ---
    assert.ok(typeof c.title === 'string' && c.title.length > 0, `[${lang}] missing case title`);
    assert.strictEqual(c.evidence.length, 6, `[${lang}] expected 6 evidence items`);

    // --- Build the evidenceId map exactly like startInvestigation() does ---
    const evidenceIdByIndex = c.evidence.map((ev, i) => getCaseOnePresentationEvidenceId(i));
    assert.strictEqual(evidenceIdByIndex[5], 'E_EYE_NILE_CLOSING_ACCESS_REGISTER',
      `[${lang}] register evidence not mapped to index 5`);
    // The register evidence card must have real player-facing text (step 4: "Discover the closing access register")
    assert.ok(c.evidence[5].name && c.evidence[5].desc, `[${lang}] register evidence has no name/desc`);

    // --- Fresh runtime per language (Case 0 must stay unaffected — regression check) ---
    const caseZero = createCaseRuntime(0);
    const caseOne = createCaseRuntime(1);
    assert.strictEqual(caseOne.getCaseId(), 'CASE_EYE_NILE_01');

    // Suspect id mapping (index 2 = Maher, per CASE_ONE_SUSPECT_IDS)
    const maherId = getCaseOnePresentationSuspectId(2);
    assert.strictEqual(maherId, 'S_EYE_NILE_MAHER');
    const maherTranslated = c.suspects[2];
    const maherQuestions = getCaseOnePresentationQuestions(2, maherTranslated);
    assert.strictEqual(maherQuestions[2].id, 'Q_EYE_NILE_MAHER_KEY_REGISTER');
    assert.ok(maherQuestions[2].questionText, `[${lang}] register question has no text`);
    assert.ok(maherQuestions[2].responseText, `[${lang}] register response has no text`);

    // --- Step 4/5: discover + analyze the register evidence ---
    // (Not yet unlocked before discovery.)
    assert.strictEqual(
      caseOne.getUnlockedQuestions(maherId).some(q => q.id === 'Q_EYE_NILE_MAHER_KEY_REGISTER'),
      false,
      `[${lang}] register question should not be unlocked before evidence discovery`
    );
    caseOne.discoverEvidence('E_EYE_NILE_GLOVE');
    caseOne.analyzeEvidence('E_EYE_NILE_GLOVE');
    caseOne.discoverEvidence('E_EYE_NILE_CLOSING_ACCESS_REGISTER');
    caseOne.analyzeEvidence('E_EYE_NILE_CLOSING_ACCESS_REGISTER');

    // --- Step 6/7: select Maher, question becomes available, ask it ---
    assert.strictEqual(
      caseOne.getUnlockedQuestions(maherId).some(q => q.id === 'Q_EYE_NILE_MAHER_KEY_REGISTER'),
      true,
      `[${lang}] register question should unlock after evidence discovery+analysis`
    );
    const response = caseOne.askQuestion(maherId, 'Q_EYE_NILE_MAHER_KEY_REGISTER');
    assert.strictEqual(response.producedStatementId, 'ST_EYE_NILE_MAHER_KEY_DENIAL');
    // Step 10: response must NOT auto-apply the objection
    assert.strictEqual(response.flaggedObjectionId, null, `[${lang}] objection auto-applied on ask`);
    assert.strictEqual(caseOne.getState().objectionIds.has('OBJ_EYE_NILE_MAHER_KEY_DENIAL'), false);

    // --- Step 11/12: objection is eligible but NOT auto-applied; player applies it explicitly ---
    assert.deepStrictEqual(caseOne.getEligibleObjections(), ['OBJ_EYE_NILE_MAHER_KEY_DENIAL']);
    const objKey = getCaseOneObjectionTextKey('OBJ_EYE_NILE_MAHER_KEY_DENIAL');
    const localizedObjText = txx(lang, objKey);
    assert.ok(localizedObjText && localizedObjText.length > 0, `[${lang}] no localized objection text`);
    if (lang !== 'en') {
      assert.notStrictEqual(localizedObjText, getCaseOneObjectionText('OBJ_EYE_NILE_MAHER_KEY_DENIAL'),
        `[${lang}] objection text is not actually localized (same as English)`);
    }
    caseOne.applyObjection('OBJ_EYE_NILE_MAHER_KEY_DENIAL');
    assert.strictEqual(caseOne.getState().hypothesisStates.H_EYE_NILE_MAHER_KEY_DENIAL, 'POSSIBLE_CONTRADICTION');

    // --- Step 13/14: deduction is now valid but requires explicit apply ---
    assert.strictEqual(caseOne.getDeductionStatus('DED_EYE_NILE_ACCESS_AND_TRACE_CHAIN').valid, true);
    assert.strictEqual(caseOne.getState().deductionIds.has('DED_EYE_NILE_ACCESS_AND_TRACE_CHAIN'), false);
    const dedKey = getCaseOneDeductionTextKey('DED_EYE_NILE_ACCESS_AND_TRACE_CHAIN');
    const localizedDedText = txx(lang, dedKey);
    assert.ok(localizedDedText && localizedDedText.length > 0, `[${lang}] no localized deduction text`);
    if (lang !== 'en') {
      assert.notStrictEqual(localizedDedText, getCaseOneDeductionText('DED_EYE_NILE_ACCESS_AND_TRACE_CHAIN'),
        `[${lang}] deduction text is not actually localized (same as English)`);
    }
    caseOne.applyDeduction('DED_EYE_NILE_ACCESS_AND_TRACE_CHAIN');
    assert.strictEqual(caseOne.getState().deductionIds.has('DED_EYE_NILE_ACCESS_AND_TRACE_CHAIN'), true);
    // Idempotency (rule from spec section 14)
    caseOne.applyDeduction('DED_EYE_NILE_ACCESS_AND_TRACE_CHAIN');
    assert.strictEqual(caseOne.getState().deductionIds.has('DED_EYE_NILE_ACCESS_AND_TRACE_CHAIN'), true);

    // --- Step 15/16: accusation gate now satisfied; accusing Maher is CORRECT ---
    assert.strictEqual(caseOne.evaluateAccusation('S_EYE_NILE_MAHER').outcome, 'CORRECT');

    // --- Step 18: no hidden truth leaked through public runtime APIs ---
    assert.strictEqual(
      JSON.stringify(caseOne.getState()).match(/culprit|truth|candidateSuspectId/i), null,
      `[${lang}] state leaks hidden truth`
    );
    assert.strictEqual(
      JSON.stringify(caseOne.getModel()).match(/candidateSuspectId|culpritHash|authoringTruthReference/i), null,
      `[${lang}] model leaks hidden truth`
    );

    // --- Regression: Case 0 untouched by Case 1 discoveries ---
    assert.strictEqual(caseZero.getState().discoveredEvidenceIds.has('E_EYE_NILE_CLOSING_ACCESS_REGISTER'), false);

    // --- Premature accusation check on a *fresh* Case 1 runtime (no discoveries yet) ---
    const freshCaseOne = createCaseRuntime(1);
    const prematureOutcome = freshCaseOne.evaluateAccusation('S_EYE_NILE_MAHER').outcome;
    assert.notStrictEqual(prematureOutcome, 'CORRECT', `[${lang}] fresh accusation should not be CORRECT`);

    console.log(`[${lang}] Case 1 full flow OK (title="${c.title}", evidence=${c.evidence.length}, ` +
      `objText="${localizedObjText.slice(0, 30)}...", dedText="${localizedDedText.slice(0, 30)}...")`);
  }

  console.log('\nAll 8 languages: Case 1 discovery -> question -> objection -> deduction -> accusation flow verified.');
}

main().catch(error => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
