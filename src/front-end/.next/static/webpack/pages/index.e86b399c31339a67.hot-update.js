"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./next.config.js":
/*!************************!*\
  !*** ./next.config.js ***!
  \************************/
/***/ (function(module) {

eval("\n/** @type {import('next').NextConfig} */ var nextConfig = {\n    reactStrictMode: true\n};\nmodule.exports = {\n    nextConfig: nextConfig,\n    process: {\n        env: {\n            NEXT_PUBLIC_RPC_URL: \"http://127.0.0.1:8545/\",\n            ContractAddress: \"0x76F1BB25627d47c30A5a6fCb62B2Af4ff97b4702\"\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9uZXh0LmNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiQUFDQTtBQURBLHdDQUF3QyxDQUN4QyxJQUFNQSxVQUFVLEdBQUc7SUFDakJDLGVBQWUsRUFBRSxJQUFJO0NBQ3RCO0FBRURDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0lBQ2ZILFVBQVUsRUFBVkEsVUFBVTtJQUNWSSxPQUFPLEVBQUU7UUFDUEMsR0FBRyxFQUFFO1lBQ0hDLG1CQUFtQixFQUFFLHdCQUF3QjtZQUM3Q0MsZUFBZSxFQUFFLDRDQUE0QztTQUM5RDtLQUNGO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbmV4dC5jb25maWcuanM/MDFiNCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQHR5cGUge2ltcG9ydCgnbmV4dCcpLk5leHRDb25maWd9ICovXG5jb25zdCBuZXh0Q29uZmlnID0ge1xuICByZWFjdFN0cmljdE1vZGU6IHRydWUsXG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBuZXh0Q29uZmlnLFxuICBwcm9jZXNzOiB7XG4gICAgZW52OiB7XG4gICAgICBORVhUX1BVQkxJQ19SUENfVVJMOiAnaHR0cDovLzEyNy4wLjAuMTo4NTQ1LycsXG4gICAgICBDb250cmFjdEFkZHJlc3M6ICcweDc2RjFCQjI1NjI3ZDQ3YzMwQTVhNmZDYjYyQjJBZjRmZjk3YjQ3MDInXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsibmV4dENvbmZpZyIsInJlYWN0U3RyaWN0TW9kZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfUlBDX1VSTCIsIkNvbnRyYWN0QWRkcmVzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./next.config.js\n");

/***/ })

});