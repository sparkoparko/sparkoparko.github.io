/**
* Credits to UW for functions id, qsa, and qs
*         to trefle.io for the botanical API
*/

"use strict";
(function()) {
  const API_BASE = 'https://trefle.io/api/plants';
  const TOKEN = '?token=UUdUT3RScmVIdkE2TEFaUDRiWng0Zz09';
  window.addEventListener("load", init);

  // Sets up the plant directory
  function init() {
    directory();
  }

  // Populates the directory with all images of plants
  function directory() {
    let url = API_BASE + TOKEN;

    fetch(url)
      .then(checkStatus)
      .then(findUrl)
      .then(findImg)
  }

  /**
  * Returns an array resulting from JSON text query of all plants
  * @param {string} text - text to search through JSON object
  * @returns {String[]} - array of Strings containing each plant url
  */
  function findUrl(text) {
    let url = [];
    for (int i = 0; i < text.length; i++) {
      id.push(API_BASE + "/" + text.id + TOKEN);
    }
    return url;
  }

  /**
  * Finds and appends all plant images
  * @param {String[]} num - array of ints with urls to query a plant
  */
  function findImg(num) {
    for (let i = 0; i < num.length; i++) {
      fetch(num[i])
        .then(checkStatus)
        .then(appendImg)
    }
  }

  function appendImg(text) {
    let url = text.images;
    let plant = document.createElement("img");
    plant.src = url;
    qsa("projects").appendChild(plant);
  }

  /**
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
}();
