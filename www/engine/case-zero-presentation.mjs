const CASE_ZERO_QUESTION_IDS = Object.freeze([
  Object.freeze(['Q_SALMA_ROOM', 'Q_SALMA_NOISE', 'Q_SALMA_MONEY']),
  Object.freeze(['Q_YAHYA_FINANCES', 'Q_YAHYA_DAGGER', 'Q_YAHYA_BALCONY']),
  Object.freeze(['Q_FATIMA_DISCOVERY', 'Q_FATIMA_DOOR', 'Q_FATIMA_WINDOW', 'Q_FATIMA_SIGHTING']),
  Object.freeze(['Q_OMAR_PATROL', 'Q_OMAR_GATE', 'Q_OMAR_NOISE'])
]);

const CASE_ZERO_SUSPECT_IDS = Object.freeze([
  'S_MANOR_SALMA',
  'S_MANOR_YAHYA',
  'S_MANOR_FATIMA',
  'S_MANOR_OMAR'
]);

const CASE_ZERO_EVIDENCE_IDS = Object.freeze([
  'E_MANOR_DAGGER',
  'E_MANOR_LETTER',
  'E_MANOR_FOOTPRINT',
  'E_MANOR_WATCH',
  'E_MANOR_CAMERA',
  'E_MANOR_ACCESS_LOG'
]);

export function getCaseZeroPresentationQuestions(suspectIndex, translatedSuspect) {
  const questionIds = CASE_ZERO_QUESTION_IDS[suspectIndex];
  if (!questionIds || !translatedSuspect || !Array.isArray(translatedSuspect.qs)) {
    throw new Error(`Unknown Case 0 presentation suspect index: ${suspectIndex}`);
  }
  return questionIds.map((questionId, index) => {
    const text = translatedSuspect.qs[index];
    if (text) return { id: questionId, questionText: text.q, responseText: text.a };
    if (questionId === 'Q_FATIMA_SIGHTING') {
      return {
        id: questionId,
        questionText: 'Did you see anyone near the study that night?',
        responseText: 'I saw Yahya heading toward the study a little before I went to bed.'
      };
    }
    return null;
  }).filter(Boolean);
}

export function getCaseZeroPresentationSuspectId(suspectIndex) {
  const suspectId = CASE_ZERO_SUSPECT_IDS[suspectIndex];
  if (!suspectId) throw new Error(`Unknown Case 0 presentation suspect index: ${suspectIndex}`);
  return suspectId;
}

export function getCaseZeroPresentationEvidenceId(evidenceIndex) {
  const evidenceId = CASE_ZERO_EVIDENCE_IDS[evidenceIndex];
  if (!evidenceId) throw new Error(`Unknown Case 0 presentation evidence index: ${evidenceIndex}`);
  return evidenceId;
}

export function hasCaseZeroPresentation(questionId) {
  return CASE_ZERO_QUESTION_IDS.some(questionIds => questionIds.includes(questionId));
}
