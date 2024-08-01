import puppetteer from 'puppeteer';

jest.setTimeout(60000); // default puppeteer timeout

describe('INN/OGRN form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('should add .active class for right mark on right card number', async () => {
    await page.goto(baseUrl);
    const widget = await page.$('.widget');
    const form = await widget.$('.validate');
    const input = await form.$('.card-nubmer-input')
    await input.type('4111111111111111');
    const submit = await form.$('.validate-btn');
    submit.click();
    await page.waitForSelector('.right.active');
  });

  test('should add .active class for wrong mark on wrong card number', async () => {
    await page.goto(baseUrl);
    const widget = await page.$('.widget');
    const form = await widget.$('.validate');
    const input = await form.$('.card-nubmer-input')
    await input.type('4111111111111112');
    const submit = await form.$('.validate-btn');
    submit.click();
    await page.waitForSelector('.wrong.active');
  });
});