"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNativeMaterialDropdown = require("react-native-material-dropdown");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Dropdown = function Dropdown(props) {
  return _react["default"].createElement(_reactNativeMaterialDropdown.Dropdown, _extends({}, props, {
    value: props.value,
    label: props.label,
    data: props.data,
    onChangeText: props.onChange
  }));
};

var _default = Dropdown;
exports["default"] = _default;