/* Generic presentation adapter for investigation-enabled legacy cases. */
export function getInvestigationPresentationQuestions(model, suspectIndex, translatedSuspect) {
  const suspectIds = model?.suspectIds || [];
  const suspectId = suspectIds[suspectIndex];
  if (!suspectId || !translatedSuspect || !Array.isArray(translatedSuspect.qs)) {
    throw new Error(`Unknown investigation presentation suspect index: ${suspectIndex}`);
  }
  const questions = (model.questions || []).filter(question => question.suspectId === suspectId);
  return translatedSuspect.qs.slice(0, questions.length).map((text, index) => ({
    id: questions[index].id,
    questionText: text.q,
    responseText: text.a
  }));
}

export function getInvestigationPresentationSuspectId(model, suspectIndex) {
  const id = (model?.suspectIds || [])[suspectIndex];
  if (!id) throw new Error(`Unknown investigation suspect index: ${suspectIndex}`);
  return id;
}

export function getInvestigationPresentationEvidenceId(model, evidenceIndex) {
  const id = (model?.evidenceIds || [])[evidenceIndex];
  if (!id) throw new Error(`Unknown investigation evidence index: ${evidenceIndex}`);
  return id;
}

export function getInvestigationActionIds(model) {
  return {
    objectionIds: (model?.objections || []).map(item => item.id),
    deductionIds: (model?.deductions || []).map(item => item.id)
  };
}

export function getInvestigationActionTextKeys(caseId, objectionId, deductionId) {
  const numeric = typeof caseId === 'number'
    ? caseId
    : Number(String(caseId).match(/(\d+)$/)?.[1]);
  return {
    objectionKey: objectionId && numeric >= 2 && numeric <= 19 ? `investigationObjCase${numeric}` : null,
    deductionKey: deductionId && numeric >= 2 && numeric <= 19 ? `investigationDedCase${numeric}` : null
  };
}
