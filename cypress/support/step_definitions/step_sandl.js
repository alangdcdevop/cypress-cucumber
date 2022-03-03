import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";


Given("I open {url} url", (url) => {
  cy.visit(url);
});

Given("I click on {string} button",  (button) => {
  cy.get(button).click() // Click on button
});

Given("I complete field {field} with {data}",  (field, data) => {
  cy.get(field).type(data)
});




Then("I open {url} url", (url) => {
  cy.visit(url);
});

Then("I click on {string} button",  (button) => {
  cy.get(button).click() // Click on button
});

Then("I complete field {field} with {data}",  (field, data) => {
  cy.get(field).type(data)
});


When("I open {url} url", (url) => {
  cy.visit(url);
});

When("I click on {string} button",  (button) => {
  cy.get(button).click() // Click on button
});

When("I complete field {field} with {data}",  (field, data) => {
  cy.get(field).type(data)
});

