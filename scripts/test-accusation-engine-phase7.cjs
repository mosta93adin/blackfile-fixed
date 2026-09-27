const assert = require('assert');

(async () => {
  const { CASE_MANOR_01_MODEL: model, HYPOTHESIS_STATES } =
    await import('../www/engine/investigation-model.mjs');
  const stateModule = await import('../www/engine/investigation-state.mjs');
  const engine = await import('../www/engine/accusation-engine.mjs');
  const { createInitialInvestigationState } = stateModule;
  const {
    OUTCOMES,
    applyAccusation,
    canAccuse,
    evaluateAccusation,
    evaluateAccusationGate,
    getMissingAccusationRequirements
  } = engine;

  const gate = model.accusationGate;
  assert.deepStrictEqual(gate.requiredHypotheses, [
    ['H_MANOR_DAGGER_WEAPON', HYPOTHESIS_STATES.SUPPORTED],
    ['H_MANOR_FATAL_TIME', HYPOTHESIS_STATES.SUPPORTED],
    ['H_MANOR_YAHYA_PRESENCE', HYPOTHESIS_STATES.SUPPORTED],
    ['H_MANOR_MURDER_TIME_WEAPON_CONTACT', HYPOTHESIS_STATES.SUPPORTED],
    ['H_MANOR_BALCONY_ALIBI', HYPOTHESIS_STATES.POSSIBLE_CONTRADICTION],
    ['H_MANOR_FINANCIAL_CONFLICT', HYPOTHESIS_STATES.SUPPORTED]
  ]);
  assert.deepStrictEqual(gate.requiredObjectionIds, ['OBJ_MANOR_YAHYA_BALCONY']);
  assert.deepStrictEqual(gate.requiredDeductionIds, ['DED_MANOR_YAHYA_RESPONSIBILITY']);
  assert.strictEqual(gate.candidateSuspectId, 'S_MANOR_YAHYA');

  const initial = createInitialInvestigationState(model);
  const initialGate = evaluateAccusationGate(model, initial);
  assert.strictEqual(initialGate.canAccuse, false);
  assert.ok(initialGate.missingRequirements.includes('H_MANOR_DAGGER_WEAPON:SUPPORTED'));
  assert.ok(initialGate.missingRequirements.includes('OBJ_MANOR_YAHYA_BALCONY'));
  assert.ok(initialGate.missingRequirements.includes('DED_MANOR_YAHYA_RESPONSIBILITY'));
  assert.deepStrictEqual(getMissingAccusationRequirements(model, initial), initialGate.missingRequirements);
  assert.strictEqual(canAccuse(model, initial), false);
  assert.strictEqual(initialGate.candidateSuspectId, undefined);
  assert.throws(() => evaluateAccusation(model, initial, 'S_UNKNOWN'), /Unknown suspect ID/);
  assert.strictEqual(evaluateAccusation(model, initial, 'S_MANOR_SALMA').outcome, OUTCOMES.PREMATURE);

  const ready = {
    ...initial,
    hypothesisStates: {
      ...initial.hypothesisStates,
      H_MANOR_DAGGER_WEAPON: HYPOTHESIS_STATES.SUPPORTED,
      H_MANOR_FATAL_TIME: HYPOTHESIS_STATES.SUPPORTED,
      H_MANOR_YAHYA_PRESENCE: HYPOTHESIS_STATES.SUPPORTED,
      H_MANOR_MURDER_TIME_WEAPON_CONTACT: HYPOTHESIS_STATES.SUPPORTED,
      H_MANOR_BALCONY_ALIBI: HYPOTHESIS_STATES.POSSIBLE_CONTRADICTION,
      H_MANOR_FINANCIAL_CONFLICT: HYPOTHESIS_STATES.SUPPORTED
    },
    objectionIds: new Set(['OBJ_MANOR_YAHYA_BALCONY']),
    deductionIds: new Set(['DED_MANOR_YAHYA_RESPONSIBILITY'])
  };
  // Gate readiness depends on investigation requirements, not which suspect tile is currently selected in the UI.
  assert.strictEqual(evaluateAccusationGate(model, ready).canAccuse, true);
  const readyWithCandidate = { ...ready, selectedSuspectId: 'S_MANOR_YAHYA' };
  assert.strictEqual(evaluateAccusationGate(model, readyWithCandidate).canAccuse, true);
  assert.strictEqual(canAccuse(model, readyWithCandidate), true);
  assert.strictEqual(evaluateAccusation(model, ready, 'S_MANOR_SALMA').outcome, OUTCOMES.INCORRECT);
  assert.strictEqual(evaluateAccusation(model, ready, 'S_MANOR_YAHYA').outcome, OUTCOMES.CORRECT);
  assert.strictEqual(evaluateAccusation(model, ready, 'S_MANOR_YAHYA').candidateSuspectId, undefined);
  assert.strictEqual(evaluateAccusation(model, ready, 'S_MANOR_YAHYA').culpritId, undefined);
  assert.ok(!JSON.stringify(evaluateAccusation(model, initial, 'S_MANOR_YAHYA')).includes('S_MANOR_YAHYA'));

  const modelSnapshot = JSON.stringify(model);
  const prematureApplied = applyAccusation(model, initial, 'S_MANOR_YAHYA');
  assert.notStrictEqual(prematureApplied.state, initial);
  assert.strictEqual(prematureApplied.result.outcome, OUTCOMES.PREMATURE);
  assert.strictEqual(prematureApplied.state.accusationAttempts.length, 1);
  assert.deepStrictEqual(prematureApplied.state.accusationAttempts[0], {
    suspectId: 'S_MANOR_YAHYA',
    outcome: OUTCOMES.PREMATURE
  });
  assert.strictEqual(initial.accusationAttempts.length, 0);
  assert.strictEqual(initial.discoveredEvidenceIds.size, 0);

  const correctApplied = applyAccusation(model, readyWithCandidate, 'S_MANOR_YAHYA');
  assert.strictEqual(correctApplied.result.outcome, OUTCOMES.CORRECT);
  assert.strictEqual(correctApplied.state.accusationAttempts.length, 1);
  assert.ok(correctApplied.state.objectionIds.has('OBJ_MANOR_YAHYA_BALCONY'));
  assert.strictEqual(correctApplied.state.hypothesisStates.H_MANOR_DAGGER_WEAPON, HYPOTHESIS_STATES.SUPPORTED);
  const repeated = applyAccusation(model, correctApplied.state, 'S_MANOR_YAHYA');
  assert.strictEqual(repeated.state.accusationAttempts.length, 2);
  assert.strictEqual(repeated.state.accusationAttempts[1].outcome, OUTCOMES.CORRECT);
  assert.strictEqual(JSON.stringify(model), modelSnapshot);
  assert.ok(!JSON.stringify(correctApplied.result).toLowerCase().includes('culprit'));
  assert.ok(!JSON.stringify(correctApplied.result).toLowerCase().includes('hash'));
  assert.strictEqual(Object.values(OUTCOMES).includes(OUTCOMES.UNSUPPORTED), true);
  console.log('Phase 7 accusation engine checks passed.');
})().catch(error => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
