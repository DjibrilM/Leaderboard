/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-color: rgba(135, 63, 236, 0.968);
  --text-color: rgb(15, 14, 14);
  --white-color: #fff;
  --text-font: 15px;
  --heading-large-font: 25px;
  --heading-medium-font: 30px;
}

* {
  margin: 0;
  padding: 0;
}

body {
  background: linear-gradient(to right, rgba(103, 10, 232, 0.634), rgba(181, 7, 181, 0.618));
  font-family: 'Lato', sans-serif;
  scroll-behavior: smooth;
}

main {
  display: flex;
  margin-top: 50px;
  width: 100%;
  justify-content: center;
}

.score-section {
  background: var(--white-color);
  margin: 30px;
  flex-basis: 45%;
  min-height: 500px;
}

.score-section header {
  width: 100%;
  height: 60px;
  position: relative;
  background-color: var(--primary-color);
}

.score-section header .header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.logo {
  position: fixed;
  top: 20px;
  color: white;
}

.title-container {
  display: flex;
  gap: 10px;
  color: white;
  position: relative;
  bottom: 10px;
}

.title-container img {
  width: 30px;
}

.refresh-btn {
  padding: 12px 30px;
  position: relative;
  font-size: var(--text-font);
  color: var(--primary-color);
  bottom: 10px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  background-color: var(--white-color);
  transition: 0.1s ease-in-out;
}

.refresh-btn.loading i {
  animation: spin 0.5s linear infinite;
  height: 10px;
}

@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}

button:active {
  transform: scale(0.9);
  box-shadow: 2px 6px 24px 6px rgba(0, 0, 0, 0.43);
  -webkit-box-shadow: 2px 6px 24px 6px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 2px 6px 24px 6px rgba(0, 0, 0, 0.43);
}

.score-section ul {
  margin: 10px;
  gap: 40px;
  max-height: calc(100vh - 250px);
  overflow: auto;
  padding-right: 10px;
}

.loading-indicator {
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.score-section ul::-webkit-scrollbar {
  background-color: transparent;
  width: 5px;
}

.score-section ul::-webkit-scrollbar-thumb {
  background-color: var(--primary-color);
  border-radius: 10px;
}

.score-section ul li {
  margin: 20px 0;
  list-style: none;
  height: 70px;
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(0, 0, 0, 0.222);
}

.person-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.score-section ul li .person-infos-icon {
  display: flex;
  width: 50px;
  position: relative;
  right: 10px;
  color: white;
  height: 50px;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
}

.form-section {
  background: var(--white-color);
  margin: 30px 0;
  flex-basis: 30%;
  height: 100%;
}

.form-section header {
  width: 100%;
  height: 60px;
  background-color: var(--primary-color);
}

.form-section header .header-container {
  display: flex;
  height: 100%;
  align-items: center;
  color: var(--white-color);
  padding: 0 20px;
}

.form-section form {
  margin: 20px;
  display: flex;
  flex-direction: column;
}

.form-section form .input-container {
  margin: 10px 0;
  display: flex;
  width: 100%;
  border: 0.5px solid rgba(0, 0, 0, 0.36);
}

.form-section form .input-container input {
  padding: 15px 20px;
  width: 100%;
  border: none;
}

.form-section form button {
  margin-top: 20px;
  padding: 15px 20px;
  outline: none;
  background-color: var(--primary-color);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader {
  display: none;
}

.form-section form button.loading h4 {
  display: none;
}

/* //loading spinner */
.form-section form button.loading .loader {
  display: block;
}
`, "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAEA;EACE,0CAA0C;EAC1C,6BAA6B;EAC7B,mBAAmB;EACnB,iBAAiB;EACjB,0BAA0B;EAC1B,2BAA2B;AAC7B;;AAEA;EACE,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,0FAA0F;EAC1F,+BAA+B;EAC/B,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,WAAW;EACX,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;EAC9B,YAAY;EACZ,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,eAAe;EACf,SAAS;EACT,YAAY;AACd;;AAEA;EACE,aAAa;EACb,SAAS;EACT,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,2BAA2B;EAC3B,2BAA2B;EAC3B,YAAY;EACZ,eAAe;EACf,kBAAkB;EAClB,YAAY;EACZ,oCAAoC;EACpC,4BAA4B;AAC9B;;AAEA;EACE,oCAAoC;EACpC,YAAY;AACd;;AAEA;EACE;IACE,iCAAiC;EACnC;AACF;;AAEA;EACE,qBAAqB;EACrB,gDAAgD;EAChD,wDAAwD;EACxD,qDAAqD;AACvD;;AAEA;EACE,YAAY;EACZ,SAAS;EACT,+BAA+B;EAC/B,cAAc;EACd,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,6BAA6B;EAC7B,UAAU;AACZ;;AAEA;EACE,sCAAsC;EACtC,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,8BAA8B;EAC9B,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,sCAAsC;AACxC;;AAEA;EACE,8BAA8B;EAC9B,cAAc;EACd,eAAe;EACf,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,cAAc;EACd,aAAa;EACb,WAAW;EACX,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;EAClB,aAAa;EACb,sCAAsC;EACtC,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA,sBAAsB;AACtB;EACE,cAAc;AAChB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');\n\n:root {\n  --primary-color: rgba(135, 63, 236, 0.968);\n  --text-color: rgb(15, 14, 14);\n  --white-color: #fff;\n  --text-font: 15px;\n  --heading-large-font: 25px;\n  --heading-medium-font: 30px;\n}\n\n* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background: linear-gradient(to right, rgba(103, 10, 232, 0.634), rgba(181, 7, 181, 0.618));\n  font-family: 'Lato', sans-serif;\n  scroll-behavior: smooth;\n}\n\nmain {\n  display: flex;\n  margin-top: 50px;\n  width: 100%;\n  justify-content: center;\n}\n\n.score-section {\n  background: var(--white-color);\n  margin: 30px;\n  flex-basis: 45%;\n  min-height: 500px;\n}\n\n.score-section header {\n  width: 100%;\n  height: 60px;\n  position: relative;\n  background-color: var(--primary-color);\n}\n\n.score-section header .header-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n}\n\n.logo {\n  position: fixed;\n  top: 20px;\n  color: white;\n}\n\n.title-container {\n  display: flex;\n  gap: 10px;\n  color: white;\n  position: relative;\n  bottom: 10px;\n}\n\n.title-container img {\n  width: 30px;\n}\n\n.refresh-btn {\n  padding: 12px 30px;\n  position: relative;\n  font-size: var(--text-font);\n  color: var(--primary-color);\n  bottom: 10px;\n  cursor: pointer;\n  border-radius: 4px;\n  border: none;\n  background-color: var(--white-color);\n  transition: 0.1s ease-in-out;\n}\n\n.refresh-btn.loading i {\n  animation: spin 0.5s linear infinite;\n  height: 10px;\n}\n\n@keyframes spin {\n  to {\n    -webkit-transform: rotate(360deg);\n  }\n}\n\nbutton:active {\n  transform: scale(0.9);\n  box-shadow: 2px 6px 24px 6px rgba(0, 0, 0, 0.43);\n  -webkit-box-shadow: 2px 6px 24px 6px rgba(0, 0, 0, 0.43);\n  -moz-box-shadow: 2px 6px 24px 6px rgba(0, 0, 0, 0.43);\n}\n\n.score-section ul {\n  margin: 10px;\n  gap: 40px;\n  max-height: calc(100vh - 250px);\n  overflow: auto;\n  padding-right: 10px;\n}\n\n.loading-indicator {\n  width: 100%;\n  height: 200px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.score-section ul::-webkit-scrollbar {\n  background-color: transparent;\n  width: 5px;\n}\n\n.score-section ul::-webkit-scrollbar-thumb {\n  background-color: var(--primary-color);\n  border-radius: 10px;\n}\n\n.score-section ul li {\n  margin: 20px 0;\n  list-style: none;\n  height: 70px;\n  display: flex;\n  padding: 0 20px;\n  align-items: center;\n  justify-content: space-between;\n  border: 1px solid rgba(0, 0, 0, 0.222);\n}\n\n.person-info {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.score-section ul li .person-infos-icon {\n  display: flex;\n  width: 50px;\n  position: relative;\n  right: 10px;\n  color: white;\n  height: 50px;\n  border-radius: 100%;\n  justify-content: center;\n  align-items: center;\n  background-color: var(--primary-color);\n}\n\n.form-section {\n  background: var(--white-color);\n  margin: 30px 0;\n  flex-basis: 30%;\n  height: 100%;\n}\n\n.form-section header {\n  width: 100%;\n  height: 60px;\n  background-color: var(--primary-color);\n}\n\n.form-section header .header-container {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  color: var(--white-color);\n  padding: 0 20px;\n}\n\n.form-section form {\n  margin: 20px;\n  display: flex;\n  flex-direction: column;\n}\n\n.form-section form .input-container {\n  margin: 10px 0;\n  display: flex;\n  width: 100%;\n  border: 0.5px solid rgba(0, 0, 0, 0.36);\n}\n\n.form-section form .input-container input {\n  padding: 15px 20px;\n  width: 100%;\n  border: none;\n}\n\n.form-section form button {\n  margin-top: 20px;\n  padding: 15px 20px;\n  outline: none;\n  background-color: var(--primary-color);\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  color: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.loader {\n  display: none;\n}\n\n.form-section form button.loading h4 {\n  display: none;\n}\n\n/* //loading spinner */\n.form-section form button.loading .loader {\n  display: block;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/score.js":
/*!*********************************!*\
  !*** ./src/components/score.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const scoreEl = (name, score) => {
  const generateIcon = name.split('')[0];
  const element = document.createElement('li');
  element.className = 'person-info';
  element.innerHTML = `
    <div class="person-info">
    <div class="person-infos-icon">
        <h1>${generateIcon}</h1>
    </div>
    <h4>${name}</h4>
    </div>


   <div class="score-infos">
    <p>score: <strong>${score}</strong></p>
    </div>
    `;
  return element;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scoreEl);

/***/ }),

/***/ "./src/utilities/networking.js":
/*!*************************************!*\
  !*** ./src/utilities/networking.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchScores: () => (/* binding */ fetchScores),
/* harmony export */   postScore: () => (/* binding */ postScore)
/* harmony export */ });
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';
const uniqueId = 'lvEo1fojlN7C2HMlW2Kg';

const fetchScores = async () => {
  try {
    const request = await fetch(`${url}games/${uniqueId}/scores`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await request.json();
    return response;
  } catch (error) {
    throw new Error(error);
  }
};


const postScore = async (requestBody) => {
  try {
    const request = await fetch(`${url}games/${uniqueId}/scores`, {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const response = await request.json();

    return response;
  } catch (error) {
    throw new Error(error);
  }
};


/***/ }),

/***/ "./src/check.png":
/*!***********************!*\
  !*** ./src/check.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "check.png";

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _check_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check.png */ "./src/check.png");
/* harmony import */ var _utilities_networking__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities/networking */ "./src/utilities/networking.js");
/* harmony import */ var _components_score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/score */ "./src/components/score.js");





const addScoreForm = document.querySelector('form');
const userName = document.querySelector('.username');
const scoreInput = document.querySelector('.scoreInput');
const scoreList = document.querySelector('ul');
const submitButton = document.querySelector('.submit-button');
const listLoadingIndicator = document.querySelector('.loading-indicator');
const refreshBtn = document.querySelector('.refresh-btn');
let scoresArr = [];

/// print score
const printScore = () => {
  scoreList.innerHTML = '';
  scoresArr.forEach((score) => {
    scoreList.appendChild((0,_components_score__WEBPACK_IMPORTED_MODULE_3__["default"])(score.user, score.score));
  });
};
///

// add score
const sendScore = async (e) => {
  e.preventDefault();
  if (userName.value.trim().length === 0 || scoreInput.value.trim().length === 0) {
    return alert('No value provided');
  }

  const newScore = {
    user: userName.value,
    score: scoreInput.value,
  };
  submitButton.disabled = true;
  submitButton.classList.add('loading');
  try {
    await (0,_utilities_networking__WEBPACK_IMPORTED_MODULE_2__.postScore)(newScore);
    scoresArr.unshift(newScore);
    printScore();
    submitButton.disabled = false;
    submitButton.classList.remove('loading');
  } catch (error) {
    alert('failed to register');
    submitButton.disabled = false;
  }

  return 'xxx';
};
///

// fetch loaded data
const loadData = async () => {
  try {
    const fetch = await (0,_utilities_networking__WEBPACK_IMPORTED_MODULE_2__.fetchScores)();
    scoresArr = fetch.result;
    listLoadingIndicator.classList.add('hide');
    printScore();
  } catch (error) {
    listLoadingIndicator.classList.add('hide');
  }
};
//

// refresh
const refresh = async () => {
  refreshBtn.classList.add('loading');
  try {
    const fetch = await (0,_utilities_networking__WEBPACK_IMPORTED_MODULE_2__.fetchScores)();
    scoresArr = fetch.result;
    printScore();
    refreshBtn.classList.remove('loading');
  } catch (error) {
    alert('fail to refresh.');
    refreshBtn.classList.remove('loading');
  }
};

addScoreForm.addEventListener('submit', sendScore);
window.addEventListener('load', loadData);
refreshBtn.addEventListener('click', refresh);

})();

/******/ })()
;
//# sourceMappingURL=main6910977747916575dccb.js.map