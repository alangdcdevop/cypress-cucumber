import { Given, Then } from "cypress-cucumber-preprocessor/steps";

const url = "https://www.devserenaandlily.com/account?dwcont=C9623832";
Given("I open Google page", () => {
  cy.visit(url);
});

Then(`I see {string} in the title`, (title) => {
  cy.title().should("include", title);
});
