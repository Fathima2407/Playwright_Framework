import { test, expect } from '@playwright/test';

test("Screenshot",async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(3000);
    // for taking screenshots, we use a built-in method called screenshot

    //await page.screenshot({path : 'Screenshots/amazon.png'}); // takes the screenshot of visible part of the webpage

    // await page.screenshot({path : 'Screenshots/amazon_fullpage.png' , fullPage : true});

    // with timestamps we can generate unique file names, other wise if use the same file name for different tu=yoes of screenshots, they would be overridden 

    // await page.screenshot({path : `Screenshots/amazon1 - ${Date.now()}.png`});

    //changes were made in the config file in the use block ..... changes: screenshot : 'only-on-failure'

    // await page.locator("#twotabsearchtextbox11").fill("book");

    // taking screenshot of single element 
    // const ele =await page.$("#twotabsearchtextbox");
    // await ele.screenshot({path : 'Screenshots/single_ele.png'});

    //  $ - only one ele, $$ - more than 1 elements

    // video recording

    await page.locator("#twotabsearchtextbox").fill("book");
    
});