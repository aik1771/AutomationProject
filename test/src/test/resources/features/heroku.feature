@heroku @web
Feature: Heroku Search Feature

Background:
   Given User is on the Threely login page
@valid_login
Scenario: Verify valid login
When I enter username as "wek_92@yahoo.com" and password as "aik1771"
And I click on submit button
Then I verify logout button is displayed 

@dropdown_text
Scenario: Verified dropdown text
When I search on top search bar with text "ios"
Then I verify "Title: I will teach you iOS" as displayed result 