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

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [emailAddress, setEmailAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [subject, setSubject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setIsLoading(true);\n        try {\n            const response = await fetch(\"/api/scan\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    emailAddress,\n                    subject,\n                    body\n                })\n            });\n            const data = await response.json();\n            setResult(data.result);\n        } catch (error) {\n            console.error(\"Error:\", error);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const handleEmailChange = (e)=>{\n        setEmailAddress(e.target.value);\n    };\n    const handleSubjectChange = (e)=>{\n        setSubject(e.target.value);\n    };\n    const handleBodyChange = (e)=>{\n        setBody(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"GotPhished?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"GPT powered phishing alert\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-8xl font-bold bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 bg-clip-text text-transparent py-4 text-center\",\n                    children: \" GotPhished? \"\n                }, void 0, false, {\n                    fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white rounded-lg p-4 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-bold text-center\",\n                        children: \"This is a proof of concept for a Gmail add-on I am making that will be a GPT-3.5 powered phishing alert!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg font-medium text-center\",\n                        children: \"Enter an email address, subject, and body to check if it's a phishing email.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-xl mx-auto bg-white p-6 shadow-xl rounded-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"flex flex-col items-center space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"email-address\",\n                                        className: \"block font-medium text-lg\",\n                                        children: \"Email Address:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        id: \"email-address\",\n                                        type: \"email\",\n                                        value: emailAddress,\n                                        onChange: handleEmailChange,\n                                        className: \"border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300 text-lg\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"subject\",\n                                        className: \"block font-medium text-lg\",\n                                        children: \"Subject:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        id: \"subject\",\n                                        type: \"text\",\n                                        value: subject,\n                                        onChange: handleSubjectChange,\n                                        className: \"border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300 text-lg\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"body\",\n                                        className: \"block font-medium text-lg\",\n                                        children: \"Body:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        id: \"body\",\n                                        value: body,\n                                        onChange: handleBodyChange,\n                                        className: \"border border-gray-300 rounded-md px-4 py-2 w-full h-60 focus:outline-none focus:ring focus:border-blue-300 text-lg\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 hover:from-green-600 hover:via-teal-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded ml-2\",\n                                children: \"Check Email\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white rounded p-4\",\n                        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-xl font-medium\",\n                            children: \"Loading...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 19\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-medium\",\n                                    children: \"Result:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: result\n                                }, void 0, false, {\n                                    fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"8b0RJii6qp20cw2dr1R18yjCInw=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O2tDQU1ELDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWnJCLDBCQUVHLDhEQUFDOEI7NEJBQUdULFdBQVU7c0NBQXNCOzs7OztpREFJcEMsOERBQUNEOzs4Q0FDQyw4REFBQ1U7b0NBQUdULFdBQVU7OENBQXNCOzs7Ozs7OENBQ3BDLDhEQUFDVTs4Q0FBR2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN4QjtHQXhId0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBDaGFuZ2VFdmVudCwgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2VtYWlsQWRkcmVzcywgc2V0RW1haWxBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3N1YmplY3QsIHNldFN1YmplY3RdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogRm9ybUV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3NjYW4nLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBlbWFpbEFkZHJlc3MsIHN1YmplY3QsIGJvZHkgfSksXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRSZXN1bHQoZGF0YS5yZXN1bHQpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUVtYWlsQ2hhbmdlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0RW1haWxBZGRyZXNzKGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJqZWN0Q2hhbmdlID0gKGU6IENoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgc2V0U3ViamVjdChlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQm9keUNoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4ge1xuICAgIHNldEJvZHkoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPkdvdFBoaXNoZWQ/PC90aXRsZT5cbiAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHUFQgcG93ZXJlZCBwaGlzaGluZyBhbGVydFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5wbmdcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8ZGl2IGNsYXNzTmFtZT0ncGItNCc+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC04eGwgZm9udC1ib2xkIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi01MDAgdmlhLXRlYWwtNTAwIHRvLWJsdWUtNTAwIGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50IHB5LTQgdGV4dC1jZW50ZXJcIj4gR290UGhpc2hlZD8gPC9oMT5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi01MDAgdmlhLXRlYWwtNTAwIHRvLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZC1sZyBwLTQgbWItNFwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1ib2xkIHRleHQtY2VudGVyXCI+VGhpcyBpcyBhIHByb29mIG9mIGNvbmNlcHQgZm9yIGEgR21haWwgYWRkLW9uIEkgYW0gbWFraW5nIHRoYXQgd2lsbCBiZSBhIEdQVC0zLjUgcG93ZXJlZCBwaGlzaGluZyBhbGVydCE8L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LW1lZGl1bSB0ZXh0LWNlbnRlclwiPkVudGVyIGFuIGVtYWlsIGFkZHJlc3MsIHN1YmplY3QsIGFuZCBib2R5IHRvIGNoZWNrIGlmIGl0J3MgYSBwaGlzaGluZyBlbWFpbC48L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWF4LXcteGwgbXgtYXV0byBiZy13aGl0ZSBwLTYgc2hhZG93LXhsIHJvdW5kZWQtbWRcIj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHNwYWNlLXktNFwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsJz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsLWFkZHJlc3NcIiBjbGFzc05hbWU9XCJibG9jayBmb250LW1lZGl1bSB0ZXh0LWxnXCI+XG4gICAgICAgICAgICBFbWFpbCBBZGRyZXNzOlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cImVtYWlsLWFkZHJlc3NcIlxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIHZhbHVlPXtlbWFpbEFkZHJlc3N9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRW1haWxDaGFuZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcHgtNCBweS0yIHctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZyBmb2N1czpib3JkZXItYmx1ZS0zMDAgdGV4dC1sZ1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwnPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwic3ViamVjdFwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtbWVkaXVtIHRleHQtbGdcIj5cbiAgICAgICAgICAgIFN1YmplY3Q6XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIGlkPVwic3ViamVjdFwiXG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17c3ViamVjdH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVTdWJqZWN0Q2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB4LTQgcHktMiB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmcgZm9jdXM6Ym9yZGVyLWJsdWUtMzAwIHRleHQtbGdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsJz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJvZHlcIiBjbGFzc05hbWU9XCJibG9jayBmb250LW1lZGl1bSB0ZXh0LWxnXCI+XG4gICAgICAgICAgICBCb2R5OlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBpZD1cImJvZHlcIlxuICAgICAgICAgICAgdmFsdWU9e2JvZHl9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQm9keUNoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBweC00IHB5LTIgdy1mdWxsIGgtNjAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmcgZm9jdXM6Ym9yZGVyLWJsdWUtMzAwIHRleHQtbGdcIlxuICAgICAgICAgID48L3RleHRhcmVhPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tciBmcm9tLWdyZWVuLTUwMCB2aWEtdGVhbC01MDAgdG8tYmx1ZS01MDAgaG92ZXI6ZnJvbS1ncmVlbi02MDAgaG92ZXI6dmlhLXRlYWwtNjAwIGhvdmVyOnRvLWJsdWUtNjAwIHRleHQtd2hpdGUgZm9udC1zZW1pYm9sZCBweS0yIHB4LTQgcm91bmRlZCBtbC0yXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2hlY2sgRW1haWxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00IGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi01MDAgdmlhLXRlYWwtNTAwIHRvLWJsdWUtNTAwIHRleHQtd2hpdGUgcm91bmRlZCBwLTRcIj5cbiAgICAgICAgICAgICAge2lzTG9hZGluZyA/IFxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtXCI+TG9hZGluZy4uLjwvaDI+XG4gICAgICAgICAgICAgICAgKSBcbiAgICAgICAgICAgICAgICA6IFxuICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtbWVkaXVtXCI+UmVzdWx0OjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPntyZXN1bHR9PC9wPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIkhlYWQiLCJIb21lIiwiZW1haWxBZGRyZXNzIiwic2V0RW1haWxBZGRyZXNzIiwic3ViamVjdCIsInNldFN1YmplY3QiLCJib2R5Iiwic2V0Qm9keSIsInJlc3VsdCIsInNldFJlc3VsdCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsImRhdGEiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwiaGFuZGxlRW1haWxDaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVN1YmplY3RDaGFuZ2UiLCJoYW5kbGVCb2R5Q2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsImgxIiwiaDIiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInR5cGUiLCJvbkNoYW5nZSIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});