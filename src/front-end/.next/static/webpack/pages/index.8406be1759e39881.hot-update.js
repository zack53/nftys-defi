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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"injected\": function() { return /* binding */ injected; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../next.config */ \"./next.config.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _back_end_artifacts_contracts_NERC20_sol_NERC20_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../back-end/artifacts/contracts/NERC20.sol/NERC20.json */ \"../back-end/artifacts/contracts/NERC20.sol/NERC20.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__.InjectedConnector();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), hasMetamask = ref[0], setHasMetamask = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), state = ref1[0], setState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (typeof window.ethereum !== \"undefined\") {\n            setHasMetamask(true);\n        }\n    });\n    var ref2 = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)(), active = ref2.active, activate = ref2.activate, chainId = ref2.chainId, account = ref2.account, provider = ref2.library;\n    function connect() {\n        return _connect.apply(this, arguments);\n    }\n    function _connect() {\n        _connect = _asyncToGenerator(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(typeof window.ethereum !== \"undefined\")) {\n                            _ctx.next = 10;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return activate(injected);\n                    case 4:\n                        setHasMetamask(true);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    7\n                ]\n            ]);\n        }));\n        return _connect.apply(this, arguments);\n    }\n    function execute() {\n        return _execute.apply(this, arguments);\n    }\n    function _execute() {\n        _execute = _asyncToGenerator(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contractAddress, contract;\n            return _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!active) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        signer = provider.getSigner();\n                        contractAddress = _next_config__WEBPACK_IMPORTED_MODULE_4__.process.env.ContractAddress;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(contractAddress, _back_end_artifacts_contracts_NERC20_sol_NERC20_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.prev = 4;\n                        _ctx.next = 7;\n                        return contract.store(42);\n                    case 7:\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                        console.log(_ctx.t0);\n                    case 12:\n                        _ctx.next = 15;\n                        break;\n                    case 14:\n                        {\n                            console.log(\"Please install MetaMask\");\n                        }\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    4,\n                    9\n                ]\n            ]);\n        }));\n        return _execute.apply(this, arguments);\n    }\n    var handleClick = function(e) {\n        setState(e.key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Row, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Col, {\n                    span: 24,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Menu, {\n                        onClick: handleClick,\n                        mode: \"horizontal\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Menu.Item, {\n                                style: {\n                                    marginLeft: \"25%\"\n                                },\n                                children: \"Home\"\n                            }, \"home\", false, {\n                                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Menu.Item, {\n                                children: \"Read Functions\"\n                            }, \"read\", false, {\n                                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                                lineNumber: 66,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Menu.Item, {\n                                children: \"Write Functions\"\n                            }, \"write\", false, {\n                                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Col, {\n                        span: 11\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Col, {\n                        children: hasMetamask ? active ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                            type: \"primary\",\n                            style: {\n                                margin: 16\n                            },\n                            children: \"Connected!\"\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 76,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                            type: \"primary\",\n                            style: {\n                                margin: 16\n                            },\n                            onClick: function() {\n                                return connect();\n                            },\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 78,\n                            columnNumber: 15\n                        }, this) : \"Please install metamask\"\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Divider, {\n                plain: true,\n                children: \"Read Functions\"\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Col, {\n                        span: 10\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Col, {\n                        span: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                            type: \"secondary\",\n                            onClick: function() {\n                                return execute();\n                            },\n                            children: \"Borrow Tokens\"\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 89,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Col, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            style: {\n                                marginLeft: 20\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Divider, {\n                plain: true,\n                children: \"Write Functions\"\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Col, {\n                        span: 10\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Col, {\n                        span: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                            type: \"secondary\",\n                            onClick: function() {\n                                return execute();\n                            },\n                            children: \"Borrow Tokens\"\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Col, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {}, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 102,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 101,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"/Km6MhIq8oimRzg0y65vDce5INw=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MEJBQUMsaUJBQWU7Ozs7O29CQUFVOzBCQUN4Qyw4REFBQzFDLHFDQUFHOztrQ0FDRiw4REFBQ0MscUNBQUc7d0JBQUNpQyxJQUFJLEVBQUUsRUFBRTs7Ozs7NEJBQVE7a0NBQ3JCLDhEQUFDakMscUNBQUc7d0JBQUNpQyxJQUFJLEVBQUUsQ0FBQztrQ0FDViw0RUFBQ3RDLHdDQUFNOzRCQUFDNEMsSUFBSSxFQUFDLFdBQVc7NEJBQUNMLE9BQU8sRUFBRTt1Q0FBTWIsT0FBTyxFQUFFOzZCQUFBO3NDQUFFLGVBQWE7Ozs7O2dDQUFTOzs7Ozs0QkFDckU7a0NBQ04sOERBQUNyQixxQ0FBRztrQ0FDRiw0RUFBQzBDLE9BQUs7Ozs7Z0NBQVM7Ozs7OzRCQUNYOzs7Ozs7b0JBQ0Y7O29CQUNMLENBQ0o7Q0FDRjtHQS9GdUJyQyxJQUFJOztRQWdCdEJmLDBEQUFZOzs7QUFoQk1lLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiXG5pbXBvcnQgeyBwcm9jZXNzIH0gZnJvbSAnLi4vbmV4dC5jb25maWcnXG5pbXBvcnQgeyBhYmkgfSBmcm9tICcuLi8uLi9iYWNrLWVuZC9hcnRpZmFjdHMvY29udHJhY3RzL05FUkMyMC5zb2wvTkVSQzIwLmpzb24nXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCJcbmltcG9ydCB7IEluamVjdGVkQ29ubmVjdG9yIH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvclwiXG5pbXBvcnQgeyBCdXR0b24sIE1lbnUsIExheW91dCwgRGl2aWRlciwgUm93LCBDb2wgfSBmcm9tICdhbnRkJ1xuaW1wb3J0IHsgTWFpbE91dGxpbmVkLCBBcHBzdG9yZU91dGxpbmVkLCBTZXR0aW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucydcblxuZXhwb3J0IGNvbnN0IGluamVjdGVkID0gbmV3IEluamVjdGVkQ29ubmVjdG9yKClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2hhc01ldGFtYXNrLCBzZXRIYXNNZXRhbWFza10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSgpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgc2V0SGFzTWV0YW1hc2sodHJ1ZSlcbiAgICB9XG4gIH0pXG5cbiAgY29uc3Qge1xuICAgIGFjdGl2ZSxcbiAgICBhY3RpdmF0ZSxcbiAgICBjaGFpbklkLFxuICAgIGFjY291bnQsXG4gICAgbGlicmFyeTogcHJvdmlkZXIsXG4gIH0gPSB1c2VXZWIzUmVhY3QoKVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3QoKSB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGFjdGl2YXRlKGluamVjdGVkKVxuICAgICAgICBzZXRIYXNNZXRhbWFzayh0cnVlKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIGV4ZWN1dGUoKSB7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgICAgIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IHByb2Nlc3MuZW52LkNvbnRyYWN0QWRkcmVzc1xuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgYWJpLCBzaWduZXIpXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBjb250cmFjdC5zdG9yZSg0MilcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlBsZWFzZSBpbnN0YWxsIE1ldGFNYXNrXCIpXG4gICAgfVxuICB9XG5cbiAgbGV0IGhhbmRsZUNsaWNrID0gKGUpID0+IHtcbiAgICBzZXRTdGF0ZShlLmtleSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgc3Bhbj17MjR9PlxuICAgICAgICAgIDxNZW51IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSBtb2RlPVwiaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJob21lXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogJzI1JScgfX0+SG9tZTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgPE1lbnUuSXRlbSBrZXk9XCJyZWFkXCI+UmVhZCBGdW5jdGlvbnM8L01lbnUuSXRlbT5cbiAgICAgICAgICAgIDxNZW51Lkl0ZW0ga2V5PVwid3JpdGVcIj5Xcml0ZSBGdW5jdGlvbnM8L01lbnUuSXRlbT5cbiAgICAgICAgICA8L01lbnU+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHNwYW49ezExfT48L0NvbD5cbiAgICAgICAgPENvbD5cbiAgICAgICAgICB7aGFzTWV0YW1hc2sgPyAoXG4gICAgICAgICAgICBhY3RpdmUgPyAoXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW46IDE2IH19PkNvbm5lY3RlZCE8L0J1dHRvbj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW46IDE2IH19IG9uQ2xpY2s9eygpID0+IGNvbm5lY3QoKX0+Q29ubmVjdCBXYWxsZXQ8L0J1dHRvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgXCJQbGVhc2UgaW5zdGFsbCBtZXRhbWFza1wiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICAgIDxEaXZpZGVyIHBsYWluPlJlYWQgRnVuY3Rpb25zPC9EaXZpZGVyPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBzcGFuPXsxMH0+PC9Db2w+XG4gICAgICAgIDxDb2wgc3Bhbj17Mn0+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gZXhlY3V0ZSgpfT5Cb3Jyb3cgVG9rZW5zPC9CdXR0b24+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sPlxuICAgICAgICAgIDxpbnB1dCBzdHlsZT17eyBtYXJnaW5MZWZ0OiAyMCB9fT48L2lucHV0PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPERpdmlkZXIgcGxhaW4+V3JpdGUgRnVuY3Rpb25zPC9EaXZpZGVyPlxuICAgICAgPFJvdz5cbiAgICAgICAgPENvbCBzcGFuPXsxMH0+PC9Db2w+XG4gICAgICAgIDxDb2wgc3Bhbj17Mn0+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic2Vjb25kYXJ5XCIgb25DbGljaz17KCkgPT4gZXhlY3V0ZSgpfT5Cb3Jyb3cgVG9rZW5zPC9CdXR0b24+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sPlxuICAgICAgICAgIDxpbnB1dD48L2lucHV0PlxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgIDwvPlxuICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlV2ViM1JlYWN0IiwicHJvY2VzcyIsImFiaSIsImV0aGVycyIsIkluamVjdGVkQ29ubmVjdG9yIiwiQnV0dG9uIiwiTWVudSIsIkxheW91dCIsIkRpdmlkZXIiLCJSb3ciLCJDb2wiLCJNYWlsT3V0bGluZWQiLCJBcHBzdG9yZU91dGxpbmVkIiwiU2V0dGluZ091dGxpbmVkIiwiaW5qZWN0ZWQiLCJIb21lIiwiaGFzTWV0YW1hc2siLCJzZXRIYXNNZXRhbWFzayIsInN0YXRlIiwic2V0U3RhdGUiLCJ3aW5kb3ciLCJldGhlcmV1bSIsImFjdGl2ZSIsImFjdGl2YXRlIiwiY2hhaW5JZCIsImFjY291bnQiLCJsaWJyYXJ5IiwicHJvdmlkZXIiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImV4ZWN1dGUiLCJzaWduZXIiLCJjb250cmFjdEFkZHJlc3MiLCJjb250cmFjdCIsImdldFNpZ25lciIsImVudiIsIkNvbnRyYWN0QWRkcmVzcyIsIkNvbnRyYWN0Iiwic3RvcmUiLCJoYW5kbGVDbGljayIsImUiLCJrZXkiLCJzcGFuIiwib25DbGljayIsIm1vZGUiLCJJdGVtIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwidHlwZSIsIm1hcmdpbiIsInBsYWluIiwiaW5wdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});