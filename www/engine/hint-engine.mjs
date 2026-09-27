function firstUnseenEvidence(model, state) {
  return (model?.evidence || []).find(item => !state.discoveredEvidenceIds?.has(item.id));
}

function firstUnanalyzedEvidence(model, state) {
  return (model?.evidence || []).find(item =>
    state.discoveredEvidenceIds?.has(item.id) && !state.analyzedEvidenceIds?.has(item.id)
  );
}

function firstUnansweredQuestion(model, state) {
  return (model?.questions || []).find(item =>
    !state.askedQuestionIds?.has(item.id) &&
    (item.requiredEvidenceIds || []).every(id => state.discoveredEvidenceIds?.has(id)) &&
    (item.requiredStatementIds || []).every(id => state.discoveredStatementIds?.has(id))
  );
}

export function getInvestigationHint(model, state, level = 1) {
  const unseen = firstUnseenEvidence(model, state);
  const unanalyzed = firstUnanalyzedEvidence(model, state);
  const unanswered = firstUnansweredQuestion(model, state);
  const availableObjection = (model?.objections || []).find(item =>
    !state.objectionIds?.has(item.id) &&
    state.discoveredStatementIds?.has(item.statementId) &&
    (item.evidenceIds || []).every(id => state.discoveredEvidenceIds?.has(id))
  );
  const availableDeduction = (model?.deductions || []).find(item =>
    !state.deductionIds?.has(item.id)
  );

  if (level <= 1) {
    if (unseen) return { type: 'DISCOVERY', key: 'investigationHintDiscovery' };
    return { type: 'DISCOVERY', key: 'investigationHintDiscoveryFallback' };
  }
  if (level === 2) {
    if (unanalyzed) return { type: 'ANALYSIS', key: 'investigationHintAnalysis' };
    return { type: 'ANALYSIS', key: 'investigationHintAnalysisFallback' };
  }
  if (level === 3) {
    if (availableObjection) return { type: 'CONTRADICTION', key: 'investigationHintContradiction' };
    if (availableDeduction) return { type: 'DEDUCTION', key: 'investigationHintDeduction' };
    return { type: 'CONNECTION', key: 'investigationHintConnection' };
  }
  if (level === 4) {
    if (unanswered) return { type: 'INTERROGATION', key: 'investigationHintInterrogation' };
    return { type: 'HYPOTHESIS', key: 'investigationHintHypothesis' };
  }
  return { type: 'HYPOTHESIS', key: 'investigationHintFinal' };
}
