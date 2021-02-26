Feature: Free CRM Create New Contacts

Scenario Outline: Create new contacts

Given User is already on login page
When Title of the page is Cogmento CRM
And User enters "<username>" in E-mail address textbox and "<password>" in Password textbox
Then Verify login successfully and Verfiy Home page tile
When User clicks on contacts link and clicks on New button
And Enter "<firstname>", "<lastname>" and "<email>" and click Save button
Then contact got saved successfully and verfiy contact
And Close the browser


Examples:
|username|password|firstname|lastname|email|
|bhagwatmanoj3@gmail.com|Manoj123|tom|ram|tom@ram.com|
|bhagwatmanoj3@gmail.com|Manoj123|sham|jam|sham@jam.com|