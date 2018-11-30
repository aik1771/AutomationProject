package data.function;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateFunction {
	
	
	public static String getDate() {    
		   DateTimeFormatter dtf = DateTimeFormatter.ofPattern("dd");  
		   LocalDateTime now = LocalDateTime.now();  
		   System.out.println("Date function is " +dtf.format(now));
		   return dtf.format(now);  
		  }    

}
