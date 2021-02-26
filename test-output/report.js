$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Selenium_Workspace/FreeCRMBDDFramework/src/main/java/Features/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Create deal",
  "description": "",
  "id": "deal-data-creation;create-deal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page for deal",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the page is Cogmento CRM for deal",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username in E-mail address textbox and password in Password textbox",
  "rows": [
    {
      "cells": [
        "bhagwatmanoj3@gmail.com",
        "Manoj123"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User clicks on Deals link and clicks on New button",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "Enter title and click Save button",
  "rows": [
    {
      "cells": [
        "master"
      ],
      "line": 12
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "deal got saved successfully and verfiy title",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser for deal",
  "keyword": "And "
});
formatter.match({
  "location": "DealStepDefinition.user_already_on_login_page_deal()"
});
formatter.result({
  "duration": 12578402100,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_title_verification_deal()"
});
formatter.result({
  "duration": 20438900,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.user_enters_credentials_login_deal(DataTable)"
});
formatter.result({
  "duration": 532394300,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.create_new_button_deal()"
});
formatter.result({
  "duration": 2549637900,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.enter_deal_information(DataTable)"
});
formatter.result({
  "duration": 1361608600,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.deal_saved_and_verified()"
});
formatter.result({
  "duration": 1019273500,
  "status": "passed"
});
formatter.match({
  "location": "DealStepDefinition.close_browser()"
});
formatter.result({
  "duration": 1241073100,
  "status": "passed"
});
});