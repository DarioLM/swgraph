"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/common/HeroCarousel/index.tsx":
/*!**************************************************!*\
  !*** ./components/common/HeroCarousel/index.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _s = $RefreshSig$();



var HeroCarousel = function HeroCarousel(_ref) {
  _s();

  var children = _ref.children;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      indexHero = _useState[0],
      setIndexHero = _useState[1];

  setInterval(function () {
    return setIndexHero(function (iH) {
      return (iH + 1) % children.length;
    });
  }, 500);
  return children[indexHero];
};

_s(HeroCarousel, "AnXCdRJJI3+pS7/whHd40d/NFh0=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNWQwMDY5Nzk1NGQ2YjA4MTJiZmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDSEYsK0NBQVEsQ0FBQyxDQUFELENBREw7QUFBQSxNQUM5QkcsU0FEOEI7QUFBQSxNQUNuQkMsWUFEbUI7O0FBRXJDQyxFQUFBQSxXQUFXLENBQUM7QUFBQSxXQUFNRCxZQUFZLENBQUMsVUFBQUUsRUFBRTtBQUFBLGFBQUksQ0FBQ0EsRUFBRSxHQUFHLENBQU4sSUFBV0osUUFBUSxDQUFDSyxNQUF4QjtBQUFBLEtBQUgsQ0FBbEI7QUFBQSxHQUFELEVBQXVELEdBQXZELENBQVg7QUFDQSxTQUFPTCxRQUFRLENBQUNDLFNBQUQsQ0FBZjtBQUNELENBSkQ7O0dBQU1GOztLQUFBQTtBQU1OLCtEQUFlQSxZQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY29tbW9uL0hlcm9DYXJvdXNlbC9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEhlcm9DYXJvdXNlbCA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbaW5kZXhIZXJvLCBzZXRJbmRleEhlcm9dID0gdXNlU3RhdGUoMCk7XHJcbiAgc2V0SW50ZXJ2YWwoKCkgPT4gc2V0SW5kZXhIZXJvKGlIID0+IChpSCArIDEpICUgY2hpbGRyZW4ubGVuZ3RoKSwgNTAwKTtcclxuICByZXR1cm4gY2hpbGRyZW5baW5kZXhIZXJvXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm9DYXJvdXNlbDtcclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSGVyb0Nhcm91c2VsIiwiY2hpbGRyZW4iLCJpbmRleEhlcm8iLCJzZXRJbmRleEhlcm8iLCJzZXRJbnRlcnZhbCIsImlIIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==