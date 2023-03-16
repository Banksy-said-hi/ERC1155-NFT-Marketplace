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

/***/ "./components/nftCard.js":
/*!*******************************!*\
  !*** ./components/nftCard.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NFTCard\": function() { return /* binding */ NFTCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_buyNFT_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/buyNFT.js */ \"./components/buyNFT.js\");\n/* harmony import */ var _components_listNFT_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/listNFT.js */ \"./components/listNFT.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_Marketplace_sol_Marketplace_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../artifacts/contracts/Marketplace.sol/Marketplace.json */ \"./artifacts/contracts/Marketplace.sol/Marketplace.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n// import { useDebounce } from 'use-debounce';\nconst NFTCard = (param)=>{\n    let { nft  } = param;\n    var ref, ref1, ref2, ref3;\n    _s();\n    // const { address, isConnected } = useAccount();\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    // console.log(`token id is ${nft.tokenId}`);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // const debouncedPrice = useDebounce(price, 500)\n    // Fetching price of tokens based on their token ids and mother contract address\n    // This hooks read data from the marketplace contract \n    (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.useContractRead)({\n        address: _config__WEBPACK_IMPORTED_MODULE_5__.marketplace_mumbai,\n        abi: _artifacts_contracts_Marketplace_sol_Marketplace_json__WEBPACK_IMPORTED_MODULE_6__.abi,\n        functionName: \"pricePerTokenGetter\",\n        args: [\n            nft.tokenId\n        ],\n        onSuccess (data) {\n            console.log(\"Price per token for token id \".concat(nft.tokenId, \" is => \").concat(data.toNumber()));\n            setPrice(data.toNumber());\n        },\n        onError (error) {\n            console.log(\"Error\", error);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/5 flex flex-col py-2\",\n        children: [\n            router.pathname == \"/\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/2 bg-teal-300 rounded-t-md flex items-center justify-center py-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xl text-white\",\n                                children: nft.amount\n                            }, void 0, false, {\n                                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                lineNumber: 49,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-white pl-1\",\n                                children: \"tokens for sale\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                lineNumber: 50,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/2 bg-teal-300 rounded-t-md flex items-center justify-center py-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xl text-white\",\n                                children: nft.amount\n                            }, void 0, false, {\n                                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-xs text-white pl-1\",\n                                children: \"Matic per token\"\n                            }, void 0, false, {\n                                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                        lineNumber: 52,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                lineNumber: 47,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-md flex justify-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"object-cover h-110 \",\n                    src: (ref = nft.metadata) === null || ref === void 0 ? void 0 : ref.image\n                }, void 0, false, {\n                    fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                    lineNumber: 60,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                lineNumber: 59,\n                columnNumber: 17\n            }, undefined),\n            router.pathname == \"/\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_buyNFT_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                nft: nft,\n                price: price,\n                totalAmount: nft.amount\n            }, void 0, false, {\n                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                lineNumber: 64,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_listNFT_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                nft: nft\n            }, void 0, false, {\n                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                lineNumber: 66,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col y-gap-2 px-2 py-1.5 bg-slate-100 h-110\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center pb-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-sm text-gray-800\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: (ref1 = nft.metadata) === null || ref1 === void 0 ? void 0 : ref1.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 67\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                    lineNumber: 72,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                lineNumber: 71,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xs\",\n                                    children: (ref2 = nft.metadata) === null || ref2 === void 0 ? void 0 : ref2.properties.Artist\n                                }, void 0, false, {\n                                    fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                lineNumber: 74,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-grow\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600 text-xs\",\n                                    children: (ref3 = nft.metadata) === null || ref3 === void 0 ? void 0 : ref3.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                lineNumber: 77,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                        lineNumber: 70,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"w-1/2 text-xs bg-teal-300 rounded-b-md text-center inline-flex items-center px-6 py-2 hover:bg-teal-400\",\n                                target: \"_blank\",\n                                href: nft.tokenUri,\n                                children: [\n                                    \"Metadata\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        \"aria-hidden\": \"true\",\n                                        className: \"w-3 h-5 ml-0.5\",\n                                        fill: \"currentColor\",\n                                        viewBox: \"0 0 20 20\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            fillRule: \"evenodd\",\n                                            d: \"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z\",\n                                            clipRule: \"evenodd\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                            lineNumber: 85,\n                                            columnNumber: 155\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                lineNumber: 83,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"w-1/2 text-xs bg-teal-300 rounded-b-md text-center inline-flex items-center px-6 py-2 hover:bg-teal-400\",\n                                target: \"_blank\",\n                                href: \"https://mumbai.polygonscan.com/address/\".concat(nft.tokenAddress._value),\n                                children: [\n                                    \"Contract\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        \"aria-hidden\": \"true\",\n                                        className: \"w-3 h-5 ml-0.5\",\n                                        fill: \"currentColor\",\n                                        viewBox: \"0 0 20 20\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            fillRule: \"evenodd\",\n                                            d: \"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z\",\n                                            clipRule: \"evenodd\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                            lineNumber: 90,\n                                            columnNumber: 155\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                        lineNumber: 90,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                lineNumber: 88,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                        lineNumber: 82,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                lineNumber: 69,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n        lineNumber: 45,\n        columnNumber: 13\n    }, undefined);\n};\n_s(NFTCard, \"0UpDCXRN+5gdCexRslHw6kn3bAw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        wagmi__WEBPACK_IMPORTED_MODULE_7__.useContractRead\n    ];\n});\n_c = NFTCard;\nvar _c;\n$RefreshReg$(_c, \"NFTCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUMsUUFBUTs7b0NBQUU7a0RBRXpKLDhEQUFDQzt3Q0FBSUMsZUFBWTt3Q0FBT3BCLFdBQVU7d0NBQWlCcUIsTUFBSzt3Q0FBZUMsU0FBUTt3Q0FBWUMsT0FBTTtrREFBNkIsNEVBQUNDOzRDQUFLQyxVQUFTOzRDQUFVQyxHQUFFOzRDQUEySUMsVUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7MENBR2pULDhEQUFDWjtnQ0FBRWYsV0FBVTtnQ0FBMEdnQixRQUFRO2dDQUFVQyxNQUFNLDBDQUFrRSxPQUF4QmxDLElBQUk2QyxZQUFZLENBQUNDLE1BQU07O29DQUFJO2tEQUVoTiw4REFBQ1Y7d0NBQUlDLGVBQVk7d0NBQU9wQixXQUFVO3dDQUFpQnFCLE1BQUs7d0NBQWVDLFNBQVE7d0NBQVlDLE9BQU07a0RBQTZCLDRFQUFDQzs0Q0FBS0MsVUFBUzs0Q0FBVUMsR0FBRTs0Q0FBMklDLFVBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXpVLEVBQUM7R0FqRlk3Qzs7UUFPTWYsa0RBQVNBO1FBTXhCRyxrREFBZUE7OztLQWJOWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25mdENhcmQuanM/ODNmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyB1c2VDb250cmFjdFdyaXRlLCB1c2VQcmVwYXJlQ29udHJhY3RXcml0ZSwgdXNlQ29udHJhY3RSZWFkLCB1c2VXYWl0Rm9yVHJhbnNhY3Rpb24sIHVzZUFjY291bnQgfSBmcm9tICd3YWdtaSdcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBldGhlcnMgfSBmcm9tIFwiZXRoZXJzXCI7XG5cbmltcG9ydCBCdXkgZnJvbSBcIi4uL2NvbXBvbmVudHMvYnV5TkZULmpzXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9saXN0TkZULmpzXCI7XG5cbmltcG9ydCB7IGZfbmZ0YWRkcmVzc19wb2x5Z29uLCBmX25mdGFkZHJlc3NfbXVtYmFpLCBtYXJrZXRwbGFjZV9tdW1iYWkgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgTWFya2V0cGxhY2UgZnJvbSBcIi4uL2FydGlmYWN0cy9jb250cmFjdHMvTWFya2V0cGxhY2Uuc29sL01hcmtldHBsYWNlLmpzb25cIjtcbi8vIGltcG9ydCB7IHVzZURlYm91bmNlIH0gZnJvbSAndXNlLWRlYm91bmNlJztcblxuXG5leHBvcnQgY29uc3QgTkZUQ2FyZCA9ICh7bmZ0fSkgPT4ge1xuXG4gICAgLy8gY29uc3QgeyBhZGRyZXNzLCBpc0Nvbm5lY3RlZCB9ID0gdXNlQWNjb3VudCgpO1xuXG4gICAgY29uc3QgWyBwcmljZSwgc2V0UHJpY2UgXSA9IHVzZVN0YXRlKDEpXG4gICAgLy8gY29uc29sZS5sb2coYHRva2VuIGlkIGlzICR7bmZ0LnRva2VuSWR9YCk7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIC8vIGNvbnN0IGRlYm91bmNlZFByaWNlID0gdXNlRGVib3VuY2UocHJpY2UsIDUwMClcblxuICAgIC8vIEZldGNoaW5nIHByaWNlIG9mIHRva2VucyBiYXNlZCBvbiB0aGVpciB0b2tlbiBpZHMgYW5kIG1vdGhlciBjb250cmFjdCBhZGRyZXNzXG4gICAgLy8gVGhpcyBob29rcyByZWFkIGRhdGEgZnJvbSB0aGUgbWFya2V0cGxhY2UgY29udHJhY3QgXG4gICAgdXNlQ29udHJhY3RSZWFkKHtcbiAgICAgICAgYWRkcmVzczogbWFya2V0cGxhY2VfbXVtYmFpLFxuICAgICAgICBhYmk6IE1hcmtldHBsYWNlLmFiaSxcbiAgICAgICAgZnVuY3Rpb25OYW1lOiAncHJpY2VQZXJUb2tlbkdldHRlcicsXG4gICAgICAgIGFyZ3M6IFtuZnQudG9rZW5JZF0sXG4gICAgICAgIG9uU3VjY2VzcyhkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgUHJpY2UgcGVyIHRva2VuIGZvciB0b2tlbiBpZCAke25mdC50b2tlbklkfSBpcyA9PiAke2RhdGEudG9OdW1iZXIoKX1gKVxuICAgICAgICAgICAgc2V0UHJpY2UoZGF0YS50b051bWJlcigpKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcihlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0Vycm9yJywgZXJyb3IpXG4gICAgICAgIH1cbiAgICB9KVxuXG5cblxuICAgIHJldHVybiAoICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzUgZmxleCBmbGV4LWNvbCBweS0yXCI+XG4gICAgICAgICAgICAgICAgeyByb3V0ZXIucGF0aG5hbWUgPT0gXCIvXCIgJiYgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggdy1mdWxsJz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctMS8yIGJnLXRlYWwtMzAwIHJvdW5kZWQtdC1tZCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBweS0xJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteGwgdGV4dC13aGl0ZVwiPntuZnQuYW1vdW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14cyB0ZXh0LXdoaXRlIHBsLTEnPnRva2VucyBmb3Igc2FsZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LTEvMiBiZy10ZWFsLTMwMCByb3VuZGVkLXQtbWQgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHktMSc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIHRleHQtd2hpdGVcIj57bmZ0LmFtb3VudH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteHMgdGV4dC13aGl0ZSBwbC0xJz5NYXRpYyBwZXIgdG9rZW48L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZC1tZCBmbGV4IGp1c3RpZnktY2VudGVyIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cIm9iamVjdC1jb3ZlciBoLTExMCBcIiBzcmM9e25mdC5tZXRhZGF0YT8uaW1hZ2V9PjwvaW1nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge3JvdXRlci5wYXRobmFtZSA9PSBcIi9cIiA/XG4gICAgICAgICAgICAgICAgPEJ1eSBuZnQ9e25mdH0gcHJpY2U9e3ByaWNlfSB0b3RhbEFtb3VudD17bmZ0LmFtb3VudH0+PC9CdXk+XG4gICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgIDxMaXN0IG5mdD17bmZ0fT48L0xpc3Q+XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIHktZ2FwLTIgcHgtMiBweS0xLjUgYmctc2xhdGUtMTAwIGgtMTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIHBiLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktODAwXCI+PGI+e25mdC5tZXRhZGF0YT8ubmFtZX08L2I+PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhzXCI+e25mdC5tZXRhZGF0YT8ucHJvcGVydGllcy5BcnRpc3R9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgdGV4dC14c1wiPntuZnQubWV0YWRhdGE/LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LXhzIGJnLXRlYWwtMzAwIHJvdW5kZWQtYi1tZCB0ZXh0LWNlbnRlciBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNiBweS0yIGhvdmVyOmJnLXRlYWwtNDAwXCIgdGFyZ2V0PXtcIl9ibGFua1wifSBocmVmPXtuZnQudG9rZW5Vcml9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE1ldGFkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTMgaC01IG1sLTAuNVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAuMjkzIDMuMjkzYTEgMSAwIDAxMS40MTQgMGw2IDZhMSAxIDAgMDEwIDEuNDE0bC02IDZhMSAxIDAgMDEtMS40MTQtMS40MTRMMTQuNTg2IDExSDNhMSAxIDAgMTEwLTJoMTEuNTg2bC00LjI5My00LjI5M2ExIDEgMCAwMTAtMS40MTR6XCIgY2xpcFJ1bGU9XCJldmVub2RkXCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ3LTEvMiB0ZXh0LXhzIGJnLXRlYWwtMzAwIHJvdW5kZWQtYi1tZCB0ZXh0LWNlbnRlciBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtNiBweS0yIGhvdmVyOmJnLXRlYWwtNDAwXCIgdGFyZ2V0PXtcIl9ibGFua1wifSBocmVmPXtgaHR0cHM6Ly9tdW1iYWkucG9seWdvbnNjYW4uY29tL2FkZHJlc3MvJHtuZnQudG9rZW5BZGRyZXNzLl92YWx1ZX1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250cmFjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3NOYW1lPVwidy0zIGgtNSBtbC0wLjVcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsUnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEwLjI5MyAzLjI5M2ExIDEgMCAwMTEuNDE0IDBsNiA2YTEgMSAwIDAxMCAxLjQxNGwtNiA2YTEgMSAwIDAxLTEuNDE0LTEuNDE0TDE0LjU4NiAxMUgzYTEgMSAwIDExMC0yaDExLjU4NmwtNC4yOTMtNC4yOTNhMSAxIDAgMDEwLTEuNDE0elwiIGNsaXBSdWxlPVwiZXZlbm9kZFwiPjwvcGF0aD48L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT4gICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4gXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlQ29udHJhY3RXcml0ZSIsInVzZVByZXBhcmVDb250cmFjdFdyaXRlIiwidXNlQ29udHJhY3RSZWFkIiwidXNlV2FpdEZvclRyYW5zYWN0aW9uIiwidXNlQWNjb3VudCIsIlJlYWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJCdXkiLCJMaXN0IiwiZl9uZnRhZGRyZXNzX3BvbHlnb24iLCJmX25mdGFkZHJlc3NfbXVtYmFpIiwibWFya2V0cGxhY2VfbXVtYmFpIiwiTWFya2V0cGxhY2UiLCJORlRDYXJkIiwibmZ0IiwicHJpY2UiLCJzZXRQcmljZSIsInJvdXRlciIsImFkZHJlc3MiLCJhYmkiLCJmdW5jdGlvbk5hbWUiLCJhcmdzIiwidG9rZW5JZCIsIm9uU3VjY2VzcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidG9OdW1iZXIiLCJvbkVycm9yIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJwYXRobmFtZSIsInAiLCJhbW91bnQiLCJpbWciLCJzcmMiLCJtZXRhZGF0YSIsImltYWdlIiwidG90YWxBbW91bnQiLCJoMiIsImIiLCJuYW1lIiwicHJvcGVydGllcyIsIkFydGlzdCIsImRlc2NyaXB0aW9uIiwiYSIsInRhcmdldCIsImhyZWYiLCJ0b2tlblVyaSIsInN2ZyIsImFyaWEtaGlkZGVuIiwiZmlsbCIsInZpZXdCb3giLCJ4bWxucyIsInBhdGgiLCJmaWxsUnVsZSIsImQiLCJjbGlwUnVsZSIsInRva2VuQWRkcmVzcyIsIl92YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/nftCard.js\n"));

/***/ })

});