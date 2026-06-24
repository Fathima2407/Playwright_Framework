import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Laptop');
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Sponsored Ad - HP OmniBook 5' }).first().click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/HP-Previously-Snapdragon-Processor-Light-Weight/dp/B0F8P844W2/ref=sr_1_1_sspa?crid=27EN06IFZMPRS&dib=eyJ2IjoiMSJ9.DlztSUOTVeon19bs9VXGHRCPoTSn1JCqJSPA6v2YyMwBkN3IRjnqju1C3QCR9OXBpRBJcSEoB2cklGlLiJtevxrMBfXXNFESsO4-3kBo30f5McM5bkfoHcUFrzognKeJXwrVjETGISM17EZke6su1lEE4BwgJ6zn58xR6vUAttSKGuQh2bhcEBjO9Pm_g5rkN2FE2zsmHzHtaOzrFQlRT_H8ctOx2qtSIJG86bP13Nc.cubun_upw6km_YwgXcluUHAA9lgtvWoH1cjS5Tpm6jU&dib_tag=se&keywords=Laptop&qid=1778855013&sprefix=laptop%2Caps%2C347&sr=8-1-spons&aref=kIiaSZ1w6s&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1');
});

test('test2', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).fill('Book');
  await expect(page.getByRole('button', { name: 'Go', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Go', exact: true }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Sponsored Ad - Ruskin Bond' }).click();
  const page1 = await page1Promise;
});