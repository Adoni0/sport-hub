webpackHotUpdate_N_E("pages/queue",{

/***/ "./pages/queue.js":
/*!************************!*\
  !*** ./pages/queue.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-multi-carousel */ \"./node_modules/react-multi-carousel/index.js\");\n/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_QueueCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/QueueCard */ \"./components/QueueCard.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/pages/queue.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n // import \"react-multi-carousel/lib/styles.css\";\n\nvar queue = function queue() {\n  _s();\n\n  var responsive = {\n    desktop: {\n      breakpoint: {\n        max: 3000,\n        min: 1024\n      },\n      items: 3,\n      slidesToSlide: 3 // optional, default to 1.\n\n    },\n    tablet: {\n      breakpoint: {\n        max: 1024,\n        min: 464\n      },\n      items: 2,\n      slidesToSlide: 2 // optional, default to 1.\n\n    },\n    mobile: {\n      breakpoint: {\n        max: 464,\n        min: 0\n      },\n      items: 1,\n      slidesToSlide: 1 // optional, default to 1.\n\n    }\n  };\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      albums = _useState[0],\n      setAlbums = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/getAlbums').then(function (albums) {\n      setAlbums(albums.data.result); // const result = albums.data;\n\n      console.log(albums.data.result);\n    })[\"catch\"](function (error) {\n      return console.log(error);\n    });\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_multi_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    swipeable: true,\n    draggable: false,\n    showDots: true,\n    responsive: responsive,\n    ssr: true // means to render carousel on server-side.\n    ,\n    infinite: true //   autoPlay={this.props.deviceType !== \"mobile\" ? true : false}\n    //   autoPlaySpeed={1000}\n    ,\n    keyBoardControl: true,\n    customTransition: \"all .5\",\n    transitionDuration: 500,\n    containerClass: \"carousel-container\",\n    removeArrowOnDeviceType: [\"tablet\", \"mobile\"] //   deviceType={this.props.deviceType}\n    ,\n    dotListClass: \"custom-dot-list-style\",\n    itemClass: \"carousel-item-padding-40-px\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, albums.map(function (alb) {\n    return __jsx(_components_QueueCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      albumQueue: alb,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 21\n      }\n    });\n  })));\n};\n\n_s(queue, \"lc/MwnjIUvbE/gAfqQrGJiZthlY=\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (queue);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcXVldWUuanM/MmVkMiJdLCJuYW1lcyI6WyJxdWV1ZSIsInJlc3BvbnNpdmUiLCJkZXNrdG9wIiwiYnJlYWtwb2ludCIsIm1heCIsIm1pbiIsIml0ZW1zIiwic2xpZGVzVG9TbGlkZSIsInRhYmxldCIsIm1vYmlsZSIsInVzZVN0YXRlIiwiYWxidW1zIiwic2V0QWxidW1zIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIm1hcCIsImFsYiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtDQUVBOztBQUdBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLEdBQU07QUFBQTs7QUFFaEIsTUFBTUMsVUFBVSxHQUFHO0FBQ2ZDLFdBQU8sRUFBRTtBQUNMQyxnQkFBVSxFQUFFO0FBQUVDLFdBQUcsRUFBRSxJQUFQO0FBQWFDLFdBQUcsRUFBRTtBQUFsQixPQURQO0FBRUxDLFdBQUssRUFBRSxDQUZGO0FBR0xDLG1CQUFhLEVBQUUsQ0FIVixDQUdZOztBQUhaLEtBRE07QUFNZkMsVUFBTSxFQUFFO0FBQ0pMLGdCQUFVLEVBQUU7QUFBRUMsV0FBRyxFQUFFLElBQVA7QUFBYUMsV0FBRyxFQUFFO0FBQWxCLE9BRFI7QUFFSkMsV0FBSyxFQUFFLENBRkg7QUFHSkMsbUJBQWEsRUFBRSxDQUhYLENBR2E7O0FBSGIsS0FOTztBQVdmRSxVQUFNLEVBQUU7QUFDSk4sZ0JBQVUsRUFBRTtBQUFFQyxXQUFHLEVBQUUsR0FBUDtBQUFZQyxXQUFHLEVBQUU7QUFBakIsT0FEUjtBQUVKQyxXQUFLLEVBQUUsQ0FGSDtBQUdKQyxtQkFBYSxFQUFFLENBSFgsQ0FHYTs7QUFIYjtBQVhPLEdBQW5COztBQUZnQixrQkFvQllHLHNEQUFRLENBQUMsRUFBRCxDQXBCcEI7QUFBQSxNQW9CVEMsTUFwQlM7QUFBQSxNQW9CREMsU0FwQkM7O0FBc0JoQkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pDLGdEQUFLLENBQUNDLEdBQU4sQ0FBVSxnQkFBVixFQUNLQyxJQURMLENBQ1UsVUFBQUwsTUFBTSxFQUFJO0FBQ1pDLGVBQVMsQ0FBQ0QsTUFBTSxDQUFDTSxJQUFQLENBQVlDLE1BQWIsQ0FBVCxDQURZLENBRVo7O0FBQ0FDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZVCxNQUFNLENBQUNNLElBQVAsQ0FBWUMsTUFBeEI7QUFDSCxLQUxMLFdBTVcsVUFBQUcsS0FBSztBQUFBLGFBQUlGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaLENBQUo7QUFBQSxLQU5oQjtBQU9ILEdBUlEsRUFRTixFQVJNLENBQVQ7QUFXQSxTQUNJLG1FQUNJLE1BQUMsMkRBQUQ7QUFDSSxhQUFTLEVBQUUsSUFEZjtBQUVJLGFBQVMsRUFBRSxLQUZmO0FBR0ksWUFBUSxFQUFFLElBSGQ7QUFJSSxjQUFVLEVBQUVwQixVQUpoQjtBQUtJLE9BQUcsRUFBRSxJQUxULENBS2U7QUFMZjtBQU1JLFlBQVEsRUFBRSxJQU5kLENBT0k7QUFDQTtBQVJKO0FBU0ksbUJBQWUsRUFBRSxJQVRyQjtBQVVJLG9CQUFnQixFQUFDLFFBVnJCO0FBV0ksc0JBQWtCLEVBQUUsR0FYeEI7QUFZSSxrQkFBYyxFQUFDLG9CQVpuQjtBQWFJLDJCQUF1QixFQUFFLENBQUMsUUFBRCxFQUFXLFFBQVgsQ0FiN0IsQ0FjSTtBQWRKO0FBZUksZ0JBQVksRUFBQyx1QkFmakI7QUFnQkksYUFBUyxFQUFDLDZCQWhCZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBa0JLVSxNQUFNLENBQUNXLEdBQVAsQ0FBVyxVQUFBQyxHQUFHO0FBQUEsV0FDWCxNQUFDLDZEQUFEO0FBQVcsZ0JBQVUsRUFBRUEsR0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURXO0FBQUEsR0FBZCxDQWxCTCxDQURKLENBREo7QUE0QkgsQ0E3REQ7O0dBQU12QixLOztBQStEU0Esb0VBQWYiLCJmaWxlIjoiLi9wYWdlcy9xdWV1ZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiO1xuaW1wb3J0IFF1ZXVlQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL1F1ZXVlQ2FyZCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuLy8gaW1wb3J0IFwicmVhY3QtbXVsdGktY2Fyb3VzZWwvbGliL3N0eWxlcy5jc3NcIjtcblxuXG5jb25zdCBxdWV1ZSA9ICgpID0+IHtcblxuICAgIGNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gICAgICAgIGRlc2t0b3A6IHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDEwMjQgfSxcbiAgICAgICAgICAgIGl0ZW1zOiAzLFxuICAgICAgICAgICAgc2xpZGVzVG9TbGlkZTogMyAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuICAgICAgICB9LFxuICAgICAgICB0YWJsZXQ6IHtcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDQ2NCB9LFxuICAgICAgICAgICAgaXRlbXM6IDIsXG4gICAgICAgICAgICBzbGlkZXNUb1NsaWRlOiAyIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gICAgICAgIH0sXG4gICAgICAgIG1vYmlsZToge1xuICAgICAgICAgICAgYnJlYWtwb2ludDogeyBtYXg6IDQ2NCwgbWluOiAwIH0sXG4gICAgICAgICAgICBpdGVtczogMSxcbiAgICAgICAgICAgIHNsaWRlc1RvU2xpZGU6IDEgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBbYWxidW1zLCBzZXRBbGJ1bXNdID0gdXNlU3RhdGUoW10pO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2dldEFsYnVtcycpXG4gICAgICAgICAgICAudGhlbihhbGJ1bXMgPT4ge1xuICAgICAgICAgICAgICAgIHNldEFsYnVtcyhhbGJ1bXMuZGF0YS5yZXN1bHQpXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcmVzdWx0ID0gYWxidW1zLmRhdGE7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWxidW1zLmRhdGEucmVzdWx0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG4gICAgfSwgW10pXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICAgICAgICBzd2lwZWFibGU9e3RydWV9XG4gICAgICAgICAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBzaG93RG90cz17dHJ1ZX1cbiAgICAgICAgICAgICAgICByZXNwb25zaXZlPXtyZXNwb25zaXZlfVxuICAgICAgICAgICAgICAgIHNzcj17dHJ1ZX0gLy8gbWVhbnMgdG8gcmVuZGVyIGNhcm91c2VsIG9uIHNlcnZlci1zaWRlLlxuICAgICAgICAgICAgICAgIGluZmluaXRlPXt0cnVlfVxuICAgICAgICAgICAgICAgIC8vICAgYXV0b1BsYXk9e3RoaXMucHJvcHMuZGV2aWNlVHlwZSAhPT0gXCJtb2JpbGVcIiA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICAvLyAgIGF1dG9QbGF5U3BlZWQ9ezEwMDB9XG4gICAgICAgICAgICAgICAga2V5Qm9hcmRDb250cm9sPXt0cnVlfVxuICAgICAgICAgICAgICAgIGN1c3RvbVRyYW5zaXRpb249XCJhbGwgLjVcIlxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25EdXJhdGlvbj17NTAwfVxuICAgICAgICAgICAgICAgIGNvbnRhaW5lckNsYXNzPVwiY2Fyb3VzZWwtY29udGFpbmVyXCJcbiAgICAgICAgICAgICAgICByZW1vdmVBcnJvd09uRGV2aWNlVHlwZT17W1widGFibGV0XCIsIFwibW9iaWxlXCJdfVxuICAgICAgICAgICAgICAgIC8vICAgZGV2aWNlVHlwZT17dGhpcy5wcm9wcy5kZXZpY2VUeXBlfVxuICAgICAgICAgICAgICAgIGRvdExpc3RDbGFzcz1cImN1c3RvbS1kb3QtbGlzdC1zdHlsZVwiXG4gICAgICAgICAgICAgICAgaXRlbUNsYXNzPVwiY2Fyb3VzZWwtaXRlbS1wYWRkaW5nLTQwLXB4XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YWxidW1zLm1hcChhbGIgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8UXVldWVDYXJkIGFsYnVtUXVldWU9e2FsYn0vPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWw+XG4gICAgICAgICAgICBcbiAgICAgICAgPC8+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBxdWV1ZTtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/queue.js\n");

/***/ })

})