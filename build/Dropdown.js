"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _picker = require("@react-native-picker/picker");

var _style = require("@yosmy/style");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Dropdown = function Dropdown(_ref) {
  var value = _ref.value,
      data = _ref.data,
      onChange = _ref.onChange,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["value", "data", "onChange", "style"]);

  delete props.margin;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_picker.Picker, _objectSpread(_objectSpread({
    selectedValue: value,
    onValueChange: onChange,
    style: style
  }, props), {}, {
    children: data.map(function (_ref2, i) {
      var label = _ref2.label,
          value = _ref2.value;
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_picker.Picker.Item, {
        label: label,
        value: value
      }, i);
    })
  }));
};

Dropdown.propTypes = _primitiveUiSpec.Dropdown.Props;
var StyledDropdown = (0, _style.styled)(Dropdown)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n"])), function (props) {
  return _primitiveUiSpec.Container.compileMargin(props.margin);
});
var _default = StyledDropdown;
exports["default"] = _default;