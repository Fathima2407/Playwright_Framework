const {test,expect} = require ('@playwright/test');

test("Assertions", async({page})=>
{
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    const logo=page.locator(".login_logo");
    await expect(logo).toBeVisible();
    const userName=page.locator("#user-name");
    await expect(userName).toBeEnabled();
    const userNames=page.locator("#login_credentials h4");
    await expect(userNames).toHaveText("Accepted usernames are:");
    const attributeValue=page.locator("#user-name");
    await expect(attributeValue).toHaveAttribute('placeholder','Username');
    await expect(attributeValue).toHaveClass("input_error form_input");
});