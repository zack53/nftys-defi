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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @walletconnect/web3-provider */ \"./node_modules/@walletconnect/web3-provider/dist/esm/index.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../next.config */ \"./next.config.js\");\n/* harmony import */ var _next_config__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_next_config__WEBPACK_IMPORTED_MODULE_7__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar web3Modal;\nvar providerOptions = {\n    walletconnect: {\n        package: _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n        options: {\n            rpc: {\n                42: _next_config__WEBPACK_IMPORTED_MODULE_7__.process.env.NEXT_PUBLIC_RPC_URL\n            }\n        }\n    }\n};\nif (true) {\n    web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())({\n        cacheProvider: false,\n        providerOptions: providerOptions\n    });\n}\nfunction Home() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), isConnected = ref[0], setIsConnected = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false), hasMetamask = ref1[0], setHasMetamask = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(undefined), signer = ref2[0], setSigner = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function() {\n        if (typeof window.ethereum !== \"undefined\") {\n            setHasMetamask(true);\n        }\n    });\n    function connect() {\n        return _connect.apply(this, arguments);\n    }\n    function _connect() {\n        _connect = _asyncToGenerator(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3ModalProvider, provider;\n            return _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(typeof window.ethereum !== \"undefined\")) {\n                            _ctx.next = 15;\n                            break;\n                        }\n                        _ctx.prev = 1;\n                        _ctx.next = 4;\n                        return web3Modal.connect();\n                    case 4:\n                        web3ModalProvider = _ctx.sent;\n                        setIsConnected(true);\n                        provider = new ethers.providers.Web3Provider(web3ModalProvider);\n                        setSigner(provider.getSigner());\n                        _ctx.next = 13;\n                        break;\n                    case 10:\n                        _ctx.prev = 10;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        console.log(_ctx.t0);\n                    case 13:\n                        _ctx.next = 16;\n                        break;\n                    case 15:\n                        {\n                            setIsConnected(false);\n                        }\n                    case 16:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    10\n                ]\n            ]);\n        }));\n        return _connect.apply(this, arguments);\n    }\n    function execute() {\n        return _execute.apply(this, arguments);\n    }\n    function _execute() {\n        _execute = _asyncToGenerator(_home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var contractAddress, contract;\n            return _home_zack_Documents_GitHub_nftys_defi_src_front_end_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        if (!(typeof window.ethereum !== \"undefined\")) {\n                            _ctx.next = 13;\n                            break;\n                        }\n                        contractAddress = \"0x5FbDB2315678afecb367f032d93F642f64180aa3\";\n                        contract = new ethers.Contract(contractAddress, abi, signer);\n                        _ctx.prev = 3;\n                        _ctx.next = 6;\n                        return contract.store(42);\n                    case 6:\n                        _ctx.next = 11;\n                        break;\n                    case 8:\n                        _ctx.prev = 8;\n                        _ctx.t0 = _ctx[\"catch\"](3);\n                        console.log(_ctx.t0);\n                    case 11:\n                        _ctx.next = 14;\n                        break;\n                    case 13:\n                        {\n                            console.log(\"Please install MetaMask\");\n                        }\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    3,\n                    8\n                ]\n            ]);\n        }));\n        return _execute.apply(this, arguments);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            hasMetamask ? isConnected ? \"Connected! \" : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return connect();\n                },\n                children: \"Connect\"\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 73,\n                columnNumber: 11\n            }, this) : \"Please install metamask\",\n            isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                onClick: function() {\n                    return execute();\n                },\n                children: \"Execute\"\n            }, void 0, false, {\n                fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n                lineNumber: 79,\n                columnNumber: 22\n            }, this) : \"\"\n        ]\n    }, void 0, true, {\n        fileName: \"/home/zack/Documents/GitHub/nftys-defi/src/front-end/pages/index.js\",\n        lineNumber: 68,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"nUGAey+ZU/OVv+KOLfC5OvVq/U8=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQ1ZGLFdBQVcsR0FDVCxhQUFhLGlCQUViLDhEQUFDeUIsUUFBTTtnQkFBQ0MsT0FBTyxFQUFFOzJCQUFNakIsT0FBTyxFQUFFO2lCQUFBOzBCQUFFLFNBQU87Ozs7O29CQUFTLEdBR3BELHlCQUF5QjtZQUcxQlQsV0FBVyxpQkFBRyw4REFBQ3lCLFFBQU07Z0JBQUNDLE9BQU8sRUFBRTsyQkFBTVIsT0FBTyxFQUFFO2lCQUFBOzBCQUFFLFNBQU87Ozs7O29CQUFTLEdBQUcsRUFBRTs7Ozs7O1lBQ2xFLENBQ047Q0FDSDtHQXZEdUJuQixJQUFJO0FBQUpBLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM21vZGFsJ1xuaW1wb3J0IFdhbGxldENvbm5lY3RQcm92aWRlciBmcm9tIFwiQHdhbGxldGNvbm5lY3Qvd2ViMy1wcm92aWRlclwiXG5pbXBvcnQgeyBwcm9jZXNzIH0gZnJvbSAnLi4vbmV4dC5jb25maWcnXG5cbmxldCB3ZWIzTW9kYWxcblxuY29uc3QgcHJvdmlkZXJPcHRpb25zID0ge1xuICB3YWxsZXRjb25uZWN0OiB7XG4gICAgcGFja2FnZTogV2FsbGV0Q29ubmVjdFByb3ZpZGVyLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgIHJwYzogeyA0MjogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfUlBDX1VSTCB9XG4gICAgfVxuICB9XG59XG5cbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoe1xuICAgIGNhY2hlUHJvdmlkZXI6IGZhbHNlLFxuICAgIHByb3ZpZGVyT3B0aW9ucywgLy8gcmVxdWlyZWRcbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpc0Nvbm5lY3RlZCwgc2V0SXNDb25uZWN0ZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaGFzTWV0YW1hc2ssIHNldEhhc01ldGFtYXNrXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NpZ25lciwgc2V0U2lnbmVyXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgc2V0SGFzTWV0YW1hc2sodHJ1ZSk7XG4gICAgfVxuICB9KTtcblxuICBhc3luYyBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgIGlmICh0eXBlb2Ygd2luZG93LmV0aGVyZXVtICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB3ZWIzTW9kYWxQcm92aWRlciA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KCk7XG4gICAgICAgIHNldElzQ29ubmVjdGVkKHRydWUpO1xuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcih3ZWIzTW9kYWxQcm92aWRlcik7XG4gICAgICAgIHNldFNpZ25lcihwcm92aWRlci5nZXRTaWduZXIoKSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRJc0Nvbm5lY3RlZChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZnVuY3Rpb24gZXhlY3V0ZSgpIHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5ldGhlcmV1bSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgY29uc3QgY29udHJhY3RBZGRyZXNzID0gXCIweDVGYkRCMjMxNTY3OGFmZWNiMzY3ZjAzMmQ5M0Y2NDJmNjQxODBhYTNcIjtcbiAgICAgIGNvbnN0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChjb250cmFjdEFkZHJlc3MsIGFiaSwgc2lnbmVyKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNvbnRyYWN0LnN0b3JlKDQyKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJQbGVhc2UgaW5zdGFsbCBNZXRhTWFza1wiKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7aGFzTWV0YW1hc2sgPyAoXG4gICAgICAgIGlzQ29ubmVjdGVkID8gKFxuICAgICAgICAgIFwiQ29ubmVjdGVkISBcIlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gY29ubmVjdCgpfT5Db25uZWN0PC9idXR0b24+XG4gICAgICAgIClcbiAgICAgICkgOiAoXG4gICAgICAgIFwiUGxlYXNlIGluc3RhbGwgbWV0YW1hc2tcIlxuICAgICAgKX1cblxuICAgICAge2lzQ29ubmVjdGVkID8gPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBleGVjdXRlKCl9PkV4ZWN1dGU8L2J1dHRvbj4gOiBcIlwifVxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIldlYjNNb2RhbCIsIldhbGxldENvbm5lY3RQcm92aWRlciIsInByb2Nlc3MiLCJ3ZWIzTW9kYWwiLCJwcm92aWRlck9wdGlvbnMiLCJ3YWxsZXRjb25uZWN0IiwicGFja2FnZSIsIm9wdGlvbnMiLCJycGMiLCJlbnYiLCJORVhUX1BVQkxJQ19SUENfVVJMIiwiY2FjaGVQcm92aWRlciIsIkhvbWUiLCJpc0Nvbm5lY3RlZCIsInNldElzQ29ubmVjdGVkIiwiaGFzTWV0YW1hc2siLCJzZXRIYXNNZXRhbWFzayIsInVuZGVmaW5lZCIsInNpZ25lciIsInNldFNpZ25lciIsIndpbmRvdyIsImV0aGVyZXVtIiwiY29ubmVjdCIsIndlYjNNb2RhbFByb3ZpZGVyIiwicHJvdmlkZXIiLCJldGhlcnMiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJjb25zb2xlIiwibG9nIiwiZXhlY3V0ZSIsImNvbnRyYWN0QWRkcmVzcyIsImNvbnRyYWN0IiwiQ29udHJhY3QiLCJhYmkiLCJzdG9yZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});