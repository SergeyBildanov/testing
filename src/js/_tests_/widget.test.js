import CardValidator from "../cardValidator";
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve('src/index.html'), 'utf8');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

let dom;

beforeAll(() => {
  dom = new JSDOM(html, { runScripts: 'dangerously' });
});


jest.setTimeout(30000);
describe('widget', () => {
    test.each([
        ["4111111111111111", "visa"],
        ["5555555555554444","mastercard"],
        ["371449635398431","amex"],
        ["6011111111111117","discover"],
        ["30569309025904","diners"],
        ["3530111333300000","jcb"],
        ["2200255555555555","mir"]
    ])("%s is a %s card number", (card, type, done)=>{
        const widget = dom.window.document.querySelector('.widget');
        const validator = new CardValidator(widget);
        validator._input.dispatchEvent(new dom.window.Event('input'));
        validator._input.value = card;

        setTimeout(() => {
            expect(validator._cards.querySelector(`.card.${type}`).classList.contains("active")).toBe(true);
            done();
        }, 1001);
    });
});


