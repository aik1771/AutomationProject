package steps;

import com.darksky.DarkSkyElements;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DarkSkySD extends start.driver.DriverWrapper {
	
	
	DarkSkyElements locator = new DarkSkyElements();
	
	@Given("^User is on the DarkSky page$")
	public void userIsOnTheDarkSkyPage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		initializeWebDriver("https://darksky.com");
	}

	@When("^I click on Time Machine$")
	public void iClickOnTimeMachine() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   locator.clickOnTimeMachine();
	}

	@Then("^I verify date is selected to todays date$")
	public void iVerifyDateIsSelectedToTodaysDate() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		locator.getText();

	}

}
