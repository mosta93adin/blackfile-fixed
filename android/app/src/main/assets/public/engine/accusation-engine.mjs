const OUTCOMES = Object.freeze({
  PREMATURE: 'PREMATURE',
  INCORRECT: 'INCORRECT',
  UNSUPPORTED: 'UNSUPPORTED',
  CORRECT: 'CORRECT'
});

function findActorIds(model) {
  return new Set([
    model?.victimId,
    model?.accusationGate?.candidateSuspectId,
    ...(model?.statements || []).map(statement => statement.suspectId),
    ...(model?.observations || [])
      .filter(observation => observation.identifiesSuspectId)
      .map(observation => observation.identifiesSuspectId)
  ].filter(Boolean));
}

function getGate(model) {
  const gate = model?.accusationGate;
  if (!gate || !Array.isArray(gate.requiredHypotheses)
    || !Array.isArray(gate.requiredObjectionIds)
    || !Array.isArray(gate.requiredDeductionIds)
    || typeof gate.candidateSuspectId !== 'string') {
    throw new Error('Malformed accusation gate.');
  }
  return gate;
}

function getMissingRequirements(model, state) {
  const gate = getGate(model);
  const missingRequirements = [];
  const satisfiedRequirements = [];
  for (const [hypothesisId, expectedState] of gate.requiredHypotheses) {
    const requirement = `${hypothesisId}:${expectedState}`;
    if (state.hypothesisStates?.[hypothesisId] === expectedState) {
      satisfiedRequirements.push(requirement);
    } else {
      missingRequirements.push(requirement);
    }
  }
  for (const objectionId of gate.requiredObjectionIds) {
    if (state.objectionIds?.has(objectionId)) satisfiedRequirements.push(objectionId);
    else missingRequirements.push(objectionId);
  }
  for (const deductionId of gate.requiredDeductionIds) {
    if (state.deductionIds?.has(deductionId)) satisfiedRequirements.push(deductionId);
    else missingRequirements.push(deductionId);
  }
  return { missingRequirements, satisfiedRequirements };
}

function validateSuspect(model, suspectId) {
  if (!findActorIds(model).has(suspectId)) {
    throw new Error(`Unknown suspect ID: ${suspectId}`);
  }
}

export function evaluateAccusationGate(model, state) {
  if (!state || typeof state !== 'object') throw new Error('Investigation state is required.');
  const { missingRequirements, satisfiedRequirements } = getMissingRequirements(model, state);
  return {
    canAccuse: missingRequirements.length === 0,
    missingRequirements,
    satisfiedRequirements
  };
}

export function getMissingAccusationRequirements(model, state) {
  return evaluateAccusationGate(model, state).missingRequirements;
}

export function canAccuse(model, state) {
  return evaluateAccusationGate(model, state).canAccuse;
}

export function evaluateAccusation(model, state, suspectId) {
  validateSuspect(model, suspectId);
  const gate = evaluateAccusationGate(model, state);
  if (!gate.canAccuse) {
    return {
      outcome: OUTCOMES.PREMATURE,
      canAccuse: false,
      missingRequirements: gate.missingRequirements,
      satisfiedRequirements: gate.satisfiedRequirements
    };
  }
  const candidateSuspectId = getGate(model).candidateSuspectId;
  return {
    outcome: suspectId === candidateSuspectId ? OUTCOMES.CORRECT : OUTCOMES.INCORRECT,
    canAccuse: true,
    missingRequirements: [],
    satisfiedRequirements: gate.satisfiedRequirements
  };
}

export function applyAccusation(model, state, suspectId) {
  if (!state || typeof state !== 'object') throw new Error('Investigation state is required.');
  const result = evaluateAccusation(model, state, suspectId);
  const next = {
    ...state,
    hypothesisStates: { ...(state.hypothesisStates || {}) },
    objectionIds: new Set(state.objectionIds || []),
    deductionIds: new Set(state.deductionIds || []),
    discoveredEvidenceIds: new Set(state.discoveredEvidenceIds || []),
    analyzedEvidenceIds: new Set(state.analyzedEvidenceIds || []),
    discoveredObservationIds: new Set(state.discoveredObservationIds || []),
    discoveredStatementIds: new Set(state.discoveredStatementIds || []),
    askedQuestionIds: new Set(state.askedQuestionIds || []),
    accusationAttempts: [
      ...(state.accusationAttempts || []),
      { suspectId, outcome: result.outcome }
    ]
  };
  return { state: next, result };
}

export { OUTCOMES };
