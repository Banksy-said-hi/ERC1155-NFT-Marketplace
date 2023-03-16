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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NFTCard\": function() { return /* binding */ NFTCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_buyNFT_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/buyNFT.js */ \"./components/buyNFT.js\");\n/* harmony import */ var _components_listNFT_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/listNFT.js */ \"./components/listNFT.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_Marketplace_sol_Marketplace_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../artifacts/contracts/Marketplace.sol/Marketplace.json */ \"./artifacts/contracts/Marketplace.sol/Marketplace.json\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n// import { useDebounce } from 'use-debounce';\nconst NFTCard = (param)=>{\n    let { nft  } = param;\n    var ref, ref1, ref2, ref3;\n    _s();\n    // const { address, isConnected } = useAccount();\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);\n    // console.log(`token id is ${nft.tokenId}`);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    // const debouncedPrice = useDebounce(price, 500)\n    // Fetching price of tokens based on their token ids and mother contract address\n    // This hooks read data from the marketplace contract \n    (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.useContractRead)({\n        address: _config__WEBPACK_IMPORTED_MODULE_5__.marketplace_mumbai,\n        abi: _artifacts_contracts_Marketplace_sol_Marketplace_json__WEBPACK_IMPORTED_MODULE_6__.abi,\n        functionName: \"pricePerTokenGetter\",\n        args: [\n            nft.tokenId\n        ],\n        onSuccess (data) {\n            console.log(\"Price per token for token id \".concat(nft.tokenId, \" is => \").concat(data.toNumber()));\n            setPrice(data.toNumber());\n        },\n        onError (error) {\n            console.log(\"Error\", error);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/5 flex flex-col py-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \" text-lg text-white bg-teal-300 px-2 rounded-t-md\",\n                        children: nft.amount\n                    }, void 0, false, {\n                        fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                        lineNumber: 47,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Available\"\n                    }, void 0, false, {\n                        fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                        lineNumber: 48,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                lineNumber: 46,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"rounded-md flex justify-center w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    className: \"object-cover h-110 \",\n                    src: (ref = nft.metadata) === null || ref === void 0 ? void 0 : ref.image\n                }, void 0, false, {\n                    fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                    lineNumber: 51,\n                    columnNumber: 21\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                lineNumber: 50,\n                columnNumber: 17\n            }, undefined),\n            router.pathname == \"/\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_buyNFT_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                nft: nft,\n                price: price,\n                totalAmount: nft.amount\n            }, void 0, false, {\n                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                lineNumber: 55,\n                columnNumber: 17\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_listNFT_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                nft: nft\n            }, void 0, false, {\n                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                lineNumber: 57,\n                columnNumber: 17\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-col y-gap-2 px-2 py-1.5 bg-slate-100 h-110\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center pb-1\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-sm text-gray-800\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"b\", {\n                                        children: (ref1 = nft.metadata) === null || ref1 === void 0 ? void 0 : ref1.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 67\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                lineNumber: 62,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-xs\",\n                                    children: (ref2 = nft.metadata) === null || ref2 === void 0 ? void 0 : ref2.properties.Artist\n                                }, void 0, false, {\n                                    fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                    lineNumber: 66,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                lineNumber: 65,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-grow\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"text-gray-600 text-xs\",\n                                    children: (ref3 = nft.metadata) === null || ref3 === void 0 ? void 0 : ref3.description\n                                }, void 0, false, {\n                                    fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                lineNumber: 68,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                        lineNumber: 61,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex w-full\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"w-1/2 text-xs bg-teal-300 rounded-b-md text-center inline-flex items-center px-6 py-2 hover:bg-teal-400\",\n                                target: \"_blank\",\n                                href: nft.tokenUri,\n                                children: [\n                                    \"Metadata\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        \"aria-hidden\": \"true\",\n                                        className: \"w-3 h-5 ml-0.5\",\n                                        fill: \"currentColor\",\n                                        viewBox: \"0 0 20 20\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            fillRule: \"evenodd\",\n                                            d: \"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z\",\n                                            clipRule: \"evenodd\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 155\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                lineNumber: 74,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                className: \"w-1/2 text-xs bg-teal-300 rounded-b-md text-center inline-flex items-center px-6 py-2 hover:bg-teal-400\",\n                                target: \"_blank\",\n                                href: \"https://mumbai.polygonscan.com/address/\".concat(nft.tokenAddress._value),\n                                children: [\n                                    \"Contract\",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        \"aria-hidden\": \"true\",\n                                        className: \"w-3 h-5 ml-0.5\",\n                                        fill: \"currentColor\",\n                                        viewBox: \"0 0 20 20\",\n                                        xmlns: \"http://www.w3.org/2000/svg\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"path\", {\n                                            fillRule: \"evenodd\",\n                                            d: \"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z\",\n                                            clipRule: \"evenodd\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 155\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                        lineNumber: 81,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                                lineNumber: 79,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                        lineNumber: 73,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n                lineNumber: 60,\n                columnNumber: 17\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sinarahimi/Desktop/ERC1155-NFT-Marketplace/components/nftCard.js\",\n        lineNumber: 45,\n        columnNumber: 13\n    }, undefined);\n};\n_s(NFTCard, \"0UpDCXRN+5gdCexRslHw6kn3bAw=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        wagmi__WEBPACK_IMPORTED_MODULE_7__.useContractRead\n    ];\n});\n_c = NFTCard;\nvar _c;\n$RefreshReg$(_c, \"NFTCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R2dCLFFBQVE7Z0NBQVVDLE1BQU0sMENBQWtFLE9BQXhCbEMsSUFBSTZDLFlBQVksQ0FBQ0MsTUFBTTs7b0NBQUk7a0RBRWhOLDhEQUFDVjt3Q0FBSUMsZUFBWTt3Q0FBT3BCLFdBQVU7d0NBQWlCcUIsTUFBSzt3Q0FBZUMsU0FBUTt3Q0FBWUMsT0FBTTtrREFBNkIsNEVBQUNDOzRDQUFLQyxVQUFTOzRDQUFVQyxHQUFFOzRDQUEySUMsVUFBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNelUsRUFBQztHQXhFWTdDOztRQU9NZixrREFBU0E7UUFNeEJHLGtEQUFlQTs7O0tBYk5ZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvbmZ0Q2FyZC5qcz84M2Y1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IHVzZUNvbnRyYWN0V3JpdGUsIHVzZVByZXBhcmVDb250cmFjdFdyaXRlLCB1c2VDb250cmFjdFJlYWQsIHVzZVdhaXRGb3JUcmFuc2FjdGlvbiwgdXNlQWNjb3VudCB9IGZyb20gJ3dhZ21pJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcblxuaW1wb3J0IEJ1eSBmcm9tIFwiLi4vY29tcG9uZW50cy9idXlORlQuanNcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuLi9jb21wb25lbnRzL2xpc3RORlQuanNcIjtcblxuaW1wb3J0IHsgZl9uZnRhZGRyZXNzX3BvbHlnb24sIGZfbmZ0YWRkcmVzc19tdW1iYWksIG1hcmtldHBsYWNlX211bWJhaSB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCBNYXJrZXRwbGFjZSBmcm9tIFwiLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9NYXJrZXRwbGFjZS5zb2wvTWFya2V0cGxhY2UuanNvblwiO1xuLy8gaW1wb3J0IHsgdXNlRGVib3VuY2UgfSBmcm9tICd1c2UtZGVib3VuY2UnO1xuXG5cbmV4cG9ydCBjb25zdCBORlRDYXJkID0gKHtuZnR9KSA9PiB7XG5cbiAgICAvLyBjb25zdCB7IGFkZHJlc3MsIGlzQ29ubmVjdGVkIH0gPSB1c2VBY2NvdW50KCk7XG5cbiAgICBjb25zdCBbIHByaWNlLCBzZXRQcmljZSBdID0gdXNlU3RhdGUoMSlcbiAgICAvLyBjb25zb2xlLmxvZyhgdG9rZW4gaWQgaXMgJHtuZnQudG9rZW5JZH1gKTtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgLy8gY29uc3QgZGVib3VuY2VkUHJpY2UgPSB1c2VEZWJvdW5jZShwcmljZSwgNTAwKVxuXG4gICAgLy8gRmV0Y2hpbmcgcHJpY2Ugb2YgdG9rZW5zIGJhc2VkIG9uIHRoZWlyIHRva2VuIGlkcyBhbmQgbW90aGVyIGNvbnRyYWN0IGFkZHJlc3NcbiAgICAvLyBUaGlzIGhvb2tzIHJlYWQgZGF0YSBmcm9tIHRoZSBtYXJrZXRwbGFjZSBjb250cmFjdCBcbiAgICB1c2VDb250cmFjdFJlYWQoe1xuICAgICAgICBhZGRyZXNzOiBtYXJrZXRwbGFjZV9tdW1iYWksXG4gICAgICAgIGFiaTogTWFya2V0cGxhY2UuYWJpLFxuICAgICAgICBmdW5jdGlvbk5hbWU6ICdwcmljZVBlclRva2VuR2V0dGVyJyxcbiAgICAgICAgYXJnczogW25mdC50b2tlbklkXSxcbiAgICAgICAgb25TdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBQcmljZSBwZXIgdG9rZW4gZm9yIHRva2VuIGlkICR7bmZ0LnRva2VuSWR9IGlzID0+ICR7ZGF0YS50b051bWJlcigpfWApXG4gICAgICAgICAgICBzZXRQcmljZShkYXRhLnRvTnVtYmVyKCkpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3InLCBlcnJvcilcbiAgICAgICAgfVxuICAgIH0pXG5cblxuXG4gICAgcmV0dXJuICggICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNSBmbGV4IGZsZXgtY29sIHB5LTJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCB3LWZ1bGwnPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCIgdGV4dC1sZyB0ZXh0LXdoaXRlIGJnLXRlYWwtMzAwIHB4LTIgcm91bmRlZC10LW1kXCI+e25mdC5hbW91bnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5BdmFpbGFibGU8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLW1kIGZsZXgganVzdGlmeS1jZW50ZXIgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIGgtMTEwIFwiIHNyYz17bmZ0Lm1ldGFkYXRhPy5pbWFnZX0+PC9pbWc+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICB7cm91dGVyLnBhdGhuYW1lID09IFwiL1wiID9cbiAgICAgICAgICAgICAgICA8QnV5IG5mdD17bmZ0fSBwcmljZT17cHJpY2V9IHRvdGFsQW1vdW50PXtuZnQuYW1vdW50fT48L0J1eT5cbiAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgPExpc3QgbmZ0PXtuZnR9PjwvTGlzdD5cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgeS1nYXAtMiBweC0yIHB5LTEuNSBiZy1zbGF0ZS0xMDAgaC0xMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgcGItMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS04MDBcIj48Yj57bmZ0Lm1ldGFkYXRhPy5uYW1lfTwvYj48L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQteHNcIj57bmZ0Lm1ldGFkYXRhPy5wcm9wZXJ0aWVzLkFydGlzdH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTYwMCB0ZXh0LXhzXCI+e25mdC5tZXRhZGF0YT8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInctMS8yIHRleHQteHMgYmctdGVhbC0zMDAgcm91bmRlZC1iLW1kIHRleHQtY2VudGVyIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC02IHB5LTIgaG92ZXI6YmctdGVhbC00MDBcIiB0YXJnZXQ9e1wiX2JsYW5rXCJ9IGhyZWY9e25mdC50b2tlblVyaX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTWV0YWRhdGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3ZnIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGNsYXNzTmFtZT1cInctMyBoLTUgbWwtMC41XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHZpZXdCb3g9XCIwIDAgMjAgMjBcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZmlsbFJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMC4yOTMgMy4yOTNhMSAxIDAgMDExLjQxNCAwbDYgNmExIDEgMCAwMTAgMS40MTRsLTYgNmExIDEgMCAwMS0xLjQxNC0xLjQxNEwxNC41ODYgMTFIM2ExIDEgMCAxMTAtMmgxMS41ODZsLTQuMjkzLTQuMjkzYTEgMSAwIDAxMC0xLjQxNHpcIiBjbGlwUnVsZT1cImV2ZW5vZGRcIj48L3BhdGg+PC9zdmc+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInctMS8yIHRleHQteHMgYmctdGVhbC0zMDAgcm91bmRlZC1iLW1kIHRleHQtY2VudGVyIGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBweC02IHB5LTIgaG92ZXI6YmctdGVhbC00MDBcIiB0YXJnZXQ9e1wiX2JsYW5rXCJ9IGhyZWY9e2BodHRwczovL211bWJhaS5wb2x5Z29uc2Nhbi5jb20vYWRkcmVzcy8ke25mdC50b2tlbkFkZHJlc3MuX3ZhbHVlfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRyYWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTMgaC01IG1sLTAuNVwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB2aWV3Qm94PVwiMCAwIDIwIDIwXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGZpbGxSdWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTAuMjkzIDMuMjkzYTEgMSAwIDAxMS40MTQgMGw2IDZhMSAxIDAgMDEwIDEuNDE0bC02IDZhMSAxIDAgMDEtMS40MTQtMS40MTRMMTQuNTg2IDExSDNhMSAxIDAgMTEwLTJoMTEuNTg2bC00LjI5My00LjI5M2ExIDEgMCAwMTAtMS40MTR6XCIgY2xpcFJ1bGU9XCJldmVub2RkXCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPiAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiBcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJ1c2VDb250cmFjdFdyaXRlIiwidXNlUHJlcGFyZUNvbnRyYWN0V3JpdGUiLCJ1c2VDb250cmFjdFJlYWQiLCJ1c2VXYWl0Rm9yVHJhbnNhY3Rpb24iLCJ1c2VBY2NvdW50IiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImV0aGVycyIsIkJ1eSIsIkxpc3QiLCJmX25mdGFkZHJlc3NfcG9seWdvbiIsImZfbmZ0YWRkcmVzc19tdW1iYWkiLCJtYXJrZXRwbGFjZV9tdW1iYWkiLCJNYXJrZXRwbGFjZSIsIk5GVENhcmQiLCJuZnQiLCJwcmljZSIsInNldFByaWNlIiwicm91dGVyIiwiYWRkcmVzcyIsImFiaSIsImZ1bmN0aW9uTmFtZSIsImFyZ3MiLCJ0b2tlbklkIiwib25TdWNjZXNzIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJ0b051bWJlciIsIm9uRXJyb3IiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJhbW91bnQiLCJpbWciLCJzcmMiLCJtZXRhZGF0YSIsImltYWdlIiwicGF0aG5hbWUiLCJ0b3RhbEFtb3VudCIsImgyIiwiYiIsIm5hbWUiLCJwcm9wZXJ0aWVzIiwiQXJ0aXN0IiwiZGVzY3JpcHRpb24iLCJhIiwidGFyZ2V0IiwiaHJlZiIsInRva2VuVXJpIiwic3ZnIiwiYXJpYS1oaWRkZW4iLCJmaWxsIiwidmlld0JveCIsInhtbG5zIiwicGF0aCIsImZpbGxSdWxlIiwiZCIsImNsaXBSdWxlIiwidG9rZW5BZGRyZXNzIiwiX3ZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/nftCard.js\n"));

/***/ })

});