Feature: New Registration


Scenario Outline: As a stakeholder, I want to be able to create a registration successfully with password including:character long,one number & one special character.

    Given I launch the url 'https://moneygaming.qa.gameaccount.com' 
    And   I select the 'JOIN NOW' button
    And The page is displayed as expected
    When I fill in the required boxes
    And I fill in the password boxes with 'pas_12'
    And I click on 'JOIN NOW' button
    Then I should be successfully registered.


Scenario Outline: As a stakeholder, I want an error message when I try to register using less than 6 character long, no number & no special character in the 'password boxes'.

    Given I launch the url 'https://moneygaming.qa.gameaccount.com'
    And   I select the 'JOIN NOW' button
    And The page is displayed as expected
    When I fill in the required boxes
    And I fill in the password boxes with 'pass'
    And I click on 'JOIN NOW' button
    Then An error should be thrown and I must not be able to register
