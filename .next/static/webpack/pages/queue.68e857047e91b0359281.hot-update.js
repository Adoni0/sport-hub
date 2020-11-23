webpackHotUpdate_N_E("pages/queue",{

/***/ "./pages/queue.js":
/*!************************!*\
  !*** ./pages/queue.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_QueueCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/QueueCard */ \"./components/QueueCard.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/pages/queue.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n // import \"react-multi-carousel/lib/styles.css\";\n\nvar queue = function queue() {\n  _s();\n\n  var responsive = {\n    desktop: {\n      breakpoint: {\n        max: 3000,\n        min: 1024\n      },\n      items: 3,\n      slidesToSlide: 3 // optional, default to 1.\n\n    },\n    tablet: {\n      breakpoint: {\n        max: 1024,\n        min: 464\n      },\n      items: 2,\n      slidesToSlide: 2 // optional, default to 1.\n\n    },\n    mobile: {\n      breakpoint: {\n        max: 464,\n        min: 0\n      },\n      items: 1,\n      slidesToSlide: 1 // optional, default to 1.\n\n    }\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      albums = _useState[0],\n      setAlbums = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/getAlbums').then(function (albums) {\n      // setAlbums(albums)\n      var result = albums.data.data.result;\n      console.log(albums);\n    })[\"catch\"](function (error) {\n      return console.log(error);\n    });\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    swipeable: true,\n    draggable: false,\n    showDots: true,\n    responsive: responsive,\n    ssr: true // means to render carousel on server-side.\n    ,\n    infinite: true //   autoPlay={this.props.deviceType !== \"mobile\" ? true : false}\n    //   autoPlaySpeed={1000}\n    ,\n    keyBoardControl: true,\n    customTransition: \"all .5\",\n    transitionDuration: 500,\n    containerClass: \"carousel-container\",\n    removeArrowOnDeviceType: [\"tablet\", \"mobile\"] //   deviceType={this.props.deviceType}\n    ,\n    dotListClass: \"custom-dot-list-style\",\n    itemClass: \"carousel-item-padding-40-px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 17\n    }\n  })), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 13\n    }\n  }), __jsx(\"br\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 13\n    }\n  }), __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    swipeable: true,\n    draggable: false,\n    showDots: true,\n    responsive: responsive,\n    ssr: true // means to render carousel on server-side.\n    ,\n    infinite: true,\n    keyBoardControl: true,\n    customTransition: \"all .5\",\n    transitionDuration: 500,\n    containerClass: \"carousel-container\",\n    removeArrowOnDeviceType: [\"tablet\", \"mobile\"],\n    dotListClass: \"custom-dot-list-style\",\n    itemClass: \"carousel-item-padding-40-px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 13\n    }\n  }, __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 17\n    }\n  }), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(queue, \"lc/MwnjIUvbE/gAfqQrGJiZthlY=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (queue);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVldWUuanM/MmVkMiJdLCJuYW1lcyI6WyJxdWV1ZSIsInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwic2xpZGVzVG9TbGlkZSIsInRhYmxldCIsIm1vYmlsZSIsInVzZVN0YXRlIiwiYWxidW1zIiwic2V0QWxidW1zIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFFaEIsTUFBTUMsVUFBVSxHQUFHO0FBQ2ZDLFdBQU8sRUFBRTtBQUNMQyxnQkFBVSxFQUFFO0FBQUVDLFdBQUcsRUFBRSxJQUFQO0FBQWFDLFdBQUcsRUFBRTtBQUFsQixPQURQO0FBRUxDLFdBQUssRUFBRSxDQUZGO0FBR0xDLG1CQUFhLEVBQUUsQ0FIVixDQUdZOztBQUhaLEtBRE07QUFNZkMsVUFBTSxFQUFFO0FBQ0pMLGdCQUFVLEVBQUU7QUFBRUMsV0FBRyxFQUFFLElBQVA7QUFBYUMsV0FBRyxFQUFFO0FBQWxCLE9BRFI7QUFFSkMsV0FBSyxFQUFFLENBRkg7QUFHSkMsbUJBQWEsRUFBRSxDQUhYLENBR2E7O0FBSGIsS0FOTztBQVdmRSxVQUFNLEVBQUU7QUFDSk4sZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsR0FBUDtBQUFZQyxXQUFHLEVBQUU7QUFBakIsT0FEUjtBQUVKQyxXQUFLLEVBQUUsQ0FGSDtBQUdKQyxtQkFBYSxFQUFFLENBSFgsQ0FHYTs7QUFIYjtBQVhPLEdBQW5COztBQUZnQixrQkFvQllHLHNEQUFRLENBQUMsRUFBRCxDQXBCcEI7QUFBQSxNQW9CVEMsTUFwQlM7QUFBQSxNQW9CREMsU0FwQkM7O0FBc0JoQkMseURB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxCSixFQW1CSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFuQkosRUFvQkksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBcEJKLEVBcUJJLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCSixFQXNCSSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkosQ0E5QkosQ0FESjtBQXlESCxDQTFGRDs7R0FBTUQsSzs7QUE0RlNBLG9FQUFmIiwiZmlsZSI6Ii4vcGFnZXMvcXVldWUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwicmVhY3QtbXVsdGktY2Fyb3VzZWxcIjtcbmltcG9ydCBRdWV1ZUNhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9RdWV1ZUNhcmQnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbi8vIGltcG9ydCBcInJlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzXCI7XG5cblxuY29uc3QgcXVldWUgPSAoKSA9PiB7XG5cbiAgICBjb25zdCByZXNwb25zaXZlID0ge1xuICAgICAgICBkZXNrdG9wOiB7XG4gICAgICAgICAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxMDI0IH0sXG4gICAgICAgICAgICBpdGVtczogMyxcbiAgICAgICAgICAgIHNsaWRlc1RvU2xpZGU6IDMgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgICAgICAgfSxcbiAgICAgICAgdGFibGV0OiB7XG4gICAgICAgICAgICBicmVha3BvaW50OiB7IG1heDogMTAyNCwgbWluOiA0NjQgfSxcbiAgICAgICAgICAgIGl0ZW1zOiAyLFxuICAgICAgICAgICAgc2xpZGVzVG9TbGlkZTogMiAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuICAgICAgICB9LFxuICAgICAgICBtb2JpbGU6IHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA0NjQsIG1pbjogMCB9LFxuICAgICAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgICAgICBzbGlkZXNUb1NsaWRlOiAxIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgW2FsYnVtcywgc2V0QWxidW1zXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9nZXRBbGJ1bXMnKVxuICAgICAgICAgICAgLnRoZW4oYWxidW1zID0+IHtcbiAgICAgICAgICAgICAgICAvLyBzZXRBbGJ1bXMoYWxidW1zKVxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0IH0gPSBhbGJ1bXMuZGF0YS5kYXRhO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFsYnVtcylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICAgIH0sIFtdKVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgICAgc3dpcGVhYmxlPXt0cnVlfVxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgc2hvd0RvdHM9e3RydWV9XG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgICAgICAgICBzc3I9e3RydWV9IC8vIG1lYW5zIHRvIHJlbmRlciBjYXJvdXNlbCBvbiBzZXJ2ZXItc2lkZS5cbiAgICAgICAgICAgICAgICBpbmZpbml0ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICAvLyAgIGF1dG9QbGF5PXt0aGlzLnByb3BzLmRldmljZVR5cGUgIT09IFwibW9iaWxlXCIgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgLy8gICBhdXRvUGxheVNwZWVkPXsxMDAwfVxuICAgICAgICAgICAgICAgIGtleUJvYXJkQ29udHJvbD17dHJ1ZX1cbiAgICAgICAgICAgICAgICBjdXN0b21UcmFuc2l0aW9uPVwiYWxsIC41XCJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb249ezUwMH1cbiAgICAgICAgICAgICAgICBjb250YWluZXJDbGFzcz1cImNhcm91c2VsLWNvbnRhaW5lclwiXG4gICAgICAgICAgICAgICAgcmVtb3ZlQXJyb3dPbkRldmljZVR5cGU9e1tcInRhYmxldFwiLCBcIm1vYmlsZVwiXX1cbiAgICAgICAgICAgICAgICAvLyAgIGRldmljZVR5cGU9e3RoaXMucHJvcHMuZGV2aWNlVHlwZX1cbiAgICAgICAgICAgICAgICBkb3RMaXN0Q2xhc3M9XCJjdXN0b20tZG90LWxpc3Qtc3R5bGVcIlxuICAgICAgICAgICAgICAgIGl0ZW1DbGFzcz1cImNhcm91c2VsLWl0ZW0tcGFkZGluZy00MC1weFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPFF1ZXVlQ2FyZCAvPlxuICAgICAgICAgICAgICAgIDxRdWV1ZUNhcmQgLz5cbiAgICAgICAgICAgICAgICA8UXVldWVDYXJkIC8+XG4gICAgICAgICAgICAgICAgPFF1ZXVlQ2FyZCAvPlxuICAgICAgICAgICAgICAgIDxRdWV1ZUNhcmQgLz5cbiAgICAgICAgICAgICAgICA8UXVldWVDYXJkIC8+XG4gICAgICAgICAgICAgICAgPFF1ZXVlQ2FyZCAvPlxuICAgICAgICAgICAgICAgIDxRdWV1ZUNhcmQgLz5cbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgPENhcm91c2VsXG4gICAgICAgICAgICAgICAgc3dpcGVhYmxlPXt0cnVlfVxuICAgICAgICAgICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgc2hvd0RvdHM9e3RydWV9XG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZT17cmVzcG9uc2l2ZX1cbiAgICAgICAgICAgICAgICBzc3I9e3RydWV9IC8vIG1lYW5zIHRvIHJlbmRlciBjYXJvdXNlbCBvbiBzZXJ2ZXItc2lkZS5cbiAgICAgICAgICAgICAgICBpbmZpbml0ZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBrZXlCb2FyZENvbnRyb2w9e3RydWV9XG4gICAgICAgICAgICAgICAgY3VzdG9tVHJhbnNpdGlvbj1cImFsbCAuNVwiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3M9XCJjYXJvdXNlbC1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgIHJlbW92ZUFycm93T25EZXZpY2VUeXBlPXtbXCJ0YWJsZXRcIiwgXCJtb2JpbGVcIl19XG4gICAgICAgICAgICAgICAgZG90TGlzdENsYXNzPVwiY3VzdG9tLWRvdC1saXN0LXN0eWxlXCJcbiAgICAgICAgICAgICAgICBpdGVtQ2xhc3M9XCJjYXJvdXNlbC1pdGVtLXBhZGRpbmctNDAtcHhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxRdWV1ZUNhcmQgLz5cbiAgICAgICAgICAgICAgICA8UXVldWVDYXJkIC8+XG4gICAgICAgICAgICAgICAgPFF1ZXVlQ2FyZCAvPlxuICAgICAgICAgICAgICAgIDxRdWV1ZUNhcmQgLz5cbiAgICAgICAgICAgICAgICA8UXVldWVDYXJkIC8+XG4gICAgICAgICAgICAgICAgPFF1ZXVlQ2FyZCAvPlxuICAgICAgICAgICAgICAgIDxRdWV1ZUNhcmQgLz5cbiAgICAgICAgICAgICAgICA8UXVldWVDYXJkIC8+XG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXVlO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/queue.js\n");

/***/ })

})