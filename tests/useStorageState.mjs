import { firefox } from '@playwright/test';

(async () => {
  const browser = await firefox.launch({ headless: false });
  const context = await browser.newContext({
    storageState: 'authStorage.json', // <-- load saved state
  });
  const page = await context.newPage();

  // Directly go to protected page
  await page.goto('https://train-ifms.wb.gov.in/ebilling/received-advice', {
    waitUntil: 'networkidle',
  });

  await page.screenshot({ path: 'direct-access.png' });
  await browser.close();
})();
