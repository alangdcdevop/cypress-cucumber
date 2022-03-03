Feature: Google Main Page

  I want to open a search engine
  
  Scenario: Opening a search engine page
    Given I open Google page
    Then I see "Google" in the title

    # input

    # Eric Cartman | Wiki South Park
    # body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b
    