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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"injected\": function() { return /* binding */ injected; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../next.config */ \"./next.config.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _back_end_artifacts_contracts_NERC20_sol_NERC20_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../back-end/artifacts/contracts/NERC20.sol/NERC20.json */ \"../back-end/artifacts/contracts/NERC20.sol/NERC20.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__.InjectedConnector();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), hasMetamask = ref[0], setHasMetamask = ref[1];\n    var Link = antd__WEBPACK_IMPORTED_MODULE_7__.Anchor.Link;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined), targetOffset = ref1[0], setTargetOffset = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        setTargetOffset(window.innerHeight / 2);\n        if (typeof window.ethereum !== \"undefined\") {\n            setHasMetamask(true);\n        }\n    });\n    var ref2 = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)(), active = ref2.active, activate = ref2.activate, chainId = ref2.chainId, account = ref2.account, provider = ref2.library;\n    var connect = function() {\n        var _ref = _asyncToGenerator(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(typeof window.ethereum !== \"undefined\")) {\n                            _ctx.next = 10;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return activate(injected);\n                    case 4:\n                        setHasMetamask(true);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    7\n                ]\n            ]);\n        }));\n        return function connect() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    function getDecimals() {\n        return _getDecimals.apply(this, arguments);\n    }\n    function _getDecimals() {\n        _getDecimals = _asyncToGenerator(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contractAddress, contract;\n            return _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!active) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        signer = provider.getSigner();\n                        contractAddress = _next_config__WEBPACK_IMPORTED_MODULE_4__.process.env.ContractAddress;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(contractAddress, _back_end_artifacts_contracts_NERC20_sol_NERC20_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.prev = 4;\n                        _ctx.next = 7;\n                        return contract.decimals();\n                    case 7:\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                        console.log(_ctx.t0);\n                    case 12:\n                        _ctx.next = 15;\n                        break;\n                    case 14:\n                        {\n                            console.log(\"Please install MetaMask\");\n                        }\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    4,\n                    9\n                ]\n            ]);\n        }));\n        return _getDecimals.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        span: 7\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        span: 4,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Anchor, {\n                            affix: true,\n                            targetOffset: targetOffset,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Link, {\n                                    href: \"#read-functions\",\n                                    title: \"Read Functions\"\n                                }, void 0, false, {\n                                    fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Link, {\n                                    href: \"#write-functions\",\n                                    title: \"Write Functions\"\n                                }, void 0, false, {\n                                    fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        children: hasMetamask ? active ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            type: \"primary\",\n                            style: {\n                                margin: 16\n                            },\n                            children: \"Connected!\"\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 69,\n                            columnNumber: 15\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            type: \"primary\",\n                            style: {\n                                margin: 16\n                            },\n                            onClick: function() {\n                                return connect();\n                            },\n                            children: \"Connect Wallet\"\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 71,\n                            columnNumber: 15\n                        }, this) : \"Please install metamask\"\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Divider, {\n                plain: true,\n                id: \"read-functions\",\n                children: \"Read Functions\"\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 78,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        span: 10\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 80,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        span: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            type: \"secondary\",\n                            onClick: function() {\n                                return getDecimals();\n                            },\n                            children: \"View Decimals\"\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 82,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            style: {\n                                marginLeft: 24\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Divider, {\n                plain: true,\n                id: \"write-functions\",\n                children: \"Write Functions\"\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Row, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        span: 10\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 90,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        span: 2,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            type: \"secondary\",\n                            onClick: function() {\n                                return execute();\n                            },\n                            children: \"Borrow Tokens\"\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Col, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            style: {\n                                marginLeft: 24\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 89,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\n_s(Home, \"4b+WwShEFMH9qv7hWvfHzKNLpnA=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBRzt3QkFBQytCLElBQUksRUFBRSxFQUFFOzs7Ozs0QkFBUTtrQ0FDckIsOERBQUMvQixxQ0FBRzt3QkFBQytCLElBQUksRUFBRSxDQUFDO2tDQUNWLDRFQUFDbEMsd0NBQU07NEJBQUNzQyxJQUFJLEVBQUMsV0FBVzs0QkFBQ0csT0FBTyxFQUFFO3VDQUFNSyxPQUFPLEVBQUU7NkJBQUE7c0NBQUUsZUFBYTs7Ozs7Z0NBQVM7Ozs7OzRCQUNyRTtrQ0FDTiw4REFBQzNDLHFDQUFHO2tDQUNGLDRFQUFDeUMsT0FBSzs0QkFBQ0wsS0FBSyxFQUFFO2dDQUFFTSxVQUFVLEVBQUUsRUFBRTs2QkFBRTs7Ozs7Z0NBQVU7Ozs7OzRCQUN0Qzs7Ozs7O29CQUNGOztvQkFDTCxDQUNKO0NBQ0Y7R0F6RnVCdkMsSUFBSTs7UUFpQnRCWCwwREFBWTs7O0FBakJNVyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIlxuaW1wb3J0IHsgcHJvY2VzcyB9IGZyb20gJy4uL25leHQuY29uZmlnJ1xuaW1wb3J0IHsgYWJpIH0gZnJvbSAnLi4vLi4vYmFjay1lbmQvYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORVJDMjAuc29sL05FUkMyMC5qc29uJ1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiXG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gXCJAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3JcIlxuaW1wb3J0IHsgQnV0dG9uLCBEaXZpZGVyLCBSb3csIENvbCwgQW5jaG9yIH0gZnJvbSAnYW50ZCdcblxuZXhwb3J0IGNvbnN0IGluamVjdGVkID0gbmV3IEluamVjdGVkQ29ubmVjdG9yKClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2hhc01ldGFtYXNrLCBzZXRIYXNNZXRhbWFza10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgeyBMaW5rIH0gPSBBbmNob3JcbiAgY29uc3QgW3RhcmdldE9mZnNldCwgc2V0VGFyZ2V0T2Zmc2V0XSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGFyZ2V0T2Zmc2V0KHdpbmRvdy5pbm5lckhlaWdodCAvIDIpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHNldEhhc01ldGFtYXNrKHRydWUpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHtcbiAgICBhY3RpdmUsXG4gICAgYWN0aXZhdGUsXG4gICAgY2hhaW5JZCxcbiAgICBhY2NvdW50LFxuICAgIGxpYnJhcnk6IHByb3ZpZGVyLFxuICB9ID0gdXNlV2ViM1JlYWN0KClcblxuICBsZXQgY29ubmVjdCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYWN0aXZhdGUoaW5qZWN0ZWQpXG4gICAgICAgIHNldEhhc01ldGFtYXNrKHRydWUpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZ2V0RGVjaW1hbHMoKSB7XG4gICAgaWYgKGFjdGl2ZSkge1xuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgICAgIGNvbnN0IGNvbnRyYWN0QWRkcmVzcyA9IHByb2Nlc3MuZW52LkNvbnRyYWN0QWRkcmVzc1xuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGNvbnRyYWN0QWRkcmVzcywgYWJpLCBzaWduZXIpXG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBjb250cmFjdC5kZWNpbWFscygpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgaW5zdGFsbCBNZXRhTWFza1wiKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgc3Bhbj17N30+PC9Db2w+XG4gICAgICAgIDxDb2wgc3Bhbj17NH0+XG4gICAgICAgICAgPEFuY2hvciBhZmZpeD17dHJ1ZX0gdGFyZ2V0T2Zmc2V0PXt0YXJnZXRPZmZzZXR9PlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiNyZWFkLWZ1bmN0aW9uc1wiIHRpdGxlPVwiUmVhZCBGdW5jdGlvbnNcIiAvPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIiN3cml0ZS1mdW5jdGlvbnNcIiB0aXRsZT1cIldyaXRlIEZ1bmN0aW9uc1wiIC8+XG4gICAgICAgICAgPC9BbmNob3I+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sPlxuICAgICAgICAgIHtoYXNNZXRhbWFzayA/IChcbiAgICAgICAgICAgIGFjdGl2ZSA/IChcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpbjogMTYgfX0+Q29ubmVjdGVkITwvQnV0dG9uPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpbjogMTYgfX0gb25DbGljaz17KCkgPT4gY29ubmVjdCgpfT5Db25uZWN0IFdhbGxldDwvQnV0dG9uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICBcIlBsZWFzZSBpbnN0YWxsIG1ldGFtYXNrXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L0NvbD5cbiAgICAgIDwvUm93PlxuICAgICAgPERpdmlkZXIgcGxhaW4gaWQ9J3JlYWQtZnVuY3Rpb25zJz5SZWFkIEZ1bmN0aW9uczwvRGl2aWRlcj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgc3Bhbj17MTB9PjwvQ29sPlxuICAgICAgICA8Q29sIHNwYW49ezJ9PlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IGdldERlY2ltYWxzKCl9PlZpZXcgRGVjaW1hbHM8L0J1dHRvbj5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2w+XG4gICAgICAgICAgPGlucHV0IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDI0IH19PjwvaW5wdXQ+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgICA8RGl2aWRlciBwbGFpbiBpZD0nd3JpdGUtZnVuY3Rpb25zJz5Xcml0ZSBGdW5jdGlvbnM8L0RpdmlkZXI+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIHNwYW49ezEwfT48L0NvbD5cbiAgICAgICAgPENvbCBzcGFuPXsyfT5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzZWNvbmRhcnlcIiBvbkNsaWNrPXsoKSA9PiBleGVjdXRlKCl9PkJvcnJvdyBUb2tlbnM8L0J1dHRvbj5cbiAgICAgICAgPC9Db2w+XG4gICAgICAgIDxDb2w+XG4gICAgICAgICAgPGlucHV0IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDI0IH19PjwvaW5wdXQ+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC8+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VXZWIzUmVhY3QiLCJwcm9jZXNzIiwiYWJpIiwiZXRoZXJzIiwiSW5qZWN0ZWRDb25uZWN0b3IiLCJCdXR0b24iLCJEaXZpZGVyIiwiUm93IiwiQ29sIiwiQW5jaG9yIiwiaW5qZWN0ZWQiLCJIb21lIiwiaGFzTWV0YW1hc2siLCJzZXRIYXNNZXRhbWFzayIsIkxpbmsiLCJ1bmRlZmluZWQiLCJ0YXJnZXRPZmZzZXQiLCJzZXRUYXJnZXRPZmZzZXQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImV0aGVyZXVtIiwiYWN0aXZlIiwiYWN0aXZhdGUiLCJjaGFpbklkIiwiYWNjb3VudCIsImxpYnJhcnkiLCJwcm92aWRlciIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiZ2V0RGVjaW1hbHMiLCJzaWduZXIiLCJjb250cmFjdEFkZHJlc3MiLCJjb250cmFjdCIsImdldFNpZ25lciIsImVudiIsIkNvbnRyYWN0QWRkcmVzcyIsIkNvbnRyYWN0IiwiZGVjaW1hbHMiLCJzcGFuIiwiYWZmaXgiLCJocmVmIiwidGl0bGUiLCJ0eXBlIiwic3R5bGUiLCJtYXJnaW4iLCJvbkNsaWNrIiwicGxhaW4iLCJpZCIsImlucHV0IiwibWFyZ2luTGVmdCIsImV4ZWN1dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});