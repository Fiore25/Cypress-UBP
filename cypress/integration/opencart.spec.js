/// <reference types="cypress" />
import OpenCartPage from "../pages/opencart";

describe("Test de Página OpenCart", () => {
  it("Llamada a servicio: /resources", { tags: ["@regression", "@smoke"] }, () => {
    cy.callService("resources", "contact us");
  });

  it("Llamada a servicio: /download", () => {
    cy.callService("download");
  });

  it("Verificar las cards de los espectáculos", { tags: "@regression" }, () => {
    const opencart = new OpenCartPage();

    cy.visit("https://www.opencart.com/index.php?route=common/home");

    cy.fixture("opencart/marketplace").then((fixture) => {
      fixture.Productos.forEach((infoProducto, $index) => {
        if ($index < 6) {
          opencart.getShowCard().eq($index).scrollIntoView();
          opencart
            .getShowCard()
            .eq($index)
            .matchImageSnapshot("Show_" + $index);
          opencart.getShowName().eq($index).should("have.text", infoProducto.Nombre);
          cy.wait(5);
          opencart
            .getShowImage()
            .eq($index)
            .should("have.attr", "src", infoProducto.Imagen);
          opencart.getShowImage().eq($index).trigger("mouseover");
          opencart
            .getShowDate()
            .should("be.visible")
            .and("contain.text", infoProducto.Fecha);
          opencart
            .getShowDate()
            .should("have.css", "background-color", "#fff");
        }
      });
    });
  });
});
