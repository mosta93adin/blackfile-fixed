const assert = require('assert');
const fs = require('fs');
const path = require('path');

(async () => {
  const root = path.join(__dirname, '..');
  const model = await import(path.join(root, 'www', 'engine', 'investigation-model.mjs'));
  const loader = await import(path.join(root, 'www', 'engine', 'case-loader.mjs'));
  const currentModelValidator = model.validateCaseModel;
  const runtimeModule = await import(path.join(root, 'www', 'engine', 'investigation-runtime.mjs'));
  const cases = [model.CASE_MANOR_01_MODEL, model.CASE_EYE_NILE_01_MODEL];
  for (let i = 2; i <= 19; i++) cases.push(loader.loadInvestigationCase(i));

  const globalIds = new Map();
  for (const [index, current] of cases.entries()) {
    assert.ok(current && current.id, `case ${index} has no model`);
    assert.ok(loader.isInvestigationCase(index), `case ${index} is not investigation-enabled`);

    const collections = ['evidence','evidenceAnalysis','observations','statements','events','locations','relationships','hypotheses','objections','deductions','interrogations','questions','responses'];
    const ids = new Map();
    for (const collection of collections) {
      for (const item of current[collection] || []) {
        assert.ok(item.id, `${current.id}: ${collection} item has no id`);
        assert.ok(!ids.has(item.id), `${current.id}: duplicate ID ${item.id}`);
        ids.set(item.id, collection);
        assert.ok(!globalIds.has(item.id), `global duplicate ID ${item.id}`);
        globalIds.set(item.id, current.id);
      }
    }

    const validation = currentModelValidator(current);
    assert.strictEqual(validation.valid, true, `${current.id}: ${validation.errors.join('; ')}`);
    assert.ok(current.accusationGate?.candidateSuspectId, `${current.id}: missing accusation candidate`);
    for (const [hypothesisId] of current.accusationGate.requiredHypotheses || []) assert.strictEqual(ids.get(hypothesisId), 'hypotheses');
    for (const id of current.accusationGate.requiredObjectionIds || []) assert.strictEqual(ids.get(id), 'objections');
    for (const id of current.accusationGate.requiredDeductionIds || []) assert.strictEqual(ids.get(id), 'deductions');

    for (const question of current.questions || []) {
      assert.strictEqual(question.responseIds?.length, 1, `${current.id}: question ${question.id} must have exactly one response`);
      const response = (current.responses || []).find(item => item.id === question.responseIds[0]);
      assert.ok(response, `${current.id}: missing response for ${question.id}`);
      assert.strictEqual(response.questionId, question.id, `${current.id}: response ${response.id} points to wrong question`);
    }
    for (const interrogation of current.interrogations || []) {
      for (const questionId of interrogation.questionIds || []) {
        const question = current.questions.find(item => item.id === questionId);
        assert.ok(question, `${current.id}: interrogation references missing question ${questionId}`);
        assert.strictEqual(question.suspectId, interrogation.suspectId, `${current.id}: question ${questionId} belongs to another suspect`);
      }
    }

    const runtime = runtimeModule.createInvestigationRuntime(index);
    const publicModel = runtime.getModel();
    const publicJson = JSON.stringify(publicModel);
    assert.ok(!/authoringTruthReference|culpritHash/i.test(publicJson), `${current.id}: authoring/truth data leaked into player model`);
    const initial = runtime.getSerializedState();
    const restored = runtimeModule.createInvestigationRuntime(index, initial);
    assert.deepStrictEqual(restored.getSerializedState(), initial, `${current.id}: initial state failed round-trip`);

    const firstEvidence = current.evidence?.[0];
    if (firstEvidence) {
      runtime.discoverEvidence(firstEvidence.id);
      runtime.analyzeEvidence(firstEvidence.id);
      const afterEvidence = runtime.getSerializedState();
      const restoredEvidence = runtimeModule.createInvestigationRuntime(index, afterEvidence);
      assert.deepStrictEqual(restoredEvidence.getSerializedState(), afterEvidence, `${current.id}: evidence state failed round-trip`);
    }
  }

  const app = fs.readFileSync(path.join(root, 'www', 'app.js'), 'utf8');
  assert.ok(app.includes('saveInvestigationRuntimeState();'), 'app.js has no investigation autosave calls');
  assert.ok(app.includes('document.visibilityState === \'hidden\''), 'app.js missing visibility autosave');
  assert.ok(!/caseId >= 2 && caseId <= 19\) return 'legacy'/.test(fs.readFileSync(path.join(root, 'www', 'engine', 'case-dispatch.mjs'), 'utf8')), 'redundant legacy dispatch remains');

  console.log(`Complete investigation audit passed: ${cases.length} cases, ${globalIds.size} unique authored IDs.`);
})();
