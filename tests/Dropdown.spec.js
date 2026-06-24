const {test,expect} = require('@playwright/test');

test('Standard dropdown_Tutorialspoint',async({page})=>
{
    await page.goto('https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php');  // by using visible 
    await page.locator("#state").selectOption("Uttar Pradesh");
    await page.waitForTimeout(5000);
});

test('Standard dropdown_Amazon',async({page})=>
{
    await page.goto('https://www.amazon.in/');
    // await page.locator("#searchDropdownBox").selectOption("search-alias=fashion");  // by using value from value attribute
    // await page.locator("#searchDropdownBox").selectOption({label:'Amazon Fashion'}); // by using label, visible text 
    // await page.locator("#searchDropdownBox").selectOption({index: 3}); // index based selection, 0-based index
    
    // await page.selectOption("#searchDropdownBox",{label:'Amazon Fashion'});  // directly using selectOption
    
    // const selectedOption = await page.locator("#searchDropdownBox").inputValue();
    // expect(selectedOption).toBe("search-alias=fashion");   //by taking the value present inside the value attribute which is present in the option tag
    
    // const selectedOption = await page.locator("#searchDropdownBox option:checked").textContent(); // option:checked -- used to get the selected value from dropdown 
    // expect(selectedOption).toBe("Amazon Fashion");  // by taking the visible text

    const selectedOption = await page.locator("#searchDropdownBox option:checked").textContent();
    expect(selectedOption).toBe("All Categories"); // initial default selected option 

    //no of options present in the dropdown

    const countElements=await page.locator("#searchDropdownBox option").count();
    console.log(countElements);
    expect(countElements).toBe(45);
    

    await page.waitForTimeout(5000);
});

test('Custom_Dropdown', async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.getByPlaceholder("Username").fill("Admin");
    await page.getByPlaceholder("Password").fill("admin123");
    await page.locator("[type='submit']").click();
    await expect(page.locator(".oxd-text.oxd-text--h6")).toBeVisible();

    await page.locator(".oxd-userdropdown-img").click();
    await page.locator("[role='menuitem']", {hasText: 'Support'}).click();

    await expect(page.locator(".oxd-text.oxd-text--p.orangehrm-sub-title")).toHaveText("Customer Support");

    await page.locator(".oxd-main-menu-item--name",{hasText:'Leave'}).click();

    await page.waitForSelector(".oxd-multiselect-wrapper .oxd-select-text--active");
    await page.locator(".oxd-multiselect-wrapper .oxd-select-text--active").click();

    await page.locator(".oxd-select-option",{hasText:'Cancelled'}).click();

    await page.waitForSelector(".oxd-chip.oxd-chip--default.oxd-multiselect-chips-selected");
    await expect(page.locator(".oxd-multiselect-chips-area .oxd-chip.oxd-chip--default.oxd-multiselect-chips-selected", {hasText:'Cancelled'})).toBeVisible();
    // setTimeout(()=>{debugger;}, 5000)
    
    // await page.waitForTimeout(5000);
});

test.only("Searchable Dropdown", async({page})=>{
    await page.goto("https://www.amazon.in/");
    await page.locator("#twotabsearchtextbox").fill("book");
    await page.waitForSelector(".left-pane-results-container");
    await expect(page.locator(".left-pane-results-container")).toBeVisible();

    const countOfOptions = await page.locator("[id*='sac-suggestion-row']").count();
    console.log(countOfOptions);
    await expect(page.locator("[id*='sac-suggestion-row']")).toHaveCount(countOfOptions);

    const optionName= await page.locator("[id*='sac-suggestion-row']").allTextContents();
    console.log(optionName);

    await expect(page.locator("[id*='sac-suggestion-row']",{hasText : 'bookmark'}).first()).toBeVisible();

    // await page.locator("[id*='sac-suggestion-row']",{hasText : 'bookmark'}).first().click();

    const options= await page.locator("[id*='sac-suggestion-row']").all();

    for (const option of options) {

        const text = await option.textContent();

        if (text && text.toLowerCase().includes("bookmark")) {

            await option.click();
            break;
        }
    }

    // await page.close();
});