const {page,test} = require('@playwright/test');
const { BasePage } = require('./Basepage');

class CheckOutPage extends BasePage{
    constructor(page){
        super(page);
    }
    #itemName ='.inventory_item_name';

    async getProductNameInCart(){
        return (await this._page.locator(this.#itemName).innerText())?.trim() || '';z
    }

}
module.exports = {CheckOutPage};
