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

/***/ "./src/data/Images.js":
/*!****************************!*\
  !*** ./src/data/Images.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Images)\n/* harmony export */ });\nclass Images {\r\n    \r\n    static imgMenuLogo = 'assets/menu_logo.png';\r\n    static imgMenuBackground = 'assets/menu_background.png';\r\n    \r\n    static img38195 = 'assets/units/38195.png';\r\n    static img38197 = 'assets/units/38197.png';\r\n    static img38198 = 'assets/units/38198.png';\r\n    static img38202 = 'assets/units/38202.png';\r\n    static img38204 = 'assets/units/38204.png';\r\n    static img38228 = 'assets/units/38228.png';\r\n    static img38231 = 'assets/units/38231.png';\r\n    static img38232 = 'assets/units/38232.png';\r\n    static img38233 = 'assets/units/38233.png';\r\n\r\n    \r\n\r\n    static preloadList = [\r\n        Images.imgMenuLogo,\r\n        Images.imgMenuBackground,\r\n        Images.img38195,\r\n        Images.img38197,\r\n        Images.img38198,\r\n        Images.img38202,\r\n        Images.img38204,\r\n        Images.img38228,\r\n        Images.img38231,\r\n        Images.img38232,\r\n        Images.img38233\r\n    ];\r\n}\n\n//# sourceURL=webpack://example-2/./src/data/Images.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scenes_Demo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes/Demo */ \"./src/scenes/Demo.js\");\n/* harmony import */ var _scenes_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scenes/Menu */ \"./src/scenes/Menu.js\");\n/* harmony import */ var _scenes_Preloader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scenes/Preloader */ \"./src/scenes/Preloader.js\");\n//import \"./lib/phaser.min.js\";\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('load', function () {\r\n\r\n\tlet config = {\r\n        width: 860,\r\n        height: 730,\r\n        type: Phaser.AUTO,\r\n        backgroundColor: \"#000000\",\r\n        /*\r\n        scale: {\r\n\t\t\tmode: Phaser.Scale.FIT,\r\n\t\t\tautoCenter: Phaser.Scale.CENTER_BOTH\r\n\t\t},\r\n        physics: {\r\n            default: 'arcade',\r\n            arcade: {\r\n                gravity: { y: 200 }\r\n            }\r\n        },\r\n        */\r\n    };\r\n\r\n    const game = new Phaser.Game(config);\r\n\t\r\n\t//game.scene.add(Demo.name, Demo);\r\n    game.scene.add(_scenes_Menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"].name, _scenes_Menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n\tgame.scene.add(_scenes_Preloader__WEBPACK_IMPORTED_MODULE_2__[\"default\"].name, _scenes_Preloader__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\r\n    game.scene.add(Boot.name, Boot, true);\r\n});\r\n\r\nclass Boot extends Phaser.Scene {\r\n    static name = 'Boot';\r\n\tpreload() {\r\n\t\tthis.load.image('image_preloader', 'assets/preloader.png');\r\n        //this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start(\"Preloader\"));\r\n        this.load.on(Phaser.Loader.Events.COMPLETE, function(){\r\n\t\t\tthis.scene.start(\"Preloader\");\r\n\t\t}, this);\r\n\t}\r\n}\n\n//# sourceURL=webpack://example-2/./src/main.js?");

/***/ }),

/***/ "./src/scenes/Demo.js":
/*!****************************!*\
  !*** ./src/scenes/Demo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Demo)\n/* harmony export */ });\n/* harmony import */ var _data_Images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/Images */ \"./src/data/Images.js\");\n\r\n\r\nclass Demo extends Phaser.Scene {\r\n    static name = 'Demo';\r\n\r\n\tconstructor() {\r\n\t\tsuper(Demo.name);\r\n\t}\r\n\r\n\tpreload ()\r\n    {\r\n        \r\n    }\r\n\r\n\tcreate() {\r\n\t\tthis.add.image(400, 300, _data_Images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].img38233);\r\n\t}\r\n\r\n\tupdate ()\r\n    {\r\n        \r\n    }\r\n}\n\n//# sourceURL=webpack://example-2/./src/scenes/Demo.js?");

/***/ }),

/***/ "./src/scenes/Menu.js":
/*!****************************!*\
  !*** ./src/scenes/Menu.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _data_Images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/Images */ \"./src/data/Images.js\");\n\r\n\r\nclass Menu extends Phaser.Scene {\r\n    static name = 'Menu';\r\n\r\n\tconstructor() {\r\n\t\tsuper(Menu.name);\r\n\t}\r\n\r\n\tpreload ()\r\n    {\r\n        \r\n    }\r\n\r\n\tcreate() {\r\n\t\tthis.add.image(430, 365, _data_Images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].imgMenuBackground);\r\n\t\tthis.add.image(205, 50, _data_Images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].imgMenuLogo);\r\n\t}\r\n\r\n\tupdate ()\r\n    {\r\n        \r\n    }\r\n}\n\n//# sourceURL=webpack://example-2/./src/scenes/Menu.js?");

/***/ }),

/***/ "./src/scenes/Preloader.js":
/*!*********************************!*\
  !*** ./src/scenes/Preloader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Preloader)\n/* harmony export */ });\n/* harmony import */ var _data_Images__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/Images */ \"./src/data/Images.js\");\n/* harmony import */ var _scenes_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scenes/Menu */ \"./src/scenes/Menu.js\");\n\r\n\r\n\r\nclass Preloader extends Phaser.Scene {\r\n    static name = 'Preloader';\r\n\r\n\tconstructor() {\r\n\t\tsuper(Preloader.name);\r\n\t}\r\n\r\n\tpreload() {\r\n\t\tthis.add.image(430, 365, 'image_preloader');\r\n\r\n\t\tlet progress = this.add.graphics();\r\n\r\n\t\tthis.load.on(Phaser.Loader.Events.PROGRESS, function(value){\r\n\t\t\tprogress.clear();\r\n        \tprogress.fillStyle(0xffffff, 1);\r\n        \tprogress.fillRect(0, 270, 800 * value, 60);\r\n\t\t});\r\n\r\n\t\tthis.load.on(Phaser.Loader.Events.COMPLETE, function () {\r\n\t\t\tprogress.destroy();\r\n\t\t\tthis.scene.start(_scenes_Menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"].name);\r\n\t\t}, this);\r\n\r\n\t\t_data_Images__WEBPACK_IMPORTED_MODULE_0__[\"default\"].preloadList.forEach(element => {\r\n\t\t\tthis.load.image(element, element);\r\n\t\t});\r\n\t}\r\n\r\n\tcreate() {\r\n\t\t\r\n\t}\r\n}\n\n//# sourceURL=webpack://example-2/./src/scenes/Preloader.js?");

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