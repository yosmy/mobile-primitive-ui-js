"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNativeDatepicker = _interopRequireDefault(require("react-native-datepicker"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DatePicker = function DatePicker(_ref) {
  var value = _ref.value,
      format = _ref.format,
      onChange = _ref.onChange;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeDatepicker["default"], {
    date: value,
    mode: "date",
    placeholder: "Selecciona la fecha",
    format: format,
    confirmBtnText: "Confirmar",
    cancelBtnText: "Cancelar",
    onChange: onChange
  });
};

DatePicker.propTypes = {
  value: _propTypes["default"].string,
  format: _propTypes["default"].string,
  onChange: _propTypes["default"].func.isRequired
};
var _default = DatePicker;
exports["default"] = _default;