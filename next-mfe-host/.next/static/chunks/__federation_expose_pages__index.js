"use strict";
(self["webpackChunkhost"] = self["webpackChunkhost"] || []).push([["__federation_expose_pages__index"],{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "webpack/sharing/consume/default/next/dynamic/next/dynamic?ca68");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "webpack/sharing/consume/default/react/react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _s = $RefreshSig$();


//@ts-ignore
const AppNav = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__.e(/*! import() */ "webpack_container_remote_remote2_Navbar").then(__webpack_require__.t.bind(__webpack_require__, /*! remote2/Navbar */ "webpack/container/remote/remote2/Navbar", 23)), {
    loadableGenerated: {
        modules: [
            "pages/index.tsx -> " + "remote2/Navbar"
        ]
    },
    ssr: false
});
_c = AppNav;
//@ts-ignore
const Dashboard = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__.e(/*! import() */ "webpack_container_remote_remote2_Dashboard").then(__webpack_require__.t.bind(__webpack_require__, /*! remote2/Dashboard */ "webpack/container/remote/remote2/Dashboard", 23)), {
    loadableGenerated: {
        modules: [
            "pages/index.tsx -> " + "remote2/Dashboard"
        ]
    },
    ssr: false
});
_c1 = Dashboard;
//@ts-ignore
const ProductList = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__.e(/*! import() */ "webpack_container_remote_remote2_ProductList").then(__webpack_require__.t.bind(__webpack_require__, /*! remote2/ProductList */ "webpack/container/remote/remote2/ProductList", 23)), {
    loadableGenerated: {
        modules: [
            "pages/index.tsx -> " + "remote2/ProductList"
        ]
    },
    ssr: false
});
_c2 = ProductList;
function Home() {
    _s();
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("Blog");
    const renderPages = (page)=>{
        switch(page){
            case "Products":
                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProductList, {}, void 0, false, {
                    fileName: "/home/cloud-ops/Desktop/microfrontend/next-mfe-host/src/pages/index.tsx",
                    lineNumber: 17,
                    columnNumber: 16
                }, this);
            case "Pricing":
                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: "Princing Page"
                }, void 0, false);
            case "Blog":
                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: "Blogs Page"
                }, void 0, false);
            default:
                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: "No Page to show"
                }, void 0, false);
        }
    };
    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AppNav, {
                    setCurrentPage: setCurrentPage
                }, void 0, false, {
                    fileName: "/home/cloud-ops/Desktop/microfrontend/next-mfe-host/src/pages/index.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Dashboard, {
                    page: currentPage,
                    children: renderPages(currentPage)
                }, void 0, false, {
                    fileName: "/home/cloud-ops/Desktop/microfrontend/next-mfe-host/src/pages/index.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "/home/cloud-ops/Desktop/microfrontend/next-mfe-host/src/pages/index.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Home, "LQIJ3LbBWTc2c+wIIuKQsti149U=");
_c3 = Home;
var _c, _c1, _c2, _c3;
$RefreshReg$(_c, "AppNav");
$RefreshReg$(_c1, "Dashboard");
$RefreshReg$(_c2, "ProductList");
$RefreshReg$(_c3, "Home");


;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

}]);