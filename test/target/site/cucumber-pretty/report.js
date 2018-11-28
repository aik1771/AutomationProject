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
  "duration": 3662814996,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verified dropdown text",
  "description": "",
  "id": "heroku-search-feature;verified-dropdown-text",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@dropdown_text"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I search on top search bar with text \"ios\"",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I verify \"Title: I will teach you iOS\" as displayed result",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ios",
      "offset": 38
    }
  ],
  "location": "HerokuSD.iSearchOnTopSearchBarWithText(String)"
});
formatter.result({
  "duration": 13220403714,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Title: I will teach you iOS",
      "offset": 10
    }
  ],
  "location": "HerokuSD.iVerifyAsDisplayedResult(String)"
});
formatter.result({
  "duration": 3066130858,
  "status": "passed"
});
});