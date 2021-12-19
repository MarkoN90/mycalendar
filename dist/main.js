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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_mycalendar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/mycalendar */ \"./src/modules/mycalendar.js\");\n\r\n\r\n  let calendarDiv = document.querySelector('#calendar');\r\n  let Calendar = new _modules_mycalendar__WEBPACK_IMPORTED_MODULE_0__[\"default\"](calendarDiv, {});\r\n  Calendar.render();\r\n\r\n\n\n//# sourceURL=webpack://my-calendar/./src/main.js?");

/***/ }),

/***/ "./src/modules/mycalendar.js":
/*!***********************************!*\
  !*** ./src/modules/mycalendar.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyCalendar)\n/* harmony export */ });\n/* harmony import */ var _timeFacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeFacts */ \"./src/modules/timeFacts.js\");\n\r\n\r\nclass MyCalendar {\r\n\r\n    constructor(el, config) {\r\n        \r\n        this.el = el;\r\n        this.config = config || {};\r\n        this.date = new Date();\r\n        this.buildCalendar();\r\n    }\r\n\r\n    buildCalendar() {\r\n        this.el.innerHTML = '';\r\n        this.calendar = document.createElement('div');\r\n        this.createControls();\r\n        this.createDayGrids();\r\n    }\r\n\r\n    createControls() {\r\n        let controls = document.createElement('div');\r\n\r\n        let nextBtn = document.createElement('button');\r\n        nextBtn.addEventListener('click', () =>  this.next());\r\n        nextBtn.innerText = \"Next\";\r\n\r\n\r\n        let prevBtn = document.createElement('button');\r\n        prevBtn.addEventListener('click', () =>  this.prev());\r\n        prevBtn.innerText = \"Prev\";\r\n\r\n        controls.append(prevBtn);\r\n        controls.append(nextBtn);\r\n\r\n        this.calendar.appendChild(controls);\r\n    }\r\n\r\n    createDayGrids() {\r\n\r\n        let date = this.date;\r\n        let month = _timeFacts__WEBPACK_IMPORTED_MODULE_0__.TimeFacts.convertToMonth(date.getMonth());\r\n\r\n        let firstOfThisMonth = new Date(month + ' 1,' + date.getFullYear()).getDay();\r\n        let daysSection = document.createElement('div');\r\n\r\n        let prevMonthDuration = _timeFacts__WEBPACK_IMPORTED_MODULE_0__.TimeFacts.monthDuration(_timeFacts__WEBPACK_IMPORTED_MODULE_0__.TimeFacts.convertToMonth(date.getMonth() - 1));\r\n        let prevMonthDays = prevMonthDuration - firstOfThisMonth + 1;\r\n\r\n        let dayGridNumber = 0;\r\n        let dayInMonth = 1;\r\n        let daysAfterThisMonth = 1;\r\n\r\n        for(let i = 1; i < 6; i++) {\r\n\r\n            let monthRow = document.createElement('div');\r\n            monthRow.style.display = 'flex';\r\n\r\n            for(let x = 0; x < _timeFacts__WEBPACK_IMPORTED_MODULE_0__.DAYS_IN_WEEK; x++) {\r\n\r\n                let day = document.createElement('div');\r\n\r\n                // style the day element\r\n                day.style.width = '14.27%';\r\n                day.style.height = '100px';\r\n                day.style.border = '1px solid gray';\r\n                day.style.position = 'relative';\r\n\r\n                if( dayGridNumber < firstOfThisMonth) {\r\n                    day.innerHTML = prevMonthDays;\r\n                    prevMonthDays++;\r\n\r\n                } else if ( dayInMonth > _timeFacts__WEBPACK_IMPORTED_MODULE_0__.TimeFacts.monthDuration(month)) {\r\n                    day.innerHTML = daysAfterThisMonth;\r\n                    daysAfterThisMonth ++;\r\n\r\n                } else {\r\n                    day.innerHTML = dayInMonth;\r\n                    dayInMonth++;\r\n\r\n                }\r\n\r\n                day.addEventListener('click', function (e) {\r\n                    e.target.append(document.createElement('div').innerHTML = 'event')\r\n                })\r\n\r\n                dayGridNumber++;\r\n                monthRow.append(day);\r\n            }\r\n            daysSection.appendChild(monthRow);\r\n        }\r\n\r\n        let monthDatePanel = document.createElement('div');\r\n        monthDatePanel.innerHTML = month;\r\n\r\n        this.calendar.appendChild(monthDatePanel)\r\n        this.calendar.appendChild(daysSection);\r\n    }\r\n\r\n    next() {\r\n        this.date = new Date(this.date.setMonth(this.date.getMonth() + 1))\r\n        this.buildCalendar();\r\n        this.render();\r\n    }\r\n\r\n\r\n    prev() {\r\n        this.date = new Date(this.date.setMonth(this.date.getMonth() - 1))\r\n        this.buildCalendar();\r\n        this.render();\r\n    }\r\n\r\n    render() {\r\n        this.el.append(this.calendar);\r\n    }\r\n\r\n  }\r\n\r\n\r\n\n\n//# sourceURL=webpack://my-calendar/./src/modules/mycalendar.js?");

/***/ }),

/***/ "./src/modules/timeFacts.js":
/*!**********************************!*\
  !*** ./src/modules/timeFacts.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TimeFacts\": () => (/* binding */ TimeFacts),\n/* harmony export */   \"DAYS_IN_WEEK\": () => (/* binding */ DAYS_IN_WEEK)\n/* harmony export */ });\nclass TimeFacts {\r\n\r\n    static convertToMonth(monthNum) {\r\n\r\n        switch (monthNum) {\r\n            case 0:\r\n                return 'January';\r\n            case 1:\r\n                return 'February';\r\n            case 2:\r\n                return 'March';\r\n            case 3:\r\n                return 'April';\r\n            case 4:\r\n                return 'May';\r\n            case 5:\r\n                return 'June';\r\n            case 6:\r\n                return 'July';\r\n            case 7:\r\n                return 'August';\r\n            case 8:\r\n                return 'September';\r\n            case 9:\r\n                return 'October';\r\n            case 10:\r\n                return 'November';\r\n            case 11:\r\n            case -1:\r\n                return 'December';\r\n            default:\r\n                return null;\r\n        }\r\n    }\r\n\r\n    static monthDuration(month) {\r\n\r\n        switch (month) {\r\n            case 'January':\r\n                return 31;\r\n            case 'February':\r\n                return 28;\r\n            case 'March':\r\n                return 31;\r\n            case 'April':\r\n                return 30;\r\n            case 'May':\r\n                return 31;\r\n            case 'June':\r\n                return 30;\r\n            case 'July':\r\n                return 31;\r\n            case 'August':\r\n                return 31;\r\n            case 'September':\r\n                return 30;\r\n            case 'October':\r\n                return 31;\r\n            case 'November':\r\n                return 30;\r\n            case 'December':\r\n                return 31;\r\n        }\r\n    }\r\n\r\n}\r\n\r\n\r\nconst DAYS_IN_WEEK = 7;\r\n\r\n\n\n//# sourceURL=webpack://my-calendar/./src/modules/timeFacts.js?");

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