const assert = require('assert');
const fs = require('fs');
const crypto = require('crypto');
const { execFileSync } = require('child_process');

(async () => {
  const modelModule = await import('../www/investigation-model.mjs');
  const {
    CASE_MANOR_01_MODEL,
    HYPOTHESIS_STATES,
    createInitialInvestigationState,
    evaluateAccusationGate,
    getCaseModel,
    validateCaseModel
  } = modelModule;

  const model = getCaseModel('CASE_MANOR_01');
  assert.strictEqual(model, CASE_MANOR_01_MODEL);
  assert.strictEqual(model.evidence.length, 6);
  assert.deepStrictEqual(model.evidenceIds, [
    'E_MANOR_DAGGER',
    'E_MANOR_LETTER',
    'E_MANOR_FOOTPRINT',
    'E_MANOR_WATCH',
    'E_MANOR_CAMERA',
    'E_MANOR_ACCESS_LOG'
  ]);
  assert.ok(validateCaseModel(model).valid, validateCaseModel(model).errors.join('\n'));

  for (const evidence of model.evidence) {
    assert.ok(evidence.id);
    assert.ok(evidence.observationKey);
    assert.strictEqual(typeof evidence.observationKey, 'string');
    assert.ok(!evidence.observationKey.includes('Yahya killed Karim'));
  }
  assert.ok(model.statements.every(statement => statement.id && statement.suspectId && statement.textKey));
  assert.ok(model.relationships.every(relationship => relationship.from && relationship.to && relationship.relation));
  assert.ok(model.hypotheses.every(hypothesis => hypothesis.id && hypothesis.initialState === HYPOTHESIS_STATES.INSUFFICIENT));

  const forensicObservation = model.observations.find(
    observation => observation.id === 'OBS_MANOR_DAGGER_FORENSICS'
  );
  assert.ok(forensicObservation);
  assert.ok(!JSON.stringify(forensicObservation).includes('Yahya killed Karim'));
  assert.ok(model.relationships.some(relationship =>
    relationship.id === 'R_MANOR_013' && relationship.to === 'S_MANOR_YAHYA'
  ));

  const modelText = fs.readFileSync('www/investigation-model.mjs', 'utf8');
  assert.ok(!modelText.includes('culpritHash'));
  assert.ok(!modelText.includes('SUPPORTED: true'));
  assert.strictEqual(model.hypotheses.find(h => h.id === 'H_MANOR_RESPONSIBILITY').initialState, HYPOTHESIS_STATES.INSUFFICIENT);

  const initialState = createInitialInvestigationState(model);
  assert.strictEqual(evaluateAccusationGate(model, initialState), false);
  const readyState = {
    selectedSuspectId: 'S_MANOR_YAHYA',
    objectionIds: ['OBJ_MANOR_YAHYA_BALCONY'],
    deductionIds: ['DED_MANOR_YAHYA_RESPONSIBILITY'],
    hypothesisStates: Object.fromEntries(model.accusationGate.requiredHypotheses)
  };
  assert.strictEqual(evaluateAccusationGate(model, readyState), true);
  assert.strictEqual(evaluateAccusationGate(model, { ...readyState, selectedSuspectId: 'S_MANOR_SALMA' }), false);

  const hashSource = fs.readFileSync('scripts/hash.js', 'utf8');
  const appSource = fs.readFileSync('www/app.js', 'utf8');
  assert.strictEqual(hashSource.match(/const SALT = '([^']*)'/)[1], appSource.match(/const CULPRIT_SALT = '([^']*)'/)[1]);
  assert.ok(fs.readFileSync('www/invite.js', 'utf8').includes("import { db, auth as firebaseAuth } from './firebase.js';"));

  const translationsSource = fs.readFileSync('www/translations.js', 'utf8');
  const context = {};
  const vm = require('vm');
  vm.createContext(context);
  vm.runInContext(`${translationsSource}\nthis.TRANSLATIONS = TRANSLATIONS;`, context);
  const salt = hashSource.match(/const SALT = '([^']*)'/)[1];
  let total = 0;
  let mismatches = 0;
  for (const data of Object.values(context.TRANSLATIONS)) {
    for (const currentCase of data.cases || []) {
      total++;
      const matchingSuspects = (currentCase.suspects || []).filter(suspect => {
        const hash = crypto.createHash('sha256')
          .update(salt + suspect.name.trim().toLowerCase())
          .digest('hex');
        return hash === currentCase.culpritHash;
      });
      if (matchingSuspects.length !== 1) mismatches++;
    }
  }
  assert.strictEqual(total, 160);
  assert.strictEqual(mismatches, 0);

  execFileSync(process.execPath, ['--check', 'www/app.js'], { stdio: 'ignore' });
  execFileSync(process.execPath, ['--check', 'www/invite.js'], { stdio: 'ignore' });
  console.log('Investigation model checks passed.');
})().catch(error => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
