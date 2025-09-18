import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    test.setTimeout(120000);
  // await page.goto('http://10.176.100.27:4200/login');
  await page.goto('https://train-ifms.wb.gov.in/wbjit-uat/login');
  await page.getByRole('textbox', { name: 'Financial Year Username' }).click();
  await page.getByRole('textbox', { name: 'Financial Year Username' }).fill('WBJIT015962');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('AmiTester@123');
  await page.getByRole('button', { name: 'Generate OTP' }).click();
  await page.locator('.p-inputtext.p-component.p-element.p-inputotp-input').first().click();
  await page.locator('.p-inputtext.p-component.p-element.p-inputotp-input').first().fill('1');
  await page.locator('.p-inputotp > input:nth-child(2)').fill('5');
  await page.locator('.p-inputotp > input:nth-child(3)').fill('1');
  await page.locator('input:nth-child(4)').fill('0');
  await page.locator('input:nth-child(5)').fill('1');
  await page.locator('input:nth-child(6)').fill('1');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('option', { name: 'Maker Agency- WBBN00004684' }).click();
  await page.getByRole('button', { name: 'Continue with selected role' }).click();
  await page.getByRole('button', { name: 'I will do it later' }).click();
  
  
  // fto creation
  await page.getByRole('link', { name: ' Add New' }).click();
  await page.locator('div').filter({ hasText: /^Scheme Code\*Select Options$/ }).getByLabel('Select Options').click();
  await page.getByText('WB62 - WB NIRMAL BHARAT').click();
  await page.getByRole('combobox', { name: 'Select HOA' }).click();
  await page.getByRole('option', { name: '-2215-02-105-00-007-31-02-V' }).click();
  await page.getByText('Select Sanctions').click();
  await page.getByRole('option', { name: 'D-WB6220250619185135' }).locator('div').nth(1).click();
  // await page.getByRole('listbox', { name: 'Option List' }).locator('div').nth(1).click();
  await page.getByText('Create Fund Transfer Order').click();
  await page.getByRole('combobox', { name: 'Select Options' }).click();
  await page.getByText('VENDOR / BENEFICIARY').click();
  await page.getByText('Create Fund Transfer Order').click();
  await page.locator('div').filter({ hasText: /^Manual Entry$/ }).locator('div').nth(2).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('of12');
  await page.locator('p-editor div').nth(3).click();
  await page.locator('p-editor div').nth(3).fill('of12');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  // payee selection
  await page.locator('p-dropdown').filter({ hasText: 'Select Options' }).getByLabel('dropdown trigger').click();
  await page.getByLabel('Payee Name').getByText('Payee Name').click();
  await page.locator('#ecs-details').getByRole('textbox').click();
  await page.locator('#ecs-details').getByRole('textbox').fill('a');
  await page.getByRole('button', { name: ' search' }).click();
  // await page.getByRole('row', { name: 'B BASANTI RAY Mapped JAC/' }).locator('div').nth(2).click();
  await page.getByRole('row', { name: 'FCCAO BANKURA ZILLA PARISHAD' }).locator('div').nth(2).click();
  
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
    // sub voucher
  await page.getByRole('menuitem', { name: 'Sub Voucher' }).locator('a').click();
  await page.getByRole('textbox', { name: 'Sub Voucher No*' }).fill('subv1');
  await page.getByRole('textbox', { name: 'Sub Voucher Description*' }).click();
  await page.getByRole('textbox', { name: 'Sub Voucher Description*' }).fill('subdesc');
  await page.getByRole('textbox', { name: 'Authority*' }).click();
  await page.getByRole('textbox', { name: 'Sub Voucher Description*' }).fill('subdescs');
  await page.getByRole('textbox', { name: 'Authority*' }).click();
  await page.getByRole('textbox', { name: 'Authority*' }).fill('subauth');
  await page.getByRole('textbox', { name: 'Entitlement Amount for this' }).click();
  await page.getByRole('textbox', { name: 'Entitlement Amount for this' }).fill('120');
  await page.getByLabel('Add Sub Voucher').getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: ' Add' }).click();

  // gst
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

  //   component addition
  await page.getByRole('menuitem', { name: 'Component' }).locator('a').click();
  await page.getByRole('checkbox', { name: 'Select 06' }).check();
  await page.getByRole('textbox', { name: 'Enter amount' }).click();
  await page.getByRole('textbox', { name: 'Enter amount' }).fill('120');
  await page.getByRole('checkbox', { name: 'Are you sure your component' }).check();
  await page.getByLabel('Select Component').getByRole('button', { name: 'Final Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Ok' }).click();
  await page.getByRole('button', { name: 'Final Submit' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();

// dynamic row selection and action
const row = page.locator('tr', { hasText: 'Ready For Forward' }).first();
const rowId = await row.getAttribute('id');
console.log("✅ Picked rowId:", rowId);
await page.locator(`#${rowId}`).locator('button:has(span.pi-ellipsis-v)').click();

  await page.getByRole('menuitem', { name: 'Forward' }).locator('a').click();
  await page.getByRole('textbox', { name: 'Enter Remarks' }).fill('a1');
  await page.getByRole('button', { name: 'Forward FTO' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  // await page.getByRole('button', { name: '' }).click();
  // await page.getByRole('button', { name: 'Sign Out' }).click();

  await page.getByRole('button', { name: '' }).click();
  await page.getByRole('option', { name: 'Checker Agency- WBBN00004684' }).click();
  await page.getByRole('button', { name: 'Continue with selected role' }).click();
  await page.getByRole('button', { name: 'I will do it later' }).click();



  // await page.getByRole('textbox', { name: 'Financial Year Username' }).click();
  // await page.getByRole('textbox', { name: 'Financial Year Username' }).fill('WBJIT042062');
  // await page.getByRole('button', { name: 'Generate OTP' }).click();
  // await page.getByRole('button', { name: 'Login' }).click();
  // await page.getByRole('option', { name: 'Checker Agency- WBAD00001113' }).click();
  // await page.getByRole('button', { name: 'Continue with selected role' }).click();
  await page.getByRole('link', { name: ' Manage FTO' }).click();

  //   await page.locator('#row-79079').getByRole('button', { name: '' }).click();
  await page.locator(`#${rowId}`).locator('button:has(span.pi-ellipsis-v)').click();

  await page.getByRole('menuitem', { name: 'Forward or Return' }).locator('a').click();
  await page.getByText('Forward to DDO').click();
  await page.getByRole('button', { name: 'Forward to DDO' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
});