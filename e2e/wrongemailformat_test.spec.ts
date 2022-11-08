import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://areena.yle.fi/tv');

  await page.getByRole('button', { name: 'Kirjaudu' }).click();

  const login = page.frameLocator('role=dialog[name="kirjaudu sisään"] >> iframe')

  await login.getByRole('link', { name: 'Luo Yle Tunnus' }).click();

  await login.getByLabel('Sähköposti').click();

  await login.getByLabel('Sähköposti').fill('vääräformaatti');

  await login.getByLabel('Salasana').click();

  await login.getByText('Tarkista sähköpostiosoitteen muoto.').click();

  const error = login.getByText('Tarkista sähköpostiosoitteen muoto.')
  await expect(error).toContainText('Tarkista sähköpostiosoitteen muoto.')

});