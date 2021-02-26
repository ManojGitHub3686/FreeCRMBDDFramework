package StepDefinition;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepDefinition {
	
	WebDriver driver;
	
	@Given("^User is already on login page$")
	public void user_already_on_login_page() {
		
		System.setProperty("webdriver.chrome.driver", "C:\\Selenium\\chromedriver.exe");
		driver = new ChromeDriver();
		
		driver.manage().window().maximize();
		driver.get("https://ui.cogmento.com/");
		
	}
	
	@When("^Title of the page is Cogmento CRM$")
	public void user_title_verification() {
		
		String title = driver.getTitle();
		System.out.println("Title of the page : " +title);
		
		Assert.assertEquals("Cogmento CRM", title);
		
		
	}
	//Regular Expression
	// 1. \"([^\"]*)\" or 2. \"(.*)\"
	@And("^User enters \"(.*)\" in E-mail address textbox and \"(.*)\" in Password textbox$")
	public void user_enters_credentials_login(String username, String password) {
		driver .findElement(By.name("email")).sendKeys(username);
		driver.findElement(By.name("password")).sendKeys(password);
		driver.findElement(By.xpath("//div[@class = 'ui fluid large blue submit button']")).click();

	}
	
	@Then("^Verify login successfully and Verfiy Home page tile$")
	public void user_login_FreeCRM() {
		
		String hTitle = driver.getTitle();
		System.out.println("Home page Title : " +hTitle);
		Assert.assertEquals("Incorrect Title", "Cogmento CRM", hTitle);
	}
	@When("^User clicks on contacts link and clicks on New button$")
	public void create_new_button() throws InterruptedException {
		
		Thread.sleep(1000);
		driver.findElement(By.xpath("//span[contains(text(),'Contacts')]")).click();
		Thread.sleep(1000);
		driver.findElement(By.xpath("//body/div[@id='ui']/div[1]/div[2]/div[2]/div[1]/div[1]/div[2]/div[1]/a[1]/button[1]")).click();
		
	}
	@And("^Enter \"(.*)\", \"(.*)\" and \"(.*)\" and click Save button$")
	public void enter_contact_information(String firstname, String lastname, String email) throws InterruptedException {
		
		Thread.sleep(1000);
		WebElement fname = driver.findElement(By.name("first_name"));
		new Actions(driver).moveToElement(fname).click().build().perform();
		driver.findElement(By.name("first_name")).sendKeys(firstname);
		driver.findElement(By.name("last_name")).sendKeys(lastname);
		driver.findElement(By.xpath("//input[@name='value' and @placeholder='Email address'] ")).sendKeys(email);
		driver.findElement(By.xpath("//i[@class='save icon'] ")).click();
	}
	@Then("^contact got saved successfully and verfiy contact$")
	public void contact_saved_and_verified() throws InterruptedException {
		
		Thread.sleep(1000);
		boolean b1 = driver.findElement(By.xpath("//body/div[@id='ui']/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[5]/div[2]/a[1]/div[1]")).isDisplayed();
		  
		Assert.assertEquals(b1, true);
	}
	
	@And("^Close the browser$")
	public void close_browser() throws InterruptedException {
		
		Thread.sleep(1000);
		driver.close();

	}
}
