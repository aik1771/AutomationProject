package com.darksky;

import org.openqa.selenium.By;
import org.testng.Assert;

import data.function.DateFunction;

public class DarkSkyElements extends BasePage {
	
	private static By timeMachine = By.xpath("//a[@class='button']");
	private static By calendarDate = By.xpath("//td[@class='is-today']");
	
	public static void clickOnTimeMachine() throws InterruptedException
	{
		clickOn(timeMachine);
	}
	
	
	public static void getText()
	{
	
		Assert.assertEquals(getColor(calendarDate),"rgba(51, 51, 51, 1)","Color doesn't match");
		Assert.assertEquals(DateFunction.getDate(), getCalendarDate(calendarDate), "Dates are not the same");
		
	}
	
	
	
	
	

}
