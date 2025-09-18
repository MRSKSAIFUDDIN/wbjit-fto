import { firefox } from '@playwright/test';

(async () => {
  const browser = await firefox.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Go to the login page
  await page.goto('https://train-ifms.wb.gov.in/ebilling/');

  // If you already have tokens, inject them here (optional)
  const localStorageData = {
    "WBJITBilling-jwtToken": "YOUR_JWT_HERE",
    "accessToken": "YOUR_ACCESS_TOKEN_HERE",
    "refreshToken": "YOUR_REFRESH_TOKEN_HERE",
    "deviceId": "172ed050-1664-4fcb-ade0-00f31dda077b",
    "user": "YOUR_USER_STRING",
  };

  await page.evaluate((data) => {
    for (const [key, value] of Object.entries(data)) {
      localStorage.setItem(key, value);
    }
  }, localStorageData);

  // Reload so the site recognizes the token
  await page.reload({ waitUntil: 'networkidle' });

  // Optional: navigate to some protected page to confirm login works
  await page.goto('https://train-ifms.wb.gov.in/ebilling/received-advice', {
    waitUntil: 'networkidle',
  });

  // Save storage state to a file
  await context.storageState({ path: 'authStorage.json' });

  console.log('✅ Storage state saved!');
  await browser.close();
})();
