import { test, expect } from '@playwright/test';

test('Assertions', async({page})=>
{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    await page.locator("#name").fill("Test User");
    await page.locator("#email").fill("abc@gmail.com");
    await expect.soft(page.locator("#name")).toHaveValue("Test User");

    // await page.locator("#gender").check();
    await expect(page.locator("#gender")).not.toBeChecked();

    await page.locator("#hobbies").check();
    await expect(page.locator("#hobbies")).toBeChecked();
});

test('Assertions 111111', async({page})=>
{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    await page.locator("#name").fill("Test User");
    await page.locator("#email").fill("abc@gmail.com");
    await expect.soft(page.locator("#name")).toHaveValue("Test User");

    // await page.locator("#gender").check();
    await expect(page.locator("#gender")).not.toBeChecked();

    await page.locator("#hobbies").check();
    await expect(page.locator("#hobbies")).toBeChecked();
});