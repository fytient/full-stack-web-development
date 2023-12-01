/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/constant.js":
/*!*************************!*\
  !*** ./src/constant.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CLIENT: () => (/* binding */ CLIENT),
/* harmony export */   MESSAGES: () => (/* binding */ MESSAGES),
/* harmony export */   SERVER: () => (/* binding */ SERVER)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SERVER = {
  AUTH_MISSING: 'Authentication missing',
  AUTH_INSUFFICIENT: 'Authentication insufficient',
  REQUIRED_USERNAME: 'Username required',
  REQUIRED_MESSAGE: 'Message required'
};
var CLIENT = {
  NETWORK_ERROR: 'Network error',
  NO_SESSION: 'No session'
};
var MESSAGES = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, CLIENT.NETWORK_ERROR, 'There seems to be a problem with the network. Please try again.'), SERVER.AUTH_INSUFFICIENT, 'The username/password combination does not match our records. Please try again.'), SERVER.REQUIRED_USERNAME, 'Please enter a valid username (only letters and/or numbers are allowed).'), SERVER.REQUIRED_MESSAGE, 'Please enter a message to send.'), "default", 'An unexpected error occurred. Please try again.');

/***/ }),

/***/ "./src/listeners.js":
/*!**************************!*\
  !*** ./src/listeners.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addAbilityToSendMessage: () => (/* binding */ addAbilityToSendMessage),
/* harmony export */   addLoginListener: () => (/* binding */ addLoginListener),
/* harmony export */   addLogoutListener: () => (/* binding */ addLogoutListener)
/* harmony export */ });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ "./src/service.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/state.js");
// services.js


// render.js


// state.js


// Adding ability to send a chat message
function addAbilityToSendMessage(_ref) {
  var state = _ref.state,
    appEl = _ref.appEl;
  appEl.addEventListener("submit", function (e) {
    if (!e.target.classList.contains("add-message__form")) {
      return;
    }
    e.preventDefault();
    var messageText = appEl.querySelector(".add-message__text").value;
    (0,_state__WEBPACK_IMPORTED_MODULE_2__.waitOnMessages)();
    (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])({
      state: state,
      appEl: appEl
    }); // show loading state
    (0,_service__WEBPACK_IMPORTED_MODULE_0__.fetchSendMessage)(messageText).then(function (messages) {
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.setMessages)(messages);
      // state.messages.push(messages); // Add the new message to the state
      (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])({
        state: state,
        appEl: appEl
      });
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.setError)((err === null || err === void 0 ? void 0 : err.error) || "ERROR"); // Ensure that the error ends up truthy
      (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])({
        state: state,
        appEl: appEl
      });
    });
  });
}

// Adding ability to login
function addLoginListener(_ref2) {
  var state = _ref2.state,
    appEl = _ref2.appEl;
  appEl.addEventListener("submit", function (e) {
    if (!e.target.classList.contains("login__form")) {
      return;
    }
    e.preventDefault();
    var username = appEl.querySelector(".login__username").value;
    (0,_state__WEBPACK_IMPORTED_MODULE_2__.waitOnLogin)();
    (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])({
      state: state,
      appEl: appEl
    }); // show loading state
    (0,_service__WEBPACK_IMPORTED_MODULE_0__.fetchLogin)(username)
    // .then(() => {
    //   login(username);
    //   render({ state, appEl });

    // })
    .then(function (_ref3) {
      var error = _ref3.error,
        user = _ref3.user;
      state.isLoggedIn = true;
      state.error = error; // Clear the error
      state.user = user;
      (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])({
        state: state,
        appEl: appEl
      });
    })["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.setError)((err === null || err === void 0 ? void 0 : err.error) || "ERROR"); // Ensure that the error ends up truthy
      (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])({
        state: state,
        appEl: appEl
      });
    });
  });
}

// Adding ability to logout
function addLogoutListener(_ref4) {
  var state = _ref4.state,
    appEl = _ref4.appEl;
  appEl.addEventListener("click", function (e) {
    if (!e.target.classList.contains("logout__button")) {
      return;
    }
    (0,_state__WEBPACK_IMPORTED_MODULE_2__.logout)();
    (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])({
      state: state,
      appEl: appEl
    });
    (0,_service__WEBPACK_IMPORTED_MODULE_0__.fetchLogout)()["catch"](function (err) {
      (0,_state__WEBPACK_IMPORTED_MODULE_2__.setError)((err === null || err === void 0 ? void 0 : err.error) || "ERROR"); // Ensure that the error ends up truthy
      (0,_render__WEBPACK_IMPORTED_MODULE_1__["default"])({
        state: state,
        appEl: appEl
      });
    });
  });
}

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   render: () => (/* binding */ render),
/* harmony export */   renderMessages: () => (/* binding */ renderMessages),
/* harmony export */   renderUsers: () => (/* binding */ renderUsers)
/* harmony export */ });
function render(_ref) {
  var state = _ref.state,
    appEl = _ref.appEl;
  var html = "\n    ".concat(generateStatusHtml(state), "\n      <main class=\"\">\n        ").concat(generateHeaderHtml(state), "\n        ").concat(generateChatHtml(state), "\n        \n      </main>\n    ");
  appEl.innerHTML = html;
}
function generateHeaderHtml(state) {
  if (state.isLoggedIn) {
    return generateLogoutHtml(state);
  } else {
    return generateLoginHtml(state);
  }
}
function generateChatHtml(state) {
  return "\n      <div class=\"chat\">\n        \n        \n        ".concat(generateMessagesHtml(state), "\n        ").concat(generateAddMessageHtml(state), "\n      </div>\n    ");
}
function generateStatusHtml(state) {
  // return `
  //   <div class="status">${state.error}</div>
  // `;
  if (!state.error) {
    return "";
  }
  return "\n      <div class=\"error\">".concat(state.error, "</div>\n  ");
}
function generateMessagesHtml(state) {
  return "\n      <ul class=\"messages\">".concat(generateMessagesListHtml(state), "</ul>\n    ");
}
function generateMessagesListHtml(state) {
  // return Object.values(state.messages).map((message) => {
  return state.messages.map(function (message) {
    return "\n        <li class=\"messages\">\n          <span class=\"message__user\">".concat(message.sender, ":</span>\n          <span class=\"message__text\">").concat(message.text, "</span>\n        </li>\n      ");
  }).join('') || '<p>No messages yet, start chatting!</p>';
}
function generateAddMessageHtml(state) {
  if (!state.isLoggedIn) {
    return '';
  }
  return "\n      <form class=\"add-message__form\" action=\"#/add\">\n        <input class=\"add-message__text\" placeholder=\"Type your message...\">\n        <button type=\"submit\" class=\"add-message__button\">Send</button>\n      </form>\n    ";
}
function generateLoginHtml(state) {
  if (state.isLoginPending) {
    return "\n        <div class=\"login__waiting\">Logging in...</div>\n      ";
  }
  if (state.isLoggedIn) return '';
  return "\n      <div class=\"login\">\n        <form class=\"login__form\" action=\"#/login\">\n          <label>\n            <span>Username:</span>\n            <input class=\"login__username\" value=\"\">\n          </label>\n          <button class=\"login__button\" type=\"submit\">Login</button>\n        </form>\n      </div>\n    ";
}
function generateLogoutHtml(state) {
  if (!state.isLoggedIn) {
    return "";
  }
  return "\n      <div class=\"logout\">\n        <button class=\"logout__button\">Logout</button>\n      </div>\n    ";
}
function renderUsers(_ref2) {
  var state = _ref2.state,
    appEl = _ref2.appEl;
  var usersEl = appEl.querySelector('.users');
  if (!usersEl) return;
  usersEl.innerHTML = generateUsersHTML(state);
}
function renderMessages(_ref3) {
  var state = _ref3.state,
    appEl = _ref3.appEl;
  var messagesEl = appEl.querySelector('.messages');
  if (!messagesEl) return;
  messagesEl.innerHTML = generateMessagesHtml(state);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);

/***/ }),

/***/ "./src/service.js":
/*!************************!*\
  !*** ./src/service.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchGetMessages: () => (/* binding */ fetchGetMessages),
/* harmony export */   fetchLogin: () => (/* binding */ fetchLogin),
/* harmony export */   fetchLoginUsers: () => (/* binding */ fetchLoginUsers),
/* harmony export */   fetchLogout: () => (/* binding */ fetchLogout),
/* harmony export */   fetchSendMessage: () => (/* binding */ fetchSendMessage),
/* harmony export */   fetchSession: () => (/* binding */ fetchSession),
/* harmony export */   fetchUserStatus: () => (/* binding */ fetchUserStatus)
/* harmony export */ });
function fetchLogin(username) {
  return fetch('/api/session', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      username: username
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'networkError'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchLogout() {
  return fetch('/api/session', {
    method: 'DELETE'
  })["catch"](function () {
    return Promise.reject({
      error: 'networkError'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchSession() {
  return fetch('/api/session')["catch"](function () {
    return Promise.reject({
      error: 'networkError'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchSendMessage(message) {
  return fetch('/api/messages', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json'
    }),
    body: JSON.stringify({
      message: message
    })
  })["catch"](function () {
    return Promise.reject({
      error: 'networkError'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchGetMessages() {
  return fetch('/api/messages', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      error: 'networkError'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}
function fetchLoginUsers() {
  return fetch("/api/users", {
    method: "GET"
  })["catch"](function (err) {
    return Promise.reject({
      error: "network-error"
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return [Promise.reject(err)];
    });
  });
}
function fetchUserStatus() {
  return fetch('/api/user/status', {
    method: 'GET'
  })["catch"](function () {
    return Promise.reject({
      error: 'networkError'
    });
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }
    return response.json()["catch"](function (error) {
      return Promise.reject({
        error: error
      });
    }).then(function (err) {
      return Promise.reject(err);
    });
  });
}

/***/ }),

/***/ "./src/state.js":
/*!**********************!*\
  !*** ./src/state.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addMessage: () => (/* binding */ addMessage),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   login: () => (/* binding */ login),
/* harmony export */   logout: () => (/* binding */ logout),
/* harmony export */   setError: () => (/* binding */ setError),
/* harmony export */   setLoginUsers: () => (/* binding */ setLoginUsers),
/* harmony export */   setMessages: () => (/* binding */ setMessages),
/* harmony export */   setUsers: () => (/* binding */ setUsers),
/* harmony export */   waitOnLogin: () => (/* binding */ waitOnLogin),
/* harmony export */   waitOnMessages: () => (/* binding */ waitOnMessages),
/* harmony export */   waitOnUsers: () => (/* binding */ waitOnUsers)
/* harmony export */ });
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./src/constant.js");

var state = {
  messages: [],
  isLoggedIn: false,
  isLoginPending: true,
  isMessagePending: false,
  isUsersPending: false,
  username: {},
  lastAddedMessageId: '',
  error: '',
  showError: false
};
function waitOnLogin() {
  state.isLoggedIn = false;
  state.isLoginPending = true;
  state.username = {};
  state.messages = [];
  state.error = '';
  state.showError = false;
}
function login() {
  state.isLoggedIn = true;
  state.isLoginPending = false;
  state.username = username;
  state.error = '';
  state.lastAddedMessageId = '';
  state.showError = false;
}
function logout() {
  state.isLoggedIn = false;
  state.isLoginPending = false;
  state.username = {};
  state.messages = [];
  state.error = '';
  state.showError = false;
}
function waitOnMessages() {
  state.messages = [];
  state.isMessagePending = true;
  state.error = '';
  state.showError = false;
}
function setMessages(messages) {
  state.messages = messages;
  state.isMessagePending = false;
  state.error = '';
  state.lastAddedMessageId = '';
  state.showError = false;
}
function addMessage(_ref) {
  var id = _ref.id,
    message = _ref.message;
  state.messages[id] = message;
  state.lastAddedMessageId = id;
  state.error = '';
}
function setError(error) {
  if (!error) {
    state.showError = false;
    state.error = '';
  } else {
    state.showError = true;
    state.error = _constant__WEBPACK_IMPORTED_MODULE_0__.MESSAGES[error] || _constant__WEBPACK_IMPORTED_MODULE_0__.MESSAGES["default"];
  }
}
function waitOnUsers() {
  state.username = {};
  state.isUsersPending = true;
  state.error = '';
  state.showError = false;
}
function setUsers(users) {
  state.username = users;
  state.isUsersPending = false;
  state.error = '';
  state.showError = false;
}
function setLoginUsers(data) {
  state.isMessagePending = false;
  state.users = data;
  state.error = "";
  state.showError = false;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);

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
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant */ "./src/constant.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state */ "./src/state.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./src/service.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ "./src/render.js");
/* harmony import */ var _listeners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./listeners */ "./src/listeners.js");





var appEl = document.querySelector('#app');
(0,_render__WEBPACK_IMPORTED_MODULE_3__.render)({
  state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
  appEl: appEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_4__.addLoginListener)({
  state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
  appEl: appEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_4__.addLogoutListener)({
  state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
  appEl: appEl
});
(0,_listeners__WEBPACK_IMPORTED_MODULE_4__.addAbilityToSendMessage)({
  state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
  appEl: appEl
});
checkForSession();
function checkForSession() {
  (0,_state__WEBPACK_IMPORTED_MODULE_1__.waitOnLogin)();
  console.log("state,", _state__WEBPACK_IMPORTED_MODULE_1__["default"].messages);
  (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)({
    state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
    appEl: appEl
  });
  (0,_service__WEBPACK_IMPORTED_MODULE_2__.fetchSession)().then(function () {
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.login)();
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.waitOnLogin)();
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.waitOnMessages)();
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
    return Promise.all([(0,_service__WEBPACK_IMPORTED_MODULE_2__.fetchLoginUsers)(), (0,_service__WEBPACK_IMPORTED_MODULE_2__.fetchGetMessages)()]);
  })
  // .then((data) => {
  //     setUsers(data[0]);
  //     setMessages(data[1]);
  //     render({ state, appEl });
  // })
  ["catch"](function (err) {
    // return Promise.reject(err);
    _state__WEBPACK_IMPORTED_MODULE_1__["default"].isLoginPending = false;
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });

    // if (err?.error === SERVER.AUTH_MISSING) {

    //     logout();
    //     render({ state, appEl });
    // } else {
    //     setError(err?.error || 'ERROR');
    //     render({ state, appEl });
    // }
  }).then(function (users) {
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setUsers)(users);
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
    return (0,_service__WEBPACK_IMPORTED_MODULE_2__.fetchGetMessages)();
  }).then(function (messages) {
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setMessages)(messages);
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
  }).then(function () {
    setInterval(refreshUsersAndMessages, 5000);
  });
}
function refreshUsersAndMessages() {
  if (!_state__WEBPACK_IMPORTED_MODULE_1__["default"].isLoggedIn) return;
  (0,_service__WEBPACK_IMPORTED_MODULE_2__.fetchLoginUsers)().then(function (users) {
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setUsers)(users);
    renderUsers({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
    return (0,_service__WEBPACK_IMPORTED_MODULE_2__.fetchGetMessages)();
  }).then(function (messages) {
    // This line makes sure that if there is no new message, it will not render.
    if (messages.length === _state__WEBPACK_IMPORTED_MODULE_1__["default"].messages.length) return;
    (0,_state__WEBPACK_IMPORTED_MODULE_1__.setMessages)(messages);
    (0,_render__WEBPACK_IMPORTED_MODULE_3__.renderMessages)({
      state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
      appEl: appEl
    });
  })["catch"](function (err) {
    if ((err === null || err === void 0 ? void 0 : err.error) === _constant__WEBPACK_IMPORTED_MODULE_0__.SERVER.AUTH_MISSING) {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.logout)();
      (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)({
        state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
        appEl: appEl
      });
    } else {
      (0,_state__WEBPACK_IMPORTED_MODULE_1__.setError)((err === null || err === void 0 ? void 0 : err.error) || 'ERROR');
      (0,_render__WEBPACK_IMPORTED_MODULE_3__.render)({
        state: _state__WEBPACK_IMPORTED_MODULE_1__["default"],
        appEl: appEl
      });
    }
  });
}
})();

/******/ })()
;
//# sourceMappingURL=script.js.map