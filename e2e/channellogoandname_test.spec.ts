import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // i hope this is what is wanted lol

  await page.goto('https://areena.yle.fi/tv/opas');

  await page.getByRole('heading', { name: 'Yle TV1' }).getByRole('link', { name: 'Yle TV1' }).click();
  await expect(page).toHaveURL('https://areena.yle.fi/tv/ohjelmat/yle-tv1');

  await page.goto('https://areena.yle.fi/tv/opas');

  await page.getByRole('heading', { name: 'Yle TV2' }).getByRole('link', { name: 'Yle TV2' }).click();
  await expect(page).toHaveURL('https://areena.yle.fi/tv/ohjelmat/yle-tv2');

  await page.goto('https://areena.yle.fi/tv/opas');

  await page.getByRole('heading', { name: 'Yle Teema Fem' }).locator('div').click();  
  await page.getByRole('heading', { name: 'Yle Teema Fem Yle Teema Yle Fem' }).getByRole('link', { name: 'Yle Teema' }).click();
  await expect(page).toHaveURL('https://areena.yle.fi/tv/ohjelmat/yle-teema');

  await page.goto('https://areena.yle.fi/tv/opas');

  await page.getByRole('heading', { name: 'Yle Teema Fem' }).locator('div').click();
  await page.getByRole('heading', { name: 'Yle Teema Fem Yle Teema Yle Fem' }).getByRole('link', { name: 'Yle Fem' }).click();  
  await expect(page).toHaveURL('https://areena.yle.fi/tv/ohjelmat/yle-fem');

  await page.goto('https://areena.yle.fi/tv/opas');

});