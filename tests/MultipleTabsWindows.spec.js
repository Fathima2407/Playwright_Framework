const {test, expect, chromium, Page} = require('@playwright/test');

test("Multiple tabs",async({page : Page})=>{
    const browser = await chromium.launch({headles : false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demoqa.com/");
    await page.locator("text = Alerts, Frame & Windows").click();
    await page.locator("text = Browser Windows").click();

    const [newTab]= await Promise.all([
        page.waitForEvent("popup"),
        await page.locator("#tabButton").click()
    ])
    
    await newTab.waitForLoadState();
    console.log("New tab"+": "+ newTab.url());

    await page.waitForTimeout(3000);

    await newTab.close();
})

test("Multiple Windows",async({page : Page})=>{
    const browser = await chromium.launch({headles : false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demoqa.com/");
    await page.locator("text = Alerts, Frame & Windows").click();
    await page.locator("text = Browser Windows").click();

    const [newWindow]= await Promise.all([
        context.waitForEvent("page"),
        await page.locator("#windowButton").click()
    ])
    
    await newWindow.waitForLoadState();
    console.log("New tab"+": "+ newWindow.url());

    await page.waitForTimeout(3000);

    await newWindow.close();
})