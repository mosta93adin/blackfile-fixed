/*
 * Language-neutral investigation data for the gradual case migration.
 * Presentation layers resolve the *Key fields; this module contains no
 * translated text and no answer-verification data.
 */

export const HYPOTHESIS_STATES = Object.freeze({
  SUPPORTED: 'SUPPORTED',
  POSSIBLE_CONTRADICTION: 'POSSIBLE_CONTRADICTION',
  INSUFFICIENT: 'INSUFFICIENT',
  UNSUPPORTED: 'UNSUPPORTED'
});

const CASE_MANOR_01 = {
  id: 'CASE_MANOR_01',
  titleKey: 'case1.title',
  victimId: 'VICTIM_KARIM',
  evidenceIds: [
    'E_MANOR_DAGGER',
    'E_MANOR_LETTER',
    'E_MANOR_FOOTPRINT',
    'E_MANOR_WATCH',
    'E_MANOR_CAMERA',
    'E_MANOR_ACCESS_LOG'
  ],
  statementIds: [
    'ST_SALMA_01', 'ST_SALMA_02', 'ST_SALMA_03',
    'ST_YAHYA_01', 'ST_YAHYA_02', 'ST_YAHYA_03',
    'ST_FATIMA_01', 'ST_FATIMA_02', 'ST_FATIMA_03',
    'ST_FATIMA_04', 'ST_FATIMA_05',
    'ST_OMAR_01', 'ST_OMAR_02', 'ST_OMAR_03'
  ],
  eventIds: [
    'EV_MANOR_LAST_ALIVE',
    'EV_MANOR_CANDIDATE_TIME',
    'EV_MANOR_BODY_DISCOVERY',
    'EV_MANOR_INCIDENT_INTERVAL',
    'EV_MANOR_ACCESS_YAHYA',
    'EV_MANOR_FATIMA_YAHYA_OBSERVATION',
    'EV_MANOR_FATAL_WOUND',
    'EV_MANOR_HALLWAY_MOVEMENT',
    'EV_MANOR_WINDOW_STATE',
    'EV_MANOR_DOOR_STATE',
    'EV_MANOR_FINANCIAL_DISPUTE',
    'EV_MANOR_GATE_STATE',
    'EV_MANOR_NOISE_ABSENCE'
  ],
  locationIds: [
    'L_MANOR_STUDY',
    'L_MANOR_HALLWAY',
    'L_MANOR_BALCONY',
    'L_MANOR_GARDEN_PATH',
    'L_MANOR_WINDOW_AREA',
    'L_MANOR_SALMA_ROOM',
    'L_MANOR_PERIMETER',
    'L_MANOR_MAIN_GATE'
  ],
  relationshipIds: [
    'R_MANOR_001', 'R_MANOR_002', 'R_MANOR_003', 'R_MANOR_004',
    'R_MANOR_005', 'R_MANOR_006', 'R_MANOR_007', 'R_MANOR_008',
    'R_MANOR_009', 'R_MANOR_010', 'R_MANOR_011', 'R_MANOR_012',
    'R_MANOR_013', 'R_MANOR_014', 'R_MANOR_015', 'R_MANOR_016',
    'R_MANOR_017', 'R_MANOR_018', 'R_MANOR_019', 'R_MANOR_020',
    'R_MANOR_021', 'R_MANOR_022', 'R_MANOR_023', 'R_MANOR_024',
    'R_MANOR_025', 'R_MANOR_026', 'R_MANOR_027', 'R_MANOR_028'
  ],
  hypothesisIds: [
    'H_MANOR_FATAL_TIME',
    'H_MANOR_DAGGER_WEAPON',
    'H_MANOR_PRIOR_DAGGER_ACCESS',
    'H_MANOR_MURDER_TIME_WEAPON_CONTACT',
    'H_MANOR_YAHYA_PRESENCE',
    'H_MANOR_BALCONY_ALIBI',
    'H_MANOR_GARDEN_ACTIVITY',
    'H_MANOR_ESCAPE_THROUGH_WINDOW',
    'H_MANOR_FINANCIAL_CONFLICT',
    'H_MANOR_RESPONSIBILITY'
  ],
  accusationGate: {
    id: 'GATE_MANOR_YAHYA_RESPONSIBILITY',
    requiredHypotheses: [
      ['H_MANOR_DAGGER_WEAPON', HYPOTHESIS_STATES.SUPPORTED],
      ['H_MANOR_FATAL_TIME', HYPOTHESIS_STATES.SUPPORTED],
      ['H_MANOR_YAHYA_PRESENCE', HYPOTHESIS_STATES.SUPPORTED],
      ['H_MANOR_MURDER_TIME_WEAPON_CONTACT', HYPOTHESIS_STATES.SUPPORTED],
      ['H_MANOR_BALCONY_ALIBI', HYPOTHESIS_STATES.POSSIBLE_CONTRADICTION],
      ['H_MANOR_FINANCIAL_CONFLICT', HYPOTHESIS_STATES.SUPPORTED]
    ],
    requiredObjectionIds: ['OBJ_MANOR_YAHYA_BALCONY'],
    requiredDeductionIds: ['DED_MANOR_YAHYA_RESPONSIBILITY'],
    candidateSuspectId: 'S_MANOR_YAHYA'
  }
};

const evidence = [
  {
    id: 'E_MANOR_DAGGER',
    type: 'physical',
    observationKey: 'case1.evidence.dagger.observation',
    metadata: {
      locationId: 'L_MANOR_STUDY',
      observationIds: ['OBS_MANOR_DAGGER_FORENSICS'],
      playerVisible: true
    }
  },
  {
    id: 'E_MANOR_LETTER',
    type: 'document',
    observationKey: 'case1.evidence.letter.observation',
    metadata: { observationIds: ['OBS_MANOR_FINANCIAL_LETTER'], playerVisible: true }
  },
  {
    id: 'E_MANOR_FOOTPRINT',
    type: 'physical',
    observationKey: 'case1.evidence.footprint.observation',
    metadata: {
      locationId: 'L_MANOR_WINDOW_AREA',
      observationIds: ['OBS_MANOR_FOOTPRINT'],
      playerVisible: true
    }
  },
  {
    id: 'E_MANOR_WATCH',
    type: 'physical',
    observationKey: 'case1.evidence.watch.observation',
    metadata: {
      observationIds: ['OBS_MANOR_CANDIDATE_TIME'],
      precision: 'candidate_marker',
      playerVisible: true
    }
  },
  {
    id: 'E_MANOR_CAMERA',
    type: 'record',
    observationKey: 'case1.evidence.camera.observation',
    metadata: {
      locationId: 'L_MANOR_HALLWAY',
      observationIds: ['OBS_MANOR_UNIDENTIFIED_MOVEMENT'],
      identity: 'unidentified',
      playerVisible: true
    }
  },
  {
    id: 'E_MANOR_ACCESS_LOG',
    type: 'record',
    observationKey: 'case1.evidence.accessLog.observation',
    metadata: {
      locationId: 'L_MANOR_STUDY',
      observationIds: ['OBS_MANOR_ACCESS_RECORD'],
      timeWindow: '21:36-21:41',
      playerVisible: true
    }
  }
];

const observations = [
  {
    id: 'OBS_MANOR_DAGGER_FORENSICS',
    type: 'forensic',
    textKey: 'case1.observation.daggerForensics',
    establishesEventIds: ['EV_MANOR_FATAL_WOUND'],
    identifiesSuspectId: 'S_MANOR_YAHYA',
    playerVisible: true
  },
  {
    id: 'OBS_MANOR_FINANCIAL_LETTER',
    type: 'document',
    textKey: 'case1.observation.financialLetter',
    establishesEventIds: ['EV_MANOR_FINANCIAL_DISPUTE'],
    playerVisible: true
  },
  {
    id: 'OBS_MANOR_FOOTPRINT',
    type: 'physical',
    textKey: 'case1.observation.footprint',
    establishesEventIds: [],
    playerVisible: true
  },
  {
    id: 'OBS_MANOR_CANDIDATE_TIME',
    type: 'time_marker',
    textKey: 'case1.observation.candidateTime',
    establishesEventIds: ['EV_MANOR_CANDIDATE_TIME'],
    precision: 'candidate_marker',
    playerVisible: true
  },
  {
    id: 'OBS_MANOR_UNIDENTIFIED_MOVEMENT',
    type: 'record',
    textKey: 'case1.observation.unidentifiedMovement',
    establishesEventIds: ['EV_MANOR_HALLWAY_MOVEMENT'],
    identity: 'unidentified',
    playerVisible: true
  },
  {
    id: 'OBS_MANOR_ACCESS_RECORD',
    type: 'record',
    textKey: 'case1.observation.accessRecord',
    establishesEventIds: ['EV_MANOR_ACCESS_YAHYA'],
    identifiesSuspectId: 'S_MANOR_YAHYA',
    playerVisible: true
  }
];

const statements = [
  ['ST_SALMA_01', 'S_MANOR_SALMA', 'case1.statement.salma.room', 'location_claim', true, ['EV_MANOR_INCIDENT_INTERVAL'], ['L_MANOR_SALMA_ROOM']],
  ['ST_SALMA_02', 'S_MANOR_SALMA', 'case1.statement.salma.noise', 'sensory_claim', true, ['EV_MANOR_NOISE_ABSENCE'], []],
  ['ST_SALMA_03', 'S_MANOR_SALMA', 'case1.statement.salma.money', 'financial_claim', true, ['EV_MANOR_FINANCIAL_DISPUTE'], []],
  ['ST_YAHYA_01', 'S_MANOR_YAHYA', 'case1.statement.yahya.balcony', 'location_claim', true, ['EV_MANOR_INCIDENT_INTERVAL'], ['L_MANOR_BALCONY']],
  ['ST_YAHYA_02', 'S_MANOR_YAHYA', 'case1.statement.yahya.morningStudy', 'prior_access_claim', true, [], ['L_MANOR_STUDY']],
  ['ST_YAHYA_03', 'S_MANOR_YAHYA', 'case1.statement.yahya.finances', 'financial_claim', true, ['EV_MANOR_FINANCIAL_DISPUTE'], []],
  ['ST_FATIMA_01', 'S_MANOR_FATIMA', 'case1.statement.fatima.discovery', 'discovery_claim', true, ['EV_MANOR_BODY_DISCOVERY'], ['L_MANOR_STUDY']],
  ['ST_FATIMA_02', 'S_MANOR_FATIMA', 'case1.statement.fatima.door', 'scene_state_claim', true, ['EV_MANOR_DOOR_STATE'], ['L_MANOR_STUDY']],
  ['ST_FATIMA_03', 'S_MANOR_FATIMA', 'case1.statement.fatima.window', 'scene_state_claim', true, ['EV_MANOR_WINDOW_STATE'], ['L_MANOR_WINDOW_AREA']],
  ['ST_FATIMA_04', 'S_MANOR_FATIMA', 'case1.statement.fatima.yahyaObservation', 'witness_observation', true, ['EV_MANOR_FATIMA_YAHYA_OBSERVATION'], ['L_MANOR_STUDY', 'L_MANOR_HALLWAY']],
  ['ST_FATIMA_05', 'S_MANOR_FATIMA', 'case1.statement.fatima.lastAlive', 'last_alive_claim', true, ['EV_MANOR_LAST_ALIVE'], ['L_MANOR_STUDY']],
  ['ST_OMAR_01', 'S_MANOR_OMAR', 'case1.statement.omar.patrol', 'location_claim', true, ['EV_MANOR_INCIDENT_INTERVAL'], ['L_MANOR_PERIMETER']],
  ['ST_OMAR_02', 'S_MANOR_OMAR', 'case1.statement.omar.gate', 'scene_state_claim', true, ['EV_MANOR_GATE_STATE'], ['L_MANOR_MAIN_GATE']],
  ['ST_OMAR_03', 'S_MANOR_OMAR', 'case1.statement.omar.noise', 'sensory_claim', true, ['EV_MANOR_NOISE_ABSENCE'], ['L_MANOR_STUDY']]
].map(([id, suspectId, textKey, claimType, challengeable, relevantEventIds, relevantLocationIds]) => ({
  id, suspectId, textKey, claimType, challengeable, relevantEventIds, relevantLocationIds
}));

const events = [
  ['EV_MANOR_LAST_ALIVE', 'last_alive', 'case1.event.lastAlive', ['ST_FATIMA_05']],
  ['EV_MANOR_CANDIDATE_TIME', 'candidate_time_marker', 'case1.event.candidateTime', ['E_MANOR_WATCH']],
  ['EV_MANOR_BODY_DISCOVERY', 'discovery', 'case1.event.bodyDiscovery', ['ST_FATIMA_01']],
  ['EV_MANOR_INCIDENT_INTERVAL', 'bounded_interval', 'case1.event.incidentInterval', ['ST_FATIMA_05', 'ST_FATIMA_01', 'E_MANOR_WATCH']],
  ['EV_MANOR_ACCESS_YAHYA', 'access', 'case1.event.accessYahya', ['E_MANOR_ACCESS_LOG']],
  ['EV_MANOR_FATIMA_YAHYA_OBSERVATION', 'witness_observation', 'case1.event.fatimaYahyaObservation', ['ST_FATIMA_04']],
  ['EV_MANOR_FATAL_WOUND', 'forensic', 'case1.event.fatalWound', ['E_MANOR_DAGGER']],
  ['EV_MANOR_HALLWAY_MOVEMENT', 'movement', 'case1.event.hallwayMovement', ['E_MANOR_CAMERA']],
  ['EV_MANOR_WINDOW_STATE', 'window_state', 'case1.event.windowState', ['ST_FATIMA_03']],
  ['EV_MANOR_DOOR_STATE', 'door_state', 'case1.event.doorState', ['ST_FATIMA_02']],
  ['EV_MANOR_FINANCIAL_DISPUTE', 'financial_context', 'case1.event.financialDispute', ['E_MANOR_LETTER']],
  ['EV_MANOR_GATE_STATE', 'gate_state', 'case1.event.gateState', ['ST_OMAR_02']],
  ['EV_MANOR_NOISE_ABSENCE', 'sensory_context', 'case1.event.noiseAbsence', ['ST_SALMA_02', 'ST_OMAR_03']]
].map(([id, category, textKey, sourceIds]) => ({ id, category, textKey, sourceIds }));

const locations = [
  ['L_MANOR_STUDY', 'case1.location.study'],
  ['L_MANOR_HALLWAY', 'case1.location.hallway'],
  ['L_MANOR_BALCONY', 'case1.location.balcony'],
  ['L_MANOR_GARDEN_PATH', 'case1.location.gardenPath'],
  ['L_MANOR_WINDOW_AREA', 'case1.location.windowArea'],
  ['L_MANOR_SALMA_ROOM', 'case1.location.salmaRoom'],
  ['L_MANOR_PERIMETER', 'case1.location.perimeter'],
  ['L_MANOR_MAIN_GATE', 'case1.location.mainGate']
].map(([id, labelKey]) => ({ id, labelKey }));

const hypotheses = [
  ['H_MANOR_FATAL_TIME', 'case1.hypothesis.fatalTime'],
  ['H_MANOR_DAGGER_WEAPON', 'case1.hypothesis.daggerWeapon'],
  ['H_MANOR_PRIOR_DAGGER_ACCESS', 'case1.hypothesis.priorDaggerAccess'],
  ['H_MANOR_MURDER_TIME_WEAPON_CONTACT', 'case1.hypothesis.murderTimeWeaponContact'],
  ['H_MANOR_YAHYA_PRESENCE', 'case1.hypothesis.yahyaPresence'],
  ['H_MANOR_BALCONY_ALIBI', 'case1.hypothesis.balconyAlibi'],
  ['H_MANOR_GARDEN_ACTIVITY', 'case1.hypothesis.gardenActivity'],
  ['H_MANOR_ESCAPE_THROUGH_WINDOW', 'case1.hypothesis.escapeThroughWindow'],
  ['H_MANOR_FINANCIAL_CONFLICT', 'case1.hypothesis.financialConflict'],
  ['H_MANOR_RESPONSIBILITY', 'case1.hypothesis.responsibility']
].map(([id, labelKey]) => ({
  id,
  labelKey,
  initialState: HYPOTHESIS_STATES.INSUFFICIENT
}));

const relationships = [
  ['R_MANOR_001', 'ST_FATIMA_05', 'establishes', 'EV_MANOR_LAST_ALIVE', ['ST_FATIMA_05'], 'case1.relationship.lastAlive'],
  ['R_MANOR_002', 'ST_FATIMA_01', 'establishes', 'EV_MANOR_BODY_DISCOVERY', ['ST_FATIMA_01'], 'case1.relationship.bodyDiscovery'],
  ['R_MANOR_003', 'E_MANOR_WATCH', 'establishes_candidate_marker', 'EV_MANOR_CANDIDATE_TIME', ['E_MANOR_WATCH'], 'case1.relationship.candidateMarker'],
  ['R_MANOR_004', 'EV_MANOR_LAST_ALIVE', 'bounds', 'EV_MANOR_INCIDENT_INTERVAL', ['EV_MANOR_LAST_ALIVE', 'EV_MANOR_BODY_DISCOVERY'], 'case1.relationship.intervalBounds'],
  ['R_MANOR_005', 'EV_MANOR_CANDIDATE_TIME', 'contributes_candidate_marker', 'EV_MANOR_INCIDENT_INTERVAL', ['E_MANOR_WATCH'], 'case1.relationship.intervalCandidate'],
  ['R_MANOR_006', 'E_MANOR_DAGGER', 'forensic_consistency', 'EV_MANOR_FATAL_WOUND', ['E_MANOR_DAGGER'], 'case1.relationship.daggerWound'],
  ['R_MANOR_007', 'E_MANOR_ACCESS_LOG', 'located_at', 'L_MANOR_STUDY', ['E_MANOR_ACCESS_LOG'], 'case1.relationship.accessLocation'],
  ['R_MANOR_008', 'E_MANOR_ACCESS_LOG', 'temporally_overlaps', 'EV_MANOR_INCIDENT_INTERVAL', ['E_MANOR_ACCESS_LOG', 'EV_MANOR_INCIDENT_INTERVAL'], 'case1.relationship.accessInterval'],
  ['R_MANOR_009', 'ST_FATIMA_04', 'identifies', 'S_MANOR_YAHYA', ['ST_FATIMA_04'], 'case1.relationship.witnessIdentifiesYahya'],
  ['R_MANOR_010', 'ST_FATIMA_04', 'observed_at', 'L_MANOR_STUDY', ['ST_FATIMA_04'], 'case1.relationship.witnessLocation'],
  ['R_MANOR_011', 'E_MANOR_ACCESS_LOG', 'corroborates', 'EV_MANOR_FATIMA_YAHYA_OBSERVATION', ['E_MANOR_ACCESS_LOG', 'ST_FATIMA_04'], 'case1.relationship.accessCorroboratesWitness'],
  ['R_MANOR_012', 'E_MANOR_DAGGER', 'supports', 'H_MANOR_DAGGER_WEAPON', ['E_MANOR_DAGGER'], 'case1.relationship.daggerHypothesis'],
  ['R_MANOR_013', 'E_MANOR_DAGGER', 'identifies', 'S_MANOR_YAHYA', ['E_MANOR_DAGGER'], 'case1.relationship.ridgeIdentifiesYahya'],
  ['R_MANOR_014', 'E_MANOR_DAGGER', 'temporally_overlaps', 'EV_MANOR_INCIDENT_INTERVAL', ['E_MANOR_DAGGER', 'EV_MANOR_INCIDENT_INTERVAL'], 'case1.relationship.contactInterval'],
  ['R_MANOR_015', 'ST_FATIMA_04', 'supports', 'H_MANOR_YAHYA_PRESENCE', ['ST_FATIMA_04', 'E_MANOR_ACCESS_LOG'], 'case1.relationship.presenceHypothesis'],
  ['R_MANOR_016', 'E_MANOR_DAGGER', 'supports', 'H_MANOR_MURDER_TIME_WEAPON_CONTACT', ['E_MANOR_DAGGER', 'EV_MANOR_INCIDENT_INTERVAL'], 'case1.relationship.contactHypothesis'],
  ['R_MANOR_017', 'ST_YAHYA_01', 'asserts_location_at_time', 'L_MANOR_BALCONY', ['ST_YAHYA_01'], 'case1.relationship.balconyClaim'],
  ['R_MANOR_018', 'ST_FATIMA_04', 'contradicts', 'H_MANOR_BALCONY_ALIBI', ['ST_FATIMA_04', 'E_MANOR_ACCESS_LOG', 'ST_YAHYA_01'], 'case1.relationship.balconyContradiction'],
  ['R_MANOR_019', 'E_MANOR_LETTER', 'supports', 'H_MANOR_FINANCIAL_CONFLICT', ['E_MANOR_LETTER'], 'case1.relationship.financialConflict'],
  ['R_MANOR_020', 'ST_YAHYA_03', 'minimizes', 'H_MANOR_FINANCIAL_CONFLICT', ['ST_YAHYA_03', 'E_MANOR_LETTER'], 'case1.relationship.financialMinimization'],
  ['R_MANOR_021', 'E_MANOR_CAMERA', 'establishes_unidentified_movement', 'EV_MANOR_HALLWAY_MOVEMENT', ['E_MANOR_CAMERA'], 'case1.relationship.unidentifiedMovement'],
  ['R_MANOR_022', 'ST_FATIMA_03', 'establishes', 'EV_MANOR_WINDOW_STATE', ['ST_FATIMA_03'], 'case1.relationship.windowState'],
  ['R_MANOR_023', 'E_MANOR_FOOTPRINT', 'located_at', 'L_MANOR_WINDOW_AREA', ['E_MANOR_FOOTPRINT'], 'case1.relationship.footprintLocation'],
  ['R_MANOR_024', 'E_MANOR_FOOTPRINT', 'material_consistent_with', 'L_MANOR_GARDEN_PATH', ['E_MANOR_FOOTPRINT'], 'case1.relationship.footprintMaterial'],
  ['R_MANOR_025', 'EV_MANOR_WINDOW_STATE', 'insufficient_for', 'H_MANOR_ESCAPE_THROUGH_WINDOW', ['EV_MANOR_WINDOW_STATE', 'E_MANOR_FOOTPRINT'], 'case1.relationship.windowInsufficient'],
  ['R_MANOR_026', 'ST_OMAR_02', 'limits_inference_about', 'EV_MANOR_GATE_STATE', ['ST_OMAR_02'], 'case1.relationship.gateLimitation'],
  ['R_MANOR_027', 'H_MANOR_DAGGER_WEAPON', 'requires', 'H_MANOR_RESPONSIBILITY', ['H_MANOR_DAGGER_WEAPON', 'H_MANOR_FATAL_TIME', 'H_MANOR_YAHYA_PRESENCE', 'H_MANOR_MURDER_TIME_WEAPON_CONTACT'], 'case1.relationship.responsibilityRequirements'],
  ['R_MANOR_028', 'H_MANOR_BALCONY_ALIBI', 'corroborates', 'H_MANOR_RESPONSIBILITY', ['H_MANOR_BALCONY_ALIBI', 'H_MANOR_FINANCIAL_CONFLICT'], 'case1.relationship.responsibilityContext']
].map(([id, from, relation, to, sourceIds, justificationKey]) => ({
  id, from, relation, to, sourceIds, justificationKey
}));

const objections = [
  {
    id: 'OBJ_MANOR_YAHYA_BALCONY',
    statementId: 'ST_YAHYA_01',
    evidenceIds: ['E_MANOR_ACCESS_LOG'],
    relationshipId: 'R_MANOR_018',
    resultingHypothesisId: 'H_MANOR_BALCONY_ALIBI',
    resultingState: HYPOTHESIS_STATES.POSSIBLE_CONTRADICTION,
    validationKey: 'case1.objection.yahyaBalcony'
  }
];

const deductions = [
  {
    id: 'DED_MANOR_YAHYA_RESPONSIBILITY',
    inputHypothesisIds: [
      'H_MANOR_DAGGER_WEAPON',
      'H_MANOR_FATAL_TIME',
      'H_MANOR_YAHYA_PRESENCE',
      'H_MANOR_MURDER_TIME_WEAPON_CONTACT',
      'H_MANOR_BALCONY_ALIBI',
      'H_MANOR_FINANCIAL_CONFLICT'
    ],
    outputHypothesisId: 'H_MANOR_RESPONSIBILITY',
    validationKey: 'case1.deduction.yahyaResponsibility'
  }
];

const case1 = Object.freeze({
  ...CASE_MANOR_01,
  evidence: Object.freeze(evidence),
  observations: Object.freeze(observations),
  statements: Object.freeze(statements),
  events: Object.freeze(events),
  locations: Object.freeze(locations),
  relationships: Object.freeze(relationships),
  hypotheses: Object.freeze(hypotheses),
  objections: Object.freeze(objections),
  deductions: Object.freeze(deductions)
});

const CASES = Object.freeze({ CASE_MANOR_01: case1 });

function indexById(items, field = 'id') {
  return new Map(items.map(item => [item[field], item]));
}

function hasIds(items, ids) {
  const known = new Set(items.map(item => item.id));
  return ids.every(id => known.has(id));
}

/*
 * Actors (suspects / victim) are not stored as their own collection: they are
 * referenced by statements, observations and the accusation gate. Relationships
 * may legitimately point at an actor, so collect those IDs for validation.
 */
function collectActorIds(model) {
  const actorIds = new Set();
  if (model?.victimId) actorIds.add(model.victimId);
  if (model?.accusationGate?.candidateSuspectId) actorIds.add(model.accusationGate.candidateSuspectId);
  for (const statement of model?.statements || []) {
    if (statement.suspectId) actorIds.add(statement.suspectId);
  }
  for (const observation of model?.observations || []) {
    if (observation.identifiesSuspectId) actorIds.add(observation.identifiesSuspectId);
  }
  return actorIds;
}

export function getCaseModel(caseId) {
  return CASES[caseId] || null;
}

export function getCaseEntity(caseId, collection, entityId) {
  const model = getCaseModel(caseId);
  if (!model || !Array.isArray(model[collection])) return null;
  return indexById(model[collection]).get(entityId) || null;
}

export function evaluateAccusationGate(model, state) {
  if (!model || !state || !model.accusationGate) return false;
  const gate = model.accusationGate;
  const hypothesisStates = state.hypothesisStates || {};
  const objections = new Set(state.objectionIds || []);
  const deductions = new Set(state.deductionIds || []);

  const hypothesesReady = gate.requiredHypotheses.every(([id, expected]) => hypothesisStates[id] === expected);
  return hypothesesReady
    && gate.requiredObjectionIds.every(id => objections.has(id))
    && gate.requiredDeductionIds.every(id => deductions.has(id))
    && state.selectedSuspectId === gate.candidateSuspectId;
}

export function validateCaseModel(model) {
  const collections = ['evidence', 'observations', 'statements', 'events', 'locations', 'relationships', 'hypotheses', 'objections', 'deductions'];
  const errors = [];
  for (const collection of collections) {
    const items = model?.[collection];
    if (!Array.isArray(items)) {
      errors.push(`${collection} must be an array`);
      continue;
    }
    const ids = items.map(item => item.id);
    if (new Set(ids).size !== ids.length) errors.push(`${collection} contains duplicate IDs`);
  }
  if (!model || !hasIds(model.evidence, model.evidenceIds)) errors.push('case evidence IDs do not resolve');
  if (!model || !hasIds(model.statements, model.statementIds)) errors.push('case statement IDs do not resolve');
  if (!model || !hasIds(model.events, model.eventIds)) errors.push('case event IDs do not resolve');
  if (!model || !hasIds(model.locations, model.locationIds)) errors.push('case location IDs do not resolve');
  if (!model || !hasIds(model.relationships, model.relationshipIds)) errors.push('case relationship IDs do not resolve');
  if (!model || !hasIds(model.hypotheses, model.hypothesisIds)) errors.push('case hypothesis IDs do not resolve');

  const known = new Set([
    ...(model?.evidence || []).map(item => item.id),
    ...(model?.observations || []).map(item => item.id),
    ...(model?.statements || []).map(item => item.id),
    ...(model?.events || []).map(item => item.id),
    ...(model?.locations || []).map(item => item.id),
    ...(model?.hypotheses || []).map(item => item.id)
  ]);
  for (const relationship of model?.relationships || []) {
    if (!known.has(relationship.from) || !known.has(relationship.to)) {
      errors.push(`relationship ${relationship.id} references an unknown entity`);
    }
    if (!Array.isArray(relationship.sourceIds) || relationship.sourceIds.length === 0) {
      errors.push(`relationship ${relationship.id} has no provenance`);
    }
  }
  return { valid: errors.length === 0, errors };
}

export function createInitialInvestigationState(model) {
  const hypothesisStates = Object.fromEntries(
    model.hypotheses.map(hypothesis => [hypothesis.id, hypothesis.initialState])
  );
  return Object.freeze({
    hypothesisStates,
    objectionIds: [],
    deductionIds: [],
    selectedSuspectId: null
  });
}

export const CASE_MANOR_01_MODEL = case1;
