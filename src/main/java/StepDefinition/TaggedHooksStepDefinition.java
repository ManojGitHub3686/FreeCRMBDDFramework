package StepDefinition;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class TaggedHooksStepDefinition {
	//Global Hooks
	@Before
	public void setUp() {
		System.out.println("Launch FF");
		System.out.println("Enter URL for Free CRM App");
	}	
	@After
	public void tearDown() {
		System.out.println("Close the browser");
	}
	//Local - only for first scenario
	@Before({"@First"})
	public void beforeFirst() {
		System.out.println("before: only for first scenario");
	}
	//Local - only for first scenario
	@After({"@First"})
	public void afterFirst() {
		System.out.println("after: only first scenario");
	}

	@Given("^this is given stepone$")
	public void this_is_given_stepone() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Given Step One");
	}
	@When("^this is when stepone$")
	public void this_is_when_stepone() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("When Step One");
	}
	@Then("^this then stepone$")
	public void this_then_stepone() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Then Step One");
	}

	@Given("^this is given steptwo$")
	public void this_is_given_steptwo() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Given Step Two");
	}
	@When("^this is when steptwo$")
	public void this_is_when_steptwo() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("When Step Two");
	}
	@Then("^this then steptwo$")
	public void this_then_steptwo() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Then Step Two");
	}

	@Given("^this is given stepthree$")
	public void this_is_given_stepthree() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Given Step Three");
	}
	@When("^this is when stepthree$")
	public void this_is_when_stepthree() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("When Step Three");
	}
	@Then("^this then stepthree$")
	public void this_then_stepthree() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("Then Step Three");
	}

}
