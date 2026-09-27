import { chromium } from 'playwright';

const BASE_URL = process.env.BLACKFILE_BASE_URL || 'http://127.0.0.1:4173';
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const page = await context.newPage();
await page.addInitScript(() => localStorage.setItem('tf_offlineMode', 'true'));
const errors = [];
page.on('pageerror', error => errors.push(error.message));

await page.route('**/firebase-config.js', route => route.fulfill({
  status: 200,
  contentType: 'application/javascript',
  body: `window.FIREBASE_CONFIG = {
    apiKey: "browser-test-key",
    authDomain: "browser-test.firebaseapp.com",
    projectId: "browser-test",
    appId: "browser-test-app"
  };`
}));

try {
  await page.goto(`${BASE_URL}/index.html`, { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#scr-menu.active', { state: 'attached' });
  await page.locator('.app').waitFor({ state: 'visible' });
  // Auth/offline persistence: the explicit guest mode must survive a reload,
  // while a normal unauthenticated session must return to the login UI.
  if (await page.locator('#lamp-wrapper').isVisible()) {
    throw new Error('Offline mode did not bypass the login UI.');
  }

  // Auth gate: without explicit guest mode and without an authenticated
  // Firebase session, the app must remain on the login screen.
  const authContext = await browser.newContext();
  const authPage = await authContext.newPage();
  await authPage.route('**/firebase-config.js', route => route.fulfill({
    status: 200,
    contentType: 'application/javascript',
    body: `window.FIREBASE_CONFIG = {
      apiKey: "browser-test-key",
      authDomain: "browser-test.firebaseapp.com",
      projectId: "browser-test",
      appId: "browser-test-app"
    };`
  }));
  await authPage.goto(`${BASE_URL}/index.html`, { waitUntil: 'domcontentloaded' });
  await authPage.waitForSelector('#lamp-wrapper', { state: 'visible', timeout: 10000 });
  if (await authPage.locator('.app').isVisible()) {
    throw new Error('Unauthenticated auth flow incorrectly opened the game UI.');
  }
  await authPage.close();
  await authContext.close();
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#scr-menu.active', { state: 'attached', timeout: 10000 });
  if (await page.locator('#lamp-wrapper').isVisible()) {
    throw new Error('Offline mode was not persisted across reload.');
  }

  await page.waitForSelector('#case-list .card[data-action="openBrief"][data-case-idx="0"]', { timeout: 15000 });

  const onboarding = page.locator('#modal-onboard.active');
  if (await onboarding.count()) {
    await onboarding.locator('[data-action="closeOnboarding"]').click();
  }

  await page.locator('#case-list .card[data-action="openBrief"][data-case-idx="0"]').click();
  await page.locator('#txt-start-inv').click();
  await page.waitForSelector('#scr-investigation.active', { timeout: 10000 });

  // Click one evidence item and verify the app persisted the runtime state.
  await page.locator('#evidence-list .pick[data-evidence-id="E_MANOR_DAGGER"]').click();
  await page.waitForSelector('#modal-evidence.active');
  const savedAfterEvidence = await page.evaluate(() => {
    const raw = localStorage.getItem('tf_investigationStates_v1');
    const all = raw ? JSON.parse(raw) : {};
    return all['0']?.state || null;
  });
  if (!savedAfterEvidence || !savedAfterEvidence.analyzedEvidenceIds?.includes('E_MANOR_DAGGER')) {
    throw new Error('Persistence test failed: analyzed evidence was not saved to localStorage.');
  }
  await page.locator('#modal-evidence [data-action="closeModal_modal-evidence"]').click();
  await page.reload({ waitUntil: 'domcontentloaded' });
  await page.waitForSelector('#scr-menu.active', { state: 'attached', timeout: 10000 });
  await page.locator('#case-list .card[data-action="openBrief"][data-case-idx="0"]').click();
  await page.locator('#txt-start-inv').click();
  await page.waitForSelector('#scr-investigation.active', { timeout: 10000 });
  const restoredState = await page.evaluate(() => {
    const raw = localStorage.getItem('tf_investigationStates_v1');
    const all = raw ? JSON.parse(raw) : {};
    return all['0']?.state || null;
  });
  if (!restoredState?.analyzedEvidenceIds?.includes('E_MANOR_DAGGER')) {
    throw new Error('Persistence test failed: saved investigation state was not restored after reload.');
  }

  // Continue the normal Case 0 flow from the restored state.

  if (errors.length) {
    throw new Error(`Browser page errors while starting Case 0: ${errors.join(' | ')}`);
  }
  const evidenceButtons = page.locator('#evidence-list .pick[data-evidence-id]');
  const evidenceCount = await evidenceButtons.count();
  const visibleEvidenceIds = await evidenceButtons.evaluateAll(nodes =>
    nodes.map(node => node.dataset.evidenceId).filter(Boolean)
  );

  const initialEvidenceIds = [
    'E_MANOR_DAGGER',
    'E_MANOR_LETTER',
    'E_MANOR_FOOTPRINT',
    'E_MANOR_WATCH',
    'E_MANOR_CAMERA'
  ];

  if (evidenceCount !== initialEvidenceIds.length
      || initialEvidenceIds.some(id => !visibleEvidenceIds.includes(id))) {
    throw new Error(
      `Case 0 browser UI should expose exactly the five initial evidence items. Count: ${evidenceCount}. Visible IDs: ${visibleEvidenceIds.join(', ') || '(none)'}.`
    );
  }

  for (const evidenceId of initialEvidenceIds) {
    const evidence = page.locator(`#evidence-list .pick[data-evidence-id="${evidenceId}"]`);
    await evidence.waitFor({ state: 'visible', timeout: 5000 });
    await evidence.click();
    await page.waitForSelector('#modal-evidence.active');
    await page.locator('#modal-evidence [data-action="closeModal_modal-evidence"]').click();
    await page.waitForSelector('#modal-evidence.active', { state: 'hidden' });
  }

  // Yahya -> balcony statement.
  await page.locator('#suspects-list .pick').nth(1).click();
  await page.waitForSelector('#modal-suspect.active');
  await page.locator('#modal-sus-questions .q-btn[data-question-id="Q_YAHYA_BALCONY"]').click();
  await page.locator('#modal-suspect [data-action="closeModal"]').click();

  // Fatima -> witness statement, unlocked by camera evidence.
  await page.locator('#suspects-list .pick').nth(2).click();
  await page.waitForSelector('#modal-suspect.active');
  await page.locator('#modal-sus-questions .q-btn[data-question-id="Q_FATIMA_SIGHTING"]').click();
  await page.locator('#modal-suspect [data-action="closeModal"]').click();

  const revealedAccessLog = page.locator('#evidence-list .pick[data-evidence-id="E_MANOR_ACCESS_LOG"]');
  await revealedAccessLog.waitFor({ state: 'visible', timeout: 5000 });
  await revealedAccessLog.click();
  await page.waitForSelector('#modal-evidence.active');
  await page.locator('#modal-evidence [data-action="closeModal_modal-evidence"]').click();
  await page.waitForSelector('#modal-evidence.active', { state: 'hidden' });

  // Explicitly confront Yahya after the access log is revealed; the response
  // flags the objection for presentation but does not apply it automatically.
  await page.locator('#suspects-list .pick').nth(1).click();
  await page.waitForSelector('#modal-suspect.active');
  await page.locator('#modal-sus-questions .q-btn[data-question-id="Q_YAHYA_BALCONY_CONFRONT"]').click();
  await page.locator('#modal-suspect [data-action="closeModal"]').click();

  const objection = page.locator('#investigation-actions button[data-action="applyInvestigationObjection"][data-objection-id="OBJ_MANOR_YAHYA_BALCONY"]');
  await objection.waitFor({ state: 'visible', timeout: 5000 });
  await objection.click();

  const deduction = page.locator('#investigation-actions button[data-action="applyInvestigationDeduction"][data-deduction-id="DED_MANOR_YAHYA_RESPONSIBILITY"]');
  await deduction.waitFor({ state: 'visible', timeout: 5000 });
  if (await deduction.isDisabled()) throw new Error('Case 0 responsibility deduction is visible but disabled.');
  await deduction.click();

  await page.locator('#txt-accuse-btn').click();
  await page.waitForSelector('#modal-accuse.active');
  await page.locator('#accuse-suspects-list .pick[data-suspect-idx="1"]').click();
  await page.locator('#txt-confirm-accuse').click();

  await page.waitForSelector('#scr-result.active', { timeout: 10000 });
  const resultIcon = (await page.locator('#res-icon').textContent())?.trim();
  if (resultIcon !== '🏆') throw new Error(`Expected correct accusation result (🏆), got: ${resultIcon}`);
  if (errors.length) throw new Error(`Browser page errors: ${errors.join(' | ')}`);

  console.log('CASE_ZERO_BROWSER_E2E_PASS');
} finally {
  await browser.close();
}
