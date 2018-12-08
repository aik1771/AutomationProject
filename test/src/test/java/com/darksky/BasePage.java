package com.darksky;

import org.openqa.selenium.By;

import start.driver.DriverWrapper;

public class BasePage {
	
	public static void clickOn(By locator) throws InterruptedException {
		Thread.sleep(2000);
        DriverWrapper.getDriver().findElement(locator).click();
        Thread.sleep(3000);
         
    }
	
	public static String getCalendarDate(By locator)
	{
		return DriverWrapper.getDriver().findElement(locator).getText();
	}

	
	public static String getColor(By locator)
	{
		return DriverWrapper.getDriver().findElement(locator).getCssValue("color");
	}
}
