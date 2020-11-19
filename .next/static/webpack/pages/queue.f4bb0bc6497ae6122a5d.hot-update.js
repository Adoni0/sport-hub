webpackHotUpdate_N_E("pages/queue",{

/***/ "./pages/queue.js":
/*!************************!*\
  !*** ./pages/queue.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_QueueCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/QueueCard */ \"./components/QueueCard.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/pages/queue.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n // import \"react-multi-carousel/lib/styles.css\";\n\nvar queue = function queue() {\n  _s();\n\n  var responsive = {\n    desktop: {\n      breakpoint: {\n        max: 3000,\n        min: 1024\n      },\n      items: 3,\n      slidesToSlide: 3 // optional, default to 1.\n\n    },\n    tablet: {\n      breakpoint: {\n        max: 1024,\n        min: 464\n      },\n      items: 2,\n      slidesToSlide: 2 // optional, default to 1.\n\n    },\n    mobile: {\n      breakpoint: {\n        max: 464,\n        min: 0\n      },\n      items: 1,\n      slidesToSlide: 1 // optional, default to 1.\n\n    }\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      albums = _useState[0],\n      setAlbums = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/getAlbums').then(function (albums) {\n      setAlbums(albums);\n    })[\"catch\"](function (error) {\n      return console.log(error);\n    });\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    swipeable: true,\n    draggable: false,\n    showDots: true,\n    responsive: responsive,\n    ssr: true // means to render carousel on server-side.\n    ,\n    infinite: true //   autoPlay={this.props.deviceType !== \"mobile\" ? true : false}\n    //   autoPlaySpeed={1000}\n    ,\n    keyBoardControl: true,\n    customTransition: \"all .5\",\n    transitionDuration: 500,\n    containerClass: \"carousel-container\",\n    removeArrowOnDeviceType: [\"tablet\", \"mobile\"] //   deviceType={this.props.deviceType}\n    ,\n    dotListClass: \"custom-dot-list-style\",\n    itemClass: \"carousel-item-padding-40-px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }\n  }, __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  })), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 13\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }\n  }), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    swipeable: true,\n    draggable: false,\n    showDots: true,\n    responsive: responsive,\n    ssr: true // means to render carousel on server-side.\n    ,\n    infinite: true,\n    keyBoardControl: true,\n    customTransition: \"all .5\",\n    transitionDuration: 500,\n    containerClass: \"carousel-container\",\n    removeArrowOnDeviceType: [\"tablet\", \"mobile\"],\n    dotListClass: \"custom-dot-list-style\",\n    itemClass: \"carousel-item-padding-40-px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  }, __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 86,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(queue, \"lc/MwnjIUvbE/gAfqQrGJiZthlY=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (queue);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVldWUuanM/MmVkMiJdLCJuYW1lcyI6WyJxdWV1ZSIsInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwic2xpZGVzVG9TbGlkZSIsInRhYmxldCIsIm1vYmlsZSIsInVzZVN0YXRlIiwiYWxidW1zIiwic2V0QWxidW1zIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0NBRUE7O0FBR0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUFBOztBQUVoQixNQUFNQyxVQUFVLEdBQUc7QUFDZkMsV0FBTyxFQUFFO0FBQ0xDLGdCQUFVLEVBQUU7QUFBRUMsV0FBRyxFQUFFLElBQVA7QUFBYUMsV0FBRyxFQUFFO0FBQWxCLE9BRFA7QUFFTEMsV0FBSyxFQUFFLENBRkY7QUFHTEMsbUJBQWEsRUFBRSxDQUhWLENBR1k7O0FBSFosS0FETTtBQU1mQyxVQUFNLEVBQUU7QUFDSkwsZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsSUFBUDtBQUFhQyxXQUFHLEVBQUU7QUFBbEIsT0FEUjtBQUVKQyxXQUFLLEVBQUUsQ0FGSDtBQUdKQyxtQkFBYSxFQUFFLENBSFgsQ0FHYTs7QUFIYixLQU5PO0FBV2ZFLFVBQU0sRUFBRTtBQUNKTixnQkFBVSxFQUFFO0FBQUVDLFdBQUcsRUFBRSxHQUFQO0FBQVlDLFdBQUcsRUFBRTtBQUFqQixPQURSO0FBRUpDLFdBQUssRUFBRSxDQUZIO0FBR0pDLG1CQUFhLEVBQUUsQ0FIWCxDQUdhOztBQUhiO0FBWE8sR0FBbkI7O0FBRmdCLGtCQW9CWUcsc0RBQVEsQ0FBQyxFQUFELENBcEJwQjtBQUFBLE1Bb0JUQyxNQXBCUztBQUFBLE1Bb0JEQyxTQXBCQzs7QUFzQmhCQyx5REFBUyxDQUFDLFlBQU07QUFD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QSxJQW5CSixFQW9CSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQkosRUFxQkksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJKLEVBc0JJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCSixDQTlCSixDQURKO0FBeURILENBeEZEOztHQUFNRCxLOztBQTBGU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9xdWV1ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiO1xuaW1wb3J0IFF1ZXVlQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1F1ZXVlQ2FyZCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuLy8gaW1wb3J0IFwicmVhY3QtbXVsdGktY2Fyb3VzZWwvbGliL3N0eWxlcy5jc3NcIjtcblxuXG5jb25zdCBxdWV1ZSA9ICgpID0+IHtcblxuICAgIGNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gICAgICAgIGRlc2t0b3A6IHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcbiAgICAgICAgICAgIGl0ZW1zOiAzLFxuICAgICAgICAgICAgc2xpZGVzVG9TbGlkZTogMyAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuICAgICAgICB9LFxuICAgICAgICB0YWJsZXQ6IHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxuICAgICAgICAgICAgaXRlbXM6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1NsaWRlOiAyIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gICAgICAgIH0sXG4gICAgICAgIG1vYmlsZToge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQ2NCwgbWluOiAwIH0sXG4gICAgICAgICAgICBpdGVtczogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2xpZGU6IDEgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBbYWxidW1zLCBzZXRBbGJ1bXNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2dldEFsYnVtcycpXG4gICAgICAgICAgICAudGhlbihhbGJ1bXMgPT4ge1xuICAgICAgICAgICAgICAgIHNldEFsYnVtcyhhbGJ1bXMpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgICB9LCBbXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgICAgIHN3aXBlYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHNob3dEb3RzPXt0cnVlfVxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgICAgICAgICAgc3NyPXt0cnVlfSAvLyBtZWFucyB0byByZW5kZXIgY2Fyb3VzZWwgb24gc2VydmVyLXNpZGUuXG4gICAgICAgICAgICAgICAgaW5maW5pdGU9e3RydWV9XG4gICAgICAgICAgICAgICAgLy8gICBhdXRvUGxheT17dGhpcy5wcm9wcy5kZXZpY2VUeXBlICE9PSBcIm1vYmlsZVwiID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgIC8vICAgYXV0b1BsYXlTcGVlZD17MTAwMH1cbiAgICAgICAgICAgICAgICBrZXlCb2FyZENvbnRyb2w9e3RydWV9XG4gICAgICAgICAgICAgICAgY3VzdG9tVHJhbnNpdGlvbj1cImFsbCAuNVwiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3M9XCJjYXJvdXNlbC1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgIHJlbW92ZUFycm93T25EZXZpY2VUeXBlPXtbXCJ0YWJsZXRcIiwgXCJtb2JpbGVcIl19XG4gICAgICAgICAgICAgICAgLy8gICBkZXZpY2VUeXBlPXt0aGlzLnByb3BzLmRldmljZVR5cGV9XG4gICAgICAgICAgICAgICAgZG90TGlzdENsYXNzPVwiY3VzdG9tLWRvdC1saXN0LXN0eWxlXCJcbiAgICAgICAgICAgICAgICBpdGVtQ2xhc3M9XCJjYXJvdXNlbC1pdGVtLXBhZGRpbmctNDAtcHhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxRdWV1ZUNhcmQgLz5cbiAgICAgICAgICAgICAgICA8UXVldWVDYXJkIC8+XG4gICAgICAgICAgICAgICAgPFF1ZXVlQ2FyZCAvPlxuICAgICAgICAgICAgICAgIDxRdWV1ZUNhcmQgLz5cbiAgICAgICAgICAgICAgICA8UXVldWVDYXJkIC8+XG4gICAgICAgICAgICAgICAgPFF1ZXVlQ2FyZCAvPlxuICAgICAgICAgICAgICAgIDxRdWV1ZUNhcmQgLz5cbiAgICAgICAgICAgICAgICA8UXVldWVDYXJkIC8+XG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgICAgIHN3aXBlYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHNob3dEb3RzPXt0cnVlfVxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgICAgICAgICAgc3NyPXt0cnVlfSAvLyBtZWFucyB0byByZW5kZXIgY2Fyb3VzZWwgb24gc2VydmVyLXNpZGUuXG4gICAgICAgICAgICAgICAgaW5maW5pdGU9e3RydWV9XG4gICAgICAgICAgICAgICAga2V5Qm9hcmRDb250cm9sPXt0cnVlfVxuICAgICAgICAgICAgICAgIGN1c3RvbVRyYW5zaXRpb249XCJhbGwgLjVcIlxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzPVwiY2Fyb3VzZWwtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICByZW1vdmVBcnJvd09uRGV2aWNlVHlwZT17W1widGFibGV0XCIsIFwibW9iaWxlXCJdfVxuICAgICAgICAgICAgICAgIGRvdExpc3RDbGFzcz1cImN1c3RvbS1kb3QtbGlzdC1zdHlsZVwiXG4gICAgICAgICAgICAgICAgaXRlbUNsYXNzPVwiY2Fyb3VzZWwtaXRlbS1wYWRkaW5nLTQwLXB4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8UXVldWVDYXJkIC8+XG4gICAgICAgICAgICAgICAgPFF1ZXVlQ2FyZCAvPlxuICAgICAgICAgICAgICAgIDxRdWV1ZUNhcmQgLz5cbiAgICAgICAgICAgICAgICA8UXVldWVDYXJkIC8+XG4gICAgICAgICAgICAgICAgPFF1ZXVlQ2FyZCAvPlxuICAgICAgICAgICAgICAgIDxRdWV1ZUNhcmQgLz5cbiAgICAgICAgICAgICAgICA8UXVldWVDYXJkIC8+XG4gICAgICAgICAgICAgICAgPFF1ZXVlQ2FyZCAvPlxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBxdWV1ZTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/queue.js\n");

/***/ })

})