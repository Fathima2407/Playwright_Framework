const {test, expect} = require('@playwright/test');

test("Keyboard Actions", async({page})=>{
    // await page.goto("https://www.flipkart.com/");
    // await page.locator(".nw1UBF.v1zwn25").last().focus();
    // // whenever we want to perform any actions, then we must use page.keyboard object
    // await page.keyboard.type("Laptop"); // type text
    // // await page.keyboard.press('Enter'); // press enter
    // await page.keyboard.press('Control+A');
    // await page.waitForTimeout(2000);
    // await page.keyboard.press('Backspace');
    // await page.waitForTimeout(2000);

    await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    await page.getByPlaceholder("First Name").focus();
    // await page.keyboard.type('Fathima');
    // await page.keyboard.press('Control+A');
    // await page.waitForTimeout(2000);
    // await page.keyboard.press('Control+C');
    // await page.waitForTimeout(2000);
    // await page.getByPlaceholder("name@example.com").focus();
    // await page.keyboard.press('Control+V');
    // await page.waitForTimeout(2000);

    // page.keyboard.down('Shift') used to press & hold the shift key 
    // page.keyboard.up('Shift') used to release the shift key 

    await page.keyboard.down('Shift');
    await page.keyboard.press('KeyA');
    // we cannot enter entire string at a time, we can just go character by character
    await page.keyboard.up('Shift');
    await page.waitForTimeout(2000);


});