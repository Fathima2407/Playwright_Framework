import { test, expect } from '@playwright/test';

let browser;
let page;

test.describe("Hook",()=>{
    test.beforeAll(async()=>{
        console.log("Launch the browser");
        browser = await chromium.launch({headless:false}); //launch the browser
        page = await browser.newPage(); //open the page
    })

    test.afterAll(async()=>{
        console.log("Close the browser");
        await browser.close();
    })


    test.beforeEach(async()=>{
        console.log("Launching the url");
        await page.goto("https://www.google.com/");
    })

    test.afterEach(async()=>{
        console.log("Test Completed");
    })

    test("Test 1: Search Playwright automation",async()=>{
        await page.fill("textarea[aria-label='Search']","Playwright Automation");
        await page.keyboard.press('Enter');
        console.log("Test1 execution is completed");
    })

     test("Test 2: Search JavaScript Tutorial",async()=>{
        await page.fill("textarea[aria-label='Search']","JavaScript Tutorial");
        await page.keyboard.press('Enter');
        console.log("Test2 execution is completed");
    })
})
