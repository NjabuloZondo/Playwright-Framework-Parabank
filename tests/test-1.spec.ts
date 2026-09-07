import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm;jsessionid=5681DFFC025702E0C606429918B310A4');
  await page.getByRole('link', { name: 'Register' }).click();
  await page.locator('[id="customer.firstName"]').click();
  await page.locator('[id="customer.firstName"]').fill('Nqubeko');
  await page.locator('[id="customer.lastName"]').click();
  await page.locator('[id="customer.lastName"]').fill('Zondo');
  await page.locator('[id="customer.address.street"]').click();
  await page.locator('[id="customer.address.street"]').fill('7825 midrand');
  await page.locator('[id="customer.address.city"]').click();
  await page.locator('[id="customer.address.city"]').fill('madrad');
  await page.locator('[id="customer.address.state"]').click();
  await page.locator('[id="customer.address.state"]').fill('noordwyk');
  await page.locator('[id="customer.address.zipCode"]').click();
  await page.locator('[id="customer.address.zipCode"]').fill('1687');
  await page.locator('[id="customer.phoneNumber"]').click();
  await page.locator('[id="customer.phoneNumber"]').fill('0812565178');
  await page.locator('[id="customer.ssn"]').click();
  await page.locator('[id="customer.ssn"]').fill('231');
  await page.locator('[id="customer.username"]').click();
  await page.locator('[id="customer.username"]').fill('Thuba');
  await page.locator('[id="customer.password"]').click();
  await page.locator('[id="customer.password"]').fill('Test@01');
  await page.locator('#repeatedPassword').click();
  await page.locator('#repeatedPassword').fill('Test@01');
  await page.getByRole('button', { name: 'Register' }).click();
  await expect(page.getByRole('heading', { name: 'Welcome Thuba' })).toBeVisible();


  await page.getByRole('link', { name: 'Open New Account' }).click();
  await expect(page.getByRole('paragraph').filter({ hasText: 'A minimum of $100.00 must be' })).toBeVisible();

  await page.getByRole('link', { name: 'Accounts Overview' }).click();
  await expect(page.getByRole('link', { name: '39651' })).toBeVisible();
  await expect(page.locator('b').filter({ hasText: '$' })).toBeVisible();
  await page.getByRole('link', { name: 'Accounts Overview' }).click();


  await page.getByRole('link', { name: 'Transfer Funds' }).click();
  await expect(page.getByRole('heading', { name: 'Transfer Funds' })).toBeVisible();
  await page.locator('#amount').click();
  await page.locator('#amount').fill('200');
  await page.getByRole('button', { name: 'Transfer' }).click();
  await expect(page.getByRole('heading', { name: 'Transfer Complete!' })).toBeVisible();
  await expect(page.getByText('$200.00 has been transferred')).toBeVisible();
  
  await page.getByRole('link', { name: 'Log Out' }).click();
});