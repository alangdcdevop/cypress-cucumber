// import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

// const url=""

import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I see {string} in the title`, (title) => {
  // cy.title().should('include', title)
  // cy.get('.gLFyf').click()
  cy.get('.gLFyf').type("Cartman")
  cy.get('.CqAVzb > center > .gNO89b').click()
 
})
const url = 'https://google.com'
Given('I open Google page', () => {
  cy.visit(url)

})

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})

Given("I open {string} url", (url) => {
  cy.visit(url);
});

Given("I click on {string} button",  (button) => {
  cy.get(button).click() // Click on button
});

Given("I complete field {string} with {string}",  (field, data) => {
  cy.get(field).type(data)
});




Then("I open {string} url", (url) => {
  cy.visit(url);
});

Then("I click on {string} button",  (button) => {
  cy.get(button).click() // Click on button
});

Then("I complete field {string} with {string}",  (field, data) => {
  cy.get(field).type(data)
});


When("I open {string} url", (url) => {
  cy.visit(url);
});

When("I click on {string} button",  (button) => {
  cy.get(button).click() // Click on button
});

When("I complete field {string} with {string}",  (field, data) => {
  cy.get(field).type(data)
});


// cy.get('.gLFyf')

// cy.get('.FPdoLc > center > .gNO89b')