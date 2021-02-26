package StepDefinition;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import org.openqa.selenium.chrome.ChromeDriver;


import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DealStepDefinition {
	WebDriver driver;
	
	@Given("^User is already on login page for deal$")
	public void user_already_on_login_page_deal() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver.exe");
		driver = new ChromeDriver();
		
		driver.manage().window().maximize();
		driver.get("https://ui.cogmento.com/");
		
	}
	
	@When("^Title of the page is Cogmento CRM for deal$")
	public void user_title_verification_deal() {
		
		String title = driver.getTitle();
		System.out.println("Title of the page : " +title);
		
		Assert.assertEquals("Cogmento CRM", title);
		
		
	}
	
	@And("^User enters username in E-mail address textbox and password in Password textbox$")
	public void user_enters_credentials_login_deal(DataTable credentials) {
		List<List<String>> data = credentials.raw();
		driver .findElement(By.name("email")).sendKeys(data.get(0).get(0));
		driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
		driver.findElement(By.xpath("//div[@class = 'ui fluid large blue submit button']")).click();

	}
	
	@When("^User clicks on Deals link and clicks on New button$")
	public void create_new_button_deal() throws InterruptedException {
		
		Thread.sleep(1000);
		driver.findElement(By.xpath("//span[contains(text(),'Deals')]")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//body/div[@id='ui']/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/a[3]/button[1]")).click();
		
	}
	@And("^Enter title and click Save button$")
	public void enter_deal_information(DataTable deal) throws InterruptedException {
		
		List<List<String>> title = deal.raw();
		Thread.sleep(1000);
		
		driver.findElement(By.xpath("//input[@name='title']")).sendKeys(title.get(0).get(0));
		driver.findElement(By.xpath("//i[@class='save icon'] ")).click();
	}
	@Then("^deal got saved successfully and verfiy title$")
	public void deal_saved_and_verified() throws InterruptedException {
		
		Thread.sleep(1000);
		String pTitle = driver.getTitle();
		
			  
		Assert.assertEquals("Cogmento CRM", pTitle);;
	}
	
	@And("^Close the browser for deal$")
	public void close_browser() throws InterruptedException {
		
		Thread.sleep(1000);
		driver.close();

	}
}
