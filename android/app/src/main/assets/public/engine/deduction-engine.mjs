function cloneState(state) {
  return {
    ...state,
    hypothesisStates: { ...(state.hypothesisStates || {}) },
    objectionIds: new Set(state.objectionIds || []),
    deductionIds: new Set(state.deductionIds || [])
  };
}

function getDeductionRecord(model, deductionId) {
  const deduction = (model?.deductions || []).find(item => item.id === deductionId);
  if (!deduction) throw new Error(`Unknown deduction ID: ${deductionId}`);
  return deduction;
}

function getRequirementStatus(model, state, deduction) {
  const missingEvidence = (deduction.requiredEvidenceIds || [])
    .filter(id => !state.discoveredEvidenceIds?.has(id));
  const missingStatements = (deduction.requiredStatementIds || [])
    .filter(id => !state.discoveredStatementIds?.has(id));
  const missingHypothesisStates = (deduction.requiredHypothesisStates || [])
    .filter(([hypothesisId, expectedState]) => state.hypothesisStates?.[hypothesisId] !== expectedState);
  const missingObjections = (deduction.requiredObjectionIds || [])
    .filter(id => !state.objectionIds?.has(id));
  const alreadyApplied = state.deductionIds?.has(deduction.id) || false;

  return {
    valid: missingEvidence.length === 0
      && missingStatements.length === 0
      && missingHypothesisStates.length === 0
      && missingObjections.length === 0
      && !alreadyApplied,
    missingEvidence,
    missingStatements,
    missingHypothesisStates: missingHypothesisStates.map(([hypothesisId, expectedState]) => ({ hypothesisId, expectedState })),
    missingObjections,
    alreadyApplied,
    resultingHypothesisId: deduction.resultingHypothesisId,
    resultingState: deduction.resultingState
  };
}

export function validateDeduction(model, state, deductionId) {
  if (!state || typeof state !== 'object') throw new Error('Investigation state is required.');
  return getRequirementStatus(model, {
    ...state,
    discoveredEvidenceIds: new Set(state.discoveredEvidenceIds || []),
    discoveredStatementIds: new Set(state.discoveredStatementIds || []),
    hypothesisStates: { ...(state.hypothesisStates || {}) },
    objectionIds: new Set(state.objectionIds || []),
    deductionIds: new Set(state.deductionIds || [])
  }, getDeductionRecord(model, deductionId));
}

export function getMissingDeductionRequirements(model, state, deductionId) {
  const deduction = getDeductionRecord(model, deductionId);
  const status = getRequirementStatus(model, state, deduction);
  return {
    missingEvidence: status.missingEvidence,
    missingStatements: status.missingStatements,
    missingHypothesisStates: status.missingHypothesisStates,
    missingObjections: status.missingObjections,
    alreadyApplied: status.alreadyApplied,
    valid: status.valid
  };
}

export function canApplyDeduction(model, state, deductionId) {
  return validateDeduction(model, state, deductionId).valid;
}

export function applyDeduction(model, state, deductionId) {
  const deduction = getDeductionRecord(model, deductionId);
  const validation = validateDeduction(model, state, deductionId);
  if (validation.alreadyApplied) return cloneState(state);
  if (!validation.valid) {
    throw new Error(`Deduction cannot be applied: ${deductionId}`);
  }

  const next = cloneState(state);
  next.deductionIds.add(deduction.id);
  if (deduction.resultingHypothesisId) {
    next.hypothesisStates[deduction.resultingHypothesisId] = deduction.resultingState;
  }
  return next;
}
