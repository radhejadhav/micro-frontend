"use strict";
(() => {
var exports = {};
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./src/pages/_document.tsx":
/*!*********************************!*\
  !*** ./src/pages/_document.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);


function Document() {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Html, {
        lang: "en",
        children: [
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Head, {}, void 0, false, {
                fileName: "/home/cloud-ops/Desktop/microfrontend/next-mfe-host/src/pages/_document.tsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("body", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.Main, {}, void 0, false, {
                        fileName: "/home/cloud-ops/Desktop/microfrontend/next-mfe-host/src/pages/_document.tsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_1__.NextScript, {}, void 0, false, {
                        fileName: "/home/cloud-ops/Desktop/microfrontend/next-mfe-host/src/pages/_document.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "/home/cloud-ops/Desktop/microfrontend/next-mfe-host/src/pages/_document.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "/home/cloud-ops/Desktop/microfrontend/next-mfe-host/src/pages/_document.tsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}


/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
__webpack_require__("./node_modules/.federation/entry.9a4720cba393c609e3344abaea5665fd.js");
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))



var promises = [];
var __webpack_exports__ = Promise.all([
	__webpack_require__.f.consumes || function(chunkId, promises) {},
	__webpack_require__.f.remotes || function(chunkId, promises) {},
].reduce((p, handler) => (handler('pages/_document', p), p), promises)
).then(() => (__webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc","vendor-chunks/@module-federation"], () => (__webpack_exec__("./node_modules/.federation/entry.9a4720cba393c609e3344abaea5665fd.js"), __webpack_exec__("./src/pages/_document.tsx")))));
module.exports = __webpack_exports__;

})();