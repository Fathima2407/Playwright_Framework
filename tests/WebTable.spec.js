const { test, expect } = require('@playwright/test');

test("Handling web table", async ({ page }) => {
    await page.goto("https://letcode.in/table");
    await expect(page.locator("#shopping")).toBeVisible();

    const row=await page.locator("#shopping tbody tr").count();
    await expect(row).toBe(4);

    const cols = await page.locator("#shopping thead tr th").count();
    await expect(cols).toBe(2);

    const itemName = await page.locator("#shopping tbody tr:nth-child(2) td:nth-child(1)").textContent();
    console.log(`Item name is : ${itemName}`);
    await expect(itemName).toBe("Apple");

    const itemPrice = await page.locator("#shopping tbody tr:nth-child(2) td:nth-child(2)").textContent();
    console.log(`Item price is : ${itemPrice}`);
    await expect(itemPrice).toBe("180");

    // // validating col names

    const colNames=['Items','Price'];
    const ColText=await page.locator("#shopping thead tr th").allTextContents();
    console.log(`Column names are : ${ColText}`);
    await expect(ColText).toEqual(colNames);


    await expect(page.locator("#simpletable")).toBeVisible();
    // const name = 'Koushik';
    // const row = page.locator("#simpletable tbody tr").filter({ hasText: name });
    // row.locator("input[type='checkbox']").check();

    // await expect(row.locator("input[type='checkbox']")).toBeChecked();

    const names=['Koushik','Yashwanth','Iron'];
    for(const name of names){
        const row = page.locator("#simpletable tbody tr").filter({ hasText: name });
        await row.locator("input[type='checkbox']").check();
        await expect(row.locator("input[type='checkbox']")).toBeChecked();
    }

    await expect(page.locator(".mat-sort")).toBeVisible();
    const calories = await page.locator(".mat-sort tr td:nth-of-type(2)").allTextContents();
    console.log(calories);

    const isSorted = calories.join() === [...calories].sort().join();
    console.log(isSorted);
    await expect(isSorted).toBe(true);

    await page.waitForTimeout(5000)

})