const assert = require('assert');

(async () => {
  const { getCaseMode, createCaseRuntime } =
    await import('../www/engine/case-dispatch.mjs');

  assert.strictEqual(getCaseMode(0), 'investigation');
  assert.strictEqual(getCaseMode('CASE_MANOR_01'), 'investigation');
  assert.strictEqual(getCaseMode(1), 'investigation');
  assert.strictEqual(getCaseMode('CASE_EYE_NILE_01'), 'investigation');
  assert.strictEqual(getCaseMode(2), 'investigation');
  assert.ok(createCaseRuntime(2));
  for (let caseIndex = 2; caseIndex <= 19; caseIndex += 1) {
    assert.strictEqual(getCaseMode(caseIndex), 'investigation');
    assert.ok(createCaseRuntime(caseIndex));
  }
  assert.throws(() => getCaseMode('CASE_UNKNOWN'), /Unknown case ID/);
  assert.throws(() => createCaseRuntime('CASE_UNKNOWN'), /Unknown case ID/);

  const runtime = createCaseRuntime(0);
  assert.ok(runtime);
  assert.strictEqual(runtime.getCaseId(), 'CASE_MANOR_01');
  assert.strictEqual(runtime.getModel().id, 'CASE_MANOR_01');
  assert.strictEqual(runtime.getModel().accusationGate, undefined);
  const caseOneRuntime = createCaseRuntime(1);
  assert.ok(caseOneRuntime);
  assert.strictEqual(caseOneRuntime.getCaseId(), 'CASE_EYE_NILE_01');
  assert.strictEqual(caseOneRuntime.getModel().id, 'CASE_EYE_NILE_01');
  assert.strictEqual(caseOneRuntime.getModel().accusationGate, undefined);
  assert.strictEqual(JSON.stringify(caseOneRuntime.getModel()).includes('S_EYE_NILE_MAHER'), true);
  assert.strictEqual(JSON.stringify(caseOneRuntime.getModel()).includes('candidateSuspectId'), false);
  console.log('Phase 10 case dispatch checks passed.');
})().catch(error => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
