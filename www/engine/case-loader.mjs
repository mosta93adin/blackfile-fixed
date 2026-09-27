import {
  CASE_MANOR_01_MODEL,
  getCaseModel
} from './investigation-model.mjs';
import { createInitialInvestigationState } from './investigation-state.mjs';

const CASE_ZERO_INDEX = 0;
const CASE_ZERO_ID = CASE_MANOR_01_MODEL.id;
const CASE_ONE_ID = 'CASE_EYE_NILE_01';

function isCaseZero(caseId) {
  return caseId === CASE_ZERO_INDEX || caseId === CASE_ZERO_ID;
}

function isCaseOne(caseId) {
  return caseId === 1 || caseId === CASE_ONE_ID || caseId === 'CASE_EYE_NILE_01';
}

function isLegacyCase(caseId) {
  return Number.isInteger(caseId) && caseId >= 2 && caseId <= 19;
}

function requireCaseId(caseId) {
  if (caseId === null || caseId === undefined || caseId === '') {
    throw new Error('Case ID is required.');
  }
  if (typeof caseId !== 'string' && !Number.isInteger(caseId)) {
    throw new Error(`Invalid case ID: ${String(caseId)}`);
  }
}

export function isInvestigationCase(caseId) {
  if (isCaseZero(caseId) || isCaseOne(caseId)) return true;
  return Number.isInteger(caseId) && caseId >= 2 && caseId <= 19;
}

export function loadInvestigationCase(caseId) {
  requireCaseId(caseId);
  if (isCaseZero(caseId)) {
    return getCaseModel(CASE_ZERO_ID);
  }
  if (isCaseOne(caseId)) {
    return getCaseModel(CASE_ONE_ID);
  }
  if (isLegacyCase(caseId)) {
    const model = getCaseModel(caseId);
    if (model) return model;
    throw new Error(`Case is not investigation-enabled: ${caseId}`);
  }
  throw new Error(`Unknown case ID: ${String(caseId)}`);
}

export function createInvestigationState(caseId) {
  return createInitialInvestigationState(loadInvestigationCase(caseId));
}

export { CASE_ZERO_ID };
