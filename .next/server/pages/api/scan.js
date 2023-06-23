"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/scan";
exports.ids = ["pages/api/scan"];
exports.modules = {

/***/ "openai":
/*!*************************!*\
  !*** external "openai" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("openai");

/***/ }),

/***/ "(api)/./pages/api/scan.ts":
/*!***************************!*\
  !*** ./pages/api/scan.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! openai */ \"openai\");\n/* harmony import */ var openai__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(openai__WEBPACK_IMPORTED_MODULE_0__);\n\nconst configuration = new openai__WEBPACK_IMPORTED_MODULE_0__.Configuration({\n    apiKey: process.env.OPENAI_API_KEY || \"\"\n});\nconst openai = new openai__WEBPACK_IMPORTED_MODULE_0__.OpenAIApi(configuration);\n/* harmony default export */ async function __WEBPACK_DEFAULT_EXPORT__(req, res) {\n    if (!configuration.apiKey) {\n        res.status(500).json({\n            error: {\n                message: \"OpenAI API key not configured, please follow instructions in README.md\"\n            }\n        });\n        return;\n    }\n    const { emailAddress, subject, body } = req.body;\n    if (!emailAddress || !subject || !body) {\n        res.status(400).json({\n            error: {\n                message: \"Please provide email address, subject, and body\"\n            }\n        });\n        return;\n    }\n    try {\n        const completion = await openai.createCompletion({\n            model: \"text-davinci-003\",\n            prompt: createPrompt(emailAddress, subject, body),\n            temperature: 0.6,\n            max_tokens: 100\n        });\n        res.status(200).json({\n            result: completion.data.choices[0].text\n        });\n    } catch (error) {\n        console.error(\"Error:\", error);\n        res.status(500).json({\n            error: {\n                message: \"An error occurred\"\n            }\n        });\n    }\n}\nfunction createPrompt(emailAddress, subject, body) {\n    return `\n    I am going to send you the email address, subject line, and email body for an email I received. Can you please check if this could be a phishing or scam email?\n\n    Email address: ${emailAddress}\n    Subject: ${subject}\n    Body: ${body}\n  `;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvc2Nhbi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDa0Q7QUFFbEQsTUFBTUUsZ0JBQWdCLElBQUlGLGlEQUFhQSxDQUFDO0lBQ3RDRyxRQUFRQyxRQUFRQyxJQUFJQyxrQkFBa0I7QUFDeEM7QUFDQSxNQUFNQyxTQUFTLElBQUlOLDZDQUFTQSxDQUFDQztBQUU3Qiw2QkFBZSwwQ0FBZ0JNLEdBQW1CLEVBQUVDLEdBQW9CO0lBQ3RFLElBQUksQ0FBQ1AsY0FBY0MsUUFBUTtRQUN6Qk0sSUFBSUMsT0FBTyxLQUFLQyxLQUFLO1lBQ25CQyxPQUFPO2dCQUNMQyxTQUFTO1lBQ1g7UUFDRjtRQUNBO0lBQ0Y7SUFFQSxNQUFNLEVBQUVDLFlBQVksRUFBRUMsT0FBTyxFQUFFQyxJQUFJLEVBQUUsR0FBR1IsSUFBSVE7SUFFNUMsSUFBSSxDQUFDRixnQkFBZ0IsQ0FBQ0MsV0FBVyxDQUFDQyxNQUFNO1FBQ3RDUCxJQUFJQyxPQUFPLEtBQUtDLEtBQUs7WUFDbkJDLE9BQU87Z0JBQ0xDLFNBQVM7WUFDWDtRQUNGO1FBQ0E7SUFDRjtJQUVBLElBQUk7UUFDRixNQUFNSSxhQUFhLE1BQU1WLE9BQU9XLGlCQUFpQjtZQUMvQ0MsT0FBTztZQUNQQyxRQUFRQyxhQUFhUCxjQUFjQyxTQUFTQztZQUM1Q00sYUFBYTtZQUNiQyxZQUFZO1FBQ2Q7UUFFQWQsSUFBSUMsT0FBTyxLQUFLQyxLQUFLO1lBQUVhLFFBQVFQLFdBQVdRLEtBQUtDLE9BQU8sQ0FBQyxFQUFFLENBQUNDO1FBQUs7SUFDakUsRUFBRSxPQUFPZixPQUFPO1FBQ2RnQixRQUFRaEIsTUFBTSxVQUFVQTtRQUN4QkgsSUFBSUMsT0FBTyxLQUFLQyxLQUFLO1lBQUVDLE9BQU87Z0JBQUVDLFNBQVM7WUFBb0I7UUFBRTtJQUNqRTtBQUNGO0FBRUEsU0FBU1EsYUFBYVAsWUFBb0IsRUFBRUMsT0FBZSxFQUFFQyxJQUFZO0lBQ3ZFLE9BQU8sQ0FBQzs7O21CQUdTLEVBQUVGLGFBQWE7YUFDckIsRUFBRUMsUUFBUTtVQUNiLEVBQUVDLEtBQUs7RUFDZixDQUFDO0FBQ0giLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9waGlzaC8uL3BhZ2VzL2FwaS9zY2FuLnRzPzViZDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgQ29uZmlndXJhdGlvbiwgT3BlbkFJQXBpIH0gZnJvbSAnb3BlbmFpJztcblxuY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBDb25maWd1cmF0aW9uKHtcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5PUEVOQUlfQVBJX0tFWSB8fCAnJyxcbn0pO1xuY29uc3Qgb3BlbmFpID0gbmV3IE9wZW5BSUFwaShjb25maWd1cmF0aW9uKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGlmICghY29uZmlndXJhdGlvbi5hcGlLZXkpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7XG4gICAgICBlcnJvcjoge1xuICAgICAgICBtZXNzYWdlOiAnT3BlbkFJIEFQSSBrZXkgbm90IGNvbmZpZ3VyZWQsIHBsZWFzZSBmb2xsb3cgaW5zdHJ1Y3Rpb25zIGluIFJFQURNRS5tZCcsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHsgZW1haWxBZGRyZXNzLCBzdWJqZWN0LCBib2R5IH0gPSByZXEuYm9keTtcblxuICBpZiAoIWVtYWlsQWRkcmVzcyB8fCAhc3ViamVjdCB8fCAhYm9keSkge1xuICAgIHJlcy5zdGF0dXMoNDAwKS5qc29uKHtcbiAgICAgIGVycm9yOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdQbGVhc2UgcHJvdmlkZSBlbWFpbCBhZGRyZXNzLCBzdWJqZWN0LCBhbmQgYm9keScsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgY29tcGxldGlvbiA9IGF3YWl0IG9wZW5haS5jcmVhdGVDb21wbGV0aW9uKHtcbiAgICAgIG1vZGVsOiAndGV4dC1kYXZpbmNpLTAwMycsXG4gICAgICBwcm9tcHQ6IGNyZWF0ZVByb21wdChlbWFpbEFkZHJlc3MsIHN1YmplY3QsIGJvZHkpLFxuICAgICAgdGVtcGVyYXR1cmU6IDAuNixcbiAgICAgIG1heF90b2tlbnM6IDEwMCxcbiAgICB9KTtcblxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgcmVzdWx0OiBjb21wbGV0aW9uLmRhdGEuY2hvaWNlc1swXS50ZXh0IH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiB7IG1lc3NhZ2U6ICdBbiBlcnJvciBvY2N1cnJlZCcgfSB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9tcHQoZW1haWxBZGRyZXNzOiBzdHJpbmcsIHN1YmplY3Q6IHN0cmluZywgYm9keTogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGBcbiAgICBJIGFtIGdvaW5nIHRvIHNlbmQgeW91IHRoZSBlbWFpbCBhZGRyZXNzLCBzdWJqZWN0IGxpbmUsIGFuZCBlbWFpbCBib2R5IGZvciBhbiBlbWFpbCBJIHJlY2VpdmVkLiBDYW4geW91IHBsZWFzZSBjaGVjayBpZiB0aGlzIGNvdWxkIGJlIGEgcGhpc2hpbmcgb3Igc2NhbSBlbWFpbD9cblxuICAgIEVtYWlsIGFkZHJlc3M6ICR7ZW1haWxBZGRyZXNzfVxuICAgIFN1YmplY3Q6ICR7c3ViamVjdH1cbiAgICBCb2R5OiAke2JvZHl9XG4gIGA7XG59XG4iXSwibmFtZXMiOlsiQ29uZmlndXJhdGlvbiIsIk9wZW5BSUFwaSIsImNvbmZpZ3VyYXRpb24iLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiT1BFTkFJX0FQSV9LRVkiLCJvcGVuYWkiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJtZXNzYWdlIiwiZW1haWxBZGRyZXNzIiwic3ViamVjdCIsImJvZHkiLCJjb21wbGV0aW9uIiwiY3JlYXRlQ29tcGxldGlvbiIsIm1vZGVsIiwicHJvbXB0IiwiY3JlYXRlUHJvbXB0IiwidGVtcGVyYXR1cmUiLCJtYXhfdG9rZW5zIiwicmVzdWx0IiwiZGF0YSIsImNob2ljZXMiLCJ0ZXh0IiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/scan.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/scan.ts"));
module.exports = __webpack_exports__;

})();