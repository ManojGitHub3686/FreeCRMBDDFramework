package StepDefinition;

import java.util.List;
import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

//data table with maps : for parameterization of test cases

public class DealStepWithMapDefinition {
	WebDriver driver;
	
	@Given("^User is already on login page for deal map$")
	public void user_already_on_login_page_deal() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver.exe");
		driver = new ChromeDriver();
		
		driver.manage().window().maximize();
		driver.get("https://ui.cogmento.com/");
		
	}
	
	@When("^Title of the page is Cogmento CRM for deal map$")
	public void user_title_verification_deal() {
		
		String title = driver.getTitle();
		System.out.println("Title of the page : " +title);
		
		Assert.assertEquals("Cogmento CRM", title);
		
		
	}
	
	@And("^User enters username in E-mail address textbox and password in Password textbox map$")
	public void user_enters_credentials_login_deal(DataTable credentials) {
		for (Map<String, String> data : credentials.asMaps(String.class, String.class)) {
			
			driver .findElement(By.name("email")).sendKeys(data.get("username"));
			driver.findElement(By.name("password")).sendKeys(data.get("password"));
			driver.findElement(By.xpath("//div[@class = 'ui fluid large blue submit button']")).click();
			
		}

	}
	
	@When("^User clicks on Deals link and clicks on New button map$")
	public void create_new_button_deal() throws InterruptedException {
		
		Thread.sleep(1000);
		driver.findElement(By.xpath("//span[contains(text(),'Deals')]")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//body/div[@id='ui']/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/a[3]/button[1]")).click();
		
	}
	@And("^Enter title and click Save button map$")
	public void enter_deal_information(DataTable deal) throws InterruptedException {
		
		Thread.sleep(1000);
		for (Map<String, String> dealdata : deal.asMaps(String.class, String.class)) {
		driver.findElement(By.xpath("//input[@name='title']")).sendKeys(dealdata.get("title"));
		driver.findElement(By.xpath("//i[@class='save icon'] ")).click();
		Thread.sleep(2000);
		driver.findElement(By.xpath("//span[contains(text(),'Deals')]")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//body/div[@id='ui']/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/a[3]/button[1]")).click();

		}
		
	}
	@Then("^deal got saved successfully and verfiy title map$")
	public void deal_saved_and_verified() throws InterruptedException {
		
		Thread.sleep(1000);
		String pTitle = driver.getTitle();
		
			  
		Assert.assertEquals("Cogmento CRM", pTitle);;
	}
	
	@And("^Close the browser for deal map$")
	public void close_browser() throws InterruptedException {
		
		Thread.sleep(1000);
		driver.close();

	}


}
