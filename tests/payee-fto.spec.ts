import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // test.setTimeout(120000);
  await page.goto('http://10.176.100.27:4200/login');
  await page.getByRole('textbox', { name: 'Financial Year Username' }).click();
  await page.getByRole('textbox', { name: 'Financial Year Username' }).fill('WBJIT041842');
  await page.getByRole('button', { name: 'Generate OTP' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('option', { name: 'Maker Agency- WBAD00001113' }).click();
  await page.getByRole('button', { name: 'Continue with selected role' }).click();
  await page.getByRole('link', { name: ' Add New' }).click();
  await page.locator('div').filter({ hasText: /^Scheme Code\*Select Options$/ }).getByLabel('Select Options').click();
  await page.getByText('WB62 - WB NIRMAL BHARAT').click();
  await page.getByRole('combobox', { name: 'Select HOA' }).click();
  await page.getByRole('option', { name: '-2215-02-105-00-007-31-02-V' }).click();
  await page.getByText('Select Sanctions').click();
  await page.getByRole('listbox', { name: 'Option List' }).locator('div').nth(1).click();
  await page.getByRole('separator').filter({ hasText: 'Create Fund Transfer Order' }).click();
  await page.getByRole('combobox', { name: 'Select Options' }).click();
  await page.getByText('VENDOR / BENEFICIARY').click();
  await page.getByRole('separator').filter({ hasText: 'Create Fund Transfer Order' }).click();
  await page.locator('div').filter({ hasText: /^Manual Entry$/ }).locator('div').nth(2).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('ofv1');
  await page.locator('p-editor div').nth(3).click();
  await page.locator('p-editor div').nth(3).fill('ofv1');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('p-dropdown').filter({ hasText: 'Select Options' }).getByLabel('dropdown trigger').click();
  await page.getByLabel('Payee Name').getByText('Payee Name').click();
  await page.locator('#ecs-details').getByRole('textbox').click();
  await page.locator('#ecs-details').getByRole('textbox').fill('a');
  await page.getByRole('button', { name: ' search' }).click();
  await page.getByRole('row', { name: 'B BASANTI RAY Mapped JAC/' }).locator('div').nth(2).click();
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  
  await page.getByRole('menuitem', { name: 'Sub Voucher' }).locator('a').click();
  
  await page.getByRole('textbox', { name: 'Sub Voucher No*' }).click();
  
  await page.getByRole('textbox', { name: 'Sub Voucher No*' }).fill('sv1');
  
  await page.getByRole('textbox', { name: 'Total Sub Voucher Amount (' }).click();
  
  await page.getByRole('textbox', { name: 'Total Sub Voucher Amount (' }).fill('10');
  
  await page.getByRole('textbox', { name: 'Sub Voucher Description*' }).click();
  
  await page.getByRole('textbox', { name: 'Sub Voucher Description*' }).fill('sub vou desc');
  
  await page.getByRole('textbox', { name: 'Authority*' }).click();
  
  await page.getByRole('textbox', { name: 'Authority*' }).fill('auth');
  
  await page.getByRole('textbox', { name: 'Entitlement Amount for this' }).click();
  
  await page.getByRole('textbox', { name: 'Entitlement Amount for this' }).fill('100');
  
  await page.getByLabel('Add Sub Voucher').getByRole('button', { name: 'Add' }).click();
  
  await page.getByRole('button', { name: 'OK' }).click();
  
  await page.getByRole('button', { name: 'OK' }).click();
  
  await page.getByRole('button', { name: ' Add' }).click();
  
  await page.getByRole('menuitem', { name: 'Add GST' }).locator('a').click();
  
  await page.getByRole('radio', { name: 'CGST+SGST Applicable for' }).check();
  
  await page.getByRole('textbox', { name: 'GST Invoice Number' }).click();
  
  await page.getByRole('textbox', { name: 'GST Invoice Number' }).fill('gstinvno1');
  
  await page.getByRole('textbox', { name: 'GST Invoice Date' }).fill('2025-09-08');
  
  await page.getByRole('combobox', { name: 'Select Options' }).click();
  
  await page.getByRole('option', { name: 'Percentage' }).click();
  
  await page.getByRole('textbox', { name: '6. Bill Amount (Percentage)' }).click();
  
  await page.getByRole('textbox', { name: '6. Bill Amount (Percentage)' }).fill('100');
  
  await page.getByRole('button', { name: ' Submit' }).click();
  
  await page.getByRole('button', { name: 'OK' }).click();
  
  await page.getByRole('button', { name: 'Ok' }).click();
  
  await page.getByRole('button', { name: ' Add' }).click();
  
  await page.getByRole('menuitem', { name: 'Deduction' }).locator('a').click();
  
  await page.getByRole('combobox', { name: 'Select Deduction' }).click();
  
  await page.getByText('By Transfer(BT)').click();
  
  await page.getByRole('combobox', { name: 'Select Deduction' }).click();
  
  await page.getByText('Income Tax - T.D.S').click();
  
  await page.getByRole('combobox', { name: 'Select Type' }).click();
  
  await page.getByText('Percentage').click();
  
  await page.getByRole('textbox', { name: 'Enter Percentage *' }).click();
  
  await page.getByRole('textbox', { name: 'Enter Percentage *' }).fill('5');
  
  await page.getByRole('button', { name: 'Save' }).click();
  
  await page.getByRole('button', { name: 'OK' }).click();
  
  await page.getByRole('button', { name: 'Ok' }).click();
  
  await page.getByRole('button', { name: ' Add' }).click();
  
  await page.getByRole('menuitem', { name: 'Component' }).locator('a').click();
  
  await page.getByRole('checkbox', { name: 'Select 05' }).check();
  
  await page.getByRole('textbox', { name: 'Enter amount' }).click();
  
  await page.getByRole('textbox', { name: 'Enter amount' }).fill('100');
  
  await page.getByRole('checkbox', { name: 'Are you sure your component' }).check();
  
  await page.getByLabel('Select Component').getByRole('button', { name: 'Final Submit' }).click();
  
  await page.getByRole('button', { name: 'Yes' }).click();
  
  await page.getByRole('button', { name: 'OK' }).click();
  
  await page.getByRole('button', { name: 'Ok' }).click();
  
  await page.getByRole('button', { name: 'Final Submit' }).click();
  
  await page.getByRole('button', { name: 'Yes' }).click();
  
  await page.locator('#row-79062').getByRole('button', { name: '' }).click();
  
  await page.getByRole('menuitem', { name: 'Forward' }).locator('a').click();
  
  await page.getByRole('textbox', { name: 'Enter Remarks' }).fill('frwd');
  
  await page.getByRole('button', { name: 'Forward FTO' }).click();
  
  await page.getByRole('button', { name: 'Yes' }).click();
  
  await page.getByRole('button', { name: 'OK' }).click();
  
  await page.locator('#row-79062').getByRole('button', { name: '' }).click();
  
  await page.getByRole('button', { name: '' }).click();
  
  await page.getByRole('button', { name: 'Sign Out' }).click();
  
  await page.getByRole('textbox', { name: 'Financial Year Username' }).click();
  
  await page.getByRole('textbox', { name: 'Financial Year Username' }).click();
  
  await page.getByRole('textbox', { name: 'Financial Year Username' }).fill('WBJIT042062');
  
  await page.getByRole('button', { name: 'Generate OTP' }).click();
  
  await page.getByRole('button', { name: 'Login' }).click();
  
  await page.getByRole('option', { name: 'Checker Agency- WBAD00001113' }).click();
  
  await page.getByRole('button', { name: 'Continue with selected role' }).click();
  
  await page.getByRole('link', { name: ' Manage FTO' }).click();
  
  await page.locator('#row-79062').getByRole('button', { name: '' }).click();
  
  await page.getByRole('menuitem', { name: 'Forward or Return' }).locator('a').click();
  
  await page.getByText('Forward to DDO').click();
  
  await page.getByRole('textbox', { name: 'Enter Remarks' }).click();
  
  await page.getByRole('textbox', { name: 'Enter Remarks' }).fill('frwd');
  
  await page.getByRole('button', { name: 'Forward to DDO' }).click();
  
  await page.getByRole('button', { name: 'Yes' }).click();
  
  await page.getByRole('button', { name: 'OK' }).click();
  
  await page.locator('#row-79062').getByRole('button', { name: '' }).click();
  
  await page.getByRole('menuitem', { name: 'Track FTO Status' }).locator('a').click();
  
  await page.getByRole('button', { name: '' }).click();
  
  await page.getByRole('button', { name: 'Sign Out' }).click();
  
});