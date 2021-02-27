package Runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Selenium_Workspace\\FreeCRMBDDFramework\\src\\main\\java\\Features\\tagging.feature",
				 glue={"StepDefinition"},
				 plugin= {"pretty", "html:test-output", "json:json-output/cucumber.json", "junit:junit-ouput/cucumber.xml"},
				 dryRun = false,
				 monochrome = true,
				 strict = true,
				 tags = {"~@SmokeTest", "@RegressionTest"}
				)


//features - Path of the feature files
//glue - path of the 'StepDefinition' package
//monochrome - display the console output in a proper readable format
//format - To generate the different types of reporting
//dryRun - To check the mapping is proper between feature file and step definition file
//strict - To check that any step is not defined in the step definition file
//tags - 
public class TestRunner {

}

//OR ed : tags = {"@SmokeTest, @RegressionTest"} --> Execute all tests tagged as @SmokeTest OR @RegressionTest
//AND ed: tags = {"@SmokeTest", "@RegressionTest"} --> Execute all tests tagged as @SmokeTest AND @RegressionTest