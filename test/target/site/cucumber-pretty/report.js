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
  "duration": 3137380687,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Total Number of Poasts",
  "description": "",
  "id": "heroku-search-feature;total-number-of-poasts",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 26,
      "name": "@getPageData"
    }
  ]
});
formatter.step({
  "line": 28,
  "name": "I am on home page of heroku",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I verify 56 total post is displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "I verify all post has price tag",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I verify all post has title",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify all post has displayed image",
  "keyword": "And "
});
formatter.match({
  "location": "HerokuSD.i_am_on_home_page_of_heroku()"
});
formatter.result({
  "duration": 4468227314,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "56",
      "offset": 9
    }
  ],
  "location": "HerokuSD.i_verify_total_post_is_displayed(int)"
});
formatter.result({
  "duration": 63570156,
  "status": "passed"
});
formatter.match({
  "location": "HerokuSD.i_verify_all_post_has_price_tag()"
});
formatter.result({
  "duration": 1812268378,
  "status": "passed"
});
formatter.match({
  "location": "HerokuSD.i_verify_all_post_has_title()"
});
formatter.result({
  "duration": 1483867099,
  "status": "passed"
});
formatter.match({
  "location": "HerokuSD.i_verify_all_post_has_displayed_image()"
});
formatter.result({
  "duration": 660241135,
  "status": "passed"
});
});