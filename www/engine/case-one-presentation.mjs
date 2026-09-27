const CASE_ONE_QUESTION_IDS = Object.freeze([
  Object.freeze(['Q_EYE_NILE_RAID_KEYS', 'Q_EYE_NILE_RAID_VIP', 'Q_EYE_NILE_RAID_DISCOVERY']),
  Object.freeze(['Q_EYE_NILE_SANAA_CAMERA', 'Q_EYE_NILE_SANAA_PATROL', 'Q_EYE_NILE_SANAA_ENTRY']),
  Object.freeze(['Q_EYE_NILE_MAHER_GLOVE', 'Q_EYE_NILE_MAHER_ACCESS', 'Q_EYE_NILE_MAHER_KEY_REGISTER', 'Q_EYE_NILE_MAHER_WORKSHOP']),
  Object.freeze(['Q_EYE_NILE_MONA_PHOTO', 'Q_EYE_NILE_MONA_DEPARTURE', 'Q_EYE_NILE_MONA_COAT'])
]);

const CASE_ONE_SUSPECT_IDS = Object.freeze([
  'S_EYE_NILE_RAID',
  'S_EYE_NILE_SANAA',
  'S_EYE_NILE_MAHER',
  'S_EYE_NILE_MONA'
]);

const CASE_ONE_EVIDENCE_IDS = Object.freeze([
  'E_EYE_NILE_GLOVE',
  'E_EYE_NILE_ACCESS_CARD',
  'E_EYE_NILE_CAMERA',
  'E_EYE_NILE_HAIR',
  'E_EYE_NILE_MASTER_KEYS',
  'E_EYE_NILE_CLOSING_ACCESS_REGISTER'
]);

export function getCaseOnePresentationQuestions(suspectIndex, translatedSuspect) {
  const questionIds = CASE_ONE_QUESTION_IDS[suspectIndex];
  if (!questionIds || !translatedSuspect || !Array.isArray(translatedSuspect.qs)) {
    throw new Error(`Unknown Case 1 presentation suspect index: ${suspectIndex}`);
  }
  return translatedSuspect.qs.slice(0, questionIds.length).map((text, index) => ({
    id: questionIds[index],
    questionText: text.q,
    responseText: text.a
  }));
}

export function getCaseOnePresentationSuspectId(suspectIndex) {
  const suspectId = CASE_ONE_SUSPECT_IDS[suspectIndex];
  if (!suspectId) throw new Error(`Unknown Case 1 presentation suspect index: ${suspectIndex}`);
  return suspectId;
}

export function getCaseOnePresentationEvidenceId(evidenceIndex) {
  const evidenceId = CASE_ONE_EVIDENCE_IDS[evidenceIndex];
  if (!evidenceId) throw new Error(`Unknown Case 1 presentation evidence index: ${evidenceIndex}`);
  return evidenceId;
}

export function getCaseOneObjectionText(objectionId) {
  if (objectionId !== 'OBJ_EYE_NILE_MAHER_KEY_DENIAL') return null;
  return "Maher's statement conflicts with the access register.";
}

export function getCaseOneDeductionText(deductionId) {
  if (deductionId !== 'DED_EYE_NILE_ACCESS_AND_TRACE_CHAIN') return null;
  return 'Access and trace chain established: the register places the administrative master key under Maher\'s checkout at 10:04, while Maher denies taking it.';
}

// The engine stays language-neutral: these return i18n *keys* (not text) so the
// UI layer (app.js) can localize the objection/deduction player-facing strings
// through the existing txx()/EXTRA_TRANGS mechanism, with getCaseOneObjectionText
// / getCaseOneDeductionText above kept as the authored-English fallback/reference.
export function getCaseOneObjectionTextKey(objectionId) {
  if (objectionId !== 'OBJ_EYE_NILE_MAHER_KEY_DENIAL') return null;
  return 'investigationObjMaherKeyDenial';
}

export function getCaseOneDeductionTextKey(deductionId) {
  if (deductionId !== 'DED_EYE_NILE_ACCESS_AND_TRACE_CHAIN') return null;
  return 'investigationDedAccessTraceChain';
}

export function hasCaseOnePresentation(questionId) {
  return CASE_ONE_QUESTION_IDS.some(questionIds => questionIds.includes(questionId));
}
