/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/services.js":
/*!*************************!*\
  !*** ./src/services.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchDelete: () => (/* binding */ fetchDelete),
/* harmony export */   fetchSession: () => (/* binding */ fetchSession),
/* harmony export */   fetchUpdateWord: () => (/* binding */ fetchUpdateWord),
/* harmony export */   fetchUser: () => (/* binding */ fetchUser),
/* harmony export */   fetchWord: () => (/* binding */ fetchWord)
/* harmony export */ });
var fetchSession = function fetchSession() {
  return fetch('/api/session')["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    return response.json();
  });
};
var fetchUser = function fetchUser(username) {
  return fetch('/api/session', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username: username
    })
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
  });
};
var fetchWord = function fetchWord() {
  return fetch('/api/word').then(function (response) {
    if (!response.ok) {
      // The server responded with an error status code
      // Throw an error to be caught in the catch block
      throw new Error('Server error');
    }
    // The server responded with a success status code
    // Parse the JSON in the response
    return response.json();
  }).then(function (data) {
    return data.storedWord; // Return the 'word' property of the data
  })["catch"](function (err) {
    if (err.message === 'Server error') {
      // The server responded with an error status code
      return Promise.reject({
        error: 'server-error'
      });
    } else {
      // There was a network error
      return Promise.reject({
        error: 'network-error'
      });
    }
  });
};
var fetchUpdateWord = function fetchUpdateWord(word) {
  return fetch('/api/word', {
    method: 'PUT',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      word: word
    })
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (!response.ok) {
      return response.json().then(function (err) {
        return Promise.reject(err);
      });
    }
    return response.json();
  }).then(function (response) {
    // The word was successfully updated on the server
    // Now update the UI with the new word
    updateUIWithNewWord(word);
    return response;
  });
};
function updateUIWithNewWord(word) {
  var wordElement = document.querySelector('.stored-word');
  wordElement.textContent = "Stored Word: ".concat(word);
}
var fetchDelete = function fetchDelete() {
  return fetch('/api/session', {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json'
    }
  })["catch"](function (err) {
    return Promise.reject({
      error: 'network-error'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
  });
};

/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateHtml: () => (/* binding */ generateHtml),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   showLoginError: () => (/* binding */ showLoginError),
/* harmony export */   showWordError: () => (/* binding */ showWordError)
/* harmony export */ });
// export const showLoginForm = () => {
//     loginForm.classList.remove('hidden');
//     loginError.classList.add('hidden');
//     wordView.classList.add('hidden');
// };

// export const showWordView = (username, word) => {
//     loginForm.classList.add('hidden');
//     loginError.classList.add('hidden');
//     wordView.classList.remove('hidden');
//     usernameDisplay.textContent = username;
//     wordForm.elements.word.value = word;
// };

// export const showLoginError = (message) => {
//     loginError.textContent = message;
//     loginError.classList.remove('hidden');
// };

// export const showWordError = (message) => {
//     wordError.textContent = message;
//     wordError.classList.remove('hidden');
// };
var app = document.querySelector('#app');
var generateHtml = function generateHtml(username, storedWord) {
  // const word = storedWord ? storedWord.word : '';
  // const word = storedWord && storedWord.word ? storedWord.word : '';
  if (!username && !storedWord) {
    return "\n            <div class=\"container\">\n                <div class=\"info\">\n                    <div>Enter a username to login</div>\n                <input\n                    class=\"input\"\n                    type=\"text\"\n                    placeholder=\"username\"\n                    \n                />\n                <button class=\"login\">Login</button>\n            </div>\n            <div class=\"error\"></div>\n        ";
  } else {
    return "\n            <div class=\"container\">\n                <div class=\"info\">\n                    <div>User: ".concat(username, "</div>\n                    <div class=\"stored-word\">Stored Word: ").concat(storedWord || '', "</div>\n                </div>\n            \n                <input\n                    class=\"input\"\n                    type=\"text\"\n                    placeholder=\"Update your word\"\n                    \n                />\n                <div class=\"button-container\">\n                <button class=\"update\">update</button>\n                <button class=\"delete\">Log out</button>\n                </div>\n            </div>\n            <div class=\"error\"></div>\n        ");
  }
};
var render = function render(username, storedWord) {
  app.innerHTML = generateHtml(username, storedWord);
};
var showLoginError = function showLoginError(message) {
  var errorElement = document.querySelector('.error');
  errorElement.textContent = message;
  errorElement.classList.remove('hidden');
};
var showWordError = function showWordError(message) {
  var errorElement = document.querySelector('.error');
  errorElement.textContent = message;
  errorElement.classList.remove('hidden');
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/login.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _services_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services.js */ "./src/services.js");
/* harmony import */ var _ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.js */ "./src/ui.js");
// import {fetchSession, fetchUser,fetchWord, fetchUpdateWord,fetchDelete} from './services.js';


// Define variables to store DOM elements
var app = document.querySelector('#app');

// Define event listeners
app.addEventListener('click', function (event) {
  if (event.target.matches('.login')) {
    event.preventDefault();
    var username = app.querySelector('.input').value;
    (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchUser)(username).then(function () {
      return (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchWord)();
    }).then(function (word) {
      _ui_js__WEBPACK_IMPORTED_MODULE_1__.render(username, word);
    })["catch"](function (error) {
      if (error.error === 'network-error') {
        _ui_js__WEBPACK_IMPORTED_MODULE_1__.showLoginError('There was a problem connecting to the server. Please try again later.');
      } else {
        _ui_js__WEBPACK_IMPORTED_MODULE_1__.showLoginError('Invalid username. Please try again.');
      }
    });
  } else if (event.target.matches('.delete')) {
    (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchDelete)().then(function () {
      _ui_js__WEBPACK_IMPORTED_MODULE_1__.render();
    })["catch"](function (error) {
      if (error.error === 'network-error') {
        _ui_js__WEBPACK_IMPORTED_MODULE_1__.showWordError('There was a problem connecting to the server. Please try again later.');
      } else {
        _ui_js__WEBPACK_IMPORTED_MODULE_1__.showWordError('There was a problem logging out. Please try again.');
      }
    });
  } else if (event.target.matches('.update')) {
    event.preventDefault();
    var word = app.querySelector('.input').value;
    (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchUpdateWord)(word).then(function (response) {
      if (response.error) {
        throw response;
      } else {
        var _username = response.username,
          storedWord = response.storedWord;
        _ui_js__WEBPACK_IMPORTED_MODULE_1__.showWordError("Word updated successfully. Username: ".concat(_username, ", Stored Word: ").concat(storedWord));
      }
    })["catch"](function (error) {
      if (error.error === 'network-error') {
        _ui_js__WEBPACK_IMPORTED_MODULE_1__.showWordError('There was a problem connecting to the server. Please try again later.');
      } else {
        _ui_js__WEBPACK_IMPORTED_MODULE_1__.showWordError('There was a problem updating the word. Please try again.');
      }
    });
    // .then(() => {
    //     ui.showWordError(`Word updated successfully. Username: ${username}, Stored Word: ${storedWord}`);
    // });
  }
});

// Define initial page load logic
(0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchSession)().then(function (session) {
  if (session.username) {
    return (0,_services_js__WEBPACK_IMPORTED_MODULE_0__.fetchWord)().then(function (word) {
      _ui_js__WEBPACK_IMPORTED_MODULE_1__.render(session.username, word);
    });
  } else {
    _ui_js__WEBPACK_IMPORTED_MODULE_1__.render('', ''); // Show the initial UI with empty username and storedWord
  }
})["catch"](function (error) {
  if (error.error === 'network-error') {
    _ui_js__WEBPACK_IMPORTED_MODULE_1__.showLoginError('There was a problem connecting to the server. Please try again later.');
  } else {
    _ui_js__WEBPACK_IMPORTED_MODULE_1__.showLoginError('There was a problem checking for an existing session. Please try again.');
  }
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map