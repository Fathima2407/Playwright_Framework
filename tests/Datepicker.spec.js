import { test, expect } from '@playwright/test';

test('Date_Picker',async({page})=>{
    // await page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
    // await page.locator("#dob").fill("2007-07-24");
    // await expect(page.locator("#dob")).toHaveValue("2007-07-24");

    await page.goto("https://www.globalsqa.com/demo-site/datepicker/");
    const frame = page.frameLocator(".demo-frame").first();
    await frame.locator("#datepicker").click();
    // await frame.locator("text='2'").click();
    // await expect(frame.locator("#datepicker")).toHaveValue("06/02/2026");
    
    // current date selection 
    // const date = new Date();
    // console.log(date);
    // const currentDate=date.getDate();
    // console.log(currentDate);
    // await frame.locator(`text="${currentDate}"`).click();

    //06/02/2026 
    // Month/date/ year

    // const today=new Date();
    // const currentDay=today.getDate();
    // console.log(currentDay);
    // const currentMonth=today.getMonth()+1;  // javascript returns month in a zero based format... so wee need to add 1(+1)
    // console.log(currentMonth);
    // const currentYear=today.getFullYear();
    // console.log(currentYear);

    // const formattedDate=`${currentMonth}/${currentDay}/${currentYear}`;
    // console.log(formattedDate);

    // const datepickValue=await frame.locator("#datepicker").inputValue();  // --> gives the input value present in the input box 
    // console.log(datepickValue);
    // --> before comparing the dates (formattedDate,datepickValue), we need to convert them into date obkects

    // const expectedDate=new Date(formattedDate);
    // const actualDate=new Date(datepickValue);

    // await expect(actualDate.getTime()).toBe(expectedDate.getTime()); // getTime() -- this method will assign unique values to each date which is good and higly used for date comparisons

    const targetYear=2027;
    const targetMonth="July";
    const targetDate="24";

    while(true){
        const displayedYearText=await frame.locator(".ui-datepicker-year").textContent() || "0"
        console.log(displayedYearText);
        const displayedYear = parseInt(displayedYearText);
        console.log(displayedYear);

        if(displayedYear === targetYear){
            break;
        }

        if(displayedYear < targetYear){
            await frame.locator(".ui-icon.ui-icon-circle-triangle-e").click();
        }else{
            await frame.locator(".ui-datepicker-prev").click();
        }
    }

    while(true){
        const displayedMonth=await frame.locator(".ui-datepicker-month").textContent();
        if(displayedMonth===targetMonth){
            break;
        }else{
             await frame.locator(".ui-icon.ui-icon-circle-triangle-e").click();
        }
    }
    await frame.getByText(targetDate, { exact: true }).click();
    // await frame.locator(`test="${targetDate}"`).click();
});
