import { test, expect } from '@playwright/test';
import { ParaBankSignupPage } from '../pages/paraBank-Signup.page';

test('ParaBank Signup Form', async ({ page }) => {
  const signupPage = new ParaBankSignupPage(page);
  await signupPage.goTo();
  await signupPage.fillForm();
  await signupPage.registerButton.click();
  await expect(page.getByRole('heading', { name: /Welcome/ })).toBeVisible();
});


