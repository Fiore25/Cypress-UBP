class headerLocators {
    constructor() {
      //Blue Bar
      this.loginRegisterBtn = "h3#btn btn-link navbar-btn";
      //Cart & currency
  
      //Submenu
      this.mainMenu = "nav#navbar navbar-default navbar-fixed-top";
      this.homeOptionsContainer = "ul#nav navbar-nav";
    }
  }
  
  export default class Header {
    constructor() {
      this.locators = new headerLocators();
    }
  
    getLoginRegisterButon() {
      return cy.get(this.locators.loginRegisterBtn);
    }
  
    getMainMenu() {
      return cy.get(this.locators.mainMenu);
    }
  
    getHomeOptionsContainer() {
      return cy.get(this.locators.homeOptionsContainer);
    }
  }