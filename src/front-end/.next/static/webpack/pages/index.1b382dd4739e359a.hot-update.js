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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), isConnected = ref[0], setIsConnected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), signer = ref1[0], setSigner = ref1[1];\n    var connect = function() {\n        var _ref = _asyncToGenerator(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var connectedProvider;\n            return _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(typeof window.ethereum !== \"undefined\")) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return ethereum.request({\n                            method: \"eth_requestAccounts\"\n                        });\n                    case 4:\n                        setIsConnected(true);\n                        connectedProvider = new ethers.providers.Web3Provider(window.ethereum);\n                        setSigner(connectedProvider.getSigner());\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 12:\n                        _ctx.next = 15;\n                        break;\n                    case 14:\n                        {\n                            setIsConnected(false);\n                        }\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    9\n                ]\n            ]);\n        }));\n        return function connect() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var execute = function() {\n        var _ref = _asyncToGenerator(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function execute() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),\n        children: [\n            \"Hello World!\",\n            isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return execute();\n                },\n                children: \"Execute\"\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 23\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return connect();\n                },\n                children: \"Connect\"\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 32,\n                columnNumber: 78\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"9IfO44HR9qXRF500kuPt0X8Jwu0=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNEI7QUFDRTtBQUNnQjtBQUNkOztBQUVqQixTQUFTSSxJQUFJLEdBQUc7O0lBQzdCLElBQXNDRCxHQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBTnZELFdBTW9CLEdBQW9CQSxHQUFlLEdBQW5DLEVBTnBCLGNBTW9DLEdBQUlBLEdBQWUsR0FBbkI7SUFDbEMsSUFBNEJBLElBQVUsR0FBVkEsK0NBQVEsRUFBRSxFQVB4QyxNQU9lLEdBQWVBLElBQVUsR0FBekIsRUFQZixTQU8wQixHQUFJQSxJQUFVLEdBQWQ7SUFFeEIsSUFBSU0sT0FBTzttQkFBRyxxTUFBWTtnQkFLaEJDLGlCQUFpQjs7Ozs0QkFKckIsU0FBT0MsTUFBTSxDQUFDQyxRQUFRLEtBQUssV0FBVzs7Ozs7OytCQUVoQ0EsUUFBUSxDQUFDQyxPQUFPLENBQUM7NEJBQUVDLE1BQU0sRUFBRSxxQkFBcUI7eUJBQUUsQ0FBQzs7d0JBQ3pEUixjQUFjLENBQUMsSUFBSSxDQUFDO3dCQUNoQkksaUJBQWlCLEdBQUcsSUFBSUssTUFBTSxDQUFDQyxTQUFTLENBQUNDLFlBQVksQ0FBQ04sTUFBTSxDQUFDQyxRQUFRLENBQUM7d0JBQzFFSixTQUFTLENBQUNFLGlCQUFpQixDQUFDUSxTQUFTLEVBQUUsQ0FBQzs7Ozs7O3dCQUV4Q0MsT0FBTyxDQUFDQyxHQUFHLFNBQU87Ozs7O3dCQUVmOzRCQUNMZCxjQUFjLENBQUMsS0FBSyxDQUFDO3lCQUN0Qjs7Ozs7Ozs7Ozs7U0FDRjt3QkFiR0csT0FBTzs7O09BYVY7SUFFRCxJQUFJWSxPQUFPO21CQUFHLHFNQUFZOzs7Ozs7OztTQUV6Qjt3QkFGR0EsT0FBTzs7O09BRVY7SUFFRCxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVyQiwwRUFBZ0I7O1lBQUUsY0FFaEM7WUFBQ0csV0FBVyxpQkFBSSw4REFBQ29CLFFBQU07Z0JBQUNDLE9BQU8sRUFBRTsyQkFBTUwsT0FBTyxFQUFFO2lCQUFBOzBCQUFFLFNBQU87Ozs7O29CQUFTLGlCQUFLLDhEQUFDSSxRQUFNO2dCQUFDQyxPQUFPLEVBQUU7MkJBQU1qQixPQUFPLEVBQUU7aUJBQUE7MEJBQUUsU0FBTzs7Ozs7b0JBQVM7Ozs7OztZQUVwSCxDQUNSO0NBQ0Y7R0E5QnVCTCxJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpc0Nvbm5lY3RlZCwgc2V0SXNDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzaWduZXIsIHNldFNpZ25lcl0gPSB1c2VTdGF0ZSgpXG5cbiAgbGV0IGNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBldGhlcmV1bS5yZXF1ZXN0KHsgbWV0aG9kOiAnZXRoX3JlcXVlc3RBY2NvdW50cycgfSlcbiAgICAgICAgc2V0SXNDb25uZWN0ZWQodHJ1ZSlcbiAgICAgICAgbGV0IGNvbm5lY3RlZFByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKHdpbmRvdy5ldGhlcmV1bSlcbiAgICAgICAgc2V0U2lnbmVyKGNvbm5lY3RlZFByb3ZpZGVyLmdldFNpZ25lcigpKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldElzQ29ubmVjdGVkKGZhbHNlKVxuICAgIH1cbiAgfVxuXG4gIGxldCBleGVjdXRlID0gYXN5bmMgKCkgPT4ge1xuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIEhlbGxvIFdvcmxkIVxuICAgICAge2lzQ29ubmVjdGVkID8gKDxidXR0b24gb25DbGljaz17KCkgPT4gZXhlY3V0ZSgpfT5FeGVjdXRlPC9idXR0b24+KSA6ICg8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGNvbm5lY3QoKX0+Q29ubmVjdDwvYnV0dG9uPilcbiAgICAgIH1cbiAgICA8L2RpdiA+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsIkhvbWUiLCJpc0Nvbm5lY3RlZCIsInNldElzQ29ubmVjdGVkIiwic2lnbmVyIiwic2V0U2lnbmVyIiwiY29ubmVjdCIsImNvbm5lY3RlZFByb3ZpZGVyIiwid2luZG93IiwiZXRoZXJldW0iLCJyZXF1ZXN0IiwibWV0aG9kIiwiZXRoZXJzIiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiY29uc29sZSIsImxvZyIsImV4ZWN1dGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});