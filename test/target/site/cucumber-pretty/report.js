$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("heroku.feature");
formatter.feature({
  "line": 2,
  "name": "Heroku Search Feature",
  "description": "",
  "id": "heroku-search-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@heroku"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User is on the Threely login page",
  "keyword": "Given "
});
formatter.match({
  "location": "HerokuSD.iClickOnSubmitButton()"
});
formatter.result({
  "duration": 13352023348,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Verify valid login",
  "description": "",
  "id": "heroku-search-feature;verify-valid-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I enter username as “n12345@test.com” and password as “123456”",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click on submit button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I verify logout button is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});