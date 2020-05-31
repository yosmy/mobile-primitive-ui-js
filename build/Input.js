"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

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

var Input = function Input(_ref) {
  var id = _ref.id,
      value = _ref.value,
      placeholder = _ref.placeholder,
      focus = _ref.focus,
      keyboard = _ref.keyboard,
      length = _ref.length,
      multi = _ref.multi,
      secure = _ref.secure,
      capitalize = _ref.capitalize,
      onChange = _ref.onChange,
      style = _ref.style,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["id", "value", "placeholder", "focus", "keyboard", "length", "multi", "secure", "capitalize", "onChange", "style", "children"]);

  delete props.align;
  delete props.margin;
  delete props.padding;
  delete props.border;
  delete props.width;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.TextInput, _objectSpread({
    testID: id,
    value: value,
    placeholder: placeholder,
    autoFocus: focus,
    keyboardType: buildKeyboardType(keyboard),
    returnKeyType: "done",
    maxLength: length,
    multiline: multi ? true : undefined,
    numberOfLines: multi ? multi : undefined,
    secureTextEntry: secure,
    autoCapitalize: capitalize,
    onChangeText: onChange,
    style: style
  }, props));
};

Input.propTypes = _primitiveUiSpec.Input.Props;
Input.defaultProps = {
  capitalize: "none"
};

var buildKeyboardType = function buildKeyboardType(keyboard) {
  switch (keyboard) {
    case "number":
      return "number-pad";

    case "decimal":
      return "decimal-pad";

    case "phone":
      return "phone-pad";

    default:
      // Need to be undefined, to make autoCapitalize works
      // https://github.com/facebook/react-native/issues/8932#issuecomment-287013962
      return undefined;
  }
};

var StyledInput = (0, _style.styled)(Input)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n"])), function (props) {
  return _primitiveUiSpec.Container.compileAlign(props.align);
}, function (props) {
  return _primitiveUiSpec.Container.compileMargin(props.margin);
}, function (props) {
  return _primitiveUiSpec.Container.compilePadding(props.padding);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderWidth(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderStyle(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderColor(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderRadius(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileWidth(props.width);
}, function (props) {
  return _primitiveUiSpec.Container.compileHeight(props.height);
});
var _default = StyledInput;
exports["default"] = _default;