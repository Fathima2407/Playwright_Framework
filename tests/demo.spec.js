const { test, expect } = require('@playwright/test');

test('Launch the browser', async({page})=>
{
    await page.goto("https://www.google.com/");
    const titleName=await page.title();
    console.log(titleName);
    expect(titleName).toBe('Google');

});