const {Page} = require('@playwright/test');
const {BasePage} =require('./Basepage');

class Products extends BasePage{
    constructor(page){
        super(page);
    }
    #productText = ".title";
    #logo = ".app_logo";
    #productList = ".inventory_item";
    #productTitle = ".inventory_item_name";
    #productDesc = ".inventory_item_desc";
    #productPrice = ".inventory_item_price";
    #addToCart = ".btn_primary.btn_small.btn_inventory";
    #checkOut = ".shopping_cart_link";

    async isProductFieldVisible() {
        return await this._page.locator(this.#productText).isVisible();
    }
    
    async isLogoVisible() {
        return await this._page.locator(this.#logo).isVisible();
    }

    async validateProductDetails(){
        const product = await this._page.locator(this.#productList).count();
        console.log(`Total products found ${product}`);

        for(let i=0;i<product;i++){
            const title = await this._page.locator(this.#productList).nth(i).locator(this.#productTitle).innerText();
            console.log(`Product title ${i+1} is : ${title}`);
            if(!title){
                throw new Error(`Product ${i+1} is missing title`);
            }

            const description = await this._page.locator(this.#productList).nth(i).locator(this.#productDesc).innerText();
            console.log(`Product description ${i+1} is : ${description}`);
            if(!description){
                throw new Error(`Product ${i+1} is missing description`);
            }

            const price = await this._page.locator(this.#productList).nth(i).locator(this.#productPrice).innerText();
            console.log(`Product price ${i+1} is : ${price}`);
            if(!price){
                throw new Error(`Product ${i+1} is missing price`);
            }

            const addtocart = await this._page.locator(this.#productList).nth(i).locator(this.#addToCart).innerText();
            console.log(`Product addtocart ${i+1} is : ${addtocart}`);
            if(!addtocart){
                throw new Error(`Product ${i+1} is missing add to cart button`);
            }
        }

    }
    async addToCartByProductName(targetProductName){
        const productNameCount = await this._page.locator(this.#productList).count();
        console.log(productNameCount);
        for(let i=0;i<productNameCount;i++){
            const product = await this._page.locator(this.#productList).nth(i);
            const name=await product.locator(this.#productTitle).innerText();
            console.log(name);
            if(name.trim() === targetProductName){
                await product.locator(this.#addToCart).click();
                console.log(`Product ${targetProductName} is added to the cart`);
                return 
            }


        }
        throw new Error(`Product ${targetProductName} is not found on the page`);
    }

    async clickOnCheckOut(){
        await this._page.locator(this.#checkOut).click();
    }
}

module.exports = {Products};