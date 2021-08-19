(() => {
var exports = {};
exports.id = "pages/characters";
exports.ids = ["pages/characters"];
exports.modules = {

/***/ "./components/characters/characters.graphql":
/*!**************************************************!*\
  !*** ./components/characters/characters.graphql ***!
  \**************************************************/
/***/ ((module) => {


    var doc = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getCharacters"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPeople"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"people"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"gender"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"homeworld"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"endCursor"},"arguments":[],"directives":[]}]}}]}}]}}],"loc":{"start":0,"end":269}};
    doc.loc.source = {"body":"query getCharacters($limit: Int, $after: String) {\r\n  allPeople(first: $limit, after: $after) {\r\n    people {\r\n      name\r\n      gender\r\n      homeworld {\r\n        name\r\n      }\r\n    }\r\n    totalCount\r\n    pageInfo {\r\n      hasNextPage\r\n      endCursor\r\n    }\r\n  }\r\n}\r\n","name":"GraphQL request","locationOffset":{"line":1,"column":1}};
  

    var names = {};
    function unique(defs) {
      return defs.filter(
        function(def) {
          if (def.kind !== 'FragmentDefinition') return true;
          var name = def.name.value
          if (names[name]) {
            return false;
          } else {
            names[name] = true;
            return true;
          }
        }
      )
    }
  

    // Collect any fragment/type references from a node, adding them to the refs Set
    function collectFragmentReferences(node, refs) {
      if (node.kind === "FragmentSpread") {
        refs.add(node.name.value);
      } else if (node.kind === "VariableDefinition") {
        var type = node.type;
        if (type.kind === "NamedType") {
          refs.add(type.name.value);
        }
      }

      if (node.selectionSet) {
        node.selectionSet.selections.forEach(function(selection) {
          collectFragmentReferences(selection, refs);
        });
      }

      if (node.variableDefinitions) {
        node.variableDefinitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }

      if (node.definitions) {
        node.definitions.forEach(function(def) {
          collectFragmentReferences(def, refs);
        });
      }
    }

    var definitionRefs = {};
    (function extractReferences() {
      doc.definitions.forEach(function(def) {
        if (def.name) {
          var refs = new Set();
          collectFragmentReferences(def, refs);
          definitionRefs[def.name.value] = refs;
        }
      });
    })();

    function findOperation(doc, name) {
      for (var i = 0; i < doc.definitions.length; i++) {
        var element = doc.definitions[i];
        if (element.name && element.name.value == name) {
          return element;
        }
      }
    }

    function oneQuery(doc, operationName) {
      // Copy the DocumentNode, but clear out the definitions
      var newDoc = {
        kind: doc.kind,
        definitions: [findOperation(doc, operationName)]
      };
      if (doc.hasOwnProperty("loc")) {
        newDoc.loc = doc.loc;
      }

      // Now, for the operation we're running, find any fragments referenced by
      // it or the fragments it references
      var opRefs = definitionRefs[operationName] || new Set();
      var allRefs = new Set();
      var newRefs = new Set();

      // IE 11 doesn't support "new Set(iterable)", so we add the members of opRefs to newRefs one by one
      opRefs.forEach(function(refName) {
        newRefs.add(refName);
      });

      while (newRefs.size > 0) {
        var prevRefs = newRefs;
        newRefs = new Set();

        prevRefs.forEach(function(refName) {
          if (!allRefs.has(refName)) {
            allRefs.add(refName);
            var childRefs = definitionRefs[refName] || new Set();
            childRefs.forEach(function(childRef) {
              newRefs.add(childRef);
            });
          }
        });
      }

      allRefs.forEach(function(refName) {
        var op = findOperation(doc, refName);
        if (op) {
          newDoc.definitions.push(op);
        }
      });

      return newDoc;
    }
    
    module.exports = doc;
    
        module.exports.getCharacters = oneQuery(doc, "getCharacters");
        


/***/ }),

/***/ "./components/characters/index.tsx":
/*!*****************************************!*\
  !*** ./components/characters/index.tsx ***!
  \*****************************************/
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
/* harmony import */ var _characters_graphql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./characters.graphql */ "./components/characters/characters.graphql");
/* harmony import */ var _characters_graphql__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_characters_graphql__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _characters_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./characters.module.css */ "./components/characters/characters.module.css");
/* harmony import */ var _characters_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_characters_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\Users\\Dar\xEDo\\Desktop\\swgraph\\client\\swgraph\\components\\characters\\index.tsx";





const Characters = () => {
  var _characters$list;

  const {
    data,
    loading,
    error,
    fetchMore
  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_3__.useQuery)((_characters_graphql__WEBPACK_IMPORTED_MODULE_2___default()), {
    variables: {
      limit: 10,
      after: ""
    }
  });
  const {
    0: characters,
    1: setCharacters
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    list: [],
    nextCursor: ""
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    var _data$allPeople, _data$allPeople2, _data$allPeople2$page;

    return setCharacters({
      list: data === null || data === void 0 ? void 0 : (_data$allPeople = data.allPeople) === null || _data$allPeople === void 0 ? void 0 : _data$allPeople.people,
      nextCursor: data === null || data === void 0 ? void 0 : (_data$allPeople2 = data.allPeople) === null || _data$allPeople2 === void 0 ? void 0 : (_data$allPeople2$page = _data$allPeople2.pageInfo) === null || _data$allPeople2$page === void 0 ? void 0 : _data$allPeople2$page.endCursor
    });
  }, [data]);
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: "Loading"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 23
  }, undefined);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: " Error "
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 21
  }, undefined);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_characters_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Characters"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_characters_module_css__WEBPACK_IMPORTED_MODULE_4___default().list),
      children: characters === null || characters === void 0 ? void 0 : (_characters$list = characters.list) === null || _characters$list === void 0 ? void 0 : _characters$list.map(character => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: "Name:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 14
          }, undefined), " ", character.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: "Gender:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 14
          }, undefined), " ", character.gender]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
            children: "Homeworld:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 14
          }, undefined), " ", character === null || character === void 0 ? void 0 : character.homeworld.name]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), characters.nextCursor && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_characters_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
      onClick: () => fetchMore({
        variables: {
          after: characters.nextCursor
        }
      }).then(({
        data
      }) => setCharacters(characters => ({
        list: [...characters.list, ...data.allPeople.people],
        nextCursor: data.allPeople.pageInfo.hasNextPage ? data.allPeople.pageInfo.endCursor : ""
      }))),
      children: "Load more"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Characters);

/***/ }),

/***/ "./pages/characters/index.tsx":
/*!************************************!*\
  !*** ./pages/characters/index.tsx ***!
  \************************************/
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
/* harmony import */ var _components_characters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/characters */ "./components/characters/index.tsx");

var _jsxFileName = "C:\\Users\\Dar\xEDo\\Desktop\\swgraph\\client\\swgraph\\pages\\characters\\index.tsx";



const CharactersPage = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_characters__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 10
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharactersPage);

/***/ }),

/***/ "./components/characters/characters.module.css":
/*!*****************************************************!*\
  !*** ./components/characters/characters.module.css ***!
  \*****************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"main": "characters_main__3MWXF",
	"list": "characters_list__Iuzfb",
	"button": "characters_button__PEyTd"
};


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

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
var __webpack_exports__ = (__webpack_exec__("./pages/characters/index.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YXJhY3RlcnMuZ3JhcGhxbCIsIndlYnBhY2s6Ly9zd2dyYXBoLy4vY29tcG9uZW50cy9jaGFyYWN0ZXJzL2luZGV4LnRzeCIsIndlYnBhY2s6Ly9zd2dyYXBoLy4vcGFnZXMvY2hhcmFjdGVycy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vc3dncmFwaC8uL2NvbXBvbmVudHMvY2hhcmFjdGVycy9jaGFyYWN0ZXJzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vc3dncmFwaC9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vc3dncmFwaC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vc3dncmFwaC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgIHZhciBkb2MgPSB7XCJraW5kXCI6XCJEb2N1bWVudFwiLFwiZGVmaW5pdGlvbnNcIjpbe1wia2luZFwiOlwiT3BlcmF0aW9uRGVmaW5pdGlvblwiLFwib3BlcmF0aW9uXCI6XCJxdWVyeVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJnZXRDaGFyYWN0ZXJzXCJ9LFwidmFyaWFibGVEZWZpbml0aW9uc1wiOlt7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwibGltaXRcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJJbnRcIn19LFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJWYXJpYWJsZURlZmluaXRpb25cIixcInZhcmlhYmxlXCI6e1wia2luZFwiOlwiVmFyaWFibGVcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYWZ0ZXJcIn19LFwidHlwZVwiOntcImtpbmRcIjpcIk5hbWVkVHlwZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJTdHJpbmdcIn19LFwiZGlyZWN0aXZlc1wiOltdfV0sXCJkaXJlY3RpdmVzXCI6W10sXCJzZWxlY3Rpb25TZXRcIjp7XCJraW5kXCI6XCJTZWxlY3Rpb25TZXRcIixcInNlbGVjdGlvbnNcIjpbe1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwiYWxsUGVvcGxlXCJ9LFwiYXJndW1lbnRzXCI6W3tcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImZpcnN0XCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJsaW1pdFwifX19LHtcImtpbmRcIjpcIkFyZ3VtZW50XCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImFmdGVyXCJ9LFwidmFsdWVcIjp7XCJraW5kXCI6XCJWYXJpYWJsZVwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJhZnRlclwifX19XSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJwZW9wbGVcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJuYW1lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcImdlbmRlclwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJob21ld29ybGRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJuYW1lXCJ9LFwiYXJndW1lbnRzXCI6W10sXCJkaXJlY3RpdmVzXCI6W119XX19XX19LHtcImtpbmRcIjpcIkZpZWxkXCIsXCJuYW1lXCI6e1wia2luZFwiOlwiTmFtZVwiLFwidmFsdWVcIjpcInRvdGFsQ291bnRcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX0se1wia2luZFwiOlwiRmllbGRcIixcIm5hbWVcIjp7XCJraW5kXCI6XCJOYW1lXCIsXCJ2YWx1ZVwiOlwicGFnZUluZm9cIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXSxcInNlbGVjdGlvblNldFwiOntcImtpbmRcIjpcIlNlbGVjdGlvblNldFwiLFwic2VsZWN0aW9uc1wiOlt7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJoYXNOZXh0UGFnZVwifSxcImFyZ3VtZW50c1wiOltdLFwiZGlyZWN0aXZlc1wiOltdfSx7XCJraW5kXCI6XCJGaWVsZFwiLFwibmFtZVwiOntcImtpbmRcIjpcIk5hbWVcIixcInZhbHVlXCI6XCJlbmRDdXJzb3JcIn0sXCJhcmd1bWVudHNcIjpbXSxcImRpcmVjdGl2ZXNcIjpbXX1dfX1dfX1dfX1dLFwibG9jXCI6e1wic3RhcnRcIjowLFwiZW5kXCI6MjY5fX07XG4gICAgZG9jLmxvYy5zb3VyY2UgPSB7XCJib2R5XCI6XCJxdWVyeSBnZXRDaGFyYWN0ZXJzKCRsaW1pdDogSW50LCAkYWZ0ZXI6IFN0cmluZykge1xcclxcbiAgYWxsUGVvcGxlKGZpcnN0OiAkbGltaXQsIGFmdGVyOiAkYWZ0ZXIpIHtcXHJcXG4gICAgcGVvcGxlIHtcXHJcXG4gICAgICBuYW1lXFxyXFxuICAgICAgZ2VuZGVyXFxyXFxuICAgICAgaG9tZXdvcmxkIHtcXHJcXG4gICAgICAgIG5hbWVcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gICAgdG90YWxDb3VudFxcclxcbiAgICBwYWdlSW5mbyB7XFxyXFxuICAgICAgaGFzTmV4dFBhZ2VcXHJcXG4gICAgICBlbmRDdXJzb3JcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIm5hbWVcIjpcIkdyYXBoUUwgcmVxdWVzdFwiLFwibG9jYXRpb25PZmZzZXRcIjp7XCJsaW5lXCI6MSxcImNvbHVtblwiOjF9fTtcbiAgXHJcblxuICAgIHZhciBuYW1lcyA9IHt9O1xuICAgIGZ1bmN0aW9uIHVuaXF1ZShkZWZzKSB7XG4gICAgICByZXR1cm4gZGVmcy5maWx0ZXIoXG4gICAgICAgIGZ1bmN0aW9uKGRlZikge1xuICAgICAgICAgIGlmIChkZWYua2luZCAhPT0gJ0ZyYWdtZW50RGVmaW5pdGlvbicpIHJldHVybiB0cnVlO1xuICAgICAgICAgIHZhciBuYW1lID0gZGVmLm5hbWUudmFsdWVcbiAgICAgICAgICBpZiAobmFtZXNbbmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbmFtZXNbbmFtZV0gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApXG4gICAgfVxuICBcclxuXG4gICAgLy8gQ29sbGVjdCBhbnkgZnJhZ21lbnQvdHlwZSByZWZlcmVuY2VzIGZyb20gYSBub2RlLCBhZGRpbmcgdGhlbSB0byB0aGUgcmVmcyBTZXRcbiAgICBmdW5jdGlvbiBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKG5vZGUsIHJlZnMpIHtcbiAgICAgIGlmIChub2RlLmtpbmQgPT09IFwiRnJhZ21lbnRTcHJlYWRcIikge1xuICAgICAgICByZWZzLmFkZChub2RlLm5hbWUudmFsdWUpO1xuICAgICAgfSBlbHNlIGlmIChub2RlLmtpbmQgPT09IFwiVmFyaWFibGVEZWZpbml0aW9uXCIpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBub2RlLnR5cGU7XG4gICAgICAgIGlmICh0eXBlLmtpbmQgPT09IFwiTmFtZWRUeXBlXCIpIHtcbiAgICAgICAgICByZWZzLmFkZCh0eXBlLm5hbWUudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChub2RlLnNlbGVjdGlvblNldCkge1xuICAgICAgICBub2RlLnNlbGVjdGlvblNldC5zZWxlY3Rpb25zLmZvckVhY2goZnVuY3Rpb24oc2VsZWN0aW9uKSB7XG4gICAgICAgICAgY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhzZWxlY3Rpb24sIHJlZnMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5vZGUudmFyaWFibGVEZWZpbml0aW9ucykge1xuICAgICAgICBub2RlLnZhcmlhYmxlRGVmaW5pdGlvbnMuZm9yRWFjaChmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgICBjb2xsZWN0RnJhZ21lbnRSZWZlcmVuY2VzKGRlZiwgcmVmcyk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAobm9kZS5kZWZpbml0aW9ucykge1xuICAgICAgICBub2RlLmRlZmluaXRpb25zLmZvckVhY2goZnVuY3Rpb24oZGVmKSB7XG4gICAgICAgICAgY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhkZWYsIHJlZnMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgZGVmaW5pdGlvblJlZnMgPSB7fTtcbiAgICAoZnVuY3Rpb24gZXh0cmFjdFJlZmVyZW5jZXMoKSB7XG4gICAgICBkb2MuZGVmaW5pdGlvbnMuZm9yRWFjaChmdW5jdGlvbihkZWYpIHtcbiAgICAgICAgaWYgKGRlZi5uYW1lKSB7XG4gICAgICAgICAgdmFyIHJlZnMgPSBuZXcgU2V0KCk7XG4gICAgICAgICAgY29sbGVjdEZyYWdtZW50UmVmZXJlbmNlcyhkZWYsIHJlZnMpO1xuICAgICAgICAgIGRlZmluaXRpb25SZWZzW2RlZi5uYW1lLnZhbHVlXSA9IHJlZnM7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pKCk7XG5cbiAgICBmdW5jdGlvbiBmaW5kT3BlcmF0aW9uKGRvYywgbmFtZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkb2MuZGVmaW5pdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2MuZGVmaW5pdGlvbnNbaV07XG4gICAgICAgIGlmIChlbGVtZW50Lm5hbWUgJiYgZWxlbWVudC5uYW1lLnZhbHVlID09IG5hbWUpIHtcbiAgICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uZVF1ZXJ5KGRvYywgb3BlcmF0aW9uTmFtZSkge1xuICAgICAgLy8gQ29weSB0aGUgRG9jdW1lbnROb2RlLCBidXQgY2xlYXIgb3V0IHRoZSBkZWZpbml0aW9uc1xuICAgICAgdmFyIG5ld0RvYyA9IHtcbiAgICAgICAga2luZDogZG9jLmtpbmQsXG4gICAgICAgIGRlZmluaXRpb25zOiBbZmluZE9wZXJhdGlvbihkb2MsIG9wZXJhdGlvbk5hbWUpXVxuICAgICAgfTtcbiAgICAgIGlmIChkb2MuaGFzT3duUHJvcGVydHkoXCJsb2NcIikpIHtcbiAgICAgICAgbmV3RG9jLmxvYyA9IGRvYy5sb2M7XG4gICAgICB9XG5cbiAgICAgIC8vIE5vdywgZm9yIHRoZSBvcGVyYXRpb24gd2UncmUgcnVubmluZywgZmluZCBhbnkgZnJhZ21lbnRzIHJlZmVyZW5jZWQgYnlcbiAgICAgIC8vIGl0IG9yIHRoZSBmcmFnbWVudHMgaXQgcmVmZXJlbmNlc1xuICAgICAgdmFyIG9wUmVmcyA9IGRlZmluaXRpb25SZWZzW29wZXJhdGlvbk5hbWVdIHx8IG5ldyBTZXQoKTtcbiAgICAgIHZhciBhbGxSZWZzID0gbmV3IFNldCgpO1xuICAgICAgdmFyIG5ld1JlZnMgPSBuZXcgU2V0KCk7XG5cbiAgICAgIC8vIElFIDExIGRvZXNuJ3Qgc3VwcG9ydCBcIm5ldyBTZXQoaXRlcmFibGUpXCIsIHNvIHdlIGFkZCB0aGUgbWVtYmVycyBvZiBvcFJlZnMgdG8gbmV3UmVmcyBvbmUgYnkgb25lXG4gICAgICBvcFJlZnMuZm9yRWFjaChmdW5jdGlvbihyZWZOYW1lKSB7XG4gICAgICAgIG5ld1JlZnMuYWRkKHJlZk5hbWUpO1xuICAgICAgfSk7XG5cbiAgICAgIHdoaWxlIChuZXdSZWZzLnNpemUgPiAwKSB7XG4gICAgICAgIHZhciBwcmV2UmVmcyA9IG5ld1JlZnM7XG4gICAgICAgIG5ld1JlZnMgPSBuZXcgU2V0KCk7XG5cbiAgICAgICAgcHJldlJlZnMuZm9yRWFjaChmdW5jdGlvbihyZWZOYW1lKSB7XG4gICAgICAgICAgaWYgKCFhbGxSZWZzLmhhcyhyZWZOYW1lKSkge1xuICAgICAgICAgICAgYWxsUmVmcy5hZGQocmVmTmFtZSk7XG4gICAgICAgICAgICB2YXIgY2hpbGRSZWZzID0gZGVmaW5pdGlvblJlZnNbcmVmTmFtZV0gfHwgbmV3IFNldCgpO1xuICAgICAgICAgICAgY2hpbGRSZWZzLmZvckVhY2goZnVuY3Rpb24oY2hpbGRSZWYpIHtcbiAgICAgICAgICAgICAgbmV3UmVmcy5hZGQoY2hpbGRSZWYpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgYWxsUmVmcy5mb3JFYWNoKGZ1bmN0aW9uKHJlZk5hbWUpIHtcbiAgICAgICAgdmFyIG9wID0gZmluZE9wZXJhdGlvbihkb2MsIHJlZk5hbWUpO1xuICAgICAgICBpZiAob3ApIHtcbiAgICAgICAgICBuZXdEb2MuZGVmaW5pdGlvbnMucHVzaChvcCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gbmV3RG9jO1xuICAgIH1cbiAgICBcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGRvYztcbiAgICBcbiAgICAgICAgbW9kdWxlLmV4cG9ydHNbXCJnZXRDaGFyYWN0ZXJzXCJdID0gb25lUXVlcnkoZG9jLCBcImdldENoYXJhY3RlcnNcIik7XG4gICAgICAgIFxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgUVVFUllfQUxMX0NIQVJBQ1RFUlMgZnJvbSBcIi4vY2hhcmFjdGVycy5ncmFwaHFsXCI7XHJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkBhcG9sbG8vY2xpZW50XCI7XHJcbmltcG9ydCB7IENoYXJhY3RlcnMgYXMgSUNoYXJhY3RlcnMsIENoYXJhY3RlciB9IGZyb20gXCIuL2NoYXJhY3RlcnNcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9jaGFyYWN0ZXJzLm1vZHVsZS5jc3NcIjtcclxuXHJcblxyXG5jb25zdCBDaGFyYWN0ZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgZGF0YSwgbG9hZGluZywgZXJyb3IsIGZldGNoTW9yZSB9ID0gdXNlUXVlcnkoUVVFUllfQUxMX0NIQVJBQ1RFUlMsIHsgdmFyaWFibGVzOiB7IGxpbWl0OiAxMCwgYWZ0ZXI6IFwiXCIgfSB9KTtcclxuICBjb25zdCBbY2hhcmFjdGVycywgc2V0Q2hhcmFjdGVyc10gPSB1c2VTdGF0ZSh7IGxpc3Q6IFtdLCBuZXh0Q3Vyc29yOiBcIlwiIH0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRDaGFyYWN0ZXJzKHsgbGlzdDogZGF0YT8uYWxsUGVvcGxlPy5wZW9wbGUsIG5leHRDdXJzb3I6IGRhdGE/LmFsbFBlb3BsZT8ucGFnZUluZm8/LmVuZEN1cnNvciB9KSwgW2RhdGFdKTtcclxuICBpZiAobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PlxyXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+IEVycm9yIDwvZGl2PlxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8aDE+Q2hhcmFjdGVyczwvaDE+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdH0+e2NoYXJhY3RlcnM/Lmxpc3Q/Lm1hcChjaGFyYWN0ZXIgPT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHA+PHN0cm9uZz5OYW1lOjwvc3Ryb25nPiB7Y2hhcmFjdGVyLm5hbWV9PC9wPlxyXG4gICAgICAgICAgPHA+PHN0cm9uZz5HZW5kZXI6PC9zdHJvbmc+IHtjaGFyYWN0ZXIuZ2VuZGVyfTwvcD5cclxuICAgICAgICAgIDxwPjxzdHJvbmc+SG9tZXdvcmxkOjwvc3Ryb25nPiB7Y2hhcmFjdGVyPy5ob21ld29ybGQubmFtZX08L3A+XHJcbiAgICAgICAgPC9kaXY+KX08L2Rpdj5cclxuICAgICAge2NoYXJhY3RlcnMubmV4dEN1cnNvciAmJlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGZldGNoTW9yZSh7IHZhcmlhYmxlczogeyBhZnRlcjogY2hhcmFjdGVycy5uZXh0Q3Vyc29yIH0gfSlcclxuICAgICAgICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiBzZXRDaGFyYWN0ZXJzKGNoYXJhY3RlcnMgPT4gKHsgbGlzdDogWy4uLmNoYXJhY3RlcnMubGlzdCwgLi4uZGF0YS5hbGxQZW9wbGUucGVvcGxlXSwgbmV4dEN1cnNvcjogZGF0YS5hbGxQZW9wbGUucGFnZUluZm8uaGFzTmV4dFBhZ2UgPyBkYXRhLmFsbFBlb3BsZS5wYWdlSW5mby5lbmRDdXJzb3IgOiBcIlwiIH0pKSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgTG9hZCBtb3JlXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoYXJhY3RlcnM7IiwiXHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IENoYXJhY3RlcnMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvY2hhcmFjdGVyc1wiXHJcblxyXG5cclxuY29uc3QgQ2hhcmFjdGVyc1BhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxDaGFyYWN0ZXJzIC8+XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBDaGFyYWN0ZXJzUGFnZTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiY2hhcmFjdGVyc19tYWluX18zTVdYRlwiLFxuXHRcImxpc3RcIjogXCJjaGFyYWN0ZXJzX2xpc3RfX0l1emZiXCIsXG5cdFwiYnV0dG9uXCI6IFwiY2hhcmFjdGVyc19idXR0b25fX1BFeVRkXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJRVUVSWV9BTExfQ0hBUkFDVEVSUyIsInVzZVF1ZXJ5Iiwic3R5bGVzIiwiQ2hhcmFjdGVycyIsImRhdGEiLCJsb2FkaW5nIiwiZXJyb3IiLCJmZXRjaE1vcmUiLCJ2YXJpYWJsZXMiLCJsaW1pdCIsImFmdGVyIiwiY2hhcmFjdGVycyIsInNldENoYXJhY3RlcnMiLCJsaXN0IiwibmV4dEN1cnNvciIsImFsbFBlb3BsZSIsInBlb3BsZSIsInBhZ2VJbmZvIiwiZW5kQ3Vyc29yIiwibWFpbiIsIm1hcCIsImNoYXJhY3RlciIsIm5hbWUiLCJnZW5kZXIiLCJob21ld29ybGQiLCJidXR0b24iLCJ0aGVuIiwiaGFzTmV4dFBhZ2UiLCJDaGFyYWN0ZXJzUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=