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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"injected\": function() { return /* binding */ injected; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../next.config */ \"./next.config.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _back_end_artifacts_contracts_NERC20_sol_NERC20_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../back-end/artifacts/contracts/NERC20.sol/NERC20.json */ \"../back-end/artifacts/contracts/NERC20.sol/NERC20.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__.InjectedConnector();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), hasMetamask = ref[0], setHasMetamask = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (typeof window.ethereum !== \"undefined\") {\n            setHasMetamask(true);\n        }\n    });\n    var ref1 = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)(), active = ref1.active, activate = ref1.activate, chainId = ref1.chainId, account = ref1.account, provider = ref1.library;\n    function connect() {\n        return _connect.apply(this, arguments);\n    }\n    function _connect() {\n        _connect = _asyncToGenerator(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(typeof window.ethereum !== \"undefined\")) {\n                            _ctx.next = 10;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return activate(injected);\n                    case 4:\n                        setHasMetamask(true);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    7\n                ]\n            ]);\n        }));\n        return _connect.apply(this, arguments);\n    }\n    function execute() {\n        return _execute.apply(this, arguments);\n    }\n    function _execute() {\n        _execute = _asyncToGenerator(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contractAddress, contract;\n            return _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!active) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        signer = provider.getSigner();\n                        contractAddress = _next_config__WEBPACK_IMPORTED_MODULE_4__.process.env.ContractAddress;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(contractAddress, _back_end_artifacts_contracts_NERC20_sol_NERC20_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.prev = 4;\n                        _ctx.next = 7;\n                        return contract.store(42);\n                    case 7:\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                        console.log(_ctx.t0);\n                    case 12:\n                        _ctx.next = 15;\n                        break;\n                    case 14:\n                        {\n                            console.log(\"Please install MetaMask\");\n                        }\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    4,\n                    9\n                ]\n            ]);\n        }));\n        return _execute.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: hasMetamask ? active ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Menu, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Menu.Item, {\n                            children: \"Menu\"\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 60,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.SubMenu, {\n                            title: \"SubMenu\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Menu.Item, {\n                                children: \"SubMenuItem\"\n                            }, void 0, false, {\n                                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                                lineNumber: 62,\n                                columnNumber: 17\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 61,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                    lineNumber: 59,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                    type: \"primary\",\n                    style: {\n                        margin: 8\n                    },\n                    onClick: function() {\n                        return execute();\n                    },\n                    children: \"Execute\"\n                }, void 0, false, {\n                    fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                    lineNumber: 65,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Button, {\n            type: \"primary\",\n            style: {\n                margin: 8\n            },\n            onClick: function() {\n                return connect();\n            },\n            children: \"Connect\"\n        }, void 0, false, {\n            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n            lineNumber: 68,\n            columnNumber: 11\n        }, this) : \"Please install metamask\"\n    }, void 0, false, {\n        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"Tdyy3OEFodtm1jn44QDmp2tJoV4=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVMsR0FHekYseUJBQXlCOzs7OztZQUV2QixDQUNQO0NBQ0Y7R0FoRXVCWCxJQUFJOztRQWV0QlQsMERBQVk7OztBQWZNUyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlV2ViM1JlYWN0IH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2NvcmVcIlxuaW1wb3J0IHsgcHJvY2VzcyB9IGZyb20gJy4uL25leHQuY29uZmlnJ1xuaW1wb3J0IHsgYWJpIH0gZnJvbSAnLi4vLi4vYmFjay1lbmQvYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORVJDMjAuc29sL05FUkMyMC5qc29uJ1xuaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSBcImV0aGVyc1wiXG5pbXBvcnQgeyBJbmplY3RlZENvbm5lY3RvciB9IGZyb20gXCJAd2ViMy1yZWFjdC9pbmplY3RlZC1jb25uZWN0b3JcIlxuaW1wb3J0IHsgQnV0dG9uLCBNZW51LCBTdWJNZW51IH0gZnJvbSAnYW50ZCdcblxuZXhwb3J0IGNvbnN0IGluamVjdGVkID0gbmV3IEluamVjdGVkQ29ubmVjdG9yKClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2hhc01ldGFtYXNrLCBzZXRIYXNNZXRhbWFza10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBzZXRIYXNNZXRhbWFzayh0cnVlKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCB7XG4gICAgYWN0aXZlLFxuICAgIGFjdGl2YXRlLFxuICAgIGNoYWluSWQsXG4gICAgYWNjb3VudCxcbiAgICBsaWJyYXJ5OiBwcm92aWRlcixcbiAgfSA9IHVzZVdlYjNSZWFjdCgpXG5cbiAgYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYWN0aXZhdGUoaW5qZWN0ZWQpXG4gICAgICAgIHNldEhhc01ldGFtYXNrKHRydWUpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZSgpIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICAgICAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gcHJvY2Vzcy5lbnYuQ29udHJhY3RBZGRyZXNzXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBhYmksIHNpZ25lcilcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNvbnRyYWN0LnN0b3JlKDQyKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGluc3RhbGwgTWV0YU1hc2tcIilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7aGFzTWV0YW1hc2sgPyAoXG4gICAgICAgIGFjdGl2ZSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPE1lbnU+XG4gICAgICAgICAgICAgIDxNZW51Lkl0ZW0+TWVudTwvTWVudS5JdGVtPlxuICAgICAgICAgICAgICA8U3ViTWVudSB0aXRsZT1cIlN1Yk1lbnVcIj5cbiAgICAgICAgICAgICAgICA8TWVudS5JdGVtPlN1Yk1lbnVJdGVtPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvU3ViTWVudT5cbiAgICAgICAgICAgIDwvTWVudT5cbiAgICAgICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzdHlsZT17eyBtYXJnaW46IDggfX0gb25DbGljaz17KCkgPT4gZXhlY3V0ZSgpfT5FeGVjdXRlPC9CdXR0b24+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpbjogOCB9fSBvbkNsaWNrPXsoKSA9PiBjb25uZWN0KCl9PkNvbm5lY3Q8L0J1dHRvbj5cbiAgICAgICAgKVxuICAgICAgKSA6IChcbiAgICAgICAgXCJQbGVhc2UgaW5zdGFsbCBtZXRhbWFza1wiXG4gICAgICApfVxuICAgIDwvZGl2PlxuICApXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlV2ViM1JlYWN0IiwicHJvY2VzcyIsImFiaSIsImV0aGVycyIsIkluamVjdGVkQ29ubmVjdG9yIiwiQnV0dG9uIiwiTWVudSIsIlN1Yk1lbnUiLCJpbmplY3RlZCIsIkhvbWUiLCJoYXNNZXRhbWFzayIsInNldEhhc01ldGFtYXNrIiwid2luZG93IiwiZXRoZXJldW0iLCJhY3RpdmUiLCJhY3RpdmF0ZSIsImNoYWluSWQiLCJhY2NvdW50IiwibGlicmFyeSIsInByb3ZpZGVyIiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJleGVjdXRlIiwic2lnbmVyIiwiY29udHJhY3RBZGRyZXNzIiwiY29udHJhY3QiLCJnZXRTaWduZXIiLCJlbnYiLCJDb250cmFjdEFkZHJlc3MiLCJDb250cmFjdCIsInN0b3JlIiwiZGl2IiwiSXRlbSIsInRpdGxlIiwidHlwZSIsInN0eWxlIiwibWFyZ2luIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});