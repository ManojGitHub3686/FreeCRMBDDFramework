@FunctionalTest
Feature: Free CRM application testing

@SmokeTest @RegressionTest
Scenario: Validate login with valid credentials
Given user is on login page and having valid login credentials
When User enters the valid login credentials
Then User login into application successfully

@RegressionTest
Scenario: Validate login with invalid credentials
Given user is on login page and having invalid login credentials
When User enters the invalid login credentials
Then User not able to login to application

@SmokeTest
Scenario: Create a contact
Given User is on home page
When User enters contact details
Then Contact details saved successfully
@SmokeTest
Scenario: Create a deal
Given User is on deal page
When User enters deal details
Then Deal details saved successfully