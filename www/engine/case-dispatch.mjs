import { isInvestigationCase } from './case-loader.mjs';
import { createInvestigationRuntime } from './investigation-runtime.mjs';

export function getCaseMode(caseId) {
  if (isInvestigationCase(caseId)) return 'investigation';
  if (caseId === 1 || caseId === 'CASE_EYE_NILE_01') return 'investigation';
  throw new Error(`Unknown case ID: ${String(caseId)}`);
}

export function createCaseRuntime(caseId, serializedState = null) {
  if (getCaseMode(caseId) !== 'investigation') return null;
  return createInvestigationRuntime(caseId, serializedState);
}
