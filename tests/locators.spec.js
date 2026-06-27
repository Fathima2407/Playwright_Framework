import { test, expect } from '@playwright/test';

test.skip('Locators practice1', async({page})=>
{
    await page.goto("https://www.amazon.in/");
    // await page.getByRole('searchbox', { name : 'Search Amazon.in'}).fill("Laptop");
    // await page.getByRole('button' ,  {name : 'Go', exact : true}).click();
    // await page.waitForTimeout(3000);
    // await page.getByText("Customer Service").click();
    // await page.getByAltText("Starting ₹22,999 | Acer").click();
    // await page.locator(".nav-input.nav-progressive-attribute").nth(0).fill("LAptop");
    // await page.locator("//input[@id='twotabsearchtextbox']").fill("LAptop");
    await page.locator("//a[text()='Mobiles']").click();
    await page.waitForTimeout(3000);
});

test.skip('Locators practice2', async({page})=>{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    const labelName= await page.getByLabel("Name:");
    await expect(labelName).toBeVisible();
    await page.getByPlaceholder("First Name").fill("FATHIMA");
    
    await page.getByTitle("back to Selenium Tutorial").click();
    await page.waitForTimeout(3000);
});

// test('Locators Practice3',async({page})=>{
//     await page.goto("https://www.flipkart.com/");
//     await page.getByAltText("").click();
//     await page.waitForTimeout(3000);
// });

test('Locators Practice 3', async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("input[type='password']").fill("secret_sauce");
    await page.locator(".submit-button.btn_action").click();
    await page.waitForTimeout(3000);
});