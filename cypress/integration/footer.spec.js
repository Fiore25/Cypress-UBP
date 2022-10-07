/// <reference types="cypress" />
import HeaderPage from "../pages/header.js";
import menuOptions from "../fixtures/footer.json";

describe("Menu del Footer", () => {
  beforeEach(() => {
    cy.visit("https://www.opencart.com/");
  });

  it("Menu - Using Array", () => {
    const header = new HeaderPage();

    const buttons = [
      "OpenCart",
      "Company",
      "Support",
      "Resources"
    ];

    for (let i = 0; i < buttons.length; i++) {
      header.getMainMenu().eq(i).should("include.text", buttons[i]);
    }
  });

  it("Menu - Obtain TEXT of each item of menu", () => {
    const header = new HeaderPage();
    let menuOp;

    for (let i = 0; i < 8; i++) {
      header
        .getMainMenu()
        .eq(i)
        .then((element) => {
          menuOp = element.text();
          cy.log(menuOp);
        });
    }
  });

  it("Menu - Using Fixture (With objects)", () => {
    const header = new HeaderPage();

    Object.entries(menuOptions).forEach(([key, value], $index) => {
      cy.log("Key: " + key);
      cy.log("Value: " + value);
      header.getMainMenu().eq($index).trigger("mouseover");
    });
  });
});