import { test, expect } from '@playwright/test';

test("CheckBoxes", async({page})=>
{
    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php", {waitUntil: 'domcontentloaded'});
    await page.locator("#headingOne .accordion-button.collapsed").click();
    await page.getByText("Check Box").click();
    await expect(page).toHaveTitle("Selenium Practice - Check Box");
    await expect(page.locator(".mb-3.fw-normal.border-bottom.text-left.pb-2.mb-4")).toHaveText("Check Box");
    await page.locator("#bs_1 .plus").first().click();
    await expect(page.locator("#c_bs_1")).not.toBeChecked();
    await expect(page.locator("#c_bf_1")).not.toBeChecked();
    await expect(page.locator("#c_bf_2")).not.toBeChecked();
    
    await page.locator("#c_bs_1").check();
    await expect(page.locator("#c_bf_1")).toBeChecked();
    await expect(page.locator("#c_bf_2")).toBeChecked();

    await page.locator("#c_bf_1").uncheck();
    await expect(page.locator("#c_bs_1")).not.toBeChecked();

    await page.locator("#bs_2 .plus").first().click();
    await expect(page.locator("#c_bs_2")).not.toBeChecked();
    await expect(page.locator("#c_bf_3")).not.toBeChecked();
    await expect(page.locator("#c_bf_4")).not.toBeChecked();

    await page.locator("#c_bs_2").check();
    await expect(page.locator("#c_bf_3")).toBeChecked();
    await expect(page.locator("#c_bf_4")).toBeChecked();

    await page.locator("#c_bf_3").uncheck();
    await expect(page.locator("#c_bs_2")).not.toBeChecked();

});

test.only("CheckBoxes in Amazon", async({page})=>
{
    await page.goto("https://www.amazon.in/");
    await page.getByPlaceholder("Search Amazon.in").fill("book");
    await page.locator("#nav-search-submit-button").click();

    await page.waitForSelector("h2.a-size-base span.a-text-bold");
    await expect(page.locator("h2.a-size-base span.a-text-bold")).toContainText(/book/i);

    await page.locator("//span[text()='Hardcover']").click();

    const eles= await page.locator("div[data-cy='price-recipe'] a.a-text-bold").all();

    for(const ele in eles){
        await expect(ele).toContainText("Hardcover");
    }
});