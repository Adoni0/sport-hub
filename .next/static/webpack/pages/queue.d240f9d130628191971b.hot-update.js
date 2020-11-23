webpackHotUpdate_N_E("pages/queue",{

/***/ "./components/QueueCard.js":
/*!*********************************!*\
  !*** ./components/QueueCard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QueueCard; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardHeader */ \"./node_modules/@material-ui/core/esm/CardHeader/index.js\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"./node_modules/@material-ui/core/esm/CardMedia/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"./node_modules/@material-ui/core/esm/CardActions/index.js\");\n/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Collapse */ \"./node_modules/@material-ui/core/esm/Collapse/index.js\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"./node_modules/@material-ui/core/esm/Avatar/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/colors */ \"./node_modules/@material-ui/core/esm/colors/index.js\");\n/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Favorite */ \"./node_modules/@material-ui/icons/Favorite.js\");\n/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Share */ \"./node_modules/@material-ui/icons/Share.js\");\n/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ \"./node_modules/@material-ui/icons/ExpandMore.js\");\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ \"./node_modules/@material-ui/icons/MoreVert.js\");\n/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/HighlightOff */ \"./node_modules/@material-ui/icons/HighlightOff.js\");\n/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);\n\n\nvar _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/components/QueueCard.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      maxWidth: 345\n    },\n    media: {\n      height: 0,\n      paddingTop: '56.25%' // 16:9\n\n    },\n    expand: {\n      transform: 'rotate(0deg)',\n      marginLeft: 'auto',\n      transition: theme.transitions.create('transform', {\n        duration: theme.transitions.duration.shortest\n      })\n    },\n    expandOpen: {\n      transform: 'rotate(180deg)'\n    },\n    avatar: {\n      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__[\"purple\"][500]\n    }\n  };\n});\nfunction QueueCard() {\n  _s();\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      expanded = _useState[0],\n      setExpanded = _useState[1];\n\n  var handleExpandClick = function handleExpandClick() {\n    setExpanded(!expanded);\n  };\n\n  var deleteFromQueue = function deleteFromQueue(id) {\n    axios__WEBPACK_IMPORTED_MODULE_19___default.a[\"delete\"]('/api/delete', {\n      id: id\n    }).then(function (response) {\n      return console.log(response);\n    })[\"catch\"](function (error) {\n      return console.log(error);\n    });\n  };\n\n  return (// this.props.albumQueue.map(album => (\n    __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      className: classes.root,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 7\n      }\n    }, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      avatar: __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        \"aria-label\": \"recipe\",\n        className: classes.avatar,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 11\n        }\n      }, \"Alb\"),\n      action: __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        \"aria-label\": \"settings\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }\n      }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17___default.a, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 13\n        }\n      })),\n      title: this.props.albumalbum.album.name,\n      subheader: album.album.artist,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 7\n      }\n    }), __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      className: classes.media,\n      image: \"https://source.unsplash.com/random\",\n      title: \"album or MV\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 7\n      }\n    }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 7\n      }\n    }), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      disableSpacing: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 7\n      }\n    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      \"aria-label\": \"add to favorites\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 87,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_14___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 11\n      }\n    })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      \"aria-label\": \"remove\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_18___default.a, {\n      onClick: function onClick() {\n        return deleteFromQueue();\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 11\n      }\n    })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(classes.expand, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, classes.expandOpen, expanded)),\n      onClick: handleExpandClick,\n      \"aria-expanded\": expanded,\n      \"aria-label\": \"show more\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 11\n      }\n    }))), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      \"in\": expanded,\n      timeout: \"auto\",\n      unmountOnExit: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 7\n      }\n    }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 105,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      component: \"h2\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 11\n      }\n    }, \"Comments\"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      paragraph: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 11\n      }\n    }, \"This is where comments on albums or MV's will go\")))) // ))\n\n  );\n}\n\n_s(QueueCard, \"h4ZSQ0ae6nPGs2BiQgjY3xQWnvE=\", false, function () {\n  return [useStyles];\n});\n\n_c = QueueCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"QueueCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWV1ZUNhcmQuanM/ZjFmYSJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWF4V2lkdGgiLCJtZWRpYSIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJleHBhbmQiLCJ0cmFuc2Zvcm0iLCJtYXJnaW5MZWZ0IiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZHVyYXRpb24iLCJzaG9ydGVzdCIsImV4cGFuZE9wZW4iLCJhdmF0YXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwdXJwbGUiLCJRdWV1ZUNhcmQiLCJjbGFzc2VzIiwidXNlU3RhdGUiLCJleHBhbmRlZCIsInNldEV4cGFuZGVkIiwiaGFuZGxlRXhwYW5kQ2xpY2siLCJkZWxldGVGcm9tUXVldWUiLCJpZCIsImF4aW9zIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwicHJvcHMiLCJhbGJ1bWFsYnVtIiwiYWxidW0iLCJuYW1lIiwiYXJ0aXN0IiwiY2xzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEtBRGlDO0FBSXZDQyxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFLENBREg7QUFFTEMsZ0JBQVUsRUFBRSxRQUZQLENBRWlCOztBQUZqQixLQUpnQztBQVF2Q0MsVUFBTSxFQUFFO0FBQ05DLGVBQVMsRUFBRSxjQURMO0FBRU5DLGdCQUFVLEVBQUUsTUFGTjtBQUdOQyxnQkFBVSxF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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBSkYsRUFPRSxNQUFDLHFFQUFEO0FBQ0UsZUFBUyxFQUFFYSxvREFBSSxDQUFDbEIsT0FBTyxDQUFDYixNQUFULGdHQUNaYSxPQUFPLENBQUNMLFVBREksRUFDU08sUUFEVCxFQURqQjtBQUlFLGFBQU8sRUFBRUUsaUJBSlg7QUFLRSx1QkFBZUYsUUFMakI7QUFNRSxvQkFBVyxXQU5iO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FRRSxNQUFDLHFFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFSRixDQVBGLENBdkJBLEVBeUNBLE1BQUMsa0VBQUQ7QUFBVSxZQUFJQSxRQUFkO0FBQXdCLGFBQU8sRUFBQyxNQUFoQztBQUF1QyxtQkFBYSxNQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxxRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxxRUFBRDtBQUFZLGVBQVMsRUFBQyxJQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLEVBSUUsTUFBQyxxRUFBRDtBQUFZLGVBQVMsTUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFKRixDQURGLENBekNBLENBRkosQ0F1REU7O0FBdkRGO0FBMEREOztHQTNFdUJILFM7VUFDTnBCLFM7OztLQURNb0IsUyIsImZpbGUiOiIuL2NvbXBvbmVudHMvUXVldWVDYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCc7XG5pbXBvcnQgQ2FyZEhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkSGVhZGVyJztcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJztcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnO1xuaW1wb3J0IENvbGxhcHNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlJztcbmltcG9ydCBBdmF0YXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXZhdGFyJztcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nO1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XG5pbXBvcnQgeyBwdXJwbGUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9jb2xvcnMnO1xuaW1wb3J0IEZhdm9yaXRlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmF2b3JpdGUnO1xuaW1wb3J0IFNoYXJlSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvU2hhcmUnO1xuaW1wb3J0IEV4cGFuZE1vcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcbmltcG9ydCBNb3JlVmVydEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01vcmVWZXJ0JztcbmltcG9ydCBIaWdobGlnaHRPZmZJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9IaWdobGlnaHRPZmYnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBtYXhXaWR0aDogMzQ1LFxuICB9LFxuICBtZWRpYToge1xuICAgIGhlaWdodDogMCxcbiAgICBwYWRkaW5nVG9wOiAnNTYuMjUlJywgLy8gMTY6OVxuICB9LFxuICBleHBhbmQ6IHtcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknLFxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ3RyYW5zZm9ybScsIHtcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5zaG9ydGVzdCxcbiAgICB9KSxcbiAgfSxcbiAgZXhwYW5kT3Blbjoge1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgxODBkZWcpJyxcbiAgfSxcbiAgYXZhdGFyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBwdXJwbGVbNTAwXSxcbiAgfSxcbn0pKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUXVldWVDYXJkKCkge1xuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG4gIGNvbnN0IFtleHBhbmRlZCwgc2V0RXhwYW5kZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcblxuICBjb25zdCBoYW5kbGVFeHBhbmRDbGljayA9ICgpID0+IHtcbiAgICBzZXRFeHBhbmRlZCghZXhwYW5kZWQpO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZUZyb21RdWV1ZSA9IChpZCkgPT4ge1xuICAgIGF4aW9zLmRlbGV0ZSgnL2FwaS9kZWxldGUnLCB7XG4gICAgICBpZDogaWRcbiAgICB9KVxuICAgIC50aGVuKHJlc3BvbnNlID0+IGNvbnNvbGUubG9nKHJlc3BvbnNlKSlcbiAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICAvLyB0aGlzLnByb3BzLmFsYnVtUXVldWUubWFwKGFsYnVtID0+IChcbiAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICAgIDxDYXJkSGVhZGVyXG4gICAgICAgIGF2YXRhcj17XG4gICAgICAgICAgPEF2YXRhciBhcmlhLWxhYmVsPVwicmVjaXBlXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmF2YXRhcn0+XG4gICAgICAgICAgICBBbGJcbiAgICAgICAgICA8L0F2YXRhcj5cbiAgICAgICAgfVxuICAgICAgICBhY3Rpb249e1xuICAgICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJzZXR0aW5nc1wiPlxuICAgICAgICAgICAgPE1vcmVWZXJ0SWNvbiAvPlxuICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgICAgfVxuICAgICAgICB0aXRsZT17dGhpcy5wcm9wcy5hbGJ1bWFsYnVtLmFsYnVtLm5hbWV9XG4gICAgICAgIHN1YmhlYWRlcj17YWxidW0uYWxidW0uYXJ0aXN0fVxuICAgICAgLz5cbiAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxuICAgICAgICBpbWFnZT1cImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS9yYW5kb21cIlxuICAgICAgICB0aXRsZT1cImFsYnVtIG9yIE1WXCJcbiAgICAgIC8+XG4gICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgXG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPENhcmRBY3Rpb25zIGRpc2FibGVTcGFjaW5nPlxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwiYWRkIHRvIGZhdm9yaXRlc1wiPlxuICAgICAgICAgIDxGYXZvcml0ZUljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwicmVtb3ZlXCI+XG4gICAgICAgICAgPEhpZ2hsaWdodE9mZkljb24gb25DbGljaz17KCkgPT4gZGVsZXRlRnJvbVF1ZXVlKCl9Lz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmV4cGFuZCwge1xuICAgICAgICAgICAgW2NsYXNzZXMuZXhwYW5kT3Blbl06IGV4cGFuZGVkLFxuICAgICAgICAgIH0pfVxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUV4cGFuZENsaWNrfVxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9e2V4cGFuZGVkfVxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJzaG93IG1vcmVcIlxuICAgICAgICA+XG4gICAgICAgICAgPEV4cGFuZE1vcmVJY29uIC8+XG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cbiAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICA8Q29sbGFwc2UgaW49e2V4cGFuZGVkfSB0aW1lb3V0PVwiYXV0b1wiIHVubW91bnRPbkV4aXQ+XG4gICAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgICAgQ29tbWVudHNcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgcGFyYWdyYXBoPlxuICAgICAgICAgIFRoaXMgaXMgd2hlcmUgY29tbWVudHMgb24gYWxidW1zIG9yIE1WJ3Mgd2lsbCBnb1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICBcbiAgICAgICAgPC9DYXJkQ29udGVudD5cbiAgICAgIDwvQ29sbGFwc2U+XG4gICAgPC9DYXJkPlxuICAgIC8vICkpXG4gICAgXG4gICk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/QueueCard.js\n");

/***/ })

})