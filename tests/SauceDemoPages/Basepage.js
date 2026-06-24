const {Page} = require('@playwright/test');

class BasePage {
  page;
  constructor(page) {
    // The underscore signals: "Do not touch this from outside!"
    this._page = page; 
  }

  async navigate( url){
    await this._page.goto(url);
  }

  async waitForPageLoad(){
    await this._page.waitForLoadState('load');
  }
}

module.exports = { BasePage };
