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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/smoothScrolling */ \"./src/modules/smoothScrolling.js\");\n/* harmony import */ var _modules_togglePopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/togglePopup */ \"./src/modules/togglePopup.js\");\n/* harmony import */ var _modules_createTopSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/createTopSlider */ \"./src/modules/createTopSlider.js\");\n/* harmony import */ var _modules_createServices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/createServices */ \"./src/modules/createServices.js\");\n/* harmony import */ var _modules_scrollingUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/scrollingUp */ \"./src/modules/scrollingUp.js\");\n/* harmony import */ var _modules_createAccordeon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/createAccordeon */ \"./src/modules/createAccordeon.js\");\n/* harmony import */ var _modules_banPrintForms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/banPrintForms */ \"./src/modules/banPrintForms.js\");\n/* harmony import */ var _modules_sendForms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sendForms */ \"./src/modules/sendForms.js\");\n/* harmony import */ var _modules_createMobileMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/createMobileMenu */ \"./src/modules/createMobileMenu.js\");\n\n(0,_modules_smoothScrolling__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n(0,_modules_togglePopup__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n(0,_modules_createTopSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n(0,_modules_createServices__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n(0,_modules_scrollingUp__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n(0,_modules_createAccordeon__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n(0,_modules_banPrintForms__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n(0,_modules_sendForms__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n\n(0,_modules_createMobileMenu__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n\n//# sourceURL=webpack://lastproject/./src/index.js?");

/***/ }),

/***/ "./src/modules/banPrintForms.js":
/*!**************************************!*\
  !*** ./src/modules/banPrintForms.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar banPrintForms = function banPrintForms() {\n  var name = document.getElementById('form-callback-name');\n  name.addEventListener('input', function () {\n    return name.value = name.value.replace(/[^А-Яа-яёЁ]/, '');\n  });\n  var phone = document.getElementById('form-callback-phone');\n  phone.addEventListener('input', function () {\n    return phone.value = phone.value.replace(/[^\\d+]/, '');\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (banPrintForms);\n\n//# sourceURL=webpack://lastproject/./src/modules/banPrintForms.js?");

/***/ }),

/***/ "./src/modules/createAccordeon.js":
/*!****************************************!*\
  !*** ./src/modules/createAccordeon.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar createAccordeon = function createAccordeon() {\n  var accordeon = document.querySelector('.accordeon');\n  var elements = document.querySelectorAll('.accordeon .element');\n  var elementsContent = document.querySelectorAll('.accordeon .element-content');\n  elements[0].classList.add('active');\n  elementsContent[0].style.display = 'block';\n\n  var toggleContent = function toggleContent(content) {\n    if (content.style.display === 'block') {\n      content.style.display = 'none';\n    } else {\n      content.style.display = 'block';\n    }\n  };\n\n  var changeContent = function changeContent(target) {\n    elements.forEach(function (item, index) {\n      if (item === target) {\n        item.classList.toggle('active');\n        toggleContent(elementsContent[index]);\n      } else {\n        item.classList.remove('active');\n        elementsContent[index].style.display = 'none';\n      }\n    });\n  };\n\n  accordeon.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.matches('.title')) {\n      changeContent(target.closest('.element'));\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAccordeon);\n\n//# sourceURL=webpack://lastproject/./src/modules/createAccordeon.js?");

/***/ }),

/***/ "./src/modules/createMobileMenu.js":
/*!*****************************************!*\
  !*** ./src/modules/createMobileMenu.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar createMobileMenu = function createMobileMenu() {\n  var mobileMenu = document.querySelector('.mobile-menu');\n\n  var handlerMenu = function handlerMenu() {\n    mobileMenu.classList.toggle('open');\n  };\n\n  document.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.matches('.mobile-menu')) {\n      return;\n    } else if (target.closest('.mob-menu-btn')) {\n      handlerMenu();\n    } else if (mobileMenu.classList.contains('open')) {\n      handlerMenu();\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMobileMenu);\n\n//# sourceURL=webpack://lastproject/./src/modules/createMobileMenu.js?");

/***/ }),

/***/ "./src/modules/createServices.js":
/*!***************************************!*\
  !*** ./src/modules/createServices.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar createServices = function createServices() {\n  var elements = document.querySelectorAll('.services-element');\n  var right = document.querySelector('.arrow-right');\n  var left = document.querySelector('.arrow-left');\n  elements.forEach(function (item) {\n    return item.style.display = 'none';\n  });\n  elements[0].style.display = 'block';\n  elements[1].style.display = 'block';\n  elements[2].style.display = 'block';\n  var currentElement = 0;\n\n  var removePrev = function removePrev(index) {\n    elements[index].style.display = 'none';\n    elements[(index + 1) % elements.length].style.display = 'none';\n    elements[(index + 2) % elements.length].style.display = 'none';\n  };\n\n  var setNext = function setNext(index) {\n    elements[index].style.display = 'block';\n    elements[index].style.order = 1;\n    elements[(index + 1) % elements.length].style.display = 'block';\n    elements[(index + 1) % elements.length].style.order = 2;\n    elements[(index + 2) % elements.length].style.display = 'block';\n    elements[(index + 2) % elements.length].style.order = 3;\n  };\n\n  right.addEventListener('click', function () {\n    removePrev(currentElement);\n    currentElement = (currentElement + elements.length - 1) % elements.length;\n    setNext(currentElement);\n  });\n  left.addEventListener('click', function () {\n    removePrev(currentElement);\n    currentElement = (currentElement + 1) % elements.length;\n    setNext(currentElement);\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createServices);\n\n//# sourceURL=webpack://lastproject/./src/modules/createServices.js?");

/***/ }),

/***/ "./src/modules/createTopSlider.js":
/*!****************************************!*\
  !*** ./src/modules/createTopSlider.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar topSlider = function topSlider() {\n  var sliders = document.querySelectorAll('.item');\n  sliders.forEach(function (item) {\n    item.style.display = 'none';\n  });\n  sliders[0].style.display = 'block';\n  var currentSlider = 0;\n\n  var autoPlaySlider = function autoPlaySlider() {\n    sliders[currentSlider].style.display = 'none';\n    currentSlider = (currentSlider + 1) % sliders.length;\n    sliders[currentSlider].style.display = 'block';\n  };\n\n  setInterval(autoPlaySlider, 3000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://lastproject/./src/modules/createTopSlider.js?");

/***/ }),

/***/ "./src/modules/scrollingUp.js":
/*!************************************!*\
  !*** ./src/modules/scrollingUp.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar scrollingUp = function scrollingUp() {\n  var arrowUp = document.querySelector('.up');\n  var begin = document.querySelector('.main-wrapper');\n  arrowUp.addEventListener('click', function () {\n    begin.scrollIntoView({\n      behavior: \"smooth\",\n      block: \"start\"\n    });\n  });\n\n  var checkShowArrowUp = function checkShowArrowUp() {\n    if (document.documentElement.scrollTop > 2000) {\n      arrowUp.style.display = 'block';\n    } else {\n      arrowUp.style.display = 'none';\n    }\n\n    requestAnimationFrame(checkShowArrowUp);\n  };\n\n  checkShowArrowUp();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollingUp);\n\n//# sourceURL=webpack://lastproject/./src/modules/scrollingUp.js?");

/***/ }),

/***/ "./src/modules/sendForms.js":
/*!**********************************!*\
  !*** ./src/modules/sendForms.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validationForms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validationForms */ \"./src/modules/validationForms.js\");\n\n\nvar sendForms = function sendForms() {\n  var form = document.getElementById('form-callback');\n  var errorMessage = 'Что-то пошло не так.';\n  var warningMessage = 'Введите корректные данные';\n  var loadMessage = 'Загрузка...';\n  var successMessage = 'Спасибо! Мы скоро вам перезвоним.';\n  var statusMessage = document.createElement('div');\n  statusMessage.style.cssText = 'font-size: 2rem; color: #e9bb26; text-align: center';\n  form.prepend(statusMessage);\n  var inputs = form.querySelectorAll('input');\n\n  var postData = function postData(data) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(data)\n    });\n  };\n\n  var popup = document.getElementById('callback');\n\n  var resetForm = function resetForm() {\n    form.reset();\n    inputs.forEach(function (item) {\n      return item.classList.remove('success-input');\n    });\n    setTimeout(function () {\n      statusMessage.textContent = '';\n    }, 3000);\n    setTimeout(function () {\n      popup.style.display = 'none';\n    }, 5000);\n  };\n\n  form.addEventListener('submit', function (event) {\n    event.preventDefault();\n\n    if (!(0,_validationForms__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(inputs)) {\n      statusMessage.textContent = warningMessage;\n      return;\n    }\n\n    statusMessage.textContent = loadMessage;\n    var formData = new FormData(form);\n    var data = {};\n    formData.forEach(function (value, key) {\n      return data[key] = value;\n    });\n    postData(data).then(function (response) {\n      if (response.status !== 200) {\n        throw new Error(response.statusText);\n      }\n\n      resetForm();\n      statusMessage.textContent = successMessage;\n    })[\"catch\"](function (error) {\n      console.log(error);\n      statusMessage.textContent = errorMessage;\n    });\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForms);\n\n//# sourceURL=webpack://lastproject/./src/modules/sendForms.js?");

/***/ }),

/***/ "./src/modules/smoothScrolling.js":
/*!****************************************!*\
  !*** ./src/modules/smoothScrolling.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar smoothScrolling = function smoothScrolling() {\n  var anchorsMenu = document.querySelectorAll('.top-menu a');\n\n  var _iterator = _createForOfIteratorHelper(anchorsMenu),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var anchor = _step.value;\n      anchor.addEventListener(\"click\", function (event) {\n        event.preventDefault();\n\n        var _goto = anchor.getAttribute('href');\n\n        document.querySelector(_goto).scrollIntoView({\n          behavior: \"smooth\",\n          block: \"start\"\n        });\n      });\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScrolling);\n\n//# sourceURL=webpack://lastproject/./src/modules/smoothScrolling.js?");

/***/ }),

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nvar togglePopup = function togglePopup() {\n  var services = document.querySelector('.services-elements');\n  var buttonsGetPopupHeader = document.querySelectorAll('.callback-btn');\n  var buttonGetPopupServices = document.querySelector('.button-services');\n  var popup = document.getElementById('callback');\n  services.addEventListener('click', function (event) {\n    event.preventDefault();\n\n    if (event.target.closest('.fancyboxModal')) {\n      popup.style.display = 'block';\n    }\n  });\n  [].concat(_toConsumableArray(buttonsGetPopupHeader), [buttonGetPopupServices]).forEach(function (item) {\n    item.addEventListener('click', function (event) {\n      event.preventDefault();\n      popup.style.display = 'block';\n    });\n  });\n  popup.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.modal-close')) {\n      popup.style.display = 'none';\n    } else if (target.closest('.modal-callback')) {\n      return;\n    }\n\n    popup.style.display = 'none';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (togglePopup);\n\n//# sourceURL=webpack://lastproject/./src/modules/togglePopup.js?");

/***/ }),

/***/ "./src/modules/validationForms.js":
/*!****************************************!*\
  !*** ./src/modules/validationForms.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar validationForms = function validationForms(inputs) {\n  var setSuccessInput = function setSuccessInput(input) {\n    input.classList.remove('error-input');\n    input.classList.add('success-input');\n  };\n\n  var setErrorInput = function setErrorInput(input) {\n    input.classList.remove('success-input');\n    input.classList.add('error-input');\n  };\n\n  var arrayinputs = Array.from(inputs);\n  var userName = arrayinputs.find(function (item) {\n    return item.matches('#form-callback-name');\n  });\n  var userPhone = arrayinputs.find(function (item) {\n    return item.matches('#form-callback-phone');\n  });\n  inputs.forEach(function (item) {\n    setSuccessInput(item);\n  });\n  var rez = true;\n\n  if (!(userName.value.match(/^[A-Я]/) && userName.value.length > 1)) {\n    setErrorInput(userName);\n    rez = false;\n  }\n\n  if (!(userPhone.value.match(/^(\\+)?(\\d){4,}$/) && userPhone.value.length <= 16)) {\n    setErrorInput(userPhone);\n    rez = false;\n  }\n\n  return rez;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validationForms);\n\n//# sourceURL=webpack://lastproject/./src/modules/validationForms.js?");

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