"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @rainbow-me/rainbowkit/styles.css */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.css\");\n/* harmony import */ var _rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rainbow_me_rainbowkit_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wagmi/core/chains */ \"./node_modules/@wagmi/core/dist/chains.js\");\n/* harmony import */ var wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi/providers/public */ \"./node_modules/wagmi/dist/providers/public.js\");\n/* harmony import */ var _rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @rainbow-me/rainbowkit */ \"./node_modules/@rainbow-me/rainbowkit/dist/index.js\");\n/* harmony import */ var _rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @rainbow-me/rainbowkit/wallets */ \"./node_modules/@rainbow-me/rainbowkit/dist/wallets/walletConnectors/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\nconst { chains , provider  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.configureChains)([\n    _wagmi_core_chains__WEBPACK_IMPORTED_MODULE_6__.polygonMumbai\n], [\n    (0,wagmi_providers_public__WEBPACK_IMPORTED_MODULE_7__.publicProvider)()\n]);\nconst connectors = (0,_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.connectorsForWallets)([\n    {\n        groupName: \"Recommended\",\n        wallets: [\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_9__.injectedWallet)({\n                chains\n            }),\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_9__.metaMaskWallet)({\n                chains\n            })\n        ]\n    },\n    {\n        groupName: \"Mobile Wallets ( QRCode )\",\n        wallets: [\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_9__.walletConnectWallet)({\n                chains\n            })\n        ]\n    },\n    {\n        groupName: \"Special for Mr.Maleki\",\n        wallets: [\n            (0,_rainbow_me_rainbowkit_wallets__WEBPACK_IMPORTED_MODULE_9__.ledgerWallet)({\n                chains\n            })\n        ]\n    }\n]);\nconst wagmiClient = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.createClient)({\n    autoConnect: true,\n    connectors,\n    provider\n});\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const { address , isConnected  } = (0,wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount)();\n    // let [isOpen, setIsOpen] = useState(false)\n    // useEffect(() => {\n    //   if(!isConnected) {\n    //     openModal()\n    //   }\n    // }, [])\n    // function closeModal() {\n    //   setIsOpen(false)\n    // }\n    // function openModal() {\n    //   setIsOpen(true)\n    // }\n    // Create a seperate file and component for alerting the user for connecting wallet \n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(wagmi__WEBPACK_IMPORTED_MODULE_5__.WagmiConfig, {\n        client: wagmiClient,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.RainbowKitProvider, {\n            chains: chains,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                    className: \"border-b p-6 bg-cyan-400\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-5xl text-white-40\",\n                            children: \"Prototype\"\n                        }, void 0, false, {\n                            fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/pages/_app.js\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex mt-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"grow flex\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/\",\n                                            className: \"mr-12 text-cyan-100 hover:text-blue-600\",\n                                            children: \"Gallery\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/pages/_app.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/create-nft\",\n                                            className: \"mr-12 text-cyan-100 hover:text-blue-600\",\n                                            children: \"Create NFT\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/pages/_app.js\",\n                                            lineNumber: 78,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/my-nfts\",\n                                            className: \"mr-12 text-cyan-100 hover:text-blue-600\",\n                                            children: \"My NFTs\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/pages/_app.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/pages/_app.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_rainbow_me_rainbowkit__WEBPACK_IMPORTED_MODULE_8__.ConnectButton, {\n                                    className: \"grow-0\",\n                                    chainStatus: \"name\",\n                                    accountStatus: \"full\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/pages/_app.js\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/pages/_app.js\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/pages/_app.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/pages/_app.js\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/pages/_app.js\",\n            lineNumber: 70,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/pages/_app.js\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, this);\n}\n_s(MyApp, \"tMQ6u8u8z1LVeyI/NWedhlXoxok=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_5__.useAccount\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBNkI7QUFDRTtBQUNZO0FBRW9DO0FBRXpCO0FBQ0E7QUFFSDtBQUNLO0FBQ0Q7QUFDMkI7QUFDcEI7QUFDc0M7QUFJcEcsTUFBTSxFQUFFbUIsT0FBTSxFQUFFQyxTQUFRLEVBQUUsR0FBR25CLHNEQUFlQSxDQUFDO0lBQUVTLDZEQUFhQTtDQUFFLEVBQUM7SUFBRUMsc0VBQWNBO0NBQUk7QUFFbkYsTUFBTVUsYUFBYVIsNEVBQW9CQSxDQUFDO0lBQ3RDO1FBQ0VTLFdBQVc7UUFDWEMsU0FBUztZQUNQUCw4RUFBY0EsQ0FBQztnQkFBRUc7WUFBTztZQUN4QkYsOEVBQWNBLENBQUM7Z0JBQUVFO1lBQU87U0FDekI7SUFDSDtJQUNBO1FBQ0VHLFdBQVc7UUFDWEMsU0FBUztZQUNQTCxtRkFBbUJBLENBQUM7Z0JBQUVDO1lBQU87U0FDOUI7SUFDSDtJQUNBO1FBQ0VHLFdBQVc7UUFDWEMsU0FBUztZQUNQUiw0RUFBWUEsQ0FBQztnQkFBQ0k7WUFBTTtTQUNyQjtJQUNIO0NBQ0Q7QUFFRCxNQUFNSyxjQUFjdEIsbURBQVlBLENBQUU7SUFBQ3VCLGFBQWEsSUFBSTtJQUFFSjtJQUFXRDtBQUFTO0FBRzFFLFNBQVNNLE1BQU0sS0FBd0IsRUFBRTtRQUExQixFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxHQUF4Qjs7SUFFYixNQUFNLEVBQUVDLFFBQU8sRUFBRUMsWUFBVyxFQUFFLEdBQUcxQixpREFBVUE7SUFFM0MsNENBQTRDO0lBRzVDLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixTQUFTO0lBRVQsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixJQUFJO0lBRUoseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixJQUFJO0lBRUosb0ZBQW9GO0lBQ3BGLHFCQUNFLDhEQUFDRCw4Q0FBV0E7UUFBQzRCLFFBQVFQO2tCQUNuQiw0RUFBQ1Ysc0VBQWtCQTtZQUFDSyxRQUFRQTs7OEJBQzFCLDhEQUFDYTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFFRCxXQUFVO3NDQUF5Qjs7Ozs7O3NDQUN0Qyw4REFBQ0U7NEJBQUlGLFdBQVU7OzhDQUNiLDhEQUFDRTtvQ0FBSUYsV0FBVTs7c0RBQ2IsOERBQUNqQyxrREFBSUE7NENBQUNvQyxNQUFLOzRDQUFJSCxXQUFVO3NEQUEwQzs7Ozs7O3NEQUduRSw4REFBQ2pDLGtEQUFJQTs0Q0FBQ29DLE1BQUs7NENBQWNILFdBQVU7c0RBQTBDOzs7Ozs7c0RBRzdFLDhEQUFDakMsa0RBQUlBOzRDQUFDb0MsTUFBSzs0Q0FBV0gsV0FBVTtzREFBMEM7Ozs7Ozs7Ozs7Ozs4Q0FPNUUsOERBQUNyQixpRUFBYUE7b0NBQUNxQixXQUFVO29DQUFTSSxhQUFZO29DQUFPQyxlQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR3ZFLDhEQUFDWDtvQkFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQztHQWpEU0Y7O1FBRTBCdEIsNkNBQVVBOzs7S0FGcENzQjtBQW1EVCwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnO1xuaW1wb3J0ICdAcmFpbmJvdy1tZS9yYWluYm93a2l0L3N0eWxlcy5jc3MnO1xuXG5pbXBvcnQgeyBjb25maWd1cmVDaGFpbnMsIGNyZWF0ZUNsaWVudCwgV2FnbWlDb25maWcsIHVzZUFjY291bnQgfSBmcm9tIFwid2FnbWlcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERpYWxvZywgVHJhbnNpdGlvbiB9IGZyb20gJ0BoZWFkbGVzc3VpL3JlYWN0J1xuXG5pbXBvcnQgeyBwb2x5Z29uTXVtYmFpIH0gZnJvbSAnQHdhZ21pL2NvcmUvY2hhaW5zJztcbmltcG9ydCB7IHB1YmxpY1Byb3ZpZGVyIH0gZnJvbSBcIndhZ21pL3Byb3ZpZGVycy9wdWJsaWNcIjtcbmltcG9ydCB7IENvbm5lY3RCdXR0b24gfSBmcm9tICdAcmFpbmJvdy1tZS9yYWluYm93a2l0JztcbmltcG9ydCB7IGNvbm5lY3RvcnNGb3JXYWxsZXRzLCBSYWluYm93S2l0UHJvdmlkZXIgfSBmcm9tICdAcmFpbmJvdy1tZS9yYWluYm93a2l0JztcbmltcG9ydCB7IGxlZGdlcldhbGxldCB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQvd2FsbGV0cyc7XG5pbXBvcnQgeyBpbmplY3RlZFdhbGxldCxtZXRhTWFza1dhbGxldCwgd2FsbGV0Q29ubmVjdFdhbGxldCB9IGZyb20gJ0ByYWluYm93LW1lL3JhaW5ib3draXQvd2FsbGV0cyc7XG5cblxuXG5jb25zdCB7IGNoYWlucywgcHJvdmlkZXIgfSA9IGNvbmZpZ3VyZUNoYWlucyhbIHBvbHlnb25NdW1iYWkgXSxbIHB1YmxpY1Byb3ZpZGVyKCkgXSlcblxuY29uc3QgY29ubmVjdG9ycyA9IGNvbm5lY3RvcnNGb3JXYWxsZXRzKFtcbiAge1xuICAgIGdyb3VwTmFtZTogJ1JlY29tbWVuZGVkJyxcbiAgICB3YWxsZXRzOiBbXG4gICAgICBpbmplY3RlZFdhbGxldCh7IGNoYWlucyB9KSxcbiAgICAgIG1ldGFNYXNrV2FsbGV0KHsgY2hhaW5zIH0pLFxuICAgIF1cbiAgfSxcbiAge1xuICAgIGdyb3VwTmFtZTogJ01vYmlsZSBXYWxsZXRzICggUVJDb2RlICknLFxuICAgIHdhbGxldHM6IFtcbiAgICAgIHdhbGxldENvbm5lY3RXYWxsZXQoeyBjaGFpbnMgfSksXG4gICAgXVxuICB9LFxuICB7XG4gICAgZ3JvdXBOYW1lOiBcIlNwZWNpYWwgZm9yIE1yLk1hbGVraVwiLFxuICAgIHdhbGxldHM6IFtcbiAgICAgIGxlZGdlcldhbGxldCh7Y2hhaW5zfSlcbiAgICBdXG4gIH1cbl0pXG5cbmNvbnN0IHdhZ21pQ2xpZW50ID0gY3JlYXRlQ2xpZW50KCB7YXV0b0Nvbm5lY3Q6IHRydWUsIGNvbm5lY3RvcnMscHJvdmlkZXIgfSlcblxuXG5mdW5jdGlvbiBNeUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcblxuICBjb25zdCB7IGFkZHJlc3MsIGlzQ29ubmVjdGVkIH0gPSB1c2VBY2NvdW50KCk7XG5cbiAgLy8gbGV0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYoIWlzQ29ubmVjdGVkKSB7XG4gIC8vICAgICBvcGVuTW9kYWwoKVxuICAvLyAgIH1cbiAgLy8gfSwgW10pXG5cbiAgLy8gZnVuY3Rpb24gY2xvc2VNb2RhbCgpIHtcbiAgLy8gICBzZXRJc09wZW4oZmFsc2UpXG4gIC8vIH1cblxuICAvLyBmdW5jdGlvbiBvcGVuTW9kYWwoKSB7XG4gIC8vICAgc2V0SXNPcGVuKHRydWUpXG4gIC8vIH1cblxuICAvLyBDcmVhdGUgYSBzZXBlcmF0ZSBmaWxlIGFuZCBjb21wb25lbnQgZm9yIGFsZXJ0aW5nIHRoZSB1c2VyIGZvciBjb25uZWN0aW5nIHdhbGxldCBcbiAgcmV0dXJuIChcbiAgICA8V2FnbWlDb25maWcgY2xpZW50PXt3YWdtaUNsaWVudH0+XG4gICAgICA8UmFpbmJvd0tpdFByb3ZpZGVyIGNoYWlucz17Y2hhaW5zfT5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJib3JkZXItYiBwLTYgYmctY3lhbi00MDBcIj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LTV4bCB0ZXh0LXdoaXRlLTQwXCI+UHJvdG90eXBlPC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtdC01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3cgZmxleFwiPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiIGNsYXNzTmFtZT1cIm1yLTEyIHRleHQtY3lhbi0xMDAgaG92ZXI6dGV4dC1ibHVlLTYwMFwiPlxuICAgICAgICAgICAgICAgIEdhbGxlcnlcbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NyZWF0ZS1uZnRcIiBjbGFzc05hbWU9XCJtci0xMiB0ZXh0LWN5YW4tMTAwIGhvdmVyOnRleHQtYmx1ZS02MDBcIj5cbiAgICAgICAgICAgICAgICBDcmVhdGUgTkZUXG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9teS1uZnRzXCIgY2xhc3NOYW1lPVwibXItMTIgdGV4dC1jeWFuLTEwMCBob3Zlcjp0ZXh0LWJsdWUtNjAwXCI+XG4gICAgICAgICAgICAgICAgTXkgTkZUc1xuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIHsvKiA8TGluayBocmVmPVwiL3Rlc3RcIiBjbGFzc05hbWU9XCJtci0xMiB0ZXh0LWN5YW4tMTAwIGhvdmVyOnRleHQtYmx1ZS02MDBcIj5cbiAgICAgICAgICAgICAgICB0ZXN0XG4gICAgICAgICAgICAgIDwvTGluaz4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDb25uZWN0QnV0dG9uIGNsYXNzTmFtZT1cImdyb3ctMFwiIGNoYWluU3RhdHVzPVwibmFtZVwiIGFjY291bnRTdGF0dXM9XCJmdWxsXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30vPiBcbiAgICAgIDwvUmFpbmJvd0tpdFByb3ZpZGVyPlxuICAgIDwvV2FnbWlDb25maWc+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiTGluayIsImNvbmZpZ3VyZUNoYWlucyIsImNyZWF0ZUNsaWVudCIsIldhZ21pQ29uZmlnIiwidXNlQWNjb3VudCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiRnJhZ21lbnQiLCJEaWFsb2ciLCJUcmFuc2l0aW9uIiwicG9seWdvbk11bWJhaSIsInB1YmxpY1Byb3ZpZGVyIiwiQ29ubmVjdEJ1dHRvbiIsImNvbm5lY3RvcnNGb3JXYWxsZXRzIiwiUmFpbmJvd0tpdFByb3ZpZGVyIiwibGVkZ2VyV2FsbGV0IiwiaW5qZWN0ZWRXYWxsZXQiLCJtZXRhTWFza1dhbGxldCIsIndhbGxldENvbm5lY3RXYWxsZXQiLCJjaGFpbnMiLCJwcm92aWRlciIsImNvbm5lY3RvcnMiLCJncm91cE5hbWUiLCJ3YWxsZXRzIiwid2FnbWlDbGllbnQiLCJhdXRvQ29ubmVjdCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiYWRkcmVzcyIsImlzQ29ubmVjdGVkIiwiY2xpZW50IiwibmF2IiwiY2xhc3NOYW1lIiwicCIsImRpdiIsImhyZWYiLCJjaGFpblN0YXR1cyIsImFjY291bnRTdGF0dXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n"));

/***/ })

});