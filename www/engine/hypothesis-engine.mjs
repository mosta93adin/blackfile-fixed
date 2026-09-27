import {
  getVisibleRelationships,
  getRelationshipSources
} from './evidence-engine.mjs';

const SUPPORT_RELATION = 'supports';
const CONTRADICTION_RELATION = 'contradicts';

function getHypothesis(model, hypothesisId) {
  const hypothesis = (model?.hypotheses || []).find(item => item.id === hypothesisId);
  if (!hypothesis) throw new Error(`Unknown hypothesis ID: ${hypothesisId}`);
  return hypothesis;
}

function getHypothesisRelationships(model, hypothesisId) {
  return (model?.relationships || []).filter(relationship => relationship.to === hypothesisId);
}

function classifyRelationships(model, state, hypothesisId) {
  const authoredRelationships = getHypothesisRelationships(model, hypothesisId);
  const visibleRelationships = new Map(
    getVisibleRelationships(model, state).map(relationship => [relationship.id, relationship])
  );
  const supportingRelationshipIds = [];
  const contradictingRelationshipIds = [];
  const hiddenRelationshipIds = [];

  for (const relationship of authoredRelationships) {
    if (!visibleRelationships.has(relationship.id)) {
      hiddenRelationshipIds.push(relationship.id);
      continue;
    }
    if (relationship.relation === SUPPORT_RELATION) {
      supportingRelationshipIds.push(relationship.id);
    } else if (relationship.relation === CONTRADICTION_RELATION) {
      contradictingRelationshipIds.push(relationship.id);
    }
  }

  return {
    supportingRelationshipIds,
    contradictingRelationshipIds,
    hiddenRelationshipIds
  };
}

export function evaluateHypothesis(model, state, hypothesisId) {
  const hypothesis = getHypothesis(model, hypothesisId);
  if (!state || typeof state !== 'object') throw new Error('Investigation state is required.');

  const authoredRelationships = getHypothesisRelationships(model, hypothesisId);
  for (const relationship of authoredRelationships) {
    getRelationshipSources(model, relationship.id);
  }

  const {
    supportingRelationshipIds,
    contradictingRelationshipIds,
    hiddenRelationshipIds
  } = classifyRelationships(model, state, hypothesisId);

  let nextState = hypothesis.initialState;
  if (contradictingRelationshipIds.length > 0) {
    nextState = 'POSSIBLE_CONTRADICTION';
  } else if (supportingRelationshipIds.length > 0) {
    nextState = 'SUPPORTED';
  }

  return {
    hypothesisId,
    state: nextState,
    supportingRelationshipIds,
    contradictingRelationshipIds,
    missingRequirements: hiddenRelationshipIds,
    reasons: [
      ...supportingRelationshipIds.map(id => `Visible supporting relationship: ${id}`),
      ...contradictingRelationshipIds.map(id => `Visible contradicting relationship: ${id}`),
      ...hiddenRelationshipIds.map(id => `Relationship is not currently visible: ${id}`)
    ]
  };
}

export function evaluateAllHypotheses(model, state) {
  return (model?.hypotheses || []).map(hypothesis =>
    evaluateHypothesis(model, state, hypothesis.id)
  );
}

export function getHypothesisState(model, state, hypothesisId) {
  return evaluateHypothesis(model, state, hypothesisId).state;
}

export function recomputeHypothesisStates(model, state) {
  if (!state || typeof state !== 'object') throw new Error('Investigation state is required.');
  const evaluations = evaluateAllHypotheses(model, state);
  return {
    ...state,
    hypothesisStates: Object.fromEntries(
      evaluations.map(evaluation => [evaluation.hypothesisId, evaluation.state])
    )
  };
}
