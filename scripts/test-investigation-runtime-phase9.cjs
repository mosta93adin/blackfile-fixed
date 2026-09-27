const assert = require('assert');

(async () => {
  const { CASE_MANOR_01_MODEL: model, CASE_EYE_NILE_01_MODEL: caseOneModel } =
    await import('../www/engine/investigation-model.mjs');
  const { createInvestigationRuntime } =
    await import('../www/engine/investigation-runtime.mjs');

  const runtimeCaseTwo = createInvestigationRuntime(2);
  assert.strictEqual(runtimeCaseTwo.getCaseId(), 'CASE_02');
  assert.strictEqual(runtimeCaseTwo.getModel().accusationGate, undefined);
  assert.throws(() => createInvestigationRuntime('CASE_UNKNOWN'), /Unknown case ID/);

  const runtimeA = createInvestigationRuntime(0);
  const runtimeB = createInvestigationRuntime('CASE_MANOR_01');
  const runtimeC = createInvestigationRuntime(1);
  assert.strictEqual(runtimeA.getCaseId(), model.id);
  assert.strictEqual(runtimeB.getCaseId(), model.id);
  assert.strictEqual(runtimeC.getCaseId(), caseOneModel.id);
  assert.notStrictEqual(runtimeA.getModel(), model);
  assert.strictEqual(runtimeA.getModel().id, model.id);
  assert.strictEqual(Object.isFrozen(runtimeA.getModel().evidence[0]), true);
  assert.strictEqual(runtimeC.getModel().id, caseOneModel.id);
  assert.strictEqual(runtimeC.getModel().accusationGate, undefined);
  assert.strictEqual(JSON.stringify(runtimeC.getModel()).includes('candidateSuspectId'), false);
  assert.deepStrictEqual([...runtimeA.getState().discoveredEvidenceIds], []);
  assert.deepStrictEqual([...runtimeA.getState().objectionIds], []);
  assert.deepStrictEqual(runtimeA.getState().accusationAttempts, []);

  const untouchedModel = JSON.stringify(model);
  const initialB = runtimeB.getState();
  const discovered = runtimeA.discoverEvidence('E_MANOR_DAGGER');
  assert.ok(discovered.state.discoveredEvidenceIds.has('E_MANOR_DAGGER'));
  assert.strictEqual(runtimeA.getState().discoveredEvidenceIds.has('E_MANOR_DAGGER'), true);
  assert.strictEqual(runtimeB.getState().discoveredEvidenceIds.size, 0);
  assert.strictEqual(initialB.discoveredEvidenceIds.size, 0);
  assert.strictEqual(JSON.stringify(model), untouchedModel);
  const exposedState = runtimeA.getState();
  exposedState.discoveredEvidenceIds.add('E_MANOR_LETTER');
  assert.strictEqual(runtimeA.getState().discoveredEvidenceIds.has('E_MANOR_LETTER'), false);

  assert.strictEqual(runtimeA.getVisibleRelationships().some(r => r.id === 'R_MANOR_006'), true);
  assert.strictEqual(runtimeA.getVisibleRelationships().some(r => r.id === 'R_MANOR_027'), false);
  assert.strictEqual(
    runtimeA.getHypotheses().find(h => h.hypothesisId === 'H_MANOR_DAGGER_WEAPON').state,
    'SUPPORTED'
  );

  const locked = runtimeA.getUnlockedQuestions('S_MANOR_FATIMA');
  assert.strictEqual(locked.some(q => q.id === 'Q_FATIMA_YAHYA_OBSERVATION'), false);
  assert.deepStrictEqual(runtimeA.getEligibleObjections(), []);
  assert.throws(
    () => runtimeA.askQuestion('S_MANOR_SALMA', 'Q_YAHYA_BALCONY'),
    /does not belong/
  );
  const questionResult = runtimeA.askQuestion('S_MANOR_SALMA', 'Q_SALMA_ROOM');
  assert.ok(questionResult.state.askedQuestionIds.has('Q_SALMA_ROOM'));
  assert.ok(questionResult.state.discoveredStatementIds.has('ST_SALMA_01'));
  assert.strictEqual(runtimeA.getState().askedQuestionIds.has('Q_SALMA_ROOM'), true);
  assert.strictEqual(runtimeA.getState().discoveredStatementIds.has('ST_SALMA_01'), true);

  runtimeA.discoverEvidence('E_MANOR_ACCESS_LOG');
  runtimeA.discoverEvidence('E_MANOR_CAMERA');
  runtimeA.analyzeEvidence('E_MANOR_CAMERA');
  runtimeA.askQuestion('S_MANOR_FATIMA', 'Q_FATIMA_YAHYA_OBSERVATION');
  runtimeA.askQuestion('S_MANOR_YAHYA', 'Q_YAHYA_BALCONY');
  assert.deepStrictEqual(runtimeA.getEligibleObjections(), ['OBJ_MANOR_YAHYA_BALCONY']);
  const objectionResult = runtimeA.applyObjection('OBJ_MANOR_YAHYA_BALCONY');
  assert.ok(objectionResult.state.objectionIds.has('OBJ_MANOR_YAHYA_BALCONY'));
  assert.strictEqual(runtimeA.getState().objectionIds.size, 1);

  const premature = runtimeB.evaluateAccusation('S_MANOR_YAHYA');
  assert.strictEqual(premature.outcome, 'PREMATURE');
  assert.ok(!JSON.stringify(premature).includes('candidateSuspectId'));
  assert.ok(!JSON.stringify(premature).toLowerCase().includes('culprit'));
  const accusationResult = runtimeB.applyAccusation('S_MANOR_YAHYA');
  assert.strictEqual(accusationResult.result.outcome, 'PREMATURE');
  assert.strictEqual(accusationResult.state.accusationAttempts.length, 1);
  assert.strictEqual(runtimeB.getState().accusationAttempts.length, 1);
  assert.strictEqual(JSON.stringify(model), untouchedModel);
  assert.strictEqual(runtimeC.getModel().id, 'CASE_EYE_NILE_01');
  console.log('Phase 9 investigation runtime checks passed.');
})().catch(error => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
