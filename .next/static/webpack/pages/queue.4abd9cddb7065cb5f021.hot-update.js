webpackHotUpdate_N_E("pages/queue",{

/***/ "./pages/queue.js":
/*!************************!*\
  !*** ./pages/queue.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_QueueCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/QueueCard */ \"./components/QueueCard.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/pages/queue.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n // import \"react-multi-carousel/lib/styles.css\";\n\nvar queue = function queue() {\n  _s();\n\n  var responsive = {\n    desktop: {\n      breakpoint: {\n        max: 3000,\n        min: 1024\n      },\n      items: 3,\n      slidesToSlide: 3 // optional, default to 1.\n\n    },\n    tablet: {\n      breakpoint: {\n        max: 1024,\n        min: 464\n      },\n      items: 2,\n      slidesToSlide: 2 // optional, default to 1.\n\n    },\n    mobile: {\n      breakpoint: {\n        max: 464,\n        min: 0\n      },\n      items: 1,\n      slidesToSlide: 1 // optional, default to 1.\n\n    }\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      albums = _useState[0],\n      setAlbums = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/getAlbums').then(function (albums) {\n      // setAlbums(albums)\n      // const result = albums.data;\n      console.log(albums.data);\n    })[\"catch\"](function (error) {\n      return console.log(error);\n    });\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    swipeable: true,\n    draggable: false,\n    showDots: true,\n    responsive: responsive,\n    ssr: true // means to render carousel on server-side.\n    ,\n    infinite: true //   autoPlay={this.props.deviceType !== \"mobile\" ? true : false}\n    //   autoPlaySpeed={1000}\n    ,\n    keyBoardControl: true,\n    customTransition: \"all .5\",\n    transitionDuration: 500,\n    containerClass: \"carousel-container\",\n    removeArrowOnDeviceType: [\"tablet\", \"mobile\"] //   deviceType={this.props.deviceType}\n    ,\n    dotListClass: \"custom-dot-list-style\",\n    itemClass: \"carousel-item-padding-40-px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 17\n    }\n  })), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    swipeable: true,\n    draggable: false,\n    showDots: true,\n    responsive: responsive,\n    ssr: true // means to render carousel on server-side.\n    ,\n    infinite: true,\n    keyBoardControl: true,\n    customTransition: \"all .5\",\n    transitionDuration: 500,\n    containerClass: \"carousel-container\",\n    removeArrowOnDeviceType: [\"tablet\", \"mobile\"],\n    dotListClass: \"custom-dot-list-style\",\n    itemClass: \"carousel-item-padding-40-px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(queue, \"lc/MwnjIUvbE/gAfqQrGJiZthlY=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (queue);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVldWUuanM/MmVkMiJdLCJuYW1lcyI6WyJxdWV1ZSIsInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwic2xpZGVzVG9TbGlkZSIsInRhYmxldCIsIm1vYmlsZSIsInVzZVN0YXRlIiwiYWxidW1zIiwic2V0QWxidW1zIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFFaEIsTUFBTUMsVUFBVSxHQUFHO0FBQ2ZDLFdBQU8sRUFBRTtBQUNMQyxnQkFBVSxFQUFFO0FBQUVDLFdBQUcsRUFBRSxJQUFQO0FBQWFDLFdBQUcsRUFBRTtBQUFsQixPQURQO0FBRUxDLFdBQUssRUFBRSxDQUZGO0FBR0xDLG1CQUFhLEVBQUUsQ0FIVixDQUdZOztBQUhaLEtBRE07QUFNZkMsVUFBTSxFQUFFO0FBQ0pMLGdCQUFVLEVBQUU7QUFBRUMsV0FBRyxFQUFFLElBQVA7QUFBYUMsV0FBRyxFQUFFO0FBQWxCLE9BRFI7QUFFSkMsV0FBSyxFQUFFLENBRkg7QUFHSkMsbUJBQWEsRUFBRSxDQUhYLENBR2E7O0FBSGIsS0FOTztBQVdmRSxVQUFNLEVBQUU7QUFDSk4sZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsR0FBUDtBQUFZQyxXQUFHLEVBQUU7QUFBakIsT0FEUjtBQUVKQyxXQUFLLEVBQUUsQ0FGSDtBQUdKQyxtQkFBYSxFQUFFLENBSFgsQ0FHYTs7QUFIYjtBQVhPLEdBQW5COztBQUZnQixrQkFvQllHLHNEQUFRLENBQUMsRUFBRCxDQXBCcEI7QUFBQSxNQW9CVEMsTUFwQlM7QUFBQSxNQW9CREMsU0FwQkM7O0FBc0JoQkMseURBQVMsQ0FBQyxZ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RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJKLEVBb0JJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBCSixFQXFCSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkosRUFzQkksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdEJKLENBOUJKLENBREo7QUF5REgsQ0ExRkQ7O0dBQU1ELEs7O0FBNEZTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3F1ZXVlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XG5pbXBvcnQgUXVldWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUXVldWVDYXJkJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG4vLyBpbXBvcnQgXCJyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzc1wiO1xuXG5cbmNvbnN0IHF1ZXVlID0gKCkgPT4ge1xuXG4gICAgY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgICAgICAgZGVza3RvcDoge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxuICAgICAgICAgICAgaXRlbXM6IDMsXG4gICAgICAgICAgICBzbGlkZXNUb1NsaWRlOiAzIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gICAgICAgIH0sXG4gICAgICAgIHRhYmxldDoge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNDY0IH0sXG4gICAgICAgICAgICBpdGVtczogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2xpZGU6IDIgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgICAgICAgfSxcbiAgICAgICAgbW9iaWxlOiB7XG4gICAgICAgICAgICBicmVha3BvaW50OiB7IG1heDogNDY0LCBtaW46IDAgfSxcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgc2xpZGVzVG9TbGlkZTogMSAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IFthbGJ1bXMsIHNldEFsYnVtc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoJy9hcGkvZ2V0QWxidW1zJylcbiAgICAgICAgICAgIC50aGVuKGFsYnVtcyA9PiB7XG4gICAgICAgICAgICAgICAgLy8gc2V0QWxidW1zKGFsYnVtcylcbiAgICAgICAgICAgICAgICAvLyBjb25zdCByZXN1bHQgPSBhbGJ1bXMuZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhbGJ1bXMuZGF0YSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICAgIH0sIFtdKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgICAgc3dpcGVhYmxlPXt0cnVlfVxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgc2hvd0RvdHM9e3RydWV9XG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgICAgICAgICBzc3I9e3RydWV9IC8vIG1lYW5zIHRvIHJlbmRlciBjYXJvdXNlbCBvbiBzZXJ2ZXItc2lkZS5cbiAgICAgICAgICAgICAgICBpbmZpbml0ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAvLyAgIGF1dG9QbGF5PXt0aGlzLnByb3BzLmRldmljZVR5cGUgIT09IFwibW9iaWxlXCIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgLy8gICBhdXRvUGxheVNwZWVkPXsxMDAwfVxuICAgICAgICAgICAgICAgIGtleUJvYXJkQ29udHJvbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBjdXN0b21UcmFuc2l0aW9uPVwiYWxsIC41XCJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzcz1cImNhcm91c2VsLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgcmVtb3ZlQXJyb3dPbkRldmljZVR5cGU9e1tcInRhYmxldFwiLCBcIm1vYmlsZVwiXX1cbiAgICAgICAgICAgICAgICAvLyAgIGRldmljZVR5cGU9e3RoaXMucHJvcHMuZGV2aWNlVHlwZX1cbiAgICAgICAgICAgICAgICBkb3RMaXN0Q2xhc3M9XCJjdXN0b20tZG90LWxpc3Qtc3R5bGVcIlxuICAgICAgICAgICAgICAgIGl0ZW1DbGFzcz1cImNhcm91c2VsLWl0ZW0tcGFkZGluZy00MC1weFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFF1ZXVlQ2FyZCAvPlxuICAgICAgICAgICAgICAgIDxRdWV1ZUNhcmQgLz5cbiAgICAgICAgICAgICAgICA8UXVldWVDYXJkIC8+XG4gICAgICAgICAgICAgICAgPFF1ZXVlQ2FyZCAvPlxuICAgICAgICAgICAgICAgIDxRdWV1ZUNhcmQgLz5cbiAgICAgICAgICAgICAgICA8UXVldWVDYXJkIC8+XG4gICAgICAgICAgICAgICAgPFF1ZXVlQ2FyZCAvPlxuICAgICAgICAgICAgICAgIDxRdWV1ZUNhcmQgLz5cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgICAgc3dpcGVhYmxlPXt0cnVlfVxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgc2hvd0RvdHM9e3RydWV9XG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgICAgICAgICBzc3I9e3RydWV9IC8vIG1lYW5zIHRvIHJlbmRlciBjYXJvdXNlbCBvbiBzZXJ2ZXItc2lkZS5cbiAgICAgICAgICAgICAgICBpbmZpbml0ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBrZXlCb2FyZENvbnRyb2w9e3RydWV9XG4gICAgICAgICAgICAgICAgY3VzdG9tVHJhbnNpdGlvbj1cImFsbCAuNVwiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3M9XCJjYXJvdXNlbC1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgIHJlbW92ZUFycm93T25EZXZpY2VUeXBlPXtbXCJ0YWJsZXRcIiwgXCJtb2JpbGVcIl19XG4gICAgICAgICAgICAgICAgZG90TGlzdENsYXNzPVwiY3VzdG9tLWRvdC1saXN0LXN0eWxlXCJcbiAgICAgICAgICAgICAgICBpdGVtQ2xhc3M9XCJjYXJvdXNlbC1pdGVtLXBhZGRpbmctNDAtcHhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxRdWV1ZUNhcmQgLz5cbiAgICAgICAgICAgICAgICA8UXVldWVDYXJkIC8+XG4gICAgICAgICAgICAgICAgPFF1ZXVlQ2FyZCAvPlxuICAgICAgICAgICAgICAgIDxRdWV1ZUNhcmQgLz5cbiAgICAgICAgICAgICAgICA8UXVldWVDYXJkIC8+XG4gICAgICAgICAgICAgICAgPFF1ZXVlQ2FyZCAvPlxuICAgICAgICAgICAgICAgIDxRdWV1ZUNhcmQgLz5cbiAgICAgICAgICAgICAgICA8UXVldWVDYXJkIC8+XG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXVlO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/queue.js\n");

/***/ })

})