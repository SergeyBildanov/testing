import validateNumber from "./validateNumber";
import whichSystem from "./whichSystem";

export default class CardValidator {
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
    this._form.addEventListener("submit", (e) => {
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
