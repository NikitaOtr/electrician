/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/smoothScrolling */ \"./src/modules/smoothScrolling.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_topSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/topSlider */ \"./src/modules/topSlider.js\");\n/* harmony import */ var _modules_toggleServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/toggleServices */ \"./src/modules/toggleServices.js\");\n/* harmony import */ var _modules_scrollingUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scrollingUp */ \"./src/modules/scrollingUp.js\");\n\n(0,_modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n(0,_modules_topSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n(0,_modules_toggleServices__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n(0,_modules_scrollingUp__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://lastproject/./src/index.js?");

/***/ }),

/***/ "./src/modules/scrollingUp.js":
/*!************************************!*\
  !*** ./src/modules/scrollingUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scrollingUp = function scrollingUp() {\n  var arrowUp = document.querySelector('.up');\n  var begin = document.querySelector('.main-wrapper');\n  arrowUp.addEventListener('click', function () {\n    begin.scrollIntoView({\n      behavior: \"smooth\",\n      block: \"start\"\n    });\n  });\n\n  var checkShow = function checkShow() {\n    if (document.documentElement.scrollTop > 2000) {\n      arrowUp.style.display = 'block';\n    } else {\n      arrowUp.style.display = 'none';\n    }\n\n    requestAnimationFrame(checkShow);\n  };\n\n  checkShow();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollingUp);\n\n//# sourceURL=webpack://lastproject/./src/modules/scrollingUp.js?");

/***/ }),

/***/ "./src/modules/smoothScrolling.js":
/*!****************************************!*\
  !*** ./src/modules/smoothScrolling.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar navigation = function navigation() {\n  var anchorsMenu = document.querySelectorAll('.top-menu a');\n\n  var _iterator = _createForOfIteratorHelper(anchorsMenu),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var anchor = _step.value;\n      anchor.addEventListener(\"click\", function (event) {\n        event.preventDefault();\n\n        var _goto = anchor.getAttribute('href');\n\n        document.querySelector(_goto).scrollIntoView({\n          behavior: \"smooth\",\n          block: \"start\"\n        });\n      });\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigation);\n\n//# sourceURL=webpack://lastproject/./src/modules/smoothScrolling.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar togglePopup = function togglePopup() {\n  var services = document.querySelector('.services-elements');\n  var buttonGetPopupHeader = document.querySelector('.callback-bt');\n  var buttonGetPopupServices = document.querySelector('.button-services');\n  var popup = document.getElementById('callback');\n  services.addEventListener('click', function (event) {\n    if (event.target.closest('.fancyboxModal')) {\n      popup.style.display = 'block';\n    }\n  });\n  [buttonGetPopupHeader, buttonGetPopupServices].forEach(function (item) {\n    item.addEventListener('click', function () {\n      return popup.style.display = 'block';\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.modal-close')) {\n      popup.style.display = 'none';\n    } else if (target.closest('.modal-callback')) {\n      return;\n    }\n\n    popup.style.display = 'none';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://lastproject/./src/modules/togglePopup.js?");

/***/ }),

/***/ "./src/modules/toggleServices.js":
/*!***************************************!*\
  !*** ./src/modules/toggleServices.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar toggleServices = function toggleServices() {\n  var elements = document.querySelectorAll('.services-element');\n  var right = document.querySelector('.arrow-right');\n  elements.forEach(function (item) {\n    return item.style.display = 'none';\n  });\n  elements[0].style.display = 'block';\n  elements[1].style.display = 'block';\n  elements[2].style.display = 'block'; // console.log(elements);\n\n  var current = 0;\n\n  var removePrev = function removePrev(index) {\n    elements[index].style.display = 'none';\n    elements[(index + 1) % elements.length].style.display = 'none';\n    elements[(index + 2) % elements.length].style.display = 'none';\n  };\n\n  var setNext = function setNext(index) {\n    elements[index].style.display = 'block';\n    elements[(index + 1) % elements.length].style.display = 'block';\n    elements[(index + 2) % elements.length].style.display = 'block';\n  };\n\n  var autoPlay = function autoPlay() {\n    removePrev(current);\n    current = (current + elements.length - 1) % elements.length;\n    setNext(current);\n  }; // console.log(right);\n\n\n  right.addEventListener('click', autoPlay); // setInterval(autoPlay, 1000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toggleServices);\n\n//# sourceURL=webpack://lastproject/./src/modules/toggleServices.js?");

/***/ }),

/***/ "./src/modules/topSlider.js":
/*!**********************************!*\
  !*** ./src/modules/topSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar topSlider = function topSlider() {\n  var sliders = document.querySelectorAll('.item');\n  sliders.forEach(function (item) {\n    item.style.display = 'none';\n  });\n  sliders[0].style.display = 'block';\n  var currentSlider = 0;\n\n  var autoPlaySlider = function autoPlaySlider() {\n    sliders[currentSlider].style.display = 'none';\n    currentSlider = (currentSlider + 1) % sliders.length;\n    sliders[currentSlider].style.display = 'block';\n  };\n\n  setInterval(autoPlaySlider, 3000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://lastproject/./src/modules/topSlider.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;