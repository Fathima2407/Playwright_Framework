const {test,expect} = require('@playwright/test');

test.describe("Google Search Tests",()=>{
    test("Test 1: Search for Playwright @Smoke", async({page})=>{
        await page.goto("https://www.google.com/");
        await page.fill("textarea[aria-label='Search']","Playwright automation");
        await page.keyboard.press('Enter');
        console.log("Searched for playwright Automation");
    })

    test("Test 2: Search for Selenium @Regression", async({page})=>{
        await page.goto("https://www.google.com/");
        await page.fill("textarea[aria-label='Search']","Selenium automation");
        await page.keyboard.press('Enter');
        console.log("Searched for Selenium Automation");
    })

    test("Test 3: Search for Cypress @Smoke", async({page})=>{
        await page.goto("https://www.google.com/");
        await page.fill("textarea[aria-label='Search']","Cypress automation");
        await page.keyboard.press('Enter');
        console.log("Searched for Cypress Automation");
    })

    test("Test 4: Search for API @Regression", async({page})=>{
        await page.goto("https://www.google.com/");
        await page.fill("textarea[aria-label='Search']","API automation");
        await page.keyboard.press('Enter');
        console.log("Searched for API Automation");
    })    
})