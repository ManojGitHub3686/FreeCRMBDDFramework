$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("contacts.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Create New Contacts",
  "description": "",
  "id": "free-crm-create-new-contacts",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Create new contacts",
  "description": "",
  "id": "free-crm-create-new-contacts;create-new-contacts",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"\u003cusername\u003e\" in E-mail address textbox and \"\u003cpassword\u003e\" in Password textbox",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify login successfully and Verfiy Home page tile",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on contacts link and clicks on New button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Enter \"\u003cfirstname\u003e\", \"\u003clastname\u003e\" and \"\u003cemail\u003e\" and click Save button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "contact got saved successfully and verfiy contact",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "free-crm-create-new-contacts;create-new-contacts;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "email"
      ],
      "line": 16,
      "id": "free-crm-create-new-contacts;create-new-contacts;;1"
    },
    {
      "cells": [
        "bhagwatmanoj3@gmail.com",
        "Manoj123",
        "tom",
        "ram",
        "tom@ram.com"
      ],
      "line": 17,
      "id": "free-crm-create-new-contacts;create-new-contacts;;2"
    },
    {
      "cells": [
        "bhagwatmanoj3@gmail.com",
        "Manoj123",
        "sham",
        "jam",
        "sham@jam.com"
      ],
      "line": 18,
      "id": "free-crm-create-new-contacts;create-new-contacts;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Create new contacts",
  "description": "",
  "id": "free-crm-create-new-contacts;create-new-contacts;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"bhagwatmanoj3@gmail.com\" in E-mail address textbox and \"Manoj123\" in Password textbox",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify login successfully and Verfiy Home page tile",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on contacts link and clicks on New button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Enter \"tom\", \"ram\" and \"tom@ram.com\" and click Save button",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "contact got saved successfully and verfiy contact",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 10883283400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_title_verification()"
});
formatter.result({
  "duration": 14580700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhagwatmanoj3@gmail.com",
      "offset": 13
    },
    {
      "val": "Manoj123",
      "offset": 69
    }
  ],
  "location": "LoginStepDefinition.user_enters_credentials_login(String,String)"
});
formatter.result({
  "duration": 438606700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_login_FreeCRM()"
});
formatter.result({
  "duration": 6884800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.create_new_button()"
});
formatter.result({
  "duration": 2482620100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 7
    },
    {
      "val": "ram",
      "offset": 14
    },
    {
      "val": "tom@ram.com",
      "offset": 24
    }
  ],
  "location": "LoginStepDefinition.enter_contact_information(String,String,String)"
});
formatter.result({
  "duration": 2769871300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.contact_saved_and_verified()"
});
formatter.result({
  "duration": 1082834800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//body/div[@id\u003d\u0027ui\u0027]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[5]/div[2]/a[1]/div[1]\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027WL350215\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d87.0.4280.88 (89e2380a3e36c3464b5dd1302349b1382549290d-refs/branch-heads/4280@{#1761}), userDataDir\u003dC:\\Users\\bhagwman\\AppData\\Local\\Temp\\scoped_dir66264_56506791}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:1084}, acceptInsecureCerts\u003dfalse, browserVersion\u003d88.0.4324.182, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: ae3a3f8141d2bbb22c53360a57fbff74\n*** Element info: {Using\u003dxpath, value\u003d//body/div[@id\u003d\u0027ui\u0027]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/div[1]/div[1]/div[5]/div[2]/a[1]/div[1]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat StepDefinition.LoginStepDefinition.contact_saved_and_verified(LoginStepDefinition.java:82)\r\n\tat ✽.Then contact got saved successfully and verfiy contact(contacts.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "Create new contacts",
  "description": "",
  "id": "free-crm-create-new-contacts;create-new-contacts;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Title of the page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters \"bhagwatmanoj3@gmail.com\" in E-mail address textbox and \"Manoj123\" in Password textbox",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Verify login successfully and Verfiy Home page tile",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User clicks on contacts link and clicks on New button",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "Enter \"sham\", \"jam\" and \"sham@jam.com\" and click Save button",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "contact got saved successfully and verfiy contact",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 9789109500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_title_verification()"
});
formatter.result({
  "duration": 25110500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhagwatmanoj3@gmail.com",
      "offset": 13
    },
    {
      "val": "Manoj123",
      "offset": 69
    }
  ],
  "location": "LoginStepDefinition.user_enters_credentials_login(String,String)"
});
formatter.result({
  "duration": 379963800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_login_FreeCRM()"
});
formatter.result({
  "duration": 16110200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.create_new_button()"
});
formatter.result({
  "duration": 1036431000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027Contacts\u0027)]\"}\n  (Session info: chrome\u003d88.0.4324.182)\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.5.3\u0027, revision: \u0027a88d25fe6b\u0027, time: \u00272017-08-29T12:42:44.417Z\u0027\nSystem info: host: \u0027WL350215\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002715.0.1\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d87.0.4280.88 (89e2380a3e36c3464b5dd1302349b1382549290d-refs/branch-heads/4280@{#1761}), userDataDir\u003dC:\\Users\\bhagwman\\AppData\\Local\\Temp\\scoped_dir61620_339998891}, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, pageLoadStrategy\u003dnormal, unhandledPromptBehavior\u003ddismiss and notify, strictFileInteractability\u003dfalse, platform\u003dXP, proxy\u003dProxy(), goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:1126}, acceptInsecureCerts\u003dfalse, browserVersion\u003d88.0.4324.182, browserName\u003dchrome, javascriptEnabled\u003dtrue, platformName\u003dXP, setWindowRect\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: b393e960a6e2b2fc53c21d4831e34f7c\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027Contacts\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:185)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:120)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:646)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:416)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:518)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:408)\r\n\tat StepDefinition.LoginStepDefinition.create_new_button(LoginStepDefinition.java:62)\r\n\tat ✽.When User clicks on contacts link and clicks on New button(contacts.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "sham",
      "offset": 7
    },
    {
      "val": "jam",
      "offset": 15
    },
    {
      "val": "sham@jam.com",
      "offset": 25
    }
  ],
  "location": "LoginStepDefinition.enter_contact_information(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.contact_saved_and_verified()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login functionality",
  "description": "",
  "id": "free-crm-login-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#Without Examples Keyword"
    },
    {
      "line": 4,
      "value": "#Scenario: Free CRM Login Test"
    },
    {
      "line": 5,
      "value": "#"
    },
    {
      "line": 6,
      "value": "#Given User is already on login page"
    },
    {
      "line": 7,
      "value": "#When Title of the page is Cogmento CRM"
    },
    {
      "line": 8,
      "value": "#And User enters \"bhagwatmanoj3@gmail.com\" in E-mail address textbox and \"Manoj123\" in Password textbox"
    },
    {
      "line": 9,
      "value": "#Then Verify login successfully and Verfiy Home page tile"
    },
    {
      "line": 10,
      "value": "#And Close the browser"
    },
    {
      "line": 12,
      "value": "#With Examples Keyword"
    }
  ],
  "line": 13,
  "name": "Free CRM Login Test",
  "description": "",
  "id": "free-crm-login-functionality;free-crm-login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Title of the page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters \"\u003cusername\u003e\" in E-mail address textbox and \"\u003cpassword\u003e\" in Password textbox",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify login successfully and Verfiy Home page tile",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "free-crm-login-functionality;free-crm-login-test;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 21,
      "id": "free-crm-login-functionality;free-crm-login-test;;1"
    },
    {
      "cells": [
        "bhagwatmanoj3@gmail.com",
        "Manoj123"
      ],
      "line": 22,
      "id": "free-crm-login-functionality;free-crm-login-test;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 22,
  "name": "Free CRM Login Test",
  "description": "",
  "id": "free-crm-login-functionality;free-crm-login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "User is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "Title of the page is Cogmento CRM",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "User enters \"bhagwatmanoj3@gmail.com\" in E-mail address textbox and \"Manoj123\" in Password textbox",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "Verify login successfully and Verfiy Home page tile",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginStepDefinition.user_already_on_login_page()"
});
formatter.result({
  "duration": 10080683800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_title_verification()"
});
formatter.result({
  "duration": 12056700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "bhagwatmanoj3@gmail.com",
      "offset": 13
    },
    {
      "val": "Manoj123",
      "offset": 69
    }
  ],
  "location": "LoginStepDefinition.user_enters_credentials_login(String,String)"
});
formatter.result({
  "duration": 432985800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.user_login_FreeCRM()"
});
formatter.result({
  "duration": 9766900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefinition.close_browser()"
});
formatter.result({
  "duration": 1348439000,
  "status": "passed"
});
});