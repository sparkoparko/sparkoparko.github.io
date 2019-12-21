/**
* Credits to UW for functions id, qsa, qs, and checkStatus
*         to trefle.io for the botanical API
*/

"use strict";
(function() {
  const API_BASE = "https://trefle.io/api/plants";
  const TOKEN = "https://trefle.io/api/plants?token=UUdUT3RScmVIdkE2TEFaUDRiWng0Zz09";
  window.addEventListener("load", init);

  // Sets up the plant directory
  function init() {
    t();
  }

  function t() {
    fetch("https://trefle.io/api/plants?q=Rosemary", {
      headers: {
        token: "UUdUT3RScmVIdkE2TEFaUDRiWng0Zz09"
      }
    })
  }

  // Populates the directory with all images of plants
  function directory() {
    // let url = TOKEN;
    fetch(url, { mode: 'no-cors' })
      .then(checkStatus)
      .then(findUrl)
      .then(addImg)
      .catch(console.log);
  }

  /**
  * Returns an array resulting from JSON text query of all plants
  * @param {string} text - text to search through JSON object
  * @returns {String[]} - array of Strings containing each plant url
  */
  function findUrl(text) {
    let url = [];
    for (let i = 0; i < text.length; i++) {
      id.push(API_BASE + "/" + text.id + TOKEN);
    }
    return url;
  }

  function addImg(url) {
    for (let i = 0; i < url.length; i++) {
      let text = url[i];
      let plant = document.createElement("p");
      plant.createTextNode(url);
      qsa("projects").appendChild(plant);
    }
  }

  /**
  * Finds and appends all plant images
  * @param {String[]} num - array of ints with urls to query a plant
  */
  function findImg(num) {
    for (let i = 0; i < num.length; i++) {
      let url = num[i];
      fetch(url, { mode: 'no-cors' })
        .then(checkStatus)
        .then(appendImg)
    }
  }

  function appendImg(text) {
    let url = text.images;
    let plant = document.createElement("img");
    plant.classList.add("resize");
    plant.src = url;
    qsa("projects").appendChild(plant);
  }

  /** ==============================  Helper Functions ======================
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} idName - element ID
   * @returns {object} DOM object associated with id.
   */
  function id(idName) {
    return document.getElementById(idName);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} selector - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(selector) {
    return document.querySelectorAll(selector);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} selector - CSS query selector.
   * @returns {object} The first DOM object matching the query.
   */
  function qs(selector) { // less common, but you may find it helpful
    return document.querySelector(selector)
  }

  /*
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} response - response to check for success/error
   * @returns {object} - valid result text if response was successful, otherwise rejected
   *                     Promise result
   */
  function checkStatus(response) {
    console.log(response);
    if (response.status == 200) {
      return response.json();
    } else {
      return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
  }
})();
