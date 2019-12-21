"use strict";

(function() {
  window.addEventListener("load", init);

  function init() {
    menu();
  }

  // populate Mowgli's Cafe with menu items
  function menu() {
    let url = "https://courses.cs.washington.edu/courses/cse154/17sp/lab/fullstack/code/starter/menu.json";
    fetch(url, )
      .then(checkStatus)
  }

  /** ==============================  Helper Functions ======================
  * Helper function to return the response's result text if successful, otherwise
  * returns the rejected Promise result with an error status and corresponding text
  * @param {object} response - response to check for success/error
  * @return {object} - valid result text if response was successful, otherwise rejected
  *                    Promise result
  */
  function checkStatus(response) {
    if (response.status == 200 && response.status < 300 || response.status === 0) {
      return response.text();
    } else {
      return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
  }
})();
