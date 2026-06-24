import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('button', { name: 'Continue shopping' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Laptop');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  await page.getByRole('link', { name: 'Sell', exact: true }).click();
  await page.getByRole('link', { name: 'Mobiles' }).click();
});