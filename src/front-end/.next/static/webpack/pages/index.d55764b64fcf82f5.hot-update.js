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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"injected\": function() { return /* binding */ injected; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../next.config */ \"./next.config.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _back_end_artifacts_contracts_NERC20_sol_NERC20_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../back-end/artifacts/contracts/NERC20.sol/NERC20.json */ \"../back-end/artifacts/contracts/NERC20.sol/NERC20.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SubMenu = antd__WEBPACK_IMPORTED_MODULE_7__.Menu.SubMenu;\nvar injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__.InjectedConnector();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), hasMetamask = ref[0], setHasMetamask = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), state = ref1[0], setState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (typeof window.ethereum !== \"undefined\") {\n            setHasMetamask(true);\n        }\n    });\n    var ref2 = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)(), active = ref2.active, activate = ref2.activate, chainId = ref2.chainId, account = ref2.account, provider = ref2.library;\n    function connect() {\n        return _connect.apply(this, arguments);\n    }\n    function _connect() {\n        _connect = _asyncToGenerator(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(typeof window.ethereum !== \"undefined\")) {\n                            _ctx.next = 10;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return activate(injected);\n                    case 4:\n                        setHasMetamask(true);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    7\n                ]\n            ]);\n        }));\n        return _connect.apply(this, arguments);\n    }\n    function execute() {\n        return _execute.apply(this, arguments);\n    }\n    function _execute() {\n        _execute = _asyncToGenerator(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contractAddress, contract;\n            return _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!active) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        signer = provider.getSigner();\n                        contractAddress = _next_config__WEBPACK_IMPORTED_MODULE_4__.process.env.ContractAddress;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(contractAddress, _back_end_artifacts_contracts_NERC20_sol_NERC20_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.prev = 4;\n                        _ctx.next = 7;\n                        return contract.store(42);\n                    case 7:\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                        console.log(_ctx.t0);\n                    case 12:\n                        _ctx.next = 15;\n                        break;\n                    case 14:\n                        {\n                            console.log(\"Please install MetaMask\");\n                        }\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    4,\n                    9\n                ]\n            ]);\n        }));\n        return _execute.apply(this, arguments);\n    }\n    var handleClick = function(e) {\n        setState(e.key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Layout, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Menu, {\n                    onClick: handleClick,\n                    mode: \"horizontal\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Menu.Item, {\n                            children: \"Read Functions\"\n                        }, \"read\", false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Menu.Item, {\n                            children: \"Write Functions\"\n                        }, \"write\", false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        span: 8\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        span: 3\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        span: 2\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        span: 8,\n                        children: hasMetamask ? active ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            type: \"primary\",\n                            style: {\n                                margin: 8\n                            },\n                            onClick: function() {\n                                return execute();\n                            },\n                            children: \"Execute\"\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 78,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            type: \"primary\",\n                            style: {\n                                margin: 8\n                            },\n                            onClick: function() {\n                                return connect();\n                            },\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 80,\n                            columnNumber: 15\n                        }, this) : \"Please install metamask\"\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.\"\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Divider, {\n                plain: true,\n                children: \"Text\"\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.\"\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 93,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"/Km6MhIq8oimRzg0y65vDce5INw=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cEIsOERBQUNyQyxxQ0FBRzt3QkFBQ3FDLElBQUksRUFBRSxDQUFDOzs7Ozs0QkFDTjtrQ0FDTiw4REFBQ3JDLHFDQUFHO3dCQUFDcUMsSUFBSSxFQUFFLENBQUM7Ozs7OzRCQUFRO2tDQUNwQiw4REFBQ3JDLHFDQUFHO3dCQUFDcUMsSUFBSSxFQUFFLENBQUM7a0NBQ1Q5QixXQUFXLEdBQ1ZNLE1BQU0saUJBQ0osOERBQUNsQix3Q0FBTTs0QkFBQzJDLElBQUksRUFBQyxTQUFTOzRCQUFDQyxLQUFLLEVBQUU7Z0NBQUVDLE1BQU0sRUFBRSxDQUFDOzZCQUFFOzRCQUFFTixPQUFPLEVBQUU7dUNBQU1aLE9BQU8sRUFBRTs2QkFBQTtzQ0FBRSxTQUFPOzs7OztnQ0FBUyxpQkFFdkYsOERBQUMzQix3Q0FBTTs0QkFBQzJDLElBQUksRUFBQyxTQUFTOzRCQUFDQyxLQUFLLEVBQUU7Z0NBQUVDLE1BQU0sRUFBRSxDQUFDOzZCQUFFOzRCQUFFTixPQUFPLEVBQUU7dUNBQU1mLE9BQU8sRUFBRTs2QkFBQTtzQ0FBRSxnQkFBYzs7Ozs7Z0NBQVMsR0FHaEcseUJBQXlCOzs7Ozs0QkFFdkI7Ozs7OztvQkFDRjswQkFFTiw4REFBQ3NCLEdBQUM7MEJBQUMsdUpBR0g7Ozs7O29CQUFJOzBCQUNKLDhEQUFDM0MseUNBQU87Z0JBQUM0QyxLQUFLOzBCQUFDLE1BQUk7Ozs7O29CQUFVOzBCQUM3Qiw4REFBQ0QsR0FBQzswQkFBQyx1SkFHSDs7Ozs7b0JBQUk7O29CQUNILENBQ0o7Q0FDRjtHQXJGdUJuQyxJQUFJOztRQWdCdEJoQiwwREFBWTs7O0FBaEJNZ0IsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCJcbmltcG9ydCB7IHByb2Nlc3MgfSBmcm9tICcuLi9uZXh0LmNvbmZpZydcbmltcG9ydCB7IGFiaSB9IGZyb20gJy4uLy4uL2JhY2stZW5kL2FydGlmYWN0cy9jb250cmFjdHMvTkVSQzIwLnNvbC9ORVJDMjAuanNvbidcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIlxuaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tIFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCJcbmltcG9ydCB7IEJ1dHRvbiwgTWVudSwgTGF5b3V0LCBEaXZpZGVyLCBSb3csIENvbCB9IGZyb20gJ2FudGQnXG5pbXBvcnQgeyBNYWlsT3V0bGluZWQsIEFwcHN0b3JlT3V0bGluZWQsIFNldHRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcblxuY29uc3QgeyBTdWJNZW51IH0gPSBNZW51O1xuXG5leHBvcnQgY29uc3QgaW5qZWN0ZWQgPSBuZXcgSW5qZWN0ZWRDb25uZWN0b3IoKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbaGFzTWV0YW1hc2ssIHNldEhhc01ldGFtYXNrXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBzZXRIYXNNZXRhbWFzayh0cnVlKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCB7XG4gICAgYWN0aXZlLFxuICAgIGFjdGl2YXRlLFxuICAgIGNoYWluSWQsXG4gICAgYWNjb3VudCxcbiAgICBsaWJyYXJ5OiBwcm92aWRlcixcbiAgfSA9IHVzZVdlYjNSZWFjdCgpXG5cbiAgYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYWN0aXZhdGUoaW5qZWN0ZWQpXG4gICAgICAgIHNldEhhc01ldGFtYXNrKHRydWUpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZSgpIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICAgICAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gcHJvY2Vzcy5lbnYuQ29udHJhY3RBZGRyZXNzXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBhYmksIHNpZ25lcilcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNvbnRyYWN0LnN0b3JlKDQyKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGluc3RhbGwgTWV0YU1hc2tcIilcbiAgICB9XG4gIH1cblxuICBsZXQgaGFuZGxlQ2xpY2sgPSAoZSkgPT4ge1xuICAgIHNldFN0YXRlKGUua2V5KVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExheW91dD5cbiAgICAgICAgPE1lbnUgb25DbGljaz17aGFuZGxlQ2xpY2t9IG1vZGU9XCJob3Jpem9udGFsXCI+XG4gICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJyZWFkXCI+UmVhZCBGdW5jdGlvbnM8L01lbnUuSXRlbT5cbiAgICAgICAgICA8TWVudS5JdGVtIGtleT1cIndyaXRlXCI+V3JpdGUgRnVuY3Rpb25zPC9NZW51Lkl0ZW0+XG4gICAgICAgIDwvTWVudT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBzcGFuPXs4fT48L0NvbD5cbiAgICAgICAgPENvbCBzcGFuPXszfT5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2wgc3Bhbj17Mn0+PC9Db2w+XG4gICAgICAgIDxDb2wgc3Bhbj17OH0+XG4gICAgICAgICAge2hhc01ldGFtYXNrID8gKFxuICAgICAgICAgICAgYWN0aXZlID8gKFxuICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luOiA4IH19IG9uQ2xpY2s9eygpID0+IGV4ZWN1dGUoKX0+RXhlY3V0ZTwvQnV0dG9uPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpbjogOCB9fSBvbkNsaWNrPXsoKSA9PiBjb25uZWN0KCl9PkNvbm5lY3QgV2FsbGV0PC9CdXR0b24+XG4gICAgICAgICAgICApXG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIFwiUGxlYXNlIGluc3RhbGwgbWV0YW1hc2tcIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG5cbiAgICAgIDxwPlxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgbm9ubmUgbWVybmluaXN0aSBsaWNlcmUgbWloaSBpc3RhXG4gICAgICAgIHByb2JhcmUsIHF1YWUgc3VudCBhIHRlIGRpY3RhPyBSZWZlcnQgdGFtZW4sIHF1byBtb2RvLlxuICAgICAgPC9wPlxuICAgICAgPERpdmlkZXIgcGxhaW4+VGV4dDwvRGl2aWRlcj5cbiAgICAgIDxwPlxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBTZWQgbm9ubmUgbWVybmluaXN0aSBsaWNlcmUgbWloaSBpc3RhXG4gICAgICAgIHByb2JhcmUsIHF1YWUgc3VudCBhIHRlIGRpY3RhPyBSZWZlcnQgdGFtZW4sIHF1byBtb2RvLlxuICAgICAgPC9wPlxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlV2ViM1JlYWN0IiwicHJvY2VzcyIsImFiaSIsImV0aGVycyIsIkluamVjdGVkQ29ubmVjdG9yIiwiQnV0dG9uIiwiTWVudSIsIkxheW91dCIsIkRpdmlkZXIiLCJSb3ciLCJDb2wiLCJNYWlsT3V0bGluZWQiLCJBcHBzdG9yZU91dGxpbmVkIiwiU2V0dGluZ091dGxpbmVkIiwiU3ViTWVudSIsImluamVjdGVkIiwiSG9tZSIsImhhc01ldGFtYXNrIiwic2V0SGFzTWV0YW1hc2siLCJzdGF0ZSIsInNldFN0YXRlIiwid2luZG93IiwiZXRoZXJldW0iLCJhY3RpdmUiLCJhY3RpdmF0ZSIsImNoYWluSWQiLCJhY2NvdW50IiwibGlicmFyeSIsInByb3ZpZGVyIiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJleGVjdXRlIiwic2lnbmVyIiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3QiLCJnZXRTaWduZXIiLCJlbnYiLCJDb250cmFjdEFkZHJlc3MiLCJDb250cmFjdCIsInN0b3JlIiwiaGFuZGxlQ2xpY2siLCJlIiwia2V5Iiwib25DbGljayIsIm1vZGUiLCJJdGVtIiwic3BhbiIsInR5cGUiLCJzdHlsZSIsIm1hcmdpbiIsInAiLCJwbGFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});