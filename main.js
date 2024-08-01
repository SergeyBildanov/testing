/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/validateNumber.js
function validateNumber(cardNumber) {
  const cardNumberS = cardNumber.toString().replace(/\s/g, '');
  let sum = 0;
  const parity = cardNumberS.length % 2;
  for (let i = 0; i < cardNumberS.length; i++) {
    let digit = Number(cardNumberS[i]);
    if (i % 2 === parity) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
  }
  return sum % 10 === 0;
}
;// CONCATENATED MODULE: ./src/js/whichSystem.js
function whichSystem(cardNumber) {
  if (/^4/.test(cardNumber)) {
    return 'visa';
  } else if (/^5[1-5]/.test(cardNumber)) {
    return 'mastercard';
  } else if (/^3[47]/.test(cardNumber)) {
    return 'amex';
  } else if (/^6(?:011|5)/.test(cardNumber)) {
    return 'discover';
  } else if (/^(36|38|30[0-5])/.test(cardNumber)) {
    return 'diners';
  } else if (/^(352[8-9]|35[3-8])/.test(cardNumber)) {
    return 'jcb';
  } else if (/^(220[0-4]|220[7-9]|2205)/.test(cardNumber)) {
    return 'mir';
  } else {
    return 'Unknown';
  }
}
;// CONCATENATED MODULE: ./src/js/cardValidator.js


class CardValidator {
  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this._element = element;
    this._form = element.querySelector(".validate");
    this._cards = element.querySelector(".cards-images");
    this._marks = element.querySelector(".marks");
    this._input = this._form.querySelector(".card-nubmer-input");
    this._submit = this._form.querySelector(".validate-btn");
    this._form.addEventListener("submit", e => {
      e.preventDefault();
      if (validateNumber(this._input.value)) {
        if (this._marks.querySelector(".mark.active")) {
          this._marks.querySelector(".active").classList.remove("active");
        }
        this._marks.querySelector(".right").classList.add("active");
      } else {
        if (this._marks.querySelector(".mark.active")) {
          this._marks.querySelector(".active").classList.remove("active");
        }
        this._marks.querySelector(".wrong").classList.add("active");
      }
      this._form.reset();
    });
    this._input.addEventListener("input", () => {
      this._timeout = setTimeout(() => {
        if (this._timeout) {
          clearTimeout(this._timeout);
        }
        this.choseCard(whichSystem(this._input.value));
      }, 300);
    });
  }
  choseCard(cardType) {
    if (cardType !== "Unknown") {
      let card = this._cards.querySelector(`.${cardType}`);
      if (this._cards.querySelector(".card.active")) {
        this._cards.querySelector(".card.active").classList.remove("active");
      }
      card.classList.add("active");
    } else {
      if (this._cards.querySelector(`.active`)) {
        this._cards.querySelector(`.active`).classList.remove("active");
      }
    }
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

let validator = new CardValidator(".widget");
console.log(validator);
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;