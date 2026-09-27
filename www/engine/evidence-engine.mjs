const PLAYER_KNOWLEDGE = new Set([
  'evidence',
  'observations',
  'statements'
]);

const SOURCE_COLLECTIONS = [
  'evidence',
  'observations',
  'statements',
  'events',
  'locations',
  'hypotheses'
];

function getActorIds(model) {
  return new Set([
    model?.victimId,
    model?.accusationGate?.candidateSuspectId,
    ...(model?.statements || []).map(statement => statement.suspectId),
    ...(model?.observations || [])
      .filter(observation => observation.identifiesSuspectId)
      .map(observation => observation.identifiesSuspectId)
  ].filter(Boolean));
}

function resolveSource(model, sourceId) {
  for (const type of SOURCE_COLLECTIONS) {
    const entity = (model?.[type] || []).find(candidate => candidate.id === sourceId);
    if (entity) return { id: sourceId, type, entity };
  }
  if (getActorIds(model).has(sourceId)) {
    return { id: sourceId, type: 'actor', entity: { id: sourceId } };
  }
  throw new Error(`Unknown relationship source ID: ${sourceId}`);
}

function findRelationship(model, relationshipId) {
  const relationship = (model?.relationships || []).find(item => item.id === relationshipId);
  if (!relationship) throw new Error(`Unknown relationship ID: ${relationshipId}`);
  return relationship;
}

function isKnownSource(state, source) {
  if (!PLAYER_KNOWLEDGE.has(source.type)) return false;
  const knowledge = {
    evidence: state.discoveredEvidenceIds,
    observations: state.discoveredObservationIds,
    statements: state.discoveredStatementIds
  }[source.type];
  return knowledge.has(source.id);
}

export function getRelationshipSources(model, relationshipId) {
  const relationship = findRelationship(model, relationshipId);
  return relationship.sourceIds.map(sourceId => resolveSource(model, sourceId));
}

export function isRelationshipVisible(model, state, relationshipId) {
  if (!state || typeof state !== 'object') throw new Error('Investigation state is required.');
  const sources = getRelationshipSources(model, relationshipId);
  return sources.every(source => isKnownSource(state, source));
}

export function getVisibleRelationshipIds(model, state) {
  return (model?.relationships || [])
    .filter(relationship => isRelationshipVisible(model, state, relationship.id))
    .map(relationship => relationship.id);
}

export function getVisibleRelationships(model, state) {
  return (model?.relationships || [])
    .filter(relationship => isRelationshipVisible(model, state, relationship.id));
}
