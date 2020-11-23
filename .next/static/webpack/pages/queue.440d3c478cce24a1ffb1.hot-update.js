webpackHotUpdate_N_E("pages/queue",{

/***/ "./components/QueueCard.js":
/*!*********************************!*\
  !*** ./components/QueueCard.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return QueueCard; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ \"./node_modules/@material-ui/core/esm/styles/index.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ \"./node_modules/@material-ui/core/esm/Card/index.js\");\n/* harmony import */ var _material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardHeader */ \"./node_modules/@material-ui/core/esm/CardHeader/index.js\");\n/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ \"./node_modules/@material-ui/core/esm/CardMedia/index.js\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"./node_modules/@material-ui/core/esm/CardContent/index.js\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"./node_modules/@material-ui/core/esm/CardActions/index.js\");\n/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Collapse */ \"./node_modules/@material-ui/core/esm/Collapse/index.js\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"./node_modules/@material-ui/core/esm/Avatar/index.js\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"./node_modules/@material-ui/core/esm/IconButton/index.js\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Typography */ \"./node_modules/@material-ui/core/esm/Typography/index.js\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/colors */ \"./node_modules/@material-ui/core/esm/colors/index.js\");\n/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Favorite */ \"./node_modules/@material-ui/icons/Favorite.js\");\n/* harmony import */ var _material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Share */ \"./node_modules/@material-ui/icons/Share.js\");\n/* harmony import */ var _material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Share__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/ExpandMore */ \"./node_modules/@material-ui/icons/ExpandMore.js\");\n/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/MoreVert */ \"./node_modules/@material-ui/icons/MoreVert.js\");\n/* harmony import */ var _material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/HighlightOff */ \"./node_modules/@material-ui/icons/HighlightOff.js\");\n/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_19__);\n\n\nvar _jsxFileName = \"/Users/adamsoudani/Desktop/album-rating/components/QueueCard.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__[\"makeStyles\"])(function (theme) {\n  return {\n    root: {\n      maxWidth: 345\n    },\n    media: {\n      height: 0,\n      paddingTop: '56.25%' // 16:9\n\n    },\n    expand: {\n      transform: 'rotate(0deg)',\n      marginLeft: 'auto',\n      transition: theme.transitions.create('transform', {\n        duration: theme.transitions.duration.shortest\n      })\n    },\n    expandOpen: {\n      transform: 'rotate(180deg)'\n    },\n    avatar: {\n      backgroundColor: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_13__[\"purple\"][500]\n    }\n  };\n});\nfunction QueueCard(props) {\n  _s();\n\n  var _this = this;\n\n  var classes = useStyles();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      expanded = _useState[0],\n      setExpanded = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])([]),\n      queued = _useState2[0],\n      setQueued = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    setQueued(_this.props.albumQueue);\n  });\n\n  var handleExpandClick = function handleExpandClick() {\n    setExpanded(!expanded);\n  };\n\n  var deleteFromQueue = function deleteFromQueue(id) {\n    axios__WEBPACK_IMPORTED_MODULE_19___default.a[\"delete\"]('/api/delete', {\n      id: id\n    }).then(function (response) {\n      return console.log(response);\n    })[\"catch\"](function (error) {\n      return console.log(error);\n    });\n  };\n\n  return (// this.props.albumQueue.map(album => (\n    __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      className: classes.root,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 68,\n        columnNumber: 7\n      }\n    }, __jsx(_material_ui_core_CardHeader__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      avatar: __jsx(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n        \"aria-label\": \"recipe\",\n        className: classes.avatar,\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 11\n        }\n      }, \"Alb\"),\n      action: __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n        \"aria-label\": \"settings\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 11\n        }\n      }, __jsx(_material_ui_icons_MoreVert__WEBPACK_IMPORTED_MODULE_17___default.a, {\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 13\n        }\n      })),\n      title: this.props.albumQueue.album.album.name,\n      subheader: this.props.albumQueue.album.album.artist,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 69,\n        columnNumber: 7\n      }\n    }), __jsx(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      className: classes.media,\n      image: \"https://source.unsplash.com/random\",\n      title: \"album or MV\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 7\n      }\n    }), __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 7\n      }\n    }), __jsx(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n      disableSpacing: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 7\n      }\n    }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      \"aria-label\": \"add to favorites\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_icons_Favorite__WEBPACK_IMPORTED_MODULE_14___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 11\n      }\n    })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      \"aria-label\": \"remove\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 95,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_18___default.a, {\n      onClick: function onClick() {\n        return deleteFromQueue();\n      },\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 11\n      }\n    })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(classes.expand, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, classes.expandOpen, expanded)),\n      onClick: handleExpandClick,\n      \"aria-expanded\": expanded,\n      \"aria-label\": \"show more\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_16___default.a, {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 11\n      }\n    }))), __jsx(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n      \"in\": expanded,\n      timeout: \"auto\",\n      unmountOnExit: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 109,\n        columnNumber: 7\n      }\n    }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 9\n      }\n    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      component: \"h2\",\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 111,\n        columnNumber: 11\n      }\n    }, \"Comments\"), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__[\"default\"], {\n      paragraph: true,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 114,\n        columnNumber: 11\n      }\n    }, \"This is where comments on albums or MV's will go\")))) // ))\n\n  );\n}\n\n_s(QueueCard, \"2Rm8aHcMhZJvfyxV8cUke5asSyQ=\", false, function () {\n  return [useStyles];\n});\n\n_c = QueueCard;\n\nvar _c;\n\n$RefreshReg$(_c, \"QueueCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9RdWV1ZUNhcmQuanM/ZjFmYSJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290IiwibWF4V2lkdGgiLCJtZWRpYSIsImhlaWdodCIsInBhZGRpbmdUb3AiLCJleHBhbmQiLCJ0cmFuc2Zvcm0iLCJtYXJnaW5MZWZ0IiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZHVyYXRpb24iLCJzaG9ydGVzdCIsImV4cGFuZE9wZW4iLCJhdmF0YXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwdXJwbGUiLCJRdWV1ZUNhcmQiLCJwcm9wcyIsImNsYXNzZXMiLCJ1c2VTdGF0ZSIsImV4cGFuZGVkIiwic2V0RXhwYW5kZWQiLCJxdWV1ZWQiLCJzZXRRdWV1ZWQiLCJ1c2VFZmZlY3QiLCJhbGJ1bVF1ZXVlIiwiaGFuZGxlRXhwYW5kQ2xpY2siLCJkZWxldGVGcm9tUXVldWUiLCJpZCIsImF4aW9zIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiYWxidW0iLCJuYW1lIiwiYXJ0aXN0IiwiY2xzeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLGNBQVEsRUFBRTtBQUROLEtBRGlDO0FBSXZDQyxTQUFLLEVBQUU7QUFDTEMsWUFBTSxFQUFFLENBREg7QUFFTEMsZ0JBQVUsRUFBRSxRQUZQLENBRWlCOztBQUZqQixLQUpnQztBQVF2Q0MsVUFBTSxFQUFFO0FBQ05DLGVBQVMsRUFBRSxjQURMO0FB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O0dBaEZ1QkosUztVQUNOcEIsUzs7O0tBRE1vQixTIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9RdWV1ZUNhcmQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcbmltcG9ydCBDYXJkSGVhZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRIZWFkZXInO1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnO1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50JztcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucyc7XG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2UnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9BdmF0YXInO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5JztcbmltcG9ydCB7IHB1cnBsZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL2NvbG9ycyc7XG5pbXBvcnQgRmF2b3JpdGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXZvcml0ZSc7XG5pbXBvcnQgU2hhcmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TaGFyZSc7XG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0V4cGFuZE1vcmUnO1xuaW1wb3J0IE1vcmVWZXJ0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTW9yZVZlcnQnO1xuaW1wb3J0IEhpZ2hsaWdodE9mZkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hpZ2hsaWdodE9mZic7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcbiAgcm9vdDoge1xuICAgIG1heFdpZHRoOiAzNDUsXG4gIH0sXG4gIG1lZGlhOiB7XG4gICAgaGVpZ2h0OiAwLFxuICAgIHBhZGRpbmdUb3A6ICc1Ni4yNSUnLCAvLyAxNjo5XG4gIH0sXG4gIGV4cGFuZDoge1xuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScsXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgndHJhbnNmb3JtJywge1xuICAgICAgZHVyYXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmR1cmF0aW9uLnNob3J0ZXN0LFxuICAgIH0pLFxuICB9LFxuICBleHBhbmRPcGVuOiB7XG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDE4MGRlZyknLFxuICB9LFxuICBhdmF0YXI6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHB1cnBsZVs1MDBdLFxuICB9LFxufSkpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBRdWV1ZUNhcmQocHJvcHMpIHtcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xuICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3F1ZXVlZCwgc2V0UXVldWVkXSA9IHVzZVN0YXRlKFtdKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0UXVldWVkKHRoaXMucHJvcHMuYWxidW1RdWV1ZSlcbiAgfSlcbiAgXG5cbiAgY29uc3QgaGFuZGxlRXhwYW5kQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0RXhwYW5kZWQoIWV4cGFuZGVkKTtcbiAgfTtcblxuICBjb25zdCBkZWxldGVGcm9tUXVldWUgPSAoaWQpID0+IHtcbiAgICBheGlvcy5kZWxldGUoJy9hcGkvZGVsZXRlJywge1xuICAgICAgaWQ6IGlkXG4gICAgfSlcbiAgICAudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgLy8gdGhpcy5wcm9wcy5hbGJ1bVF1ZXVlLm1hcChhbGJ1bSA9PiAoXG4gICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICA8Q2FyZEhlYWRlclxuICAgICAgICBhdmF0YXI9e1xuICAgICAgICAgIDxBdmF0YXIgYXJpYS1sYWJlbD1cInJlY2lwZVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5hdmF0YXJ9PlxuICAgICAgICAgICAgQWxiXG4gICAgICAgICAgPC9BdmF0YXI+XG4gICAgICAgIH1cbiAgICAgICAgYWN0aW9uPXtcbiAgICAgICAgICA8SWNvbkJ1dHRvbiBhcmlhLWxhYmVsPVwic2V0dGluZ3NcIj5cbiAgICAgICAgICAgIDxNb3JlVmVydEljb24gLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIH1cbiAgICAgICAgdGl0bGU9e3RoaXMucHJvcHMuYWxidW1RdWV1ZS5hbGJ1bS5hbGJ1bS5uYW1lfVxuICAgICAgICBzdWJoZWFkZXI9e3RoaXMucHJvcHMuYWxidW1RdWV1ZS5hbGJ1bS5hbGJ1bS5hcnRpc3R9XG4gICAgICAvPlxuICAgICAgPENhcmRNZWRpYVxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XG4gICAgICAgIGltYWdlPVwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tL3JhbmRvbVwiXG4gICAgICAgIHRpdGxlPVwiYWxidW0gb3IgTVZcIlxuICAgICAgLz5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICBcbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgICA8Q2FyZEFjdGlvbnMgZGlzYWJsZVNwYWNpbmc+XG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJhZGQgdG8gZmF2b3JpdGVzXCI+XG4gICAgICAgICAgPEZhdm9yaXRlSWNvbiAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDxJY29uQnV0dG9uIGFyaWEtbGFiZWw9XCJyZW1vdmVcIj5cbiAgICAgICAgICA8SGlnaGxpZ2h0T2ZmSWNvbiBvbkNsaWNrPXsoKSA9PiBkZWxldGVGcm9tUXVldWUoKX0vPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDxJY29uQnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuZXhwYW5kLCB7XG4gICAgICAgICAgICBbY2xhc3Nlcy5leHBhbmRPcGVuXTogZXhwYW5kZWQsXG4gICAgICAgICAgfSl9XG4gICAgICAgICAgb25DbGljaz17aGFuZGxlRXhwYW5kQ2xpY2t9XG4gICAgICAgICAgYXJpYS1leHBhbmRlZD17ZXhwYW5kZWR9XG4gICAgICAgICAgYXJpYS1sYWJlbD1cInNob3cgbW9yZVwiXG4gICAgICAgID5cbiAgICAgICAgICA8RXhwYW5kTW9yZUljb24gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgPC9DYXJkQWN0aW9ucz5cbiAgICAgIDxDb2xsYXBzZSBpbj17ZXhwYW5kZWR9IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cbiAgICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgyXCI+XG4gICAgICAgICAgICBDb21tZW50c1xuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICA8VHlwb2dyYXBoeSBwYXJhZ3JhcGg+XG4gICAgICAgICAgVGhpcyBpcyB3aGVyZSBjb21tZW50cyBvbiBhbGJ1bXMgb3IgTVYncyB3aWxsIGdvXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIFxuICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgPC9Db2xsYXBzZT5cbiAgICA8L0NhcmQ+XG4gICAgLy8gKSlcbiAgICBcbiAgKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/QueueCard.js\n");

/***/ })

})