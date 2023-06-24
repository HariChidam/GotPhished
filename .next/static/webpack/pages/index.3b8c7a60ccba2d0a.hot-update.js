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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Home() {\n    _s();\n    const [emailAddress, setEmailAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [subject, setSubject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [body, setBody] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [result, setResult] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        setIsLoading(true);\n        try {\n            const response = await fetch(\"/api/scan\", {\n                method: \"POST\",\n                headers: {\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    emailAddress,\n                    subject,\n                    body\n                })\n            });\n            const data = await response.json();\n            setResult(data.result);\n        } catch (error) {\n            console.error(\"Error:\", error);\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    const handleEmailChange = (e)=>{\n        setEmailAddress(e.target.value);\n    };\n    const handleSubjectChange = (e)=>{\n        setSubject(e.target.value);\n    };\n    const handleBodyChange = (e)=>{\n        setBody(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"GotPhished?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"GPT powered phishing alert\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                lineNumber: 46,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pb-4\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"xs:text-7xl md:text-8xl font-bold bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 bg-clip-text text-transparent py-4 text-center\",\n                    children: \" GotPhished? \"\n                }, void 0, false, {\n                    fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                lineNumber: 52,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white rounded-lg p-4 mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-bold text-center\",\n                        children: \"This is a proof of concept for a Gmail add-on I am making that will be a GPT-3.5 powered phishing alert!\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-lg font-medium text-center\",\n                        children: \"Enter an email address, subject, and body to check if it's a phishing email.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 7\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                lineNumber: 55,\n                columnNumber: 5\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full max-w-xl mx-auto bg-white p-6 shadow-xl rounded-md\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: handleSubmit,\n                        className: \"flex flex-col items-center space-y-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"email-address\",\n                                        className: \"block font-medium text-lg\",\n                                        children: \"Email Address:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        id: \"email-address\",\n                                        type: \"email\",\n                                        value: emailAddress,\n                                        onChange: handleEmailChange,\n                                        className: \"border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300 text-lg\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                lineNumber: 61,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"subject\",\n                                        className: \"block font-medium text-lg\",\n                                        children: \"Subject:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        id: \"subject\",\n                                        type: \"text\",\n                                        value: subject,\n                                        onChange: handleSubjectChange,\n                                        className: \"border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring focus:border-blue-300 text-lg\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        htmlFor: \"body\",\n                                        className: \"block font-medium text-lg\",\n                                        children: \"Body:\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 11\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        id: \"body\",\n                                        value: body,\n                                        onChange: handleBodyChange,\n                                        className: \"border border-gray-300 rounded-md px-4 py-2 w-full h-60 focus:outline-none focus:ring focus:border-blue-300 text-lg\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                        lineNumber: 89,\n                                        columnNumber: 11\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 9\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"submit\",\n                                className: \"bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 hover:from-green-600 hover:via-teal-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded ml-2\",\n                                children: \"Check Email\"\n                            }, void 0, false, {\n                                fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-4 bg-gradient-to-r from-green-500 via-teal-500 to-blue-500 text-white rounded p-4\",\n                        children: isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-xl font-medium\",\n                            children: \"Scanning for Phishys :)\"\n                        }, void 0, false, {\n                            fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 19\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-xl font-medium\",\n                                    children: \"Result:\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                    lineNumber: 114,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: result\n                                }, void 0, false, {\n                                    fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                                    lineNumber: 115,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                            lineNumber: 113,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                        lineNumber: 106,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n                lineNumber: 59,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/hchidam/Documents/Hari's-Projects/GotPhished/pages/index.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"58jDePXPzGnC9Ux3W4GNlnJJn3I=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O2tDQU1ELDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FDWnJCLDBCQUVHLDhEQUFDOEI7NEJBQUdULFdBQVU7c0NBQXNCOzs7OztpREFJcEMsOERBQUNEOzs4Q0FDQyw4REFBQ1U7b0NBQUdULFdBQVU7OENBQXNCOzs7Ozs7OENBQ3BDLDhEQUFDVTs4Q0FBR2pDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN4QjtHQXhId0JQO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCBDaGFuZ2VFdmVudCwgRm9ybUV2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2VtYWlsQWRkcmVzcywgc2V0RW1haWxBZGRyZXNzXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3N1YmplY3QsIHNldFN1YmplY3RdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYm9keSwgc2V0Qm9keV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtyZXN1bHQsIHNldFJlc3VsdF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IEZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9zY2FuJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgZW1haWxBZGRyZXNzLCBzdWJqZWN0LCBib2R5IH0pLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0UmVzdWx0KGRhdGEucmVzdWx0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVFbWFpbENoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldEVtYWlsQWRkcmVzcyhlLnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlU3ViamVjdENoYW5nZSA9IChlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIHNldFN1YmplY3QoZS50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUJvZHlDaGFuZ2UgPSAoZTogQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHtcbiAgICBzZXRCb2R5KGUudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5Hb3RQaGlzaGVkPzwvdGl0bGU+XG4gICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR1BUIHBvd2VyZWQgcGhpc2hpbmcgYWxlcnRcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPGRpdiBjbGFzc05hbWU9J3BiLTQnPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInhzOnRleHQtN3hsIG1kOnRleHQtOHhsIGZvbnQtYm9sZCBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JlZW4tNTAwIHZpYS10ZWFsLTUwMCB0by1ibHVlLTUwMCBiZy1jbGlwLXRleHQgdGV4dC10cmFuc3BhcmVudCBweS00IHRleHQtY2VudGVyXCI+IEdvdFBoaXNoZWQ/IDwvaDE+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmFkaWVudC10by1yIGZyb20tZ3JlZW4tNTAwIHZpYS10ZWFsLTUwMCB0by1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtbGcgcC00IG1iLTRcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCB0ZXh0LWNlbnRlclwiPlRoaXMgaXMgYSBwcm9vZiBvZiBjb25jZXB0IGZvciBhIEdtYWlsIGFkZC1vbiBJIGFtIG1ha2luZyB0aGF0IHdpbGwgYmUgYSBHUFQtMy41IHBvd2VyZWQgcGhpc2hpbmcgYWxlcnQhPC9oMj5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1tZWRpdW0gdGV4dC1jZW50ZXJcIj5FbnRlciBhbiBlbWFpbCBhZGRyZXNzLCBzdWJqZWN0LCBhbmQgYm9keSB0byBjaGVjayBpZiBpdCdzIGEgcGhpc2hpbmcgZW1haWwuPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LXhsIG14LWF1dG8gYmctd2hpdGUgcC02IHNoYWRvdy14bCByb3VuZGVkLW1kXCI+XG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBzcGFjZS15LTRcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCc+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbC1hZGRyZXNzXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1tZWRpdW0gdGV4dC1sZ1wiPlxuICAgICAgICAgICAgRW1haWwgQWRkcmVzczpcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgaWQ9XCJlbWFpbC1hZGRyZXNzXCJcbiAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICB2YWx1ZT17ZW1haWxBZGRyZXNzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUVtYWlsQ2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLW1kIHB4LTQgcHktMiB3LWZ1bGwgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmcgZm9jdXM6Ym9yZGVyLWJsdWUtMzAwIHRleHQtbGdcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsJz5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInN1YmplY3RcIiBjbGFzc05hbWU9XCJibG9jayBmb250LW1lZGl1bSB0ZXh0LWxnXCI+XG4gICAgICAgICAgICBTdWJqZWN0OlxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBpZD1cInN1YmplY3RcIlxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgdmFsdWU9e3N1YmplY3R9XG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlU3ViamVjdENoYW5nZX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1tZCBweC00IHB5LTIgdy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIGZvY3VzOmJvcmRlci1ibHVlLTMwMCB0ZXh0LWxnXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ctZnVsbCc+XG4gICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJib2R5XCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC1tZWRpdW0gdGV4dC1sZ1wiPlxuICAgICAgICAgICAgQm9keTpcbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgaWQ9XCJib2R5XCJcbiAgICAgICAgICAgIHZhbHVlPXtib2R5fVxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUJvZHlDaGFuZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbWQgcHgtNCBweS0yIHctZnVsbCBoLTYwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nIGZvY3VzOmJvcmRlci1ibHVlLTMwMCB0ZXh0LWxnXCJcbiAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyYWRpZW50LXRvLXIgZnJvbS1ncmVlbi01MDAgdmlhLXRlYWwtNTAwIHRvLWJsdWUtNTAwIGhvdmVyOmZyb20tZ3JlZW4tNjAwIGhvdmVyOnZpYS10ZWFsLTYwMCBob3Zlcjp0by1ibHVlLTYwMCB0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgcHktMiBweC00IHJvdW5kZWQgbWwtMlwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENoZWNrIEVtYWlsXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNCBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JlZW4tNTAwIHZpYS10ZWFsLTUwMCB0by1ibHVlLTUwMCB0ZXh0LXdoaXRlIHJvdW5kZWQgcC00XCI+XG4gICAgICAgICAgICAgIHtpc0xvYWRpbmcgPyBcbiAgICAgICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LW1lZGl1bVwiPlNjYW5uaW5nIGZvciBQaGlzaHlzIDopPC9oMj5cbiAgICAgICAgICAgICAgICApIFxuICAgICAgICAgICAgICAgIDogXG4gICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1tZWRpdW1cIj5SZXN1bHQ6PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPHA+e3Jlc3VsdH08L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVhZCIsIkhvbWUiLCJlbWFpbEFkZHJlc3MiLCJzZXRFbWFpbEFkZHJlc3MiLCJzdWJqZWN0Iiwic2V0U3ViamVjdCIsImJvZHkiLCJzZXRCb2R5IiwicmVzdWx0Iiwic2V0UmVzdWx0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImpzb24iLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVFbWFpbENoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlU3ViamVjdENoYW5nZSIsImhhbmRsZUJvZHlDaGFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiaDEiLCJoMiIsInAiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwidHlwZSIsIm9uQ2hhbmdlIiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});