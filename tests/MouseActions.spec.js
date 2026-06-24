const {test, expect} = require('@playwright/test');

test("MouseActions", async({page})=>{
    await page.goto("https://play1.automationcamp.ir/mouse_events.html");
    await expect(page.locator("#click_type")).not.toBeVisible();
    // await page.locator("div #click_area").click();
    // await page.click("div #click_area");
    // await expect(page.locator("#click_type")).toHaveText("Click");

    // right click
    await page.locator("div #click_area").click({button : 'right'});
    await page.click("div #click_area" , {button : 'right'});
    await expect(page.locator("#click_type")).toHaveText("Right-Click");


    // double click  dblclick()

    await page.locator("div #click_area").dblclick();
    await page.dblclick("div #click_area" );
    await expect(page.locator("#click_type")).toHaveText("Double-Click");


    // mouse hover

    await page.locator("div .dropbtn").hover();
    await page.hover("div .dropbtn");
    await page.locator("text='Java'").click();
    await expect(page.locator("div #hover_validate")).toHaveText("Java");


    // drag and drop

    // await page.dragAndDrop("#drag_source","#drop_target");
    // await expect(page.locator("#drop_target")).toHaveText("Drop is successful!");

    await page.locator("#drag_source").dragTo(page.locator("#drop_target"));
    await expect(page.locator("#drop_target")).toHaveText("Drop is successful!");

    // for scrolling the page manually 
    await page.mouse.wheel(0,500);


});