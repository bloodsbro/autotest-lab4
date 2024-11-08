const {Builder, By} = require('selenium-webdriver');
require('chromedriver');

(async function testDemoStore() {
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Перехід на головну сторінку
    await driver.get('https://selenium.academy/');

    // Перехід на сторінку "Blog"
    await driver.findElement(By.linkText('Blog')).click();

    // Перехід на сторінку "Pricing"
    await driver.findElement(By.linkText('Pricing')).click();

    // Перехід на сторінку "Login"
    await driver.findElement(By.linkText('Login')).click();

    // Заповнення полів для реєстрації нового користувача
    await driver.findElement(By.id('log')).sendKeys('testuser@example.com');
    await driver.findElement(By.id('pwd')).sendKeys('TestPassword123');

    await driver.findElement(By.id('rememberme')).click();

    // Натискаємо кнопку реєстрації
    await driver.findElement(By.css('input[type="submit"]')).click();

    // Перевірка чи з'явилося повідомлення
    let successMessage = await driver.findElement(By.xpath('//div[@class="wpmem_msg"]'));
    let successText = await successMessage.getText();
    console.log(successText);  // Виведення повідомлення

    // Довільний функціонал за вибором студента (наприклад, перевірка наявності товару на головній сторінці)

    await driver.findElement(By.linkText('Privacy Policy')).click();

    let mailtoLinks = await driver.findElements(By.css('a[href^="mailto:"]'));

    let mailAddresses = [];

    for (let link of mailtoLinks) {
      let href = await link.getAttribute('href');

      if (!mailAddresses.includes(href)) {
        mailAddresses.push(href);
      }
    }

    console.log('Found mailto links:', mailAddresses);

  } finally {
    // await driver.quit();
  }
})();
