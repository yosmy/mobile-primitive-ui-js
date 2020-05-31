"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _expoAppLoading = _interopRequireDefault(require("expo-app-loading"));

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Loading = function Loading(_ref) {
  var start = _ref.start,
      onFinish = _ref.onFinish,
      onError = _ref.onError;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_expoAppLoading["default"], {
    startAsync: start,
    onFinish: onFinish,
    onError: onError
  });
};

Loading.propTypes = _primitiveUiSpec.Loading.Props;
var _default = Loading;
exports["default"] = _default;