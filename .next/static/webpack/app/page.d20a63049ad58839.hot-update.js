"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/AddProducts.jsx":
/*!********************************************!*\
  !*** ./src/app/components/AddProducts.jsx ***!
  \********************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components.module.css */ \"(app-pages-browser)/./src/app/components/components.module.css\");\n/* harmony import */ var _components_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _serverActions_productAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../serverActions/productAction */ \"(app-pages-browser)/./src/app/serverActions/productAction.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst AddProducts = ()=>{\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [price, setPrice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [offer, setOffer] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [amen, setAmen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [desc, setDesc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const recordHandler = async (e)=>{\n        e.preventDefault();\n        const records = {\n            title,\n            price,\n            offer,\n            amen,\n            desc,\n            image\n        };\n        console.log(records);\n        const data = new FormData();\n        data.append('title', title);\n        data.append('price', price);\n        data.append('offer', offer);\n        data.append('amen', amen);\n        data.append('desc', desc);\n        data.append('image', image);\n        try {\n            const resp = await fetch(\"http://localhost:3000/api/admin/add-product\", {\n                method: \"POST\",\n                body: data\n            });\n            const result = await resp.json();\n            if (result.success) {\n                alert(\"record added successfully\");\n                setTitle(\"\");\n                setPrice(\"\");\n                setOffer(\"\");\n                setAmen(\"\");\n                setDesc(\"\");\n                setImage(\"\");\n            }\n        } catch (e) {\n            console.log(e);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_components_module_css__WEBPACK_IMPORTED_MODULE_2___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Add Record\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                lineNumber: 49,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: recordHandler,\n                encType: \"multipart/form-data\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_module_css__WEBPACK_IMPORTED_MODULE_2___default().fields),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Title\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 5\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: title,\n                                        onChange: (e)=>setTitle(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Price\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 6\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"number\",\n                                        value: price,\n                                        onChange: (e)=>setPrice(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 6\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                                lineNumber: 56,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_module_css__WEBPACK_IMPORTED_MODULE_2___default().fields),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Offer\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 5\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"number\",\n                                        value: offer,\n                                        onChange: (e)=>setOffer(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 5\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"Amenities\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"text\",\n                                        value: amen,\n                                        onChange: (e)=>setAmen(e.target.value)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                                lineNumber: 66,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_module_css__WEBPACK_IMPORTED_MODULE_2___default().textField),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Description\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                                lineNumber: 72,\n                                columnNumber: 5\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                type: \"text\",\n                                rows: \"5\",\n                                value: desc,\n                                onChange: (e)=>setDesc(e.target.value)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 5\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_module_css__WEBPACK_IMPORTED_MODULE_2___default().textField),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Upload Image\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 6\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                type: \"file\",\n                                accept: \"image/*\",\n                                onChange: (e)=>setImage(e.target.files[0])\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 6\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 6\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_components_module_css__WEBPACK_IMPORTED_MODULE_2___default().submit),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Submit\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 5\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                        lineNumber: 79,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n                lineNumber: 50,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\saist\\\\OneDrive\\\\Desktop\\\\All Folders\\\\next\\\\NextResort\\\\next-resort\\\\src\\\\app\\\\components\\\\AddProducts.jsx\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddProducts, \"WQLRTpT5NdD8DoJyUl/YaU3RGYw=\");\n_c = AddProducts;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddProducts);\nvar _c;\n$RefreshReg$(_c, \"AddProducts\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRQcm9kdWN0cy5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ29DO0FBQ087QUFDb0I7QUFFL0QsTUFBTUksY0FBYzs7SUFDaEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ00sT0FBT0MsU0FBUyxHQUFFUCwrQ0FBUUEsQ0FBQztJQUNsQyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUVYLCtDQUFRQSxDQUFDO0lBQ2hDLE1BQU0sQ0FBQ1ksTUFBTUMsUUFBUSxHQUFHYiwrQ0FBUUEsQ0FBQztJQUNqQyxNQUFNLENBQUNjLE9BQU9DLFNBQVMsR0FBR2YsK0NBQVFBLENBQUM7SUFFbkMsTUFBTWdCLGdCQUFnQixPQUFPQztRQUN6QkEsRUFBRUMsY0FBYztRQUNoQixNQUFNQyxVQUFVO1lBQUNmO1lBQU1FO1lBQU1FO1lBQU1FO1lBQUtFO1lBQUtFO1FBQUs7UUFDbERNLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixNQUFNRyxPQUFPLElBQUlDO1FBQ2pCRCxLQUFLRSxNQUFNLENBQUMsU0FBUXBCO1FBQ3BCa0IsS0FBS0UsTUFBTSxDQUFDLFNBQVFsQjtRQUNwQmdCLEtBQUtFLE1BQU0sQ0FBQyxTQUFRaEI7UUFDcEJjLEtBQUtFLE1BQU0sQ0FBQyxRQUFPZDtRQUNuQlksS0FBS0UsTUFBTSxDQUFDLFFBQU9aO1FBQ25CVSxLQUFLRSxNQUFNLENBQUMsU0FBUVY7UUFDcEIsSUFBSTtZQUNGLE1BQU1XLE9BQU8sTUFBTUMsTUFBTywrQ0FBNkM7Z0JBQ3JFQyxRQUFPO2dCQUNQQyxNQUFLTjtZQUNQO1lBQ0EsTUFBTU8sU0FBUyxNQUFNSixLQUFLSyxJQUFJO1lBQzlCLElBQUdELE9BQU9FLE9BQU8sRUFBQztnQkFDaEJDLE1BQU07Z0JBQ04zQixTQUFTO2dCQUNURSxTQUFTO2dCQUNURSxTQUFTO2dCQUNURSxRQUFRO2dCQUNSRSxRQUFRO2dCQUNSRSxTQUFTO1lBQ1g7UUFDRixFQUNBLE9BQU1FLEdBQUU7WUFDTkcsUUFBUUMsR0FBRyxDQUFDSjtRQUVkO0lBQ0o7SUFFRixxQkFDRSw4REFBQ2dCO1FBQUlDLFdBQVdqQyx5RUFBZTs7MEJBQy9CLDhEQUFDbUM7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtDLFVBQVV0QjtnQkFBZXVCLFNBQVE7O2tDQUN0Qyw4REFBQ047d0JBQUlDLFdBQVdqQyxzRUFBWTs7MENBQzdCLDhEQUFDZ0M7Z0NBQUlDLFdBQVU7O2tEQUNmLDhEQUFDTztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQzt3Q0FBTUMsTUFBSzt3Q0FBT0MsT0FBT3hDO3dDQUFPeUMsVUFBVSxDQUFDNUIsSUFBSVosU0FBU1ksRUFBRTZCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7OzBDQUV0RSw4REFBQ1g7O2tEQUNELDhEQUFDUTtrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQzt3Q0FBTUMsTUFBSzt3Q0FBU0MsT0FBT3RDO3dDQUFPdUMsVUFBVSxDQUFDNUIsSUFBSVYsU0FBU1UsRUFBRTZCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUd6RSw4REFBQ1g7d0JBQUtDLFdBQVdqQyxzRUFBWTs7MENBQzlCLDhEQUFDZ0M7Z0NBQUlDLFdBQVU7O2tEQUNmLDhEQUFDTztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQzt3Q0FBTUMsTUFBSzt3Q0FBU0MsT0FBT3BDO3dDQUFPcUMsVUFBVSxDQUFDNUIsSUFBSVIsU0FBU1EsRUFBRTZCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7OzBDQUV2RSw4REFBQ1g7Z0NBQUlDLFdBQVU7O2tEQUNmLDhEQUFDTztrREFBRzs7Ozs7O2tEQUNKLDhEQUFDQzt3Q0FBTUMsTUFBSzt3Q0FBT0MsT0FBT2xDO3dDQUFNbUMsVUFBVSxDQUFDNUIsSUFBSU4sUUFBUU0sRUFBRTZCLE1BQU0sQ0FBQ0YsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUd2RSw4REFBQ1g7d0JBQUlDLFdBQVdqQyx5RUFBZTs7MENBQy9CLDhEQUFDd0M7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ087Z0NBQVNMLE1BQUs7Z0NBQU9NLE1BQUs7Z0NBQUlMLE9BQU9oQztnQ0FBTWlDLFVBQVUsQ0FBQzVCLElBQUlKLFFBQVFJLEVBQUU2QixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7OztrQ0FFaEYsOERBQUNYO3dCQUFJQyxXQUFXakMseUVBQWU7OzBDQUMvQiw4REFBQ3dDOzBDQUFHOzs7Ozs7MENBQ0osOERBQUNDO2dDQUFNQyxNQUFLO2dDQUFPTyxRQUFPO2dDQUFVTCxVQUFVLENBQUM1QixJQUFJRixTQUFTRSxFQUFFNkIsTUFBTSxDQUFDSyxLQUFLLENBQUMsRUFBRTs7Ozs7Ozs7Ozs7O2tDQUU5RSw4REFBQ2xCO3dCQUFJQyxXQUFXakMsc0VBQVk7a0NBQzVCLDRFQUFDb0Q7NEJBQU9WLE1BQUs7c0NBQVM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTzFCO0dBakZNeEM7S0FBQUE7QUFtRk4saUVBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcc2Fpc3RcXE9uZURyaXZlXFxEZXNrdG9wXFxBbGwgRm9sZGVyc1xcbmV4dFxcTmV4dFJlc29ydFxcbmV4dC1yZXNvcnRcXHNyY1xcYXBwXFxjb21wb25lbnRzXFxBZGRQcm9kdWN0cy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYWRtaW4gZnJvbSAnLi9jb21wb25lbnRzLm1vZHVsZS5jc3MnXHJcbmltcG9ydCB7IHByb2R1Y3RBY3Rpb24gfSBmcm9tICcuLi9zZXJ2ZXJBY3Rpb25zL3Byb2R1Y3RBY3Rpb24nO1xyXG5cclxuY29uc3QgQWRkUHJvZHVjdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV09IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW29mZmVyLCBzZXRPZmZlcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFthbWVuLCBzZXRBbWVuXT0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZGVzYywgc2V0RGVzY10gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoXCJcIilcclxuXHJcbiAgICBjb25zdCByZWNvcmRIYW5kbGVyID0gYXN5bmMgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBjb25zdCByZWNvcmRzID0ge3RpdGxlLHByaWNlLG9mZmVyLGFtZW4sZGVzYyxpbWFnZX1cclxuICAgICAgICBjb25zb2xlLmxvZyhyZWNvcmRzKVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBuZXcgRm9ybURhdGEoKVxyXG4gICAgICAgIGRhdGEuYXBwZW5kKCd0aXRsZScsdGl0bGUpXHJcbiAgICAgICAgZGF0YS5hcHBlbmQoJ3ByaWNlJyxwcmljZSlcclxuICAgICAgICBkYXRhLmFwcGVuZCgnb2ZmZXInLG9mZmVyKVxyXG4gICAgICAgIGRhdGEuYXBwZW5kKCdhbWVuJyxhbWVuKVxyXG4gICAgICAgIGRhdGEuYXBwZW5kKCdkZXNjJyxkZXNjKVxyXG4gICAgICAgIGRhdGEuYXBwZW5kKCdpbWFnZScsaW1hZ2UpXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS9hZG1pbi9hZGQtcHJvZHVjdGAse1xyXG4gICAgICAgICAgICBtZXRob2Q6XCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGJvZHk6ZGF0YVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3AuanNvbigpXHJcbiAgICAgICAgICBpZihyZXN1bHQuc3VjY2Vzcyl7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwicmVjb3JkIGFkZGVkIHN1Y2Nlc3NmdWxseVwiKVxyXG4gICAgICAgICAgICBzZXRUaXRsZShcIlwiKVxyXG4gICAgICAgICAgICBzZXRQcmljZShcIlwiKVxyXG4gICAgICAgICAgICBzZXRPZmZlcihcIlwiKVxyXG4gICAgICAgICAgICBzZXRBbWVuKFwiXCIpXHJcbiAgICAgICAgICAgIHNldERlc2MoXCJcIilcclxuICAgICAgICAgICAgc2V0SW1hZ2UoXCJcIilcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2goZSl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17YWRtaW4uY29udGFpbmVyfT5cclxuICAgIDxoMT5BZGQgUmVjb3JkPC9oMT5cclxuICAgIDxmb3JtIG9uU3VibWl0PXtyZWNvcmRIYW5kbGVyfSBlbmNUeXBlPSdtdWx0aXBhcnQvZm9ybS1kYXRhJz5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT17YWRtaW4uZmllbGRzfT5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICA8aDM+VGl0bGU8L2gzPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17KGUpPT5zZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9Lz5cclxuICAgIDwvZGl2PlxyXG4gICAgIDxkaXY+XHJcbiAgICAgPGgzPlByaWNlPC9oMz5cclxuICAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtwcmljZX0gb25DaGFuZ2U9eyhlKT0+c2V0UHJpY2UoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgPC9kaXY+XHJcbiAgICAgPGRpdiAgY2xhc3NOYW1lPXthZG1pbi5maWVsZHN9PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgIDxoMz5PZmZlcjwvaDM+XHJcbiAgICA8aW5wdXQgdHlwZT1cIm51bWJlclwiIHZhbHVlPXtvZmZlcn0gb25DaGFuZ2U9eyhlKT0+c2V0T2ZmZXIoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgPGgzPkFtZW5pdGllczwvaDM+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXthbWVufSBvbkNoYW5nZT17KGUpPT5zZXRBbWVuKGUudGFyZ2V0LnZhbHVlKX0vPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPXthZG1pbi50ZXh0RmllbGR9PlxyXG4gICAgPGgzPkRlc2NyaXB0aW9uPC9oMz5cclxuICAgIDx0ZXh0YXJlYSB0eXBlPVwidGV4dFwiIHJvd3M9XCI1XCIgdmFsdWU9e2Rlc2N9IG9uQ2hhbmdlPXsoZSk9PnNldERlc2MoZS50YXJnZXQudmFsdWUpfS8+XHJcbiAgICA8L2Rpdj5cclxuICAgICA8ZGl2IGNsYXNzTmFtZT17YWRtaW4udGV4dEZpZWxkfT5cclxuICAgICA8aDM+VXBsb2FkIEltYWdlPC9oMz5cclxuICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBhY2NlcHQ9J2ltYWdlLyonIG9uQ2hhbmdlPXsoZSk9PnNldEltYWdlKGUudGFyZ2V0LmZpbGVzWzBdKX0vPlxyXG4gICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2FkbWluLnN1Ym1pdH0+XHJcbiAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCc+XHJcbiAgICAgIFN1Ym1pdFxyXG4gICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRQcm9kdWN0cyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYWRtaW4iLCJwcm9kdWN0QWN0aW9uIiwiQWRkUHJvZHVjdHMiLCJ0aXRsZSIsInNldFRpdGxlIiwicHJpY2UiLCJzZXRQcmljZSIsIm9mZmVyIiwic2V0T2ZmZXIiLCJhbWVuIiwic2V0QW1lbiIsImRlc2MiLCJzZXREZXNjIiwiaW1hZ2UiLCJzZXRJbWFnZSIsInJlY29yZEhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJyZWNvcmRzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsInJlc3AiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJyZXN1bHQiLCJqc29uIiwic3VjY2VzcyIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJlbmNUeXBlIiwiZmllbGRzIiwiaDMiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidGV4dEZpZWxkIiwidGV4dGFyZWEiLCJyb3dzIiwiYWNjZXB0IiwiZmlsZXMiLCJzdWJtaXQiLCJidXR0b24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AddProducts.jsx\n"));

/***/ })

});