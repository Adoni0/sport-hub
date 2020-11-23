webpackHotUpdate_N_E("pages/queue",{

/***/ "./pages/queue.js":
/*!************************!*\
  !*** ./pages/queue.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_QueueCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/QueueCard */ \"./components/QueueCard.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/pages/queue.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n // import \"react-multi-carousel/lib/styles.css\";\n\nvar queue = function queue() {\n  _s();\n\n  var responsive = {\n    desktop: {\n      breakpoint: {\n        max: 3000,\n        min: 1024\n      },\n      items: 3,\n      slidesToSlide: 3 // optional, default to 1.\n\n    },\n    tablet: {\n      breakpoint: {\n        max: 1024,\n        min: 464\n      },\n      items: 2,\n      slidesToSlide: 2 // optional, default to 1.\n\n    },\n    mobile: {\n      breakpoint: {\n        max: 464,\n        min: 0\n      },\n      items: 1,\n      slidesToSlide: 1 // optional, default to 1.\n\n    }\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      albums = _useState[0],\n      setAlbums = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/getAlbums').then(function (albums) {\n      setAlbums(albums.data.result); // const result = albums.data;\n\n      console.log(albums.data.result);\n    })[\"catch\"](function (error) {\n      return console.log(error);\n    });\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    swipeable: true,\n    draggable: false,\n    showDots: true,\n    responsive: responsive,\n    ssr: true // means to render carousel on server-side.\n    ,\n    infinite: true //   autoPlay={this.props.deviceType !== \"mobile\" ? true : false}\n    //   autoPlaySpeed={1000}\n    ,\n    keyBoardControl: true,\n    customTransition: \"all .5\",\n    transitionDuration: 500,\n    containerClass: \"carousel-container\",\n    removeArrowOnDeviceType: [\"tablet\", \"mobile\"] //   deviceType={this.props.deviceType}\n    ,\n    dotListClass: \"custom-dot-list-style\",\n    itemClass: \"carousel-item-padding-40-px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, albums.map(), __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 17\n    }\n  })));\n};\n\n_s(queue, \"lc/MwnjIUvbE/gAfqQrGJiZthlY=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (queue);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVldWUuanM/MmVkMiJdLCJuYW1lcyI6WyJxdWV1ZSIsInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwic2xpZGVzVG9TbGlkZSIsInRhYmxldCIsIm1vYmlsZSIsInVzZVN0YXRlIiwiYWxidW1zIiwic2V0QWxidW1zIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFFaEIsTUFBTUMsVUFBVSxHQUFHO0FBQ2ZDLFdBQU8sRUFBRTtBQUNMQyxnQkFBVSxFQUFFO0FBQUVDLFdBQUcsRUFBRSxJQUFQO0FBQWFDLFdBQUcsRUFBRTtBQUFsQixPQURQO0FBRUxDLFdBQUssRUFBRSxDQUZGO0FBR0xDLG1CQUFhLEVBQUUsQ0FIVixDQUdZOztBQUhaLEtBRE07QUFNZkMsVUFBTSxFQUFFO0FBQ0pMLGdCQUFVLEVBQUU7QUFBRUMsV0FBRyxFQUFFLElBQVA7QUFBYUMsV0FBRyxFQUFFO0FBQWxCLE9BRFI7QUFFSkMsV0FBSyxFQUFFLENBRkg7QUFHSkMsbUJBQWEsRUFBRSxDQUhYLENBR2E7O0FBSGIsS0FOTztBQVdmRSxVQUFNLEVBQUU7QUFDSk4sZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsR0FBUDtBQUFZQyxXQUFHLEVBQUU7QUFBakIsT0FEUjtBQUVKQyxXQUFLLEVBQUUsQ0FGSDtBQUdKQyxtQkFBYSxFQUFFLENBSFgsQ0FHYTs7QUFIYjtBQVhPLEdBQW5COztBQUZnQixrQkFvQllHLHNEQUFRLENBQUMsRUFBRCxDQXBCcEI7QUFBQSxNQW9CVEMsTUFwQlM7QUFBQSxNQW9CREMsU0FwQkM7O0FBc0JoQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGdEQUFLLENBQUNDLEdBQU4sQ0FBVSxnQkFBVixFQUNLQyxJQURMLENBQ1UsVUFBQUwsTUFBTSxFQUFJO0FBQ1pDLGVBQVMsQ0FBQ0QsTUFBTSxDQUFDTSxJQUFQLENBQVlDLE1BQWIsQ0FBVCxDQURZLENBRVo7O0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZVCxNQUFNLENBQUNNLElBQVAsQ0FBWUMsTUFBeEI7QUFDSCxLQUxMLFdBTVcsVUFBQUcsS0FBSztBQUFBLGFBQUlGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaLENBQUo7QUFBQSxLQU5oQjtBQU9ILEdBUlEsRUFRTixFQVJNLENBQVQ7QUFXQSxTQUNJLG1FQUNJLE1BQUMsMkRBQUQ7QUFDSSxhQUFTLEVBQUUsSUFEZjtBQUVJLGFBQVMsRUFBRSxLQUZmO0FBR0ksWUFBUSxFQUFFLElBSGQ7QUFJSSxjQUFVLEVBQUVwQixVQUpoQjtBQUtJLE9BQUcsRUFBRSxJQUxULENBS2U7QUFMZjtBQU1JLFlBQVEsRUFBRSxJQU5kLENBT0k7QUFDQTtBQVJKO0FBU0ksbUJBQWUsRUFBRSxJQVRyQjtBQVVJLG9CQUFnQixFQUFDLFFBVnJCO0FBV0ksc0JBQWtCLEVBQUUsR0FYeEI7QUFZSSxrQkFBYyxFQUFDLG9CQVpuQjtBQWFJLDJCQUF1QixFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FiN0IsQ0FjSTtBQWRKO0FBZUksZ0JBQVksRUFBQyx1QkFmakI7QUFnQkksYUFBUyxFQUFDLDZCQWhCZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBa0JLVSxNQUFNLENBQUNXLEdBQVAsRUFsQkwsRUFtQkksTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBbkJKLENBREosQ0FESjtBQTJCSCxDQTVERDs7R0FBTXRCLEs7O0FBOERTQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3F1ZXVlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XG5pbXBvcnQgUXVldWVDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvUXVldWVDYXJkJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG4vLyBpbXBvcnQgXCJyZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzc1wiO1xuXG5cbmNvbnN0IHF1ZXVlID0gKCkgPT4ge1xuXG4gICAgY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgICAgICAgZGVza3RvcDoge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDMwMDAsIG1pbjogMTAyNCB9LFxuICAgICAgICAgICAgaXRlbXM6IDMsXG4gICAgICAgICAgICBzbGlkZXNUb1NsaWRlOiAzIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gICAgICAgIH0sXG4gICAgICAgIHRhYmxldDoge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNDY0IH0sXG4gICAgICAgICAgICBpdGVtczogMixcbiAgICAgICAgICAgIHNsaWRlc1RvU2xpZGU6IDIgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgICAgICAgfSxcbiAgICAgICAgbW9iaWxlOiB7XG4gICAgICAgICAgICBicmVha3BvaW50OiB7IG1heDogNDY0LCBtaW46IDAgfSxcbiAgICAgICAgICAgIGl0ZW1zOiAxLFxuICAgICAgICAgICAgc2xpZGVzVG9TbGlkZTogMSAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IFthbGJ1bXMsIHNldEFsYnVtc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBheGlvcy5nZXQoJy9hcGkvZ2V0QWxidW1zJylcbiAgICAgICAgICAgIC50aGVuKGFsYnVtcyA9PiB7XG4gICAgICAgICAgICAgICAgc2V0QWxidW1zKGFsYnVtcy5kYXRhLnJlc3VsdClcbiAgICAgICAgICAgICAgICAvLyBjb25zdCByZXN1bHQgPSBhbGJ1bXMuZGF0YTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhbGJ1bXMuZGF0YS5yZXN1bHQpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgICB9LCBbXSlcblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxDYXJvdXNlbFxuICAgICAgICAgICAgICAgIHN3aXBlYWJsZT17dHJ1ZX1cbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU9e2ZhbHNlfVxuICAgICAgICAgICAgICAgIHNob3dEb3RzPXt0cnVlfVxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU9e3Jlc3BvbnNpdmV9XG4gICAgICAgICAgICAgICAgc3NyPXt0cnVlfSAvLyBtZWFucyB0byByZW5kZXIgY2Fyb3VzZWwgb24gc2VydmVyLXNpZGUuXG4gICAgICAgICAgICAgICAgaW5maW5pdGU9e3RydWV9XG4gICAgICAgICAgICAgICAgLy8gICBhdXRvUGxheT17dGhpcy5wcm9wcy5kZXZpY2VUeXBlICE9PSBcIm1vYmlsZVwiID8gdHJ1ZSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgIC8vICAgYXV0b1BsYXlTcGVlZD17MTAwMH1cbiAgICAgICAgICAgICAgICBrZXlCb2FyZENvbnRyb2w9e3RydWV9XG4gICAgICAgICAgICAgICAgY3VzdG9tVHJhbnNpdGlvbj1cImFsbCAuNVwiXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uPXs1MDB9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyQ2xhc3M9XCJjYXJvdXNlbC1jb250YWluZXJcIlxuICAgICAgICAgICAgICAgIHJlbW92ZUFycm93T25EZXZpY2VUeXBlPXtbXCJ0YWJsZXRcIiwgXCJtb2JpbGVcIl19XG4gICAgICAgICAgICAgICAgLy8gICBkZXZpY2VUeXBlPXt0aGlzLnByb3BzLmRldmljZVR5cGV9XG4gICAgICAgICAgICAgICAgZG90TGlzdENsYXNzPVwiY3VzdG9tLWRvdC1saXN0LXN0eWxlXCJcbiAgICAgICAgICAgICAgICBpdGVtQ2xhc3M9XCJjYXJvdXNlbC1pdGVtLXBhZGRpbmctNDAtcHhcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHthbGJ1bXMubWFwKCl9XG4gICAgICAgICAgICAgICAgPFF1ZXVlQ2FyZCAvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgICAgICAgIFxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHF1ZXVlO1xuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/queue.js\n");

/***/ })

})