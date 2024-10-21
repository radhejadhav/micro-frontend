"use strict";
exports.id = "__federation_expose_pages__index";
exports.ids = ["__federation_expose_pages__index"];
exports.modules = {

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "webpack/sharing/consume/default/react/jsx-dev-runtime/react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "webpack/sharing/consume/default/next/dynamic/next/dynamic?ca68");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



//@ts-ignore
const AppNav = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__.e(/*! import() */ "webpack_container_remote_remote2_Navbar").then(__webpack_require__.t.bind(__webpack_require__, /*! remote2/Navbar */ "webpack/container/remote/remote2/Navbar", 23)), {
    loadableGenerated: {
        modules: [
            "pages/index.tsx -> " + "remote2/Navbar"
        ]
    },
    ssr: false
});
//@ts-ignore
const Dashboard = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__.e(/*! import() */ "webpack_container_remote_remote2_Dashboard").then(__webpack_require__.t.bind(__webpack_require__, /*! remote2/Dashboard */ "webpack/container/remote/remote2/Dashboard", 23)), {
    loadableGenerated: {
        modules: [
            "pages/index.tsx -> " + "remote2/Dashboard"
        ]
    },
    ssr: false
});
//@ts-ignore
const ProductList = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__.e(/*! import() */ "webpack_container_remote_remote2_ProductList").then(__webpack_require__.t.bind(__webpack_require__, /*! remote2/ProductList */ "webpack/container/remote/remote2/ProductList", 23)), {
    loadableGenerated: {
        modules: [
            "pages/index.tsx -> " + "remote2/ProductList"
        ]
    },
    ssr: false
});
function Home() {
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


/***/ })

};
;