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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"injected\": function() { return /* binding */ injected; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../next.config */ \"./next.config.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _back_end_artifacts_contracts_NERC20_sol_NERC20_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../back-end/artifacts/contracts/NERC20.sol/NERC20.json */ \"../back-end/artifacts/contracts/NERC20.sol/NERC20.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__.InjectedConnector();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), hasMetamask = ref[0], setHasMetamask = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (typeof window.ethereum !== \"undefined\") {\n            setHasMetamask(true);\n        }\n    });\n    var ref1 = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)(), active = ref1.active, activate = ref1.activate, chainId = ref1.chainId, account = ref1.account, provider = ref1.library;\n    function connect() {\n        return _connect.apply(this, arguments);\n    }\n    function _connect() {\n        _connect = _asyncToGenerator(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(typeof window.ethereum !== \"undefined\")) {\n                            _ctx.next = 10;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return activate(injected);\n                    case 4:\n                        setHasMetamask(true);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    7\n                ]\n            ]);\n        }));\n        return _connect.apply(this, arguments);\n    }\n    function execute() {\n        return _execute.apply(this, arguments);\n    }\n    function _execute() {\n        _execute = _asyncToGenerator(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contractAddress, contract;\n            return _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!active) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        signer = provider.getSigner();\n                        contractAddress = _next_config__WEBPACK_IMPORTED_MODULE_4__.process.env.ContractAddress;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(contractAddress, _back_end_artifacts_contracts_NERC20_sol_NERC20_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.prev = 4;\n                        _ctx.next = 7;\n                        return contract.store(42);\n                    case 7:\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                        console.log(_ctx.t0);\n                    case 12:\n                        _ctx.next = 15;\n                        break;\n                    case 14:\n                        {\n                            console.log(\"Please install MetaMask\");\n                        }\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    4,\n                    9\n                ]\n            ]);\n        }));\n        return _execute.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Layout, {}, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            hasMetamask ? active ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                    type: \"primary\",\n                    style: {\n                        margin: 8\n                    },\n                    onClick: function() {\n                        return execute();\n                    },\n                    children: \"Execute\"\n                }, void 0, false, {\n                    fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                    lineNumber: 61,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                type: \"primary\",\n                style: {\n                    margin: 8\n                },\n                onClick: function() {\n                    return connect();\n                },\n                children: \"Connect\"\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 64,\n                columnNumber: 11\n            }, this) : \"Please install metamask\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"Tdyy3OEFodtm1jn44QDmp2tJoV4=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VXZWIzUmVhY3QgfSBmcm9tIFwiQHdlYjMtcmVhY3QvY29yZVwiXG5pbXBvcnQgeyBwcm9jZXNzIH0gZnJvbSAnLi4vbmV4dC5jb25maWcnXG5pbXBvcnQgeyBhYmkgfSBmcm9tICcuLi8uLi9iYWNrLWVuZC9hcnRpZmFjdHMvY29udHJhY3RzL05FUkMyMC5zb2wvTkVSQzIwLmpzb24nXG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCJcbmltcG9ydCB7IEluamVjdGVkQ29ubmVjdG9yIH0gZnJvbSBcIkB3ZWIzLXJlYWN0L2luamVjdGVkLWNvbm5lY3RvclwiXG5pbXBvcnQgeyBCdXR0b24sIE1lbnUsIFN1Yk1lbnUsIExheW91dCwgSGVhZGVyLCBDb250ZW50LCBTaWRlciwgRm9vdGVyIH0gZnJvbSAnYW50ZCdcblxuZXhwb3J0IGNvbnN0IGluamVjdGVkID0gbmV3IEluamVjdGVkQ29ubmVjdG9yKClcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2hhc01ldGFtYXNrLCBzZXRIYXNNZXRhbWFza10gPSB1c2VTdGF0ZShmYWxzZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBzZXRIYXNNZXRhbWFzayh0cnVlKVxuICAgIH1cbiAgfSlcblxuICBjb25zdCB7XG4gICAgYWN0aXZlLFxuICAgIGFjdGl2YXRlLFxuICAgIGNoYWluSWQsXG4gICAgYWNjb3VudCxcbiAgICBsaWJyYXJ5OiBwcm92aWRlcixcbiAgfSA9IHVzZVdlYjNSZWFjdCgpXG5cbiAgYXN5bmMgZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgYWN0aXZhdGUoaW5qZWN0ZWQpXG4gICAgICAgIHNldEhhc01ldGFtYXNrKHRydWUpXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZSgpIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICAgICAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gcHJvY2Vzcy5lbnYuQ29udHJhY3RBZGRyZXNzXG4gICAgICBjb25zdCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoY29udHJhY3RBZGRyZXNzLCBhYmksIHNpZ25lcilcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNvbnRyYWN0LnN0b3JlKDQyKVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUGxlYXNlIGluc3RhbGwgTWV0YU1hc2tcIilcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGF5b3V0PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgICB7aGFzTWV0YW1hc2sgPyAoXG4gICAgICAgIGFjdGl2ZSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpbjogOCB9fSBvbkNsaWNrPXsoKSA9PiBleGVjdXRlKCl9PkV4ZWN1dGU8L0J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luOiA4IH19IG9uQ2xpY2s9eygpID0+IGNvbm5lY3QoKX0+Q29ubmVjdDwvQnV0dG9uPlxuICAgICAgICApXG4gICAgICApIDogKFxuICAgICAgICBcIlBsZWFzZSBpbnN0YWxsIG1ldGFtYXNrXCJcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VXZWIzUmVhY3QiLCJwcm9jZXNzIiwiYWJpIiwiZXRoZXJzIiwiSW5qZWN0ZWRDb25uZWN0b3IiLCJCdXR0b24iLCJNZW51IiwiU3ViTWVudSIsIkxheW91dCIsIkhlYWRlciIsIkNvbnRlbnQiLCJTaWRlciIsIkZvb3RlciIsImluamVjdGVkIiwiSG9tZSIsImhhc01ldGFtYXNrIiwic2V0SGFzTWV0YW1hc2siLCJ3aW5kb3ciLCJldGhlcmV1bSIsImFjdGl2ZSIsImFjdGl2YXRlIiwiY2hhaW5JZCIsImFjY291bnQiLCJsaWJyYXJ5IiwicHJvdmlkZXIiLCJjb25uZWN0IiwiY29uc29sZSIsImxvZyIsImV4ZWN1dGUiLCJzaWduZXIiLCJjb250cmFjdEFkZHJlc3MiLCJjb250cmFjdCIsImdldFNpZ25lciIsImVudiIsIkNvbnRyYWN0QWRkcmVzcyIsIkNvbnRyYWN0Iiwic3RvcmUiLCJkaXYiLCJ0eXBlIiwic3R5bGUiLCJtYXJnaW4iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});