"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNativeDatepicker = _interopRequireDefault(require("react-native-datepicker"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DatePicker = function DatePicker(props) {
  return _react["default"].createElement(_reactNativeDatepicker["default"], {
    date: props.value,
    mode: props.mode || "date",
    placeholder: props.placeholder || "Selecciona la fecha",
    format: props.format,
    confirmBtnText: "Confirmar",
    cancelBtnText: "Cancelar",
    onChange: props.onChange
  });
};

var _default = DatePicker;
exports["default"] = _default;