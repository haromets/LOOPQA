import { test, expect } from '@playwright/test';
import testCases from './testData.json';

// login function
async function login(page) {
  await page.goto('https://animated-gingersnap-8cf7f2.netlify.app');
  await page.locator('#username').fill('admin');
  await page.locator('#password').fill('password123');
  await page.locator('text=Sign in').click();
}


testCases.forEach(({ name, app, column, taskName, labels }) => {
  test(name, async ({ page }) => {
    await login(page);

    // Switch to the correct application
    if (app === 'Mobile Application') {
      await page.locator('.w-full.text-left.p-4.hover\\:bg-gray-700.transition-colors', { hasText: app }).click();
    }

    // Verify app name
    await expect(page.locator('.text-xl.font-semibold.text-gray-900', { hasText: app }), `Expect app "${app}"`).toBeVisible();

    // Locate task in the correct column
    const columnElement = page.locator('.flex.flex-col.w-80.bg-gray-50.rounded-lg.p-4', { hasText: column });
    const taskElement = columnElement.locator('.bg-white.p-4.rounded-lg.shadow-sm.border.border-gray-200.hover\\:shadow-md.transition-shadow');
    const task_Name = taskElement.locator('.font-medium.text-gray-900.mb-2', { hasText: taskName });

    // Validate taskName visibility
    await expect(task_Name, `Expect task "${taskName}"`).toBeVisible();

    // Validate labels 
    for (const label of labels) {
      await expect.soft(
        taskElement.locator('.flex.flex-wrap.gap-2.mb-3', { hasText: label }),`Expect label "${label}"`).toBeVisible();
    }
  });
});
