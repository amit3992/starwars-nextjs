webpackHotUpdate("static/development/pages/film.js",{

/***/ "./pages/film.js":
/*!***********************!*\
  !*** ./pages/film.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/kkulkarni1/dev/front_end_summit/next_serverless/pages/film.js";


function FilmPage() {
  var _props = props,
      data = _props.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, data.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "Directed by - ", data.director));
}

FilmPage.getInitialProps = function () {
  // const {filmid} = query.filmId
  // console.log("logging here")
  // const res = await fetch(`https://swapi.co/api/films/${filmid}`)
  // const data = await res.json()
  return {
    title: 'test-title',
    director: 'test-de'
  };
};

/***/ })

})
//# sourceMappingURL=film.js.6d47a6c610b8cb80de33.hot-update.js.map