"use strict";
(function() {
  window.addEventListener("load", init);

  // Add animation to my website
  function init() {
    click();
  }

  // Hides or shows long text underneath header
  function click() {
    clickHeader();
  }

// when I click .overflow, all of the content inside .toggle should appear.
  function clickHeader() {
    let div = qsa(".toggle");
    let header = qsa(".overflow");
    for (let i = 0; i < header.length; i++) {
      header[i].addEventListener("click", toggle(i, div));
    }
  }

  function toggle(i, div) {
    let section = div[i].classList;
    if (section.contains("hide")) {
      section.remove("hide");
    } else {
      section.add("hide");
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

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
