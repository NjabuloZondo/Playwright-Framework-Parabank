import { test, expect } from '@playwright/test';
import { ParaBankSignupPage } from '../pages/paraBank-Signup.page';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

test('ParaBank Signup Form', async ({ page }) => {
  const signupPage = new ParaBankSignupPage(page);
  await signupPage.goTo();
  await signupPage.fillForm();
  await signupPage.fillCredentials('Nqubeko', 'Test!01');
  await signupPage.submitForm();
 
});
