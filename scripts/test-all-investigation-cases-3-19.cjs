const assert = require('assert');
const culpritIndexes = Object.freeze({2:0,3:1,4:2,5:0,6:2,7:1,8:2,9:0,10:1,11:3,12:0,13:2,14:1,15:0,16:0,17:0,18:2,19:0});

(async () => {
  const modelModule = await import('../www/engine/investigation-model.mjs');
  const loader = await import('../www/engine/case-loader.mjs');
  const dispatch = await import('../www/engine/case-dispatch.mjs');
  const runtimeModule = await import('../www/engine/investigation-runtime.mjs');

  for (let caseIndex = 2; caseIndex <= 19; caseIndex += 1) {
    const model = modelModule.getCaseModel(caseIndex);
    assert.ok(model, `missing model for Case ${caseIndex}`);
    const validation = modelModule.validateCaseModel(model);
    assert.deepStrictEqual(validation, { valid: true, errors: [] }, `invalid Case ${caseIndex}: ${validation.errors.join('; ')}`);
    assert.strictEqual(loader.isInvestigationCase(caseIndex), true);
    assert.strictEqual(dispatch.getCaseMode(caseIndex), 'investigation');

    const runtime = runtimeModule.createInvestigationRuntime(caseIndex);
    assert.strictEqual(runtime.getCaseId(), model.id);
    assert.strictEqual(runtime.getModel().accusationGate, undefined);
    assert.strictEqual(JSON.stringify(runtime.getModel()).includes('candidateSuspectId'), false);
    assert.strictEqual(JSON.stringify(runtime.getModel()).includes('authoringTruthReference'), false);

    const culpritId = model.suspectIds[culpritIndexes[caseIndex]];
    const wrongId = model.suspectIds.find(id => id !== culpritId);

    const premature = runtime.applyAccusation(culpritId);
    assert.strictEqual(premature.result.outcome, 'PREMATURE', `Case ${caseIndex} should begin premature`);

    for (const evidenceId of model.evidenceIds) {
      runtime.discoverEvidence(evidenceId);
      runtime.analyzeEvidence(evidenceId);
    }

    const challengeQuestions = runtime.getUnlockedQuestions(culpritId);
    assert.ok(challengeQuestions.length >= 4, `Case ${caseIndex} did not unlock authored challenge question`);
    for (const question of challengeQuestions) runtime.askQuestion(culpritId, question.id);

    assert.deepStrictEqual(runtime.getState().objectionIds.size, 0, `Case ${caseIndex} auto-applied an objection`);
    const eligible = runtime.getEligibleObjections();
    assert.strictEqual(eligible.length, 1, `Case ${caseIndex} should expose exactly one objection`);
    runtime.applyObjection(eligible[0]);

    const deductionId = model.deductions[0].id;
    const deductionStatus = runtime.getDeductionStatus(deductionId);
    assert.strictEqual(deductionStatus.valid, true, `Case ${caseIndex} deduction not ready`);
    runtime.applyDeduction(deductionId);
    runtime.applyDeduction(deductionId); // idempotence

    const correct = runtime.applyAccusation(culpritId);
    assert.strictEqual(correct.result.outcome, 'CORRECT', `Case ${caseIndex} correct accusation failed`);

    const wrong = runtime.applyAccusation(wrongId);
    assert.strictEqual(wrong.result.outcome, 'INCORRECT', `Case ${caseIndex} wrong accusation failed`);
  }

  console.log('Cases 2–19 full investigation-flow checks passed.');
})().catch(error => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
