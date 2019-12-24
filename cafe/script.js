"use strict";

(function() {
  window.addEventListener("load", init);

  function init() {
    menu();
  }

  // populate Mowgli's Cafe with menu items
  function menu() {
    let url = "https://courses.cs.washington.edu/courses/cse154/17sp/lab/fullstack/code/starter/menu.json";
    fetch(url)
      .then(checkStatus)
      .then(drinks)
      .then(bakery)
      .catch(console.error)
  }

  function checkStatus(response) {
    if (response.status == 200) {
      return response.json();
    } else {
      return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
  }

  // Populate the menu with drinks. Drinks are categorized as drinks > items >
  // type. For example, a brewed coffee (black) is found under drinks > coffee >
  // brewed coffee (black).
  function drinks(text) {
    // add drinks and their price
    let drinks = text.Drinks;
    let category = document.createElement("legend");
    category.innerHTML = "Drinks";
    id("drinks").appendChild(category);

    // create and populate drink categories
    for (let i = 0; i < drinks.length; i++) {
      let item = document.createElement("caption");
      item.innerHTML = drinks[i].category;
      let price = document.createElement("caption");
      price.innerHTML = "Price ($)";
      let section = document.createElement("section");
      section.classList.add("container");
      section.classList.add("bold")
      section.appendChild(item);
      section.appendChild(price);
      id("drinks").appendChild(section);
      let hr = document.createElement("hr");
      id("drinks").appendChild(hr);

      // create a drink item and price column
      let container = document.createElement("section");
      container.classList.add("container");
      let drinkCol = document.createElement("section");
      let priceCol = document.createElement("section");
      container.appendChild(drinkCol);
      container.appendChild(priceCol);
      id("drinks").appendChild(container);

      // populate columns
      for (let x = 0; x < drinks[i].items.length; x++) {
        let type = document.createElement("input");
        let label = document.createElement("label");
        type.type = "checkbox";
        type.name = x;
        label.innerHTML = drinks[i].items[x].name;
        drinkCol.appendChild(type);
        drinkCol.appendChild(label);
        let p = document.createElement("p");
        p.innerHTML = drinks[i].items[x].price;
        priceCol.appendChild(p)
      }
    }
    return text;
  }

  // same as drinks, except id("drinks") changed to id("bakery")
  function bakery(text) {
    let bakery = text.Bakery;
    let category = document.createElement("legend");
    category.innerHTML = "Bakery";
    id("bakery").appendChild(category);

    // create and populate drink categories
    for (let i = 0; i < bakery.length; i++) {
      let item = document.createElement("caption");
      item.innerHTML = bakery[i].category;
      let price = document.createElement("caption");
      price.innerHTML = "Price ($)";
      let section = document.createElement("section");
      section.classList.add("container");
      section.classList.add("bold")
      section.appendChild(item);
      section.appendChild(price);
      id("bakery").appendChild(section);
      let hr = document.createElement("hr");
      id("bakery").appendChild(hr);

      // create a drink item and price column
      let container = document.createElement("section");
      container.classList.add("container");
      let drinkCol = document.createElement("section");
      let priceCol = document.createElement("section");
      container.appendChild(drinkCol);
      container.appendChild(priceCol);
      id("bakery").appendChild(container);

      // populate columns
      for (let x = 0; x < bakery[i].items.length; x++) {
        let type = document.createElement("input");
        let label = document.createElement("label");
        type.type = "checkbox";
        type.name = x;
        label.innerHTML = bakery[i].items[x].name;
        drinkCol.appendChild(type);
        drinkCol.appendChild(label);
        let p = document.createElement("p");
        p.innerHTML = bakery[i].items[x].price;
        priceCol.appendChild(p)
      }
    }
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }
})();
