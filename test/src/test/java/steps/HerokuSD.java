package steps;

import com.herokuapp.PageElements;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class HerokuSD extends start.driver.DriverWrapper {
	
	PageElements locator = new PageElements();
	@Given("^I am on home page of heroku$")
	public void i_am_on_home_page_of_heroku() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		initializeWebDriver("https://floating-anchorage-58495.herokuapp.com");
		
		
		
	}

	@Then("^I verify (\\d+) total post is displayed$")
	public void i_verify_total_post_is_displayed(int arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		locator.getNumOfPosts();
	   
	}

	@Then("^I verify all post has price tag$")
	public void i_verify_all_post_has_price_tag() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		locator.findPricingOnThePost();
		locator.getNumOfPostsBasedOnPrice();
	    
	}

	@Then("^I verify all post has title$")
	public void i_verify_all_post_has_title() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		locator.findTextOnThePost();
		locator.getNumOfPostsBasedOnText();
	}

	@Then("^I verify all post has displayed image$")
	public void i_verify_all_post_has_displayed_image() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		locator.getPostImages();
		locator.numberOfImagesReport();
	}

	
	@Given("^User is on the Threely login page$")
	public void iClickOnSubmitButton() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		initializeWebDriver("https://floating-anchorage-58495.herokuapp.com/login");
	}
	
	@When("^I enter username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void i_enter_username_as_and_password_as(String arg1, String arg2) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    locator.clickOnEmail();
	    locator.setEmail(arg1);
	    locator.clickOnPassword();
	    locator.setPassword(arg2);
	}

	@When("^I click on submit button$")
	public void i_click_on_submit_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    locator.clickOnEmail();
	}
	
	@When("^I search on top search bar with text \"([^\"]*)\"$")
	public void iSearchOnTopSearchBarWithText(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    locator.clickOnSearch();
	    locator.setSearch("iOS");
	}

	@Then("^I verify \"([^\"]*)\" as displayed result$")
	public void iVerifyAsDisplayedResult(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    locator.checkDropDownText();
	}


	@Then("^I verify logout button is displayed$")
	public void i_verify_logout_button_is_displayed() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    locator.clickOnAvitar();
		locator.checkLogout();
	}
	
	@Given("^I am on Registration page$")
	public void iAmOnRegistrationPage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		initializeWebDriver("https://floating-anchorage-58495.herokuapp.com/signup");
	}

	@When("^I enter name as \"([^\"]*)\" email as \"([^\"]*)\" and password as \"([^\"]*)\"$")
	public void iEnterNameAsEmailAsTestComAndPasswordAs(String arg1, String arg2, String arg3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   
		// Write code here that turns the phrase above into concrete actions
	    locator.clickOnRegistrationName();
	    locator.setOnRegistrationName(arg1);
	    locator.clickOnRegistrationEmail();
	    locator.setOnRegistrationEmail(arg2);
	    locator.clickOnRegistrationPassword();
	    locator.setOnRegistrationPassword(arg3);
	}
	
	

	@When("^I click 'submit' button$")
	public void iClickSubmitButton() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    locator.clickOnLogin();
	    
	}

	@Then("^I verify invalid email address$")
	public void iVerifyInvalidEmailAddress() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    locator.checkAlertForExistingUser();
	}

}
