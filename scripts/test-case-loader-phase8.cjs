const assert = require('assert');

(async () => {
  const modelModule = await import('../www/engine/investigation-model.mjs');
  const loader = await import('../www/engine/case-loader.mjs');
  const model = modelModule.CASE_MANOR_01_MODEL;
  const caseOneModel = modelModule.CASE_EYE_NILE_01_MODEL;

  assert.strictEqual(loader.CASE_ZERO_ID, 'CASE_MANOR_01');
  assert.strictEqual(loader.isInvestigationCase(0), true);
  assert.strictEqual(loader.isInvestigationCase('CASE_MANOR_01'), true);
  assert.strictEqual(loader.isInvestigationCase(1), true);
  assert.strictEqual(loader.isInvestigationCase('CASE_EYE_NILE_01'), true);
  assert.strictEqual(loader.isInvestigationCase(2), true);
  for (let caseIndex = 2; caseIndex <= 19; caseIndex++) {
    assert.strictEqual(loader.isInvestigationCase(caseIndex), true);
  }
  assert.strictEqual(loader.isInvestigationCase('CASE_UNKNOWN'), false);
  assert.strictEqual(loader.isInvestigationCase(null), false);
  assert.strictEqual(loader.isInvestigationCase(undefined), false);

  assert.strictEqual(loader.loadInvestigationCase(0), model);
  assert.strictEqual(loader.loadInvestigationCase('CASE_MANOR_01'), model);
  assert.strictEqual(loader.loadInvestigationCase(1), caseOneModel);
  assert.strictEqual(loader.loadInvestigationCase('CASE_EYE_NILE_01'), caseOneModel);
  assert.strictEqual(loader.loadInvestigationCase(0), loader.loadInvestigationCase(0));
  assert.ok(loader.loadInvestigationCase(2));
  assert.throws(() => loader.loadInvestigationCase('CASE_UNKNOWN'), /Unknown case ID/);
  assert.throws(() => loader.loadInvestigationCase(null), /Case ID is required/);
  assert.throws(() => loader.loadInvestigationCase({}), /Invalid case ID/);

  const stateA = loader.createInvestigationState(0);
  const stateB = loader.createInvestigationState('CASE_MANOR_01');
  const stateC = loader.createInvestigationState(1);
  assert.deepStrictEqual(stateA.hypothesisStates, stateB.hypothesisStates);
  assert.notDeepStrictEqual(stateA.hypothesisStates, stateC.hypothesisStates);
  assert.deepStrictEqual([...stateA.discoveredEvidenceIds], []);
  assert.deepStrictEqual([...stateC.discoveredEvidenceIds], []);
  assert.deepStrictEqual([...stateA.discoveredStatementIds], []);
  assert.deepStrictEqual([...stateA.objectionIds], []);
  assert.deepStrictEqual([...stateA.deductionIds], []);
  assert.deepStrictEqual([...stateA.askedQuestionIds], []);
  assert.deepStrictEqual(stateA.accusationAttempts, []);
  assert.strictEqual(stateA.selectedSuspectId, null);
  stateA.discoveredEvidenceIds.add('E_MANOR_DAGGER');
  stateA.accusationAttempts.push({ suspectId: 'S_MANOR_SALMA', outcome: 'PREMATURE' });
  assert.strictEqual(stateB.discoveredEvidenceIds.size, 0);
  assert.strictEqual(stateB.accusationAttempts.length, 0);

  const modelSnapshot = JSON.stringify(model);
  assert.strictEqual(loader.loadInvestigationCase(0), model);
  assert.strictEqual(JSON.stringify(model), modelSnapshot);

  const publicResults = [
    loader.isInvestigationCase(0),
    loader.isInvestigationCase(1),
    loader.CASE_ZERO_ID
  ];
  assert.ok(!JSON.stringify(publicResults).includes('candidateSuspectId'));
  assert.ok(!JSON.stringify(publicResults).includes('culprit'));
  assert.ok(!JSON.stringify(publicResults).includes('truth'));
  console.log('Phase 8 case loader checks passed.');
})().catch(error => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
