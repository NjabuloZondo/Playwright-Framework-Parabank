import { test, expect } from '@playwright/test';
import { ParaBankSignupPage } from '../pages/paraBank-Signup.page';
import { faker } from '@faker-js/faker';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });

test('ParaBank Signup Form', async ({ page }) => {
    const MAX_RETRIES = 3;
    const password = faker.internet.password();
    const signupPage = new ParaBankSignupPage(page);

  for ( let i = 0; i <= MAX_RETRIES; i++) {
    let username = faker.internet.username();

  await signupPage.goTo();
  await signupPage.fillForm();
  await signupPage.fillCredentials(password, username);
  await signupPage.submitForm();
  await page.waitForLoadState('networkidle');

  try {
    await signupPage.verifyAccountCreation(username);
    break;
  } catch {
    continue;
  }
  }
 
});

