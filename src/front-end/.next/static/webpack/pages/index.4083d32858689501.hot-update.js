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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"injected\": function() { return /* binding */ injected; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../next.config */ \"./next.config.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _back_end_artifacts_contracts_NERC20_sol_NERC20_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../back-end/artifacts/contracts/NERC20.sol/NERC20.json */ \"../back-end/artifacts/contracts/NERC20.sol/NERC20.json\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @web3-react/injected-connector */ \"./node_modules/@web3-react/injected-connector/dist/injected-connector.esm.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar SubMenu = antd__WEBPACK_IMPORTED_MODULE_7__.Menu.SubMenu;\nvar injected = new _web3_react_injected_connector__WEBPACK_IMPORTED_MODULE_6__.InjectedConnector();\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false), hasMetamask = ref[0], setHasMetamask = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), state = ref1[0], setState = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        if (typeof window.ethereum !== \"undefined\") {\n            setHasMetamask(true);\n        }\n    });\n    var ref2 = (0,_web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React)(), active = ref2.active, activate = ref2.activate, chainId = ref2.chainId, account = ref2.account, provider = ref2.library;\n    function connect() {\n        return _connect.apply(this, arguments);\n    }\n    function _connect() {\n        _connect = _asyncToGenerator(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(typeof window.ethereum !== \"undefined\")) {\n                            _ctx.next = 10;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return activate(injected);\n                    case 4:\n                        setHasMetamask(true);\n                        _ctx.next = 10;\n                        break;\n                    case 7:\n                        _ctx.prev = 7;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    7\n                ]\n            ]);\n        }));\n        return _connect.apply(this, arguments);\n    }\n    function execute() {\n        return _execute.apply(this, arguments);\n    }\n    function _execute() {\n        _execute = _asyncToGenerator(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var signer, contractAddress, contract;\n            return _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!active) {\n                            _ctx.next = 14;\n                            break;\n                        }\n                        signer = provider.getSigner();\n                        contractAddress = _next_config__WEBPACK_IMPORTED_MODULE_4__.process.env.ContractAddress;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(contractAddress, _back_end_artifacts_contracts_NERC20_sol_NERC20_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.prev = 4;\n                        _ctx.next = 7;\n                        return contract.store(42);\n                    case 7:\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.prev = 9;\n                        _ctx.t0 = _ctx[\"catch\"](4);\n                        console.log(_ctx.t0);\n                    case 12:\n                        _ctx.next = 15;\n                        break;\n                    case 14:\n                        {\n                            console.log(\"Please install MetaMask\");\n                        }\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    4,\n                    9\n                ]\n            ]);\n        }));\n        return _execute.apply(this, arguments);\n    }\n    var handleClick = function(e) {\n        setState(e.key);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Layout, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Menu, {\n                    onClick: handleClick,\n                    mode: \"horizontal\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Menu.Item, {\n                            children: \"Read Functions\"\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Menu.Item, {\n                            children: \"Write Functions\"\n                        }, void 0, false, {\n                            fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this),\n            hasMetamask ? active ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    type: \"primary\",\n                    style: {\n                        margin: 8\n                    },\n                    onClick: function() {\n                        return execute();\n                    },\n                    children: \"Execute\"\n                }, void 0, false, {\n                    fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                    lineNumber: 73,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                type: \"primary\",\n                style: {\n                    margin: 8\n                },\n                onClick: function() {\n                    return connect();\n                },\n                children: \"Connect\"\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 76,\n                columnNumber: 11\n            }, this) : \"Please install metamask\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"/Km6MhIq8oimRzg0y65vDce5INw=\", false, function() {\n    return [\n        _web3_react_core__WEBPACK_IMPORTED_MODULE_3__.useWeb3React\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFQyxNQUFNLEVBQUUsQ0FBQztxQkFBRTtvQkFBRUwsT0FBTyxFQUFFOytCQUFNYixPQUFPLEVBQUU7cUJBQUE7OEJBQUUsU0FBTzs7Ozs7d0JBQVM7NkJBQ3RGLGlCQUVILDhEQUFDeEIsd0NBQU07Z0JBQUN3QyxJQUFJLEVBQUMsU0FBUztnQkFBQ0MsS0FBSyxFQUFFO29CQUFFQyxNQUFNLEVBQUUsQ0FBQztpQkFBRTtnQkFBRUwsT0FBTyxFQUFFOzJCQUFNaEIsT0FBTyxFQUFFO2lCQUFBOzBCQUFFLFNBQU87Ozs7O29CQUFTLEdBR3pGLHlCQUF5Qjs7Ozs7O1lBRXZCLENBQ1A7Q0FDRjtHQXJFdUJiLElBQUk7O1FBZ0J0QmIsMERBQVk7OztBQWhCTWEsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVdlYjNSZWFjdCB9IGZyb20gXCJAd2ViMy1yZWFjdC9jb3JlXCJcbmltcG9ydCB7IHByb2Nlc3MgfSBmcm9tICcuLi9uZXh0LmNvbmZpZydcbmltcG9ydCB7IGFiaSB9IGZyb20gJy4uLy4uL2JhY2stZW5kL2FydGlmYWN0cy9jb250cmFjdHMvTkVSQzIwLnNvbC9ORVJDMjAuanNvbidcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIlxuaW1wb3J0IHsgSW5qZWN0ZWRDb25uZWN0b3IgfSBmcm9tIFwiQHdlYjMtcmVhY3QvaW5qZWN0ZWQtY29ubmVjdG9yXCJcbmltcG9ydCB7IEJ1dHRvbiwgTWVudSwgTGF5b3V0IH0gZnJvbSAnYW50ZCdcbmltcG9ydCB7IE1haWxPdXRsaW5lZCwgQXBwc3RvcmVPdXRsaW5lZCwgU2V0dGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XG5cbmV4cG9ydCBjb25zdCBpbmplY3RlZCA9IG5ldyBJbmplY3RlZENvbm5lY3RvcigpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtoYXNNZXRhbWFzaywgc2V0SGFzTWV0YW1hc2tdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cuZXRoZXJldW0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHNldEhhc01ldGFtYXNrKHRydWUpXG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IHtcbiAgICBhY3RpdmUsXG4gICAgYWN0aXZhdGUsXG4gICAgY2hhaW5JZCxcbiAgICBhY2NvdW50LFxuICAgIGxpYnJhcnk6IHByb3ZpZGVyLFxuICB9ID0gdXNlV2ViM1JlYWN0KClcblxuICBhc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBhd2FpdCBhY3RpdmF0ZShpbmplY3RlZClcbiAgICAgICAgc2V0SGFzTWV0YW1hc2sodHJ1ZSlcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhc3luYyBmdW5jdGlvbiBleGVjdXRlKCkge1xuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG4gICAgICBjb25zdCBjb250cmFjdEFkZHJlc3MgPSBwcm9jZXNzLmVudi5Db250cmFjdEFkZHJlc3NcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGFiaSwgc2lnbmVyKVxuICAgICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgY29udHJhY3Quc3RvcmUoNDIpXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgaW5zdGFsbCBNZXRhTWFza1wiKVxuICAgIH1cbiAgfVxuXG4gIGxldCBoYW5kbGVDbGljayA9IChlKSA9PiB7XG4gICAgc2V0U3RhdGUoZS5rZXkpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8TWVudSBvbkNsaWNrPXtoYW5kbGVDbGlja30gbW9kZT1cImhvcml6b250YWxcIj5cbiAgICAgICAgICA8TWVudS5JdGVtPlJlYWQgRnVuY3Rpb25zPC9NZW51Lkl0ZW0+XG4gICAgICAgICAgPE1lbnUuSXRlbT5Xcml0ZSBGdW5jdGlvbnM8L01lbnUuSXRlbT5cbiAgICAgICAgPC9NZW51PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgICB7aGFzTWV0YW1hc2sgPyAoXG4gICAgICAgIGFjdGl2ZSA/IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHN0eWxlPXt7IG1hcmdpbjogOCB9fSBvbkNsaWNrPXsoKSA9PiBleGVjdXRlKCl9PkV4ZWN1dGU8L0J1dHRvbj5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgc3R5bGU9e3sgbWFyZ2luOiA4IH19IG9uQ2xpY2s9eygpID0+IGNvbm5lY3QoKX0+Q29ubmVjdDwvQnV0dG9uPlxuICAgICAgICApXG4gICAgICApIDogKFxuICAgICAgICBcIlBsZWFzZSBpbnN0YWxsIG1ldGFtYXNrXCJcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VXZWIzUmVhY3QiLCJwcm9jZXNzIiwiYWJpIiwiZXRoZXJzIiwiSW5qZWN0ZWRDb25uZWN0b3IiLCJCdXR0b24iLCJNZW51IiwiTGF5b3V0IiwiTWFpbE91dGxpbmVkIiwiQXBwc3RvcmVPdXRsaW5lZCIsIlNldHRpbmdPdXRsaW5lZCIsIlN1Yk1lbnUiLCJpbmplY3RlZCIsIkhvbWUiLCJoYXNNZXRhbWFzayIsInNldEhhc01ldGFtYXNrIiwic3RhdGUiLCJzZXRTdGF0ZSIsIndpbmRvdyIsImV0aGVyZXVtIiwiYWN0aXZlIiwiYWN0aXZhdGUiLCJjaGFpbklkIiwiYWNjb3VudCIsImxpYnJhcnkiLCJwcm92aWRlciIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiZXhlY3V0ZSIsInNpZ25lciIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnRyYWN0IiwiZ2V0U2lnbmVyIiwiZW52IiwiQ29udHJhY3RBZGRyZXNzIiwiQ29udHJhY3QiLCJzdG9yZSIsImhhbmRsZUNsaWNrIiwiZSIsImtleSIsImRpdiIsIm9uQ2xpY2siLCJtb2RlIiwiSXRlbSIsInR5cGUiLCJzdHlsZSIsIm1hcmdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});