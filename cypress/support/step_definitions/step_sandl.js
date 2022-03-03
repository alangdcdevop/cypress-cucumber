// import { Given, Then, When } from "cypress-cucumber-preprocessor/steps";

// const url=""

import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then } from "cypress-cucumber-preprocessor/steps";


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

Then("I see element {string} with text {string}",  (element, text) => {
  cy.get(element).type(text)
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

