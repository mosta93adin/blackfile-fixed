import {
  askQuestion as applyQuestionResponse,
  getUnlockedQuestionIds
} from './investigation-state.mjs';

function findById(items, id, collectionName) {
  const item = (items || []).find(candidate => candidate.id === id);
  if (!item) throw new Error(`Unknown ${collectionName} ID: ${id}`);
  return item;
}

function getInterrogationForSuspect(model, suspectId) {
  const interrogation = (model?.interrogations || []).find(item => item.suspectId === suspectId);
  if (!interrogation) throw new Error(`Unknown interrogation suspect ID: ${suspectId}`);
  return interrogation;
}

function getQuestionResponse(model, question) {
  if (!Array.isArray(question.responseIds) || question.responseIds.length !== 1) {
    throw new Error(`Question must have exactly one authored response: ${question.id}`);
  }
  return findById(model?.responses, question.responseIds[0], 'response');
}

function getAvailableQuestionIds(model, state) {
  return getUnlockedQuestionIds(model, state)
    .filter(questionId => !state.askedQuestionIds?.has(questionId));
}

export function getInterrogation(model, suspectId) {
  const interrogation = getInterrogationForSuspect(model, suspectId);
  for (const questionId of interrogation.questionIds || []) {
    findById(model?.questions, questionId, 'question');
  }
  return interrogation;
}

export function getQuestion(model, questionId) {
  const question = findById(model?.questions, questionId, 'question');
  getQuestionResponse(model, question);
  return question;
}

export function getUnlockedQuestions(model, state, suspectId) {
  const interrogation = getInterrogation(model, suspectId);
  const available = new Set(getAvailableQuestionIds(model, state));
  return interrogation.questionIds
    .filter(questionId => available.has(questionId))
    .map(questionId => getQuestion(model, questionId));
}

export function canAskQuestion(model, state, questionId) {
  const question = getQuestion(model, questionId);
  if (state?.askedQuestionIds?.has(questionId)) return false;
  return getAvailableQuestionIds(model, state).includes(question.id);
}

export function askQuestion(model, state, questionId) {
  const question = getQuestion(model, questionId);
  if (!state || typeof state !== 'object') throw new Error('Investigation state is required.');
  if (state.selectedSuspectId && state.selectedSuspectId !== question.suspectId) {
    throw new Error(`Question belongs to another suspect: ${questionId}`);
  }
  if (state.askedQuestionIds?.has(questionId)) {
    throw new Error(`Question has already been asked: ${questionId}`);
  }
  if (!getAvailableQuestionIds(model, state).includes(questionId)) {
    throw new Error(`Question is locked: ${questionId}`);
  }

  const response = getQuestionResponse(model, question);
  const nextState = applyQuestionResponse(model, state, questionId);
  return {
    state: nextState,
    questionId,
    responseId: response.id,
    producedStatementId: response.producesStatementId || null,
    producedEvidenceId: response.producesEvidenceId || null,
    flaggedObjectionId: response.flagsObjectionId || null
  };
}
