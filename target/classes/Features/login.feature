Feature: Free CRM Login functionality

#Without Examples Keyword
#Scenario: Free CRM Login Test
#
#Given User is already on login page
#When Title of the page is Cogmento CRM
#And User enters "bhagwatmanoj3@gmail.com" in E-mail address textbox and "Manoj123" in Password textbox
#Then Verify login successfully and Verfiy Home page tile
#And Close the browser

#With Examples Keyword
Scenario Outline: Free CRM Login Test

Given User is already on login page
When Title of the page is Cogmento CRM
And User enters "<username>" in E-mail address textbox and "<password>" in Password textbox
Then Verify login successfully and Verfiy Home page tile
And Close the browser
Examples:
|username	|password	|
|bhagwatmanoj3@gmail.com|Manoj123|
#|manojbhagwat3@gmail.com|Manoj123|