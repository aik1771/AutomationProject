$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("darksky.feature");
formatter.feature({
  "line": 2,
  "name": "Heroku Search Feature",
  "description": "",
  "id": "heroku-search-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@darsky"
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
  "name": "User is on the DarkSky page",
  "keyword": "Given "
});
formatter.match({
  "location": "DarkSkySD.userIsOnTheDarkSkyPage()"
});
formatter.result({
  "duration": 4782311317,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify Time Machine Calendar",
  "description": "",
  "id": "heroku-search-feature;verify-time-machine-calendar",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I click on Time Machine",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify date is selected to todays date",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkSkySD.iClickOnTimeMachine()"
});
formatter.result({
  "duration": 5111417710,
  "status": "passed"
});
formatter.match({
  "location": "DarkSkySD.iVerifyDateIsSelectedToTodaysDate()"
});
formatter.result({
  "duration": 88927687,
  "status": "passed"
});
});