
import { test, expect } from '@playwright/test';

test('Input Box',async({page})=>
{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
    await page.locator('#headingOne .accordion-button.collapsed').click();
    await page.getByText("Text Box").click();
    await expect(page).toHaveTitle("Selenium Practice - Text Box");
    await expect(page.locator("#TextForm h1")).toHaveText("Text Box");
    // await page.getByPlaceholder("Full Name").fill("Test User");
    await page.fill("#fullname","Test User");
    await page.getByPlaceholder("name@example.com").fill("testuser@gmail.com");
    await page.getByPlaceholder("Currend Address").fill("01,test area, opposite medplus");
    await page.getByPlaceholder("Password").fill("abcdefg");
    await page.locator(".btn.btn-primary").click();
});

test('Input Box Error Msg',async({page})=>
{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
    await page.locator('#headingOne .accordion-button.collapsed').click();
    await page.getByText("Text Box").click();
    await expect(page).toHaveTitle("Selenium Practice - Text Box");
    await expect(page.locator("#TextForm h1")).toHaveText("Text Box");

    await page.locator(".btn.btn-primary").click();
    await expect(page.locator("#fullname-error")).toBeAttached();

    const errorLabel=page.locator("#fullname-error");
    const errorMsg= await errorLabel.textContent();

    console.log(errorMsg);
    expect(errorMsg).toContain("This field is required.");
    
});

test('Radio Buttons',async({page})=>
{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');
    await page.locator('#headingOne .accordion-button.collapsed').click();
    await page.getByText("Radio Button").click();
    await expect(page).toHaveTitle("Selenium Practice - Radio Button");
    await expect(page.locator("form h1")).toHaveText("Radio Button");
    await expect(page.locator("//input[@value='igottwo']")).not.toBeChecked();
    await expect(page.locator("//input[@value='igotthree']")).not.toBeChecked();
    await expect(page.locator("//input[@value='option3']")).toBeDisabled(); 
    
    await page.locator("//input[@value='igottwo']").check();
    await expect(page.locator("//input[@value='igottwo']")).toBeChecked();
    await expect(page.locator("#check")).toHaveText("You have checked Yes");

    await page.locator("//input[@value='igotthree']").check();
    await expect(page.locator("//input[@value='igotthree']")).toBeChecked();
    await expect(page.locator("#check1")).toHaveText("You have checked Impressive");

    await expect(page.locator("#check")).not.toBeVisible();
   
    
});