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

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scenes_Demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/Demo */ \"./src/scenes/Demo.js\");\n/* harmony import */ var _scenes_Preloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/Preloader */ \"./src/scenes/Preloader.js\");\n//import \"./lib/phaser.min.js\";\r\n\r\n\r\n\r\nwindow.addEventListener('load', function () {\r\n\r\n\tvar config = {\r\n        width: 860,\r\n        height: 730,\r\n        type: Phaser.AUTO,\r\n        backgroundColor: \"#000000\",\r\n        scale: {\r\n\t\t\tmode: Phaser.Scale.FIT,\r\n\t\t\tautoCenter: Phaser.Scale.CENTER_BOTH\r\n\t\t},\r\n        physics: {\r\n            default: 'arcade',\r\n            arcade: {\r\n                gravity: { y: 200 }\r\n            }\r\n        },\r\n    };\r\n\r\n    var game = new Phaser.Game(config);\r\n\t\r\n\tgame.scene.add(\"Demo\", _scenes_Demo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n\tgame.scene.add(\"Preloader\", _scenes_Preloader__WEBPACK_IMPORTED_MODULE_1__[\"default\"], true);\r\n});\n\n//# sourceURL=webpack://example-2/./src/main.js?");

/***/ }),

/***/ "./src/scenes/Demo.js":
/*!****************************!*\
  !*** ./src/scenes/Demo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Demo)\n/* harmony export */ });\nclass Demo extends Phaser.Scene {\r\n    \r\n\tconstructor() {\r\n\t\tsuper(\"Demo\");\r\n\t}\r\n\r\n\tcreate() {\r\n\t\t\r\n\t}\r\n}\n\n//# sourceURL=webpack://example-2/./src/scenes/Demo.js?");

/***/ }),

/***/ "./src/scenes/Preloader.js":
/*!*********************************!*\
  !*** ./src/scenes/Preloader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Preloader)\n/* harmony export */ });\nclass Preloader extends Phaser.Scene {\r\n    \r\n    constructor() {\r\n\t\tsuper(\"Preloader\");\r\n\t}\r\n\r\n\tpreload() {\r\n\t\t\r\n\t\tthis.load.image('image_preloader', 'assets/preloader.png');\r\n\r\n        //this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start(\"Demo\"));\r\n\t}\r\n\r\n\tcreate() {\r\n\t\tthis.add.image(430, 365, 'image_preloader');\r\n\r\n        \r\n\t}\r\n}\n\n//# sourceURL=webpack://example-2/./src/scenes/Preloader.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;