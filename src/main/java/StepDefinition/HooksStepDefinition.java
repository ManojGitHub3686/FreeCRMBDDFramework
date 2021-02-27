package StepDefinition;


import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class HooksStepDefinition {

	@Before
	public void setUp() {
		System.out.println("Launch FF");
		System.out.println("Enter URL for Free CRM App");
	}
	
	@After
	public void tearDown() {
		System.out.println("Close the browser");
	}
	
	@Given("^user is on deal page$")
	public void user_is_on_deal_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("User is on deal page");
	}

	@When("^user enter the deals details$")
	public void user_enter_the_deals_details() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("User enters the deal details");
	}

	@Then("^deal is created$")
	public void deal_is_created() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Deals created");
	}
	
	@Given("^user is on contact page$")
	public void user_is_on_contact_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("User is on contact page");
	}

	@When("^user enter the contact details$")
	public void user_enter_the_contact_details() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("User enters the contact details");
	}

	@Then("^contact is created$")
	public void contact_is_created() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Contact created");
	}

	@Given("^user is on mail page$")
	public void user_is_on_mail_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("User is on mail page");
	}

	@When("^user enter the mail details$")
	public void user_enter_the_mail_details() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("User enters the mail details");
	}

	@Then("^mail is created$")
	public void mail_is_created() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Mail created");
	}


}
