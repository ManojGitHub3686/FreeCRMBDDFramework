Feature: Free CRM app test 

Scenario: Free CRM create deal test 
	Given user is on deal page 
	When user enter the deals details 
	Then deal is created 
	
Scenario: Free CRM create contact test 
	Given user is on contact page 
	When user enter the contact details 
	Then contact is created 
	
Scenario Outline: Free CRM create mail test 
	Given user is on mail page 
	When user enter the mail details 
	Then mail is created 
	
	Examples:
		|mail|
		|mail1|
		|mail2|