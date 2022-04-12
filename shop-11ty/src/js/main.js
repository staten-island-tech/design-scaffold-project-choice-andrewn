import "../style/style.css"
import { menuFood } from "./menu";
import { menuDrinks } from "./menu";
import { menuDessert } from "./menu";
import { menuSides } from "./menu";
import { merch } from "./menu";
import { homeHero } from "./menu";

function hero(array) {
    array.forEach((item, index) => {
      document.querySelector(".homeHero").insertAdjacentHTML(
        "beforeend",
        `<div>
      <img id="menu-image"
          src="${item.url}"
          alt="${item.item}"/>
      <h2>${item.item}</h2>
      <h3 id="menu-prices">Price: ${item.price}</h3>`
      );
    });
  }
hero(homeHero)
function cardsFood(array) {
    array.forEach((item, index) => {
      document.querySelector(".row").insertAdjacentHTML(
        "beforeend",
        `<div id="${index}">
      <img id="menu-image"
          src="${item.url}"
          alt="${item.item}"/>
      <h2>${item.item}</h2>
      <h3 id="menu-descriptions">${item.description}</h3>
      <h3 id="menu-prices">Price: ${item.price}</h3>
    <button type="button">Add To Cart</button>
    </div>`
      );
    });
  }
  cardsFood(menuFood);
function cardsDrinks(array) {
    array.forEach((item, index) => {
      document.querySelector(".row").insertAdjacentHTML(
        "beforeend",
        `<div id="${index}">
      <img id="menu-image"
          src="${item.url}"
          alt="${item.item}"/>
      <h2>${item.item}</h2>
      <h3 id="menu-descriptions">${item.description}</h3>
      <h3 id="menu-prices">Price: ${item.price}</h3>
    <button type="button">Add To Cart</button>
    </div>`
      );
    });
  }
  cardsDrinks(menuDrinks);
function cardsDessert(array) {
    array.forEach((item, index) => {
      document.querySelector(".row").insertAdjacentHTML(
        "beforeend",
        `<div id="${index}">
      <img id="menu-image"
          src="${item.url}"
          alt="${item.item}"/>
      <h2>${item.item}</h2>
      <h3 id="menu-descriptions">${item.description}</h3>
      <h3 id="menu-prices">Price: ${item.price}</h3>
    <button type="button">Add To Cart</button>
    </div>`
      );
    });
  }
  cardsDessert(menuDessert);
function cardsFood(array) {
    array.forEach((item, index) => {
      document.querySelector(".row").insertAdjacentHTML(
        "beforeend",
        `<div id="${index}">
      <img id="menu-image"
          src="${item.url}"
          alt="${item.item}"/>
      <h2>${item.item}</h2>
      <h3 id="menu-descriptions">${item.description}</h3>
      <h3 id="menu-prices">Price: ${item.price}</h3>
    <button type="button">Add To Cart</button>
    </div>`
      );
    });
  }
  cardsFood(menuSides);
function cardsMerch(array) {
    array.forEach((item, index) => {
      document.querySelector(".row").insertAdjacentHTML(
        "beforeend",
        `<div id="${index}">
      <img id="menu-image"
          src="${item.url}"
          alt="${item.item}"/>
      <h2>${item.item}</h2>
      <h3 id="menu-descriptions">${item.description}</h3>
      <h3 id="menu-prices">Price: ${item.price}</h3>
    <button type="button">Add To Cart</button>
    </div>`
      );
    });
  }
  cardsMerch(merch);