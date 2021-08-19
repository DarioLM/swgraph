"use strict";
self["webpackHotUpdate_N_E"]("pages/characters",{

/***/ "./components/characters/index.tsx":
/*!*****************************************!*\
  !*** ./components/characters/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Dar_o_Desktop_swgraph_client_swgraph_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _characters_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters.graphql */ "./components/characters/characters.graphql");
/* harmony import */ var _characters_graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_characters_graphql__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Dar\xEDo\\Desktop\\swgraph\\client\\swgraph\\components\\characters\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





var Characters = function Characters() {
  _s();

  var _characters$list;

  var _useQuery = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery)((_characters_graphql__WEBPACK_IMPORTED_MODULE_3___default()), {
    variables: {
      limit: 10,
      after: ""
    }
  }),
      data = _useQuery.data,
      loading = _useQuery.loading,
      error = _useQuery.error,
      fetchMore = _useQuery.fetchMore;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({
    list: [],
    nextCursor: ""
  }),
      characters = _useState[0],
      setCharacters = _useState[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    var _data$allPeople, _data$allPeople2, _data$allPeople2$page;

    return setCharacters({
      list: data === null || data === void 0 ? void 0 : (_data$allPeople = data.allPeople) === null || _data$allPeople === void 0 ? void 0 : _data$allPeople.people,
      nextCursor: data === null || data === void 0 ? void 0 : (_data$allPeople2 = data.allPeople) === null || _data$allPeople2 === void 0 ? void 0 : (_data$allPeople2$page = _data$allPeople2.pageInfo) === null || _data$allPeople2$page === void 0 ? void 0 : _data$allPeople2$page.endCursor
    });
  }, [data]);
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: "Loading"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 23
  }, _this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: " Error "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 21
  }, _this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "main_characters",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: "Characters"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), characters.nextCursor && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      onClick: function onClick() {
        return fetchMore({
          variables: {
            after: characters.nextCursor
          }
        }).then(function (_ref) {
          var data = _ref.data;
          return setCharacters(function (characters) {
            return {
              list: [].concat((0,C_Users_Dar_o_Desktop_swgraph_client_swgraph_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(characters.list), (0,C_Users_Dar_o_Desktop_swgraph_client_swgraph_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data.allPeople.people)),
              nextCursor: data.allPeople.pageInfo.hasNextPage ? data.allPeople.pageInfo.endCursor : ""
            };
          });
        });
      },
      children: "Get more"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 33
    }, _this), "Characters: ", characters === null || characters === void 0 ? void 0 : (_characters$list = characters.list) === null || _characters$list === void 0 ? void 0 : _characters$list.map(function (character) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: character.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 55
      }, _this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_s(Characters, "6Gu7nj0sEX0eAr8smiW3ZhD06UM=", false, function () {
  return [_apollo_client__WEBPACK_IMPORTED_MODULE_4__.useQuery];
});

_c = Characters;
/* harmony default export */ __webpack_exports__["default"] = (Characters);

var _c;

$RefreshReg$(_c, "Characters");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcmFjdGVycy5jOTE4YTM0MWYwN2FkNGQyYjYxOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUtBLElBQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFBQTs7QUFBQSxrQkFDcUJELHdEQUFRLENBQUNELDREQUFELEVBQXVCO0FBQUVHLElBQUFBLFNBQVMsRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhQyxNQUFBQSxLQUFLLEVBQUU7QUFBcEI7QUFBYixHQUF2QixDQUQ3QjtBQUFBLE1BQ2ZDLElBRGUsYUFDZkEsSUFEZTtBQUFBLE1BQ1RDLE9BRFMsYUFDVEEsT0FEUztBQUFBLE1BQ0FDLEtBREEsYUFDQUEsS0FEQTtBQUFBLE1BQ09DLFNBRFAsYUFDT0EsU0FEUDs7QUFBQSxrQkFFYVYsK0NBQVEsQ0FBQztBQUFFVyxJQUFBQSxJQUFJLEVBQUUsRUFBUjtBQUFZQyxJQUFBQSxVQUFVLEVBQUU7QUFBeEIsR0FBRCxDQUZyQjtBQUFBLE1BRWhCQyxVQUZnQjtBQUFBLE1BRUpDLGFBRkk7O0FBR3ZCZixFQUFBQSxnREFBUyxDQUFDO0FBQUE7O0FBQUEsV0FBTWUsYUFBYSxDQUFDO0FBQUVILE1BQUFBLElBQUksRUFBRUosSUFBRixhQUFFQSxJQUFGLDBDQUFFQSxJQUFJLENBQUVRLFNBQVIsb0RBQUUsZ0JBQWlCQyxNQUF6QjtBQUFpQ0osTUFBQUEsVUFBVSxFQUFFTCxJQUFGLGFBQUVBLElBQUYsMkNBQUVBLElBQUksQ0FBRVEsU0FBUiw4RUFBRSxpQkFBaUJFLFFBQW5CLDBEQUFFLHNCQUEyQkM7QUFBeEUsS0FBRCxDQUFuQjtBQUFBLEdBQUQsRUFBMkcsQ0FBQ1gsSUFBRCxDQUEzRyxDQUFUO0FBQ0EsTUFBSUMsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNYLHNCQUNFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHSSxVQUFVLENBQUNELFVBQVgsaUJBQXlCO0FBQ3hCLGFBQU8sRUFBRTtBQUFBLGVBQU1GLFNBQVMsQ0FBQztBQUFFTixVQUFBQSxTQUFTLEVBQUU7QUFBRUUsWUFBQUEsS0FBSyxFQUFFTyxVQUFVLENBQUNEO0FBQXBCO0FBQWIsU0FBRCxDQUFULENBQ1pPLElBRFksQ0FDUDtBQUFBLGNBQUdaLElBQUgsUUFBR0EsSUFBSDtBQUFBLGlCQUFjTyxhQUFhLENBQUMsVUFBQUQsVUFBVTtBQUFBLG1CQUFLO0FBQUVGLGNBQUFBLElBQUksNktBQU1FLFVBQVUsQ0FBQ0YsSUFBakIsb0tBQTBCSixJQUFJLENBQUNRLFNBQUwsQ0FBZUMsTUFBekMsRUFBTjtBQUF3REosY0FBQUEsVUFBVSxFQUFFTCxJQUFJLENBQUNRLFNBQUwsQ0FBZUUsUUFBZixDQUF3QkcsV0FBeEIsR0FBc0NiLElBQUksQ0FBQ1EsU0FBTCxDQUFlRSxRQUFmLENBQXdCQyxTQUE5RCxHQUEwRTtBQUE5SSxhQUFMO0FBQUEsV0FBWCxDQUEzQjtBQUFBLFNBRE8sQ0FBTjtBQUFBLE9BRGU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGNUIsa0JBU2VMLFVBVGYsYUFTZUEsVUFUZiwyQ0FTZUEsVUFBVSxDQUFFRixJQVQzQixxREFTZSxpQkFBa0JVLEdBQWxCLENBQXNCLFVBQUFDLFNBQVM7QUFBQSwwQkFBSTtBQUFBLGtCQUFNQSxTQUFTLENBQUNDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBSjtBQUFBLEtBQS9CLENBVGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQW5CRDs7R0FBTXBCO1VBQ3dDRDs7O0tBRHhDQztBQXFCTiwrREFBZUEsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NoYXJhY3RlcnMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBRVUVSWV9BTExfQ0hBUkFDVEVSUyBmcm9tIFwiLi9jaGFyYWN0ZXJzLmdyYXBocWxcIjtcclxuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcclxuaW1wb3J0IHsgQ2hhcmFjdGVycyBhcyBJQ2hhcmFjdGVycywgQ2hhcmFjdGVyIH0gZnJvbSBcIi4vY2hhcmFjdGVyc1wiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NoYXJhY3RlcnMubW9kdWxlLmNzc1wiO1xyXG5cclxuXHJcbmNvbnN0IENoYXJhY3RlcnMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBkYXRhLCBsb2FkaW5nLCBlcnJvciwgZmV0Y2hNb3JlIH0gPSB1c2VRdWVyeShRVUVSWV9BTExfQ0hBUkFDVEVSUywgeyB2YXJpYWJsZXM6IHsgbGltaXQ6IDEwLCBhZnRlcjogXCJcIiB9IH0pO1xyXG4gIGNvbnN0IFtjaGFyYWN0ZXJzLCBzZXRDaGFyYWN0ZXJzXSA9IHVzZVN0YXRlKHsgbGlzdDogW10sIG5leHRDdXJzb3I6IFwiXCIgfSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHNldENoYXJhY3RlcnMoeyBsaXN0OiBkYXRhPy5hbGxQZW9wbGU/LnBlb3BsZSwgbmV4dEN1cnNvcjogZGF0YT8uYWxsUGVvcGxlPy5wYWdlSW5mbz8uZW5kQ3Vyc29yIH0pLCBbZGF0YV0pO1xyXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nPC9kaXY+XHJcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj4gRXJyb3IgPC9kaXY+XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9jaGFyYWN0ZXJzXCI+XHJcbiAgICAgIDxoMT5DaGFyYWN0ZXJzPC9oMT5cclxuICAgICAge2NoYXJhY3RlcnMubmV4dEN1cnNvciAmJiA8ZGl2XHJcbiAgICAgICAgb25DbGljaz17KCkgPT4gZmV0Y2hNb3JlKHsgdmFyaWFibGVzOiB7IGFmdGVyOiBjaGFyYWN0ZXJzLm5leHRDdXJzb3IgfSB9KVxyXG4gICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiBzZXRDaGFyYWN0ZXJzKGNoYXJhY3RlcnMgPT4gKHsgbGlzdDogWy4uLmNoYXJhY3RlcnMubGlzdCwgLi4uZGF0YS5hbGxQZW9wbGUucGVvcGxlXSwgbmV4dEN1cnNvcjogZGF0YS5hbGxQZW9wbGUucGFnZUluZm8uaGFzTmV4dFBhZ2UgPyBkYXRhLmFsbFBlb3BsZS5wYWdlSW5mby5lbmRDdXJzb3IgOiBcIlwiIH0pKSl9XHJcbiAgICAgID5cclxuICAgICAgICBHZXQgbW9yZVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgICBDaGFyYWN0ZXJzOiB7Y2hhcmFjdGVycz8ubGlzdD8ubWFwKGNoYXJhY3RlciA9PiA8ZGl2PntjaGFyYWN0ZXIubmFtZX08L2Rpdj4pfVxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hhcmFjdGVyczsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlFVRVJZX0FMTF9DSEFSQUNURVJTIiwidXNlUXVlcnkiLCJDaGFyYWN0ZXJzIiwidmFyaWFibGVzIiwibGltaXQiLCJhZnRlciIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJmZXRjaE1vcmUiLCJsaXN0IiwibmV4dEN1cnNvciIsImNoYXJhY3RlcnMiLCJzZXRDaGFyYWN0ZXJzIiwiYWxsUGVvcGxlIiwicGVvcGxlIiwicGFnZUluZm8iLCJlbmRDdXJzb3IiLCJ0aGVuIiwiaGFzTmV4dFBhZ2UiLCJtYXAiLCJjaGFyYWN0ZXIiLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==