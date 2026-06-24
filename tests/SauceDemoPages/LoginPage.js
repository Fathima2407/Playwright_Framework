const {Page} = require('@playwright/test');
const {BasePage} = require('./Basepage');

class Login extends BasePage{
    constructor(page){
        super(page);
    }
    
    #userNameField = "#user-name";
    #passwordField = "#password";
    #loginButton = "#login-button";

    //--> # indicates the private feilds


    async logintoSauceDemo(userName, passwrod){
        await this._page.fill(this.#userNameField, userName);
        await this._page.fill(this.#passwordField, passwrod);
        await this._page.click(this.#loginButton);
    }
}

module.exports = { Login };