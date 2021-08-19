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

  console.log(children);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var interval = setInterval(function () {
      return setIndexHero(function (iH) {
        return (iH + 1) % children.length;
      });
    }, 5000);
    return function () {
      return clearInterval(interval);
    };
  }, []);
  return children[indexHero];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTgzNWY0NjI1NjcxNzk0OGM0N2QuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFNQSxJQUFNRSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFxQztBQUFBOztBQUFBLE1BQWxDQyxRQUFrQyxRQUFsQ0EsUUFBa0M7O0FBQUEsa0JBQ3RCSCwrQ0FBUSxDQUFDLENBQUQsQ0FEYztBQUFBLE1BQ2pESSxTQURpRDtBQUFBLE1BQ3RDQyxZQURzQzs7QUFFeERDLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBQ0FGLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1PLFFBQVEsR0FBR0MsV0FBVyxDQUFDO0FBQUEsYUFBTUosWUFBWSxDQUFDLFVBQUFLLEVBQUU7QUFBQSxlQUFJLENBQUNBLEVBQUUsR0FBRyxDQUFOLElBQVdQLFFBQVEsQ0FBQ1EsTUFBeEI7QUFBQSxPQUFILENBQWxCO0FBQUEsS0FBRCxFQUF1RCxJQUF2RCxDQUE1QjtBQUNBLFdBQU87QUFBQSxhQUFNQyxhQUFhLENBQUNKLFFBQUQsQ0FBbkI7QUFBQSxLQUFQO0FBQ0QsR0FIUSxFQUdOLEVBSE0sQ0FBVDtBQUtBLFNBQU9MLFFBQVEsQ0FBQ0MsU0FBRCxDQUFmO0FBQ0QsQ0FURDs7R0FBTUY7O0tBQUFBO0FBV04sK0RBQWVBLFlBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tb24vSGVyb0Nhcm91c2VsL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5pbnRlcmZhY2UgSGVyb0Nhcm91c2VsUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBIVE1MSW1hZ2VFbGVtZW50W11cclxufVxyXG5cclxuY29uc3QgSGVyb0Nhcm91c2VsID0gKHsgY2hpbGRyZW4gfTogSGVyb0Nhcm91c2VsUHJvcHMpID0+IHtcclxuICBjb25zdCBbaW5kZXhIZXJvLCBzZXRJbmRleEhlcm9dID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc29sZS5sb2coY2hpbGRyZW4pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4gc2V0SW5kZXhIZXJvKGlIID0+IChpSCArIDEpICUgY2hpbGRyZW4ubGVuZ3RoKSwgNTAwMCk7XHJcbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbClcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIGNoaWxkcmVuW2luZGV4SGVyb107XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQ2Fyb3VzZWw7XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkhlcm9DYXJvdXNlbCIsImNoaWxkcmVuIiwiaW5kZXhIZXJvIiwic2V0SW5kZXhIZXJvIiwiY29uc29sZSIsImxvZyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJpSCIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiXSwic291cmNlUm9vdCI6IiJ9