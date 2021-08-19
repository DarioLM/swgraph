"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/common/HeroCarousel/index.tsx":
/*!**************************************************!*\
  !*** ./components/common/HeroCarousel/index.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();



var HeroCarousel = function HeroCarousel(_ref) {
  _s();

  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      indexHero = _useState[0],
      setIndexHero = _useState[1];

  console.log(children);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var interval = setInterval(function () {
      return setIndexHero(function (iH) {
        return (iH + 1) % children.length;
      });
    }, 5000);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: children[indexHero]
  }, void 0, false);
};

_s(HeroCarousel, "Ih5LC0ehXMaK/lx+QSzIlQn2NtE=");

_c = HeroCarousel;
/* harmony default export */ __webpack_exports__["default"] = (HeroCarousel);

var _c;

$RefreshReg$(_c, "HeroCarousel");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYzcwYWMwMjY5MGMwZTFhODRiZjAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQU1BLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQXFDO0FBQUE7O0FBQUEsTUFBbENDLFFBQWtDLFFBQWxDQSxRQUFrQzs7QUFBQSxrQkFDdEJILCtDQUFRLENBQUMsQ0FBRCxDQURjO0FBQUEsTUFDakRJLFNBRGlEO0FBQUEsTUFDdENDLFlBRHNDOztBQUV4REMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVo7QUFDQUYsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTU8sUUFBUSxHQUFHQyxXQUFXLENBQUM7QUFBQSxhQUFNSixZQUFZLENBQUMsVUFBQUssRUFBRTtBQUFBLGVBQUksQ0FBQ0EsRUFBRSxHQUFHLENBQU4sSUFBV1AsUUFBUSxDQUFDUSxNQUF4QjtBQUFBLE9BQUgsQ0FBbEI7QUFBQSxLQUFELEVBQXVELElBQXZELENBQTVCO0FBQ0EsV0FBTztBQUFBLGFBQU1DLGFBQWEsQ0FBQ0osUUFBRCxDQUFuQjtBQUFBLEtBQVA7QUFDRCxHQUhRLEVBR04sRUFITSxDQUFUO0FBS0Esc0JBQU87QUFBQSxjQUFHTCxRQUFRLENBQUNDLFNBQUQ7QUFBWCxtQkFBUDtBQUNELENBVEQ7O0dBQU1GOztLQUFBQTtBQVdOLCtEQUFlQSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbW9uL0hlcm9DYXJvdXNlbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgUmVhY3RFbGVtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgSGVyb0Nhcm91c2VsUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnRbXVxyXG59XHJcblxyXG5jb25zdCBIZXJvQ2Fyb3VzZWwgPSAoeyBjaGlsZHJlbiB9OiBIZXJvQ2Fyb3VzZWxQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtpbmRleEhlcm8sIHNldEluZGV4SGVyb10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zb2xlLmxvZyhjaGlsZHJlbilcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiBzZXRJbmRleEhlcm8oaUggPT4gKGlIICsgMSkgJSBjaGlsZHJlbi5sZW5ndGgpLCA1MDAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gPD57Y2hpbGRyZW5baW5kZXhIZXJvXX08Lz47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQ2Fyb3VzZWw7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlcm9DYXJvdXNlbCIsImNoaWxkcmVuIiwiaW5kZXhIZXJvIiwic2V0SW5kZXhIZXJvIiwiY29uc29sZSIsImxvZyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJpSCIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiXSwic291cmNlUm9vdCI6IiJ9