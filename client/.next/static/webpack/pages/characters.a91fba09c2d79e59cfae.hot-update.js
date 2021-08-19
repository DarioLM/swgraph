self["webpackHotUpdate_N_E"]("pages/characters",{

/***/ "./components/characters/index.tsx":
/*!*****************************************!*\
  !*** ./components/characters/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Dar_o_Desktop_swgraph_client_swgraph_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _characters_graphql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./characters.graphql */ "./components/characters/characters.graphql");
/* harmony import */ var _characters_graphql__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_characters_graphql__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var _characters_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./characters.module.css */ "./components/characters/characters.module.css");
/* harmony import */ var _characters_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_characters_module_css__WEBPACK_IMPORTED_MODULE_5__);
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
    className: (_characters_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: "Characters"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this), characters.nextCursor && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_characters_module_css__WEBPACK_IMPORTED_MODULE_5___default().list),
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
      lineNumber: 18,
      columnNumber: 9
    }, _this), characters === null || characters === void 0 ? void 0 : (_characters$list = characters.list) === null || _characters$list === void 0 ? void 0 : _characters$list.map(function (character) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        children: character.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 43
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


/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/characters/characters.module.css":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[3].oneOf[2].use[2]!./components/characters/characters.module.css ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".characters_main__3MWXF {\r\n  color: white;\r\n}\r\n\r\n.characters_list__Iuzfb {\r\n  display: -moz-box;\r\n  display: flex;\r\n  grid-gap: 15px;\r\n  gap: 15px;\r\n}\r\n", "",{"version":3,"sources":["webpack://components/characters/characters.module.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;;AAEA;EACE,iBAAa;EAAb,aAAa;EACb,cAAS;EAAT,SAAS;AACX","sourcesContent":[".main {\r\n  color: white;\r\n}\r\n\r\n.list {\r\n  display: flex;\r\n  gap: 15px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"main": "characters_main__3MWXF",
	"list": "characters_list__Iuzfb"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2hhcmFjdGVycy5hOTFmYmEwOWMyZDc5ZTU5Y2ZhZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQSxJQUFNTSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ3FCRix3REFBUSxDQUFDRCw0REFBRCxFQUF1QjtBQUFFSSxJQUFBQSxTQUFTLEVBQUU7QUFBRUMsTUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUMsTUFBQUEsS0FBSyxFQUFFO0FBQXBCO0FBQWIsR0FBdkIsQ0FEN0I7QUFBQSxNQUNmQyxJQURlLGFBQ2ZBLElBRGU7QUFBQSxNQUNUQyxPQURTLGFBQ1RBLE9BRFM7QUFBQSxNQUNBQyxLQURBLGFBQ0FBLEtBREE7QUFBQSxNQUNPQyxTQURQLGFBQ09BLFNBRFA7O0FBQUEsa0JBRWFYLCtDQUFRLENBQUM7QUFBRVksSUFBQUEsSUFBSSxFQUFFLEVBQVI7QUFBWUMsSUFBQUEsVUFBVSxFQUFFO0FBQXhCLEdBQUQsQ0FGckI7QUFBQSxNQUVoQkMsVUFGZ0I7QUFBQSxNQUVKQyxhQUZJOztBQUd2QmhCLEVBQUFBLGdEQUFTLENBQUM7QUFBQTs7QUFBQSxXQUFNZ0IsYUFBYSxDQUFDO0FBQUVILE1BQUFBLElBQUksRUFBRUosSUFBRixhQUFFQSxJQUFGLDBDQUFFQSxJQUFJLENBQUVRLFNBQVIsb0RBQUUsZ0JBQWlCQyxNQUF6QjtBQUFpQ0osTUFBQUEsVUFBVSxFQUFFTCxJQUFGLGFBQUVBLElBQUYsMkNBQUVBLElBQUksQ0FBRVEsU0FBUiw4RUFBRSxpQkFBaUJFLFFBQW5CLDBEQUFFLHNCQUEyQkM7QUFBeEUsS0FBRCxDQUFuQjtBQUFBLEdBQUQsRUFBMkcsQ0FBQ1gsSUFBRCxDQUEzRyxDQUFUO0FBQ0EsTUFBSUMsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFDYixNQUFJQyxLQUFKLEVBQVcsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNYLHNCQUNFO0FBQUssYUFBUyxFQUFFUCxvRUFBaEI7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBRUdXLFVBQVUsQ0FBQ0QsVUFBWCxpQkFDQztBQUNFLGVBQVMsRUFBRVYsb0VBRGI7QUFFRSxhQUFPLEVBQUU7QUFBQSxlQUFNUSxTQUFTLENBQUM7QUFBRU4sVUFBQUEsU0FBUyxFQUFFO0FBQUVFLFlBQUFBLEtBQUssRUFBRU8sVUFBVSxDQUFDRDtBQUFwQjtBQUFiLFNBQUQsQ0FBVCxDQUNaUSxJQURZLENBQ1A7QUFBQSxjQUFHYixJQUFILFFBQUdBLElBQUg7QUFBQSxpQkFBY08sYUFBYSxDQUFDLFVBQUFELFVBQVU7QUFBQSxtQkFBSztBQUFFRixjQUFBQSxJQUFJLDZLQUFNRSxVQUFVLENBQUNGLElBQWpCLG9LQUEwQkosSUFBSSxDQUFDUSxTQUFMLENBQWVDLE1BQXpDLEVBQU47QUFBd0RKLGNBQUFBLFVBQVUsRUFBRUwsSUFBSSxDQUFDUSxTQUFMLENBQWVFLFFBQWYsQ0FBd0JJLFdBQXhCLEdBQXNDZCxJQUFJLENBQUNRLFNBQUwsQ0FBZUUsUUFBZixDQUF3QkMsU0FBOUQsR0FBMEU7QUFBOUksYUFBTDtBQUFBLFdBQVgsQ0FBM0I7QUFBQSxTQURPLENBQU47QUFBQSxPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosRUFXR0wsVUFYSCxhQVdHQSxVQVhILDJDQVdHQSxVQUFVLENBQUVGLElBWGYscURBV0csaUJBQWtCVyxHQUFsQixDQUFzQixVQUFBQyxTQUFTO0FBQUEsMEJBQUk7QUFBQSxrQkFBTUEsU0FBUyxDQUFDQztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQUo7QUFBQSxLQUEvQixDQVhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZUQsQ0FyQkQ7O0dBQU1yQjtVQUN3Q0Y7OztLQUR4Q0U7QUF1Qk4sK0RBQWVBLFVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5QkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxvSEFBeUQ7QUFDbkc7QUFDQTtBQUNBLG1FQUFtRSxtQkFBbUIsS0FBSyxpQ0FBaUMsd0JBQXdCLG9CQUFvQixxQkFBcUIsZ0JBQWdCLEtBQUssV0FBVyw0R0FBNEcsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxnQ0FBZ0MsbUJBQW1CLEtBQUssZUFBZSxvQkFBb0IsZ0JBQWdCLEtBQUssdUJBQXVCO0FBQzlnQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFyYWN0ZXJzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jaGFyYWN0ZXJzL2NoYXJhY3RlcnMubW9kdWxlLmNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUVVFUllfQUxMX0NIQVJBQ1RFUlMgZnJvbSBcIi4vY2hhcmFjdGVycy5ncmFwaHFsXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IENoYXJhY3RlcnMgYXMgSUNoYXJhY3RlcnMsIENoYXJhY3RlciB9IGZyb20gXCIuL2NoYXJhY3RlcnNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jaGFyYWN0ZXJzLm1vZHVsZS5jc3NcIjtcclxuXHJcblxyXG5jb25zdCBDaGFyYWN0ZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IsIGZldGNoTW9yZSB9ID0gdXNlUXVlcnkoUVVFUllfQUxMX0NIQVJBQ1RFUlMsIHsgdmFyaWFibGVzOiB7IGxpbWl0OiAxMCwgYWZ0ZXI6IFwiXCIgfSB9KTtcclxuICBjb25zdCBbY2hhcmFjdGVycywgc2V0Q2hhcmFjdGVyc10gPSB1c2VTdGF0ZSh7IGxpc3Q6IFtdLCBuZXh0Q3Vyc29yOiBcIlwiIH0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRDaGFyYWN0ZXJzKHsgbGlzdDogZGF0YT8uYWxsUGVvcGxlPy5wZW9wbGUsIG5leHRDdXJzb3I6IGRhdGE/LmFsbFBlb3BsZT8ucGFnZUluZm8/LmVuZEN1cnNvciB9KSwgW2RhdGFdKTtcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+IEVycm9yIDwvZGl2PlxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8aDE+Q2hhcmFjdGVyczwvaDE+XHJcbiAgICAgIHtjaGFyYWN0ZXJzLm5leHRDdXJzb3IgJiZcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5saXN0fVxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gZmV0Y2hNb3JlKHsgdmFyaWFibGVzOiB7IGFmdGVyOiBjaGFyYWN0ZXJzLm5leHRDdXJzb3IgfSB9KVxyXG4gICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHNldENoYXJhY3RlcnMoY2hhcmFjdGVycyA9PiAoeyBsaXN0OiBbLi4uY2hhcmFjdGVycy5saXN0LCAuLi5kYXRhLmFsbFBlb3BsZS5wZW9wbGVdLCBuZXh0Q3Vyc29yOiBkYXRhLmFsbFBlb3BsZS5wYWdlSW5mby5oYXNOZXh0UGFnZSA/IGRhdGEuYWxsUGVvcGxlLnBhZ2VJbmZvLmVuZEN1cnNvciA6IFwiXCIgfSkpKX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBHZXQgbW9yZVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICB9XHJcbiAgICAgIHtjaGFyYWN0ZXJzPy5saXN0Py5tYXAoY2hhcmFjdGVyID0+IDxkaXY+e2NoYXJhY3Rlci5uYW1lfTwvZGl2Pil9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJzOyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5jaGFyYWN0ZXJzX21haW5fXzNNV1hGIHtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmNoYXJhY3RlcnNfbGlzdF9fSXV6ZmIge1xcclxcbiAgZGlzcGxheTogLW1vei1ib3g7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ3JpZC1nYXA6IDE1cHg7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9jb21wb25lbnRzL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5tb2R1bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWE7RUFBYixhQUFhO0VBQ2IsY0FBUztFQUFULFNBQVM7QUFDWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWFpbiB7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxufVxcclxcblxcclxcbi5saXN0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcIm1haW5cIjogXCJjaGFyYWN0ZXJzX21haW5fXzNNV1hGXCIsXG5cdFwibGlzdFwiOiBcImNoYXJhY3RlcnNfbGlzdF9fSXV6ZmJcIlxufTtcbm1vZHVsZS5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlFVRVJZX0FMTF9DSEFSQUNURVJTIiwidXNlUXVlcnkiLCJzdHlsZXMiLCJDaGFyYWN0ZXJzIiwidmFyaWFibGVzIiwibGltaXQiLCJhZnRlciIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJmZXRjaE1vcmUiLCJsaXN0IiwibmV4dEN1cnNvciIsImNoYXJhY3RlcnMiLCJzZXRDaGFyYWN0ZXJzIiwiYWxsUGVvcGxlIiwicGVvcGxlIiwicGFnZUluZm8iLCJlbmRDdXJzb3IiLCJtYWluIiwidGhlbiIsImhhc05leHRQYWdlIiwibWFwIiwiY2hhcmFjdGVyIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=