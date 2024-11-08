const {Builder, By, Key} = require('selenium-webdriver');
const chromedriver = require('chromedriver');
const math = require('mathjs'); // Математичні обчислення
require('chromedriver');  // Імпортуємо chromedriver

(async function automationScript() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Відкрити сторінку
    await driver.get('http://suninjuly.github.io/math.html');

    // Прочитати значення x
    let xElement = await driver.findElement(By.id('input_value'));
    let x = await xElement.getText();

    // Обчислити функцію від x
    let result = math.log(Math.abs(12 * Math.sin(parseFloat(x))));

    // Ввести відповідь в текстове поле
    let answerField = await driver.findElement(By.id('answer'));
    await answerField.sendKeys(result.toString());

    // Вибрати checkbox "I'm the robot"
    let checkbox = await driver.findElement(By.id('robotCheckbox'));
    await checkbox.click();

    // Вибрати radiobutton "Robots rule!"
    let radioButton = await driver.findElement(By.id('robotsRule'));
    await radioButton.click();

    // Натиснути кнопку Submit
    let submitButton = await driver.findElement(By.css('button[type="submit"]'));
    await submitButton.click();
  } finally {
    // Закрити браузер
    // await driver.quit();
  }
})();
