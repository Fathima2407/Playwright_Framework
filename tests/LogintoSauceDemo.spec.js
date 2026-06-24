const {test,expect} = require('@playwright/test');
const {Login} = require('./SauceDemoPages/LoginPage');
const {Products} = require('./SauceDemoPages/Products');
const {CheckOutPage } = require('./SauceDemoPages/CheckOutPage');

test(" USer should be able to login ",async({page})=>{
    const login = new Login(page);
    // by using new keyword, we can create the object to the class

    await login.navigate("https://www.saucedemo.com/");
    await login.waitForPageLoad();
    await login.logintoSauceDemo("standard_user","secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");

    const product = new Products(page);

    const isProduct= await product.isProductFieldVisible();
    await expect(isProduct).toBeTruthy(); // toBeTruthy() is a jest Assertion, validates whether the assertion is true or false

    const isLogo = await product.isLogoVisible();
    await expect(isLogo).toBeTruthy();

    await product.validateProductDetails();

    await product.addToCartByProductName("Test.allTheThings() T-Shirt (Red)");

    const check =new CheckOutPage(page);

    await product.clickOnCheckOut();
    const productName = await check.getProductNameInCart();

    await expect(productName).toBe("Test.allTheThings() T-Shirt (Red)");

})