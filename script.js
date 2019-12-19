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
      .then(findId)
      .then(findImg)
  }

  /**
  * Returns an array resulting from splitting text response
  * @param {string} text - text to split names by a new line
  * @returns {int[]} - array of ints containing plant IDs
  */
  function findId(text) {
    let id = [];
    let line = text.split(",");
    for (let i = 0; i < line.length; i++) {
      let name = line[i].split(":");
      for (let x = 0; x < name.length; x++) {
        if (name[i] == "id") {
          id.push(name[1]);
        }
      }
    }
    return id;
  }

  /**
  * Returns an array of each plant's images
  * @param {int[]} num - numbers to split names by a new line
  * @returns {string[]} - array of strings containing plant img urls
  */
  function findImg(num) {
    let img = [];
    for (let i = 0; )
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
