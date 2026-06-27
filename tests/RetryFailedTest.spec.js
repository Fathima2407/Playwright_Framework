import { test, expect } from '@playwright/test';

test("Retry Failed Test Case & Sorting Prices from high to low",async({page})=>{

    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();

    await page.waitForTimeout(3000);
    await page.selectOption(".product_sort_container", {value: 'hilo1'});
    await page.waitForTimeout(3000);
    const prices = await page.locator(".inventory_item_price").allTextContents();
    console.log(prices)

    const numericPrices = prices.map((price => parseFloat(price.replace(/[^0-9.]+/g, ""))))
    console.log(numericPrices)
    const sortedPricesHighToLow = [...numericPrices].sort((a,b)=>b-a)
    expect(numericPrices).toEqual(sortedPricesHighToLow)
});