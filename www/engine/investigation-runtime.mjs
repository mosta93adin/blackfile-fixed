import {
  discoverEvidence as discoverEvidenceState,
  analyzeEvidence as analyzeEvidenceState,
  serializeInvestigationState,
  deserializeInvestigationState,
  selectSuspect
} from './investigation-state.mjs';
import {
  loadInvestigationCase,
  createInvestigationState
} from './case-loader.mjs';
import {
  getVisibleRelationships
} from './evidence-engine.mjs';
import {
  evaluateAllHypotheses
} from './hypothesis-engine.mjs';
import {
  getAvailableObjectionIds,
  validateObjection,
  applyObjection as applyObjectionState
} from './contradiction-engine.mjs';
import {
  getInterrogation,
  getUnlockedQuestions,
  askQuestion as askInterrogationQuestion
} from './interrogation-engine.mjs';
import {
  evaluateAccusation as evaluateAccusationState,
  applyAccusation as applyAccusationState
} from './accusation-engine.mjs';
import {
  validateDeduction,
  applyDeduction as applyDeductionState
} from './deduction-engine.mjs';
import { getInvestigationHint } from './hint-engine.mjs';

function getPlayerSafeModel(model) {
  const { accusationGate, authoringTruthReference, ...playerModel } = model;
  function freezePlayerData(value) {
    if (Array.isArray(value)) {
      return Object.freeze(value.map(freezePlayerData));
    }
    if (value && typeof value === 'object') {
      return Object.freeze(Object.fromEntries(
        Object.entries(value).map(([key, nestedValue]) => [key, freezePlayerData(nestedValue)])
      ));
    }
    return value;
  }
  return freezePlayerData(playerModel);
}

function getHypothesisEvaluationState(model, state) {
  const hypothesisStates = { ...(state.hypothesisStates || {}) };
  const explicitlyControlledHypothesisIds = new Set([
    ...(model.objections || []).map(item => item.resultingHypothesisId),
    ...(model.deductions || []).map(item => item.resultingHypothesisId)
  ]);

  for (const evaluation of evaluateAllHypotheses(model, state)) {
    if (!explicitlyControlledHypothesisIds.has(evaluation.hypothesisId)) {
      hypothesisStates[evaluation.hypothesisId] = evaluation.state;
    }
  }

  return { ...state, hypothesisStates };
}

function validateSerializedStateAgainstModel(model, serializedState) {
  const state = deserializeInvestigationState(serializedState);
  const validIds = new Map();
  for (const collection of ['evidence', 'observations', 'statements', 'questions', 'objections', 'deductions', 'hypotheses']) {
    for (const item of model?.[collection] || []) validIds.set(item.id, collection);
  }
  const fields = [
    ['discoveredEvidenceIds', 'evidence'],
    ['analyzedEvidenceIds', 'evidence'],
    ['discoveredObservationIds', 'observations'],
    ['discoveredStatementIds', 'statements'],
    ['askedQuestionIds', 'questions'],
    ['objectionIds', 'objections'],
    ['deductionIds', 'deductions']
  ];
  for (const [field, collection] of fields) {
    for (const id of state[field] || []) {
      if (validIds.get(id) !== collection) throw new Error(`Saved investigation state contains unknown ${collection} ID: ${id}`);
    }
  }
  for (const hypothesisId of Object.keys(state.hypothesisStates || {})) {
    if (validIds.get(hypothesisId) !== 'hypotheses') {
      throw new Error(`Saved investigation state contains unknown hypothesis ID: ${hypothesisId}`);
    }
  }
  if (state.selectedSuspectId) {
    const actorIds = new Set([
      model?.victimId,
      model?.accusationGate?.candidateSuspectId,
      ...(model?.statements || []).map(item => item.suspectId),
      ...(model?.observations || []).filter(item => item.identifiesSuspectId).map(item => item.identifiesSuspectId)
    ].filter(Boolean));
    if (!actorIds.has(state.selectedSuspectId)) throw new Error(`Saved investigation state contains unknown suspect ID: ${state.selectedSuspectId}`);
  }
  return state;
}

function requireSupportedDeduction(model, deductionId) {
  const deduction = (model.deductions || []).find(item => item.id === deductionId);
  if (!deduction) throw new Error(`Unknown deduction ID: ${deductionId}`);
  if (!Array.isArray(deduction.requiredHypothesisStates)) {
    throw new Error(`Deduction does not use the supported requirement schema: ${deductionId}`);
  }
  return deduction;
}

export function createInvestigationRuntime(caseId, serializedState = null) {
  const model = loadInvestigationCase(caseId);
  const playerModel = getPlayerSafeModel(model);
  let state = serializedState ? validateSerializedStateAgainstModel(model, serializedState) : createInvestigationState(caseId);

  function snapshot() {
    return deserializeInvestigationState(serializeInvestigationState(state));
  }

  function replace(nextState) {
    state = nextState;
    return snapshot();
  }

  return Object.freeze({
    getCaseId() {
      return model.id;
    },
    getModel() {
      return playerModel;
    },
    getState() {
      return snapshot();
    },
    getSerializedState() {
      return serializeInvestigationState(state);
    },
    selectSuspect(suspectId) {
      return { state: replace(selectSuspect(model, state, suspectId)) };
    },
    getHint(level) {
      return getInvestigationHint(model, state, level);
    },
    discoverEvidence(evidenceId) {
      return { state: replace(discoverEvidenceState(model, state, evidenceId)) };
    },
    analyzeEvidence(evidenceId) {
      return { state: replace(analyzeEvidenceState(model, state, evidenceId)) };
    },
    getVisibleRelationships() {
      return getVisibleRelationships(model, state);
    },
    getHypotheses() {
      return evaluateAllHypotheses(model, state);
    },
    getEligibleObjections() {
      return getAvailableObjectionIds(model, state);
    },
    validateObjection(objectionId) {
      return validateObjection(model, state, objectionId);
    },
    applyObjection(objectionId) {
      return { state: replace(applyObjectionState(model, state, objectionId)) };
    },
    getDeductionStatus(deductionId) {
      requireSupportedDeduction(model, deductionId);
      return validateDeduction(model, getHypothesisEvaluationState(model, state), deductionId);
    },
    applyDeduction(deductionId) {
      requireSupportedDeduction(model, deductionId);
      const evaluatedState = getHypothesisEvaluationState(model, state);
      return { state: replace(applyDeductionState(model, evaluatedState, deductionId)) };
    },
    getInterrogation(suspectId) {
      return getInterrogation(model, suspectId);
    },
    getUnlockedQuestions(suspectId) {
      return getUnlockedQuestions(model, state, suspectId);
    },
    askQuestion(suspectId, questionId) {
      const question = model.questions.find(item => item.id === questionId);
      if (!question || question.suspectId !== suspectId) {
        throw new Error(`Question does not belong to suspect: ${questionId}`);
      }
      const result = askInterrogationQuestion(model, state, questionId);
      return { ...result, state: replace(result.state) };
    },
    evaluateAccusation(suspectId) {
      return evaluateAccusationState(model, getHypothesisEvaluationState(model, state), suspectId);
    },
    applyAccusation(suspectId) {
      const result = applyAccusationState(model, getHypothesisEvaluationState(model, state), suspectId);
      return { ...result, state: replace(result.state) };
    }
  });
}
