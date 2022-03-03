Feature: SandL Emmail subscription

  As a user i can complete email adress field and submit it.
  

  Scenario: I complete email field and i see GOOD THINGS ARE COMMING message
    Given I open "https://www.serenaandlily.com/" url
    When I complete field "#email-alert-signup-popup-address" with "alanmail@gmail.com"
    And I click on ".input-block > .signup-popup-button" button
    Then I see element "#email-alert-signup-popup-optin > :nth-child(2) > .headline" with text "GOOD THINGS ARE COMING"
