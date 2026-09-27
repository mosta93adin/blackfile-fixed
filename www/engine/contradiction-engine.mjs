import { isRelationshipVisible } from './evidence-engine.mjs';

function findById(items, id, collectionName) {
  const item = (items || []).find(candidate => candidate.id === id);
  if (!item) throw new Error(`Unknown ${collectionName} ID: ${id}`);
  return item;
}

function getObjectionReferences(model, objection) {
  findById(model?.statements, objection.statementId, 'statement');
  for (const evidenceId of objection.evidenceIds || []) {
    findById(model?.evidence, evidenceId, 'evidence');
  }
  if (objection.relationshipId) {
    findById(model?.relationships, objection.relationshipId, 'relationship');
  }
  findById(model?.hypotheses, objection.resultingHypothesisId, 'hypothesis');
}

function cloneState(state) {
  return {
    ...state,
    hypothesisStates: { ...(state.hypothesisStates || {}) },
    objectionIds: new Set(state.objectionIds || []),
    deductionIds: new Set(state.deductionIds || []),
    discoveredEvidenceIds: new Set(state.discoveredEvidenceIds || []),
    analyzedEvidenceIds: new Set(state.analyzedEvidenceIds || []),
    discoveredObservationIds: new Set(state.discoveredObservationIds || []),
    discoveredStatementIds: new Set(state.discoveredStatementIds || []),
    askedQuestionIds: new Set(state.askedQuestionIds || []),
    accusationAttempts: [...(state.accusationAttempts || [])]
  };
}

export function getObjection(model, objectionId) {
  const objection = findById(model?.objections, objectionId, 'objection');
  getObjectionReferences(model, objection);
  return objection;
}

function evaluateObjection(model, state, objectionId) {
  const objection = getObjection(model, objectionId);
  if (!state || typeof state !== 'object') throw new Error('Investigation state is required.');

  const missingEvidenceIds = (objection.evidenceIds || [])
    .filter(id => !state.discoveredEvidenceIds?.has(id));
  const missingStatementIds = state.discoveredStatementIds?.has(objection.statementId)
    ? []
    : [objection.statementId];
  const relationshipVisible = objection.relationshipId
    ? isRelationshipVisible(model, state, objection.relationshipId)
    : true;
  const alreadySurfaced = state.objectionIds?.has(objection.id) || false;
  const valid = missingEvidenceIds.length === 0
    && missingStatementIds.length === 0
    && relationshipVisible
    && !alreadySurfaced;

  return {
    valid,
    objectionId: objection.id,
    missingEvidenceIds,
    missingStatementIds,
    hiddenRelationshipIds: relationshipVisible || !objection.relationshipId
      ? []
      : [objection.relationshipId],
    alreadySurfaced,
    validationKey: objection.validationKey,
    resultingHypothesisId: objection.resultingHypothesisId,
    resultingState: objection.resultingState
  };
}

export function canSurfaceObjection(model, state, objectionId) {
  return evaluateObjection(model, state, objectionId).valid;
}

export function getAvailableObjectionIds(model, state) {
  return (model?.objections || [])
    .filter(objection => canSurfaceObjection(model, state, objection.id))
    .map(objection => objection.id);
}

export function validateObjection(model, state, objectionId) {
  return evaluateObjection(model, state, objectionId);
}

export function applyObjection(model, state, objectionId) {
  const validation = validateObjection(model, state, objectionId);
  if (!validation.valid) {
    throw new Error(`Objection cannot be applied: ${objectionId}`);
  }
  const next = cloneState(state);
  next.objectionIds.add(objectionId);
  next.hypothesisStates[validation.resultingHypothesisId] = validation.resultingState;
  return next;
}
