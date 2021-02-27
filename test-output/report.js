$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Selenium_Workspace/FreeCRMBDDFramework/src/main/java/Features/tagging.feature");
formatter.feature({
  "line": 2,
  "name": "Free CRM application testing",
  "description": "",
  "id": "free-crm-application-testing",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "line": 11,
  "name": "Validate login with invalid credentials",
  "description": "",
  "id": "free-crm-application-testing;validate-login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user is on login page and having invalid login credentials",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User enters the invalid login credentials",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User not able to login to application",
  "keyword": "Then "
});
formatter.match({
  "location": "TaggingStepDefinition.user_is_on_login_page_and_having_invalid_login_credentials()"
});
formatter.result({
  "duration": 363193800,
  "status": "passed"
});
formatter.match({
  "location": "TaggingStepDefinition.user_enters_the_invalid_login_credentials()"
});
formatter.result({
  "duration": 31100,
  "status": "passed"
});
formatter.match({
  "location": "TaggingStepDefinition.user_not_able_to_login_to_application()"
});
formatter.result({
  "duration": 33400,
  "status": "passed"
});
});