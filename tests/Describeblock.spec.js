const {test, expect,Page} = require('@playwright/test');

async function login( page) {
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("standard_user");
    await page.locator("#password").fill("secret_sauce");
    await page.locator("#login-button").click();
    await page.waitForSelector(".title");
}

test.describe("Login Functionality" , ()=>{
    test('Valid Credentials', async({page})=>{
        
        await login(page);
        await expect(page.locator(".title")).toHaveText("Products");
    });

    test('InValid Credentials', async({page})=>{
        await page.goto("https://www.saucedemo.com/");
        await page.locator("#user-name").fill("standard_user");
        await page.locator("#password").fill("secret_sauce123_wrong");
        await page.locator("#login-button").click();
        await page.waitForSelector("h3[data-test='error']");
        await expect(page.locator("h3[data-test='error']")).toContainText("do not match");
    });
})

test.describe("Product Page",()=>{
    test("add to cart",async({page})=>{
       
        await login(page);
        await expect(page.locator(".title")).toHaveText("Products");
        await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click();
        
    });

})

test.describe("Cart Page functionality",()=>{
    test("Validate cart page",async({page})=>{
       
            
            await login(page);
            await expect(page.locator(".title")).toHaveText("Products");
            await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click();
            await page.locator(".shopping_cart_link").click();
            await page.waitForSelector(".title");
            await expect(page.locator(".title")).toHaveText("Your Cart");
     
    })

    test("Validate Chechkout",async({page})=>{
            
            await login(page);
            await expect(page.locator(".title")).toHaveText("Products");
            await page.locator("#add-to-cart-sauce-labs-fleece-jacket").click();
            await page.locator(".shopping_cart_link").click();
            await page.waitForSelector("#checkout");
            await expect(page.locator("#checkout")).toHaveText("Checkout");
    
    })
})

// different ways to execute describe blocks
// --> 1) .only method
// --> 2) using the command {npx playwright test -g "Describe block name" --project=chromium --headed} where g means grab