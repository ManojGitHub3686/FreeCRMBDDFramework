Feature: Deal data creation 

Scenario: Create deal using map

	Given User is already on login page for deal map
	When Title of the page is Cogmento CRM for deal map
	And User enters username in E-mail address textbox and password in Password textbox map 
		|username					|password	|
		|bhagwatmanoj3@gmail.com	|Manoj123	|
		
	When User clicks on Deals link and clicks on New button map
	And Enter title and click Save button map
		|title	|
		|Master	|
		|Mr.	|
		|Mrs.	|
		
	Then deal got saved successfully and verfiy title map
	And Close the browser for deal map