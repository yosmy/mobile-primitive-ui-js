"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNative = require("react-native");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = function Header(_ref) {
  var start = _ref.start,
      center = _ref.center,
      end = _ref.end;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNative.View, {
    style: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: {
        flex: 1,
        alignItems: "flex-start"
      },
      children: start
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: {
        flex: 1,
        alignItems: "center"
      },
      children: center
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.View, {
      style: {
        flex: 1,
        alignItems: "flex-end"
      },
      children: end
    })]
  });
};

Header.propTypes = {
  start: _propTypes["default"].element,
  center: _propTypes["default"].element,
  end: _propTypes["default"].element
};
var _default = Header;
exports["default"] = _default;