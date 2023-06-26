const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);

    await driver.sleep(5000)
  });
  test("clicking See All Bots button displays list of cards", async () => {
    await driver.get("http://localhost:8000");
    await driver.findElement(By.id("see-all")).click()
    expect(await driver.wait(until.elementLocated(By.css('#all-bots div'))),1000)

  });
});