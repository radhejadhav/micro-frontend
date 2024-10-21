"use strict";
self["webpackHotUpdatehost"]("host",{},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "08dc7415c0809265"; }
/******/ }();
/******/ 
/******/ /* webpack/runtime/sharing */
/******/ !function() {
/******/ 	__webpack_require__.federation.initOptions.shared = {	"next/dynamic": [{	version: "14.2.10",
/******/ 			get: function() { return __webpack_require__.e("node_modules_next_dynamic_js-_73d41").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/dynamic.js */ "./node_modules/next/dynamic.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/head": [{	version: "14.2.10",
/******/ 			get: function() { return __webpack_require__.e("node_modules_next_head_js-_88490").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/head.js */ "./node_modules/next/head.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/image": [{	version: "14.2.10",
/******/ 			get: function() { return __webpack_require__.e("node_modules_next_image_js-_05350").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/image.js */ "./node_modules/next/image.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/link": [{	version: "14.2.10",
/******/ 			get: function() { return __webpack_require__.e("node_modules_next_link_js-_75b30").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/link.js */ "./node_modules/next/link.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/router": [{	version: "14.2.10",
/******/ 			get: function() { return __webpack_require__.e("__federation_expose_next__router").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/router.js */ "./node_modules/next/router.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"next/script": [{	version: "14.2.10",
/******/ 			get: function() { return __webpack_require__.e("node_modules_next_script_js-_e4ba0").then(function() { return function() { return __webpack_require__(/*! ./node_modules/next/script.js */ "./node_modules/next/script.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react-dom": [{	version: "18.3.1",
/******/ 			get: function() { return __webpack_require__.e("__federation_expose_react_dom").then(function() { return function() { return __webpack_require__(/*! ./node_modules/react-dom/index.js */ "./node_modules/react-dom/index.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react/jsx-dev-runtime": [{	version: "18.3.1",
/******/ 			get: function() { return __webpack_require__.e("node_modules_react_jsx-dev-runtime_js-_57771").then(function() { return function() { return __webpack_require__(/*! ./node_modules/react/jsx-dev-runtime.js */ "./node_modules/react/jsx-dev-runtime.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react/jsx-runtime": [{	version: "18.3.1",
/******/ 			get: function() { return __webpack_require__.e("node_modules_react_jsx-runtime_js-_34d01").then(function() { return function() { return __webpack_require__(/*! ./node_modules/react/jsx-runtime.js */ "./node_modules/react/jsx-runtime.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"react": [{	version: "18.3.1",
/******/ 			get: function() { return __webpack_require__.e("__federation_expose_react").then(function() { return function() { return __webpack_require__(/*! ./node_modules/react/index.js */ "./node_modules/react/index.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":false,"strictVersion":false,"singleton":true}},],	"styled-jsx/style": [{	version: "5.1.1",
/******/ 			get: function() { return __webpack_require__.e("node_modules_styled-jsx_style_js-_d2181").then(function() { return function() { return __webpack_require__(/*! ./node_modules/styled-jsx/style.js */ "./node_modules/styled-jsx/style.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^5.1.1","strictVersion":false,"singleton":true}},],	"styled-jsx": [{	version: "5.1.1",
/******/ 			get: function() { return __webpack_require__.e("node_modules_styled-jsx_index_js-_81f81").then(function() { return function() { return __webpack_require__(/*! ./node_modules/styled-jsx/index.js */ "./node_modules/styled-jsx/index.js"); }; }); },
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":false,"requiredVersion":"^5.1.1","strictVersion":false,"singleton":true}},],}
/******/ 	__webpack_require__.S = {};
/******/ 	var initPromises = {};
/******/ 	var initTokens = {};
/******/ 	__webpack_require__.I = function(name, initScope) {
/******/ 		return __webpack_require__.federation.bundlerRuntime.I({	shareScopeName: name,
/******/ 			webpackRequire: __webpack_require__,
/******/ 			initPromises: initPromises,
/******/ 			initTokens: initTokens,
/******/ 			initScope: initScope,
/******/ 		})
/******/ 	};
/******/ }();
/******/ 
/******/ /* webpack/runtime/compat */
/******/ 
/******/ 
/******/ // noop fns to prevent runtime errors during initialization
/******/ if (typeof self !== "undefined") {
/******/ 	self.$RefreshReg$ = function () {};
/******/ 	self.$RefreshSig$ = function () {
/******/ 		return function (type) {
/******/ 			return type;
/******/ 		};
/******/ 	};
/******/ }
/******/ 
/******/ }
);