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
      playerVisible: false
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

const evidenceAnalysis = [
  { id: 'EA_MANOR_DAGGER', evidenceId: 'E_MANOR_DAGGER', unlocksObservationIds: ['OBS_MANOR_DAGGER_FORENSICS'] },
  { id: 'EA_MANOR_LETTER', evidenceId: 'E_MANOR_LETTER', unlocksObservationIds: ['OBS_MANOR_FINANCIAL_LETTER'] },
  { id: 'EA_MANOR_FOOTPRINT', evidenceId: 'E_MANOR_FOOTPRINT', unlocksObservationIds: ['OBS_MANOR_FOOTPRINT'] },
  { id: 'EA_MANOR_WATCH', evidenceId: 'E_MANOR_WATCH', unlocksObservationIds: ['OBS_MANOR_CANDIDATE_TIME'] },
  { id: 'EA_MANOR_CAMERA', evidenceId: 'E_MANOR_CAMERA', unlocksObservationIds: ['OBS_MANOR_UNIDENTIFIED_MOVEMENT'] },
  { id: 'EA_MANOR_ACCESS_LOG', evidenceId: 'E_MANOR_ACCESS_LOG', unlocksObservationIds: ['OBS_MANOR_ACCESS_RECORD'] }
];

const questions = [
  { id: 'Q_SALMA_ROOM', suspectId: 'S_MANOR_SALMA', responseIds: ['RESP_SALMA_ROOM'] },
  { id: 'Q_SALMA_NOISE', suspectId: 'S_MANOR_SALMA', responseIds: ['RESP_SALMA_NOISE'] },
  { id: 'Q_SALMA_MONEY', suspectId: 'S_MANOR_SALMA', responseIds: ['RESP_SALMA_MONEY'] },
  { id: 'Q_YAHYA_FINANCES', suspectId: 'S_MANOR_YAHYA', responseIds: ['RESP_YAHYA_FINANCES'] },
  { id: 'Q_YAHYA_DAGGER', suspectId: 'S_MANOR_YAHYA', responseIds: ['RESP_YAHYA_DAGGER'] },
  { id: 'Q_YAHYA_BALCONY', suspectId: 'S_MANOR_YAHYA', responseIds: ['RESP_YAHYA_BALCONY'] },
  {
    id: 'Q_YAHYA_BALCONY_CONFRONT',
    suspectId: 'S_MANOR_YAHYA',
    responseIds: ['RESP_YAHYA_BALCONY_CONFRONT'],
    requiredStatementIds: ['ST_YAHYA_01'],
    requiredEvidenceIds: ['E_MANOR_ACCESS_LOG']
  },
  { id: 'Q_FATIMA_DISCOVERY', suspectId: 'S_MANOR_FATIMA', responseIds: ['RESP_FATIMA_DISCOVERY'] },
  { id: 'Q_FATIMA_DOOR', suspectId: 'S_MANOR_FATIMA', responseIds: ['RESP_FATIMA_DOOR'] },
  { id: 'Q_FATIMA_WINDOW', suspectId: 'S_MANOR_FATIMA', responseIds: ['RESP_FATIMA_WINDOW'] },
  {
    id: 'Q_FATIMA_SIGHTING',
    suspectId: 'S_MANOR_FATIMA',
    responseIds: ['RESP_FATIMA_SIGHTING'],
    requiredEvidenceIds: ['E_MANOR_CAMERA']
  },
  { id: 'Q_OMAR_PATROL', suspectId: 'S_MANOR_OMAR', responseIds: ['RESP_OMAR_PATROL'] },
  { id: 'Q_OMAR_GATE', suspectId: 'S_MANOR_OMAR', responseIds: ['RESP_OMAR_GATE'] },
  { id: 'Q_OMAR_NOISE', suspectId: 'S_MANOR_OMAR', responseIds: ['RESP_OMAR_NOISE'] }
];

const responses = [
  { id: 'RESP_SALMA_ROOM', questionId: 'Q_SALMA_ROOM', producesStatementId: 'ST_SALMA_01' },
  { id: 'RESP_SALMA_NOISE', questionId: 'Q_SALMA_NOISE', producesStatementId: 'ST_SALMA_02' },
  { id: 'RESP_SALMA_MONEY', questionId: 'Q_SALMA_MONEY', producesStatementId: 'ST_SALMA_03' },
  { id: 'RESP_YAHYA_FINANCES', questionId: 'Q_YAHYA_FINANCES', producesStatementId: 'ST_YAHYA_03' },
  { id: 'RESP_YAHYA_DAGGER', questionId: 'Q_YAHYA_DAGGER', producesStatementId: 'ST_YAHYA_02' },
  { id: 'RESP_YAHYA_BALCONY', questionId: 'Q_YAHYA_BALCONY', producesStatementId: 'ST_YAHYA_01' },
  {
    id: 'RESP_YAHYA_BALCONY_CONFRONT',
    questionId: 'Q_YAHYA_BALCONY_CONFRONT',
    flagsObjectionId: 'OBJ_MANOR_YAHYA_BALCONY'
  },
  { id: 'RESP_FATIMA_DISCOVERY', questionId: 'Q_FATIMA_DISCOVERY', producesStatementId: 'ST_FATIMA_01' },
  { id: 'RESP_FATIMA_DOOR', questionId: 'Q_FATIMA_DOOR', producesStatementId: 'ST_FATIMA_02' },
  { id: 'RESP_FATIMA_WINDOW', questionId: 'Q_FATIMA_WINDOW', producesStatementId: 'ST_FATIMA_03' },
  {
    id: 'RESP_FATIMA_SIGHTING',
    questionId: 'Q_FATIMA_SIGHTING',
    producesStatementId: 'ST_FATIMA_04',
    producesEvidenceId: 'E_MANOR_ACCESS_LOG'
  },
  { id: 'RESP_OMAR_PATROL', questionId: 'Q_OMAR_PATROL', producesStatementId: 'ST_OMAR_01' },
  { id: 'RESP_OMAR_GATE', questionId: 'Q_OMAR_GATE', producesStatementId: 'ST_OMAR_02' },
  { id: 'RESP_OMAR_NOISE', questionId: 'Q_OMAR_NOISE', producesStatementId: 'ST_OMAR_03' }
];

const interrogations = [
  { id: 'INT_MANOR_SALMA', suspectId: 'S_MANOR_SALMA', questionIds: ['Q_SALMA_ROOM', 'Q_SALMA_NOISE', 'Q_SALMA_MONEY'] },
  {
    id: 'INT_MANOR_YAHYA',
    suspectId: 'S_MANOR_YAHYA',
    questionIds: ['Q_YAHYA_FINANCES', 'Q_YAHYA_DAGGER', 'Q_YAHYA_BALCONY', 'Q_YAHYA_BALCONY_CONFRONT']
  },
  {
    id: 'INT_MANOR_FATIMA',
    suspectId: 'S_MANOR_FATIMA',
    questionIds: ['Q_FATIMA_DISCOVERY', 'Q_FATIMA_DOOR', 'Q_FATIMA_WINDOW', 'Q_FATIMA_SIGHTING']
  },
  { id: 'INT_MANOR_OMAR', suspectId: 'S_MANOR_OMAR', questionIds: ['Q_OMAR_PATROL', 'Q_OMAR_GATE', 'Q_OMAR_NOISE'] }
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
  deductions: Object.freeze(deductions),
  evidenceAnalysis: Object.freeze(evidenceAnalysis),
  interrogations: Object.freeze(interrogations),
  questions: Object.freeze(questions),
  responses: Object.freeze(responses)
});

const eyeNileEvidence = [
  {
    id: 'E_EYE_NILE_GLOVE',
    type: 'physical',
    presentationRef: 'evidence.0',
    locationId: 'L_EYE_NILE_DISPLAY'
  },
  {
    id: 'E_EYE_NILE_ACCESS_CARD',
    type: 'document',
    presentationRef: 'evidence.1'
  },
  {
    id: 'E_EYE_NILE_CAMERA',
    type: 'record',
    presentationRef: 'evidence.2'
  },
  {
    id: 'E_EYE_NILE_HAIR',
    type: 'physical',
    presentationRef: 'evidence.3',
    locationId: 'L_EYE_NILE_DISPLAY'
  },
  {
    id: 'E_EYE_NILE_MASTER_KEYS',
    type: 'physical',
    presentationRef: 'evidence.4'
  },
  {
    id: 'E_EYE_NILE_CLOSING_ACCESS_REGISTER',
    type: 'record',
    presentationRef: 'evidence.5'
  }
];

const eyeNileObservations = [
  {
    id: 'OBS_EYE_NILE_GLOVE_AT_DISPLAY',
    type: 'location',
    presentationRef: 'evidence.0',
    sourceEvidenceId: 'E_EYE_NILE_GLOVE'
  },
  {
    id: 'OBS_EYE_NILE_CURATOR_FINGERPRINTS',
    type: 'identification',
    presentationRef: 'evidence.1',
    sourceEvidenceId: 'E_EYE_NILE_ACCESS_CARD',
    identifiesSuspectId: 'S_EYE_NILE_MAHER'
  },
  {
    id: 'OBS_EYE_NILE_BLACK_COAT_MOVEMENT',
    type: 'record',
    presentationRef: 'evidence.2',
    sourceEvidenceId: 'E_EYE_NILE_CAMERA'
  },
  {
    id: 'OBS_EYE_NILE_CAMERA_EXIT_TIME',
    type: 'record',
    presentationRef: 'evidence.2',
    sourceEvidenceId: 'E_EYE_NILE_CAMERA'
  },
  {
    id: 'OBS_EYE_NILE_HAIR_AT_FRAME',
    type: 'location',
    presentationRef: 'evidence.3',
    sourceEvidenceId: 'E_EYE_NILE_HAIR'
  },
  {
    id: 'OBS_EYE_NILE_ADMINISTRATIVE_MASTER_KEYS',
    type: 'ownership',
    presentationRef: 'evidence.4',
    sourceEvidenceId: 'E_EYE_NILE_MASTER_KEYS'
  },
  {
    id: 'OBS_EYE_NILE_GLOVE_FIBERS_AT_SCENE',
    type: 'trace',
    presentationRef: 'evidence.0',
    sourceEvidenceId: 'E_EYE_NILE_GLOVE'
  }
];

const eyeNileLocations = [
  { id: 'L_EYE_NILE_MUSEUM', presentationRef: 'victim' },
  { id: 'L_EYE_NILE_MAIN_HALL', presentationRef: 'suspects.0.alibi' },
  { id: 'L_EYE_NILE_CONTROL_ROOM', presentationRef: 'suspects.1.alibi' },
  { id: 'L_EYE_NILE_EAST_WING', presentationRef: 'suspects.2.alibi' },
  { id: 'L_EYE_NILE_WORKSHOP', presentationRef: 'suspects.2.questions.2' },
  { id: 'L_EYE_NILE_DISPLAY', presentationRef: 'evidence.0' }
];

const eyeNileStatements = [
  ['ST_EYE_NILE_RAID_KEYS', 'S_EYE_NILE_RAID', 'suspects.0.questions.0', 'access_claim'],
  ['ST_EYE_NILE_RAID_VIP_ALIBI', 'S_EYE_NILE_RAID', 'suspects.0.questions.1', 'location_claim'],
  ['ST_EYE_NILE_RAID_DISCOVERY', 'S_EYE_NILE_RAID', 'suspects.0.questions.2', 'discovery_claim'],
  ['ST_EYE_NILE_SANAA_CAMERA', 'S_EYE_NILE_SANAA', 'suspects.1.questions.0', 'camera_claim'],
  ['ST_EYE_NILE_SANAA_PATROL', 'S_EYE_NILE_SANAA', 'suspects.1.questions.1', 'location_claim'],
  ['ST_EYE_NILE_SANAA_ENTRY', 'S_EYE_NILE_SANAA', 'suspects.1.questions.2', 'access_claim'],
  ['ST_EYE_NILE_MAHER_GLOVE', 'S_EYE_NILE_MAHER', 'suspects.2.questions.0', 'evidence_claim'],
  ['ST_EYE_NILE_MAHER_ACCESS', 'S_EYE_NILE_MAHER', 'suspects.2.questions.1', 'access_claim'],
  ['ST_EYE_NILE_MAHER_WORKSHOP', 'S_EYE_NILE_MAHER', 'suspects.2.questions.2', 'location_claim'],
  ['ST_EYE_NILE_MAHER_KEY_DENIAL', 'S_EYE_NILE_MAHER', 'suspects.2.questions.2', 'access_claim'],
  ['ST_EYE_NILE_MONA_PHOTO', 'S_EYE_NILE_MONA', 'suspects.3.questions.0', 'observation_claim'],
  ['ST_EYE_NILE_MONA_DEPARTURE', 'S_EYE_NILE_MONA', 'suspects.3.questions.1', 'location_claim'],
  ['ST_EYE_NILE_MONA_COAT', 'S_EYE_NILE_MONA', 'suspects.3.questions.2', 'observation_claim']
].map(([id, suspectId, presentationRef, claimType]) => ({
  id, suspectId, presentationRef, claimType, challengeable: false
}));

const eyeNileSuspects = [
  { id: 'S_EYE_NILE_RAID', presentationRef: 'suspects.0' },
  { id: 'S_EYE_NILE_SANAA', presentationRef: 'suspects.1' },
  { id: 'S_EYE_NILE_MAHER', presentationRef: 'suspects.2' },
  { id: 'S_EYE_NILE_MONA', presentationRef: 'suspects.3' }
];

const eyeNileQuestionData = [
  ['Q_EYE_NILE_RAID_KEYS', 'S_EYE_NILE_RAID', 'ST_EYE_NILE_RAID_KEYS', 'suspects.0.questions.0'],
  ['Q_EYE_NILE_RAID_VIP', 'S_EYE_NILE_RAID', 'ST_EYE_NILE_RAID_VIP_ALIBI', 'suspects.0.questions.1'],
  ['Q_EYE_NILE_RAID_DISCOVERY', 'S_EYE_NILE_RAID', 'ST_EYE_NILE_RAID_DISCOVERY', 'suspects.0.questions.2'],
  ['Q_EYE_NILE_SANAA_CAMERA', 'S_EYE_NILE_SANAA', 'ST_EYE_NILE_SANAA_CAMERA', 'suspects.1.questions.0'],
  ['Q_EYE_NILE_SANAA_PATROL', 'S_EYE_NILE_SANAA', 'ST_EYE_NILE_SANAA_PATROL', 'suspects.1.questions.1'],
  ['Q_EYE_NILE_SANAA_ENTRY', 'S_EYE_NILE_SANAA', 'ST_EYE_NILE_SANAA_ENTRY', 'suspects.1.questions.2'],
  ['Q_EYE_NILE_MAHER_GLOVE', 'S_EYE_NILE_MAHER', 'ST_EYE_NILE_MAHER_GLOVE', 'suspects.2.questions.0'],
  ['Q_EYE_NILE_MAHER_ACCESS', 'S_EYE_NILE_MAHER', 'ST_EYE_NILE_MAHER_ACCESS', 'suspects.2.questions.1'],
  ['Q_EYE_NILE_MAHER_WORKSHOP', 'S_EYE_NILE_MAHER', 'ST_EYE_NILE_MAHER_WORKSHOP', 'suspects.2.questions.2'],
  ['Q_EYE_NILE_MAHER_KEY_REGISTER', 'S_EYE_NILE_MAHER', 'ST_EYE_NILE_MAHER_KEY_DENIAL', 'suspects.2.questions.2'],
  ['Q_EYE_NILE_MONA_PHOTO', 'S_EYE_NILE_MONA', 'ST_EYE_NILE_MONA_PHOTO', 'suspects.3.questions.0'],
  ['Q_EYE_NILE_MONA_DEPARTURE', 'S_EYE_NILE_MONA', 'ST_EYE_NILE_MONA_DEPARTURE', 'suspects.3.questions.1'],
  ['Q_EYE_NILE_MONA_COAT', 'S_EYE_NILE_MONA', 'ST_EYE_NILE_MONA_COAT', 'suspects.3.questions.2']
];

const eyeNileQuestions = eyeNileQuestionData.map(([id, suspectId, statementId, presentationRef]) => ({
  id,
  suspectId,
  responseIds: [`RESP_${id.slice(2)}`],
  producesStatementId: statementId,
  requiredEvidenceIds: id === 'Q_EYE_NILE_MAHER_KEY_REGISTER' ? ['E_EYE_NILE_CLOSING_ACCESS_REGISTER'] : undefined,
  presentationRef
}));

const eyeNileResponses = eyeNileQuestionData.map(([questionId, suspectId, statementId]) => ({
  id: `RESP_${questionId.slice(2)}`,
  questionId,
  producesStatementId: statementId
}));

const eyeNileInterrogations = eyeNileSuspects.map((suspect, index) => ({
  id: `INT_EYE_NILE_${suspect.id.slice('S_EYE_NILE_'.length)}`,
  suspectId: suspect.id,
  questionIds: eyeNileQuestions
    .filter(question => question.suspectId === suspect.id)
    .map(question => question.id)
}));

const eyeNileRelationships = [
  ['R_EYE_NILE_GLOVE_LOCATION', 'E_EYE_NILE_GLOVE', 'located_at', 'L_EYE_NILE_DISPLAY', ['E_EYE_NILE_GLOVE']],
  ['R_EYE_NILE_HAIR_LOCATION', 'E_EYE_NILE_HAIR', 'located_at', 'L_EYE_NILE_DISPLAY', ['E_EYE_NILE_HAIR']],
  ['R_EYE_NILE_CARD_CURATOR', 'E_EYE_NILE_ACCESS_CARD', 'identifies', 'S_EYE_NILE_MAHER', ['E_EYE_NILE_ACCESS_CARD']],
  ['R_EYE_NILE_GLOVE_OBSERVATION', 'E_EYE_NILE_GLOVE', 'establishes', 'OBS_EYE_NILE_GLOVE_AT_DISPLAY', ['E_EYE_NILE_GLOVE']],
  ['R_EYE_NILE_CARD_OBSERVATION', 'E_EYE_NILE_ACCESS_CARD', 'establishes', 'OBS_EYE_NILE_CURATOR_FINGERPRINTS', ['E_EYE_NILE_ACCESS_CARD']],
  ['R_EYE_NILE_CAMERA_OBSERVATION', 'E_EYE_NILE_CAMERA', 'establishes', 'OBS_EYE_NILE_BLACK_COAT_MOVEMENT', ['E_EYE_NILE_CAMERA']],
  ['R_EYE_NILE_CAMERA_EXIT_TIME', 'E_EYE_NILE_CAMERA', 'establishes', 'OBS_EYE_NILE_CAMERA_EXIT_TIME', ['E_EYE_NILE_CAMERA']],
  ['R_EYE_NILE_HAIR_OBSERVATION', 'E_EYE_NILE_HAIR', 'establishes', 'OBS_EYE_NILE_HAIR_AT_FRAME', ['E_EYE_NILE_HAIR']],
  ['R_EYE_NILE_KEYS_OBSERVATION', 'E_EYE_NILE_MASTER_KEYS', 'establishes', 'OBS_EYE_NILE_ADMINISTRATIVE_MASTER_KEYS', ['E_EYE_NILE_MASTER_KEYS']],
  ['R_EYE_NILE_REGISTER_RECORD', 'E_EYE_NILE_CLOSING_ACCESS_REGISTER', 'establishes', 'OBS_EYE_NILE_ADMINISTRATIVE_MASTER_KEYS', ['E_EYE_NILE_CLOSING_ACCESS_REGISTER']],
  ['R_EYE_NILE_GLOVE_TRACE', 'OBS_EYE_NILE_GLOVE_FIBERS_AT_SCENE', 'supports', 'H_EYE_NILE_MAHER_RESPONSIBILITY', ['OBS_EYE_NILE_GLOVE_FIBERS_AT_SCENE']],
  ['R_EYE_NILE_REGISTER_KEY_CONTROL', 'E_EYE_NILE_CLOSING_ACCESS_REGISTER', 'supports', 'H_EYE_NILE_MAHER_KEY_CONTROL', ['E_EYE_NILE_CLOSING_ACCESS_REGISTER']],
  ['R_EYE_NILE_REGISTER_KEY_METHOD', 'E_EYE_NILE_CLOSING_ACCESS_REGISTER', 'supports', 'H_EYE_NILE_DISPLAY_KEY_METHOD', ['E_EYE_NILE_CLOSING_ACCESS_REGISTER']],
  ['R_EYE_NILE_MAHER_DENIAL_CONTRADICTION', 'ST_EYE_NILE_MAHER_KEY_DENIAL', 'contradicts', 'H_EYE_NILE_MAHER_KEY_DENIAL', ['ST_EYE_NILE_MAHER_KEY_DENIAL', 'E_EYE_NILE_CLOSING_ACCESS_REGISTER']]
].map(([id, from, relation, to, sourceIds]) => ({ id, from, relation, to, sourceIds }));

const eyeNileHypotheses = [
  {
    id: 'H_EYE_NILE_DISPLAY_KEY_METHOD',
    labelKey: 'case1.hypothesis.displayKeyMethod',
    initialState: HYPOTHESIS_STATES.INSUFFICIENT
  },
  {
    id: 'H_EYE_NILE_MAHER_KEY_CONTROL',
    labelKey: 'case1.hypothesis.maherKeyControl',
    initialState: HYPOTHESIS_STATES.INSUFFICIENT
  },
  {
    id: 'H_EYE_NILE_MAHER_KEY_DENIAL',
    labelKey: 'case1.hypothesis.maherKeyDenial',
    initialState: HYPOTHESIS_STATES.INSUFFICIENT
  },
  {
    id: 'H_EYE_NILE_MAHER_RESPONSIBILITY',
    labelKey: 'case1.hypothesis.maherResponsibility',
    initialState: HYPOTHESIS_STATES.INSUFFICIENT
  }
];

const eyeNileObjections = [
  {
    id: 'OBJ_EYE_NILE_MAHER_KEY_DENIAL',
    statementId: 'ST_EYE_NILE_MAHER_KEY_DENIAL',
    evidenceIds: ['E_EYE_NILE_CLOSING_ACCESS_REGISTER'],
    relationshipId: 'R_EYE_NILE_MAHER_DENIAL_CONTRADICTION',
    resultingHypothesisId: 'H_EYE_NILE_MAHER_KEY_DENIAL',
    resultingState: HYPOTHESIS_STATES.POSSIBLE_CONTRADICTION,
    validationKey: 'case1.objection.maherKeyDenial'
  }
];

const eyeNileDeductions = [
  {
    id: 'DED_EYE_NILE_ACCESS_AND_TRACE_CHAIN',
    labelKey: 'case1.deduction.accessAndTraceChain',
    requiredEvidenceIds: ['E_EYE_NILE_CLOSING_ACCESS_REGISTER', 'E_EYE_NILE_GLOVE'],
    requiredStatementIds: ['ST_EYE_NILE_MAHER_KEY_DENIAL'],
    requiredHypothesisStates: [
      ['H_EYE_NILE_DISPLAY_KEY_METHOD', HYPOTHESIS_STATES.SUPPORTED],
      ['H_EYE_NILE_MAHER_KEY_CONTROL', HYPOTHESIS_STATES.SUPPORTED]
    ],
    requiredObjectionIds: ['OBJ_EYE_NILE_MAHER_KEY_DENIAL'],
    resultingHypothesisId: 'H_EYE_NILE_MAHER_RESPONSIBILITY',
    resultingState: HYPOTHESIS_STATES.SUPPORTED
  }
];

const eyeNileAccusationGate = {
  id: 'GATE_EYE_NILE_MAHER',
  requiredHypotheses: [
    ['H_EYE_NILE_DISPLAY_KEY_METHOD', HYPOTHESIS_STATES.SUPPORTED],
    ['H_EYE_NILE_MAHER_KEY_CONTROL', HYPOTHESIS_STATES.SUPPORTED],
    ['H_EYE_NILE_MAHER_KEY_DENIAL', HYPOTHESIS_STATES.POSSIBLE_CONTRADICTION],
    ['H_EYE_NILE_MAHER_RESPONSIBILITY', HYPOTHESIS_STATES.SUPPORTED]
  ],
  requiredObjectionIds: ['OBJ_EYE_NILE_MAHER_KEY_DENIAL'],
  requiredDeductionIds: ['DED_EYE_NILE_ACCESS_AND_TRACE_CHAIN'],
  candidateSuspectId: 'S_EYE_NILE_MAHER'
};

const caseEyeNile = Object.freeze({
  id: 'CASE_EYE_NILE_01',
  numericAlias: 1,
  titleKey: 'legacy.case1.title',
  evidenceIds: eyeNileEvidence.map(item => item.id),
  statementIds: eyeNileStatements.map(item => item.id),
  eventIds: [],
  locationIds: eyeNileLocations.map(item => item.id),
  relationshipIds: eyeNileRelationships.map(item => item.id),
  hypothesisIds: eyeNileHypotheses.map(item => item.id),
  accusationGate: eyeNileAccusationGate,
  evidence: Object.freeze(eyeNileEvidence),
  observations: Object.freeze(eyeNileObservations),
  statements: Object.freeze(eyeNileStatements),
  events: Object.freeze([]),
  locations: Object.freeze(eyeNileLocations),
  relationships: Object.freeze(eyeNileRelationships),
  hypotheses: Object.freeze(eyeNileHypotheses),
  objections: Object.freeze(eyeNileObjections),
  deductions: Object.freeze(eyeNileDeductions),
  evidenceAnalysis: Object.freeze(eyeNileEvidence.map(item => ({
    id: `EA_${item.id.slice(3)}`,
    evidenceId: item.id,
    unlocksObservationIds: eyeNileObservations
      .filter(observation => observation.sourceEvidenceId === item.id)
      .map(observation => observation.id)
  }))),
  interrogations: Object.freeze(eyeNileInterrogations),
  questions: Object.freeze(eyeNileQuestions),
  responses: Object.freeze(eyeNileResponses),
  suspects: Object.freeze(eyeNileSuspects),
  authoringTruthReference: Object.freeze({ source: 'translations.cases[1].explain' })
});

const case2 = Object.freeze({
  id: 'CASE_02',
  numericAlias: 2,
  titleKey: 'legacy.case2.title',
  victimId: 'VICTIM_CASE_2',
  suspectIds: ['S_CASE_2_1','S_CASE_2_2','S_CASE_2_3','S_CASE_2_4'],
  evidenceIds: ['E_CASE_2_01','E_CASE_2_02','E_CASE_2_03','E_CASE_2_04','E_CASE_2_05'],
  statementIds: ['ST_CASE_2_S0_Q0','ST_CASE_2_S0_Q1','ST_CASE_2_S0_Q2','ST_CASE_2_S0_Q3','ST_CASE_2_S1_Q0','ST_CASE_2_S1_Q1','ST_CASE_2_S1_Q2','ST_CASE_2_S2_Q0','ST_CASE_2_S2_Q1','ST_CASE_2_S2_Q2','ST_CASE_2_S3_Q0','ST_CASE_2_S3_Q1','ST_CASE_2_S3_Q2'],
  eventIds: [],
  locationIds: ['L_CASE_2_CAR','L_CASE_2_FOREST','L_CASE_2_HOME_GARAGE','L_CASE_2_UNIVERSITY'],
  relationshipIds: ['R_CASE_2_PHONE_CONTACT','R_CASE_2_THREAT_MOTIVE','R_CASE_2_JOURNAL_MOTIVE','R_CASE_2_TIRE_METHOD','R_CASE_2_TIRE_IDENTIFIES_ZIAD','R_CASE_2_TIRE_OPPORTUNITY','R_CASE_2_COFFEE_RECENT_MEETING','R_CASE_2_ALIBI_CONTRADICTION','R_CASE_2_RESPONSIBILITY_REQUIREMENTS'],
  hypothesisIds: ['H_CASE_2_METHOD','H_CASE_2_MOTIVE','H_CASE_2_OPPORTUNITY','H_CASE_2_ALIBI','H_CASE_2_RESPONSIBILITY'],
  accusationGate: {
    id: 'GATE_CASE_2_ZIAD_RESPONSIBILITY',
    requiredHypotheses: [['H_CASE_2_METHOD','SUPPORTED'],['H_CASE_2_MOTIVE','SUPPORTED'],['H_CASE_2_OPPORTUNITY','SUPPORTED'],['H_CASE_2_ALIBI','POSSIBLE_CONTRADICTION'],['H_CASE_2_RESPONSIBILITY','SUPPORTED']],
    requiredObjectionIds: ['OBJ_CASE_2_ZIAD_CAR_DENIAL'],
    requiredDeductionIds: ['DED_CASE_2_ZIAD_RESPONSIBILITY'],
    candidateSuspectId: 'S_CASE_2_1'
  },
  evidence: Object.freeze([
    {id:'E_CASE_2_01',type:'record',presentationRef:'evidence.0',locationId:'L_CASE_2_CAR'},
    {id:'E_CASE_2_02',type:'document',presentationRef:'evidence.1',locationId:'L_CASE_2_CAR'},
    {id:'E_CASE_2_03',type:'physical',presentationRef:'evidence.2',locationId:'L_CASE_2_FOREST'},
    {id:'E_CASE_2_04',type:'physical',presentationRef:'evidence.3',locationId:'L_CASE_2_CAR'},
    {id:'E_CASE_2_05',type:'journal',presentationRef:'evidence.4'}
  ]),
  observations: Object.freeze([
    {id:'OBS_CASE_2_01',type:'communication',presentationRef:'evidence.0',sourceEvidenceId:'E_CASE_2_01'},
    {id:'OBS_CASE_2_02',type:'threat',presentationRef:'evidence.1',sourceEvidenceId:'E_CASE_2_02'},
    {id:'OBS_CASE_2_03',type:'tire_pattern',presentationRef:'evidence.2',sourceEvidenceId:'E_CASE_2_03'},
    {id:'OBS_CASE_2_04',type:'tire_identification',presentationRef:'evidence.2',sourceEvidenceId:'E_CASE_2_03',identifiesSuspectId:'S_CASE_2_1'},
    {id:'OBS_CASE_2_05',type:'recent_presence',presentationRef:'evidence.3',sourceEvidenceId:'E_CASE_2_04'},
    {id:'OBS_CASE_2_06',type:'stalking_report',presentationRef:'evidence.4',sourceEvidenceId:'E_CASE_2_05'}
  ]),
  statements: Object.freeze([
    {id:'ST_CASE_2_S0_Q0',suspectId:'S_CASE_2_1',presentationRef:'suspects.0.questions.0',claimType:'contact_claim',challengeable:false},
    {id:'ST_CASE_2_S0_Q1',suspectId:'S_CASE_2_1',presentationRef:'suspects.0.questions.1',claimType:'threat_claim',challengeable:false},
    {id:'ST_CASE_2_S0_Q2',suspectId:'S_CASE_2_1',presentationRef:'suspects.0.questions.2',claimType:'location_claim',challengeable:true},
    {id:'ST_CASE_2_S0_Q3',suspectId:'S_CASE_2_1',presentationRef:'suspects.0.questions.3',claimType:'vehicle_presence_denial',challengeable:true},
    {id:'ST_CASE_2_S1_Q0',suspectId:'S_CASE_2_2',presentationRef:'suspects.1.questions.0',claimType:'relationship_claim',challengeable:false},
    {id:'ST_CASE_2_S1_Q1',suspectId:'S_CASE_2_2',presentationRef:'suspects.1.questions.1',claimType:'tire_claim',challengeable:false},
    {id:'ST_CASE_2_S1_Q2',suspectId:'S_CASE_2_2',presentationRef:'suspects.1.questions.2',claimType:'location_claim',challengeable:false},
    {id:'ST_CASE_2_S2_Q0',suspectId:'S_CASE_2_3',presentationRef:'suspects.2.questions.0',claimType:'observation_claim',challengeable:false},
    {id:'ST_CASE_2_S2_Q1',suspectId:'S_CASE_2_3',presentationRef:'suspects.2.questions.1',claimType:'return_time_claim',challengeable:false},
    {id:'ST_CASE_2_S2_Q2',suspectId:'S_CASE_2_3',presentationRef:'suspects.2.questions.2',claimType:'observation_claim',challengeable:false},
    {id:'ST_CASE_2_S3_Q0',suspectId:'S_CASE_2_4',presentationRef:'suspects.3.questions.0',claimType:'attendance_claim',challengeable:false},
    {id:'ST_CASE_2_S3_Q1',suspectId:'S_CASE_2_4',presentationRef:'suspects.3.questions.1',claimType:'anxiety_claim',challengeable:false},
    {id:'ST_CASE_2_S3_Q2',suspectId:'S_CASE_2_4',presentationRef:'suspects.3.questions.2',claimType:'performance_claim',challengeable:false}
  ]),
  events: Object.freeze([]),
  locations: Object.freeze([
    {id:'L_CASE_2_CAR',labelKey:'case2.location.car'},
    {id:'L_CASE_2_FOREST',labelKey:'case2.location.forest'},
    {id:'L_CASE_2_HOME_GARAGE',labelKey:'case2.location.garage'},
    {id:'L_CASE_2_UNIVERSITY',labelKey:'case2.location.university'}
  ]),
  relationships: Object.freeze([
    {id:'R_CASE_2_PHONE_CONTACT',from:'E_CASE_2_01',relation:'identifies',to:'S_CASE_2_1',sourceIds:['E_CASE_2_01']},
    {id:'R_CASE_2_THREAT_MOTIVE',from:'E_CASE_2_02',relation:'supports',to:'H_CASE_2_MOTIVE',sourceIds:['E_CASE_2_02']},
    {id:'R_CASE_2_JOURNAL_MOTIVE',from:'E_CASE_2_05',relation:'supports',to:'H_CASE_2_MOTIVE',sourceIds:['E_CASE_2_05']},
    {id:'R_CASE_2_TIRE_METHOD',from:'E_CASE_2_03',relation:'supports',to:'H_CASE_2_METHOD',sourceIds:['E_CASE_2_03']},
    {id:'R_CASE_2_TIRE_IDENTIFIES_ZIAD',from:'E_CASE_2_03',relation:'identifies',to:'S_CASE_2_1',sourceIds:['E_CASE_2_03','OBS_CASE_2_04']},
    {id:'R_CASE_2_TIRE_OPPORTUNITY',from:'E_CASE_2_03',relation:'supports',to:'H_CASE_2_OPPORTUNITY',sourceIds:['E_CASE_2_03','OBS_CASE_2_04']},
    {id:'R_CASE_2_COFFEE_RECENT_MEETING',from:'E_CASE_2_04',relation:'supports',to:'H_CASE_2_OPPORTUNITY',sourceIds:['E_CASE_2_04']},
    {id:'R_CASE_2_ALIBI_CONTRADICTION',from:'ST_CASE_2_S0_Q3',relation:'contradicts',to:'H_CASE_2_ALIBI',sourceIds:['ST_CASE_2_S0_Q3','E_CASE_2_03']},
    {id:'R_CASE_2_RESPONSIBILITY_REQUIREMENTS',from:'H_CASE_2_METHOD',relation:'requires',to:'H_CASE_2_RESPONSIBILITY',sourceIds:['H_CASE_2_METHOD','H_CASE_2_MOTIVE','H_CASE_2_OPPORTUNITY']}
  ]),
  hypotheses: Object.freeze([
    {id:'H_CASE_2_METHOD',labelKey:'case2.hypothesis.method',initialState:'INSUFFICIENT'},
    {id:'H_CASE_2_MOTIVE',labelKey:'case2.hypothesis.motive',initialState:'INSUFFICIENT'},
    {id:'H_CASE_2_OPPORTUNITY',labelKey:'case2.hypothesis.opportunity',initialState:'INSUFFICIENT'},
    {id:'H_CASE_2_ALIBI',labelKey:'case2.hypothesis.alibi',initialState:'INSUFFICIENT'},
    {id:'H_CASE_2_RESPONSIBILITY',labelKey:'case2.hypothesis.responsibility',initialState:'INSUFFICIENT'}
  ]),
  objections: Object.freeze([
    {id:'OBJ_CASE_2_ZIAD_CAR_DENIAL',statementId:'ST_CASE_2_S0_Q3',evidenceIds:['E_CASE_2_03'],relationshipId:'R_CASE_2_ALIBI_CONTRADICTION',resultingHypothesisId:'H_CASE_2_ALIBI',resultingState:'POSSIBLE_CONTRADICTION',validationKey:'case2.objection.ziadCarDenial'}
  ]),
  deductions: Object.freeze([
    {id:'DED_CASE_2_ZIAD_RESPONSIBILITY',labelKey:'case2.deduction.responsibility',requiredEvidenceIds:['E_CASE_2_01','E_CASE_2_02','E_CASE_2_03'],requiredStatementIds:['ST_CASE_2_S0_Q2','ST_CASE_2_S0_Q3'],requiredHypothesisStates:[['H_CASE_2_METHOD','SUPPORTED'],['H_CASE_2_MOTIVE','SUPPORTED'],['H_CASE_2_OPPORTUNITY','SUPPORTED']],requiredObjectionIds:['OBJ_CASE_2_ZIAD_CAR_DENIAL'],resultingHypothesisId:'H_CASE_2_RESPONSIBILITY',resultingState:'SUPPORTED'}
  ]),
  evidenceAnalysis: Object.freeze([
    {id:'EA_CASE_2_01',evidenceId:'E_CASE_2_01',unlocksObservationIds:['OBS_CASE_2_01']},
    {id:'EA_CASE_2_02',evidenceId:'E_CASE_2_02',unlocksObservationIds:['OBS_CASE_2_02']},
    {id:'EA_CASE_2_03',evidenceId:'E_CASE_2_03',unlocksObservationIds:['OBS_CASE_2_03','OBS_CASE_2_04']},
    {id:'EA_CASE_2_04',evidenceId:'E_CASE_2_04',unlocksObservationIds:['OBS_CASE_2_05']},
    {id:'EA_CASE_2_05',evidenceId:'E_CASE_2_05',unlocksObservationIds:['OBS_CASE_2_06']}
  ]),
  interrogations: Object.freeze([
    {id:'INT_CASE_2_1',suspectId:'S_CASE_2_1',questionIds:['Q_CASE_2_S0_Q0','Q_CASE_2_S0_Q1','Q_CASE_2_S0_Q2','Q_CASE_2_S0_Q3']},
    {id:'INT_CASE_2_2',suspectId:'S_CASE_2_2',questionIds:['Q_CASE_2_S1_Q0','Q_CASE_2_S1_Q1','Q_CASE_2_S1_Q2']},
    {id:'INT_CASE_2_3',suspectId:'S_CASE_2_3',questionIds:['Q_CASE_2_S2_Q0','Q_CASE_2_S2_Q1','Q_CASE_2_S2_Q2']},
    {id:'INT_CASE_2_4',suspectId:'S_CASE_2_4',questionIds:['Q_CASE_2_S3_Q0','Q_CASE_2_S3_Q1','Q_CASE_2_S3_Q2']}
  ]),
  questions: Object.freeze([
    {id:'Q_CASE_2_S0_Q0',suspectId:'S_CASE_2_1',responseIds:['RESP_CASE_2_S0_Q0'],producesStatementId:'ST_CASE_2_S0_Q0',presentationRef:'suspects.0.questions.0'},
    {id:'Q_CASE_2_S0_Q1',suspectId:'S_CASE_2_1',responseIds:['RESP_CASE_2_S0_Q1'],producesStatementId:'ST_CASE_2_S0_Q1',presentationRef:'suspects.0.questions.1'},
    {id:'Q_CASE_2_S0_Q2',suspectId:'S_CASE_2_1',responseIds:['RESP_CASE_2_S0_Q2'],producesStatementId:'ST_CASE_2_S0_Q2',presentationRef:'suspects.0.questions.2'},
    {id:'Q_CASE_2_S0_Q3',suspectId:'S_CASE_2_1',responseIds:['RESP_CASE_2_S0_Q3'],producesStatementId:'ST_CASE_2_S0_Q3',presentationRef:'suspects.0.questions.3',requiredEvidenceIds:['E_CASE_2_03']},
    {id:'Q_CASE_2_S1_Q0',suspectId:'S_CASE_2_2',responseIds:['RESP_CASE_2_S1_Q0'],producesStatementId:'ST_CASE_2_S1_Q0',presentationRef:'suspects.1.questions.0'},
    {id:'Q_CASE_2_S1_Q1',suspectId:'S_CASE_2_2',responseIds:['RESP_CASE_2_S1_Q1'],producesStatementId:'ST_CASE_2_S1_Q1',presentationRef:'suspects.1.questions.1'},
    {id:'Q_CASE_2_S1_Q2',suspectId:'S_CASE_2_2',responseIds:['RESP_CASE_2_S1_Q2'],producesStatementId:'ST_CASE_2_S1_Q2',presentationRef:'suspects.1.questions.2'},
    {id:'Q_CASE_2_S2_Q0',suspectId:'S_CASE_2_3',responseIds:['RESP_CASE_2_S2_Q0'],producesStatementId:'ST_CASE_2_S2_Q0',presentationRef:'suspects.2.questions.0'},
    {id:'Q_CASE_2_S2_Q1',suspectId:'S_CASE_2_3',responseIds:['RESP_CASE_2_S2_Q1'],producesStatementId:'ST_CASE_2_S2_Q1',presentationRef:'suspects.2.questions.1'},
    {id:'Q_CASE_2_S2_Q2',suspectId:'S_CASE_2_3',responseIds:['RESP_CASE_2_S2_Q2'],producesStatementId:'ST_CASE_2_S2_Q2',presentationRef:'suspects.2.questions.2'},
    {id:'Q_CASE_2_S3_Q0',suspectId:'S_CASE_2_4',responseIds:['RESP_CASE_2_S3_Q0'],producesStatementId:'ST_CASE_2_S3_Q0',presentationRef:'suspects.3.questions.0'},
    {id:'Q_CASE_2_S3_Q1',suspectId:'S_CASE_2_4',responseIds:['RESP_CASE_2_S3_Q1'],producesStatementId:'ST_CASE_2_S3_Q1',presentationRef:'suspects.3.questions.1'},
    {id:'Q_CASE_2_S3_Q2',suspectId:'S_CASE_2_4',responseIds:['RESP_CASE_2_S3_Q2'],producesStatementId:'ST_CASE_2_S3_Q2',presentationRef:'suspects.3.questions.2'}
  ]),
  responses: Object.freeze([
    {id:'RESP_CASE_2_S0_Q0',questionId:'Q_CASE_2_S0_Q0',producesStatementId:'ST_CASE_2_S0_Q0'},
    {id:'RESP_CASE_2_S0_Q1',questionId:'Q_CASE_2_S0_Q1',producesStatementId:'ST_CASE_2_S0_Q1'},
    {id:'RESP_CASE_2_S0_Q2',questionId:'Q_CASE_2_S0_Q2',producesStatementId:'ST_CASE_2_S0_Q2'},
    {id:'RESP_CASE_2_S0_Q3',questionId:'Q_CASE_2_S0_Q3',producesStatementId:'ST_CASE_2_S0_Q3'},
    {id:'RESP_CASE_2_S1_Q0',questionId:'Q_CASE_2_S1_Q0',producesStatementId:'ST_CASE_2_S1_Q0'},
    {id:'RESP_CASE_2_S1_Q1',questionId:'Q_CASE_2_S1_Q1',producesStatementId:'ST_CASE_2_S1_Q1'},
    {id:'RESP_CASE_2_S1_Q2',questionId:'Q_CASE_2_S1_Q2',producesStatementId:'ST_CASE_2_S1_Q2'},
    {id:'RESP_CASE_2_S2_Q0',questionId:'Q_CASE_2_S2_Q0',producesStatementId:'ST_CASE_2_S2_Q0'},
    {id:'RESP_CASE_2_S2_Q1',questionId:'Q_CASE_2_S2_Q1',producesStatementId:'ST_CASE_2_S2_Q1'},
    {id:'RESP_CASE_2_S2_Q2',questionId:'Q_CASE_2_S2_Q2',producesStatementId:'ST_CASE_2_S2_Q2'},
    {id:'RESP_CASE_2_S3_Q0',questionId:'Q_CASE_2_S3_Q0',producesStatementId:'ST_CASE_2_S3_Q0'},
    {id:'RESP_CASE_2_S3_Q1',questionId:'Q_CASE_2_S3_Q1',producesStatementId:'ST_CASE_2_S3_Q1'},
    {id:'RESP_CASE_2_S3_Q2',questionId:'Q_CASE_2_S3_Q2',producesStatementId:'ST_CASE_2_S3_Q2'}
  ]),
  suspects: Object.freeze([
    {id:'S_CASE_2_1',nameKey:'legacy.case2.suspect1.name'},
    {id:'S_CASE_2_2',nameKey:'legacy.case2.suspect2.name'},
    {id:'S_CASE_2_3',nameKey:'legacy.case2.suspect3.name'},
    {id:'S_CASE_2_4',nameKey:'legacy.case2.suspect4.name'}
  ]),
  authoringTruthReference: Object.freeze({source:'translations.cases[2].explain'})
});

const case3 = Object.freeze({
  "id": "CASE_03",
  "numericAlias": 3,
  "titleKey": "legacy.case3.title",
  "victimId": "VICTIM_CASE_3",
  "suspectIds": [
    "S_CASE_3_1",
    "S_CASE_3_2",
    "S_CASE_3_3",
    "S_CASE_3_4"
  ],
  "evidenceIds": [
    "E_CASE_3_01",
    "E_CASE_3_02",
    "E_CASE_3_03",
    "E_CASE_3_04",
    "E_CASE_3_05",
    "E_CASE_3_06"
  ],
  "statementIds": [
    "ST_CASE_3_S0_Q0",
    "ST_CASE_3_S0_Q1",
    "ST_CASE_3_S0_Q2",
    "ST_CASE_3_S1_Q0",
    "ST_CASE_3_S1_Q1",
    "ST_CASE_3_S1_Q2",
    "ST_CASE_3_S1_Q3",
    "ST_CASE_3_S2_Q0",
    "ST_CASE_3_S2_Q1",
    "ST_CASE_3_S2_Q2",
    "ST_CASE_3_S3_Q0",
    "ST_CASE_3_S3_Q1",
    "ST_CASE_3_S3_Q2"
  ],
  "eventIds": [],
  "locationIds": [
    "L_CASE_3_SCENE"
  ],
  "relationshipIds": [
    "R_CASE_3_METHOD",
    "R_CASE_3_MOTIVE",
    "R_CASE_3_OPPORTUNITY",
    "R_CASE_3_ALIBI_CONTRADICTION"
  ],
  "hypothesisIds": [
    "H_CASE_3_METHOD",
    "H_CASE_3_MOTIVE",
    "H_CASE_3_OPPORTUNITY",
    "H_CASE_3_ALIBI",
    "H_CASE_3_RESPONSIBILITY"
  ],
  "accusationGate": {
    "id": "GATE_CASE_3_RESPONSIBILITY",
    "requiredHypotheses": [
      [
        "H_CASE_3_METHOD",
        "SUPPORTED"
      ],
      [
        "H_CASE_3_MOTIVE",
        "SUPPORTED"
      ],
      [
        "H_CASE_3_OPPORTUNITY",
        "SUPPORTED"
      ],
      [
        "H_CASE_3_ALIBI",
        "POSSIBLE_CONTRADICTION"
      ],
      [
        "H_CASE_3_RESPONSIBILITY",
        "SUPPORTED"
      ]
    ],
    "requiredObjectionIds": [
      "OBJ_CASE_3_CULPRIT_DENIAL"
    ],
    "requiredDeductionIds": [
      "DED_CASE_3_RESPONSIBILITY"
    ],
    "candidateSuspectId": "S_CASE_3_2"
  },
  "evidence": [
    {
      "id": "E_CASE_3_01",
      "type": "physical",
      "observationKey": "case3.observation.e1",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_3_02",
      "type": "physical",
      "observationKey": "case3.observation.e2",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_3_03",
      "type": "physical",
      "observationKey": "case3.observation.e3",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_3_04",
      "type": "record",
      "observationKey": "case3.observation.e4",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_3_05",
      "type": "record",
      "observationKey": "case3.observation.e5",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_3_06",
      "type": "forensic",
      "observationKey": "case3.observation.authoredTrace",
      "metadata": {
        "playerVisible": true,
        "identifiesSuspectId": "S_CASE_3_2"
      }
    }
  ],
  "observations": [
    {
      "id": "OBS_CASE_3_01",
      "type": "scene_fact",
      "textKey": "case3.observation.e1",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_3_02",
      "type": "scene_fact",
      "textKey": "case3.observation.e2",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_3_03",
      "type": "scene_fact",
      "textKey": "case3.observation.e3",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_3_04",
      "type": "scene_fact",
      "textKey": "case3.observation.e4",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_3_05",
      "type": "scene_fact",
      "textKey": "case3.observation.e5",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_3_06",
      "type": "forensic",
      "textKey": "case3.observation.authoredTrace",
      "playerVisible": true,
      "identifiesSuspectId": "S_CASE_3_2"
    }
  ],
  "statements": [
    {
      "id": "ST_CASE_3_S0_Q0",
      "suspectId": "S_CASE_3_1",
      "textKey": "case3.statement.s1q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_3_S0_Q1",
      "suspectId": "S_CASE_3_1",
      "textKey": "case3.statement.s1q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_3_S0_Q2",
      "suspectId": "S_CASE_3_1",
      "textKey": "case3.statement.s1q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_3_S1_Q0",
      "suspectId": "S_CASE_3_2",
      "textKey": "case3.statement.s2q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_3_S1_Q1",
      "suspectId": "S_CASE_3_2",
      "textKey": "case3.statement.s2q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_3_S1_Q2",
      "suspectId": "S_CASE_3_2",
      "textKey": "case3.statement.s2q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_3_S1_Q3",
      "suspectId": "S_CASE_3_2",
      "textKey": "case3.statement.authoredChallenge",
      "claimType": "denial",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_3_S2_Q0",
      "suspectId": "S_CASE_3_3",
      "textKey": "case3.statement.s3q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_3_S2_Q1",
      "suspectId": "S_CASE_3_3",
      "textKey": "case3.statement.s3q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_3_S2_Q2",
      "suspectId": "S_CASE_3_3",
      "textKey": "case3.statement.s3q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_3_S3_Q0",
      "suspectId": "S_CASE_3_4",
      "textKey": "case3.statement.s4q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_3_S3_Q1",
      "suspectId": "S_CASE_3_4",
      "textKey": "case3.statement.s4q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_3_S3_Q2",
      "suspectId": "S_CASE_3_4",
      "textKey": "case3.statement.s4q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    }
  ],
  "events": [],
  "locations": [
    {
      "id": "L_CASE_3_SCENE",
      "labelKey": "case3.location.scene"
    }
  ],
  "relationships": [
    {
      "id": "R_CASE_3_METHOD",
      "from": "E_CASE_3_01",
      "to": "H_CASE_3_METHOD",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_3_01"
      ]
    },
    {
      "id": "R_CASE_3_MOTIVE",
      "from": "E_CASE_3_05",
      "to": "H_CASE_3_MOTIVE",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_3_05"
      ]
    },
    {
      "id": "R_CASE_3_OPPORTUNITY",
      "from": "E_CASE_3_06",
      "to": "H_CASE_3_OPPORTUNITY",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_3_06"
      ]
    },
    {
      "id": "R_CASE_3_ALIBI_CONTRADICTION",
      "from": "E_CASE_3_06",
      "to": "H_CASE_3_ALIBI",
      "relation": "contradicts",
      "sourceIds": [
        "E_CASE_3_06",
        "ST_CASE_3_S1_Q3"
      ]
    }
  ],
  "hypotheses": [
    {
      "id": "H_CASE_3_METHOD",
      "labelKey": "case3.hypothesis.method",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_3_MOTIVE",
      "labelKey": "case3.hypothesis.motive",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_3_OPPORTUNITY",
      "labelKey": "case3.hypothesis.opportunity",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_3_ALIBI",
      "labelKey": "case3.hypothesis.alibi",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_3_RESPONSIBILITY",
      "labelKey": "case3.hypothesis.responsibility",
      "initialState": "INSUFFICIENT"
    }
  ],
  "objections": [
    {
      "id": "OBJ_CASE_3_CULPRIT_DENIAL",
      "statementId": "ST_CASE_3_S1_Q3",
      "evidenceIds": [
        "E_CASE_3_06"
      ],
      "relationshipId": "R_CASE_3_ALIBI_CONTRADICTION",
      "resultingHypothesisId": "H_CASE_3_ALIBI",
      "resultingState": "POSSIBLE_CONTRADICTION",
      "validationKey": "case3.objection.culpritDenial"
    }
  ],
  "deductions": [
    {
      "id": "DED_CASE_3_RESPONSIBILITY",
      "labelKey": "case3.deduction.responsibility",
      "requiredEvidenceIds": [
        "E_CASE_3_01",
        "E_CASE_3_05",
        "E_CASE_3_06"
      ],
      "requiredStatementIds": [
        "ST_CASE_3_S1_Q3"
      ],
      "requiredHypothesisStates": [
        [
          "H_CASE_3_METHOD",
          "SUPPORTED"
        ],
        [
          "H_CASE_3_MOTIVE",
          "SUPPORTED"
        ],
        [
          "H_CASE_3_OPPORTUNITY",
          "SUPPORTED"
        ]
      ],
      "requiredObjectionIds": [
        "OBJ_CASE_3_CULPRIT_DENIAL"
      ],
      "resultingHypothesisId": "H_CASE_3_RESPONSIBILITY",
      "resultingState": "SUPPORTED"
    }
  ],
  "evidenceAnalysis": [
    {
      "id": "EA_CASE_3_01",
      "evidenceId": "E_CASE_3_01",
      "unlocksObservationIds": [
        "OBS_CASE_3_01"
      ]
    },
    {
      "id": "EA_CASE_3_02",
      "evidenceId": "E_CASE_3_02",
      "unlocksObservationIds": [
        "OBS_CASE_3_02"
      ]
    },
    {
      "id": "EA_CASE_3_03",
      "evidenceId": "E_CASE_3_03",
      "unlocksObservationIds": [
        "OBS_CASE_3_03"
      ]
    },
    {
      "id": "EA_CASE_3_04",
      "evidenceId": "E_CASE_3_04",
      "unlocksObservationIds": [
        "OBS_CASE_3_04"
      ]
    },
    {
      "id": "EA_CASE_3_05",
      "evidenceId": "E_CASE_3_05",
      "unlocksObservationIds": [
        "OBS_CASE_3_05"
      ]
    },
    {
      "id": "EA_CASE_3_06",
      "evidenceId": "E_CASE_3_06",
      "unlocksObservationIds": [
        "OBS_CASE_3_06"
      ]
    }
  ],
  "interrogations": [
    {
      "id": "INT_CASE_3_S1",
      "suspectId": "S_CASE_3_1",
      "questionIds": [
        "Q_CASE_3_S0_Q0",
        "Q_CASE_3_S0_Q1",
        "Q_CASE_3_S0_Q2"
      ]
    },
    {
      "id": "INT_CASE_3_S2",
      "suspectId": "S_CASE_3_2",
      "questionIds": [
        "Q_CASE_3_S1_Q0",
        "Q_CASE_3_S1_Q1",
        "Q_CASE_3_S1_Q2",
        "Q_CASE_3_S1_Q3"
      ]
    },
    {
      "id": "INT_CASE_3_S3",
      "suspectId": "S_CASE_3_3",
      "questionIds": [
        "Q_CASE_3_S2_Q0",
        "Q_CASE_3_S2_Q1",
        "Q_CASE_3_S2_Q2"
      ]
    },
    {
      "id": "INT_CASE_3_S4",
      "suspectId": "S_CASE_3_4",
      "questionIds": [
        "Q_CASE_3_S3_Q0",
        "Q_CASE_3_S3_Q1",
        "Q_CASE_3_S3_Q2"
      ]
    }
  ],
  "questions": [
    {
      "id": "Q_CASE_3_S0_Q0",
      "suspectId": "S_CASE_3_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_3_S0_Q0"
      ]
    },
    {
      "id": "Q_CASE_3_S0_Q1",
      "suspectId": "S_CASE_3_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_3_S0_Q1"
      ]
    },
    {
      "id": "Q_CASE_3_S0_Q2",
      "suspectId": "S_CASE_3_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_3_S0_Q2"
      ]
    },
    {
      "id": "Q_CASE_3_S1_Q0",
      "suspectId": "S_CASE_3_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_3_S1_Q0"
      ]
    },
    {
      "id": "Q_CASE_3_S1_Q1",
      "suspectId": "S_CASE_3_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_3_S1_Q1"
      ]
    },
    {
      "id": "Q_CASE_3_S1_Q2",
      "suspectId": "S_CASE_3_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_3_S1_Q2"
      ]
    },
    {
      "id": "Q_CASE_3_S1_Q3",
      "suspectId": "S_CASE_3_2",
      "requiredEvidenceIds": [
        "E_CASE_3_06"
      ],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_3_S1_Q3"
      ]
    },
    {
      "id": "Q_CASE_3_S2_Q0",
      "suspectId": "S_CASE_3_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_3_S2_Q0"
      ]
    },
    {
      "id": "Q_CASE_3_S2_Q1",
      "suspectId": "S_CASE_3_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_3_S2_Q1"
      ]
    },
    {
      "id": "Q_CASE_3_S2_Q2",
      "suspectId": "S_CASE_3_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_3_S2_Q2"
      ]
    },
    {
      "id": "Q_CASE_3_S3_Q0",
      "suspectId": "S_CASE_3_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_3_S3_Q0"
      ]
    },
    {
      "id": "Q_CASE_3_S3_Q1",
      "suspectId": "S_CASE_3_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_3_S3_Q1"
      ]
    },
    {
      "id": "Q_CASE_3_S3_Q2",
      "suspectId": "S_CASE_3_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_3_S3_Q2"
      ]
    }
  ],
  "responses": [
    {
      "id": "RESP_CASE_3_S0_Q0",
      "questionId": "Q_CASE_3_S0_Q0",
      "producesStatementId": "ST_CASE_3_S0_Q0"
    },
    {
      "id": "RESP_CASE_3_S0_Q1",
      "questionId": "Q_CASE_3_S0_Q1",
      "producesStatementId": "ST_CASE_3_S0_Q1"
    },
    {
      "id": "RESP_CASE_3_S0_Q2",
      "questionId": "Q_CASE_3_S0_Q2",
      "producesStatementId": "ST_CASE_3_S0_Q2"
    },
    {
      "id": "RESP_CASE_3_S1_Q0",
      "questionId": "Q_CASE_3_S1_Q0",
      "producesStatementId": "ST_CASE_3_S1_Q0"
    },
    {
      "id": "RESP_CASE_3_S1_Q1",
      "questionId": "Q_CASE_3_S1_Q1",
      "producesStatementId": "ST_CASE_3_S1_Q1"
    },
    {
      "id": "RESP_CASE_3_S1_Q2",
      "questionId": "Q_CASE_3_S1_Q2",
      "producesStatementId": "ST_CASE_3_S1_Q2"
    },
    {
      "id": "RESP_CASE_3_S1_Q3",
      "questionId": "Q_CASE_3_S1_Q3",
      "producesStatementId": "ST_CASE_3_S1_Q3"
    },
    {
      "id": "RESP_CASE_3_S2_Q0",
      "questionId": "Q_CASE_3_S2_Q0",
      "producesStatementId": "ST_CASE_3_S2_Q0"
    },
    {
      "id": "RESP_CASE_3_S2_Q1",
      "questionId": "Q_CASE_3_S2_Q1",
      "producesStatementId": "ST_CASE_3_S2_Q1"
    },
    {
      "id": "RESP_CASE_3_S2_Q2",
      "questionId": "Q_CASE_3_S2_Q2",
      "producesStatementId": "ST_CASE_3_S2_Q2"
    },
    {
      "id": "RESP_CASE_3_S3_Q0",
      "questionId": "Q_CASE_3_S3_Q0",
      "producesStatementId": "ST_CASE_3_S3_Q0"
    },
    {
      "id": "RESP_CASE_3_S3_Q1",
      "questionId": "Q_CASE_3_S3_Q1",
      "producesStatementId": "ST_CASE_3_S3_Q1"
    },
    {
      "id": "RESP_CASE_3_S3_Q2",
      "questionId": "Q_CASE_3_S3_Q2",
      "producesStatementId": "ST_CASE_3_S3_Q2"
    }
  ],
  "suspects": [
    {
      "id": "S_CASE_3_1",
      "nameKey": "legacy.case3.suspect1.name"
    },
    {
      "id": "S_CASE_3_2",
      "nameKey": "legacy.case3.suspect2.name"
    },
    {
      "id": "S_CASE_3_3",
      "nameKey": "legacy.case3.suspect3.name"
    },
    {
      "id": "S_CASE_3_4",
      "nameKey": "legacy.case3.suspect4.name"
    }
  ],
  "authoringTruthReference": {
    "source": "translations.cases[3].explain"
  }
});

const case4 = Object.freeze({
  "id": "CASE_04",
  "numericAlias": 4,
  "titleKey": "legacy.case4.title",
  "victimId": "VICTIM_CASE_4",
  "suspectIds": [
    "S_CASE_4_1",
    "S_CASE_4_2",
    "S_CASE_4_3",
    "S_CASE_4_4"
  ],
  "evidenceIds": [
    "E_CASE_4_01",
    "E_CASE_4_02",
    "E_CASE_4_03",
    "E_CASE_4_04",
    "E_CASE_4_05",
    "E_CASE_4_06"
  ],
  "statementIds": [
    "ST_CASE_4_S0_Q0",
    "ST_CASE_4_S0_Q1",
    "ST_CASE_4_S0_Q2",
    "ST_CASE_4_S1_Q0",
    "ST_CASE_4_S1_Q1",
    "ST_CASE_4_S1_Q2",
    "ST_CASE_4_S2_Q0",
    "ST_CASE_4_S2_Q1",
    "ST_CASE_4_S2_Q2",
    "ST_CASE_4_S2_Q3",
    "ST_CASE_4_S3_Q0",
    "ST_CASE_4_S3_Q1",
    "ST_CASE_4_S3_Q2"
  ],
  "eventIds": [],
  "locationIds": [
    "L_CASE_4_SCENE"
  ],
  "relationshipIds": [
    "R_CASE_4_METHOD",
    "R_CASE_4_MOTIVE",
    "R_CASE_4_OPPORTUNITY",
    "R_CASE_4_ALIBI_CONTRADICTION"
  ],
  "hypothesisIds": [
    "H_CASE_4_METHOD",
    "H_CASE_4_MOTIVE",
    "H_CASE_4_OPPORTUNITY",
    "H_CASE_4_ALIBI",
    "H_CASE_4_RESPONSIBILITY"
  ],
  "accusationGate": {
    "id": "GATE_CASE_4_RESPONSIBILITY",
    "requiredHypotheses": [
      [
        "H_CASE_4_METHOD",
        "SUPPORTED"
      ],
      [
        "H_CASE_4_MOTIVE",
        "SUPPORTED"
      ],
      [
        "H_CASE_4_OPPORTUNITY",
        "SUPPORTED"
      ],
      [
        "H_CASE_4_ALIBI",
        "POSSIBLE_CONTRADICTION"
      ],
      [
        "H_CASE_4_RESPONSIBILITY",
        "SUPPORTED"
      ]
    ],
    "requiredObjectionIds": [
      "OBJ_CASE_4_CULPRIT_DENIAL"
    ],
    "requiredDeductionIds": [
      "DED_CASE_4_RESPONSIBILITY"
    ],
    "candidateSuspectId": "S_CASE_4_3"
  },
  "evidence": [
    {
      "id": "E_CASE_4_01",
      "type": "physical",
      "observationKey": "case4.observation.e1",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_4_02",
      "type": "physical",
      "observationKey": "case4.observation.e2",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_4_03",
      "type": "physical",
      "observationKey": "case4.observation.e3",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_4_04",
      "type": "record",
      "observationKey": "case4.observation.e4",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_4_05",
      "type": "record",
      "observationKey": "case4.observation.e5",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_4_06",
      "type": "forensic",
      "observationKey": "case4.observation.authoredTrace",
      "metadata": {
        "playerVisible": true,
        "identifiesSuspectId": "S_CASE_4_3"
      }
    }
  ],
  "observations": [
    {
      "id": "OBS_CASE_4_01",
      "type": "scene_fact",
      "textKey": "case4.observation.e1",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_4_02",
      "type": "scene_fact",
      "textKey": "case4.observation.e2",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_4_03",
      "type": "scene_fact",
      "textKey": "case4.observation.e3",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_4_04",
      "type": "scene_fact",
      "textKey": "case4.observation.e4",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_4_05",
      "type": "scene_fact",
      "textKey": "case4.observation.e5",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_4_06",
      "type": "forensic",
      "textKey": "case4.observation.authoredTrace",
      "playerVisible": true,
      "identifiesSuspectId": "S_CASE_4_3"
    }
  ],
  "statements": [
    {
      "id": "ST_CASE_4_S0_Q0",
      "suspectId": "S_CASE_4_1",
      "textKey": "case4.statement.s1q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_4_S0_Q1",
      "suspectId": "S_CASE_4_1",
      "textKey": "case4.statement.s1q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_4_S0_Q2",
      "suspectId": "S_CASE_4_1",
      "textKey": "case4.statement.s1q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_4_S1_Q0",
      "suspectId": "S_CASE_4_2",
      "textKey": "case4.statement.s2q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_4_S1_Q1",
      "suspectId": "S_CASE_4_2",
      "textKey": "case4.statement.s2q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_4_S1_Q2",
      "suspectId": "S_CASE_4_2",
      "textKey": "case4.statement.s2q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_4_S2_Q0",
      "suspectId": "S_CASE_4_3",
      "textKey": "case4.statement.s3q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_4_S2_Q1",
      "suspectId": "S_CASE_4_3",
      "textKey": "case4.statement.s3q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_4_S2_Q2",
      "suspectId": "S_CASE_4_3",
      "textKey": "case4.statement.s3q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_4_S2_Q3",
      "suspectId": "S_CASE_4_3",
      "textKey": "case4.statement.authoredChallenge",
      "claimType": "denial",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_4_S3_Q0",
      "suspectId": "S_CASE_4_4",
      "textKey": "case4.statement.s4q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_4_S3_Q1",
      "suspectId": "S_CASE_4_4",
      "textKey": "case4.statement.s4q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_4_S3_Q2",
      "suspectId": "S_CASE_4_4",
      "textKey": "case4.statement.s4q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    }
  ],
  "events": [],
  "locations": [
    {
      "id": "L_CASE_4_SCENE",
      "labelKey": "case4.location.scene"
    }
  ],
  "relationships": [
    {
      "id": "R_CASE_4_METHOD",
      "from": "E_CASE_4_01",
      "to": "H_CASE_4_METHOD",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_4_01"
      ]
    },
    {
      "id": "R_CASE_4_MOTIVE",
      "from": "E_CASE_4_05",
      "to": "H_CASE_4_MOTIVE",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_4_05"
      ]
    },
    {
      "id": "R_CASE_4_OPPORTUNITY",
      "from": "E_CASE_4_06",
      "to": "H_CASE_4_OPPORTUNITY",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_4_06"
      ]
    },
    {
      "id": "R_CASE_4_ALIBI_CONTRADICTION",
      "from": "E_CASE_4_06",
      "to": "H_CASE_4_ALIBI",
      "relation": "contradicts",
      "sourceIds": [
        "E_CASE_4_06",
        "ST_CASE_4_S2_Q3"
      ]
    }
  ],
  "hypotheses": [
    {
      "id": "H_CASE_4_METHOD",
      "labelKey": "case4.hypothesis.method",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_4_MOTIVE",
      "labelKey": "case4.hypothesis.motive",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_4_OPPORTUNITY",
      "labelKey": "case4.hypothesis.opportunity",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_4_ALIBI",
      "labelKey": "case4.hypothesis.alibi",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_4_RESPONSIBILITY",
      "labelKey": "case4.hypothesis.responsibility",
      "initialState": "INSUFFICIENT"
    }
  ],
  "objections": [
    {
      "id": "OBJ_CASE_4_CULPRIT_DENIAL",
      "statementId": "ST_CASE_4_S2_Q3",
      "evidenceIds": [
        "E_CASE_4_06"
      ],
      "relationshipId": "R_CASE_4_ALIBI_CONTRADICTION",
      "resultingHypothesisId": "H_CASE_4_ALIBI",
      "resultingState": "POSSIBLE_CONTRADICTION",
      "validationKey": "case4.objection.culpritDenial"
    }
  ],
  "deductions": [
    {
      "id": "DED_CASE_4_RESPONSIBILITY",
      "labelKey": "case4.deduction.responsibility",
      "requiredEvidenceIds": [
        "E_CASE_4_01",
        "E_CASE_4_05",
        "E_CASE_4_06"
      ],
      "requiredStatementIds": [
        "ST_CASE_4_S2_Q3"
      ],
      "requiredHypothesisStates": [
        [
          "H_CASE_4_METHOD",
          "SUPPORTED"
        ],
        [
          "H_CASE_4_MOTIVE",
          "SUPPORTED"
        ],
        [
          "H_CASE_4_OPPORTUNITY",
          "SUPPORTED"
        ]
      ],
      "requiredObjectionIds": [
        "OBJ_CASE_4_CULPRIT_DENIAL"
      ],
      "resultingHypothesisId": "H_CASE_4_RESPONSIBILITY",
      "resultingState": "SUPPORTED"
    }
  ],
  "evidenceAnalysis": [
    {
      "id": "EA_CASE_4_01",
      "evidenceId": "E_CASE_4_01",
      "unlocksObservationIds": [
        "OBS_CASE_4_01"
      ]
    },
    {
      "id": "EA_CASE_4_02",
      "evidenceId": "E_CASE_4_02",
      "unlocksObservationIds": [
        "OBS_CASE_4_02"
      ]
    },
    {
      "id": "EA_CASE_4_03",
      "evidenceId": "E_CASE_4_03",
      "unlocksObservationIds": [
        "OBS_CASE_4_03"
      ]
    },
    {
      "id": "EA_CASE_4_04",
      "evidenceId": "E_CASE_4_04",
      "unlocksObservationIds": [
        "OBS_CASE_4_04"
      ]
    },
    {
      "id": "EA_CASE_4_05",
      "evidenceId": "E_CASE_4_05",
      "unlocksObservationIds": [
        "OBS_CASE_4_05"
      ]
    },
    {
      "id": "EA_CASE_4_06",
      "evidenceId": "E_CASE_4_06",
      "unlocksObservationIds": [
        "OBS_CASE_4_06"
      ]
    }
  ],
  "interrogations": [
    {
      "id": "INT_CASE_4_S1",
      "suspectId": "S_CASE_4_1",
      "questionIds": [
        "Q_CASE_4_S0_Q0",
        "Q_CASE_4_S0_Q1",
        "Q_CASE_4_S0_Q2"
      ]
    },
    {
      "id": "INT_CASE_4_S2",
      "suspectId": "S_CASE_4_2",
      "questionIds": [
        "Q_CASE_4_S1_Q0",
        "Q_CASE_4_S1_Q1",
        "Q_CASE_4_S1_Q2"
      ]
    },
    {
      "id": "INT_CASE_4_S3",
      "suspectId": "S_CASE_4_3",
      "questionIds": [
        "Q_CASE_4_S2_Q0",
        "Q_CASE_4_S2_Q1",
        "Q_CASE_4_S2_Q2",
        "Q_CASE_4_S2_Q3"
      ]
    },
    {
      "id": "INT_CASE_4_S4",
      "suspectId": "S_CASE_4_4",
      "questionIds": [
        "Q_CASE_4_S3_Q0",
        "Q_CASE_4_S3_Q1",
        "Q_CASE_4_S3_Q2"
      ]
    }
  ],
  "questions": [
    {
      "id": "Q_CASE_4_S0_Q0",
      "suspectId": "S_CASE_4_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_4_S0_Q0"
      ]
    },
    {
      "id": "Q_CASE_4_S0_Q1",
      "suspectId": "S_CASE_4_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_4_S0_Q1"
      ]
    },
    {
      "id": "Q_CASE_4_S0_Q2",
      "suspectId": "S_CASE_4_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_4_S0_Q2"
      ]
    },
    {
      "id": "Q_CASE_4_S1_Q0",
      "suspectId": "S_CASE_4_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_4_S1_Q0"
      ]
    },
    {
      "id": "Q_CASE_4_S1_Q1",
      "suspectId": "S_CASE_4_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_4_S1_Q1"
      ]
    },
    {
      "id": "Q_CASE_4_S1_Q2",
      "suspectId": "S_CASE_4_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_4_S1_Q2"
      ]
    },
    {
      "id": "Q_CASE_4_S2_Q0",
      "suspectId": "S_CASE_4_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_4_S2_Q0"
      ]
    },
    {
      "id": "Q_CASE_4_S2_Q1",
      "suspectId": "S_CASE_4_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_4_S2_Q1"
      ]
    },
    {
      "id": "Q_CASE_4_S2_Q2",
      "suspectId": "S_CASE_4_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_4_S2_Q2"
      ]
    },
    {
      "id": "Q_CASE_4_S2_Q3",
      "suspectId": "S_CASE_4_3",
      "requiredEvidenceIds": [
        "E_CASE_4_06"
      ],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_4_S2_Q3"
      ]
    },
    {
      "id": "Q_CASE_4_S3_Q0",
      "suspectId": "S_CASE_4_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_4_S3_Q0"
      ]
    },
    {
      "id": "Q_CASE_4_S3_Q1",
      "suspectId": "S_CASE_4_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_4_S3_Q1"
      ]
    },
    {
      "id": "Q_CASE_4_S3_Q2",
      "suspectId": "S_CASE_4_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_4_S3_Q2"
      ]
    }
  ],
  "responses": [
    {
      "id": "RESP_CASE_4_S0_Q0",
      "questionId": "Q_CASE_4_S0_Q0",
      "producesStatementId": "ST_CASE_4_S0_Q0"
    },
    {
      "id": "RESP_CASE_4_S0_Q1",
      "questionId": "Q_CASE_4_S0_Q1",
      "producesStatementId": "ST_CASE_4_S0_Q1"
    },
    {
      "id": "RESP_CASE_4_S0_Q2",
      "questionId": "Q_CASE_4_S0_Q2",
      "producesStatementId": "ST_CASE_4_S0_Q2"
    },
    {
      "id": "RESP_CASE_4_S1_Q0",
      "questionId": "Q_CASE_4_S1_Q0",
      "producesStatementId": "ST_CASE_4_S1_Q0"
    },
    {
      "id": "RESP_CASE_4_S1_Q1",
      "questionId": "Q_CASE_4_S1_Q1",
      "producesStatementId": "ST_CASE_4_S1_Q1"
    },
    {
      "id": "RESP_CASE_4_S1_Q2",
      "questionId": "Q_CASE_4_S1_Q2",
      "producesStatementId": "ST_CASE_4_S1_Q2"
    },
    {
      "id": "RESP_CASE_4_S2_Q0",
      "questionId": "Q_CASE_4_S2_Q0",
      "producesStatementId": "ST_CASE_4_S2_Q0"
    },
    {
      "id": "RESP_CASE_4_S2_Q1",
      "questionId": "Q_CASE_4_S2_Q1",
      "producesStatementId": "ST_CASE_4_S2_Q1"
    },
    {
      "id": "RESP_CASE_4_S2_Q2",
      "questionId": "Q_CASE_4_S2_Q2",
      "producesStatementId": "ST_CASE_4_S2_Q2"
    },
    {
      "id": "RESP_CASE_4_S2_Q3",
      "questionId": "Q_CASE_4_S2_Q3",
      "producesStatementId": "ST_CASE_4_S2_Q3"
    },
    {
      "id": "RESP_CASE_4_S3_Q0",
      "questionId": "Q_CASE_4_S3_Q0",
      "producesStatementId": "ST_CASE_4_S3_Q0"
    },
    {
      "id": "RESP_CASE_4_S3_Q1",
      "questionId": "Q_CASE_4_S3_Q1",
      "producesStatementId": "ST_CASE_4_S3_Q1"
    },
    {
      "id": "RESP_CASE_4_S3_Q2",
      "questionId": "Q_CASE_4_S3_Q2",
      "producesStatementId": "ST_CASE_4_S3_Q2"
    }
  ],
  "suspects": [
    {
      "id": "S_CASE_4_1",
      "nameKey": "legacy.case4.suspect1.name"
    },
    {
      "id": "S_CASE_4_2",
      "nameKey": "legacy.case4.suspect2.name"
    },
    {
      "id": "S_CASE_4_3",
      "nameKey": "legacy.case4.suspect3.name"
    },
    {
      "id": "S_CASE_4_4",
      "nameKey": "legacy.case4.suspect4.name"
    }
  ],
  "authoringTruthReference": {
    "source": "translations.cases[4].explain"
  }
});

const case5 = Object.freeze({
  "id": "CASE_05",
  "numericAlias": 5,
  "titleKey": "legacy.case5.title",
  "victimId": "VICTIM_CASE_5",
  "suspectIds": [
    "S_CASE_5_1",
    "S_CASE_5_2",
    "S_CASE_5_3",
    "S_CASE_5_4"
  ],
  "evidenceIds": [
    "E_CASE_5_01",
    "E_CASE_5_02",
    "E_CASE_5_03",
    "E_CASE_5_04",
    "E_CASE_5_05",
    "E_CASE_5_06"
  ],
  "statementIds": [
    "ST_CASE_5_S0_Q0",
    "ST_CASE_5_S0_Q1",
    "ST_CASE_5_S0_Q2",
    "ST_CASE_5_S0_Q3",
    "ST_CASE_5_S1_Q0",
    "ST_CASE_5_S1_Q1",
    "ST_CASE_5_S1_Q2",
    "ST_CASE_5_S2_Q0",
    "ST_CASE_5_S2_Q1",
    "ST_CASE_5_S2_Q2",
    "ST_CASE_5_S3_Q0",
    "ST_CASE_5_S3_Q1",
    "ST_CASE_5_S3_Q2"
  ],
  "eventIds": [],
  "locationIds": [
    "L_CASE_5_SCENE"
  ],
  "relationshipIds": [
    "R_CASE_5_METHOD",
    "R_CASE_5_MOTIVE",
    "R_CASE_5_OPPORTUNITY",
    "R_CASE_5_ALIBI_CONTRADICTION"
  ],
  "hypothesisIds": [
    "H_CASE_5_METHOD",
    "H_CASE_5_MOTIVE",
    "H_CASE_5_OPPORTUNITY",
    "H_CASE_5_ALIBI",
    "H_CASE_5_RESPONSIBILITY"
  ],
  "accusationGate": {
    "id": "GATE_CASE_5_RESPONSIBILITY",
    "requiredHypotheses": [
      [
        "H_CASE_5_METHOD",
        "SUPPORTED"
      ],
      [
        "H_CASE_5_MOTIVE",
        "SUPPORTED"
      ],
      [
        "H_CASE_5_OPPORTUNITY",
        "SUPPORTED"
      ],
      [
        "H_CASE_5_ALIBI",
        "POSSIBLE_CONTRADICTION"
      ],
      [
        "H_CASE_5_RESPONSIBILITY",
        "SUPPORTED"
      ]
    ],
    "requiredObjectionIds": [
      "OBJ_CASE_5_CULPRIT_DENIAL"
    ],
    "requiredDeductionIds": [
      "DED_CASE_5_RESPONSIBILITY"
    ],
    "candidateSuspectId": "S_CASE_5_1"
  },
  "evidence": [
    {
      "id": "E_CASE_5_01",
      "type": "physical",
      "observationKey": "case5.observation.e1",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_5_02",
      "type": "physical",
      "observationKey": "case5.observation.e2",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_5_03",
      "type": "physical",
      "observationKey": "case5.observation.e3",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_5_04",
      "type": "record",
      "observationKey": "case5.observation.e4",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_5_05",
      "type": "record",
      "observationKey": "case5.observation.e5",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_5_06",
      "type": "forensic",
      "observationKey": "case5.observation.authoredTrace",
      "metadata": {
        "playerVisible": true,
        "identifiesSuspectId": "S_CASE_5_1"
      }
    }
  ],
  "observations": [
    {
      "id": "OBS_CASE_5_01",
      "type": "scene_fact",
      "textKey": "case5.observation.e1",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_5_02",
      "type": "scene_fact",
      "textKey": "case5.observation.e2",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_5_03",
      "type": "scene_fact",
      "textKey": "case5.observation.e3",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_5_04",
      "type": "scene_fact",
      "textKey": "case5.observation.e4",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_5_05",
      "type": "scene_fact",
      "textKey": "case5.observation.e5",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_5_06",
      "type": "forensic",
      "textKey": "case5.observation.authoredTrace",
      "playerVisible": true,
      "identifiesSuspectId": "S_CASE_5_1"
    }
  ],
  "statements": [
    {
      "id": "ST_CASE_5_S0_Q0",
      "suspectId": "S_CASE_5_1",
      "textKey": "case5.statement.s1q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_5_S0_Q1",
      "suspectId": "S_CASE_5_1",
      "textKey": "case5.statement.s1q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_5_S0_Q2",
      "suspectId": "S_CASE_5_1",
      "textKey": "case5.statement.s1q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_5_S0_Q3",
      "suspectId": "S_CASE_5_1",
      "textKey": "case5.statement.authoredChallenge",
      "claimType": "denial",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_5_S1_Q0",
      "suspectId": "S_CASE_5_2",
      "textKey": "case5.statement.s2q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_5_S1_Q1",
      "suspectId": "S_CASE_5_2",
      "textKey": "case5.statement.s2q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_5_S1_Q2",
      "suspectId": "S_CASE_5_2",
      "textKey": "case5.statement.s2q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_5_S2_Q0",
      "suspectId": "S_CASE_5_3",
      "textKey": "case5.statement.s3q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_5_S2_Q1",
      "suspectId": "S_CASE_5_3",
      "textKey": "case5.statement.s3q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_5_S2_Q2",
      "suspectId": "S_CASE_5_3",
      "textKey": "case5.statement.s3q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_5_S3_Q0",
      "suspectId": "S_CASE_5_4",
      "textKey": "case5.statement.s4q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_5_S3_Q1",
      "suspectId": "S_CASE_5_4",
      "textKey": "case5.statement.s4q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_5_S3_Q2",
      "suspectId": "S_CASE_5_4",
      "textKey": "case5.statement.s4q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    }
  ],
  "events": [],
  "locations": [
    {
      "id": "L_CASE_5_SCENE",
      "labelKey": "case5.location.scene"
    }
  ],
  "relationships": [
    {
      "id": "R_CASE_5_METHOD",
      "from": "E_CASE_5_01",
      "to": "H_CASE_5_METHOD",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_5_01"
      ]
    },
    {
      "id": "R_CASE_5_MOTIVE",
      "from": "E_CASE_5_05",
      "to": "H_CASE_5_MOTIVE",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_5_05"
      ]
    },
    {
      "id": "R_CASE_5_OPPORTUNITY",
      "from": "E_CASE_5_06",
      "to": "H_CASE_5_OPPORTUNITY",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_5_06"
      ]
    },
    {
      "id": "R_CASE_5_ALIBI_CONTRADICTION",
      "from": "E_CASE_5_06",
      "to": "H_CASE_5_ALIBI",
      "relation": "contradicts",
      "sourceIds": [
        "E_CASE_5_06",
        "ST_CASE_5_S0_Q3"
      ]
    }
  ],
  "hypotheses": [
    {
      "id": "H_CASE_5_METHOD",
      "labelKey": "case5.hypothesis.method",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_5_MOTIVE",
      "labelKey": "case5.hypothesis.motive",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_5_OPPORTUNITY",
      "labelKey": "case5.hypothesis.opportunity",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_5_ALIBI",
      "labelKey": "case5.hypothesis.alibi",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_5_RESPONSIBILITY",
      "labelKey": "case5.hypothesis.responsibility",
      "initialState": "INSUFFICIENT"
    }
  ],
  "objections": [
    {
      "id": "OBJ_CASE_5_CULPRIT_DENIAL",
      "statementId": "ST_CASE_5_S0_Q3",
      "evidenceIds": [
        "E_CASE_5_06"
      ],
      "relationshipId": "R_CASE_5_ALIBI_CONTRADICTION",
      "resultingHypothesisId": "H_CASE_5_ALIBI",
      "resultingState": "POSSIBLE_CONTRADICTION",
      "validationKey": "case5.objection.culpritDenial"
    }
  ],
  "deductions": [
    {
      "id": "DED_CASE_5_RESPONSIBILITY",
      "labelKey": "case5.deduction.responsibility",
      "requiredEvidenceIds": [
        "E_CASE_5_01",
        "E_CASE_5_05",
        "E_CASE_5_06"
      ],
      "requiredStatementIds": [
        "ST_CASE_5_S0_Q3"
      ],
      "requiredHypothesisStates": [
        [
          "H_CASE_5_METHOD",
          "SUPPORTED"
        ],
        [
          "H_CASE_5_MOTIVE",
          "SUPPORTED"
        ],
        [
          "H_CASE_5_OPPORTUNITY",
          "SUPPORTED"
        ]
      ],
      "requiredObjectionIds": [
        "OBJ_CASE_5_CULPRIT_DENIAL"
      ],
      "resultingHypothesisId": "H_CASE_5_RESPONSIBILITY",
      "resultingState": "SUPPORTED"
    }
  ],
  "evidenceAnalysis": [
    {
      "id": "EA_CASE_5_01",
      "evidenceId": "E_CASE_5_01",
      "unlocksObservationIds": [
        "OBS_CASE_5_01"
      ]
    },
    {
      "id": "EA_CASE_5_02",
      "evidenceId": "E_CASE_5_02",
      "unlocksObservationIds": [
        "OBS_CASE_5_02"
      ]
    },
    {
      "id": "EA_CASE_5_03",
      "evidenceId": "E_CASE_5_03",
      "unlocksObservationIds": [
        "OBS_CASE_5_03"
      ]
    },
    {
      "id": "EA_CASE_5_04",
      "evidenceId": "E_CASE_5_04",
      "unlocksObservationIds": [
        "OBS_CASE_5_04"
      ]
    },
    {
      "id": "EA_CASE_5_05",
      "evidenceId": "E_CASE_5_05",
      "unlocksObservationIds": [
        "OBS_CASE_5_05"
      ]
    },
    {
      "id": "EA_CASE_5_06",
      "evidenceId": "E_CASE_5_06",
      "unlocksObservationIds": [
        "OBS_CASE_5_06"
      ]
    }
  ],
  "interrogations": [
    {
      "id": "INT_CASE_5_S1",
      "suspectId": "S_CASE_5_1",
      "questionIds": [
        "Q_CASE_5_S0_Q0",
        "Q_CASE_5_S0_Q1",
        "Q_CASE_5_S0_Q2",
        "Q_CASE_5_S0_Q3"
      ]
    },
    {
      "id": "INT_CASE_5_S2",
      "suspectId": "S_CASE_5_2",
      "questionIds": [
        "Q_CASE_5_S1_Q0",
        "Q_CASE_5_S1_Q1",
        "Q_CASE_5_S1_Q2"
      ]
    },
    {
      "id": "INT_CASE_5_S3",
      "suspectId": "S_CASE_5_3",
      "questionIds": [
        "Q_CASE_5_S2_Q0",
        "Q_CASE_5_S2_Q1",
        "Q_CASE_5_S2_Q2"
      ]
    },
    {
      "id": "INT_CASE_5_S4",
      "suspectId": "S_CASE_5_4",
      "questionIds": [
        "Q_CASE_5_S3_Q0",
        "Q_CASE_5_S3_Q1",
        "Q_CASE_5_S3_Q2"
      ]
    }
  ],
  "questions": [
    {
      "id": "Q_CASE_5_S0_Q0",
      "suspectId": "S_CASE_5_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_5_S0_Q0"
      ]
    },
    {
      "id": "Q_CASE_5_S0_Q1",
      "suspectId": "S_CASE_5_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_5_S0_Q1"
      ]
    },
    {
      "id": "Q_CASE_5_S0_Q2",
      "suspectId": "S_CASE_5_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_5_S0_Q2"
      ]
    },
    {
      "id": "Q_CASE_5_S0_Q3",
      "suspectId": "S_CASE_5_1",
      "requiredEvidenceIds": [
        "E_CASE_5_06"
      ],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_5_S0_Q3"
      ]
    },
    {
      "id": "Q_CASE_5_S1_Q0",
      "suspectId": "S_CASE_5_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_5_S1_Q0"
      ]
    },
    {
      "id": "Q_CASE_5_S1_Q1",
      "suspectId": "S_CASE_5_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_5_S1_Q1"
      ]
    },
    {
      "id": "Q_CASE_5_S1_Q2",
      "suspectId": "S_CASE_5_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_5_S1_Q2"
      ]
    },
    {
      "id": "Q_CASE_5_S2_Q0",
      "suspectId": "S_CASE_5_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_5_S2_Q0"
      ]
    },
    {
      "id": "Q_CASE_5_S2_Q1",
      "suspectId": "S_CASE_5_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_5_S2_Q1"
      ]
    },
    {
      "id": "Q_CASE_5_S2_Q2",
      "suspectId": "S_CASE_5_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_5_S2_Q2"
      ]
    },
    {
      "id": "Q_CASE_5_S3_Q0",
      "suspectId": "S_CASE_5_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_5_S3_Q0"
      ]
    },
    {
      "id": "Q_CASE_5_S3_Q1",
      "suspectId": "S_CASE_5_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_5_S3_Q1"
      ]
    },
    {
      "id": "Q_CASE_5_S3_Q2",
      "suspectId": "S_CASE_5_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_5_S3_Q2"
      ]
    }
  ],
  "responses": [
    {
      "id": "RESP_CASE_5_S0_Q0",
      "questionId": "Q_CASE_5_S0_Q0",
      "producesStatementId": "ST_CASE_5_S0_Q0"
    },
    {
      "id": "RESP_CASE_5_S0_Q1",
      "questionId": "Q_CASE_5_S0_Q1",
      "producesStatementId": "ST_CASE_5_S0_Q1"
    },
    {
      "id": "RESP_CASE_5_S0_Q2",
      "questionId": "Q_CASE_5_S0_Q2",
      "producesStatementId": "ST_CASE_5_S0_Q2"
    },
    {
      "id": "RESP_CASE_5_S0_Q3",
      "questionId": "Q_CASE_5_S0_Q3",
      "producesStatementId": "ST_CASE_5_S0_Q3"
    },
    {
      "id": "RESP_CASE_5_S1_Q0",
      "questionId": "Q_CASE_5_S1_Q0",
      "producesStatementId": "ST_CASE_5_S1_Q0"
    },
    {
      "id": "RESP_CASE_5_S1_Q1",
      "questionId": "Q_CASE_5_S1_Q1",
      "producesStatementId": "ST_CASE_5_S1_Q1"
    },
    {
      "id": "RESP_CASE_5_S1_Q2",
      "questionId": "Q_CASE_5_S1_Q2",
      "producesStatementId": "ST_CASE_5_S1_Q2"
    },
    {
      "id": "RESP_CASE_5_S2_Q0",
      "questionId": "Q_CASE_5_S2_Q0",
      "producesStatementId": "ST_CASE_5_S2_Q0"
    },
    {
      "id": "RESP_CASE_5_S2_Q1",
      "questionId": "Q_CASE_5_S2_Q1",
      "producesStatementId": "ST_CASE_5_S2_Q1"
    },
    {
      "id": "RESP_CASE_5_S2_Q2",
      "questionId": "Q_CASE_5_S2_Q2",
      "producesStatementId": "ST_CASE_5_S2_Q2"
    },
    {
      "id": "RESP_CASE_5_S3_Q0",
      "questionId": "Q_CASE_5_S3_Q0",
      "producesStatementId": "ST_CASE_5_S3_Q0"
    },
    {
      "id": "RESP_CASE_5_S3_Q1",
      "questionId": "Q_CASE_5_S3_Q1",
      "producesStatementId": "ST_CASE_5_S3_Q1"
    },
    {
      "id": "RESP_CASE_5_S3_Q2",
      "questionId": "Q_CASE_5_S3_Q2",
      "producesStatementId": "ST_CASE_5_S3_Q2"
    }
  ],
  "suspects": [
    {
      "id": "S_CASE_5_1",
      "nameKey": "legacy.case5.suspect1.name"
    },
    {
      "id": "S_CASE_5_2",
      "nameKey": "legacy.case5.suspect2.name"
    },
    {
      "id": "S_CASE_5_3",
      "nameKey": "legacy.case5.suspect3.name"
    },
    {
      "id": "S_CASE_5_4",
      "nameKey": "legacy.case5.suspect4.name"
    }
  ],
  "authoringTruthReference": {
    "source": "translations.cases[5].explain"
  }
});

const case6 = Object.freeze({
  "id": "CASE_06",
  "numericAlias": 6,
  "titleKey": "legacy.case6.title",
  "victimId": "VICTIM_CASE_6",
  "suspectIds": [
    "S_CASE_6_1",
    "S_CASE_6_2",
    "S_CASE_6_3",
    "S_CASE_6_4"
  ],
  "evidenceIds": [
    "E_CASE_6_01",
    "E_CASE_6_02",
    "E_CASE_6_03",
    "E_CASE_6_04",
    "E_CASE_6_05",
    "E_CASE_6_06"
  ],
  "statementIds": [
    "ST_CASE_6_S0_Q0",
    "ST_CASE_6_S0_Q1",
    "ST_CASE_6_S0_Q2",
    "ST_CASE_6_S1_Q0",
    "ST_CASE_6_S1_Q1",
    "ST_CASE_6_S1_Q2",
    "ST_CASE_6_S2_Q0",
    "ST_CASE_6_S2_Q1",
    "ST_CASE_6_S2_Q2",
    "ST_CASE_6_S2_Q3",
    "ST_CASE_6_S3_Q0",
    "ST_CASE_6_S3_Q1",
    "ST_CASE_6_S3_Q2"
  ],
  "eventIds": [],
  "locationIds": [
    "L_CASE_6_SCENE"
  ],
  "relationshipIds": [
    "R_CASE_6_METHOD",
    "R_CASE_6_MOTIVE",
    "R_CASE_6_OPPORTUNITY",
    "R_CASE_6_ALIBI_CONTRADICTION"
  ],
  "hypothesisIds": [
    "H_CASE_6_METHOD",
    "H_CASE_6_MOTIVE",
    "H_CASE_6_OPPORTUNITY",
    "H_CASE_6_ALIBI",
    "H_CASE_6_RESPONSIBILITY"
  ],
  "accusationGate": {
    "id": "GATE_CASE_6_RESPONSIBILITY",
    "requiredHypotheses": [
      [
        "H_CASE_6_METHOD",
        "SUPPORTED"
      ],
      [
        "H_CASE_6_MOTIVE",
        "SUPPORTED"
      ],
      [
        "H_CASE_6_OPPORTUNITY",
        "SUPPORTED"
      ],
      [
        "H_CASE_6_ALIBI",
        "POSSIBLE_CONTRADICTION"
      ],
      [
        "H_CASE_6_RESPONSIBILITY",
        "SUPPORTED"
      ]
    ],
    "requiredObjectionIds": [
      "OBJ_CASE_6_CULPRIT_DENIAL"
    ],
    "requiredDeductionIds": [
      "DED_CASE_6_RESPONSIBILITY"
    ],
    "candidateSuspectId": "S_CASE_6_3"
  },
  "evidence": [
    {
      "id": "E_CASE_6_01",
      "type": "physical",
      "observationKey": "case6.observation.e1",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_6_02",
      "type": "physical",
      "observationKey": "case6.observation.e2",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_6_03",
      "type": "physical",
      "observationKey": "case6.observation.e3",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_6_04",
      "type": "record",
      "observationKey": "case6.observation.e4",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_6_05",
      "type": "record",
      "observationKey": "case6.observation.e5",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_6_06",
      "type": "forensic",
      "observationKey": "case6.observation.authoredTrace",
      "metadata": {
        "playerVisible": true,
        "identifiesSuspectId": "S_CASE_6_3"
      }
    }
  ],
  "observations": [
    {
      "id": "OBS_CASE_6_01",
      "type": "scene_fact",
      "textKey": "case6.observation.e1",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_6_02",
      "type": "scene_fact",
      "textKey": "case6.observation.e2",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_6_03",
      "type": "scene_fact",
      "textKey": "case6.observation.e3",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_6_04",
      "type": "scene_fact",
      "textKey": "case6.observation.e4",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_6_05",
      "type": "scene_fact",
      "textKey": "case6.observation.e5",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_6_06",
      "type": "forensic",
      "textKey": "case6.observation.authoredTrace",
      "playerVisible": true,
      "identifiesSuspectId": "S_CASE_6_3"
    }
  ],
  "statements": [
    {
      "id": "ST_CASE_6_S0_Q0",
      "suspectId": "S_CASE_6_1",
      "textKey": "case6.statement.s1q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_6_S0_Q1",
      "suspectId": "S_CASE_6_1",
      "textKey": "case6.statement.s1q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_6_S0_Q2",
      "suspectId": "S_CASE_6_1",
      "textKey": "case6.statement.s1q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_6_S1_Q0",
      "suspectId": "S_CASE_6_2",
      "textKey": "case6.statement.s2q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_6_S1_Q1",
      "suspectId": "S_CASE_6_2",
      "textKey": "case6.statement.s2q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_6_S1_Q2",
      "suspectId": "S_CASE_6_2",
      "textKey": "case6.statement.s2q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_6_S2_Q0",
      "suspectId": "S_CASE_6_3",
      "textKey": "case6.statement.s3q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_6_S2_Q1",
      "suspectId": "S_CASE_6_3",
      "textKey": "case6.statement.s3q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_6_S2_Q2",
      "suspectId": "S_CASE_6_3",
      "textKey": "case6.statement.s3q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_6_S2_Q3",
      "suspectId": "S_CASE_6_3",
      "textKey": "case6.statement.authoredChallenge",
      "claimType": "denial",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_6_S3_Q0",
      "suspectId": "S_CASE_6_4",
      "textKey": "case6.statement.s4q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_6_S3_Q1",
      "suspectId": "S_CASE_6_4",
      "textKey": "case6.statement.s4q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_6_S3_Q2",
      "suspectId": "S_CASE_6_4",
      "textKey": "case6.statement.s4q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    }
  ],
  "events": [],
  "locations": [
    {
      "id": "L_CASE_6_SCENE",
      "labelKey": "case6.location.scene"
    }
  ],
  "relationships": [
    {
      "id": "R_CASE_6_METHOD",
      "from": "E_CASE_6_01",
      "to": "H_CASE_6_METHOD",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_6_01"
      ]
    },
    {
      "id": "R_CASE_6_MOTIVE",
      "from": "E_CASE_6_05",
      "to": "H_CASE_6_MOTIVE",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_6_05"
      ]
    },
    {
      "id": "R_CASE_6_OPPORTUNITY",
      "from": "E_CASE_6_06",
      "to": "H_CASE_6_OPPORTUNITY",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_6_06"
      ]
    },
    {
      "id": "R_CASE_6_ALIBI_CONTRADICTION",
      "from": "E_CASE_6_06",
      "to": "H_CASE_6_ALIBI",
      "relation": "contradicts",
      "sourceIds": [
        "E_CASE_6_06",
        "ST_CASE_6_S2_Q3"
      ]
    }
  ],
  "hypotheses": [
    {
      "id": "H_CASE_6_METHOD",
      "labelKey": "case6.hypothesis.method",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_6_MOTIVE",
      "labelKey": "case6.hypothesis.motive",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_6_OPPORTUNITY",
      "labelKey": "case6.hypothesis.opportunity",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_6_ALIBI",
      "labelKey": "case6.hypothesis.alibi",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_6_RESPONSIBILITY",
      "labelKey": "case6.hypothesis.responsibility",
      "initialState": "INSUFFICIENT"
    }
  ],
  "objections": [
    {
      "id": "OBJ_CASE_6_CULPRIT_DENIAL",
      "statementId": "ST_CASE_6_S2_Q3",
      "evidenceIds": [
        "E_CASE_6_06"
      ],
      "relationshipId": "R_CASE_6_ALIBI_CONTRADICTION",
      "resultingHypothesisId": "H_CASE_6_ALIBI",
      "resultingState": "POSSIBLE_CONTRADICTION",
      "validationKey": "case6.objection.culpritDenial"
    }
  ],
  "deductions": [
    {
      "id": "DED_CASE_6_RESPONSIBILITY",
      "labelKey": "case6.deduction.responsibility",
      "requiredEvidenceIds": [
        "E_CASE_6_01",
        "E_CASE_6_05",
        "E_CASE_6_06"
      ],
      "requiredStatementIds": [
        "ST_CASE_6_S2_Q3"
      ],
      "requiredHypothesisStates": [
        [
          "H_CASE_6_METHOD",
          "SUPPORTED"
        ],
        [
          "H_CASE_6_MOTIVE",
          "SUPPORTED"
        ],
        [
          "H_CASE_6_OPPORTUNITY",
          "SUPPORTED"
        ]
      ],
      "requiredObjectionIds": [
        "OBJ_CASE_6_CULPRIT_DENIAL"
      ],
      "resultingHypothesisId": "H_CASE_6_RESPONSIBILITY",
      "resultingState": "SUPPORTED"
    }
  ],
  "evidenceAnalysis": [
    {
      "id": "EA_CASE_6_01",
      "evidenceId": "E_CASE_6_01",
      "unlocksObservationIds": [
        "OBS_CASE_6_01"
      ]
    },
    {
      "id": "EA_CASE_6_02",
      "evidenceId": "E_CASE_6_02",
      "unlocksObservationIds": [
        "OBS_CASE_6_02"
      ]
    },
    {
      "id": "EA_CASE_6_03",
      "evidenceId": "E_CASE_6_03",
      "unlocksObservationIds": [
        "OBS_CASE_6_03"
      ]
    },
    {
      "id": "EA_CASE_6_04",
      "evidenceId": "E_CASE_6_04",
      "unlocksObservationIds": [
        "OBS_CASE_6_04"
      ]
    },
    {
      "id": "EA_CASE_6_05",
      "evidenceId": "E_CASE_6_05",
      "unlocksObservationIds": [
        "OBS_CASE_6_05"
      ]
    },
    {
      "id": "EA_CASE_6_06",
      "evidenceId": "E_CASE_6_06",
      "unlocksObservationIds": [
        "OBS_CASE_6_06"
      ]
    }
  ],
  "interrogations": [
    {
      "id": "INT_CASE_6_S1",
      "suspectId": "S_CASE_6_1",
      "questionIds": [
        "Q_CASE_6_S0_Q0",
        "Q_CASE_6_S0_Q1",
        "Q_CASE_6_S0_Q2"
      ]
    },
    {
      "id": "INT_CASE_6_S2",
      "suspectId": "S_CASE_6_2",
      "questionIds": [
        "Q_CASE_6_S1_Q0",
        "Q_CASE_6_S1_Q1",
        "Q_CASE_6_S1_Q2"
      ]
    },
    {
      "id": "INT_CASE_6_S3",
      "suspectId": "S_CASE_6_3",
      "questionIds": [
        "Q_CASE_6_S2_Q0",
        "Q_CASE_6_S2_Q1",
        "Q_CASE_6_S2_Q2",
        "Q_CASE_6_S2_Q3"
      ]
    },
    {
      "id": "INT_CASE_6_S4",
      "suspectId": "S_CASE_6_4",
      "questionIds": [
        "Q_CASE_6_S3_Q0",
        "Q_CASE_6_S3_Q1",
        "Q_CASE_6_S3_Q2"
      ]
    }
  ],
  "questions": [
    {
      "id": "Q_CASE_6_S0_Q0",
      "suspectId": "S_CASE_6_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_6_S0_Q0"
      ]
    },
    {
      "id": "Q_CASE_6_S0_Q1",
      "suspectId": "S_CASE_6_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_6_S0_Q1"
      ]
    },
    {
      "id": "Q_CASE_6_S0_Q2",
      "suspectId": "S_CASE_6_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_6_S0_Q2"
      ]
    },
    {
      "id": "Q_CASE_6_S1_Q0",
      "suspectId": "S_CASE_6_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_6_S1_Q0"
      ]
    },
    {
      "id": "Q_CASE_6_S1_Q1",
      "suspectId": "S_CASE_6_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_6_S1_Q1"
      ]
    },
    {
      "id": "Q_CASE_6_S1_Q2",
      "suspectId": "S_CASE_6_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_6_S1_Q2"
      ]
    },
    {
      "id": "Q_CASE_6_S2_Q0",
      "suspectId": "S_CASE_6_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_6_S2_Q0"
      ]
    },
    {
      "id": "Q_CASE_6_S2_Q1",
      "suspectId": "S_CASE_6_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_6_S2_Q1"
      ]
    },
    {
      "id": "Q_CASE_6_S2_Q2",
      "suspectId": "S_CASE_6_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_6_S2_Q2"
      ]
    },
    {
      "id": "Q_CASE_6_S2_Q3",
      "suspectId": "S_CASE_6_3",
      "requiredEvidenceIds": [
        "E_CASE_6_06"
      ],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_6_S2_Q3"
      ]
    },
    {
      "id": "Q_CASE_6_S3_Q0",
      "suspectId": "S_CASE_6_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_6_S3_Q0"
      ]
    },
    {
      "id": "Q_CASE_6_S3_Q1",
      "suspectId": "S_CASE_6_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_6_S3_Q1"
      ]
    },
    {
      "id": "Q_CASE_6_S3_Q2",
      "suspectId": "S_CASE_6_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_6_S3_Q2"
      ]
    }
  ],
  "responses": [
    {
      "id": "RESP_CASE_6_S0_Q0",
      "questionId": "Q_CASE_6_S0_Q0",
      "producesStatementId": "ST_CASE_6_S0_Q0"
    },
    {
      "id": "RESP_CASE_6_S0_Q1",
      "questionId": "Q_CASE_6_S0_Q1",
      "producesStatementId": "ST_CASE_6_S0_Q1"
    },
    {
      "id": "RESP_CASE_6_S0_Q2",
      "questionId": "Q_CASE_6_S0_Q2",
      "producesStatementId": "ST_CASE_6_S0_Q2"
    },
    {
      "id": "RESP_CASE_6_S1_Q0",
      "questionId": "Q_CASE_6_S1_Q0",
      "producesStatementId": "ST_CASE_6_S1_Q0"
    },
    {
      "id": "RESP_CASE_6_S1_Q1",
      "questionId": "Q_CASE_6_S1_Q1",
      "producesStatementId": "ST_CASE_6_S1_Q1"
    },
    {
      "id": "RESP_CASE_6_S1_Q2",
      "questionId": "Q_CASE_6_S1_Q2",
      "producesStatementId": "ST_CASE_6_S1_Q2"
    },
    {
      "id": "RESP_CASE_6_S2_Q0",
      "questionId": "Q_CASE_6_S2_Q0",
      "producesStatementId": "ST_CASE_6_S2_Q0"
    },
    {
      "id": "RESP_CASE_6_S2_Q1",
      "questionId": "Q_CASE_6_S2_Q1",
      "producesStatementId": "ST_CASE_6_S2_Q1"
    },
    {
      "id": "RESP_CASE_6_S2_Q2",
      "questionId": "Q_CASE_6_S2_Q2",
      "producesStatementId": "ST_CASE_6_S2_Q2"
    },
    {
      "id": "RESP_CASE_6_S2_Q3",
      "questionId": "Q_CASE_6_S2_Q3",
      "producesStatementId": "ST_CASE_6_S2_Q3"
    },
    {
      "id": "RESP_CASE_6_S3_Q0",
      "questionId": "Q_CASE_6_S3_Q0",
      "producesStatementId": "ST_CASE_6_S3_Q0"
    },
    {
      "id": "RESP_CASE_6_S3_Q1",
      "questionId": "Q_CASE_6_S3_Q1",
      "producesStatementId": "ST_CASE_6_S3_Q1"
    },
    {
      "id": "RESP_CASE_6_S3_Q2",
      "questionId": "Q_CASE_6_S3_Q2",
      "producesStatementId": "ST_CASE_6_S3_Q2"
    }
  ],
  "suspects": [
    {
      "id": "S_CASE_6_1",
      "nameKey": "legacy.case6.suspect1.name"
    },
    {
      "id": "S_CASE_6_2",
      "nameKey": "legacy.case6.suspect2.name"
    },
    {
      "id": "S_CASE_6_3",
      "nameKey": "legacy.case6.suspect3.name"
    },
    {
      "id": "S_CASE_6_4",
      "nameKey": "legacy.case6.suspect4.name"
    }
  ],
  "authoringTruthReference": {
    "source": "translations.cases[6].explain"
  }
});

const case7 = Object.freeze({
  "id": "CASE_07",
  "numericAlias": 7,
  "titleKey": "legacy.case7.title",
  "victimId": "VICTIM_CASE_7",
  "suspectIds": [
    "S_CASE_7_1",
    "S_CASE_7_2",
    "S_CASE_7_3",
    "S_CASE_7_4"
  ],
  "evidenceIds": [
    "E_CASE_7_01",
    "E_CASE_7_02",
    "E_CASE_7_03",
    "E_CASE_7_04",
    "E_CASE_7_05",
    "E_CASE_7_06"
  ],
  "statementIds": [
    "ST_CASE_7_S0_Q0",
    "ST_CASE_7_S0_Q1",
    "ST_CASE_7_S0_Q2",
    "ST_CASE_7_S1_Q0",
    "ST_CASE_7_S1_Q1",
    "ST_CASE_7_S1_Q2",
    "ST_CASE_7_S1_Q3",
    "ST_CASE_7_S2_Q0",
    "ST_CASE_7_S2_Q1",
    "ST_CASE_7_S2_Q2",
    "ST_CASE_7_S3_Q0",
    "ST_CASE_7_S3_Q1",
    "ST_CASE_7_S3_Q2"
  ],
  "eventIds": [],
  "locationIds": [
    "L_CASE_7_SCENE"
  ],
  "relationshipIds": [
    "R_CASE_7_METHOD",
    "R_CASE_7_MOTIVE",
    "R_CASE_7_OPPORTUNITY",
    "R_CASE_7_ALIBI_CONTRADICTION"
  ],
  "hypothesisIds": [
    "H_CASE_7_METHOD",
    "H_CASE_7_MOTIVE",
    "H_CASE_7_OPPORTUNITY",
    "H_CASE_7_ALIBI",
    "H_CASE_7_RESPONSIBILITY"
  ],
  "accusationGate": {
    "id": "GATE_CASE_7_RESPONSIBILITY",
    "requiredHypotheses": [
      [
        "H_CASE_7_METHOD",
        "SUPPORTED"
      ],
      [
        "H_CASE_7_MOTIVE",
        "SUPPORTED"
      ],
      [
        "H_CASE_7_OPPORTUNITY",
        "SUPPORTED"
      ],
      [
        "H_CASE_7_ALIBI",
        "POSSIBLE_CONTRADICTION"
      ],
      [
        "H_CASE_7_RESPONSIBILITY",
        "SUPPORTED"
      ]
    ],
    "requiredObjectionIds": [
      "OBJ_CASE_7_CULPRIT_DENIAL"
    ],
    "requiredDeductionIds": [
      "DED_CASE_7_RESPONSIBILITY"
    ],
    "candidateSuspectId": "S_CASE_7_2"
  },
  "evidence": [
    {
      "id": "E_CASE_7_01",
      "type": "physical",
      "observationKey": "case7.observation.e1",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_7_02",
      "type": "physical",
      "observationKey": "case7.observation.e2",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_7_03",
      "type": "physical",
      "observationKey": "case7.observation.e3",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_7_04",
      "type": "record",
      "observationKey": "case7.observation.e4",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_7_05",
      "type": "record",
      "observationKey": "case7.observation.e5",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_7_06",
      "type": "forensic",
      "observationKey": "case7.observation.authoredTrace",
      "metadata": {
        "playerVisible": true,
        "identifiesSuspectId": "S_CASE_7_2"
      }
    }
  ],
  "observations": [
    {
      "id": "OBS_CASE_7_01",
      "type": "scene_fact",
      "textKey": "case7.observation.e1",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_7_02",
      "type": "scene_fact",
      "textKey": "case7.observation.e2",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_7_03",
      "type": "scene_fact",
      "textKey": "case7.observation.e3",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_7_04",
      "type": "scene_fact",
      "textKey": "case7.observation.e4",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_7_05",
      "type": "scene_fact",
      "textKey": "case7.observation.e5",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_7_06",
      "type": "forensic",
      "textKey": "case7.observation.authoredTrace",
      "playerVisible": true,
      "identifiesSuspectId": "S_CASE_7_2"
    }
  ],
  "statements": [
    {
      "id": "ST_CASE_7_S0_Q0",
      "suspectId": "S_CASE_7_1",
      "textKey": "case7.statement.s1q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_7_S0_Q1",
      "suspectId": "S_CASE_7_1",
      "textKey": "case7.statement.s1q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_7_S0_Q2",
      "suspectId": "S_CASE_7_1",
      "textKey": "case7.statement.s1q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_7_S1_Q0",
      "suspectId": "S_CASE_7_2",
      "textKey": "case7.statement.s2q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_7_S1_Q1",
      "suspectId": "S_CASE_7_2",
      "textKey": "case7.statement.s2q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_7_S1_Q2",
      "suspectId": "S_CASE_7_2",
      "textKey": "case7.statement.s2q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_7_S1_Q3",
      "suspectId": "S_CASE_7_2",
      "textKey": "case7.statement.authoredChallenge",
      "claimType": "denial",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_7_S2_Q0",
      "suspectId": "S_CASE_7_3",
      "textKey": "case7.statement.s3q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_7_S2_Q1",
      "suspectId": "S_CASE_7_3",
      "textKey": "case7.statement.s3q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_7_S2_Q2",
      "suspectId": "S_CASE_7_3",
      "textKey": "case7.statement.s3q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_7_S3_Q0",
      "suspectId": "S_CASE_7_4",
      "textKey": "case7.statement.s4q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_7_S3_Q1",
      "suspectId": "S_CASE_7_4",
      "textKey": "case7.statement.s4q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_7_S3_Q2",
      "suspectId": "S_CASE_7_4",
      "textKey": "case7.statement.s4q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    }
  ],
  "events": [],
  "locations": [
    {
      "id": "L_CASE_7_SCENE",
      "labelKey": "case7.location.scene"
    }
  ],
  "relationships": [
    {
      "id": "R_CASE_7_METHOD",
      "from": "E_CASE_7_01",
      "to": "H_CASE_7_METHOD",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_7_01"
      ]
    },
    {
      "id": "R_CASE_7_MOTIVE",
      "from": "E_CASE_7_05",
      "to": "H_CASE_7_MOTIVE",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_7_05"
      ]
    },
    {
      "id": "R_CASE_7_OPPORTUNITY",
      "from": "E_CASE_7_06",
      "to": "H_CASE_7_OPPORTUNITY",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_7_06"
      ]
    },
    {
      "id": "R_CASE_7_ALIBI_CONTRADICTION",
      "from": "E_CASE_7_06",
      "to": "H_CASE_7_ALIBI",
      "relation": "contradicts",
      "sourceIds": [
        "E_CASE_7_06",
        "ST_CASE_7_S1_Q3"
      ]
    }
  ],
  "hypotheses": [
    {
      "id": "H_CASE_7_METHOD",
      "labelKey": "case7.hypothesis.method",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_7_MOTIVE",
      "labelKey": "case7.hypothesis.motive",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_7_OPPORTUNITY",
      "labelKey": "case7.hypothesis.opportunity",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_7_ALIBI",
      "labelKey": "case7.hypothesis.alibi",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_7_RESPONSIBILITY",
      "labelKey": "case7.hypothesis.responsibility",
      "initialState": "INSUFFICIENT"
    }
  ],
  "objections": [
    {
      "id": "OBJ_CASE_7_CULPRIT_DENIAL",
      "statementId": "ST_CASE_7_S1_Q3",
      "evidenceIds": [
        "E_CASE_7_06"
      ],
      "relationshipId": "R_CASE_7_ALIBI_CONTRADICTION",
      "resultingHypothesisId": "H_CASE_7_ALIBI",
      "resultingState": "POSSIBLE_CONTRADICTION",
      "validationKey": "case7.objection.culpritDenial"
    }
  ],
  "deductions": [
    {
      "id": "DED_CASE_7_RESPONSIBILITY",
      "labelKey": "case7.deduction.responsibility",
      "requiredEvidenceIds": [
        "E_CASE_7_01",
        "E_CASE_7_05",
        "E_CASE_7_06"
      ],
      "requiredStatementIds": [
        "ST_CASE_7_S1_Q3"
      ],
      "requiredHypothesisStates": [
        [
          "H_CASE_7_METHOD",
          "SUPPORTED"
        ],
        [
          "H_CASE_7_MOTIVE",
          "SUPPORTED"
        ],
        [
          "H_CASE_7_OPPORTUNITY",
          "SUPPORTED"
        ]
      ],
      "requiredObjectionIds": [
        "OBJ_CASE_7_CULPRIT_DENIAL"
      ],
      "resultingHypothesisId": "H_CASE_7_RESPONSIBILITY",
      "resultingState": "SUPPORTED"
    }
  ],
  "evidenceAnalysis": [
    {
      "id": "EA_CASE_7_01",
      "evidenceId": "E_CASE_7_01",
      "unlocksObservationIds": [
        "OBS_CASE_7_01"
      ]
    },
    {
      "id": "EA_CASE_7_02",
      "evidenceId": "E_CASE_7_02",
      "unlocksObservationIds": [
        "OBS_CASE_7_02"
      ]
    },
    {
      "id": "EA_CASE_7_03",
      "evidenceId": "E_CASE_7_03",
      "unlocksObservationIds": [
        "OBS_CASE_7_03"
      ]
    },
    {
      "id": "EA_CASE_7_04",
      "evidenceId": "E_CASE_7_04",
      "unlocksObservationIds": [
        "OBS_CASE_7_04"
      ]
    },
    {
      "id": "EA_CASE_7_05",
      "evidenceId": "E_CASE_7_05",
      "unlocksObservationIds": [
        "OBS_CASE_7_05"
      ]
    },
    {
      "id": "EA_CASE_7_06",
      "evidenceId": "E_CASE_7_06",
      "unlocksObservationIds": [
        "OBS_CASE_7_06"
      ]
    }
  ],
  "interrogations": [
    {
      "id": "INT_CASE_7_S1",
      "suspectId": "S_CASE_7_1",
      "questionIds": [
        "Q_CASE_7_S0_Q0",
        "Q_CASE_7_S0_Q1",
        "Q_CASE_7_S0_Q2"
      ]
    },
    {
      "id": "INT_CASE_7_S2",
      "suspectId": "S_CASE_7_2",
      "questionIds": [
        "Q_CASE_7_S1_Q0",
        "Q_CASE_7_S1_Q1",
        "Q_CASE_7_S1_Q2",
        "Q_CASE_7_S1_Q3"
      ]
    },
    {
      "id": "INT_CASE_7_S3",
      "suspectId": "S_CASE_7_3",
      "questionIds": [
        "Q_CASE_7_S2_Q0",
        "Q_CASE_7_S2_Q1",
        "Q_CASE_7_S2_Q2"
      ]
    },
    {
      "id": "INT_CASE_7_S4",
      "suspectId": "S_CASE_7_4",
      "questionIds": [
        "Q_CASE_7_S3_Q0",
        "Q_CASE_7_S3_Q1",
        "Q_CASE_7_S3_Q2"
      ]
    }
  ],
  "questions": [
    {
      "id": "Q_CASE_7_S0_Q0",
      "suspectId": "S_CASE_7_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_7_S0_Q0"
      ]
    },
    {
      "id": "Q_CASE_7_S0_Q1",
      "suspectId": "S_CASE_7_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_7_S0_Q1"
      ]
    },
    {
      "id": "Q_CASE_7_S0_Q2",
      "suspectId": "S_CASE_7_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_7_S0_Q2"
      ]
    },
    {
      "id": "Q_CASE_7_S1_Q0",
      "suspectId": "S_CASE_7_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_7_S1_Q0"
      ]
    },
    {
      "id": "Q_CASE_7_S1_Q1",
      "suspectId": "S_CASE_7_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_7_S1_Q1"
      ]
    },
    {
      "id": "Q_CASE_7_S1_Q2",
      "suspectId": "S_CASE_7_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_7_S1_Q2"
      ]
    },
    {
      "id": "Q_CASE_7_S1_Q3",
      "suspectId": "S_CASE_7_2",
      "requiredEvidenceIds": [
        "E_CASE_7_06"
      ],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_7_S1_Q3"
      ]
    },
    {
      "id": "Q_CASE_7_S2_Q0",
      "suspectId": "S_CASE_7_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_7_S2_Q0"
      ]
    },
    {
      "id": "Q_CASE_7_S2_Q1",
      "suspectId": "S_CASE_7_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_7_S2_Q1"
      ]
    },
    {
      "id": "Q_CASE_7_S2_Q2",
      "suspectId": "S_CASE_7_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_7_S2_Q2"
      ]
    },
    {
      "id": "Q_CASE_7_S3_Q0",
      "suspectId": "S_CASE_7_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_7_S3_Q0"
      ]
    },
    {
      "id": "Q_CASE_7_S3_Q1",
      "suspectId": "S_CASE_7_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_7_S3_Q1"
      ]
    },
    {
      "id": "Q_CASE_7_S3_Q2",
      "suspectId": "S_CASE_7_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_7_S3_Q2"
      ]
    }
  ],
  "responses": [
    {
      "id": "RESP_CASE_7_S0_Q0",
      "questionId": "Q_CASE_7_S0_Q0",
      "producesStatementId": "ST_CASE_7_S0_Q0"
    },
    {
      "id": "RESP_CASE_7_S0_Q1",
      "questionId": "Q_CASE_7_S0_Q1",
      "producesStatementId": "ST_CASE_7_S0_Q1"
    },
    {
      "id": "RESP_CASE_7_S0_Q2",
      "questionId": "Q_CASE_7_S0_Q2",
      "producesStatementId": "ST_CASE_7_S0_Q2"
    },
    {
      "id": "RESP_CASE_7_S1_Q0",
      "questionId": "Q_CASE_7_S1_Q0",
      "producesStatementId": "ST_CASE_7_S1_Q0"
    },
    {
      "id": "RESP_CASE_7_S1_Q1",
      "questionId": "Q_CASE_7_S1_Q1",
      "producesStatementId": "ST_CASE_7_S1_Q1"
    },
    {
      "id": "RESP_CASE_7_S1_Q2",
      "questionId": "Q_CASE_7_S1_Q2",
      "producesStatementId": "ST_CASE_7_S1_Q2"
    },
    {
      "id": "RESP_CASE_7_S1_Q3",
      "questionId": "Q_CASE_7_S1_Q3",
      "producesStatementId": "ST_CASE_7_S1_Q3"
    },
    {
      "id": "RESP_CASE_7_S2_Q0",
      "questionId": "Q_CASE_7_S2_Q0",
      "producesStatementId": "ST_CASE_7_S2_Q0"
    },
    {
      "id": "RESP_CASE_7_S2_Q1",
      "questionId": "Q_CASE_7_S2_Q1",
      "producesStatementId": "ST_CASE_7_S2_Q1"
    },
    {
      "id": "RESP_CASE_7_S2_Q2",
      "questionId": "Q_CASE_7_S2_Q2",
      "producesStatementId": "ST_CASE_7_S2_Q2"
    },
    {
      "id": "RESP_CASE_7_S3_Q0",
      "questionId": "Q_CASE_7_S3_Q0",
      "producesStatementId": "ST_CASE_7_S3_Q0"
    },
    {
      "id": "RESP_CASE_7_S3_Q1",
      "questionId": "Q_CASE_7_S3_Q1",
      "producesStatementId": "ST_CASE_7_S3_Q1"
    },
    {
      "id": "RESP_CASE_7_S3_Q2",
      "questionId": "Q_CASE_7_S3_Q2",
      "producesStatementId": "ST_CASE_7_S3_Q2"
    }
  ],
  "suspects": [
    {
      "id": "S_CASE_7_1",
      "nameKey": "legacy.case7.suspect1.name"
    },
    {
      "id": "S_CASE_7_2",
      "nameKey": "legacy.case7.suspect2.name"
    },
    {
      "id": "S_CASE_7_3",
      "nameKey": "legacy.case7.suspect3.name"
    },
    {
      "id": "S_CASE_7_4",
      "nameKey": "legacy.case7.suspect4.name"
    }
  ],
  "authoringTruthReference": {
    "source": "translations.cases[7].explain"
  }
});

const case8 = Object.freeze({
  "id": "CASE_08",
  "numericAlias": 8,
  "titleKey": "legacy.case8.title",
  "victimId": "VICTIM_CASE_8",
  "suspectIds": [
    "S_CASE_8_1",
    "S_CASE_8_2",
    "S_CASE_8_3",
    "S_CASE_8_4"
  ],
  "evidenceIds": [
    "E_CASE_8_01",
    "E_CASE_8_02",
    "E_CASE_8_03",
    "E_CASE_8_04",
    "E_CASE_8_05",
    "E_CASE_8_06"
  ],
  "statementIds": [
    "ST_CASE_8_S0_Q0",
    "ST_CASE_8_S0_Q1",
    "ST_CASE_8_S0_Q2",
    "ST_CASE_8_S1_Q0",
    "ST_CASE_8_S1_Q1",
    "ST_CASE_8_S1_Q2",
    "ST_CASE_8_S2_Q0",
    "ST_CASE_8_S2_Q1",
    "ST_CASE_8_S2_Q2",
    "ST_CASE_8_S2_Q3",
    "ST_CASE_8_S3_Q0",
    "ST_CASE_8_S3_Q1",
    "ST_CASE_8_S3_Q2"
  ],
  "eventIds": [],
  "locationIds": [
    "L_CASE_8_SCENE"
  ],
  "relationshipIds": [
    "R_CASE_8_METHOD",
    "R_CASE_8_MOTIVE",
    "R_CASE_8_OPPORTUNITY",
    "R_CASE_8_ALIBI_CONTRADICTION"
  ],
  "hypothesisIds": [
    "H_CASE_8_METHOD",
    "H_CASE_8_MOTIVE",
    "H_CASE_8_OPPORTUNITY",
    "H_CASE_8_ALIBI",
    "H_CASE_8_RESPONSIBILITY"
  ],
  "accusationGate": {
    "id": "GATE_CASE_8_RESPONSIBILITY",
    "requiredHypotheses": [
      [
        "H_CASE_8_METHOD",
        "SUPPORTED"
      ],
      [
        "H_CASE_8_MOTIVE",
        "SUPPORTED"
      ],
      [
        "H_CASE_8_OPPORTUNITY",
        "SUPPORTED"
      ],
      [
        "H_CASE_8_ALIBI",
        "POSSIBLE_CONTRADICTION"
      ],
      [
        "H_CASE_8_RESPONSIBILITY",
        "SUPPORTED"
      ]
    ],
    "requiredObjectionIds": [
      "OBJ_CASE_8_CULPRIT_DENIAL"
    ],
    "requiredDeductionIds": [
      "DED_CASE_8_RESPONSIBILITY"
    ],
    "candidateSuspectId": "S_CASE_8_3"
  },
  "evidence": [
    {
      "id": "E_CASE_8_01",
      "type": "physical",
      "observationKey": "case8.observation.e1",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_8_02",
      "type": "physical",
      "observationKey": "case8.observation.e2",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_8_03",
      "type": "physical",
      "observationKey": "case8.observation.e3",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_8_04",
      "type": "record",
      "observationKey": "case8.observation.e4",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_8_05",
      "type": "record",
      "observationKey": "case8.observation.e5",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_8_06",
      "type": "forensic",
      "observationKey": "case8.observation.authoredTrace",
      "metadata": {
        "playerVisible": true,
        "identifiesSuspectId": "S_CASE_8_3"
      }
    }
  ],
  "observations": [
    {
      "id": "OBS_CASE_8_01",
      "type": "scene_fact",
      "textKey": "case8.observation.e1",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_8_02",
      "type": "scene_fact",
      "textKey": "case8.observation.e2",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_8_03",
      "type": "scene_fact",
      "textKey": "case8.observation.e3",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_8_04",
      "type": "scene_fact",
      "textKey": "case8.observation.e4",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_8_05",
      "type": "scene_fact",
      "textKey": "case8.observation.e5",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_8_06",
      "type": "forensic",
      "textKey": "case8.observation.authoredTrace",
      "playerVisible": true,
      "identifiesSuspectId": "S_CASE_8_3"
    }
  ],
  "statements": [
    {
      "id": "ST_CASE_8_S0_Q0",
      "suspectId": "S_CASE_8_1",
      "textKey": "case8.statement.s1q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_8_S0_Q1",
      "suspectId": "S_CASE_8_1",
      "textKey": "case8.statement.s1q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_8_S0_Q2",
      "suspectId": "S_CASE_8_1",
      "textKey": "case8.statement.s1q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_8_S1_Q0",
      "suspectId": "S_CASE_8_2",
      "textKey": "case8.statement.s2q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_8_S1_Q1",
      "suspectId": "S_CASE_8_2",
      "textKey": "case8.statement.s2q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_8_S1_Q2",
      "suspectId": "S_CASE_8_2",
      "textKey": "case8.statement.s2q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_8_S2_Q0",
      "suspectId": "S_CASE_8_3",
      "textKey": "case8.statement.s3q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_8_S2_Q1",
      "suspectId": "S_CASE_8_3",
      "textKey": "case8.statement.s3q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_8_S2_Q2",
      "suspectId": "S_CASE_8_3",
      "textKey": "case8.statement.s3q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_8_S2_Q3",
      "suspectId": "S_CASE_8_3",
      "textKey": "case8.statement.authoredChallenge",
      "claimType": "denial",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_8_S3_Q0",
      "suspectId": "S_CASE_8_4",
      "textKey": "case8.statement.s4q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_8_S3_Q1",
      "suspectId": "S_CASE_8_4",
      "textKey": "case8.statement.s4q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_8_S3_Q2",
      "suspectId": "S_CASE_8_4",
      "textKey": "case8.statement.s4q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    }
  ],
  "events": [],
  "locations": [
    {
      "id": "L_CASE_8_SCENE",
      "labelKey": "case8.location.scene"
    }
  ],
  "relationships": [
    {
      "id": "R_CASE_8_METHOD",
      "from": "E_CASE_8_01",
      "to": "H_CASE_8_METHOD",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_8_01"
      ]
    },
    {
      "id": "R_CASE_8_MOTIVE",
      "from": "E_CASE_8_05",
      "to": "H_CASE_8_MOTIVE",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_8_05"
      ]
    },
    {
      "id": "R_CASE_8_OPPORTUNITY",
      "from": "E_CASE_8_06",
      "to": "H_CASE_8_OPPORTUNITY",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_8_06"
      ]
    },
    {
      "id": "R_CASE_8_ALIBI_CONTRADICTION",
      "from": "E_CASE_8_06",
      "to": "H_CASE_8_ALIBI",
      "relation": "contradicts",
      "sourceIds": [
        "E_CASE_8_06",
        "ST_CASE_8_S2_Q3"
      ]
    }
  ],
  "hypotheses": [
    {
      "id": "H_CASE_8_METHOD",
      "labelKey": "case8.hypothesis.method",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_8_MOTIVE",
      "labelKey": "case8.hypothesis.motive",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_8_OPPORTUNITY",
      "labelKey": "case8.hypothesis.opportunity",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_8_ALIBI",
      "labelKey": "case8.hypothesis.alibi",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_8_RESPONSIBILITY",
      "labelKey": "case8.hypothesis.responsibility",
      "initialState": "INSUFFICIENT"
    }
  ],
  "objections": [
    {
      "id": "OBJ_CASE_8_CULPRIT_DENIAL",
      "statementId": "ST_CASE_8_S2_Q3",
      "evidenceIds": [
        "E_CASE_8_06"
      ],
      "relationshipId": "R_CASE_8_ALIBI_CONTRADICTION",
      "resultingHypothesisId": "H_CASE_8_ALIBI",
      "resultingState": "POSSIBLE_CONTRADICTION",
      "validationKey": "case8.objection.culpritDenial"
    }
  ],
  "deductions": [
    {
      "id": "DED_CASE_8_RESPONSIBILITY",
      "labelKey": "case8.deduction.responsibility",
      "requiredEvidenceIds": [
        "E_CASE_8_01",
        "E_CASE_8_05",
        "E_CASE_8_06"
      ],
      "requiredStatementIds": [
        "ST_CASE_8_S2_Q3"
      ],
      "requiredHypothesisStates": [
        [
          "H_CASE_8_METHOD",
          "SUPPORTED"
        ],
        [
          "H_CASE_8_MOTIVE",
          "SUPPORTED"
        ],
        [
          "H_CASE_8_OPPORTUNITY",
          "SUPPORTED"
        ]
      ],
      "requiredObjectionIds": [
        "OBJ_CASE_8_CULPRIT_DENIAL"
      ],
      "resultingHypothesisId": "H_CASE_8_RESPONSIBILITY",
      "resultingState": "SUPPORTED"
    }
  ],
  "evidenceAnalysis": [
    {
      "id": "EA_CASE_8_01",
      "evidenceId": "E_CASE_8_01",
      "unlocksObservationIds": [
        "OBS_CASE_8_01"
      ]
    },
    {
      "id": "EA_CASE_8_02",
      "evidenceId": "E_CASE_8_02",
      "unlocksObservationIds": [
        "OBS_CASE_8_02"
      ]
    },
    {
      "id": "EA_CASE_8_03",
      "evidenceId": "E_CASE_8_03",
      "unlocksObservationIds": [
        "OBS_CASE_8_03"
      ]
    },
    {
      "id": "EA_CASE_8_04",
      "evidenceId": "E_CASE_8_04",
      "unlocksObservationIds": [
        "OBS_CASE_8_04"
      ]
    },
    {
      "id": "EA_CASE_8_05",
      "evidenceId": "E_CASE_8_05",
      "unlocksObservationIds": [
        "OBS_CASE_8_05"
      ]
    },
    {
      "id": "EA_CASE_8_06",
      "evidenceId": "E_CASE_8_06",
      "unlocksObservationIds": [
        "OBS_CASE_8_06"
      ]
    }
  ],
  "interrogations": [
    {
      "id": "INT_CASE_8_S1",
      "suspectId": "S_CASE_8_1",
      "questionIds": [
        "Q_CASE_8_S0_Q0",
        "Q_CASE_8_S0_Q1",
        "Q_CASE_8_S0_Q2"
      ]
    },
    {
      "id": "INT_CASE_8_S2",
      "suspectId": "S_CASE_8_2",
      "questionIds": [
        "Q_CASE_8_S1_Q0",
        "Q_CASE_8_S1_Q1",
        "Q_CASE_8_S1_Q2"
      ]
    },
    {
      "id": "INT_CASE_8_S3",
      "suspectId": "S_CASE_8_3",
      "questionIds": [
        "Q_CASE_8_S2_Q0",
        "Q_CASE_8_S2_Q1",
        "Q_CASE_8_S2_Q2",
        "Q_CASE_8_S2_Q3"
      ]
    },
    {
      "id": "INT_CASE_8_S4",
      "suspectId": "S_CASE_8_4",
      "questionIds": [
        "Q_CASE_8_S3_Q0",
        "Q_CASE_8_S3_Q1",
        "Q_CASE_8_S3_Q2"
      ]
    }
  ],
  "questions": [
    {
      "id": "Q_CASE_8_S0_Q0",
      "suspectId": "S_CASE_8_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_8_S0_Q0"
      ]
    },
    {
      "id": "Q_CASE_8_S0_Q1",
      "suspectId": "S_CASE_8_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_8_S0_Q1"
      ]
    },
    {
      "id": "Q_CASE_8_S0_Q2",
      "suspectId": "S_CASE_8_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_8_S0_Q2"
      ]
    },
    {
      "id": "Q_CASE_8_S1_Q0",
      "suspectId": "S_CASE_8_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_8_S1_Q0"
      ]
    },
    {
      "id": "Q_CASE_8_S1_Q1",
      "suspectId": "S_CASE_8_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_8_S1_Q1"
      ]
    },
    {
      "id": "Q_CASE_8_S1_Q2",
      "suspectId": "S_CASE_8_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_8_S1_Q2"
      ]
    },
    {
      "id": "Q_CASE_8_S2_Q0",
      "suspectId": "S_CASE_8_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_8_S2_Q0"
      ]
    },
    {
      "id": "Q_CASE_8_S2_Q1",
      "suspectId": "S_CASE_8_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_8_S2_Q1"
      ]
    },
    {
      "id": "Q_CASE_8_S2_Q2",
      "suspectId": "S_CASE_8_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_8_S2_Q2"
      ]
    },
    {
      "id": "Q_CASE_8_S2_Q3",
      "suspectId": "S_CASE_8_3",
      "requiredEvidenceIds": [
        "E_CASE_8_06"
      ],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_8_S2_Q3"
      ]
    },
    {
      "id": "Q_CASE_8_S3_Q0",
      "suspectId": "S_CASE_8_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_8_S3_Q0"
      ]
    },
    {
      "id": "Q_CASE_8_S3_Q1",
      "suspectId": "S_CASE_8_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_8_S3_Q1"
      ]
    },
    {
      "id": "Q_CASE_8_S3_Q2",
      "suspectId": "S_CASE_8_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_8_S3_Q2"
      ]
    }
  ],
  "responses": [
    {
      "id": "RESP_CASE_8_S0_Q0",
      "questionId": "Q_CASE_8_S0_Q0",
      "producesStatementId": "ST_CASE_8_S0_Q0"
    },
    {
      "id": "RESP_CASE_8_S0_Q1",
      "questionId": "Q_CASE_8_S0_Q1",
      "producesStatementId": "ST_CASE_8_S0_Q1"
    },
    {
      "id": "RESP_CASE_8_S0_Q2",
      "questionId": "Q_CASE_8_S0_Q2",
      "producesStatementId": "ST_CASE_8_S0_Q2"
    },
    {
      "id": "RESP_CASE_8_S1_Q0",
      "questionId": "Q_CASE_8_S1_Q0",
      "producesStatementId": "ST_CASE_8_S1_Q0"
    },
    {
      "id": "RESP_CASE_8_S1_Q1",
      "questionId": "Q_CASE_8_S1_Q1",
      "producesStatementId": "ST_CASE_8_S1_Q1"
    },
    {
      "id": "RESP_CASE_8_S1_Q2",
      "questionId": "Q_CASE_8_S1_Q2",
      "producesStatementId": "ST_CASE_8_S1_Q2"
    },
    {
      "id": "RESP_CASE_8_S2_Q0",
      "questionId": "Q_CASE_8_S2_Q0",
      "producesStatementId": "ST_CASE_8_S2_Q0"
    },
    {
      "id": "RESP_CASE_8_S2_Q1",
      "questionId": "Q_CASE_8_S2_Q1",
      "producesStatementId": "ST_CASE_8_S2_Q1"
    },
    {
      "id": "RESP_CASE_8_S2_Q2",
      "questionId": "Q_CASE_8_S2_Q2",
      "producesStatementId": "ST_CASE_8_S2_Q2"
    },
    {
      "id": "RESP_CASE_8_S2_Q3",
      "questionId": "Q_CASE_8_S2_Q3",
      "producesStatementId": "ST_CASE_8_S2_Q3"
    },
    {
      "id": "RESP_CASE_8_S3_Q0",
      "questionId": "Q_CASE_8_S3_Q0",
      "producesStatementId": "ST_CASE_8_S3_Q0"
    },
    {
      "id": "RESP_CASE_8_S3_Q1",
      "questionId": "Q_CASE_8_S3_Q1",
      "producesStatementId": "ST_CASE_8_S3_Q1"
    },
    {
      "id": "RESP_CASE_8_S3_Q2",
      "questionId": "Q_CASE_8_S3_Q2",
      "producesStatementId": "ST_CASE_8_S3_Q2"
    }
  ],
  "suspects": [
    {
      "id": "S_CASE_8_1",
      "nameKey": "legacy.case8.suspect1.name"
    },
    {
      "id": "S_CASE_8_2",
      "nameKey": "legacy.case8.suspect2.name"
    },
    {
      "id": "S_CASE_8_3",
      "nameKey": "legacy.case8.suspect3.name"
    },
    {
      "id": "S_CASE_8_4",
      "nameKey": "legacy.case8.suspect4.name"
    }
  ],
  "authoringTruthReference": {
    "source": "translations.cases[8].explain"
  }
});

const case9 = Object.freeze({
  "id": "CASE_09",
  "numericAlias": 9,
  "titleKey": "legacy.case9.title",
  "victimId": "VICTIM_CASE_9",
  "suspectIds": [
    "S_CASE_9_1",
    "S_CASE_9_2",
    "S_CASE_9_3",
    "S_CASE_9_4"
  ],
  "evidenceIds": [
    "E_CASE_9_01",
    "E_CASE_9_02",
    "E_CASE_9_03",
    "E_CASE_9_04",
    "E_CASE_9_05",
    "E_CASE_9_06"
  ],
  "statementIds": [
    "ST_CASE_9_S0_Q0",
    "ST_CASE_9_S0_Q1",
    "ST_CASE_9_S0_Q2",
    "ST_CASE_9_S0_Q3",
    "ST_CASE_9_S1_Q0",
    "ST_CASE_9_S1_Q1",
    "ST_CASE_9_S1_Q2",
    "ST_CASE_9_S2_Q0",
    "ST_CASE_9_S2_Q1",
    "ST_CASE_9_S2_Q2",
    "ST_CASE_9_S3_Q0",
    "ST_CASE_9_S3_Q1",
    "ST_CASE_9_S3_Q2"
  ],
  "eventIds": [],
  "locationIds": [
    "L_CASE_9_SCENE"
  ],
  "relationshipIds": [
    "R_CASE_9_METHOD",
    "R_CASE_9_MOTIVE",
    "R_CASE_9_OPPORTUNITY",
    "R_CASE_9_ALIBI_CONTRADICTION"
  ],
  "hypothesisIds": [
    "H_CASE_9_METHOD",
    "H_CASE_9_MOTIVE",
    "H_CASE_9_OPPORTUNITY",
    "H_CASE_9_ALIBI",
    "H_CASE_9_RESPONSIBILITY"
  ],
  "accusationGate": {
    "id": "GATE_CASE_9_RESPONSIBILITY",
    "requiredHypotheses": [
      [
        "H_CASE_9_METHOD",
        "SUPPORTED"
      ],
      [
        "H_CASE_9_MOTIVE",
        "SUPPORTED"
      ],
      [
        "H_CASE_9_OPPORTUNITY",
        "SUPPORTED"
      ],
      [
        "H_CASE_9_ALIBI",
        "POSSIBLE_CONTRADICTION"
      ],
      [
        "H_CASE_9_RESPONSIBILITY",
        "SUPPORTED"
      ]
    ],
    "requiredObjectionIds": [
      "OBJ_CASE_9_CULPRIT_DENIAL"
    ],
    "requiredDeductionIds": [
      "DED_CASE_9_RESPONSIBILITY"
    ],
    "candidateSuspectId": "S_CASE_9_1"
  },
  "evidence": [
    {
      "id": "E_CASE_9_01",
      "type": "physical",
      "observationKey": "case9.observation.e1",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_9_02",
      "type": "physical",
      "observationKey": "case9.observation.e2",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_9_03",
      "type": "physical",
      "observationKey": "case9.observation.e3",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_9_04",
      "type": "record",
      "observationKey": "case9.observation.e4",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_9_05",
      "type": "record",
      "observationKey": "case9.observation.e5",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_9_06",
      "type": "forensic",
      "observationKey": "case9.observation.authoredTrace",
      "metadata": {
        "playerVisible": true,
        "identifiesSuspectId": "S_CASE_9_1"
      }
    }
  ],
  "observations": [
    {
      "id": "OBS_CASE_9_01",
      "type": "scene_fact",
      "textKey": "case9.observation.e1",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_9_02",
      "type": "scene_fact",
      "textKey": "case9.observation.e2",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_9_03",
      "type": "scene_fact",
      "textKey": "case9.observation.e3",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_9_04",
      "type": "scene_fact",
      "textKey": "case9.observation.e4",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_9_05",
      "type": "scene_fact",
      "textKey": "case9.observation.e5",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_9_06",
      "type": "forensic",
      "textKey": "case9.observation.authoredTrace",
      "playerVisible": true,
      "identifiesSuspectId": "S_CASE_9_1"
    }
  ],
  "statements": [
    {
      "id": "ST_CASE_9_S0_Q0",
      "suspectId": "S_CASE_9_1",
      "textKey": "case9.statement.s1q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_9_S0_Q1",
      "suspectId": "S_CASE_9_1",
      "textKey": "case9.statement.s1q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_9_S0_Q2",
      "suspectId": "S_CASE_9_1",
      "textKey": "case9.statement.s1q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_9_S0_Q3",
      "suspectId": "S_CASE_9_1",
      "textKey": "case9.statement.authoredChallenge",
      "claimType": "denial",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_9_S1_Q0",
      "suspectId": "S_CASE_9_2",
      "textKey": "case9.statement.s2q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_9_S1_Q1",
      "suspectId": "S_CASE_9_2",
      "textKey": "case9.statement.s2q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_9_S1_Q2",
      "suspectId": "S_CASE_9_2",
      "textKey": "case9.statement.s2q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_9_S2_Q0",
      "suspectId": "S_CASE_9_3",
      "textKey": "case9.statement.s3q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_9_S2_Q1",
      "suspectId": "S_CASE_9_3",
      "textKey": "case9.statement.s3q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_9_S2_Q2",
      "suspectId": "S_CASE_9_3",
      "textKey": "case9.statement.s3q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_9_S3_Q0",
      "suspectId": "S_CASE_9_4",
      "textKey": "case9.statement.s4q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_9_S3_Q1",
      "suspectId": "S_CASE_9_4",
      "textKey": "case9.statement.s4q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_9_S3_Q2",
      "suspectId": "S_CASE_9_4",
      "textKey": "case9.statement.s4q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    }
  ],
  "events": [],
  "locations": [
    {
      "id": "L_CASE_9_SCENE",
      "labelKey": "case9.location.scene"
    }
  ],
  "relationships": [
    {
      "id": "R_CASE_9_METHOD",
      "from": "E_CASE_9_01",
      "to": "H_CASE_9_METHOD",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_9_01"
      ]
    },
    {
      "id": "R_CASE_9_MOTIVE",
      "from": "E_CASE_9_05",
      "to": "H_CASE_9_MOTIVE",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_9_05"
      ]
    },
    {
      "id": "R_CASE_9_OPPORTUNITY",
      "from": "E_CASE_9_06",
      "to": "H_CASE_9_OPPORTUNITY",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_9_06"
      ]
    },
    {
      "id": "R_CASE_9_ALIBI_CONTRADICTION",
      "from": "E_CASE_9_06",
      "to": "H_CASE_9_ALIBI",
      "relation": "contradicts",
      "sourceIds": [
        "E_CASE_9_06",
        "ST_CASE_9_S0_Q3"
      ]
    }
  ],
  "hypotheses": [
    {
      "id": "H_CASE_9_METHOD",
      "labelKey": "case9.hypothesis.method",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_9_MOTIVE",
      "labelKey": "case9.hypothesis.motive",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_9_OPPORTUNITY",
      "labelKey": "case9.hypothesis.opportunity",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_9_ALIBI",
      "labelKey": "case9.hypothesis.alibi",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_9_RESPONSIBILITY",
      "labelKey": "case9.hypothesis.responsibility",
      "initialState": "INSUFFICIENT"
    }
  ],
  "objections": [
    {
      "id": "OBJ_CASE_9_CULPRIT_DENIAL",
      "statementId": "ST_CASE_9_S0_Q3",
      "evidenceIds": [
        "E_CASE_9_06"
      ],
      "relationshipId": "R_CASE_9_ALIBI_CONTRADICTION",
      "resultingHypothesisId": "H_CASE_9_ALIBI",
      "resultingState": "POSSIBLE_CONTRADICTION",
      "validationKey": "case9.objection.culpritDenial"
    }
  ],
  "deductions": [
    {
      "id": "DED_CASE_9_RESPONSIBILITY",
      "labelKey": "case9.deduction.responsibility",
      "requiredEvidenceIds": [
        "E_CASE_9_01",
        "E_CASE_9_05",
        "E_CASE_9_06"
      ],
      "requiredStatementIds": [
        "ST_CASE_9_S0_Q3"
      ],
      "requiredHypothesisStates": [
        [
          "H_CASE_9_METHOD",
          "SUPPORTED"
        ],
        [
          "H_CASE_9_MOTIVE",
          "SUPPORTED"
        ],
        [
          "H_CASE_9_OPPORTUNITY",
          "SUPPORTED"
        ]
      ],
      "requiredObjectionIds": [
        "OBJ_CASE_9_CULPRIT_DENIAL"
      ],
      "resultingHypothesisId": "H_CASE_9_RESPONSIBILITY",
      "resultingState": "SUPPORTED"
    }
  ],
  "evidenceAnalysis": [
    {
      "id": "EA_CASE_9_01",
      "evidenceId": "E_CASE_9_01",
      "unlocksObservationIds": [
        "OBS_CASE_9_01"
      ]
    },
    {
      "id": "EA_CASE_9_02",
      "evidenceId": "E_CASE_9_02",
      "unlocksObservationIds": [
        "OBS_CASE_9_02"
      ]
    },
    {
      "id": "EA_CASE_9_03",
      "evidenceId": "E_CASE_9_03",
      "unlocksObservationIds": [
        "OBS_CASE_9_03"
      ]
    },
    {
      "id": "EA_CASE_9_04",
      "evidenceId": "E_CASE_9_04",
      "unlocksObservationIds": [
        "OBS_CASE_9_04"
      ]
    },
    {
      "id": "EA_CASE_9_05",
      "evidenceId": "E_CASE_9_05",
      "unlocksObservationIds": [
        "OBS_CASE_9_05"
      ]
    },
    {
      "id": "EA_CASE_9_06",
      "evidenceId": "E_CASE_9_06",
      "unlocksObservationIds": [
        "OBS_CASE_9_06"
      ]
    }
  ],
  "interrogations": [
    {
      "id": "INT_CASE_9_S1",
      "suspectId": "S_CASE_9_1",
      "questionIds": [
        "Q_CASE_9_S0_Q0",
        "Q_CASE_9_S0_Q1",
        "Q_CASE_9_S0_Q2",
        "Q_CASE_9_S0_Q3"
      ]
    },
    {
      "id": "INT_CASE_9_S2",
      "suspectId": "S_CASE_9_2",
      "questionIds": [
        "Q_CASE_9_S1_Q0",
        "Q_CASE_9_S1_Q1",
        "Q_CASE_9_S1_Q2"
      ]
    },
    {
      "id": "INT_CASE_9_S3",
      "suspectId": "S_CASE_9_3",
      "questionIds": [
        "Q_CASE_9_S2_Q0",
        "Q_CASE_9_S2_Q1",
        "Q_CASE_9_S2_Q2"
      ]
    },
    {
      "id": "INT_CASE_9_S4",
      "suspectId": "S_CASE_9_4",
      "questionIds": [
        "Q_CASE_9_S3_Q0",
        "Q_CASE_9_S3_Q1",
        "Q_CASE_9_S3_Q2"
      ]
    }
  ],
  "questions": [
    {
      "id": "Q_CASE_9_S0_Q0",
      "suspectId": "S_CASE_9_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_9_S0_Q0"
      ]
    },
    {
      "id": "Q_CASE_9_S0_Q1",
      "suspectId": "S_CASE_9_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_9_S0_Q1"
      ]
    },
    {
      "id": "Q_CASE_9_S0_Q2",
      "suspectId": "S_CASE_9_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_9_S0_Q2"
      ]
    },
    {
      "id": "Q_CASE_9_S0_Q3",
      "suspectId": "S_CASE_9_1",
      "requiredEvidenceIds": [
        "E_CASE_9_06"
      ],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_9_S0_Q3"
      ]
    },
    {
      "id": "Q_CASE_9_S1_Q0",
      "suspectId": "S_CASE_9_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_9_S1_Q0"
      ]
    },
    {
      "id": "Q_CASE_9_S1_Q1",
      "suspectId": "S_CASE_9_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_9_S1_Q1"
      ]
    },
    {
      "id": "Q_CASE_9_S1_Q2",
      "suspectId": "S_CASE_9_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_9_S1_Q2"
      ]
    },
    {
      "id": "Q_CASE_9_S2_Q0",
      "suspectId": "S_CASE_9_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_9_S2_Q0"
      ]
    },
    {
      "id": "Q_CASE_9_S2_Q1",
      "suspectId": "S_CASE_9_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_9_S2_Q1"
      ]
    },
    {
      "id": "Q_CASE_9_S2_Q2",
      "suspectId": "S_CASE_9_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_9_S2_Q2"
      ]
    },
    {
      "id": "Q_CASE_9_S3_Q0",
      "suspectId": "S_CASE_9_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_9_S3_Q0"
      ]
    },
    {
      "id": "Q_CASE_9_S3_Q1",
      "suspectId": "S_CASE_9_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_9_S3_Q1"
      ]
    },
    {
      "id": "Q_CASE_9_S3_Q2",
      "suspectId": "S_CASE_9_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_9_S3_Q2"
      ]
    }
  ],
  "responses": [
    {
      "id": "RESP_CASE_9_S0_Q0",
      "questionId": "Q_CASE_9_S0_Q0",
      "producesStatementId": "ST_CASE_9_S0_Q0"
    },
    {
      "id": "RESP_CASE_9_S0_Q1",
      "questionId": "Q_CASE_9_S0_Q1",
      "producesStatementId": "ST_CASE_9_S0_Q1"
    },
    {
      "id": "RESP_CASE_9_S0_Q2",
      "questionId": "Q_CASE_9_S0_Q2",
      "producesStatementId": "ST_CASE_9_S0_Q2"
    },
    {
      "id": "RESP_CASE_9_S0_Q3",
      "questionId": "Q_CASE_9_S0_Q3",
      "producesStatementId": "ST_CASE_9_S0_Q3"
    },
    {
      "id": "RESP_CASE_9_S1_Q0",
      "questionId": "Q_CASE_9_S1_Q0",
      "producesStatementId": "ST_CASE_9_S1_Q0"
    },
    {
      "id": "RESP_CASE_9_S1_Q1",
      "questionId": "Q_CASE_9_S1_Q1",
      "producesStatementId": "ST_CASE_9_S1_Q1"
    },
    {
      "id": "RESP_CASE_9_S1_Q2",
      "questionId": "Q_CASE_9_S1_Q2",
      "producesStatementId": "ST_CASE_9_S1_Q2"
    },
    {
      "id": "RESP_CASE_9_S2_Q0",
      "questionId": "Q_CASE_9_S2_Q0",
      "producesStatementId": "ST_CASE_9_S2_Q0"
    },
    {
      "id": "RESP_CASE_9_S2_Q1",
      "questionId": "Q_CASE_9_S2_Q1",
      "producesStatementId": "ST_CASE_9_S2_Q1"
    },
    {
      "id": "RESP_CASE_9_S2_Q2",
      "questionId": "Q_CASE_9_S2_Q2",
      "producesStatementId": "ST_CASE_9_S2_Q2"
    },
    {
      "id": "RESP_CASE_9_S3_Q0",
      "questionId": "Q_CASE_9_S3_Q0",
      "producesStatementId": "ST_CASE_9_S3_Q0"
    },
    {
      "id": "RESP_CASE_9_S3_Q1",
      "questionId": "Q_CASE_9_S3_Q1",
      "producesStatementId": "ST_CASE_9_S3_Q1"
    },
    {
      "id": "RESP_CASE_9_S3_Q2",
      "questionId": "Q_CASE_9_S3_Q2",
      "producesStatementId": "ST_CASE_9_S3_Q2"
    }
  ],
  "suspects": [
    {
      "id": "S_CASE_9_1",
      "nameKey": "legacy.case9.suspect1.name"
    },
    {
      "id": "S_CASE_9_2",
      "nameKey": "legacy.case9.suspect2.name"
    },
    {
      "id": "S_CASE_9_3",
      "nameKey": "legacy.case9.suspect3.name"
    },
    {
      "id": "S_CASE_9_4",
      "nameKey": "legacy.case9.suspect4.name"
    }
  ],
  "authoringTruthReference": {
    "source": "translations.cases[9].explain"
  }
});

const case10 = Object.freeze({
  "id": "CASE_10",
  "numericAlias": 10,
  "titleKey": "legacy.case10.title",
  "victimId": "VICTIM_CASE_10",
  "suspectIds": [
    "S_CASE_10_1",
    "S_CASE_10_2",
    "S_CASE_10_3",
    "S_CASE_10_4"
  ],
  "evidenceIds": [
    "E_CASE_10_01",
    "E_CASE_10_02",
    "E_CASE_10_03",
    "E_CASE_10_04",
    "E_CASE_10_05",
    "E_CASE_10_06"
  ],
  "statementIds": [
    "ST_CASE_10_S0_Q0",
    "ST_CASE_10_S0_Q1",
    "ST_CASE_10_S0_Q2",
    "ST_CASE_10_S1_Q0",
    "ST_CASE_10_S1_Q1",
    "ST_CASE_10_S1_Q2",
    "ST_CASE_10_S1_Q3",
    "ST_CASE_10_S2_Q0",
    "ST_CASE_10_S2_Q1",
    "ST_CASE_10_S2_Q2",
    "ST_CASE_10_S3_Q0",
    "ST_CASE_10_S3_Q1",
    "ST_CASE_10_S3_Q2"
  ],
  "eventIds": [],
  "locationIds": [
    "L_CASE_10_SCENE"
  ],
  "relationshipIds": [
    "R_CASE_10_METHOD",
    "R_CASE_10_MOTIVE",
    "R_CASE_10_OPPORTUNITY",
    "R_CASE_10_ALIBI_CONTRADICTION"
  ],
  "hypothesisIds": [
    "H_CASE_10_METHOD",
    "H_CASE_10_MOTIVE",
    "H_CASE_10_OPPORTUNITY",
    "H_CASE_10_ALIBI",
    "H_CASE_10_RESPONSIBILITY"
  ],
  "accusationGate": {
    "id": "GATE_CASE_10_RESPONSIBILITY",
    "requiredHypotheses": [
      [
        "H_CASE_10_METHOD",
        "SUPPORTED"
      ],
      [
        "H_CASE_10_MOTIVE",
        "SUPPORTED"
      ],
      [
        "H_CASE_10_OPPORTUNITY",
        "SUPPORTED"
      ],
      [
        "H_CASE_10_ALIBI",
        "POSSIBLE_CONTRADICTION"
      ],
      [
        "H_CASE_10_RESPONSIBILITY",
        "SUPPORTED"
      ]
    ],
    "requiredObjectionIds": [
      "OBJ_CASE_10_CULPRIT_DENIAL"
    ],
    "requiredDeductionIds": [
      "DED_CASE_10_RESPONSIBILITY"
    ],
    "candidateSuspectId": "S_CASE_10_2"
  },
  "evidence": [
    {
      "id": "E_CASE_10_01",
      "type": "physical",
      "observationKey": "case10.observation.e1",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_10_02",
      "type": "physical",
      "observationKey": "case10.observation.e2",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_10_03",
      "type": "physical",
      "observationKey": "case10.observation.e3",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_10_04",
      "type": "record",
      "observationKey": "case10.observation.e4",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_10_05",
      "type": "record",
      "observationKey": "case10.observation.e5",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_10_06",
      "type": "forensic",
      "observationKey": "case10.observation.authoredTrace",
      "metadata": {
        "playerVisible": true,
        "identifiesSuspectId": "S_CASE_10_2"
      }
    }
  ],
  "observations": [
    {
      "id": "OBS_CASE_10_01",
      "type": "scene_fact",
      "textKey": "case10.observation.e1",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_10_02",
      "type": "scene_fact",
      "textKey": "case10.observation.e2",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_10_03",
      "type": "scene_fact",
      "textKey": "case10.observation.e3",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_10_04",
      "type": "scene_fact",
      "textKey": "case10.observation.e4",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_10_05",
      "type": "scene_fact",
      "textKey": "case10.observation.e5",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_10_06",
      "type": "forensic",
      "textKey": "case10.observation.authoredTrace",
      "playerVisible": true,
      "identifiesSuspectId": "S_CASE_10_2"
    }
  ],
  "statements": [
    {
      "id": "ST_CASE_10_S0_Q0",
      "suspectId": "S_CASE_10_1",
      "textKey": "case10.statement.s1q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_10_S0_Q1",
      "suspectId": "S_CASE_10_1",
      "textKey": "case10.statement.s1q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_10_S0_Q2",
      "suspectId": "S_CASE_10_1",
      "textKey": "case10.statement.s1q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_10_S1_Q0",
      "suspectId": "S_CASE_10_2",
      "textKey": "case10.statement.s2q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_10_S1_Q1",
      "suspectId": "S_CASE_10_2",
      "textKey": "case10.statement.s2q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_10_S1_Q2",
      "suspectId": "S_CASE_10_2",
      "textKey": "case10.statement.s2q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_10_S1_Q3",
      "suspectId": "S_CASE_10_2",
      "textKey": "case10.statement.authoredChallenge",
      "claimType": "denial",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_10_S2_Q0",
      "suspectId": "S_CASE_10_3",
      "textKey": "case10.statement.s3q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_10_S2_Q1",
      "suspectId": "S_CASE_10_3",
      "textKey": "case10.statement.s3q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_10_S2_Q2",
      "suspectId": "S_CASE_10_3",
      "textKey": "case10.statement.s3q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_10_S3_Q0",
      "suspectId": "S_CASE_10_4",
      "textKey": "case10.statement.s4q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_10_S3_Q1",
      "suspectId": "S_CASE_10_4",
      "textKey": "case10.statement.s4q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_10_S3_Q2",
      "suspectId": "S_CASE_10_4",
      "textKey": "case10.statement.s4q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    }
  ],
  "events": [],
  "locations": [
    {
      "id": "L_CASE_10_SCENE",
      "labelKey": "case10.location.scene"
    }
  ],
  "relationships": [
    {
      "id": "R_CASE_10_METHOD",
      "from": "E_CASE_10_01",
      "to": "H_CASE_10_METHOD",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_10_01"
      ]
    },
    {
      "id": "R_CASE_10_MOTIVE",
      "from": "E_CASE_10_05",
      "to": "H_CASE_10_MOTIVE",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_10_05"
      ]
    },
    {
      "id": "R_CASE_10_OPPORTUNITY",
      "from": "E_CASE_10_06",
      "to": "H_CASE_10_OPPORTUNITY",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_10_06"
      ]
    },
    {
      "id": "R_CASE_10_ALIBI_CONTRADICTION",
      "from": "E_CASE_10_06",
      "to": "H_CASE_10_ALIBI",
      "relation": "contradicts",
      "sourceIds": [
        "E_CASE_10_06",
        "ST_CASE_10_S1_Q3"
      ]
    }
  ],
  "hypotheses": [
    {
      "id": "H_CASE_10_METHOD",
      "labelKey": "case10.hypothesis.method",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_10_MOTIVE",
      "labelKey": "case10.hypothesis.motive",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_10_OPPORTUNITY",
      "labelKey": "case10.hypothesis.opportunity",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_10_ALIBI",
      "labelKey": "case10.hypothesis.alibi",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_10_RESPONSIBILITY",
      "labelKey": "case10.hypothesis.responsibility",
      "initialState": "INSUFFICIENT"
    }
  ],
  "objections": [
    {
      "id": "OBJ_CASE_10_CULPRIT_DENIAL",
      "statementId": "ST_CASE_10_S1_Q3",
      "evidenceIds": [
        "E_CASE_10_06"
      ],
      "relationshipId": "R_CASE_10_ALIBI_CONTRADICTION",
      "resultingHypothesisId": "H_CASE_10_ALIBI",
      "resultingState": "POSSIBLE_CONTRADICTION",
      "validationKey": "case10.objection.culpritDenial"
    }
  ],
  "deductions": [
    {
      "id": "DED_CASE_10_RESPONSIBILITY",
      "labelKey": "case10.deduction.responsibility",
      "requiredEvidenceIds": [
        "E_CASE_10_01",
        "E_CASE_10_05",
        "E_CASE_10_06"
      ],
      "requiredStatementIds": [
        "ST_CASE_10_S1_Q3"
      ],
      "requiredHypothesisStates": [
        [
          "H_CASE_10_METHOD",
          "SUPPORTED"
        ],
        [
          "H_CASE_10_MOTIVE",
          "SUPPORTED"
        ],
        [
          "H_CASE_10_OPPORTUNITY",
          "SUPPORTED"
        ]
      ],
      "requiredObjectionIds": [
        "OBJ_CASE_10_CULPRIT_DENIAL"
      ],
      "resultingHypothesisId": "H_CASE_10_RESPONSIBILITY",
      "resultingState": "SUPPORTED"
    }
  ],
  "evidenceAnalysis": [
    {
      "id": "EA_CASE_10_01",
      "evidenceId": "E_CASE_10_01",
      "unlocksObservationIds": [
        "OBS_CASE_10_01"
      ]
    },
    {
      "id": "EA_CASE_10_02",
      "evidenceId": "E_CASE_10_02",
      "unlocksObservationIds": [
        "OBS_CASE_10_02"
      ]
    },
    {
      "id": "EA_CASE_10_03",
      "evidenceId": "E_CASE_10_03",
      "unlocksObservationIds": [
        "OBS_CASE_10_03"
      ]
    },
    {
      "id": "EA_CASE_10_04",
      "evidenceId": "E_CASE_10_04",
      "unlocksObservationIds": [
        "OBS_CASE_10_04"
      ]
    },
    {
      "id": "EA_CASE_10_05",
      "evidenceId": "E_CASE_10_05",
      "unlocksObservationIds": [
        "OBS_CASE_10_05"
      ]
    },
    {
      "id": "EA_CASE_10_06",
      "evidenceId": "E_CASE_10_06",
      "unlocksObservationIds": [
        "OBS_CASE_10_06"
      ]
    }
  ],
  "interrogations": [
    {
      "id": "INT_CASE_10_S1",
      "suspectId": "S_CASE_10_1",
      "questionIds": [
        "Q_CASE_10_S0_Q0",
        "Q_CASE_10_S0_Q1",
        "Q_CASE_10_S0_Q2"
      ]
    },
    {
      "id": "INT_CASE_10_S2",
      "suspectId": "S_CASE_10_2",
      "questionIds": [
        "Q_CASE_10_S1_Q0",
        "Q_CASE_10_S1_Q1",
        "Q_CASE_10_S1_Q2",
        "Q_CASE_10_S1_Q3"
      ]
    },
    {
      "id": "INT_CASE_10_S3",
      "suspectId": "S_CASE_10_3",
      "questionIds": [
        "Q_CASE_10_S2_Q0",
        "Q_CASE_10_S2_Q1",
        "Q_CASE_10_S2_Q2"
      ]
    },
    {
      "id": "INT_CASE_10_S4",
      "suspectId": "S_CASE_10_4",
      "questionIds": [
        "Q_CASE_10_S3_Q0",
        "Q_CASE_10_S3_Q1",
        "Q_CASE_10_S3_Q2"
      ]
    }
  ],
  "questions": [
    {
      "id": "Q_CASE_10_S0_Q0",
      "suspectId": "S_CASE_10_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_10_S0_Q0"
      ]
    },
    {
      "id": "Q_CASE_10_S0_Q1",
      "suspectId": "S_CASE_10_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_10_S0_Q1"
      ]
    },
    {
      "id": "Q_CASE_10_S0_Q2",
      "suspectId": "S_CASE_10_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_10_S0_Q2"
      ]
    },
    {
      "id": "Q_CASE_10_S1_Q0",
      "suspectId": "S_CASE_10_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_10_S1_Q0"
      ]
    },
    {
      "id": "Q_CASE_10_S1_Q1",
      "suspectId": "S_CASE_10_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_10_S1_Q1"
      ]
    },
    {
      "id": "Q_CASE_10_S1_Q2",
      "suspectId": "S_CASE_10_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_10_S1_Q2"
      ]
    },
    {
      "id": "Q_CASE_10_S1_Q3",
      "suspectId": "S_CASE_10_2",
      "requiredEvidenceIds": [
        "E_CASE_10_06"
      ],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_10_S1_Q3"
      ]
    },
    {
      "id": "Q_CASE_10_S2_Q0",
      "suspectId": "S_CASE_10_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_10_S2_Q0"
      ]
    },
    {
      "id": "Q_CASE_10_S2_Q1",
      "suspectId": "S_CASE_10_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_10_S2_Q1"
      ]
    },
    {
      "id": "Q_CASE_10_S2_Q2",
      "suspectId": "S_CASE_10_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_10_S2_Q2"
      ]
    },
    {
      "id": "Q_CASE_10_S3_Q0",
      "suspectId": "S_CASE_10_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_10_S3_Q0"
      ]
    },
    {
      "id": "Q_CASE_10_S3_Q1",
      "suspectId": "S_CASE_10_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_10_S3_Q1"
      ]
    },
    {
      "id": "Q_CASE_10_S3_Q2",
      "suspectId": "S_CASE_10_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_10_S3_Q2"
      ]
    }
  ],
  "responses": [
    {
      "id": "RESP_CASE_10_S0_Q0",
      "questionId": "Q_CASE_10_S0_Q0",
      "producesStatementId": "ST_CASE_10_S0_Q0"
    },
    {
      "id": "RESP_CASE_10_S0_Q1",
      "questionId": "Q_CASE_10_S0_Q1",
      "producesStatementId": "ST_CASE_10_S0_Q1"
    },
    {
      "id": "RESP_CASE_10_S0_Q2",
      "questionId": "Q_CASE_10_S0_Q2",
      "producesStatementId": "ST_CASE_10_S0_Q2"
    },
    {
      "id": "RESP_CASE_10_S1_Q0",
      "questionId": "Q_CASE_10_S1_Q0",
      "producesStatementId": "ST_CASE_10_S1_Q0"
    },
    {
      "id": "RESP_CASE_10_S1_Q1",
      "questionId": "Q_CASE_10_S1_Q1",
      "producesStatementId": "ST_CASE_10_S1_Q1"
    },
    {
      "id": "RESP_CASE_10_S1_Q2",
      "questionId": "Q_CASE_10_S1_Q2",
      "producesStatementId": "ST_CASE_10_S1_Q2"
    },
    {
      "id": "RESP_CASE_10_S1_Q3",
      "questionId": "Q_CASE_10_S1_Q3",
      "producesStatementId": "ST_CASE_10_S1_Q3"
    },
    {
      "id": "RESP_CASE_10_S2_Q0",
      "questionId": "Q_CASE_10_S2_Q0",
      "producesStatementId": "ST_CASE_10_S2_Q0"
    },
    {
      "id": "RESP_CASE_10_S2_Q1",
      "questionId": "Q_CASE_10_S2_Q1",
      "producesStatementId": "ST_CASE_10_S2_Q1"
    },
    {
      "id": "RESP_CASE_10_S2_Q2",
      "questionId": "Q_CASE_10_S2_Q2",
      "producesStatementId": "ST_CASE_10_S2_Q2"
    },
    {
      "id": "RESP_CASE_10_S3_Q0",
      "questionId": "Q_CASE_10_S3_Q0",
      "producesStatementId": "ST_CASE_10_S3_Q0"
    },
    {
      "id": "RESP_CASE_10_S3_Q1",
      "questionId": "Q_CASE_10_S3_Q1",
      "producesStatementId": "ST_CASE_10_S3_Q1"
    },
    {
      "id": "RESP_CASE_10_S3_Q2",
      "questionId": "Q_CASE_10_S3_Q2",
      "producesStatementId": "ST_CASE_10_S3_Q2"
    }
  ],
  "suspects": [
    {
      "id": "S_CASE_10_1",
      "nameKey": "legacy.case10.suspect1.name"
    },
    {
      "id": "S_CASE_10_2",
      "nameKey": "legacy.case10.suspect2.name"
    },
    {
      "id": "S_CASE_10_3",
      "nameKey": "legacy.case10.suspect3.name"
    },
    {
      "id": "S_CASE_10_4",
      "nameKey": "legacy.case10.suspect4.name"
    }
  ],
  "authoringTruthReference": {
    "source": "translations.cases[10].explain"
  }
});

const case11 = Object.freeze({
  "id": "CASE_11",
  "numericAlias": 11,
  "titleKey": "legacy.case11.title",
  "victimId": "VICTIM_CASE_11",
  "suspectIds": [
    "S_CASE_11_1",
    "S_CASE_11_2",
    "S_CASE_11_3",
    "S_CASE_11_4"
  ],
  "evidenceIds": [
    "E_CASE_11_01",
    "E_CASE_11_02",
    "E_CASE_11_03",
    "E_CASE_11_04",
    "E_CASE_11_05",
    "E_CASE_11_06"
  ],
  "statementIds": [
    "ST_CASE_11_S0_Q0",
    "ST_CASE_11_S0_Q1",
    "ST_CASE_11_S0_Q2",
    "ST_CASE_11_S1_Q0",
    "ST_CASE_11_S1_Q1",
    "ST_CASE_11_S1_Q2",
    "ST_CASE_11_S2_Q0",
    "ST_CASE_11_S2_Q1",
    "ST_CASE_11_S2_Q2",
    "ST_CASE_11_S3_Q0",
    "ST_CASE_11_S3_Q1",
    "ST_CASE_11_S3_Q2",
    "ST_CASE_11_S3_Q3"
  ],
  "eventIds": [],
  "locationIds": [
    "L_CASE_11_SCENE"
  ],
  "relationshipIds": [
    "R_CASE_11_METHOD",
    "R_CASE_11_MOTIVE",
    "R_CASE_11_OPPORTUNITY",
    "R_CASE_11_ALIBI_CONTRADICTION"
  ],
  "hypothesisIds": [
    "H_CASE_11_METHOD",
    "H_CASE_11_MOTIVE",
    "H_CASE_11_OPPORTUNITY",
    "H_CASE_11_ALIBI",
    "H_CASE_11_RESPONSIBILITY"
  ],
  "accusationGate": {
    "id": "GATE_CASE_11_RESPONSIBILITY",
    "requiredHypotheses": [
      [
        "H_CASE_11_METHOD",
        "SUPPORTED"
      ],
      [
        "H_CASE_11_MOTIVE",
        "SUPPORTED"
      ],
      [
        "H_CASE_11_OPPORTUNITY",
        "SUPPORTED"
      ],
      [
        "H_CASE_11_ALIBI",
        "POSSIBLE_CONTRADICTION"
      ],
      [
        "H_CASE_11_RESPONSIBILITY",
        "SUPPORTED"
      ]
    ],
    "requiredObjectionIds": [
      "OBJ_CASE_11_CULPRIT_DENIAL"
    ],
    "requiredDeductionIds": [
      "DED_CASE_11_RESPONSIBILITY"
    ],
    "candidateSuspectId": "S_CASE_11_4"
  },
  "evidence": [
    {
      "id": "E_CASE_11_01",
      "type": "physical",
      "observationKey": "case11.observation.e1",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_11_02",
      "type": "physical",
      "observationKey": "case11.observation.e2",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_11_03",
      "type": "physical",
      "observationKey": "case11.observation.e3",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_11_04",
      "type": "record",
      "observationKey": "case11.observation.e4",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_11_05",
      "type": "record",
      "observationKey": "case11.observation.e5",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_11_06",
      "type": "forensic",
      "observationKey": "case11.observation.authoredTrace",
      "metadata": {
        "playerVisible": true,
        "identifiesSuspectId": "S_CASE_11_4"
      }
    }
  ],
  "observations": [
    {
      "id": "OBS_CASE_11_01",
      "type": "scene_fact",
      "textKey": "case11.observation.e1",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_11_02",
      "type": "scene_fact",
      "textKey": "case11.observation.e2",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_11_03",
      "type": "scene_fact",
      "textKey": "case11.observation.e3",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_11_04",
      "type": "scene_fact",
      "textKey": "case11.observation.e4",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_11_05",
      "type": "scene_fact",
      "textKey": "case11.observation.e5",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_11_06",
      "type": "forensic",
      "textKey": "case11.observation.authoredTrace",
      "playerVisible": true,
      "identifiesSuspectId": "S_CASE_11_4"
    }
  ],
  "statements": [
    {
      "id": "ST_CASE_11_S0_Q0",
      "suspectId": "S_CASE_11_1",
      "textKey": "case11.statement.s1q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_11_S0_Q1",
      "suspectId": "S_CASE_11_1",
      "textKey": "case11.statement.s1q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_11_S0_Q2",
      "suspectId": "S_CASE_11_1",
      "textKey": "case11.statement.s1q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_11_S1_Q0",
      "suspectId": "S_CASE_11_2",
      "textKey": "case11.statement.s2q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_11_S1_Q1",
      "suspectId": "S_CASE_11_2",
      "textKey": "case11.statement.s2q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_11_S1_Q2",
      "suspectId": "S_CASE_11_2",
      "textKey": "case11.statement.s2q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_11_S2_Q0",
      "suspectId": "S_CASE_11_3",
      "textKey": "case11.statement.s3q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_11_S2_Q1",
      "suspectId": "S_CASE_11_3",
      "textKey": "case11.statement.s3q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_11_S2_Q2",
      "suspectId": "S_CASE_11_3",
      "textKey": "case11.statement.s3q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_11_S3_Q0",
      "suspectId": "S_CASE_11_4",
      "textKey": "case11.statement.s4q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_11_S3_Q1",
      "suspectId": "S_CASE_11_4",
      "textKey": "case11.statement.s4q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_11_S3_Q2",
      "suspectId": "S_CASE_11_4",
      "textKey": "case11.statement.s4q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_11_S3_Q3",
      "suspectId": "S_CASE_11_4",
      "textKey": "case11.statement.authoredChallenge",
      "claimType": "denial",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    }
  ],
  "events": [],
  "locations": [
    {
      "id": "L_CASE_11_SCENE",
      "labelKey": "case11.location.scene"
    }
  ],
  "relationships": [
    {
      "id": "R_CASE_11_METHOD",
      "from": "E_CASE_11_01",
      "to": "H_CASE_11_METHOD",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_11_01"
      ]
    },
    {
      "id": "R_CASE_11_MOTIVE",
      "from": "E_CASE_11_05",
      "to": "H_CASE_11_MOTIVE",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_11_05"
      ]
    },
    {
      "id": "R_CASE_11_OPPORTUNITY",
      "from": "E_CASE_11_06",
      "to": "H_CASE_11_OPPORTUNITY",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_11_06"
      ]
    },
    {
      "id": "R_CASE_11_ALIBI_CONTRADICTION",
      "from": "E_CASE_11_06",
      "to": "H_CASE_11_ALIBI",
      "relation": "contradicts",
      "sourceIds": [
        "E_CASE_11_06",
        "ST_CASE_11_S3_Q3"
      ]
    }
  ],
  "hypotheses": [
    {
      "id": "H_CASE_11_METHOD",
      "labelKey": "case11.hypothesis.method",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_11_MOTIVE",
      "labelKey": "case11.hypothesis.motive",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_11_OPPORTUNITY",
      "labelKey": "case11.hypothesis.opportunity",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_11_ALIBI",
      "labelKey": "case11.hypothesis.alibi",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_11_RESPONSIBILITY",
      "labelKey": "case11.hypothesis.responsibility",
      "initialState": "INSUFFICIENT"
    }
  ],
  "objections": [
    {
      "id": "OBJ_CASE_11_CULPRIT_DENIAL",
      "statementId": "ST_CASE_11_S3_Q3",
      "evidenceIds": [
        "E_CASE_11_06"
      ],
      "relationshipId": "R_CASE_11_ALIBI_CONTRADICTION",
      "resultingHypothesisId": "H_CASE_11_ALIBI",
      "resultingState": "POSSIBLE_CONTRADICTION",
      "validationKey": "case11.objection.culpritDenial"
    }
  ],
  "deductions": [
    {
      "id": "DED_CASE_11_RESPONSIBILITY",
      "labelKey": "case11.deduction.responsibility",
      "requiredEvidenceIds": [
        "E_CASE_11_01",
        "E_CASE_11_05",
        "E_CASE_11_06"
      ],
      "requiredStatementIds": [
        "ST_CASE_11_S3_Q3"
      ],
      "requiredHypothesisStates": [
        [
          "H_CASE_11_METHOD",
          "SUPPORTED"
        ],
        [
          "H_CASE_11_MOTIVE",
          "SUPPORTED"
        ],
        [
          "H_CASE_11_OPPORTUNITY",
          "SUPPORTED"
        ]
      ],
      "requiredObjectionIds": [
        "OBJ_CASE_11_CULPRIT_DENIAL"
      ],
      "resultingHypothesisId": "H_CASE_11_RESPONSIBILITY",
      "resultingState": "SUPPORTED"
    }
  ],
  "evidenceAnalysis": [
    {
      "id": "EA_CASE_11_01",
      "evidenceId": "E_CASE_11_01",
      "unlocksObservationIds": [
        "OBS_CASE_11_01"
      ]
    },
    {
      "id": "EA_CASE_11_02",
      "evidenceId": "E_CASE_11_02",
      "unlocksObservationIds": [
        "OBS_CASE_11_02"
      ]
    },
    {
      "id": "EA_CASE_11_03",
      "evidenceId": "E_CASE_11_03",
      "unlocksObservationIds": [
        "OBS_CASE_11_03"
      ]
    },
    {
      "id": "EA_CASE_11_04",
      "evidenceId": "E_CASE_11_04",
      "unlocksObservationIds": [
        "OBS_CASE_11_04"
      ]
    },
    {
      "id": "EA_CASE_11_05",
      "evidenceId": "E_CASE_11_05",
      "unlocksObservationIds": [
        "OBS_CASE_11_05"
      ]
    },
    {
      "id": "EA_CASE_11_06",
      "evidenceId": "E_CASE_11_06",
      "unlocksObservationIds": [
        "OBS_CASE_11_06"
      ]
    }
  ],
  "interrogations": [
    {
      "id": "INT_CASE_11_S1",
      "suspectId": "S_CASE_11_1",
      "questionIds": [
        "Q_CASE_11_S0_Q0",
        "Q_CASE_11_S0_Q1",
        "Q_CASE_11_S0_Q2"
      ]
    },
    {
      "id": "INT_CASE_11_S2",
      "suspectId": "S_CASE_11_2",
      "questionIds": [
        "Q_CASE_11_S1_Q0",
        "Q_CASE_11_S1_Q1",
        "Q_CASE_11_S1_Q2"
      ]
    },
    {
      "id": "INT_CASE_11_S3",
      "suspectId": "S_CASE_11_3",
      "questionIds": [
        "Q_CASE_11_S2_Q0",
        "Q_CASE_11_S2_Q1",
        "Q_CASE_11_S2_Q2"
      ]
    },
    {
      "id": "INT_CASE_11_S4",
      "suspectId": "S_CASE_11_4",
      "questionIds": [
        "Q_CASE_11_S3_Q0",
        "Q_CASE_11_S3_Q1",
        "Q_CASE_11_S3_Q2",
        "Q_CASE_11_S3_Q3"
      ]
    }
  ],
  "questions": [
    {
      "id": "Q_CASE_11_S0_Q0",
      "suspectId": "S_CASE_11_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_11_S0_Q0"
      ]
    },
    {
      "id": "Q_CASE_11_S0_Q1",
      "suspectId": "S_CASE_11_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_11_S0_Q1"
      ]
    },
    {
      "id": "Q_CASE_11_S0_Q2",
      "suspectId": "S_CASE_11_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_11_S0_Q2"
      ]
    },
    {
      "id": "Q_CASE_11_S1_Q0",
      "suspectId": "S_CASE_11_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_11_S1_Q0"
      ]
    },
    {
      "id": "Q_CASE_11_S1_Q1",
      "suspectId": "S_CASE_11_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_11_S1_Q1"
      ]
    },
    {
      "id": "Q_CASE_11_S1_Q2",
      "suspectId": "S_CASE_11_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_11_S1_Q2"
      ]
    },
    {
      "id": "Q_CASE_11_S2_Q0",
      "suspectId": "S_CASE_11_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_11_S2_Q0"
      ]
    },
    {
      "id": "Q_CASE_11_S2_Q1",
      "suspectId": "S_CASE_11_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_11_S2_Q1"
      ]
    },
    {
      "id": "Q_CASE_11_S2_Q2",
      "suspectId": "S_CASE_11_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_11_S2_Q2"
      ]
    },
    {
      "id": "Q_CASE_11_S3_Q0",
      "suspectId": "S_CASE_11_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_11_S3_Q0"
      ]
    },
    {
      "id": "Q_CASE_11_S3_Q1",
      "suspectId": "S_CASE_11_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_11_S3_Q1"
      ]
    },
    {
      "id": "Q_CASE_11_S3_Q2",
      "suspectId": "S_CASE_11_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_11_S3_Q2"
      ]
    },
    {
      "id": "Q_CASE_11_S3_Q3",
      "suspectId": "S_CASE_11_4",
      "requiredEvidenceIds": [
        "E_CASE_11_06"
      ],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_11_S3_Q3"
      ]
    }
  ],
  "responses": [
    {
      "id": "RESP_CASE_11_S0_Q0",
      "questionId": "Q_CASE_11_S0_Q0",
      "producesStatementId": "ST_CASE_11_S0_Q0"
    },
    {
      "id": "RESP_CASE_11_S0_Q1",
      "questionId": "Q_CASE_11_S0_Q1",
      "producesStatementId": "ST_CASE_11_S0_Q1"
    },
    {
      "id": "RESP_CASE_11_S0_Q2",
      "questionId": "Q_CASE_11_S0_Q2",
      "producesStatementId": "ST_CASE_11_S0_Q2"
    },
    {
      "id": "RESP_CASE_11_S1_Q0",
      "questionId": "Q_CASE_11_S1_Q0",
      "producesStatementId": "ST_CASE_11_S1_Q0"
    },
    {
      "id": "RESP_CASE_11_S1_Q1",
      "questionId": "Q_CASE_11_S1_Q1",
      "producesStatementId": "ST_CASE_11_S1_Q1"
    },
    {
      "id": "RESP_CASE_11_S1_Q2",
      "questionId": "Q_CASE_11_S1_Q2",
      "producesStatementId": "ST_CASE_11_S1_Q2"
    },
    {
      "id": "RESP_CASE_11_S2_Q0",
      "questionId": "Q_CASE_11_S2_Q0",
      "producesStatementId": "ST_CASE_11_S2_Q0"
    },
    {
      "id": "RESP_CASE_11_S2_Q1",
      "questionId": "Q_CASE_11_S2_Q1",
      "producesStatementId": "ST_CASE_11_S2_Q1"
    },
    {
      "id": "RESP_CASE_11_S2_Q2",
      "questionId": "Q_CASE_11_S2_Q2",
      "producesStatementId": "ST_CASE_11_S2_Q2"
    },
    {
      "id": "RESP_CASE_11_S3_Q0",
      "questionId": "Q_CASE_11_S3_Q0",
      "producesStatementId": "ST_CASE_11_S3_Q0"
    },
    {
      "id": "RESP_CASE_11_S3_Q1",
      "questionId": "Q_CASE_11_S3_Q1",
      "producesStatementId": "ST_CASE_11_S3_Q1"
    },
    {
      "id": "RESP_CASE_11_S3_Q2",
      "questionId": "Q_CASE_11_S3_Q2",
      "producesStatementId": "ST_CASE_11_S3_Q2"
    },
    {
      "id": "RESP_CASE_11_S3_Q3",
      "questionId": "Q_CASE_11_S3_Q3",
      "producesStatementId": "ST_CASE_11_S3_Q3"
    }
  ],
  "suspects": [
    {
      "id": "S_CASE_11_1",
      "nameKey": "legacy.case11.suspect1.name"
    },
    {
      "id": "S_CASE_11_2",
      "nameKey": "legacy.case11.suspect2.name"
    },
    {
      "id": "S_CASE_11_3",
      "nameKey": "legacy.case11.suspect3.name"
    },
    {
      "id": "S_CASE_11_4",
      "nameKey": "legacy.case11.suspect4.name"
    }
  ],
  "authoringTruthReference": {
    "source": "translations.cases[11].explain"
  }
});

const case12 = Object.freeze({
  "id": "CASE_12",
  "numericAlias": 12,
  "titleKey": "legacy.case12.title",
  "victimId": "VICTIM_CASE_12",
  "suspectIds": [
    "S_CASE_12_1",
    "S_CASE_12_2",
    "S_CASE_12_3",
    "S_CASE_12_4"
  ],
  "evidenceIds": [
    "E_CASE_12_01",
    "E_CASE_12_02",
    "E_CASE_12_03",
    "E_CASE_12_04",
    "E_CASE_12_05",
    "E_CASE_12_06",
    "E_CASE_12_07"
  ],
  "statementIds": [
    "ST_CASE_12_S0_Q0",
    "ST_CASE_12_S0_Q1",
    "ST_CASE_12_S0_Q2",
    "ST_CASE_12_S0_Q3",
    "ST_CASE_12_S1_Q0",
    "ST_CASE_12_S1_Q1",
    "ST_CASE_12_S1_Q2",
    "ST_CASE_12_S2_Q0",
    "ST_CASE_12_S2_Q1",
    "ST_CASE_12_S2_Q2",
    "ST_CASE_12_S3_Q0",
    "ST_CASE_12_S3_Q1",
    "ST_CASE_12_S3_Q2"
  ],
  "eventIds": [],
  "locationIds": [
    "L_CASE_12_SCENE"
  ],
  "relationshipIds": [
    "R_CASE_12_METHOD",
    "R_CASE_12_MOTIVE",
    "R_CASE_12_OPPORTUNITY",
    "R_CASE_12_ALIBI_CONTRADICTION",
    "R_CASE_12_COLLUSION"
  ],
  "hypothesisIds": [
    "H_CASE_12_METHOD",
    "H_CASE_12_MOTIVE",
    "H_CASE_12_OPPORTUNITY",
    "H_CASE_12_ALIBI",
    "H_CASE_12_RESPONSIBILITY"
  ],
  "accusationGate": {
    "id": "GATE_CASE_12_RESPONSIBILITY",
    "requiredHypotheses": [
      [
        "H_CASE_12_METHOD",
        "SUPPORTED"
      ],
      [
        "H_CASE_12_MOTIVE",
        "SUPPORTED"
      ],
      [
        "H_CASE_12_OPPORTUNITY",
        "SUPPORTED"
      ],
      [
        "H_CASE_12_ALIBI",
        "POSSIBLE_CONTRADICTION"
      ],
      [
        "H_CASE_12_RESPONSIBILITY",
        "SUPPORTED"
      ]
    ],
    "requiredObjectionIds": [
      "OBJ_CASE_12_CULPRIT_DENIAL"
    ],
    "requiredDeductionIds": [
      "DED_CASE_12_RESPONSIBILITY"
    ],
    "candidateSuspectId": "S_CASE_12_1"
  },
  "evidence": [
    {
      "id": "E_CASE_12_01",
      "type": "physical",
      "observationKey": "case12.observation.e1",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_12_02",
      "type": "physical",
      "observationKey": "case12.observation.e2",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_12_03",
      "type": "physical",
      "observationKey": "case12.observation.e3",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_12_04",
      "type": "record",
      "observationKey": "case12.observation.e4",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_12_05",
      "type": "record",
      "observationKey": "case12.observation.e5",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_12_06",
      "type": "forensic",
      "observationKey": "case12.observation.authoredTrace",
      "metadata": {
        "playerVisible": true,
        "identifiesSuspectId": "S_CASE_12_1"
      }
    },
    {
      "id": "E_CASE_12_07",
      "type": "record",
      "observationKey": "case12.observation.collusionRecord",
      "metadata": {
        "playerVisible": true,
        "identifiesSuspectId": "S_CASE_12_1"
      }
    }
  ],
  "observations": [
    {
      "id": "OBS_CASE_12_01",
      "type": "scene_fact",
      "textKey": "case12.observation.e1",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_12_02",
      "type": "scene_fact",
      "textKey": "case12.observation.e2",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_12_03",
      "type": "scene_fact",
      "textKey": "case12.observation.e3",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_12_04",
      "type": "scene_fact",
      "textKey": "case12.observation.e4",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_12_05",
      "type": "scene_fact",
      "textKey": "case12.observation.e5",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_12_06",
      "type": "forensic",
      "textKey": "case12.observation.authoredTrace",
      "playerVisible": true,
      "identifiesSuspectId": "S_CASE_12_1"
    },
    {
      "id": "OBS_CASE_12_07",
      "type": "forensic",
      "textKey": "case12.observation.collusionRecord",
      "playerVisible": true,
      "identifiesSuspectId": "S_CASE_12_1"
    }
  ],
  "statements": [
    {
      "id": "ST_CASE_12_S0_Q0",
      "suspectId": "S_CASE_12_1",
      "textKey": "case12.statement.s1q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_12_S0_Q1",
      "suspectId": "S_CASE_12_1",
      "textKey": "case12.statement.s1q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_12_S0_Q2",
      "suspectId": "S_CASE_12_1",
      "textKey": "case12.statement.s1q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_12_S0_Q3",
      "suspectId": "S_CASE_12_1",
      "textKey": "case12.statement.authoredChallenge",
      "claimType": "denial",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_12_S1_Q0",
      "suspectId": "S_CASE_12_2",
      "textKey": "case12.statement.s2q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_12_S1_Q1",
      "suspectId": "S_CASE_12_2",
      "textKey": "case12.statement.s2q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_12_S1_Q2",
      "suspectId": "S_CASE_12_2",
      "textKey": "case12.statement.s2q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_12_S2_Q0",
      "suspectId": "S_CASE_12_3",
      "textKey": "case12.statement.s3q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_12_S2_Q1",
      "suspectId": "S_CASE_12_3",
      "textKey": "case12.statement.s3q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_12_S2_Q2",
      "suspectId": "S_CASE_12_3",
      "textKey": "case12.statement.s3q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_12_S3_Q0",
      "suspectId": "S_CASE_12_4",
      "textKey": "case12.statement.s4q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_12_S3_Q1",
      "suspectId": "S_CASE_12_4",
      "textKey": "case12.statement.s4q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_12_S3_Q2",
      "suspectId": "S_CASE_12_4",
      "textKey": "case12.statement.s4q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    }
  ],
  "events": [],
  "locations": [
    {
      "id": "L_CASE_12_SCENE",
      "labelKey": "case12.location.scene"
    }
  ],
  "relationships": [
    {
      "id": "R_CASE_12_METHOD",
      "from": "E_CASE_12_01",
      "to": "H_CASE_12_METHOD",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_12_01"
      ]
    },
    {
      "id": "R_CASE_12_MOTIVE",
      "from": "E_CASE_12_05",
      "to": "H_CASE_12_MOTIVE",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_12_05"
      ]
    },
    {
      "id": "R_CASE_12_OPPORTUNITY",
      "from": "E_CASE_12_06",
      "to": "H_CASE_12_OPPORTUNITY",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_12_06"
      ]
    },
    {
      "id": "R_CASE_12_ALIBI_CONTRADICTION",
      "from": "E_CASE_12_06",
      "to": "H_CASE_12_ALIBI",
      "relation": "contradicts",
      "sourceIds": [
        "E_CASE_12_06",
        "ST_CASE_12_S0_Q3"
      ]
    },
    {
      "id": "R_CASE_12_COLLUSION",
      "from": "E_CASE_12_07",
      "to": "H_CASE_12_OPPORTUNITY",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_12_07"
      ]
    }
  ],
  "hypotheses": [
    {
      "id": "H_CASE_12_METHOD",
      "labelKey": "case12.hypothesis.method",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_12_MOTIVE",
      "labelKey": "case12.hypothesis.motive",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_12_OPPORTUNITY",
      "labelKey": "case12.hypothesis.opportunity",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_12_ALIBI",
      "labelKey": "case12.hypothesis.alibi",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_12_RESPONSIBILITY",
      "labelKey": "case12.hypothesis.responsibility",
      "initialState": "INSUFFICIENT"
    }
  ],
  "objections": [
    {
      "id": "OBJ_CASE_12_CULPRIT_DENIAL",
      "statementId": "ST_CASE_12_S0_Q3",
      "evidenceIds": [
        "E_CASE_12_06"
      ],
      "relationshipId": "R_CASE_12_ALIBI_CONTRADICTION",
      "resultingHypothesisId": "H_CASE_12_ALIBI",
      "resultingState": "POSSIBLE_CONTRADICTION",
      "validationKey": "case12.objection.culpritDenial"
    }
  ],
  "deductions": [
    {
      "id": "DED_CASE_12_RESPONSIBILITY",
      "labelKey": "case12.deduction.responsibility",
      "requiredEvidenceIds": [
        "E_CASE_12_01",
        "E_CASE_12_05",
        "E_CASE_12_06",
        "E_CASE_12_07"
      ],
      "requiredStatementIds": [
        "ST_CASE_12_S0_Q3"
      ],
      "requiredHypothesisStates": [
        [
          "H_CASE_12_METHOD",
          "SUPPORTED"
        ],
        [
          "H_CASE_12_MOTIVE",
          "SUPPORTED"
        ],
        [
          "H_CASE_12_OPPORTUNITY",
          "SUPPORTED"
        ]
      ],
      "requiredObjectionIds": [
        "OBJ_CASE_12_CULPRIT_DENIAL"
      ],
      "resultingHypothesisId": "H_CASE_12_RESPONSIBILITY",
      "resultingState": "SUPPORTED"
    }
  ],
  "evidenceAnalysis": [
    {
      "id": "EA_CASE_12_01",
      "evidenceId": "E_CASE_12_01",
      "unlocksObservationIds": [
        "OBS_CASE_12_01"
      ]
    },
    {
      "id": "EA_CASE_12_02",
      "evidenceId": "E_CASE_12_02",
      "unlocksObservationIds": [
        "OBS_CASE_12_02"
      ]
    },
    {
      "id": "EA_CASE_12_03",
      "evidenceId": "E_CASE_12_03",
      "unlocksObservationIds": [
        "OBS_CASE_12_03"
      ]
    },
    {
      "id": "EA_CASE_12_04",
      "evidenceId": "E_CASE_12_04",
      "unlocksObservationIds": [
        "OBS_CASE_12_04"
      ]
    },
    {
      "id": "EA_CASE_12_05",
      "evidenceId": "E_CASE_12_05",
      "unlocksObservationIds": [
        "OBS_CASE_12_05"
      ]
    },
    {
      "id": "EA_CASE_12_06",
      "evidenceId": "E_CASE_12_06",
      "unlocksObservationIds": [
        "OBS_CASE_12_06"
      ]
    },
    {
      "id": "EA_CASE_12_07",
      "evidenceId": "E_CASE_12_07",
      "unlocksObservationIds": [
        "OBS_CASE_12_07"
      ]
    }
  ],
  "interrogations": [
    {
      "id": "INT_CASE_12_S1",
      "suspectId": "S_CASE_12_1",
      "questionIds": [
        "Q_CASE_12_S0_Q0",
        "Q_CASE_12_S0_Q1",
        "Q_CASE_12_S0_Q2",
        "Q_CASE_12_S0_Q3"
      ]
    },
    {
      "id": "INT_CASE_12_S2",
      "suspectId": "S_CASE_12_2",
      "questionIds": [
        "Q_CASE_12_S1_Q0",
        "Q_CASE_12_S1_Q1",
        "Q_CASE_12_S1_Q2"
      ]
    },
    {
      "id": "INT_CASE_12_S3",
      "suspectId": "S_CASE_12_3",
      "questionIds": [
        "Q_CASE_12_S2_Q0",
        "Q_CASE_12_S2_Q1",
        "Q_CASE_12_S2_Q2"
      ]
    },
    {
      "id": "INT_CASE_12_S4",
      "suspectId": "S_CASE_12_4",
      "questionIds": [
        "Q_CASE_12_S3_Q0",
        "Q_CASE_12_S3_Q1",
        "Q_CASE_12_S3_Q2"
      ]
    }
  ],
  "questions": [
    {
      "id": "Q_CASE_12_S0_Q0",
      "suspectId": "S_CASE_12_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_12_S0_Q0"
      ]
    },
    {
      "id": "Q_CASE_12_S0_Q1",
      "suspectId": "S_CASE_12_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_12_S0_Q1"
      ]
    },
    {
      "id": "Q_CASE_12_S0_Q2",
      "suspectId": "S_CASE_12_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_12_S0_Q2"
      ]
    },
    {
      "id": "Q_CASE_12_S0_Q3",
      "suspectId": "S_CASE_12_1",
      "requiredEvidenceIds": [
        "E_CASE_12_06"
      ],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_12_S0_Q3"
      ]
    },
    {
      "id": "Q_CASE_12_S1_Q0",
      "suspectId": "S_CASE_12_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_12_S1_Q0"
      ]
    },
    {
      "id": "Q_CASE_12_S1_Q1",
      "suspectId": "S_CASE_12_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_12_S1_Q1"
      ]
    },
    {
      "id": "Q_CASE_12_S1_Q2",
      "suspectId": "S_CASE_12_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_12_S1_Q2"
      ]
    },
    {
      "id": "Q_CASE_12_S2_Q0",
      "suspectId": "S_CASE_12_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_12_S2_Q0"
      ]
    },
    {
      "id": "Q_CASE_12_S2_Q1",
      "suspectId": "S_CASE_12_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_12_S2_Q1"
      ]
    },
    {
      "id": "Q_CASE_12_S2_Q2",
      "suspectId": "S_CASE_12_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_12_S2_Q2"
      ]
    },
    {
      "id": "Q_CASE_12_S3_Q0",
      "suspectId": "S_CASE_12_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_12_S3_Q0"
      ]
    },
    {
      "id": "Q_CASE_12_S3_Q1",
      "suspectId": "S_CASE_12_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_12_S3_Q1"
      ]
    },
    {
      "id": "Q_CASE_12_S3_Q2",
      "suspectId": "S_CASE_12_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_12_S3_Q2"
      ]
    }
  ],
  "responses": [
    {
      "id": "RESP_CASE_12_S0_Q0",
      "questionId": "Q_CASE_12_S0_Q0",
      "producesStatementId": "ST_CASE_12_S0_Q0"
    },
    {
      "id": "RESP_CASE_12_S0_Q1",
      "questionId": "Q_CASE_12_S0_Q1",
      "producesStatementId": "ST_CASE_12_S0_Q1"
    },
    {
      "id": "RESP_CASE_12_S0_Q2",
      "questionId": "Q_CASE_12_S0_Q2",
      "producesStatementId": "ST_CASE_12_S0_Q2"
    },
    {
      "id": "RESP_CASE_12_S0_Q3",
      "questionId": "Q_CASE_12_S0_Q3",
      "producesStatementId": "ST_CASE_12_S0_Q3"
    },
    {
      "id": "RESP_CASE_12_S1_Q0",
      "questionId": "Q_CASE_12_S1_Q0",
      "producesStatementId": "ST_CASE_12_S1_Q0"
    },
    {
      "id": "RESP_CASE_12_S1_Q1",
      "questionId": "Q_CASE_12_S1_Q1",
      "producesStatementId": "ST_CASE_12_S1_Q1"
    },
    {
      "id": "RESP_CASE_12_S1_Q2",
      "questionId": "Q_CASE_12_S1_Q2",
      "producesStatementId": "ST_CASE_12_S1_Q2"
    },
    {
      "id": "RESP_CASE_12_S2_Q0",
      "questionId": "Q_CASE_12_S2_Q0",
      "producesStatementId": "ST_CASE_12_S2_Q0"
    },
    {
      "id": "RESP_CASE_12_S2_Q1",
      "questionId": "Q_CASE_12_S2_Q1",
      "producesStatementId": "ST_CASE_12_S2_Q1"
    },
    {
      "id": "RESP_CASE_12_S2_Q2",
      "questionId": "Q_CASE_12_S2_Q2",
      "producesStatementId": "ST_CASE_12_S2_Q2"
    },
    {
      "id": "RESP_CASE_12_S3_Q0",
      "questionId": "Q_CASE_12_S3_Q0",
      "producesStatementId": "ST_CASE_12_S3_Q0"
    },
    {
      "id": "RESP_CASE_12_S3_Q1",
      "questionId": "Q_CASE_12_S3_Q1",
      "producesStatementId": "ST_CASE_12_S3_Q1"
    },
    {
      "id": "RESP_CASE_12_S3_Q2",
      "questionId": "Q_CASE_12_S3_Q2",
      "producesStatementId": "ST_CASE_12_S3_Q2"
    }
  ],
  "suspects": [
    {
      "id": "S_CASE_12_1",
      "nameKey": "legacy.case12.suspect1.name"
    },
    {
      "id": "S_CASE_12_2",
      "nameKey": "legacy.case12.suspect2.name"
    },
    {
      "id": "S_CASE_12_3",
      "nameKey": "legacy.case12.suspect3.name"
    },
    {
      "id": "S_CASE_12_4",
      "nameKey": "legacy.case12.suspect4.name"
    }
  ],
  "authoringTruthReference": {
    "source": "translations.cases[12].explain"
  }
});

const case13 = Object.freeze({
  "id": "CASE_13",
  "numericAlias": 13,
  "titleKey": "legacy.case13.title",
  "victimId": "VICTIM_CASE_13",
  "suspectIds": [
    "S_CASE_13_1",
    "S_CASE_13_2",
    "S_CASE_13_3",
    "S_CASE_13_4"
  ],
  "evidenceIds": [
    "E_CASE_13_01",
    "E_CASE_13_02",
    "E_CASE_13_03",
    "E_CASE_13_04",
    "E_CASE_13_05",
    "E_CASE_13_06"
  ],
  "statementIds": [
    "ST_CASE_13_S0_Q0",
    "ST_CASE_13_S0_Q1",
    "ST_CASE_13_S0_Q2",
    "ST_CASE_13_S1_Q0",
    "ST_CASE_13_S1_Q1",
    "ST_CASE_13_S1_Q2",
    "ST_CASE_13_S2_Q0",
    "ST_CASE_13_S2_Q1",
    "ST_CASE_13_S2_Q2",
    "ST_CASE_13_S2_Q3",
    "ST_CASE_13_S3_Q0",
    "ST_CASE_13_S3_Q1",
    "ST_CASE_13_S3_Q2"
  ],
  "eventIds": [],
  "locationIds": [
    "L_CASE_13_SCENE"
  ],
  "relationshipIds": [
    "R_CASE_13_METHOD",
    "R_CASE_13_MOTIVE",
    "R_CASE_13_OPPORTUNITY",
    "R_CASE_13_ALIBI_CONTRADICTION"
  ],
  "hypothesisIds": [
    "H_CASE_13_METHOD",
    "H_CASE_13_MOTIVE",
    "H_CASE_13_OPPORTUNITY",
    "H_CASE_13_ALIBI",
    "H_CASE_13_RESPONSIBILITY"
  ],
  "accusationGate": {
    "id": "GATE_CASE_13_RESPONSIBILITY",
    "requiredHypotheses": [
      [
        "H_CASE_13_METHOD",
        "SUPPORTED"
      ],
      [
        "H_CASE_13_MOTIVE",
        "SUPPORTED"
      ],
      [
        "H_CASE_13_OPPORTUNITY",
        "SUPPORTED"
      ],
      [
        "H_CASE_13_ALIBI",
        "POSSIBLE_CONTRADICTION"
      ],
      [
        "H_CASE_13_RESPONSIBILITY",
        "SUPPORTED"
      ]
    ],
    "requiredObjectionIds": [
      "OBJ_CASE_13_CULPRIT_DENIAL"
    ],
    "requiredDeductionIds": [
      "DED_CASE_13_RESPONSIBILITY"
    ],
    "candidateSuspectId": "S_CASE_13_3"
  },
  "evidence": [
    {
      "id": "E_CASE_13_01",
      "type": "physical",
      "observationKey": "case13.observation.e1",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_13_02",
      "type": "physical",
      "observationKey": "case13.observation.e2",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_13_03",
      "type": "physical",
      "observationKey": "case13.observation.e3",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_13_04",
      "type": "record",
      "observationKey": "case13.observation.e4",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_13_05",
      "type": "record",
      "observationKey": "case13.observation.e5",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_13_06",
      "type": "forensic",
      "observationKey": "case13.observation.authoredTrace",
      "metadata": {
        "playerVisible": true,
        "identifiesSuspectId": "S_CASE_13_3"
      }
    }
  ],
  "observations": [
    {
      "id": "OBS_CASE_13_01",
      "type": "scene_fact",
      "textKey": "case13.observation.e1",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_13_02",
      "type": "scene_fact",
      "textKey": "case13.observation.e2",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_13_03",
      "type": "scene_fact",
      "textKey": "case13.observation.e3",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_13_04",
      "type": "scene_fact",
      "textKey": "case13.observation.e4",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_13_05",
      "type": "scene_fact",
      "textKey": "case13.observation.e5",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_13_06",
      "type": "forensic",
      "textKey": "case13.observation.authoredTrace",
      "playerVisible": true,
      "identifiesSuspectId": "S_CASE_13_3"
    }
  ],
  "statements": [
    {
      "id": "ST_CASE_13_S0_Q0",
      "suspectId": "S_CASE_13_1",
      "textKey": "case13.statement.s1q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_13_S0_Q1",
      "suspectId": "S_CASE_13_1",
      "textKey": "case13.statement.s1q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_13_S0_Q2",
      "suspectId": "S_CASE_13_1",
      "textKey": "case13.statement.s1q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_13_S1_Q0",
      "suspectId": "S_CASE_13_2",
      "textKey": "case13.statement.s2q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_13_S1_Q1",
      "suspectId": "S_CASE_13_2",
      "textKey": "case13.statement.s2q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_13_S1_Q2",
      "suspectId": "S_CASE_13_2",
      "textKey": "case13.statement.s2q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_13_S2_Q0",
      "suspectId": "S_CASE_13_3",
      "textKey": "case13.statement.s3q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_13_S2_Q1",
      "suspectId": "S_CASE_13_3",
      "textKey": "case13.statement.s3q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_13_S2_Q2",
      "suspectId": "S_CASE_13_3",
      "textKey": "case13.statement.s3q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_13_S2_Q3",
      "suspectId": "S_CASE_13_3",
      "textKey": "case13.statement.authoredChallenge",
      "claimType": "denial",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_13_S3_Q0",
      "suspectId": "S_CASE_13_4",
      "textKey": "case13.statement.s4q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_13_S3_Q1",
      "suspectId": "S_CASE_13_4",
      "textKey": "case13.statement.s4q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_13_S3_Q2",
      "suspectId": "S_CASE_13_4",
      "textKey": "case13.statement.s4q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    }
  ],
  "events": [],
  "locations": [
    {
      "id": "L_CASE_13_SCENE",
      "labelKey": "case13.location.scene"
    }
  ],
  "relationships": [
    {
      "id": "R_CASE_13_METHOD",
      "from": "E_CASE_13_01",
      "to": "H_CASE_13_METHOD",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_13_01"
      ]
    },
    {
      "id": "R_CASE_13_MOTIVE",
      "from": "E_CASE_13_05",
      "to": "H_CASE_13_MOTIVE",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_13_05"
      ]
    },
    {
      "id": "R_CASE_13_OPPORTUNITY",
      "from": "E_CASE_13_06",
      "to": "H_CASE_13_OPPORTUNITY",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_13_06"
      ]
    },
    {
      "id": "R_CASE_13_ALIBI_CONTRADICTION",
      "from": "E_CASE_13_06",
      "to": "H_CASE_13_ALIBI",
      "relation": "contradicts",
      "sourceIds": [
        "E_CASE_13_06",
        "ST_CASE_13_S2_Q3"
      ]
    }
  ],
  "hypotheses": [
    {
      "id": "H_CASE_13_METHOD",
      "labelKey": "case13.hypothesis.method",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_13_MOTIVE",
      "labelKey": "case13.hypothesis.motive",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_13_OPPORTUNITY",
      "labelKey": "case13.hypothesis.opportunity",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_13_ALIBI",
      "labelKey": "case13.hypothesis.alibi",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_13_RESPONSIBILITY",
      "labelKey": "case13.hypothesis.responsibility",
      "initialState": "INSUFFICIENT"
    }
  ],
  "objections": [
    {
      "id": "OBJ_CASE_13_CULPRIT_DENIAL",
      "statementId": "ST_CASE_13_S2_Q3",
      "evidenceIds": [
        "E_CASE_13_06"
      ],
      "relationshipId": "R_CASE_13_ALIBI_CONTRADICTION",
      "resultingHypothesisId": "H_CASE_13_ALIBI",
      "resultingState": "POSSIBLE_CONTRADICTION",
      "validationKey": "case13.objection.culpritDenial"
    }
  ],
  "deductions": [
    {
      "id": "DED_CASE_13_RESPONSIBILITY",
      "labelKey": "case13.deduction.responsibility",
      "requiredEvidenceIds": [
        "E_CASE_13_01",
        "E_CASE_13_05",
        "E_CASE_13_06"
      ],
      "requiredStatementIds": [
        "ST_CASE_13_S2_Q3"
      ],
      "requiredHypothesisStates": [
        [
          "H_CASE_13_METHOD",
          "SUPPORTED"
        ],
        [
          "H_CASE_13_MOTIVE",
          "SUPPORTED"
        ],
        [
          "H_CASE_13_OPPORTUNITY",
          "SUPPORTED"
        ]
      ],
      "requiredObjectionIds": [
        "OBJ_CASE_13_CULPRIT_DENIAL"
      ],
      "resultingHypothesisId": "H_CASE_13_RESPONSIBILITY",
      "resultingState": "SUPPORTED"
    }
  ],
  "evidenceAnalysis": [
    {
      "id": "EA_CASE_13_01",
      "evidenceId": "E_CASE_13_01",
      "unlocksObservationIds": [
        "OBS_CASE_13_01"
      ]
    },
    {
      "id": "EA_CASE_13_02",
      "evidenceId": "E_CASE_13_02",
      "unlocksObservationIds": [
        "OBS_CASE_13_02"
      ]
    },
    {
      "id": "EA_CASE_13_03",
      "evidenceId": "E_CASE_13_03",
      "unlocksObservationIds": [
        "OBS_CASE_13_03"
      ]
    },
    {
      "id": "EA_CASE_13_04",
      "evidenceId": "E_CASE_13_04",
      "unlocksObservationIds": [
        "OBS_CASE_13_04"
      ]
    },
    {
      "id": "EA_CASE_13_05",
      "evidenceId": "E_CASE_13_05",
      "unlocksObservationIds": [
        "OBS_CASE_13_05"
      ]
    },
    {
      "id": "EA_CASE_13_06",
      "evidenceId": "E_CASE_13_06",
      "unlocksObservationIds": [
        "OBS_CASE_13_06"
      ]
    }
  ],
  "interrogations": [
    {
      "id": "INT_CASE_13_S1",
      "suspectId": "S_CASE_13_1",
      "questionIds": [
        "Q_CASE_13_S0_Q0",
        "Q_CASE_13_S0_Q1",
        "Q_CASE_13_S0_Q2"
      ]
    },
    {
      "id": "INT_CASE_13_S2",
      "suspectId": "S_CASE_13_2",
      "questionIds": [
        "Q_CASE_13_S1_Q0",
        "Q_CASE_13_S1_Q1",
        "Q_CASE_13_S1_Q2"
      ]
    },
    {
      "id": "INT_CASE_13_S3",
      "suspectId": "S_CASE_13_3",
      "questionIds": [
        "Q_CASE_13_S2_Q0",
        "Q_CASE_13_S2_Q1",
        "Q_CASE_13_S2_Q2",
        "Q_CASE_13_S2_Q3"
      ]
    },
    {
      "id": "INT_CASE_13_S4",
      "suspectId": "S_CASE_13_4",
      "questionIds": [
        "Q_CASE_13_S3_Q0",
        "Q_CASE_13_S3_Q1",
        "Q_CASE_13_S3_Q2"
      ]
    }
  ],
  "questions": [
    {
      "id": "Q_CASE_13_S0_Q0",
      "suspectId": "S_CASE_13_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_13_S0_Q0"
      ]
    },
    {
      "id": "Q_CASE_13_S0_Q1",
      "suspectId": "S_CASE_13_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_13_S0_Q1"
      ]
    },
    {
      "id": "Q_CASE_13_S0_Q2",
      "suspectId": "S_CASE_13_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_13_S0_Q2"
      ]
    },
    {
      "id": "Q_CASE_13_S1_Q0",
      "suspectId": "S_CASE_13_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_13_S1_Q0"
      ]
    },
    {
      "id": "Q_CASE_13_S1_Q1",
      "suspectId": "S_CASE_13_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_13_S1_Q1"
      ]
    },
    {
      "id": "Q_CASE_13_S1_Q2",
      "suspectId": "S_CASE_13_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_13_S1_Q2"
      ]
    },
    {
      "id": "Q_CASE_13_S2_Q0",
      "suspectId": "S_CASE_13_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_13_S2_Q0"
      ]
    },
    {
      "id": "Q_CASE_13_S2_Q1",
      "suspectId": "S_CASE_13_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_13_S2_Q1"
      ]
    },
    {
      "id": "Q_CASE_13_S2_Q2",
      "suspectId": "S_CASE_13_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_13_S2_Q2"
      ]
    },
    {
      "id": "Q_CASE_13_S2_Q3",
      "suspectId": "S_CASE_13_3",
      "requiredEvidenceIds": [
        "E_CASE_13_06"
      ],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_13_S2_Q3"
      ]
    },
    {
      "id": "Q_CASE_13_S3_Q0",
      "suspectId": "S_CASE_13_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_13_S3_Q0"
      ]
    },
    {
      "id": "Q_CASE_13_S3_Q1",
      "suspectId": "S_CASE_13_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_13_S3_Q1"
      ]
    },
    {
      "id": "Q_CASE_13_S3_Q2",
      "suspectId": "S_CASE_13_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_13_S3_Q2"
      ]
    }
  ],
  "responses": [
    {
      "id": "RESP_CASE_13_S0_Q0",
      "questionId": "Q_CASE_13_S0_Q0",
      "producesStatementId": "ST_CASE_13_S0_Q0"
    },
    {
      "id": "RESP_CASE_13_S0_Q1",
      "questionId": "Q_CASE_13_S0_Q1",
      "producesStatementId": "ST_CASE_13_S0_Q1"
    },
    {
      "id": "RESP_CASE_13_S0_Q2",
      "questionId": "Q_CASE_13_S0_Q2",
      "producesStatementId": "ST_CASE_13_S0_Q2"
    },
    {
      "id": "RESP_CASE_13_S1_Q0",
      "questionId": "Q_CASE_13_S1_Q0",
      "producesStatementId": "ST_CASE_13_S1_Q0"
    },
    {
      "id": "RESP_CASE_13_S1_Q1",
      "questionId": "Q_CASE_13_S1_Q1",
      "producesStatementId": "ST_CASE_13_S1_Q1"
    },
    {
      "id": "RESP_CASE_13_S1_Q2",
      "questionId": "Q_CASE_13_S1_Q2",
      "producesStatementId": "ST_CASE_13_S1_Q2"
    },
    {
      "id": "RESP_CASE_13_S2_Q0",
      "questionId": "Q_CASE_13_S2_Q0",
      "producesStatementId": "ST_CASE_13_S2_Q0"
    },
    {
      "id": "RESP_CASE_13_S2_Q1",
      "questionId": "Q_CASE_13_S2_Q1",
      "producesStatementId": "ST_CASE_13_S2_Q1"
    },
    {
      "id": "RESP_CASE_13_S2_Q2",
      "questionId": "Q_CASE_13_S2_Q2",
      "producesStatementId": "ST_CASE_13_S2_Q2"
    },
    {
      "id": "RESP_CASE_13_S2_Q3",
      "questionId": "Q_CASE_13_S2_Q3",
      "producesStatementId": "ST_CASE_13_S2_Q3"
    },
    {
      "id": "RESP_CASE_13_S3_Q0",
      "questionId": "Q_CASE_13_S3_Q0",
      "producesStatementId": "ST_CASE_13_S3_Q0"
    },
    {
      "id": "RESP_CASE_13_S3_Q1",
      "questionId": "Q_CASE_13_S3_Q1",
      "producesStatementId": "ST_CASE_13_S3_Q1"
    },
    {
      "id": "RESP_CASE_13_S3_Q2",
      "questionId": "Q_CASE_13_S3_Q2",
      "producesStatementId": "ST_CASE_13_S3_Q2"
    }
  ],
  "suspects": [
    {
      "id": "S_CASE_13_1",
      "nameKey": "legacy.case13.suspect1.name"
    },
    {
      "id": "S_CASE_13_2",
      "nameKey": "legacy.case13.suspect2.name"
    },
    {
      "id": "S_CASE_13_3",
      "nameKey": "legacy.case13.suspect3.name"
    },
    {
      "id": "S_CASE_13_4",
      "nameKey": "legacy.case13.suspect4.name"
    }
  ],
  "authoringTruthReference": {
    "source": "translations.cases[13].explain"
  }
});

const case14 = Object.freeze({
  "id": "CASE_14",
  "numericAlias": 14,
  "titleKey": "legacy.case14.title",
  "victimId": "VICTIM_CASE_14",
  "suspectIds": [
    "S_CASE_14_1",
    "S_CASE_14_2",
    "S_CASE_14_3",
    "S_CASE_14_4"
  ],
  "evidenceIds": [
    "E_CASE_14_01",
    "E_CASE_14_02",
    "E_CASE_14_03",
    "E_CASE_14_04",
    "E_CASE_14_05",
    "E_CASE_14_06"
  ],
  "statementIds": [
    "ST_CASE_14_S0_Q0",
    "ST_CASE_14_S0_Q1",
    "ST_CASE_14_S0_Q2",
    "ST_CASE_14_S1_Q0",
    "ST_CASE_14_S1_Q1",
    "ST_CASE_14_S1_Q2",
    "ST_CASE_14_S1_Q3",
    "ST_CASE_14_S2_Q0",
    "ST_CASE_14_S2_Q1",
    "ST_CASE_14_S2_Q2",
    "ST_CASE_14_S3_Q0",
    "ST_CASE_14_S3_Q1",
    "ST_CASE_14_S3_Q2"
  ],
  "eventIds": [],
  "locationIds": [
    "L_CASE_14_SCENE"
  ],
  "relationshipIds": [
    "R_CASE_14_METHOD",
    "R_CASE_14_MOTIVE",
    "R_CASE_14_OPPORTUNITY",
    "R_CASE_14_ALIBI_CONTRADICTION"
  ],
  "hypothesisIds": [
    "H_CASE_14_METHOD",
    "H_CASE_14_MOTIVE",
    "H_CASE_14_OPPORTUNITY",
    "H_CASE_14_ALIBI",
    "H_CASE_14_RESPONSIBILITY"
  ],
  "accusationGate": {
    "id": "GATE_CASE_14_RESPONSIBILITY",
    "requiredHypotheses": [
      [
        "H_CASE_14_METHOD",
        "SUPPORTED"
      ],
      [
        "H_CASE_14_MOTIVE",
        "SUPPORTED"
      ],
      [
        "H_CASE_14_OPPORTUNITY",
        "SUPPORTED"
      ],
      [
        "H_CASE_14_ALIBI",
        "POSSIBLE_CONTRADICTION"
      ],
      [
        "H_CASE_14_RESPONSIBILITY",
        "SUPPORTED"
      ]
    ],
    "requiredObjectionIds": [
      "OBJ_CASE_14_CULPRIT_DENIAL"
    ],
    "requiredDeductionIds": [
      "DED_CASE_14_RESPONSIBILITY"
    ],
    "candidateSuspectId": "S_CASE_14_2"
  },
  "evidence": [
    {
      "id": "E_CASE_14_01",
      "type": "physical",
      "observationKey": "case14.observation.e1",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_14_02",
      "type": "physical",
      "observationKey": "case14.observation.e2",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_14_03",
      "type": "physical",
      "observationKey": "case14.observation.e3",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_14_04",
      "type": "record",
      "observationKey": "case14.observation.e4",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_14_05",
      "type": "record",
      "observationKey": "case14.observation.e5",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_14_06",
      "type": "forensic",
      "observationKey": "case14.observation.authoredTrace",
      "metadata": {
        "playerVisible": true,
        "identifiesSuspectId": "S_CASE_14_2"
      }
    }
  ],
  "observations": [
    {
      "id": "OBS_CASE_14_01",
      "type": "scene_fact",
      "textKey": "case14.observation.e1",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_14_02",
      "type": "scene_fact",
      "textKey": "case14.observation.e2",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_14_03",
      "type": "scene_fact",
      "textKey": "case14.observation.e3",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_14_04",
      "type": "scene_fact",
      "textKey": "case14.observation.e4",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_14_05",
      "type": "scene_fact",
      "textKey": "case14.observation.e5",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_14_06",
      "type": "forensic",
      "textKey": "case14.observation.authoredTrace",
      "playerVisible": true,
      "identifiesSuspectId": "S_CASE_14_2"
    }
  ],
  "statements": [
    {
      "id": "ST_CASE_14_S0_Q0",
      "suspectId": "S_CASE_14_1",
      "textKey": "case14.statement.s1q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_14_S0_Q1",
      "suspectId": "S_CASE_14_1",
      "textKey": "case14.statement.s1q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_14_S0_Q2",
      "suspectId": "S_CASE_14_1",
      "textKey": "case14.statement.s1q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_14_S1_Q0",
      "suspectId": "S_CASE_14_2",
      "textKey": "case14.statement.s2q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_14_S1_Q1",
      "suspectId": "S_CASE_14_2",
      "textKey": "case14.statement.s2q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_14_S1_Q2",
      "suspectId": "S_CASE_14_2",
      "textKey": "case14.statement.s2q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_14_S1_Q3",
      "suspectId": "S_CASE_14_2",
      "textKey": "case14.statement.authoredChallenge",
      "claimType": "denial",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_14_S2_Q0",
      "suspectId": "S_CASE_14_3",
      "textKey": "case14.statement.s3q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_14_S2_Q1",
      "suspectId": "S_CASE_14_3",
      "textKey": "case14.statement.s3q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_14_S2_Q2",
      "suspectId": "S_CASE_14_3",
      "textKey": "case14.statement.s3q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_14_S3_Q0",
      "suspectId": "S_CASE_14_4",
      "textKey": "case14.statement.s4q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_14_S3_Q1",
      "suspectId": "S_CASE_14_4",
      "textKey": "case14.statement.s4q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_14_S3_Q2",
      "suspectId": "S_CASE_14_4",
      "textKey": "case14.statement.s4q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    }
  ],
  "events": [],
  "locations": [
    {
      "id": "L_CASE_14_SCENE",
      "labelKey": "case14.location.scene"
    }
  ],
  "relationships": [
    {
      "id": "R_CASE_14_METHOD",
      "from": "E_CASE_14_01",
      "to": "H_CASE_14_METHOD",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_14_01"
      ]
    },
    {
      "id": "R_CASE_14_MOTIVE",
      "from": "E_CASE_14_05",
      "to": "H_CASE_14_MOTIVE",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_14_05"
      ]
    },
    {
      "id": "R_CASE_14_OPPORTUNITY",
      "from": "E_CASE_14_06",
      "to": "H_CASE_14_OPPORTUNITY",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_14_06"
      ]
    },
    {
      "id": "R_CASE_14_ALIBI_CONTRADICTION",
      "from": "E_CASE_14_06",
      "to": "H_CASE_14_ALIBI",
      "relation": "contradicts",
      "sourceIds": [
        "E_CASE_14_06",
        "ST_CASE_14_S1_Q3"
      ]
    }
  ],
  "hypotheses": [
    {
      "id": "H_CASE_14_METHOD",
      "labelKey": "case14.hypothesis.method",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_14_MOTIVE",
      "labelKey": "case14.hypothesis.motive",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_14_OPPORTUNITY",
      "labelKey": "case14.hypothesis.opportunity",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_14_ALIBI",
      "labelKey": "case14.hypothesis.alibi",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_14_RESPONSIBILITY",
      "labelKey": "case14.hypothesis.responsibility",
      "initialState": "INSUFFICIENT"
    }
  ],
  "objections": [
    {
      "id": "OBJ_CASE_14_CULPRIT_DENIAL",
      "statementId": "ST_CASE_14_S1_Q3",
      "evidenceIds": [
        "E_CASE_14_06"
      ],
      "relationshipId": "R_CASE_14_ALIBI_CONTRADICTION",
      "resultingHypothesisId": "H_CASE_14_ALIBI",
      "resultingState": "POSSIBLE_CONTRADICTION",
      "validationKey": "case14.objection.culpritDenial"
    }
  ],
  "deductions": [
    {
      "id": "DED_CASE_14_RESPONSIBILITY",
      "labelKey": "case14.deduction.responsibility",
      "requiredEvidenceIds": [
        "E_CASE_14_01",
        "E_CASE_14_05",
        "E_CASE_14_06"
      ],
      "requiredStatementIds": [
        "ST_CASE_14_S1_Q3"
      ],
      "requiredHypothesisStates": [
        [
          "H_CASE_14_METHOD",
          "SUPPORTED"
        ],
        [
          "H_CASE_14_MOTIVE",
          "SUPPORTED"
        ],
        [
          "H_CASE_14_OPPORTUNITY",
          "SUPPORTED"
        ]
      ],
      "requiredObjectionIds": [
        "OBJ_CASE_14_CULPRIT_DENIAL"
      ],
      "resultingHypothesisId": "H_CASE_14_RESPONSIBILITY",
      "resultingState": "SUPPORTED"
    }
  ],
  "evidenceAnalysis": [
    {
      "id": "EA_CASE_14_01",
      "evidenceId": "E_CASE_14_01",
      "unlocksObservationIds": [
        "OBS_CASE_14_01"
      ]
    },
    {
      "id": "EA_CASE_14_02",
      "evidenceId": "E_CASE_14_02",
      "unlocksObservationIds": [
        "OBS_CASE_14_02"
      ]
    },
    {
      "id": "EA_CASE_14_03",
      "evidenceId": "E_CASE_14_03",
      "unlocksObservationIds": [
        "OBS_CASE_14_03"
      ]
    },
    {
      "id": "EA_CASE_14_04",
      "evidenceId": "E_CASE_14_04",
      "unlocksObservationIds": [
        "OBS_CASE_14_04"
      ]
    },
    {
      "id": "EA_CASE_14_05",
      "evidenceId": "E_CASE_14_05",
      "unlocksObservationIds": [
        "OBS_CASE_14_05"
      ]
    },
    {
      "id": "EA_CASE_14_06",
      "evidenceId": "E_CASE_14_06",
      "unlocksObservationIds": [
        "OBS_CASE_14_06"
      ]
    }
  ],
  "interrogations": [
    {
      "id": "INT_CASE_14_S1",
      "suspectId": "S_CASE_14_1",
      "questionIds": [
        "Q_CASE_14_S0_Q0",
        "Q_CASE_14_S0_Q1",
        "Q_CASE_14_S0_Q2"
      ]
    },
    {
      "id": "INT_CASE_14_S2",
      "suspectId": "S_CASE_14_2",
      "questionIds": [
        "Q_CASE_14_S1_Q0",
        "Q_CASE_14_S1_Q1",
        "Q_CASE_14_S1_Q2",
        "Q_CASE_14_S1_Q3"
      ]
    },
    {
      "id": "INT_CASE_14_S3",
      "suspectId": "S_CASE_14_3",
      "questionIds": [
        "Q_CASE_14_S2_Q0",
        "Q_CASE_14_S2_Q1",
        "Q_CASE_14_S2_Q2"
      ]
    },
    {
      "id": "INT_CASE_14_S4",
      "suspectId": "S_CASE_14_4",
      "questionIds": [
        "Q_CASE_14_S3_Q0",
        "Q_CASE_14_S3_Q1",
        "Q_CASE_14_S3_Q2"
      ]
    }
  ],
  "questions": [
    {
      "id": "Q_CASE_14_S0_Q0",
      "suspectId": "S_CASE_14_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_14_S0_Q0"
      ]
    },
    {
      "id": "Q_CASE_14_S0_Q1",
      "suspectId": "S_CASE_14_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_14_S0_Q1"
      ]
    },
    {
      "id": "Q_CASE_14_S0_Q2",
      "suspectId": "S_CASE_14_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_14_S0_Q2"
      ]
    },
    {
      "id": "Q_CASE_14_S1_Q0",
      "suspectId": "S_CASE_14_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_14_S1_Q0"
      ]
    },
    {
      "id": "Q_CASE_14_S1_Q1",
      "suspectId": "S_CASE_14_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_14_S1_Q1"
      ]
    },
    {
      "id": "Q_CASE_14_S1_Q2",
      "suspectId": "S_CASE_14_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_14_S1_Q2"
      ]
    },
    {
      "id": "Q_CASE_14_S1_Q3",
      "suspectId": "S_CASE_14_2",
      "requiredEvidenceIds": [
        "E_CASE_14_06"
      ],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_14_S1_Q3"
      ]
    },
    {
      "id": "Q_CASE_14_S2_Q0",
      "suspectId": "S_CASE_14_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_14_S2_Q0"
      ]
    },
    {
      "id": "Q_CASE_14_S2_Q1",
      "suspectId": "S_CASE_14_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_14_S2_Q1"
      ]
    },
    {
      "id": "Q_CASE_14_S2_Q2",
      "suspectId": "S_CASE_14_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_14_S2_Q2"
      ]
    },
    {
      "id": "Q_CASE_14_S3_Q0",
      "suspectId": "S_CASE_14_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_14_S3_Q0"
      ]
    },
    {
      "id": "Q_CASE_14_S3_Q1",
      "suspectId": "S_CASE_14_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_14_S3_Q1"
      ]
    },
    {
      "id": "Q_CASE_14_S3_Q2",
      "suspectId": "S_CASE_14_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_14_S3_Q2"
      ]
    }
  ],
  "responses": [
    {
      "id": "RESP_CASE_14_S0_Q0",
      "questionId": "Q_CASE_14_S0_Q0",
      "producesStatementId": "ST_CASE_14_S0_Q0"
    },
    {
      "id": "RESP_CASE_14_S0_Q1",
      "questionId": "Q_CASE_14_S0_Q1",
      "producesStatementId": "ST_CASE_14_S0_Q1"
    },
    {
      "id": "RESP_CASE_14_S0_Q2",
      "questionId": "Q_CASE_14_S0_Q2",
      "producesStatementId": "ST_CASE_14_S0_Q2"
    },
    {
      "id": "RESP_CASE_14_S1_Q0",
      "questionId": "Q_CASE_14_S1_Q0",
      "producesStatementId": "ST_CASE_14_S1_Q0"
    },
    {
      "id": "RESP_CASE_14_S1_Q1",
      "questionId": "Q_CASE_14_S1_Q1",
      "producesStatementId": "ST_CASE_14_S1_Q1"
    },
    {
      "id": "RESP_CASE_14_S1_Q2",
      "questionId": "Q_CASE_14_S1_Q2",
      "producesStatementId": "ST_CASE_14_S1_Q2"
    },
    {
      "id": "RESP_CASE_14_S1_Q3",
      "questionId": "Q_CASE_14_S1_Q3",
      "producesStatementId": "ST_CASE_14_S1_Q3"
    },
    {
      "id": "RESP_CASE_14_S2_Q0",
      "questionId": "Q_CASE_14_S2_Q0",
      "producesStatementId": "ST_CASE_14_S2_Q0"
    },
    {
      "id": "RESP_CASE_14_S2_Q1",
      "questionId": "Q_CASE_14_S2_Q1",
      "producesStatementId": "ST_CASE_14_S2_Q1"
    },
    {
      "id": "RESP_CASE_14_S2_Q2",
      "questionId": "Q_CASE_14_S2_Q2",
      "producesStatementId": "ST_CASE_14_S2_Q2"
    },
    {
      "id": "RESP_CASE_14_S3_Q0",
      "questionId": "Q_CASE_14_S3_Q0",
      "producesStatementId": "ST_CASE_14_S3_Q0"
    },
    {
      "id": "RESP_CASE_14_S3_Q1",
      "questionId": "Q_CASE_14_S3_Q1",
      "producesStatementId": "ST_CASE_14_S3_Q1"
    },
    {
      "id": "RESP_CASE_14_S3_Q2",
      "questionId": "Q_CASE_14_S3_Q2",
      "producesStatementId": "ST_CASE_14_S3_Q2"
    }
  ],
  "suspects": [
    {
      "id": "S_CASE_14_1",
      "nameKey": "legacy.case14.suspect1.name"
    },
    {
      "id": "S_CASE_14_2",
      "nameKey": "legacy.case14.suspect2.name"
    },
    {
      "id": "S_CASE_14_3",
      "nameKey": "legacy.case14.suspect3.name"
    },
    {
      "id": "S_CASE_14_4",
      "nameKey": "legacy.case14.suspect4.name"
    }
  ],
  "authoringTruthReference": {
    "source": "translations.cases[14].explain"
  }
});

const case15 = Object.freeze({
  "id": "CASE_15",
  "numericAlias": 15,
  "titleKey": "legacy.case15.title",
  "victimId": "VICTIM_CASE_15",
  "suspectIds": [
    "S_CASE_15_1",
    "S_CASE_15_2",
    "S_CASE_15_3",
    "S_CASE_15_4"
  ],
  "evidenceIds": [
    "E_CASE_15_01",
    "E_CASE_15_02",
    "E_CASE_15_03",
    "E_CASE_15_04",
    "E_CASE_15_05",
    "E_CASE_15_06"
  ],
  "statementIds": [
    "ST_CASE_15_S0_Q0",
    "ST_CASE_15_S0_Q1",
    "ST_CASE_15_S0_Q2",
    "ST_CASE_15_S0_Q3",
    "ST_CASE_15_S1_Q0",
    "ST_CASE_15_S1_Q1",
    "ST_CASE_15_S1_Q2",
    "ST_CASE_15_S2_Q0",
    "ST_CASE_15_S2_Q1",
    "ST_CASE_15_S2_Q2",
    "ST_CASE_15_S3_Q0",
    "ST_CASE_15_S3_Q1",
    "ST_CASE_15_S3_Q2"
  ],
  "eventIds": [],
  "locationIds": [
    "L_CASE_15_SCENE"
  ],
  "relationshipIds": [
    "R_CASE_15_METHOD",
    "R_CASE_15_MOTIVE",
    "R_CASE_15_OPPORTUNITY",
    "R_CASE_15_ALIBI_CONTRADICTION"
  ],
  "hypothesisIds": [
    "H_CASE_15_METHOD",
    "H_CASE_15_MOTIVE",
    "H_CASE_15_OPPORTUNITY",
    "H_CASE_15_ALIBI",
    "H_CASE_15_RESPONSIBILITY"
  ],
  "accusationGate": {
    "id": "GATE_CASE_15_RESPONSIBILITY",
    "requiredHypotheses": [
      [
        "H_CASE_15_METHOD",
        "SUPPORTED"
      ],
      [
        "H_CASE_15_MOTIVE",
        "SUPPORTED"
      ],
      [
        "H_CASE_15_OPPORTUNITY",
        "SUPPORTED"
      ],
      [
        "H_CASE_15_ALIBI",
        "POSSIBLE_CONTRADICTION"
      ],
      [
        "H_CASE_15_RESPONSIBILITY",
        "SUPPORTED"
      ]
    ],
    "requiredObjectionIds": [
      "OBJ_CASE_15_CULPRIT_DENIAL"
    ],
    "requiredDeductionIds": [
      "DED_CASE_15_RESPONSIBILITY"
    ],
    "candidateSuspectId": "S_CASE_15_1"
  },
  "evidence": [
    {
      "id": "E_CASE_15_01",
      "type": "physical",
      "observationKey": "case15.observation.e1",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_15_02",
      "type": "physical",
      "observationKey": "case15.observation.e2",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_15_03",
      "type": "physical",
      "observationKey": "case15.observation.e3",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_15_04",
      "type": "record",
      "observationKey": "case15.observation.e4",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_15_05",
      "type": "record",
      "observationKey": "case15.observation.e5",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_15_06",
      "type": "forensic",
      "observationKey": "case15.observation.authoredTrace",
      "metadata": {
        "playerVisible": true,
        "identifiesSuspectId": "S_CASE_15_1"
      }
    }
  ],
  "observations": [
    {
      "id": "OBS_CASE_15_01",
      "type": "scene_fact",
      "textKey": "case15.observation.e1",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_15_02",
      "type": "scene_fact",
      "textKey": "case15.observation.e2",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_15_03",
      "type": "scene_fact",
      "textKey": "case15.observation.e3",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_15_04",
      "type": "scene_fact",
      "textKey": "case15.observation.e4",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_15_05",
      "type": "scene_fact",
      "textKey": "case15.observation.e5",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_15_06",
      "type": "forensic",
      "textKey": "case15.observation.authoredTrace",
      "playerVisible": true,
      "identifiesSuspectId": "S_CASE_15_1"
    }
  ],
  "statements": [
    {
      "id": "ST_CASE_15_S0_Q0",
      "suspectId": "S_CASE_15_1",
      "textKey": "case15.statement.s1q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_15_S0_Q1",
      "suspectId": "S_CASE_15_1",
      "textKey": "case15.statement.s1q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_15_S0_Q2",
      "suspectId": "S_CASE_15_1",
      "textKey": "case15.statement.s1q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_15_S0_Q3",
      "suspectId": "S_CASE_15_1",
      "textKey": "case15.statement.authoredChallenge",
      "claimType": "denial",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_15_S1_Q0",
      "suspectId": "S_CASE_15_2",
      "textKey": "case15.statement.s2q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_15_S1_Q1",
      "suspectId": "S_CASE_15_2",
      "textKey": "case15.statement.s2q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_15_S1_Q2",
      "suspectId": "S_CASE_15_2",
      "textKey": "case15.statement.s2q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_15_S2_Q0",
      "suspectId": "S_CASE_15_3",
      "textKey": "case15.statement.s3q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_15_S2_Q1",
      "suspectId": "S_CASE_15_3",
      "textKey": "case15.statement.s3q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_15_S2_Q2",
      "suspectId": "S_CASE_15_3",
      "textKey": "case15.statement.s3q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_15_S3_Q0",
      "suspectId": "S_CASE_15_4",
      "textKey": "case15.statement.s4q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_15_S3_Q1",
      "suspectId": "S_CASE_15_4",
      "textKey": "case15.statement.s4q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_15_S3_Q2",
      "suspectId": "S_CASE_15_4",
      "textKey": "case15.statement.s4q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    }
  ],
  "events": [],
  "locations": [
    {
      "id": "L_CASE_15_SCENE",
      "labelKey": "case15.location.scene"
    }
  ],
  "relationships": [
    {
      "id": "R_CASE_15_METHOD",
      "from": "E_CASE_15_01",
      "to": "H_CASE_15_METHOD",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_15_01"
      ]
    },
    {
      "id": "R_CASE_15_MOTIVE",
      "from": "E_CASE_15_05",
      "to": "H_CASE_15_MOTIVE",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_15_05"
      ]
    },
    {
      "id": "R_CASE_15_OPPORTUNITY",
      "from": "E_CASE_15_06",
      "to": "H_CASE_15_OPPORTUNITY",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_15_06"
      ]
    },
    {
      "id": "R_CASE_15_ALIBI_CONTRADICTION",
      "from": "E_CASE_15_06",
      "to": "H_CASE_15_ALIBI",
      "relation": "contradicts",
      "sourceIds": [
        "E_CASE_15_06",
        "ST_CASE_15_S0_Q3"
      ]
    }
  ],
  "hypotheses": [
    {
      "id": "H_CASE_15_METHOD",
      "labelKey": "case15.hypothesis.method",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_15_MOTIVE",
      "labelKey": "case15.hypothesis.motive",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_15_OPPORTUNITY",
      "labelKey": "case15.hypothesis.opportunity",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_15_ALIBI",
      "labelKey": "case15.hypothesis.alibi",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_15_RESPONSIBILITY",
      "labelKey": "case15.hypothesis.responsibility",
      "initialState": "INSUFFICIENT"
    }
  ],
  "objections": [
    {
      "id": "OBJ_CASE_15_CULPRIT_DENIAL",
      "statementId": "ST_CASE_15_S0_Q3",
      "evidenceIds": [
        "E_CASE_15_06"
      ],
      "relationshipId": "R_CASE_15_ALIBI_CONTRADICTION",
      "resultingHypothesisId": "H_CASE_15_ALIBI",
      "resultingState": "POSSIBLE_CONTRADICTION",
      "validationKey": "case15.objection.culpritDenial"
    }
  ],
  "deductions": [
    {
      "id": "DED_CASE_15_RESPONSIBILITY",
      "labelKey": "case15.deduction.responsibility",
      "requiredEvidenceIds": [
        "E_CASE_15_01",
        "E_CASE_15_05",
        "E_CASE_15_06"
      ],
      "requiredStatementIds": [
        "ST_CASE_15_S0_Q3"
      ],
      "requiredHypothesisStates": [
        [
          "H_CASE_15_METHOD",
          "SUPPORTED"
        ],
        [
          "H_CASE_15_MOTIVE",
          "SUPPORTED"
        ],
        [
          "H_CASE_15_OPPORTUNITY",
          "SUPPORTED"
        ]
      ],
      "requiredObjectionIds": [
        "OBJ_CASE_15_CULPRIT_DENIAL"
      ],
      "resultingHypothesisId": "H_CASE_15_RESPONSIBILITY",
      "resultingState": "SUPPORTED"
    }
  ],
  "evidenceAnalysis": [
    {
      "id": "EA_CASE_15_01",
      "evidenceId": "E_CASE_15_01",
      "unlocksObservationIds": [
        "OBS_CASE_15_01"
      ]
    },
    {
      "id": "EA_CASE_15_02",
      "evidenceId": "E_CASE_15_02",
      "unlocksObservationIds": [
        "OBS_CASE_15_02"
      ]
    },
    {
      "id": "EA_CASE_15_03",
      "evidenceId": "E_CASE_15_03",
      "unlocksObservationIds": [
        "OBS_CASE_15_03"
      ]
    },
    {
      "id": "EA_CASE_15_04",
      "evidenceId": "E_CASE_15_04",
      "unlocksObservationIds": [
        "OBS_CASE_15_04"
      ]
    },
    {
      "id": "EA_CASE_15_05",
      "evidenceId": "E_CASE_15_05",
      "unlocksObservationIds": [
        "OBS_CASE_15_05"
      ]
    },
    {
      "id": "EA_CASE_15_06",
      "evidenceId": "E_CASE_15_06",
      "unlocksObservationIds": [
        "OBS_CASE_15_06"
      ]
    }
  ],
  "interrogations": [
    {
      "id": "INT_CASE_15_S1",
      "suspectId": "S_CASE_15_1",
      "questionIds": [
        "Q_CASE_15_S0_Q0",
        "Q_CASE_15_S0_Q1",
        "Q_CASE_15_S0_Q2",
        "Q_CASE_15_S0_Q3"
      ]
    },
    {
      "id": "INT_CASE_15_S2",
      "suspectId": "S_CASE_15_2",
      "questionIds": [
        "Q_CASE_15_S1_Q0",
        "Q_CASE_15_S1_Q1",
        "Q_CASE_15_S1_Q2"
      ]
    },
    {
      "id": "INT_CASE_15_S3",
      "suspectId": "S_CASE_15_3",
      "questionIds": [
        "Q_CASE_15_S2_Q0",
        "Q_CASE_15_S2_Q1",
        "Q_CASE_15_S2_Q2"
      ]
    },
    {
      "id": "INT_CASE_15_S4",
      "suspectId": "S_CASE_15_4",
      "questionIds": [
        "Q_CASE_15_S3_Q0",
        "Q_CASE_15_S3_Q1",
        "Q_CASE_15_S3_Q2"
      ]
    }
  ],
  "questions": [
    {
      "id": "Q_CASE_15_S0_Q0",
      "suspectId": "S_CASE_15_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_15_S0_Q0"
      ]
    },
    {
      "id": "Q_CASE_15_S0_Q1",
      "suspectId": "S_CASE_15_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_15_S0_Q1"
      ]
    },
    {
      "id": "Q_CASE_15_S0_Q2",
      "suspectId": "S_CASE_15_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_15_S0_Q2"
      ]
    },
    {
      "id": "Q_CASE_15_S0_Q3",
      "suspectId": "S_CASE_15_1",
      "requiredEvidenceIds": [
        "E_CASE_15_06"
      ],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_15_S0_Q3"
      ]
    },
    {
      "id": "Q_CASE_15_S1_Q0",
      "suspectId": "S_CASE_15_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_15_S1_Q0"
      ]
    },
    {
      "id": "Q_CASE_15_S1_Q1",
      "suspectId": "S_CASE_15_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_15_S1_Q1"
      ]
    },
    {
      "id": "Q_CASE_15_S1_Q2",
      "suspectId": "S_CASE_15_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_15_S1_Q2"
      ]
    },
    {
      "id": "Q_CASE_15_S2_Q0",
      "suspectId": "S_CASE_15_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_15_S2_Q0"
      ]
    },
    {
      "id": "Q_CASE_15_S2_Q1",
      "suspectId": "S_CASE_15_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_15_S2_Q1"
      ]
    },
    {
      "id": "Q_CASE_15_S2_Q2",
      "suspectId": "S_CASE_15_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_15_S2_Q2"
      ]
    },
    {
      "id": "Q_CASE_15_S3_Q0",
      "suspectId": "S_CASE_15_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_15_S3_Q0"
      ]
    },
    {
      "id": "Q_CASE_15_S3_Q1",
      "suspectId": "S_CASE_15_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_15_S3_Q1"
      ]
    },
    {
      "id": "Q_CASE_15_S3_Q2",
      "suspectId": "S_CASE_15_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_15_S3_Q2"
      ]
    }
  ],
  "responses": [
    {
      "id": "RESP_CASE_15_S0_Q0",
      "questionId": "Q_CASE_15_S0_Q0",
      "producesStatementId": "ST_CASE_15_S0_Q0"
    },
    {
      "id": "RESP_CASE_15_S0_Q1",
      "questionId": "Q_CASE_15_S0_Q1",
      "producesStatementId": "ST_CASE_15_S0_Q1"
    },
    {
      "id": "RESP_CASE_15_S0_Q2",
      "questionId": "Q_CASE_15_S0_Q2",
      "producesStatementId": "ST_CASE_15_S0_Q2"
    },
    {
      "id": "RESP_CASE_15_S0_Q3",
      "questionId": "Q_CASE_15_S0_Q3",
      "producesStatementId": "ST_CASE_15_S0_Q3"
    },
    {
      "id": "RESP_CASE_15_S1_Q0",
      "questionId": "Q_CASE_15_S1_Q0",
      "producesStatementId": "ST_CASE_15_S1_Q0"
    },
    {
      "id": "RESP_CASE_15_S1_Q1",
      "questionId": "Q_CASE_15_S1_Q1",
      "producesStatementId": "ST_CASE_15_S1_Q1"
    },
    {
      "id": "RESP_CASE_15_S1_Q2",
      "questionId": "Q_CASE_15_S1_Q2",
      "producesStatementId": "ST_CASE_15_S1_Q2"
    },
    {
      "id": "RESP_CASE_15_S2_Q0",
      "questionId": "Q_CASE_15_S2_Q0",
      "producesStatementId": "ST_CASE_15_S2_Q0"
    },
    {
      "id": "RESP_CASE_15_S2_Q1",
      "questionId": "Q_CASE_15_S2_Q1",
      "producesStatementId": "ST_CASE_15_S2_Q1"
    },
    {
      "id": "RESP_CASE_15_S2_Q2",
      "questionId": "Q_CASE_15_S2_Q2",
      "producesStatementId": "ST_CASE_15_S2_Q2"
    },
    {
      "id": "RESP_CASE_15_S3_Q0",
      "questionId": "Q_CASE_15_S3_Q0",
      "producesStatementId": "ST_CASE_15_S3_Q0"
    },
    {
      "id": "RESP_CASE_15_S3_Q1",
      "questionId": "Q_CASE_15_S3_Q1",
      "producesStatementId": "ST_CASE_15_S3_Q1"
    },
    {
      "id": "RESP_CASE_15_S3_Q2",
      "questionId": "Q_CASE_15_S3_Q2",
      "producesStatementId": "ST_CASE_15_S3_Q2"
    }
  ],
  "suspects": [
    {
      "id": "S_CASE_15_1",
      "nameKey": "legacy.case15.suspect1.name"
    },
    {
      "id": "S_CASE_15_2",
      "nameKey": "legacy.case15.suspect2.name"
    },
    {
      "id": "S_CASE_15_3",
      "nameKey": "legacy.case15.suspect3.name"
    },
    {
      "id": "S_CASE_15_4",
      "nameKey": "legacy.case15.suspect4.name"
    }
  ],
  "authoringTruthReference": {
    "source": "translations.cases[15].explain"
  }
});

const case16 = Object.freeze({
  "id": "CASE_16",
  "numericAlias": 16,
  "titleKey": "legacy.case16.title",
  "victimId": "VICTIM_CASE_16",
  "suspectIds": [
    "S_CASE_16_1",
    "S_CASE_16_2",
    "S_CASE_16_3",
    "S_CASE_16_4"
  ],
  "evidenceIds": [
    "E_CASE_16_01",
    "E_CASE_16_02",
    "E_CASE_16_03",
    "E_CASE_16_04",
    "E_CASE_16_05",
    "E_CASE_16_06"
  ],
  "statementIds": [
    "ST_CASE_16_S0_Q0",
    "ST_CASE_16_S0_Q1",
    "ST_CASE_16_S0_Q2",
    "ST_CASE_16_S0_Q3",
    "ST_CASE_16_S1_Q0",
    "ST_CASE_16_S1_Q1",
    "ST_CASE_16_S1_Q2",
    "ST_CASE_16_S2_Q0",
    "ST_CASE_16_S2_Q1",
    "ST_CASE_16_S2_Q2",
    "ST_CASE_16_S3_Q0",
    "ST_CASE_16_S3_Q1",
    "ST_CASE_16_S3_Q2"
  ],
  "eventIds": [],
  "locationIds": [
    "L_CASE_16_SCENE"
  ],
  "relationshipIds": [
    "R_CASE_16_METHOD",
    "R_CASE_16_MOTIVE",
    "R_CASE_16_OPPORTUNITY",
    "R_CASE_16_ALIBI_CONTRADICTION"
  ],
  "hypothesisIds": [
    "H_CASE_16_METHOD",
    "H_CASE_16_MOTIVE",
    "H_CASE_16_OPPORTUNITY",
    "H_CASE_16_ALIBI",
    "H_CASE_16_RESPONSIBILITY"
  ],
  "accusationGate": {
    "id": "GATE_CASE_16_RESPONSIBILITY",
    "requiredHypotheses": [
      [
        "H_CASE_16_METHOD",
        "SUPPORTED"
      ],
      [
        "H_CASE_16_MOTIVE",
        "SUPPORTED"
      ],
      [
        "H_CASE_16_OPPORTUNITY",
        "SUPPORTED"
      ],
      [
        "H_CASE_16_ALIBI",
        "POSSIBLE_CONTRADICTION"
      ],
      [
        "H_CASE_16_RESPONSIBILITY",
        "SUPPORTED"
      ]
    ],
    "requiredObjectionIds": [
      "OBJ_CASE_16_CULPRIT_DENIAL"
    ],
    "requiredDeductionIds": [
      "DED_CASE_16_RESPONSIBILITY"
    ],
    "candidateSuspectId": "S_CASE_16_1"
  },
  "evidence": [
    {
      "id": "E_CASE_16_01",
      "type": "physical",
      "observationKey": "case16.observation.e1",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_16_02",
      "type": "physical",
      "observationKey": "case16.observation.e2",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_16_03",
      "type": "physical",
      "observationKey": "case16.observation.e3",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_16_04",
      "type": "record",
      "observationKey": "case16.observation.e4",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_16_05",
      "type": "record",
      "observationKey": "case16.observation.e5",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_16_06",
      "type": "forensic",
      "observationKey": "case16.observation.authoredTrace",
      "metadata": {
        "playerVisible": true,
        "identifiesSuspectId": "S_CASE_16_1"
      }
    }
  ],
  "observations": [
    {
      "id": "OBS_CASE_16_01",
      "type": "scene_fact",
      "textKey": "case16.observation.e1",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_16_02",
      "type": "scene_fact",
      "textKey": "case16.observation.e2",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_16_03",
      "type": "scene_fact",
      "textKey": "case16.observation.e3",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_16_04",
      "type": "scene_fact",
      "textKey": "case16.observation.e4",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_16_05",
      "type": "scene_fact",
      "textKey": "case16.observation.e5",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_16_06",
      "type": "forensic",
      "textKey": "case16.observation.authoredTrace",
      "playerVisible": true,
      "identifiesSuspectId": "S_CASE_16_1"
    }
  ],
  "statements": [
    {
      "id": "ST_CASE_16_S0_Q0",
      "suspectId": "S_CASE_16_1",
      "textKey": "case16.statement.s1q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_16_S0_Q1",
      "suspectId": "S_CASE_16_1",
      "textKey": "case16.statement.s1q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_16_S0_Q2",
      "suspectId": "S_CASE_16_1",
      "textKey": "case16.statement.s1q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_16_S0_Q3",
      "suspectId": "S_CASE_16_1",
      "textKey": "case16.statement.authoredChallenge",
      "claimType": "denial",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_16_S1_Q0",
      "suspectId": "S_CASE_16_2",
      "textKey": "case16.statement.s2q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_16_S1_Q1",
      "suspectId": "S_CASE_16_2",
      "textKey": "case16.statement.s2q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_16_S1_Q2",
      "suspectId": "S_CASE_16_2",
      "textKey": "case16.statement.s2q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_16_S2_Q0",
      "suspectId": "S_CASE_16_3",
      "textKey": "case16.statement.s3q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_16_S2_Q1",
      "suspectId": "S_CASE_16_3",
      "textKey": "case16.statement.s3q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_16_S2_Q2",
      "suspectId": "S_CASE_16_3",
      "textKey": "case16.statement.s3q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_16_S3_Q0",
      "suspectId": "S_CASE_16_4",
      "textKey": "case16.statement.s4q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_16_S3_Q1",
      "suspectId": "S_CASE_16_4",
      "textKey": "case16.statement.s4q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_16_S3_Q2",
      "suspectId": "S_CASE_16_4",
      "textKey": "case16.statement.s4q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    }
  ],
  "events": [],
  "locations": [
    {
      "id": "L_CASE_16_SCENE",
      "labelKey": "case16.location.scene"
    }
  ],
  "relationships": [
    {
      "id": "R_CASE_16_METHOD",
      "from": "E_CASE_16_01",
      "to": "H_CASE_16_METHOD",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_16_01"
      ]
    },
    {
      "id": "R_CASE_16_MOTIVE",
      "from": "E_CASE_16_05",
      "to": "H_CASE_16_MOTIVE",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_16_05"
      ]
    },
    {
      "id": "R_CASE_16_OPPORTUNITY",
      "from": "E_CASE_16_06",
      "to": "H_CASE_16_OPPORTUNITY",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_16_06"
      ]
    },
    {
      "id": "R_CASE_16_ALIBI_CONTRADICTION",
      "from": "E_CASE_16_06",
      "to": "H_CASE_16_ALIBI",
      "relation": "contradicts",
      "sourceIds": [
        "E_CASE_16_06",
        "ST_CASE_16_S0_Q3"
      ]
    }
  ],
  "hypotheses": [
    {
      "id": "H_CASE_16_METHOD",
      "labelKey": "case16.hypothesis.method",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_16_MOTIVE",
      "labelKey": "case16.hypothesis.motive",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_16_OPPORTUNITY",
      "labelKey": "case16.hypothesis.opportunity",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_16_ALIBI",
      "labelKey": "case16.hypothesis.alibi",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_16_RESPONSIBILITY",
      "labelKey": "case16.hypothesis.responsibility",
      "initialState": "INSUFFICIENT"
    }
  ],
  "objections": [
    {
      "id": "OBJ_CASE_16_CULPRIT_DENIAL",
      "statementId": "ST_CASE_16_S0_Q3",
      "evidenceIds": [
        "E_CASE_16_06"
      ],
      "relationshipId": "R_CASE_16_ALIBI_CONTRADICTION",
      "resultingHypothesisId": "H_CASE_16_ALIBI",
      "resultingState": "POSSIBLE_CONTRADICTION",
      "validationKey": "case16.objection.culpritDenial"
    }
  ],
  "deductions": [
    {
      "id": "DED_CASE_16_RESPONSIBILITY",
      "labelKey": "case16.deduction.responsibility",
      "requiredEvidenceIds": [
        "E_CASE_16_01",
        "E_CASE_16_05",
        "E_CASE_16_06"
      ],
      "requiredStatementIds": [
        "ST_CASE_16_S0_Q3"
      ],
      "requiredHypothesisStates": [
        [
          "H_CASE_16_METHOD",
          "SUPPORTED"
        ],
        [
          "H_CASE_16_MOTIVE",
          "SUPPORTED"
        ],
        [
          "H_CASE_16_OPPORTUNITY",
          "SUPPORTED"
        ]
      ],
      "requiredObjectionIds": [
        "OBJ_CASE_16_CULPRIT_DENIAL"
      ],
      "resultingHypothesisId": "H_CASE_16_RESPONSIBILITY",
      "resultingState": "SUPPORTED"
    }
  ],
  "evidenceAnalysis": [
    {
      "id": "EA_CASE_16_01",
      "evidenceId": "E_CASE_16_01",
      "unlocksObservationIds": [
        "OBS_CASE_16_01"
      ]
    },
    {
      "id": "EA_CASE_16_02",
      "evidenceId": "E_CASE_16_02",
      "unlocksObservationIds": [
        "OBS_CASE_16_02"
      ]
    },
    {
      "id": "EA_CASE_16_03",
      "evidenceId": "E_CASE_16_03",
      "unlocksObservationIds": [
        "OBS_CASE_16_03"
      ]
    },
    {
      "id": "EA_CASE_16_04",
      "evidenceId": "E_CASE_16_04",
      "unlocksObservationIds": [
        "OBS_CASE_16_04"
      ]
    },
    {
      "id": "EA_CASE_16_05",
      "evidenceId": "E_CASE_16_05",
      "unlocksObservationIds": [
        "OBS_CASE_16_05"
      ]
    },
    {
      "id": "EA_CASE_16_06",
      "evidenceId": "E_CASE_16_06",
      "unlocksObservationIds": [
        "OBS_CASE_16_06"
      ]
    }
  ],
  "interrogations": [
    {
      "id": "INT_CASE_16_S1",
      "suspectId": "S_CASE_16_1",
      "questionIds": [
        "Q_CASE_16_S0_Q0",
        "Q_CASE_16_S0_Q1",
        "Q_CASE_16_S0_Q2",
        "Q_CASE_16_S0_Q3"
      ]
    },
    {
      "id": "INT_CASE_16_S2",
      "suspectId": "S_CASE_16_2",
      "questionIds": [
        "Q_CASE_16_S1_Q0",
        "Q_CASE_16_S1_Q1",
        "Q_CASE_16_S1_Q2"
      ]
    },
    {
      "id": "INT_CASE_16_S3",
      "suspectId": "S_CASE_16_3",
      "questionIds": [
        "Q_CASE_16_S2_Q0",
        "Q_CASE_16_S2_Q1",
        "Q_CASE_16_S2_Q2"
      ]
    },
    {
      "id": "INT_CASE_16_S4",
      "suspectId": "S_CASE_16_4",
      "questionIds": [
        "Q_CASE_16_S3_Q0",
        "Q_CASE_16_S3_Q1",
        "Q_CASE_16_S3_Q2"
      ]
    }
  ],
  "questions": [
    {
      "id": "Q_CASE_16_S0_Q0",
      "suspectId": "S_CASE_16_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_16_S0_Q0"
      ]
    },
    {
      "id": "Q_CASE_16_S0_Q1",
      "suspectId": "S_CASE_16_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_16_S0_Q1"
      ]
    },
    {
      "id": "Q_CASE_16_S0_Q2",
      "suspectId": "S_CASE_16_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_16_S0_Q2"
      ]
    },
    {
      "id": "Q_CASE_16_S0_Q3",
      "suspectId": "S_CASE_16_1",
      "requiredEvidenceIds": [
        "E_CASE_16_06"
      ],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_16_S0_Q3"
      ]
    },
    {
      "id": "Q_CASE_16_S1_Q0",
      "suspectId": "S_CASE_16_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_16_S1_Q0"
      ]
    },
    {
      "id": "Q_CASE_16_S1_Q1",
      "suspectId": "S_CASE_16_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_16_S1_Q1"
      ]
    },
    {
      "id": "Q_CASE_16_S1_Q2",
      "suspectId": "S_CASE_16_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_16_S1_Q2"
      ]
    },
    {
      "id": "Q_CASE_16_S2_Q0",
      "suspectId": "S_CASE_16_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_16_S2_Q0"
      ]
    },
    {
      "id": "Q_CASE_16_S2_Q1",
      "suspectId": "S_CASE_16_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_16_S2_Q1"
      ]
    },
    {
      "id": "Q_CASE_16_S2_Q2",
      "suspectId": "S_CASE_16_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_16_S2_Q2"
      ]
    },
    {
      "id": "Q_CASE_16_S3_Q0",
      "suspectId": "S_CASE_16_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_16_S3_Q0"
      ]
    },
    {
      "id": "Q_CASE_16_S3_Q1",
      "suspectId": "S_CASE_16_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_16_S3_Q1"
      ]
    },
    {
      "id": "Q_CASE_16_S3_Q2",
      "suspectId": "S_CASE_16_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_16_S3_Q2"
      ]
    }
  ],
  "responses": [
    {
      "id": "RESP_CASE_16_S0_Q0",
      "questionId": "Q_CASE_16_S0_Q0",
      "producesStatementId": "ST_CASE_16_S0_Q0"
    },
    {
      "id": "RESP_CASE_16_S0_Q1",
      "questionId": "Q_CASE_16_S0_Q1",
      "producesStatementId": "ST_CASE_16_S0_Q1"
    },
    {
      "id": "RESP_CASE_16_S0_Q2",
      "questionId": "Q_CASE_16_S0_Q2",
      "producesStatementId": "ST_CASE_16_S0_Q2"
    },
    {
      "id": "RESP_CASE_16_S0_Q3",
      "questionId": "Q_CASE_16_S0_Q3",
      "producesStatementId": "ST_CASE_16_S0_Q3"
    },
    {
      "id": "RESP_CASE_16_S1_Q0",
      "questionId": "Q_CASE_16_S1_Q0",
      "producesStatementId": "ST_CASE_16_S1_Q0"
    },
    {
      "id": "RESP_CASE_16_S1_Q1",
      "questionId": "Q_CASE_16_S1_Q1",
      "producesStatementId": "ST_CASE_16_S1_Q1"
    },
    {
      "id": "RESP_CASE_16_S1_Q2",
      "questionId": "Q_CASE_16_S1_Q2",
      "producesStatementId": "ST_CASE_16_S1_Q2"
    },
    {
      "id": "RESP_CASE_16_S2_Q0",
      "questionId": "Q_CASE_16_S2_Q0",
      "producesStatementId": "ST_CASE_16_S2_Q0"
    },
    {
      "id": "RESP_CASE_16_S2_Q1",
      "questionId": "Q_CASE_16_S2_Q1",
      "producesStatementId": "ST_CASE_16_S2_Q1"
    },
    {
      "id": "RESP_CASE_16_S2_Q2",
      "questionId": "Q_CASE_16_S2_Q2",
      "producesStatementId": "ST_CASE_16_S2_Q2"
    },
    {
      "id": "RESP_CASE_16_S3_Q0",
      "questionId": "Q_CASE_16_S3_Q0",
      "producesStatementId": "ST_CASE_16_S3_Q0"
    },
    {
      "id": "RESP_CASE_16_S3_Q1",
      "questionId": "Q_CASE_16_S3_Q1",
      "producesStatementId": "ST_CASE_16_S3_Q1"
    },
    {
      "id": "RESP_CASE_16_S3_Q2",
      "questionId": "Q_CASE_16_S3_Q2",
      "producesStatementId": "ST_CASE_16_S3_Q2"
    }
  ],
  "suspects": [
    {
      "id": "S_CASE_16_1",
      "nameKey": "legacy.case16.suspect1.name"
    },
    {
      "id": "S_CASE_16_2",
      "nameKey": "legacy.case16.suspect2.name"
    },
    {
      "id": "S_CASE_16_3",
      "nameKey": "legacy.case16.suspect3.name"
    },
    {
      "id": "S_CASE_16_4",
      "nameKey": "legacy.case16.suspect4.name"
    }
  ],
  "authoringTruthReference": {
    "source": "translations.cases[16].explain"
  }
});

const case17 = Object.freeze({
  "id": "CASE_17",
  "numericAlias": 17,
  "titleKey": "legacy.case17.title",
  "victimId": "VICTIM_CASE_17",
  "suspectIds": [
    "S_CASE_17_1",
    "S_CASE_17_2",
    "S_CASE_17_3",
    "S_CASE_17_4"
  ],
  "evidenceIds": [
    "E_CASE_17_01",
    "E_CASE_17_02",
    "E_CASE_17_03",
    "E_CASE_17_04",
    "E_CASE_17_05",
    "E_CASE_17_06"
  ],
  "statementIds": [
    "ST_CASE_17_S0_Q0",
    "ST_CASE_17_S0_Q1",
    "ST_CASE_17_S0_Q2",
    "ST_CASE_17_S0_Q3",
    "ST_CASE_17_S1_Q0",
    "ST_CASE_17_S1_Q1",
    "ST_CASE_17_S1_Q2",
    "ST_CASE_17_S2_Q0",
    "ST_CASE_17_S2_Q1",
    "ST_CASE_17_S2_Q2",
    "ST_CASE_17_S3_Q0",
    "ST_CASE_17_S3_Q1",
    "ST_CASE_17_S3_Q2"
  ],
  "eventIds": [],
  "locationIds": [
    "L_CASE_17_SCENE"
  ],
  "relationshipIds": [
    "R_CASE_17_METHOD",
    "R_CASE_17_MOTIVE",
    "R_CASE_17_OPPORTUNITY",
    "R_CASE_17_ALIBI_CONTRADICTION"
  ],
  "hypothesisIds": [
    "H_CASE_17_METHOD",
    "H_CASE_17_MOTIVE",
    "H_CASE_17_OPPORTUNITY",
    "H_CASE_17_ALIBI",
    "H_CASE_17_RESPONSIBILITY"
  ],
  "accusationGate": {
    "id": "GATE_CASE_17_RESPONSIBILITY",
    "requiredHypotheses": [
      [
        "H_CASE_17_METHOD",
        "SUPPORTED"
      ],
      [
        "H_CASE_17_MOTIVE",
        "SUPPORTED"
      ],
      [
        "H_CASE_17_OPPORTUNITY",
        "SUPPORTED"
      ],
      [
        "H_CASE_17_ALIBI",
        "POSSIBLE_CONTRADICTION"
      ],
      [
        "H_CASE_17_RESPONSIBILITY",
        "SUPPORTED"
      ]
    ],
    "requiredObjectionIds": [
      "OBJ_CASE_17_CULPRIT_DENIAL"
    ],
    "requiredDeductionIds": [
      "DED_CASE_17_RESPONSIBILITY"
    ],
    "candidateSuspectId": "S_CASE_17_1"
  },
  "evidence": [
    {
      "id": "E_CASE_17_01",
      "type": "physical",
      "observationKey": "case17.observation.e1",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_17_02",
      "type": "physical",
      "observationKey": "case17.observation.e2",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_17_03",
      "type": "physical",
      "observationKey": "case17.observation.e3",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_17_04",
      "type": "record",
      "observationKey": "case17.observation.e4",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_17_05",
      "type": "record",
      "observationKey": "case17.observation.e5",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_17_06",
      "type": "forensic",
      "observationKey": "case17.observation.authoredTrace",
      "metadata": {
        "playerVisible": true,
        "identifiesSuspectId": "S_CASE_17_1"
      }
    }
  ],
  "observations": [
    {
      "id": "OBS_CASE_17_01",
      "type": "scene_fact",
      "textKey": "case17.observation.e1",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_17_02",
      "type": "scene_fact",
      "textKey": "case17.observation.e2",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_17_03",
      "type": "scene_fact",
      "textKey": "case17.observation.e3",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_17_04",
      "type": "scene_fact",
      "textKey": "case17.observation.e4",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_17_05",
      "type": "scene_fact",
      "textKey": "case17.observation.e5",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_17_06",
      "type": "forensic",
      "textKey": "case17.observation.authoredTrace",
      "playerVisible": true,
      "identifiesSuspectId": "S_CASE_17_1"
    }
  ],
  "statements": [
    {
      "id": "ST_CASE_17_S0_Q0",
      "suspectId": "S_CASE_17_1",
      "textKey": "case17.statement.s1q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_17_S0_Q1",
      "suspectId": "S_CASE_17_1",
      "textKey": "case17.statement.s1q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_17_S0_Q2",
      "suspectId": "S_CASE_17_1",
      "textKey": "case17.statement.s1q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_17_S0_Q3",
      "suspectId": "S_CASE_17_1",
      "textKey": "case17.statement.authoredChallenge",
      "claimType": "denial",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_17_S1_Q0",
      "suspectId": "S_CASE_17_2",
      "textKey": "case17.statement.s2q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_17_S1_Q1",
      "suspectId": "S_CASE_17_2",
      "textKey": "case17.statement.s2q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_17_S1_Q2",
      "suspectId": "S_CASE_17_2",
      "textKey": "case17.statement.s2q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_17_S2_Q0",
      "suspectId": "S_CASE_17_3",
      "textKey": "case17.statement.s3q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_17_S2_Q1",
      "suspectId": "S_CASE_17_3",
      "textKey": "case17.statement.s3q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_17_S2_Q2",
      "suspectId": "S_CASE_17_3",
      "textKey": "case17.statement.s3q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_17_S3_Q0",
      "suspectId": "S_CASE_17_4",
      "textKey": "case17.statement.s4q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_17_S3_Q1",
      "suspectId": "S_CASE_17_4",
      "textKey": "case17.statement.s4q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_17_S3_Q2",
      "suspectId": "S_CASE_17_4",
      "textKey": "case17.statement.s4q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    }
  ],
  "events": [],
  "locations": [
    {
      "id": "L_CASE_17_SCENE",
      "labelKey": "case17.location.scene"
    }
  ],
  "relationships": [
    {
      "id": "R_CASE_17_METHOD",
      "from": "E_CASE_17_01",
      "to": "H_CASE_17_METHOD",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_17_01"
      ]
    },
    {
      "id": "R_CASE_17_MOTIVE",
      "from": "E_CASE_17_05",
      "to": "H_CASE_17_MOTIVE",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_17_05"
      ]
    },
    {
      "id": "R_CASE_17_OPPORTUNITY",
      "from": "E_CASE_17_06",
      "to": "H_CASE_17_OPPORTUNITY",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_17_06"
      ]
    },
    {
      "id": "R_CASE_17_ALIBI_CONTRADICTION",
      "from": "E_CASE_17_06",
      "to": "H_CASE_17_ALIBI",
      "relation": "contradicts",
      "sourceIds": [
        "E_CASE_17_06",
        "ST_CASE_17_S0_Q3"
      ]
    }
  ],
  "hypotheses": [
    {
      "id": "H_CASE_17_METHOD",
      "labelKey": "case17.hypothesis.method",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_17_MOTIVE",
      "labelKey": "case17.hypothesis.motive",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_17_OPPORTUNITY",
      "labelKey": "case17.hypothesis.opportunity",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_17_ALIBI",
      "labelKey": "case17.hypothesis.alibi",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_17_RESPONSIBILITY",
      "labelKey": "case17.hypothesis.responsibility",
      "initialState": "INSUFFICIENT"
    }
  ],
  "objections": [
    {
      "id": "OBJ_CASE_17_CULPRIT_DENIAL",
      "statementId": "ST_CASE_17_S0_Q3",
      "evidenceIds": [
        "E_CASE_17_06"
      ],
      "relationshipId": "R_CASE_17_ALIBI_CONTRADICTION",
      "resultingHypothesisId": "H_CASE_17_ALIBI",
      "resultingState": "POSSIBLE_CONTRADICTION",
      "validationKey": "case17.objection.culpritDenial"
    }
  ],
  "deductions": [
    {
      "id": "DED_CASE_17_RESPONSIBILITY",
      "labelKey": "case17.deduction.responsibility",
      "requiredEvidenceIds": [
        "E_CASE_17_01",
        "E_CASE_17_05",
        "E_CASE_17_06"
      ],
      "requiredStatementIds": [
        "ST_CASE_17_S0_Q3"
      ],
      "requiredHypothesisStates": [
        [
          "H_CASE_17_METHOD",
          "SUPPORTED"
        ],
        [
          "H_CASE_17_MOTIVE",
          "SUPPORTED"
        ],
        [
          "H_CASE_17_OPPORTUNITY",
          "SUPPORTED"
        ]
      ],
      "requiredObjectionIds": [
        "OBJ_CASE_17_CULPRIT_DENIAL"
      ],
      "resultingHypothesisId": "H_CASE_17_RESPONSIBILITY",
      "resultingState": "SUPPORTED"
    }
  ],
  "evidenceAnalysis": [
    {
      "id": "EA_CASE_17_01",
      "evidenceId": "E_CASE_17_01",
      "unlocksObservationIds": [
        "OBS_CASE_17_01"
      ]
    },
    {
      "id": "EA_CASE_17_02",
      "evidenceId": "E_CASE_17_02",
      "unlocksObservationIds": [
        "OBS_CASE_17_02"
      ]
    },
    {
      "id": "EA_CASE_17_03",
      "evidenceId": "E_CASE_17_03",
      "unlocksObservationIds": [
        "OBS_CASE_17_03"
      ]
    },
    {
      "id": "EA_CASE_17_04",
      "evidenceId": "E_CASE_17_04",
      "unlocksObservationIds": [
        "OBS_CASE_17_04"
      ]
    },
    {
      "id": "EA_CASE_17_05",
      "evidenceId": "E_CASE_17_05",
      "unlocksObservationIds": [
        "OBS_CASE_17_05"
      ]
    },
    {
      "id": "EA_CASE_17_06",
      "evidenceId": "E_CASE_17_06",
      "unlocksObservationIds": [
        "OBS_CASE_17_06"
      ]
    }
  ],
  "interrogations": [
    {
      "id": "INT_CASE_17_S1",
      "suspectId": "S_CASE_17_1",
      "questionIds": [
        "Q_CASE_17_S0_Q0",
        "Q_CASE_17_S0_Q1",
        "Q_CASE_17_S0_Q2",
        "Q_CASE_17_S0_Q3"
      ]
    },
    {
      "id": "INT_CASE_17_S2",
      "suspectId": "S_CASE_17_2",
      "questionIds": [
        "Q_CASE_17_S1_Q0",
        "Q_CASE_17_S1_Q1",
        "Q_CASE_17_S1_Q2"
      ]
    },
    {
      "id": "INT_CASE_17_S3",
      "suspectId": "S_CASE_17_3",
      "questionIds": [
        "Q_CASE_17_S2_Q0",
        "Q_CASE_17_S2_Q1",
        "Q_CASE_17_S2_Q2"
      ]
    },
    {
      "id": "INT_CASE_17_S4",
      "suspectId": "S_CASE_17_4",
      "questionIds": [
        "Q_CASE_17_S3_Q0",
        "Q_CASE_17_S3_Q1",
        "Q_CASE_17_S3_Q2"
      ]
    }
  ],
  "questions": [
    {
      "id": "Q_CASE_17_S0_Q0",
      "suspectId": "S_CASE_17_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_17_S0_Q0"
      ]
    },
    {
      "id": "Q_CASE_17_S0_Q1",
      "suspectId": "S_CASE_17_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_17_S0_Q1"
      ]
    },
    {
      "id": "Q_CASE_17_S0_Q2",
      "suspectId": "S_CASE_17_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_17_S0_Q2"
      ]
    },
    {
      "id": "Q_CASE_17_S0_Q3",
      "suspectId": "S_CASE_17_1",
      "requiredEvidenceIds": [
        "E_CASE_17_06"
      ],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_17_S0_Q3"
      ]
    },
    {
      "id": "Q_CASE_17_S1_Q0",
      "suspectId": "S_CASE_17_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_17_S1_Q0"
      ]
    },
    {
      "id": "Q_CASE_17_S1_Q1",
      "suspectId": "S_CASE_17_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_17_S1_Q1"
      ]
    },
    {
      "id": "Q_CASE_17_S1_Q2",
      "suspectId": "S_CASE_17_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_17_S1_Q2"
      ]
    },
    {
      "id": "Q_CASE_17_S2_Q0",
      "suspectId": "S_CASE_17_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_17_S2_Q0"
      ]
    },
    {
      "id": "Q_CASE_17_S2_Q1",
      "suspectId": "S_CASE_17_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_17_S2_Q1"
      ]
    },
    {
      "id": "Q_CASE_17_S2_Q2",
      "suspectId": "S_CASE_17_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_17_S2_Q2"
      ]
    },
    {
      "id": "Q_CASE_17_S3_Q0",
      "suspectId": "S_CASE_17_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_17_S3_Q0"
      ]
    },
    {
      "id": "Q_CASE_17_S3_Q1",
      "suspectId": "S_CASE_17_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_17_S3_Q1"
      ]
    },
    {
      "id": "Q_CASE_17_S3_Q2",
      "suspectId": "S_CASE_17_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_17_S3_Q2"
      ]
    }
  ],
  "responses": [
    {
      "id": "RESP_CASE_17_S0_Q0",
      "questionId": "Q_CASE_17_S0_Q0",
      "producesStatementId": "ST_CASE_17_S0_Q0"
    },
    {
      "id": "RESP_CASE_17_S0_Q1",
      "questionId": "Q_CASE_17_S0_Q1",
      "producesStatementId": "ST_CASE_17_S0_Q1"
    },
    {
      "id": "RESP_CASE_17_S0_Q2",
      "questionId": "Q_CASE_17_S0_Q2",
      "producesStatementId": "ST_CASE_17_S0_Q2"
    },
    {
      "id": "RESP_CASE_17_S0_Q3",
      "questionId": "Q_CASE_17_S0_Q3",
      "producesStatementId": "ST_CASE_17_S0_Q3"
    },
    {
      "id": "RESP_CASE_17_S1_Q0",
      "questionId": "Q_CASE_17_S1_Q0",
      "producesStatementId": "ST_CASE_17_S1_Q0"
    },
    {
      "id": "RESP_CASE_17_S1_Q1",
      "questionId": "Q_CASE_17_S1_Q1",
      "producesStatementId": "ST_CASE_17_S1_Q1"
    },
    {
      "id": "RESP_CASE_17_S1_Q2",
      "questionId": "Q_CASE_17_S1_Q2",
      "producesStatementId": "ST_CASE_17_S1_Q2"
    },
    {
      "id": "RESP_CASE_17_S2_Q0",
      "questionId": "Q_CASE_17_S2_Q0",
      "producesStatementId": "ST_CASE_17_S2_Q0"
    },
    {
      "id": "RESP_CASE_17_S2_Q1",
      "questionId": "Q_CASE_17_S2_Q1",
      "producesStatementId": "ST_CASE_17_S2_Q1"
    },
    {
      "id": "RESP_CASE_17_S2_Q2",
      "questionId": "Q_CASE_17_S2_Q2",
      "producesStatementId": "ST_CASE_17_S2_Q2"
    },
    {
      "id": "RESP_CASE_17_S3_Q0",
      "questionId": "Q_CASE_17_S3_Q0",
      "producesStatementId": "ST_CASE_17_S3_Q0"
    },
    {
      "id": "RESP_CASE_17_S3_Q1",
      "questionId": "Q_CASE_17_S3_Q1",
      "producesStatementId": "ST_CASE_17_S3_Q1"
    },
    {
      "id": "RESP_CASE_17_S3_Q2",
      "questionId": "Q_CASE_17_S3_Q2",
      "producesStatementId": "ST_CASE_17_S3_Q2"
    }
  ],
  "suspects": [
    {
      "id": "S_CASE_17_1",
      "nameKey": "legacy.case17.suspect1.name"
    },
    {
      "id": "S_CASE_17_2",
      "nameKey": "legacy.case17.suspect2.name"
    },
    {
      "id": "S_CASE_17_3",
      "nameKey": "legacy.case17.suspect3.name"
    },
    {
      "id": "S_CASE_17_4",
      "nameKey": "legacy.case17.suspect4.name"
    }
  ],
  "authoringTruthReference": {
    "source": "translations.cases[17].explain"
  }
});

const case18 = Object.freeze({
  "id": "CASE_18",
  "numericAlias": 18,
  "titleKey": "legacy.case18.title",
  "victimId": "VICTIM_CASE_18",
  "suspectIds": [
    "S_CASE_18_1",
    "S_CASE_18_2",
    "S_CASE_18_3",
    "S_CASE_18_4"
  ],
  "evidenceIds": [
    "E_CASE_18_01",
    "E_CASE_18_02",
    "E_CASE_18_03",
    "E_CASE_18_04",
    "E_CASE_18_05",
    "E_CASE_18_06"
  ],
  "statementIds": [
    "ST_CASE_18_S0_Q0",
    "ST_CASE_18_S0_Q1",
    "ST_CASE_18_S0_Q2",
    "ST_CASE_18_S1_Q0",
    "ST_CASE_18_S1_Q1",
    "ST_CASE_18_S1_Q2",
    "ST_CASE_18_S2_Q0",
    "ST_CASE_18_S2_Q1",
    "ST_CASE_18_S2_Q2",
    "ST_CASE_18_S2_Q3",
    "ST_CASE_18_S3_Q0",
    "ST_CASE_18_S3_Q1",
    "ST_CASE_18_S3_Q2"
  ],
  "eventIds": [],
  "locationIds": [
    "L_CASE_18_SCENE"
  ],
  "relationshipIds": [
    "R_CASE_18_METHOD",
    "R_CASE_18_MOTIVE",
    "R_CASE_18_OPPORTUNITY",
    "R_CASE_18_ALIBI_CONTRADICTION"
  ],
  "hypothesisIds": [
    "H_CASE_18_METHOD",
    "H_CASE_18_MOTIVE",
    "H_CASE_18_OPPORTUNITY",
    "H_CASE_18_ALIBI",
    "H_CASE_18_RESPONSIBILITY"
  ],
  "accusationGate": {
    "id": "GATE_CASE_18_RESPONSIBILITY",
    "requiredHypotheses": [
      [
        "H_CASE_18_METHOD",
        "SUPPORTED"
      ],
      [
        "H_CASE_18_MOTIVE",
        "SUPPORTED"
      ],
      [
        "H_CASE_18_OPPORTUNITY",
        "SUPPORTED"
      ],
      [
        "H_CASE_18_ALIBI",
        "POSSIBLE_CONTRADICTION"
      ],
      [
        "H_CASE_18_RESPONSIBILITY",
        "SUPPORTED"
      ]
    ],
    "requiredObjectionIds": [
      "OBJ_CASE_18_CULPRIT_DENIAL"
    ],
    "requiredDeductionIds": [
      "DED_CASE_18_RESPONSIBILITY"
    ],
    "candidateSuspectId": "S_CASE_18_3"
  },
  "evidence": [
    {
      "id": "E_CASE_18_01",
      "type": "physical",
      "observationKey": "case18.observation.e1",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_18_02",
      "type": "physical",
      "observationKey": "case18.observation.e2",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_18_03",
      "type": "physical",
      "observationKey": "case18.observation.e3",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_18_04",
      "type": "record",
      "observationKey": "case18.observation.e4",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_18_05",
      "type": "record",
      "observationKey": "case18.observation.e5",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_18_06",
      "type": "forensic",
      "observationKey": "case18.observation.authoredTrace",
      "metadata": {
        "playerVisible": true,
        "identifiesSuspectId": "S_CASE_18_3"
      }
    }
  ],
  "observations": [
    {
      "id": "OBS_CASE_18_01",
      "type": "scene_fact",
      "textKey": "case18.observation.e1",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_18_02",
      "type": "scene_fact",
      "textKey": "case18.observation.e2",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_18_03",
      "type": "scene_fact",
      "textKey": "case18.observation.e3",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_18_04",
      "type": "scene_fact",
      "textKey": "case18.observation.e4",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_18_05",
      "type": "scene_fact",
      "textKey": "case18.observation.e5",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_18_06",
      "type": "forensic",
      "textKey": "case18.observation.authoredTrace",
      "playerVisible": true,
      "identifiesSuspectId": "S_CASE_18_3"
    }
  ],
  "statements": [
    {
      "id": "ST_CASE_18_S0_Q0",
      "suspectId": "S_CASE_18_1",
      "textKey": "case18.statement.s1q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_18_S0_Q1",
      "suspectId": "S_CASE_18_1",
      "textKey": "case18.statement.s1q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_18_S0_Q2",
      "suspectId": "S_CASE_18_1",
      "textKey": "case18.statement.s1q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_18_S1_Q0",
      "suspectId": "S_CASE_18_2",
      "textKey": "case18.statement.s2q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_18_S1_Q1",
      "suspectId": "S_CASE_18_2",
      "textKey": "case18.statement.s2q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_18_S1_Q2",
      "suspectId": "S_CASE_18_2",
      "textKey": "case18.statement.s2q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_18_S2_Q0",
      "suspectId": "S_CASE_18_3",
      "textKey": "case18.statement.s3q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_18_S2_Q1",
      "suspectId": "S_CASE_18_3",
      "textKey": "case18.statement.s3q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_18_S2_Q2",
      "suspectId": "S_CASE_18_3",
      "textKey": "case18.statement.s3q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_18_S2_Q3",
      "suspectId": "S_CASE_18_3",
      "textKey": "case18.statement.authoredChallenge",
      "claimType": "denial",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_18_S3_Q0",
      "suspectId": "S_CASE_18_4",
      "textKey": "case18.statement.s4q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_18_S3_Q1",
      "suspectId": "S_CASE_18_4",
      "textKey": "case18.statement.s4q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_18_S3_Q2",
      "suspectId": "S_CASE_18_4",
      "textKey": "case18.statement.s4q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    }
  ],
  "events": [],
  "locations": [
    {
      "id": "L_CASE_18_SCENE",
      "labelKey": "case18.location.scene"
    }
  ],
  "relationships": [
    {
      "id": "R_CASE_18_METHOD",
      "from": "E_CASE_18_01",
      "to": "H_CASE_18_METHOD",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_18_01"
      ]
    },
    {
      "id": "R_CASE_18_MOTIVE",
      "from": "E_CASE_18_05",
      "to": "H_CASE_18_MOTIVE",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_18_05"
      ]
    },
    {
      "id": "R_CASE_18_OPPORTUNITY",
      "from": "E_CASE_18_06",
      "to": "H_CASE_18_OPPORTUNITY",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_18_06"
      ]
    },
    {
      "id": "R_CASE_18_ALIBI_CONTRADICTION",
      "from": "E_CASE_18_06",
      "to": "H_CASE_18_ALIBI",
      "relation": "contradicts",
      "sourceIds": [
        "E_CASE_18_06",
        "ST_CASE_18_S2_Q3"
      ]
    }
  ],
  "hypotheses": [
    {
      "id": "H_CASE_18_METHOD",
      "labelKey": "case18.hypothesis.method",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_18_MOTIVE",
      "labelKey": "case18.hypothesis.motive",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_18_OPPORTUNITY",
      "labelKey": "case18.hypothesis.opportunity",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_18_ALIBI",
      "labelKey": "case18.hypothesis.alibi",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_18_RESPONSIBILITY",
      "labelKey": "case18.hypothesis.responsibility",
      "initialState": "INSUFFICIENT"
    }
  ],
  "objections": [
    {
      "id": "OBJ_CASE_18_CULPRIT_DENIAL",
      "statementId": "ST_CASE_18_S2_Q3",
      "evidenceIds": [
        "E_CASE_18_06"
      ],
      "relationshipId": "R_CASE_18_ALIBI_CONTRADICTION",
      "resultingHypothesisId": "H_CASE_18_ALIBI",
      "resultingState": "POSSIBLE_CONTRADICTION",
      "validationKey": "case18.objection.culpritDenial"
    }
  ],
  "deductions": [
    {
      "id": "DED_CASE_18_RESPONSIBILITY",
      "labelKey": "case18.deduction.responsibility",
      "requiredEvidenceIds": [
        "E_CASE_18_01",
        "E_CASE_18_05",
        "E_CASE_18_06"
      ],
      "requiredStatementIds": [
        "ST_CASE_18_S2_Q3"
      ],
      "requiredHypothesisStates": [
        [
          "H_CASE_18_METHOD",
          "SUPPORTED"
        ],
        [
          "H_CASE_18_MOTIVE",
          "SUPPORTED"
        ],
        [
          "H_CASE_18_OPPORTUNITY",
          "SUPPORTED"
        ]
      ],
      "requiredObjectionIds": [
        "OBJ_CASE_18_CULPRIT_DENIAL"
      ],
      "resultingHypothesisId": "H_CASE_18_RESPONSIBILITY",
      "resultingState": "SUPPORTED"
    }
  ],
  "evidenceAnalysis": [
    {
      "id": "EA_CASE_18_01",
      "evidenceId": "E_CASE_18_01",
      "unlocksObservationIds": [
        "OBS_CASE_18_01"
      ]
    },
    {
      "id": "EA_CASE_18_02",
      "evidenceId": "E_CASE_18_02",
      "unlocksObservationIds": [
        "OBS_CASE_18_02"
      ]
    },
    {
      "id": "EA_CASE_18_03",
      "evidenceId": "E_CASE_18_03",
      "unlocksObservationIds": [
        "OBS_CASE_18_03"
      ]
    },
    {
      "id": "EA_CASE_18_04",
      "evidenceId": "E_CASE_18_04",
      "unlocksObservationIds": [
        "OBS_CASE_18_04"
      ]
    },
    {
      "id": "EA_CASE_18_05",
      "evidenceId": "E_CASE_18_05",
      "unlocksObservationIds": [
        "OBS_CASE_18_05"
      ]
    },
    {
      "id": "EA_CASE_18_06",
      "evidenceId": "E_CASE_18_06",
      "unlocksObservationIds": [
        "OBS_CASE_18_06"
      ]
    }
  ],
  "interrogations": [
    {
      "id": "INT_CASE_18_S1",
      "suspectId": "S_CASE_18_1",
      "questionIds": [
        "Q_CASE_18_S0_Q0",
        "Q_CASE_18_S0_Q1",
        "Q_CASE_18_S0_Q2"
      ]
    },
    {
      "id": "INT_CASE_18_S2",
      "suspectId": "S_CASE_18_2",
      "questionIds": [
        "Q_CASE_18_S1_Q0",
        "Q_CASE_18_S1_Q1",
        "Q_CASE_18_S1_Q2"
      ]
    },
    {
      "id": "INT_CASE_18_S3",
      "suspectId": "S_CASE_18_3",
      "questionIds": [
        "Q_CASE_18_S2_Q0",
        "Q_CASE_18_S2_Q1",
        "Q_CASE_18_S2_Q2",
        "Q_CASE_18_S2_Q3"
      ]
    },
    {
      "id": "INT_CASE_18_S4",
      "suspectId": "S_CASE_18_4",
      "questionIds": [
        "Q_CASE_18_S3_Q0",
        "Q_CASE_18_S3_Q1",
        "Q_CASE_18_S3_Q2"
      ]
    }
  ],
  "questions": [
    {
      "id": "Q_CASE_18_S0_Q0",
      "suspectId": "S_CASE_18_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_18_S0_Q0"
      ]
    },
    {
      "id": "Q_CASE_18_S0_Q1",
      "suspectId": "S_CASE_18_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_18_S0_Q1"
      ]
    },
    {
      "id": "Q_CASE_18_S0_Q2",
      "suspectId": "S_CASE_18_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_18_S0_Q2"
      ]
    },
    {
      "id": "Q_CASE_18_S1_Q0",
      "suspectId": "S_CASE_18_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_18_S1_Q0"
      ]
    },
    {
      "id": "Q_CASE_18_S1_Q1",
      "suspectId": "S_CASE_18_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_18_S1_Q1"
      ]
    },
    {
      "id": "Q_CASE_18_S1_Q2",
      "suspectId": "S_CASE_18_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_18_S1_Q2"
      ]
    },
    {
      "id": "Q_CASE_18_S2_Q0",
      "suspectId": "S_CASE_18_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_18_S2_Q0"
      ]
    },
    {
      "id": "Q_CASE_18_S2_Q1",
      "suspectId": "S_CASE_18_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_18_S2_Q1"
      ]
    },
    {
      "id": "Q_CASE_18_S2_Q2",
      "suspectId": "S_CASE_18_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_18_S2_Q2"
      ]
    },
    {
      "id": "Q_CASE_18_S2_Q3",
      "suspectId": "S_CASE_18_3",
      "requiredEvidenceIds": [
        "E_CASE_18_06"
      ],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_18_S2_Q3"
      ]
    },
    {
      "id": "Q_CASE_18_S3_Q0",
      "suspectId": "S_CASE_18_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_18_S3_Q0"
      ]
    },
    {
      "id": "Q_CASE_18_S3_Q1",
      "suspectId": "S_CASE_18_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_18_S3_Q1"
      ]
    },
    {
      "id": "Q_CASE_18_S3_Q2",
      "suspectId": "S_CASE_18_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_18_S3_Q2"
      ]
    }
  ],
  "responses": [
    {
      "id": "RESP_CASE_18_S0_Q0",
      "questionId": "Q_CASE_18_S0_Q0",
      "producesStatementId": "ST_CASE_18_S0_Q0"
    },
    {
      "id": "RESP_CASE_18_S0_Q1",
      "questionId": "Q_CASE_18_S0_Q1",
      "producesStatementId": "ST_CASE_18_S0_Q1"
    },
    {
      "id": "RESP_CASE_18_S0_Q2",
      "questionId": "Q_CASE_18_S0_Q2",
      "producesStatementId": "ST_CASE_18_S0_Q2"
    },
    {
      "id": "RESP_CASE_18_S1_Q0",
      "questionId": "Q_CASE_18_S1_Q0",
      "producesStatementId": "ST_CASE_18_S1_Q0"
    },
    {
      "id": "RESP_CASE_18_S1_Q1",
      "questionId": "Q_CASE_18_S1_Q1",
      "producesStatementId": "ST_CASE_18_S1_Q1"
    },
    {
      "id": "RESP_CASE_18_S1_Q2",
      "questionId": "Q_CASE_18_S1_Q2",
      "producesStatementId": "ST_CASE_18_S1_Q2"
    },
    {
      "id": "RESP_CASE_18_S2_Q0",
      "questionId": "Q_CASE_18_S2_Q0",
      "producesStatementId": "ST_CASE_18_S2_Q0"
    },
    {
      "id": "RESP_CASE_18_S2_Q1",
      "questionId": "Q_CASE_18_S2_Q1",
      "producesStatementId": "ST_CASE_18_S2_Q1"
    },
    {
      "id": "RESP_CASE_18_S2_Q2",
      "questionId": "Q_CASE_18_S2_Q2",
      "producesStatementId": "ST_CASE_18_S2_Q2"
    },
    {
      "id": "RESP_CASE_18_S2_Q3",
      "questionId": "Q_CASE_18_S2_Q3",
      "producesStatementId": "ST_CASE_18_S2_Q3"
    },
    {
      "id": "RESP_CASE_18_S3_Q0",
      "questionId": "Q_CASE_18_S3_Q0",
      "producesStatementId": "ST_CASE_18_S3_Q0"
    },
    {
      "id": "RESP_CASE_18_S3_Q1",
      "questionId": "Q_CASE_18_S3_Q1",
      "producesStatementId": "ST_CASE_18_S3_Q1"
    },
    {
      "id": "RESP_CASE_18_S3_Q2",
      "questionId": "Q_CASE_18_S3_Q2",
      "producesStatementId": "ST_CASE_18_S3_Q2"
    }
  ],
  "suspects": [
    {
      "id": "S_CASE_18_1",
      "nameKey": "legacy.case18.suspect1.name"
    },
    {
      "id": "S_CASE_18_2",
      "nameKey": "legacy.case18.suspect2.name"
    },
    {
      "id": "S_CASE_18_3",
      "nameKey": "legacy.case18.suspect3.name"
    },
    {
      "id": "S_CASE_18_4",
      "nameKey": "legacy.case18.suspect4.name"
    }
  ],
  "authoringTruthReference": {
    "source": "translations.cases[18].explain"
  }
});

const case19 = Object.freeze({
  "id": "CASE_19",
  "numericAlias": 19,
  "titleKey": "legacy.case19.title",
  "victimId": "VICTIM_CASE_19",
  "suspectIds": [
    "S_CASE_19_1",
    "S_CASE_19_2",
    "S_CASE_19_3",
    "S_CASE_19_4"
  ],
  "evidenceIds": [
    "E_CASE_19_01",
    "E_CASE_19_02",
    "E_CASE_19_03",
    "E_CASE_19_04",
    "E_CASE_19_05",
    "E_CASE_19_06"
  ],
  "statementIds": [
    "ST_CASE_19_S0_Q0",
    "ST_CASE_19_S0_Q1",
    "ST_CASE_19_S0_Q2",
    "ST_CASE_19_S0_Q3",
    "ST_CASE_19_S1_Q0",
    "ST_CASE_19_S1_Q1",
    "ST_CASE_19_S1_Q2",
    "ST_CASE_19_S2_Q0",
    "ST_CASE_19_S2_Q1",
    "ST_CASE_19_S2_Q2",
    "ST_CASE_19_S3_Q0",
    "ST_CASE_19_S3_Q1",
    "ST_CASE_19_S3_Q2"
  ],
  "eventIds": [],
  "locationIds": [
    "L_CASE_19_SCENE"
  ],
  "relationshipIds": [
    "R_CASE_19_METHOD",
    "R_CASE_19_MOTIVE",
    "R_CASE_19_OPPORTUNITY",
    "R_CASE_19_ALIBI_CONTRADICTION"
  ],
  "hypothesisIds": [
    "H_CASE_19_METHOD",
    "H_CASE_19_MOTIVE",
    "H_CASE_19_OPPORTUNITY",
    "H_CASE_19_ALIBI",
    "H_CASE_19_RESPONSIBILITY"
  ],
  "accusationGate": {
    "id": "GATE_CASE_19_RESPONSIBILITY",
    "requiredHypotheses": [
      [
        "H_CASE_19_METHOD",
        "SUPPORTED"
      ],
      [
        "H_CASE_19_MOTIVE",
        "SUPPORTED"
      ],
      [
        "H_CASE_19_OPPORTUNITY",
        "SUPPORTED"
      ],
      [
        "H_CASE_19_ALIBI",
        "POSSIBLE_CONTRADICTION"
      ],
      [
        "H_CASE_19_RESPONSIBILITY",
        "SUPPORTED"
      ]
    ],
    "requiredObjectionIds": [
      "OBJ_CASE_19_CULPRIT_DENIAL"
    ],
    "requiredDeductionIds": [
      "DED_CASE_19_RESPONSIBILITY"
    ],
    "candidateSuspectId": "S_CASE_19_1"
  },
  "evidence": [
    {
      "id": "E_CASE_19_01",
      "type": "physical",
      "observationKey": "case19.observation.e1",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_19_02",
      "type": "physical",
      "observationKey": "case19.observation.e2",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_19_03",
      "type": "physical",
      "observationKey": "case19.observation.e3",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_19_04",
      "type": "record",
      "observationKey": "case19.observation.e4",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_19_05",
      "type": "record",
      "observationKey": "case19.observation.e5",
      "metadata": {
        "playerVisible": true
      }
    },
    {
      "id": "E_CASE_19_06",
      "type": "forensic",
      "observationKey": "case19.observation.authoredTrace",
      "metadata": {
        "playerVisible": true,
        "identifiesSuspectId": "S_CASE_19_1"
      }
    }
  ],
  "observations": [
    {
      "id": "OBS_CASE_19_01",
      "type": "scene_fact",
      "textKey": "case19.observation.e1",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_19_02",
      "type": "scene_fact",
      "textKey": "case19.observation.e2",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_19_03",
      "type": "scene_fact",
      "textKey": "case19.observation.e3",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_19_04",
      "type": "scene_fact",
      "textKey": "case19.observation.e4",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_19_05",
      "type": "scene_fact",
      "textKey": "case19.observation.e5",
      "playerVisible": true
    },
    {
      "id": "OBS_CASE_19_06",
      "type": "forensic",
      "textKey": "case19.observation.authoredTrace",
      "playerVisible": true,
      "identifiesSuspectId": "S_CASE_19_1"
    }
  ],
  "statements": [
    {
      "id": "ST_CASE_19_S0_Q0",
      "suspectId": "S_CASE_19_1",
      "textKey": "case19.statement.s1q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_19_S0_Q1",
      "suspectId": "S_CASE_19_1",
      "textKey": "case19.statement.s1q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_19_S0_Q2",
      "suspectId": "S_CASE_19_1",
      "textKey": "case19.statement.s1q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_19_S0_Q3",
      "suspectId": "S_CASE_19_1",
      "textKey": "case19.statement.authoredChallenge",
      "claimType": "denial",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_19_S1_Q0",
      "suspectId": "S_CASE_19_2",
      "textKey": "case19.statement.s2q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_19_S1_Q1",
      "suspectId": "S_CASE_19_2",
      "textKey": "case19.statement.s2q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_19_S1_Q2",
      "suspectId": "S_CASE_19_2",
      "textKey": "case19.statement.s2q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_19_S2_Q0",
      "suspectId": "S_CASE_19_3",
      "textKey": "case19.statement.s3q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_19_S2_Q1",
      "suspectId": "S_CASE_19_3",
      "textKey": "case19.statement.s3q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_19_S2_Q2",
      "suspectId": "S_CASE_19_3",
      "textKey": "case19.statement.s3q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_19_S3_Q0",
      "suspectId": "S_CASE_19_4",
      "textKey": "case19.statement.s4q1",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_19_S3_Q1",
      "suspectId": "S_CASE_19_4",
      "textKey": "case19.statement.s4q2",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    },
    {
      "id": "ST_CASE_19_S3_Q2",
      "suspectId": "S_CASE_19_4",
      "textKey": "case19.statement.s4q3",
      "claimType": "interrogation_answer",
      "challengeable": true,
      "relevantEventIds": [],
      "relevantLocationIds": []
    }
  ],
  "events": [],
  "locations": [
    {
      "id": "L_CASE_19_SCENE",
      "labelKey": "case19.location.scene"
    }
  ],
  "relationships": [
    {
      "id": "R_CASE_19_METHOD",
      "from": "E_CASE_19_01",
      "to": "H_CASE_19_METHOD",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_19_01"
      ]
    },
    {
      "id": "R_CASE_19_MOTIVE",
      "from": "E_CASE_19_05",
      "to": "H_CASE_19_MOTIVE",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_19_05"
      ]
    },
    {
      "id": "R_CASE_19_OPPORTUNITY",
      "from": "E_CASE_19_06",
      "to": "H_CASE_19_OPPORTUNITY",
      "relation": "supports",
      "sourceIds": [
        "E_CASE_19_06"
      ]
    },
    {
      "id": "R_CASE_19_ALIBI_CONTRADICTION",
      "from": "E_CASE_19_06",
      "to": "H_CASE_19_ALIBI",
      "relation": "contradicts",
      "sourceIds": [
        "E_CASE_19_06",
        "ST_CASE_19_S0_Q3"
      ]
    }
  ],
  "hypotheses": [
    {
      "id": "H_CASE_19_METHOD",
      "labelKey": "case19.hypothesis.method",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_19_MOTIVE",
      "labelKey": "case19.hypothesis.motive",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_19_OPPORTUNITY",
      "labelKey": "case19.hypothesis.opportunity",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_19_ALIBI",
      "labelKey": "case19.hypothesis.alibi",
      "initialState": "INSUFFICIENT"
    },
    {
      "id": "H_CASE_19_RESPONSIBILITY",
      "labelKey": "case19.hypothesis.responsibility",
      "initialState": "INSUFFICIENT"
    }
  ],
  "objections": [
    {
      "id": "OBJ_CASE_19_CULPRIT_DENIAL",
      "statementId": "ST_CASE_19_S0_Q3",
      "evidenceIds": [
        "E_CASE_19_06"
      ],
      "relationshipId": "R_CASE_19_ALIBI_CONTRADICTION",
      "resultingHypothesisId": "H_CASE_19_ALIBI",
      "resultingState": "POSSIBLE_CONTRADICTION",
      "validationKey": "case19.objection.culpritDenial"
    }
  ],
  "deductions": [
    {
      "id": "DED_CASE_19_RESPONSIBILITY",
      "labelKey": "case19.deduction.responsibility",
      "requiredEvidenceIds": [
        "E_CASE_19_01",
        "E_CASE_19_05",
        "E_CASE_19_06"
      ],
      "requiredStatementIds": [
        "ST_CASE_19_S0_Q3"
      ],
      "requiredHypothesisStates": [
        [
          "H_CASE_19_METHOD",
          "SUPPORTED"
        ],
        [
          "H_CASE_19_MOTIVE",
          "SUPPORTED"
        ],
        [
          "H_CASE_19_OPPORTUNITY",
          "SUPPORTED"
        ]
      ],
      "requiredObjectionIds": [
        "OBJ_CASE_19_CULPRIT_DENIAL"
      ],
      "resultingHypothesisId": "H_CASE_19_RESPONSIBILITY",
      "resultingState": "SUPPORTED"
    }
  ],
  "evidenceAnalysis": [
    {
      "id": "EA_CASE_19_01",
      "evidenceId": "E_CASE_19_01",
      "unlocksObservationIds": [
        "OBS_CASE_19_01"
      ]
    },
    {
      "id": "EA_CASE_19_02",
      "evidenceId": "E_CASE_19_02",
      "unlocksObservationIds": [
        "OBS_CASE_19_02"
      ]
    },
    {
      "id": "EA_CASE_19_03",
      "evidenceId": "E_CASE_19_03",
      "unlocksObservationIds": [
        "OBS_CASE_19_03"
      ]
    },
    {
      "id": "EA_CASE_19_04",
      "evidenceId": "E_CASE_19_04",
      "unlocksObservationIds": [
        "OBS_CASE_19_04"
      ]
    },
    {
      "id": "EA_CASE_19_05",
      "evidenceId": "E_CASE_19_05",
      "unlocksObservationIds": [
        "OBS_CASE_19_05"
      ]
    },
    {
      "id": "EA_CASE_19_06",
      "evidenceId": "E_CASE_19_06",
      "unlocksObservationIds": [
        "OBS_CASE_19_06"
      ]
    }
  ],
  "interrogations": [
    {
      "id": "INT_CASE_19_S1",
      "suspectId": "S_CASE_19_1",
      "questionIds": [
        "Q_CASE_19_S0_Q0",
        "Q_CASE_19_S0_Q1",
        "Q_CASE_19_S0_Q2",
        "Q_CASE_19_S0_Q3"
      ]
    },
    {
      "id": "INT_CASE_19_S2",
      "suspectId": "S_CASE_19_2",
      "questionIds": [
        "Q_CASE_19_S1_Q0",
        "Q_CASE_19_S1_Q1",
        "Q_CASE_19_S1_Q2"
      ]
    },
    {
      "id": "INT_CASE_19_S3",
      "suspectId": "S_CASE_19_3",
      "questionIds": [
        "Q_CASE_19_S2_Q0",
        "Q_CASE_19_S2_Q1",
        "Q_CASE_19_S2_Q2"
      ]
    },
    {
      "id": "INT_CASE_19_S4",
      "suspectId": "S_CASE_19_4",
      "questionIds": [
        "Q_CASE_19_S3_Q0",
        "Q_CASE_19_S3_Q1",
        "Q_CASE_19_S3_Q2"
      ]
    }
  ],
  "questions": [
    {
      "id": "Q_CASE_19_S0_Q0",
      "suspectId": "S_CASE_19_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_19_S0_Q0"
      ]
    },
    {
      "id": "Q_CASE_19_S0_Q1",
      "suspectId": "S_CASE_19_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_19_S0_Q1"
      ]
    },
    {
      "id": "Q_CASE_19_S0_Q2",
      "suspectId": "S_CASE_19_1",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_19_S0_Q2"
      ]
    },
    {
      "id": "Q_CASE_19_S0_Q3",
      "suspectId": "S_CASE_19_1",
      "requiredEvidenceIds": [
        "E_CASE_19_06"
      ],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_19_S0_Q3"
      ]
    },
    {
      "id": "Q_CASE_19_S1_Q0",
      "suspectId": "S_CASE_19_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_19_S1_Q0"
      ]
    },
    {
      "id": "Q_CASE_19_S1_Q1",
      "suspectId": "S_CASE_19_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_19_S1_Q1"
      ]
    },
    {
      "id": "Q_CASE_19_S1_Q2",
      "suspectId": "S_CASE_19_2",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_19_S1_Q2"
      ]
    },
    {
      "id": "Q_CASE_19_S2_Q0",
      "suspectId": "S_CASE_19_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_19_S2_Q0"
      ]
    },
    {
      "id": "Q_CASE_19_S2_Q1",
      "suspectId": "S_CASE_19_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_19_S2_Q1"
      ]
    },
    {
      "id": "Q_CASE_19_S2_Q2",
      "suspectId": "S_CASE_19_3",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_19_S2_Q2"
      ]
    },
    {
      "id": "Q_CASE_19_S3_Q0",
      "suspectId": "S_CASE_19_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_19_S3_Q0"
      ]
    },
    {
      "id": "Q_CASE_19_S3_Q1",
      "suspectId": "S_CASE_19_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_19_S3_Q1"
      ]
    },
    {
      "id": "Q_CASE_19_S3_Q2",
      "suspectId": "S_CASE_19_4",
      "requiredEvidenceIds": [],
      "requiredStatementIds": [],
      "responseIds": [
        "RESP_CASE_19_S3_Q2"
      ]
    }
  ],
  "responses": [
    {
      "id": "RESP_CASE_19_S0_Q0",
      "questionId": "Q_CASE_19_S0_Q0",
      "producesStatementId": "ST_CASE_19_S0_Q0"
    },
    {
      "id": "RESP_CASE_19_S0_Q1",
      "questionId": "Q_CASE_19_S0_Q1",
      "producesStatementId": "ST_CASE_19_S0_Q1"
    },
    {
      "id": "RESP_CASE_19_S0_Q2",
      "questionId": "Q_CASE_19_S0_Q2",
      "producesStatementId": "ST_CASE_19_S0_Q2"
    },
    {
      "id": "RESP_CASE_19_S0_Q3",
      "questionId": "Q_CASE_19_S0_Q3",
      "producesStatementId": "ST_CASE_19_S0_Q3"
    },
    {
      "id": "RESP_CASE_19_S1_Q0",
      "questionId": "Q_CASE_19_S1_Q0",
      "producesStatementId": "ST_CASE_19_S1_Q0"
    },
    {
      "id": "RESP_CASE_19_S1_Q1",
      "questionId": "Q_CASE_19_S1_Q1",
      "producesStatementId": "ST_CASE_19_S1_Q1"
    },
    {
      "id": "RESP_CASE_19_S1_Q2",
      "questionId": "Q_CASE_19_S1_Q2",
      "producesStatementId": "ST_CASE_19_S1_Q2"
    },
    {
      "id": "RESP_CASE_19_S2_Q0",
      "questionId": "Q_CASE_19_S2_Q0",
      "producesStatementId": "ST_CASE_19_S2_Q0"
    },
    {
      "id": "RESP_CASE_19_S2_Q1",
      "questionId": "Q_CASE_19_S2_Q1",
      "producesStatementId": "ST_CASE_19_S2_Q1"
    },
    {
      "id": "RESP_CASE_19_S2_Q2",
      "questionId": "Q_CASE_19_S2_Q2",
      "producesStatementId": "ST_CASE_19_S2_Q2"
    },
    {
      "id": "RESP_CASE_19_S3_Q0",
      "questionId": "Q_CASE_19_S3_Q0",
      "producesStatementId": "ST_CASE_19_S3_Q0"
    },
    {
      "id": "RESP_CASE_19_S3_Q1",
      "questionId": "Q_CASE_19_S3_Q1",
      "producesStatementId": "ST_CASE_19_S3_Q1"
    },
    {
      "id": "RESP_CASE_19_S3_Q2",
      "questionId": "Q_CASE_19_S3_Q2",
      "producesStatementId": "ST_CASE_19_S3_Q2"
    }
  ],
  "suspects": [
    {
      "id": "S_CASE_19_1",
      "nameKey": "legacy.case19.suspect1.name"
    },
    {
      "id": "S_CASE_19_2",
      "nameKey": "legacy.case19.suspect2.name"
    },
    {
      "id": "S_CASE_19_3",
      "nameKey": "legacy.case19.suspect3.name"
    },
    {
      "id": "S_CASE_19_4",
      "nameKey": "legacy.case19.suspect4.name"
    }
  ],
  "authoringTruthReference": {
    "source": "translations.cases[19].explain"
  }
});

const CASES = Object.freeze({
  CASE_MANOR_01: case1,
  CASE_EYE_NILE_01: caseEyeNile,
  CASE_02: case2,
  CASE_03: case3,
  CASE_04: case4,
  CASE_05: case5,
  CASE_06: case6,
  CASE_07: case7,
  CASE_08: case8,
  CASE_09: case9,
  CASE_10: case10,
  CASE_11: case11,
  CASE_12: case12,
  CASE_13: case13,
  CASE_14: case14,
  CASE_15: case15,
  CASE_16: case16,
  CASE_17: case17,
  CASE_18: case18,
  CASE_19: case19,
});


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
  if (CASES[caseId]) return CASES[caseId];
  if (typeof caseId === 'number') {
    const match = Object.values(CASES).find(model => model.numericAlias === caseId);
    return match || null;
  }
  return null;
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
  const collections = [
    'evidence', 'observations', 'statements', 'events', 'locations', 'relationships',
    'hypotheses', 'objections', 'deductions', 'evidenceAnalysis', 'interrogations',
    'questions', 'responses'
  ];
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
    ...(model?.hypotheses || []).map(item => item.id),
    ...collectActorIds(model)
  ]);
  for (const relationship of model?.relationships || []) {
    if (!known.has(relationship.from) || !known.has(relationship.to)) {
      errors.push(`relationship ${relationship.id} references an unknown entity`);
    }
    if (!Array.isArray(relationship.sourceIds) || relationship.sourceIds.length === 0) {
      errors.push(`relationship ${relationship.id} has no provenance`);
    }
  }
  const ids = collection => new Set((model?.[collection] || []).map(item => item.id));
  const evidenceIds = ids('evidence');
  const observationIds = ids('observations');
  const statementIds = ids('statements');
  const suspectIds = collectActorIds(model);
  const objectionIds = ids('objections');
  const questionIds = ids('questions');
  const responseIds = ids('responses');

  for (const analysis of model?.evidenceAnalysis || []) {
    if (!evidenceIds.has(analysis.evidenceId)) errors.push(`evidence analysis ${analysis.id} references an unknown evidence item`);
    for (const observationId of analysis.unlocksObservationIds || []) {
      if (!observationIds.has(observationId)) errors.push(`evidence analysis ${analysis.id} references an unknown observation`);
    }
  }
  for (const interrogation of model?.interrogations || []) {
    if (!suspectIds.has(interrogation.suspectId)) errors.push(`interrogation ${interrogation.id} references an unknown suspect`);
    for (const questionId of interrogation.questionIds || []) {
      if (!questionIds.has(questionId)) errors.push(`interrogation ${interrogation.id} references an unknown question`);
    }
  }
  for (const question of model?.questions || []) {
    if (!suspectIds.has(question.suspectId)) errors.push(`question ${question.id} references an unknown suspect`);
    for (const responseId of question.responseIds || []) {
      if (!responseIds.has(responseId)) errors.push(`question ${question.id} references an unknown response`);
    }
    for (const statementId of question.requiredStatementIds || []) {
      if (!statementIds.has(statementId)) errors.push(`question ${question.id} references an unknown required statement`);
    }
    for (const evidenceId of question.requiredEvidenceIds || []) {
      if (!evidenceIds.has(evidenceId)) errors.push(`question ${question.id} references an unknown required evidence item`);
    }
  }
  for (const response of model?.responses || []) {
    if (!questionIds.has(response.questionId)) errors.push(`response ${response.id} references an unknown question`);
    if (response.producesStatementId && !statementIds.has(response.producesStatementId)) {
      errors.push(`response ${response.id} references an unknown produced statement`);
    }
    if (response.producesEvidenceId && !evidenceIds.has(response.producesEvidenceId)) {
      errors.push(`response ${response.id} references an unknown produced evidence item`);
    }
    if (response.flagsObjectionId && !objectionIds.has(response.flagsObjectionId)) {
      errors.push(`response ${response.id} references an unknown objection`);
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
export const CASE_EYE_NILE_01_MODEL = caseEyeNile;
export const CASE_02_MODEL = case2;
export const CASE_03_MODEL = case3;
export const CASE_04_MODEL = case4;
export const CASE_05_MODEL = case5;
export const CASE_06_MODEL = case6;
export const CASE_07_MODEL = case7;
export const CASE_08_MODEL = case8;
export const CASE_09_MODEL = case9;
export const CASE_10_MODEL = case10;
export const CASE_11_MODEL = case11;
export const CASE_12_MODEL = case12;
export const CASE_13_MODEL = case13;
export const CASE_14_MODEL = case14;
export const CASE_15_MODEL = case15;
export const CASE_16_MODEL = case16;
export const CASE_17_MODEL = case17;
export const CASE_18_MODEL = case18;
export const CASE_19_MODEL = case19;

