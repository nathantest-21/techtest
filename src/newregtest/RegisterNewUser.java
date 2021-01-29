package newregtest;

import java.util.HashMap;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.Dimension;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
public class RegisterNewUser {
  private WebDriver driver;
  JavascriptExecutor js;
  @Before
  public void setUp() {
    driver = new FirefoxDriver();
    js = (JavascriptExecutor) driver;
    new HashMap<String, Object>();
  }
  @After
  public void tearDown() {
    driver.quit();
  }
  @Test
  public void newUserSignUp() {
    driver.get("https://moneygaming.qa.gameaccount.com/");
    driver.manage().window().setSize(new Dimension(1440, 900));
    driver.findElement(By.cssSelector(".newUser")).click();
    {
      WebElement dropdown = driver.findElement(By.id("title"));
      dropdown.findElement(By.xpath("//option[. = 'Mr']")).click();
    }
    driver.findElement(By.cssSelector("#title > option:nth-child(2)")).click();
    driver.findElement(By.id("forename")).click();
    driver.findElement(By.id("forename")).sendKeys("Nathan");
    driver.findElement(By.name("map(lastName)")).sendKeys("Ojuolape");
    driver.findElement(By.id("dobDay")).click();
    {
      WebElement dropdown = driver.findElement(By.id("dobDay"));
      dropdown.findElement(By.xpath("//option[. = '14']")).click();
    }
    driver.findElement(By.cssSelector("#dobDay > option:nth-child(15)")).click();
    {
      WebElement dropdown = driver.findElement(By.id("dobMonth"));
      dropdown.findElement(By.xpath("//option[. = 'October']")).click();
    }
    driver.findElement(By.cssSelector("#dobMonth > option:nth-child(11)")).click();
    driver.findElement(By.id("dobYear")).click();
    {
      WebElement dropdown = driver.findElement(By.id("dobYear"));
      dropdown.findElement(By.xpath("//option[. = '1986']")).click();
    }
    driver.findElement(By.cssSelector("#dobYear > option:nth-child(13)")).click();
    driver.findElement(By.name("map(email)")).click();
    driver.findElement(By.name("map(email)")).sendKeys("bodebode@hotmail.co.uk");
    driver.findElement(By.name("map(phone)")).click();
    driver.findElement(By.name("map(phone)")).sendKeys("07747365470");
    driver.findElement(By.name("map(mobile)")).click();
    driver.findElement(By.name("map(mobile)")).sendKeys("07747347474");
    driver.findElement(By.name("map(address1)")).click();
    driver.findElement(By.name("map(address1)")).sendKeys("12 matthews avenue");
    driver.findElement(By.name("map(addressCity)")).click();
    driver.findElement(By.name("map(addressCity)")).sendKeys("London");
    driver.findElement(By.name("map(stateProv)")).sendKeys("Nigeria");
    driver.findElement(By.name("map(postCode)")).click();
    driver.findElement(By.name("map(postCode)")).sendKeys("rm3 0dn");
    driver.findElement(By.id("countryList")).click();
    {
      WebElement dropdown = driver.findElement(By.id("countryList"));
      dropdown.findElement(By.xpath("//option[. = 'UNITED KINGDOM']")).click();
    }
    driver.findElement(By.cssSelector("#countryList > option:nth-child(2)")).click();
    driver.findElement(By.name("map(userName)")).click();
    driver.findElement(By.name("map(userName)")).sendKeys("Nathannn");
    driver.findElement(By.cssSelector("fieldset:nth-child(3)")).click();
    driver.findElement(By.id("password")).click();
    driver.findElement(By.id("password")).sendKeys("Abcd1234");
    driver.findElement(By.name("map(passwordConfirm)")).click();
    driver.findElement(By.name("map(passwordConfirm)")).sendKeys("Abcd1234");
    {
      WebElement dropdown = driver.findElement(By.id("securityQuestionOne"));
      dropdown.findElement(By.xpath("//option[. = 'What was your childhood nickname?']")).click();
    }
    driver.findElement(By.cssSelector("#securityQuestionOne > option:nth-child(2)")).click();
    driver.findElement(By.cssSelector("fieldset:nth-child(3) > label:nth-child(15)")).click();
    driver.findElement(By.name("map(securityAnswerOne)")).click();
    driver.findElement(By.name("map(securityAnswerOne)")).sendKeys("my Dog");
    {
      WebElement dropdown = driver.findElement(By.id("securityQuestionTwo"));
      dropdown.findElement(By.xpath("//option[. = 'What is your favorite color?']")).click();
    }
    driver.findElement(By.cssSelector("#securityQuestionTwo > option:nth-child(2)")).click();
    driver.findElement(By.name("map(securityAnswerTwo)")).click();
    driver.findElement(By.name("map(securityAnswerTwo)")).sendKeys("Black");
    {
      WebElement dropdown = driver.findElement(By.name("map(currency)"));
      dropdown.findElement(By.xpath("//option[. = 'Pounds Sterling']")).click();
    }
    driver.findElement(By.cssSelector(".required:nth-child(2) > option:nth-child(2)")).click();
    driver.findElement(By.name("map(terms)")).click();
    }
  {	  
driver.findElement(By.id("form")).click();
}
  
  
}
