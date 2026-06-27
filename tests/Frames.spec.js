import { test, expect } from '@playwright/test';

test('Handling frames', async({page})=>{
    await page.goto("https://testpages.eviltester.com/styled/frames/frames-test.html");
    const no_of_frames=page.frames();
    console.log(`No of frames: ${no_of_frames.length}`);

    // by means of name

    const frame1 = page.frame({name : 'left'});
     
    if(frame1){
        const ele = await frame1.waitForSelector("h1", {state : 'visible'});
        const text = frame1.locator("h1");
        await expect(text).toHaveText("Left");
    }else{
        console.error("The left named frame is not present on the page");
    }

    // by means of url

   
    // const frame2=page.frame({ url : '/frame-includes/middle.html'});  --> complete url and complete matching 
    no_of_frames.forEach(frame=>
    {
        console.log(frame.url());
    }
    )

    const frame2=page.frame({ url : /.*middle\.html.*/});
    if(frame2){
        await frame2.waitForSelector("h1", {state : 'visible'});
        const ele = frame2.locator("h1");
        await expect(ele).toHaveText("Middle");
    }else{
        console.error("The left named frame is not present on the page");
    }

    // by means of index

    const frame3=no_of_frames[4];
    await expect(frame3.locator("h1")).toHaveText("Right");

});

test.only('Nested frames', async({page})=>{
    await page.goto("https://play1.automationcamp.ir/frames.html");
    const parentFrame= await page.frameLocator("#frame1");
    const childFrame= parentFrame.frameLocator("#frame2");
    await childFrame.locator("#click_me_2").click();
    await expect(childFrame.locator("#click_me_2")).toHaveText("Clicked");
})