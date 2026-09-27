const assert = require('assert');
(async () => {
  const modelModule = await import('../www/engine/investigation-model.mjs');
  const loader = await import('../www/engine/case-loader.mjs');
  const dispatch = await import('../www/engine/case-dispatch.mjs');
  const runtimeModule = await import('../www/engine/investigation-runtime.mjs');
  const model = modelModule.getCaseModel(2);
  assert.ok(model);
  assert.deepStrictEqual(modelModule.validateCaseModel(model), { valid: true, errors: [] });
  assert.strictEqual(loader.isInvestigationCase(2), true);
  assert.strictEqual(dispatch.getCaseMode(2), 'investigation');
  const runtime = runtimeModule.createInvestigationRuntime(2);
  assert.strictEqual(runtime.getModel().accusationGate, undefined);
  assert.strictEqual(JSON.stringify(runtime.getModel()).includes('authoringTruthReference'), false);
  assert.strictEqual(runtime.applyAccusation('S_CASE_2_1').result.outcome, 'PREMATURE');
  for (const evidenceId of model.evidenceIds) {
    runtime.discoverEvidence(evidenceId);
    runtime.analyzeEvidence(evidenceId);
  }
  const questions = runtime.getUnlockedQuestions('S_CASE_2_1');
  assert.strictEqual(questions.length, 4);
  for (const question of questions) runtime.askQuestion('S_CASE_2_1', question.id);
  assert.strictEqual(runtime.getState().objectionIds.size, 0);
  assert.deepStrictEqual(runtime.getEligibleObjections(), ['OBJ_CASE_2_ZIAD_CAR_DENIAL']);
  runtime.applyObjection('OBJ_CASE_2_ZIAD_CAR_DENIAL');
  assert.strictEqual(runtime.getDeductionStatus('DED_CASE_2_ZIAD_RESPONSIBILITY').valid, true);
  runtime.applyDeduction('DED_CASE_2_ZIAD_RESPONSIBILITY');
  assert.strictEqual(runtime.applyAccusation('S_CASE_2_1').result.outcome, 'CORRECT');
  console.log('Case 2 full investigation flow passed.');
})().catch(error => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
