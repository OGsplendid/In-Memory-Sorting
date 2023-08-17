/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/Table.js":
/*!*************************!*\
  !*** ./src/js/Table.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Table; }
/* harmony export */ });
class Table {
  constructor(element, array) {
    try {
      this.element = element;
    } catch (error) {
      throw new Error('error');
    }

    this.array = array;

    // this.types = {
    //   id: 'number',
    //   title: 'string',
    //   imdb: 'number',
    //   year: 'number',
    // };

    this.onClick = this.onClick.bind(this);
    this.element.addEventListener('click', this.onClick);
  }

  static createRow(obj) {
    const row = document.createElement('ul');
    row.classList.add('row', 'sub');
    for (const key in obj) {
      const item = document.createElement('li');
      item.classList.add('cell', key);
      item.textContent = obj[key];
      row.insertAdjacentElement('beforeend', item);
    }
    return row;
  }

  renderTable() {
    for (const item of this.array) {
      const movie = Table.createRow(item);
      this.element.insertAdjacentElement('beforeend', movie);
    }
  }

  clearTable() {
    const rows = this.element.querySelectorAll('.sub');
    rows.forEach((el) => {
      el.remove();
    });
  }

  sortData(el) {
    if (this.element.classList.contains('sorted')) {
      if (el === 'title') {
        this.array.sort((a, b) => b[el].localeCompare(a[el]));
      } else {
        this.array.sort((a, b) => b[el] - a[el]);
      }
      this.element.classList.remove('sorted');
    } else {
      if (el === 'title') {
        this.array.sort((a, b) => a[el].localeCompare(b[el]));
      } else {
        this.array.sort((a, b) => a[el] - b[el]);
      }
      this.element.classList.add('sorted');
    }
  }

  onClick(e) {
    if (e.target.classList.contains('main-cell')) {
      const key = e.target.textContent;
      this.sortData(key);
      this.clearTable();
      this.renderTable();
    }
  }
}


/***/ }),

/***/ "./src/js/dataBase.json":
/*!******************************!*\
  !*** ./src/js/dataBase.json ***!
  \******************************/
/***/ (function(module) {

module.exports = JSON.parse('[{"id":26,"title":"Побег из Шоушенка","imdb":9.3,"year":1994},{"id":25,"title":"Крёстный отец","imdb":9.2,"year":1972},{"id":27,"title":"Крёстный отец 2","imdb":9,"year":1974},{"id":1047,"title":"Тёмный рыцарь","imdb":9,"year":2008},{"id":223,"title":"Криминальное чтиво","imdb":8.9,"year":1994}]');

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!****************!*\
  !*** ./app.js ***!
  \****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_js_Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/js/Table */ "./src/js/Table.js");
/* harmony import */ var _src_css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/css/style.css */ "./src/css/style.css");
/* harmony import */ var _src_js_dataBase_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/js/dataBase.json */ "./src/js/dataBase.json");




const table = new _src_js_Table__WEBPACK_IMPORTED_MODULE_0__["default"](document.querySelector('.table'), _src_js_dataBase_json__WEBPACK_IMPORTED_MODULE_2__);
table.renderTable();

}();
/******/ })()
;
//# sourceMappingURL=main.js.map