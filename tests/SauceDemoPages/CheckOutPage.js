import { test } from '@playwright/test';
import { BasePage } from './Basepage.js';

class CheckOutPage extends BasePage{
    constructor(page){
        super(page);
    }
    #itemName ='.inventory_item_name';

    async getProductNameInCart(){
        return (await this._page.locator(this.#itemName).innerText())?.trim() || '';z
    }

}
export { CheckOutPage };
