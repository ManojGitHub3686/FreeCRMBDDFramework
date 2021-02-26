Feature: Deal data creation

Scenario: Create deal

Given User is already on login page for deal
When Title of the page is Cogmento CRM for deal
And User enters username in E-mail address textbox and password in Password textbox
|bhagwatmanoj3@gmail.com|Manoj123|

When User clicks on Deals link and clicks on New button
And Enter title and click Save button
|master|

Then deal got saved successfully and verfiy title
And Close the browser for deal