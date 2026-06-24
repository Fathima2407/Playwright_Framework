const {test,expect} = require('@playwright/test');

test.describe("Google search test", ()=>{
    test("Google homepage load",async({page})=>{
        await page.goto("https://www.google.com/");
        await expect(page).toHaveTitle("Google");
    })
    test.skip("Google Search should work",async({page})=>{
        await page.goto("https://www.google.com/");
        await page.fill("input[name='q']","Playwright");
        await page.enter("input[name='q']",'Enter');
        await expect(page).toHaveTitle("Google");
    })
    test.fixme("Check if google logo is visible",async({page})=>{
        await page.goto("https://www.google.com/");
        await expect(page.locator("img[alt='Google']")).toBeVisible();
    })
    test("Google images should load",async({page})=>{
        test.slow();
        await page.goto("https://www.google.com/imghp");
        await expect(page).toHaveTitle(/Google Images/);
    })
    test.fail("Google logo should be visible(ut using an incorrect selector)",async({page})=>{
        await page.goto("https://www.google.com/");
        await expect(page.locator("img[alt='WrongGooglelogo']")).toBeVisible();
    })
    test("Search playwright automation @Smoke",async({page})=>{
        await page.goto("https://www.google.com/");
        await page.fill("textarea[aria-label='Search']","Playwright automation");
        await page.keyboard.press('Enter');
        console.log("Test 1 execution is complete");
    })
})