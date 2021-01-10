"use strict";

var jsxElem = /*#__PURE__*/React.createElement("div", {
  key: "your-name"
}, /*#__PURE__*/React.createElement("p", {
  className: "hw-your-name"
}, "Sonya Vatchkova"));
var jsxElem2 = /*#__PURE__*/React.createElement("div", {
  key: "your-name-2"
}, /*#__PURE__*/React.createElement("p", {
  className: "hw-your-name"
}, "Maria Pentchev"));
var jsxElem3 = /*#__PURE__*/React.createElement("div", {
  key: "your-name-3"
}, /*#__PURE__*/React.createElement("p", {
  className: "hw-your-name"
}, "Johan Pentchev"));
var jsxElem4 = /*#__PURE__*/React.createElement("div", {
  key: "your-name-4"
}, /*#__PURE__*/React.createElement("p", {
  className: "hw-your-name"
}, "Plamen Pentchev"));
var continents = ["Africa", "America", "Asia", "Australia", "Europe"];
var halloContinents = continents.map(function (continent) {
  return "Hallo ".concat(continent, "!");
});
var messageContinents = halloContinents.map(function (c, i) {
  return /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("p", null, c));
});
var elem = React.createElement('div', // type
{
  title: 'outer div',
  className: 'hw-title'
}, // attributes
[//children
React.createElement('h1', {
  key: 'title',
  className: 'hw-title'
}, 'Hallo React'), jsxElem, jsxElem2, jsxElem3, jsxElem4, messageContinents]);
ReactDOM.render(elem, document.getElementById('contents'));