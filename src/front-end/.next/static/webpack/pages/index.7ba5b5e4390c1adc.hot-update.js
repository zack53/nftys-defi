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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"injected\": function() { return /* binding */ injected; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../next.config */ \"./next.config.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _back_end_artifacts_contracts_NERC20_sol_NERC20_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../back-end/artifacts/contracts/NERC20.sol/NERC20.json */ \"../back-end/artifacts/contracts/NERC20.sol/NERC20.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SubMenu = antd__WEBPACK_IMPORTED_MODULE_7__.Menu.SubMenu;\nvar injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__.InjectedConnector();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), hasMetamask = ref[0], setHasMetamask = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), state = ref1[0], setState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (typeof window.ethereum !== \"undefined\") {\n            setHasMetamask(true);\n        }\n    });\n    var ref2 = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)(), active = ref2.active, activate = ref2.activate, chainId = ref2.chainId, account = ref2.account, provider = ref2.library;\n    function connect() {\n        return _connect.apply(this, arguments);\n    }\n    function _connect() {\n        _connect = _asyncToGenerator(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(typeof window.ethereum !== \"undefined\")) {\n                            _ctx.next = 10;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return activate(injected);\n                    case 4:\n                        setHasMetamask(true);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    7\n                ]\n            ]);\n        }));\n        return _connect.apply(this, arguments);\n    }\n    function execute() {\n        return _execute.apply(this, arguments);\n    }\n    function _execute() {\n        _execute = _asyncToGenerator(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contractAddress, contract;\n            return _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!active) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        signer = provider.getSigner();\n                        contractAddress = _next_config__WEBPACK_IMPORTED_MODULE_4__.process.env.ContractAddress;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(contractAddress, _back_end_artifacts_contracts_NERC20_sol_NERC20_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.prev = 4;\n                        _ctx.next = 7;\n                        return contract.store(42);\n                    case 7:\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                        console.log(_ctx.t0);\n                    case 12:\n                        _ctx.next = 15;\n                        break;\n                    case 14:\n                        {\n                            console.log(\"Please install MetaMask\");\n                        }\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    4,\n                    9\n                ]\n            ]);\n        }));\n        return _execute.apply(this, arguments);\n    }\n    var handleClick = function(e) {\n        setState(e.key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                    span: 24,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Menu, {\n                        onClick: handleClick,\n                        mode: \"horizontal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Menu.Item, {\n                                children: \"Read Functions\"\n                            }, \"read\", false, {\n                                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Menu.Item, {\n                                children: \"Write Functions\"\n                            }, \"write\", false, {\n                                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        span: 10\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        span: 8,\n                        children: hasMetamask ? active ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            type: \"primary\",\n                            style: {\n                                margin: 8\n                            },\n                            onClick: function() {\n                                return execute();\n                            },\n                            children: \"Execute\"\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 77,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            type: \"primary\",\n                            style: {\n                                margin: 8\n                            },\n                            onClick: function() {\n                                return connect();\n                            },\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 79,\n                            columnNumber: 15\n                        }, this) : \"Please install metamask\"\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.\"\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 87,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Divider, {\n                plain: true,\n                children: \"Text\"\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 91,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.\"\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"/Km6MhIq8oimRzg0y65vDce5INw=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0YsOERBQUNDLHFDQUFHO3dCQUFDa0MsSUFBSSxFQUFFLEVBQUU7Ozs7OzRCQUFRO2tDQUNyQiw4REFBQ2xDLHFDQUFHO3dCQUFDa0MsSUFBSSxFQUFFLENBQUM7a0NBQ1QzQixXQUFXLEdBQ1ZNLE1BQU0saUJBQ0osOERBQUNsQix3Q0FBTTs0QkFBQzJDLElBQUksRUFBQyxTQUFTOzRCQUFDQyxLQUFLLEVBQUU7Z0NBQUVDLE1BQU0sRUFBRSxDQUFDOzZCQUFFOzRCQUFFTCxPQUFPLEVBQUU7dUNBQU1iLE9BQU8sRUFBRTs2QkFBQTtzQ0FBRSxTQUFPOzs7OztnQ0FBUyxpQkFFdkYsOERBQUMzQix3Q0FBTTs0QkFBQzJDLElBQUksRUFBQyxTQUFTOzRCQUFDQyxLQUFLLEVBQUU7Z0NBQUVDLE1BQU0sRUFBRSxDQUFDOzZCQUFFOzRCQUFFTCxPQUFPLEVBQUU7dUNBQU1oQixPQUFPLEVBQUU7NkJBQUE7c0NBQUUsZ0JBQWM7Ozs7O2dDQUFTLEdBR2hHLHlCQUF5Qjs7Ozs7NEJBRXZCOzs7Ozs7b0JBQ0Y7MEJBRU4sOERBQUNzQixHQUFDOzBCQUFDLHVKQUdIOzs7OztvQkFBSTswQkFDSiw4REFBQzNDLHlDQUFPO2dCQUFDNEMsS0FBSzswQkFBQyxNQUFJOzs7OztvQkFBVTswQkFDN0IsOERBQUNELEdBQUM7MEJBQUMsdUpBR0g7Ozs7O29CQUFJOztvQkFDSCxDQUNKO0NBQ0Y7R0FwRnVCbkMsSUFBSTs7UUFnQnRCaEIsMERBQVk7OztBQWhCTWdCLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiXG5pbXBvcnQgeyBwcm9jZXNzIH0gZnJvbSAnLi4vbmV4dC5jb25maWcnXG5pbXBvcnQgeyBhYmkgfSBmcm9tICcuLi8uLi9iYWNrLWVuZC9hcnRpZmFjdHMvY29udHJhY3RzL05FUkMyMC5zb2wvTkVSQzIwLmpzb24nXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCJcbmltcG9ydCB7IEluamVjdGVkQ29ubmVjdG9yIH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvclwiXG5pbXBvcnQgeyBCdXR0b24sIE1lbnUsIExheW91dCwgRGl2aWRlciwgUm93LCBDb2wgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgTWFpbE91dGxpbmVkLCBBcHBzdG9yZU91dGxpbmVkLCBTZXR0aW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5cbmNvbnN0IHsgU3ViTWVudSB9ID0gTWVudTtcblxuZXhwb3J0IGNvbnN0IGluamVjdGVkID0gbmV3IEluamVjdGVkQ29ubmVjdG9yKClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2hhc01ldGFtYXNrLCBzZXRIYXNNZXRhbWFza10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgc2V0SGFzTWV0YW1hc2sodHJ1ZSlcbiAgICB9XG4gIH0pXG5cbiAgY29uc3Qge1xuICAgIGFjdGl2ZSxcbiAgICBhY3RpdmF0ZSxcbiAgICBjaGFpbklkLFxuICAgIGFjY291bnQsXG4gICAgbGlicmFyeTogcHJvdmlkZXIsXG4gIH0gPSB1c2VXZWIzUmVhY3QoKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGFjdGl2YXRlKGluamVjdGVkKVxuICAgICAgICBzZXRIYXNNZXRhbWFzayh0cnVlKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGUoKSB7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgICAgIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IHByb2Nlc3MuZW52LkNvbnRyYWN0QWRkcmVzc1xuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgYWJpLCBzaWduZXIpXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBjb250cmFjdC5zdG9yZSg0MilcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrXCIpXG4gICAgfVxuICB9XG5cbiAgbGV0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBzZXRTdGF0ZShlLmtleSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgIDxNZW51IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBtb2RlPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJyZWFkXCI+UmVhZCBGdW5jdGlvbnM8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwid3JpdGVcIj5Xcml0ZSBGdW5jdGlvbnM8L01lbnUuSXRlbT5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHNwYW49ezEwfT48L0NvbD5cbiAgICAgICAgPENvbCBzcGFuPXs4fT5cbiAgICAgICAgICB7aGFzTWV0YW1hc2sgPyAoXG4gICAgICAgICAgICBhY3RpdmUgPyAoXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW46IDggfX0gb25DbGljaz17KCkgPT4gZXhlY3V0ZSgpfT5FeGVjdXRlPC9CdXR0b24+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luOiA4IH19IG9uQ2xpY2s9eygpID0+IGNvbm5lY3QoKX0+Q29ubmVjdCBXYWxsZXQ8L0J1dHRvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgXCJQbGVhc2UgaW5zdGFsbCBtZXRhbWFza1wiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cblxuICAgICAgPHA+XG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCBub25uZSBtZXJuaW5pc3RpIGxpY2VyZSBtaWhpIGlzdGFcbiAgICAgICAgcHJvYmFyZSwgcXVhZSBzdW50IGEgdGUgZGljdGE/IFJlZmVydCB0YW1lbiwgcXVvIG1vZG8uXG4gICAgICA8L3A+XG4gICAgICA8RGl2aWRlciBwbGFpbj5UZXh0PC9EaXZpZGVyPlxuICAgICAgPHA+XG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIFNlZCBub25uZSBtZXJuaW5pc3RpIGxpY2VyZSBtaWhpIGlzdGFcbiAgICAgICAgcHJvYmFyZSwgcXVhZSBzdW50IGEgdGUgZGljdGE/IFJlZmVydCB0YW1lbiwgcXVvIG1vZG8uXG4gICAgICA8L3A+XG4gICAgPC8+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VXZWIzUmVhY3QiLCJwcm9jZXNzIiwiYWJpIiwiZXRoZXJzIiwiSW5qZWN0ZWRDb25uZWN0b3IiLCJCdXR0b24iLCJNZW51IiwiTGF5b3V0IiwiRGl2aWRlciIsIlJvdyIsIkNvbCIsIk1haWxPdXRsaW5lZCIsIkFwcHN0b3JlT3V0bGluZWQiLCJTZXR0aW5nT3V0bGluZWQiLCJTdWJNZW51IiwiaW5qZWN0ZWQiLCJIb21lIiwiaGFzTWV0YW1hc2siLCJzZXRIYXNNZXRhbWFzayIsInN0YXRlIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImFjdGl2ZSIsImFjdGl2YXRlIiwiY2hhaW5JZCIsImFjY291bnQiLCJsaWJyYXJ5IiwicHJvdmlkZXIiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImV4ZWN1dGUiLCJzaWduZXIiLCJjb250cmFjdEFkZHJlc3MiLCJjb250cmFjdCIsImdldFNpZ25lciIsImVudiIsIkNvbnRyYWN0QWRkcmVzcyIsIkNvbnRyYWN0Iiwic3RvcmUiLCJoYW5kbGVDbGljayIsImUiLCJrZXkiLCJzcGFuIiwib25DbGljayIsIm1vZGUiLCJJdGVtIiwidHlwZSIsInN0eWxlIiwibWFyZ2luIiwicCIsInBsYWluIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});