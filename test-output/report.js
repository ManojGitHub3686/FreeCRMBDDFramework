$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Selenium_Workspace/FreeCRMBDDFramework/src/main/java/Features/dealsmap.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Create deal using map",
  "description": "",
  "id": "deal-data-creation;create-deal-using-map",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page for deal map",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the page is Cogmento CRM for deal map",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters username in E-mail address textbox and password in Password textbox map",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8
    },
    {
      "cells": [
        "bhagwatmanoj3@gmail.com",
        "Manoj123"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User clicks on Deals link and clicks on New button map",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Enter title and click Save button map",
  "rows": [
    {
      "cells": [
        "title"
      ],
      "line": 13
    },
    {
      "cells": [
        "Master"
      ],
      "line": 14
    },
    {
      "cells": [
        "Mr."
      ],
      "line": 15
    },
    {
      "cells": [
        "Mrs."
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "deal got saved successfully and verfiy title map",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Close the browser for deal map",
  "keyword": "And "
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_already_on_login_page_deal()"
});
formatter.result({
  "duration": 11778801800,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_title_verification_deal()"
});
formatter.result({
  "duration": 13353400,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.user_enters_credentials_login_deal(DataTable)"
});
formatter.result({
  "duration": 426942700,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.create_new_button_deal()"
});
formatter.result({
  "duration": 2430682200,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.enter_deal_information(DataTable)"
});
formatter.result({
  "duration": 12015145900,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.deal_saved_and_verified()"
});
formatter.result({
  "duration": 1031923100,
  "status": "passed"
});
formatter.match({
  "location": "DealStepWithMapDefinition.close_browser()"
});
formatter.result({
  "duration": 1261141200,
  "status": "passed"
});
});