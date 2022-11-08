import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://areena.yle.fi/1-3339547');

  await page.getByRole('button', { name: 'Kausi 3' }).click();

  await page.getByRole('link', { name: 'Jakso 5: Kummeli' }).click();
  await expect(page).toHaveURL('https://areena.yle.fi/1-1796319');

});