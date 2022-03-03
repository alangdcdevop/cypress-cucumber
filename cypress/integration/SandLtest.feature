# Feature: Google Main Page

#   I want to open a search engine
  
#   Scenario: Opening a search engine page
#     Given I open "www.google.com" url
#     Then I complete field "input" with "Cartman"

#     # input

#     # Eric Cartman | Wiki South Park
#     # body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b
    
Feature: Google Main Page

  I want to open a search engine
  
  @focus
  Scenario: Opening a search engine page
    Given I open "https://www.serenaandlily.com/" url
    Then I complete field "#js-search > div > svg" with "Cart"
