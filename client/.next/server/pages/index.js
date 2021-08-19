(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/common/HeroCarousel/index.tsx":
/*!**************************************************!*\
  !*** ./components/common/HeroCarousel/index.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Herocarousel_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Herocarousel.module.css */ "./components/common/HeroCarousel/Herocarousel.module.css");
/* harmony import */ var _Herocarousel_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Herocarousel_module_css__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\Users\\Dar\xEDo\\Desktop\\swgraph\\client\\swgraph\\components\\common\\HeroCarousel\\index.tsx";



const HeroCarousel = ({
  children
}) => {
  const {
    0: indexHero,
    1: setIndexHero
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  console.log(children);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const interval = setInterval(() => setIndexHero(iH => (iH + 1) % children.length), 5000);
    return () => clearInterval(interval);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Herocarousel_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),
    children: children[indexHero]
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroCarousel);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_common_HeroCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/common/HeroCarousel */ "./components/common/HeroCarousel/index.tsx");

var _jsxFileName = "C:\\Users\\Dar\xEDo\\Desktop\\swgraph\\client\\swgraph\\pages\\index.tsx";


const Home = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_HeroCarousel__WEBPACK_IMPORTED_MODULE_1__.default, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: "assets/neon_starwars.jpg",
    width: "100%",
    height: "100%"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: "assets/hero_4.jpg",
    width: "100%",
    height: "100%"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
    src: "assets/neon_imperial.jpg",
    width: "100%",
    height: "100%"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./components/common/HeroCarousel/Herocarousel.module.css":
/*!****************************************************************!*\
  !*** ./components/common/HeroCarousel/Herocarousel.module.css ***!
  \****************************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Herocarousel_main__2mOWU"
};


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBTUEsTUFBTUcsWUFBWSxHQUFHLENBQUM7QUFBRUMsRUFBQUE7QUFBRixDQUFELEtBQXFDO0FBQ3hELFFBQU07QUFBQSxPQUFDQyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qk4sK0NBQVEsQ0FBQyxDQUFELENBQTFDO0FBQ0FPLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixRQUFaO0FBQ0FILEVBQUFBLGdEQUFTLENBQUMsTUFBTTtBQUNkLFVBQU1RLFFBQVEsR0FBR0MsV0FBVyxDQUFDLE1BQU1KLFlBQVksQ0FBQ0ssRUFBRSxJQUFJLENBQUNBLEVBQUUsR0FBRyxDQUFOLElBQVdQLFFBQVEsQ0FBQ1EsTUFBM0IsQ0FBbkIsRUFBdUQsSUFBdkQsQ0FBNUI7QUFDQSxXQUFPLE1BQU1DLGFBQWEsQ0FBQ0osUUFBRCxDQUExQjtBQUNELEdBSFEsRUFHTixFQUhNLENBQVQ7QUFLQSxzQkFBTztBQUFLLGFBQVMsRUFBRVAsc0VBQWhCO0FBQUEsY0FBOEJFLFFBQVEsQ0FBQ0MsU0FBRDtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVA7QUFDRCxDQVREOztBQVdBLGlFQUFlRixZQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTs7QUFHQSxNQUFNWSxJQUFjLEdBQUcsbUJBQ3JCLDhEQUFDLG9FQUFEO0FBQUEsMEJBQ0U7QUFDRSxPQUFHLEVBQUMsMEJBRE47QUFFRSxTQUFLLEVBQUMsTUFGUjtBQUdFLFVBQU0sRUFBQztBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQU1FO0FBQ0UsT0FBRyxFQUFDLG1CQUROO0FBRUUsU0FBSyxFQUFDLE1BRlI7QUFHRSxVQUFNLEVBQUM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTkYsZUFXRTtBQUNFLE9BQUcsRUFBQywwQkFETjtBQUVFLFNBQUssRUFBQyxNQUZSO0FBR0UsVUFBTSxFQUFDO0FBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGOztBQW1CQSxpRUFBZUEsSUFBZjs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zd2dyYXBoLy4vY29tcG9uZW50cy9jb21tb24vSGVyb0Nhcm91c2VsL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zd2dyYXBoLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovL3N3Z3JhcGgvLi9jb21wb25lbnRzL2NvbW1vbi9IZXJvQ2Fyb3VzZWwvSGVyb2Nhcm91c2VsLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vc3dncmFwaC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc3dncmFwaC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIFJlYWN0RWxlbWVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0hlcm9jYXJvdXNlbC5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbnRlcmZhY2UgSGVyb0Nhcm91c2VsUHJvcHMge1xyXG4gIGNoaWxkcmVuOiBSZWFjdEVsZW1lbnRbXVxyXG59XHJcblxyXG5jb25zdCBIZXJvQ2Fyb3VzZWwgPSAoeyBjaGlsZHJlbiB9OiBIZXJvQ2Fyb3VzZWxQcm9wcykgPT4ge1xyXG4gIGNvbnN0IFtpbmRleEhlcm8sIHNldEluZGV4SGVyb10gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zb2xlLmxvZyhjaGlsZHJlbilcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiBzZXRJbmRleEhlcm8oaUggPT4gKGlIICsgMSkgJSBjaGlsZHJlbi5sZW5ndGgpLCA1MDAwKTtcclxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT57Y2hpbGRyZW5baW5kZXhIZXJvXX08L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZXJvQ2Fyb3VzZWw7XHJcbiIsImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlcm9DYXJvdXNlbCBmcm9tIFwiLi4vY29tcG9uZW50cy9jb21tb24vSGVyb0Nhcm91c2VsXCI7XG5cblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PlxuICA8SGVyb0Nhcm91c2VsPlxuICAgIDxpbWdcbiAgICAgIHNyYz1cImFzc2V0cy9uZW9uX3N0YXJ3YXJzLmpwZ1wiXG4gICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgLz5cbiAgICA8aW1nXG4gICAgICBzcmM9XCJhc3NldHMvaGVyb180LmpwZ1wiXG4gICAgICB3aWR0aD1cIjEwMCVcIlxuICAgICAgaGVpZ2h0PVwiMTAwJVwiXG4gICAgLz5cbiAgICA8aW1nXG4gICAgICBzcmM9XCJhc3NldHMvbmVvbl9pbXBlcmlhbC5qcGdcIlxuICAgICAgd2lkdGg9XCIxMDAlXCJcbiAgICAgIGhlaWdodD1cIjEwMCVcIlxuICAgIC8+XG4gIDwvSGVyb0Nhcm91c2VsPjtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcIkhlcm9jYXJvdXNlbF9tYWluX18ybU9XVVwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsIkhlcm9DYXJvdXNlbCIsImNoaWxkcmVuIiwiaW5kZXhIZXJvIiwic2V0SW5kZXhIZXJvIiwiY29uc29sZSIsImxvZyIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJpSCIsImxlbmd0aCIsImNsZWFySW50ZXJ2YWwiLCJtYWluIiwiSG9tZSJdLCJzb3VyY2VSb290IjoiIn0=