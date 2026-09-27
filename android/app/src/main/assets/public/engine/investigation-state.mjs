function findById(items, id, collectionName) {
  const item = (items || []).find(candidate => candidate.id === id);
  if (!item) throw new Error(`Unknown ${collectionName} ID: ${id}`);
  return item;
}

function copySet(value) {
  return new Set(value || []);
}

function cloneState(state) {
  return {
    hypothesisStates: { ...(state.hypothesisStates || {}) },
    objectionIds: copySet(state.objectionIds),
    flaggedObjectionIds: copySet(state.flaggedObjectionIds),
    deductionIds: copySet(state.deductionIds),
    selectedSuspectId: state.selectedSuspectId ?? null,
    discoveredEvidenceIds: copySet(state.discoveredEvidenceIds),
    analyzedEvidenceIds: copySet(state.analyzedEvidenceIds),
    discoveredObservationIds: copySet(state.discoveredObservationIds),
    discoveredStatementIds: copySet(state.discoveredStatementIds),
    askedQuestionIds: copySet(state.askedQuestionIds),
    accusationAttempts: [...(state.accusationAttempts || [])]
  };
}

function requireState(state) {
  if (!state || typeof state !== 'object') throw new Error('Investigation state is required.');
}

function requireArray(value, fieldName) {
  if (value === undefined || value === null) return [];
  if (!Array.isArray(value)) throw new Error(`Invalid investigation state field: ${fieldName}`);
  return value;
}

function getActorIds(model) {
  return new Set([
    model?.victimId,
    model?.accusationGate?.candidateSuspectId,
    ...(model?.statements || []).map(item => item.suspectId),
    ...(model?.observations || [])
      .filter(item => item.identifiesSuspectId)
      .map(item => item.identifiesSuspectId)
  ].filter(Boolean));
}

export function selectSuspect(model, state, suspectId) {
  requireState(state);
  if (!getActorIds(model).has(suspectId)) {
    throw new Error(`Unknown suspect ID: ${suspectId}`);
  }
  const next = cloneState(state);
  next.selectedSuspectId = suspectId;
  return next;
}

export function createInitialInvestigationState(model) {
  if (!model || !Array.isArray(model.hypotheses)) {
    throw new Error('A valid case model with hypotheses is required.');
  }
  return {
    hypothesisStates: Object.fromEntries(
      model.hypotheses.map(hypothesis => [hypothesis.id, hypothesis.initialState])
    ),
    objectionIds: new Set(),
    flaggedObjectionIds: new Set(),
    deductionIds: new Set(),
    selectedSuspectId: null,
    discoveredEvidenceIds: new Set(),
    analyzedEvidenceIds: new Set(),
    discoveredObservationIds: new Set(),
    discoveredStatementIds: new Set(),
    askedQuestionIds: new Set(),
    accusationAttempts: []
  };
}

export function discoverEvidence(model, state, evidenceId) {
  requireState(state);
  findById(model?.evidence, evidenceId, 'evidence');
  const next = cloneState(state);
  next.discoveredEvidenceIds.add(evidenceId);
  return next;
}

export function analyzeEvidence(model, state, evidenceId) {
  requireState(state);
  findById(model?.evidence, evidenceId, 'evidence');
  if (!state.discoveredEvidenceIds?.has(evidenceId)) {
    throw new Error(`Evidence must be discovered before it can be analyzed: ${evidenceId}`);
  }
  const analysis = (model?.evidenceAnalysis || []).find(candidate => candidate.evidenceId === evidenceId);
  if (!analysis) throw new Error(`Unknown evidence analysis for evidence ID: ${evidenceId}`);
  const next = cloneState(state);
  next.analyzedEvidenceIds.add(evidenceId);
  for (const observationId of analysis.unlocksObservationIds || []) {
    next.discoveredObservationIds.add(observationId);
  }
  return next;
}

function questionIsUnlocked(state, question) {
  return (question.requiredEvidenceIds || []).every(id => state.discoveredEvidenceIds.has(id))
    && (question.requiredStatementIds || []).every(id => state.discoveredStatementIds.has(id));
}

export function getUnlockedQuestionIds(model, state) {
  requireState(state);
  return (model?.questions || [])
    .filter(question => questionIsUnlocked(state, question))
    .map(question => question.id);
}

export function getUnlockedQuestionIdsForSuspect(model, state, suspectId) {
  requireState(state);
  return (model?.questions || [])
    .filter(question => question.suspectId === suspectId && questionIsUnlocked(state, question))
    .map(question => question.id);
}

export function askQuestion(model, state, questionId) {
  requireState(state);
  const question = findById(model?.questions, questionId, 'question');
  if (!questionIsUnlocked(state, question)) {
    throw new Error(`Question is locked: ${questionId}`);
  }
  const next = cloneState(state);
  next.askedQuestionIds.add(questionId);

  for (const responseId of question.responseIds || []) {
    const response = findById(model?.responses, responseId, 'response');
    if (response.producesStatementId) next.discoveredStatementIds.add(response.producesStatementId);
    if (response.producesEvidenceId) next.discoveredEvidenceIds.add(response.producesEvidenceId);
    if (response.flagsObjectionId) next.flaggedObjectionIds.add(response.flagsObjectionId);
  }
  return next;
}

export function serializeInvestigationState(state) {
  requireState(state);
  return {
    hypothesisStates: { ...(state.hypothesisStates || {}) },
    objectionIds: [...(state.objectionIds || [])],
    flaggedObjectionIds: [...(state.flaggedObjectionIds || [])],
    deductionIds: [...(state.deductionIds || [])],
    selectedSuspectId: state.selectedSuspectId ?? null,
    discoveredEvidenceIds: [...(state.discoveredEvidenceIds || [])],
    analyzedEvidenceIds: [...(state.analyzedEvidenceIds || [])],
    discoveredObservationIds: [...(state.discoveredObservationIds || [])],
    discoveredStatementIds: [...(state.discoveredStatementIds || [])],
    askedQuestionIds: [...(state.askedQuestionIds || [])],
    accusationAttempts: [...(state.accusationAttempts || [])]
  };
}

export function deserializeInvestigationState(serialized) {
  if (!serialized || typeof serialized !== 'object' || Array.isArray(serialized)) {
    throw new Error('Serialized investigation state is required.');
  }
  const accusationAttempts = requireArray(serialized.accusationAttempts, 'accusationAttempts');
  const objectionIds = requireArray(serialized.objectionIds, 'objectionIds');
  const flaggedObjectionIds = requireArray(serialized.flaggedObjectionIds, 'flaggedObjectionIds');
  const deductionIds = requireArray(serialized.deductionIds, 'deductionIds');
  const discoveredEvidenceIds = requireArray(serialized.discoveredEvidenceIds, 'discoveredEvidenceIds');
  const analyzedEvidenceIds = requireArray(serialized.analyzedEvidenceIds, 'analyzedEvidenceIds');
  const discoveredObservationIds = requireArray(serialized.discoveredObservationIds, 'discoveredObservationIds');
  const discoveredStatementIds = requireArray(serialized.discoveredStatementIds, 'discoveredStatementIds');
  const askedQuestionIds = requireArray(serialized.askedQuestionIds, 'askedQuestionIds');
  if (serialized.hypothesisStates !== undefined
      && (serialized.hypothesisStates === null || typeof serialized.hypothesisStates !== 'object' || Array.isArray(serialized.hypothesisStates))) {
    throw new Error('Invalid investigation state field: hypothesisStates');
  }
  return {
    hypothesisStates: { ...(serialized.hypothesisStates || {}) },
    objectionIds: new Set(objectionIds),
    flaggedObjectionIds: new Set(flaggedObjectionIds),
    deductionIds: new Set(deductionIds),
    selectedSuspectId: serialized.selectedSuspectId ?? null,
    discoveredEvidenceIds: new Set(discoveredEvidenceIds),
    analyzedEvidenceIds: new Set(analyzedEvidenceIds),
    discoveredObservationIds: new Set(discoveredObservationIds),
    discoveredStatementIds: new Set(discoveredStatementIds),
    askedQuestionIds: new Set(askedQuestionIds),
    accusationAttempts: [...accusationAttempts]
  };
}
