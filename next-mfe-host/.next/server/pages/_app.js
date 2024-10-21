"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
// import "@/styles/globals.css";

function App({ Component, pageProps }) {
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {
        ...pageProps
    }, void 0, false, {
        fileName: "/home/cloud-ops/Desktop/microfrontend/next-mfe-host/src/pages/_app.tsx",
        lineNumber: 5,
        columnNumber: 10
    }, this);
}


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
].reduce((p, handler) => (handler('pages/_app', p), p), promises)
).then(() => (__webpack_require__.X(0, ["vendor-chunks/@module-federation"], () => (__webpack_exec__("./node_modules/.federation/entry.9a4720cba393c609e3344abaea5665fd.js"), __webpack_exec__("./src/pages/_app.tsx")))));
module.exports = __webpack_exports__;

})();