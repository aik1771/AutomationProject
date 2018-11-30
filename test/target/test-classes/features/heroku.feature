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

@invalid_login
Scenario: Verify invalid email on registration
Given I am on Registration page
When I enter name as "testuser" email as "test@@@" and password as "test12345"
And I click on submit button
Then I verify invalid email address



@getPageData
Scenario: Total Number of Poasts
Given I am on home page of heroku
Then I verify 56 total post is displayed
And I verify all post has price tag
And I verify all post has title
And  I verify all post has displayed image

