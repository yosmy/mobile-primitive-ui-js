"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _uiSpec = require("@yosmy/ui-spec");

var _reactNativeElements = require("react-native-elements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Text = function Text(props) {
  var style = buildStyle(props.theme, props.variant, props.color, props.center, props.margin, props.wrap, props.style);
  return _react["default"].createElement(_reactNative.Text, _extends({
    style: style
  }, props));
};

Text.propTypes = _uiSpec.TextProps;

var buildStyle = function buildStyle(theme, variant, color, center, margin, wrap, style) {
  var variantStyle = {};

  switch (variant) {
    case 'h1':
      variantStyle = {
        fontSize: 48
      };
      break;

    case 'h2':
      variantStyle = {
        fontSize: 30
      };
      break;

    case 'title':
      variantStyle = {
        fontSize: 16
      };
      break;

    case 'menu':
      variantStyle = {
        fontSize: 18 // fontWeight: 'bold'

      };
      break;

    case 'bold':
      variantStyle = {
        fontWeight: 'bold'
      };
      break;

    case 'caption':
      variantStyle = {
        fontSize: 12,
        lineHeight: 20,
        marginVertical: 2,
        letterSpacing: 0.4,
        color: theme.palette.light
      };
      break;

    case undefined:
      break;

    default:
      throw new Error("Invalid variant \"".concat(variant, "\""));
  }

  var colorStyle = {};

  switch (color) {
    case 'primary':
    case 'primary.main':
      colorStyle = {
        color: theme.palette.primary.main
      };
      break;

    case 'contrast':
    case 'primary.contrast':
      colorStyle = {
        color: theme.palette.primary.contrast
      };
      break;

    case 'mono':
    case 'mono.main':
      colorStyle = {
        color: theme.palette.mono.main
      };
      break;

    case 'error':
    case 'error.main':
      colorStyle = {
        color: theme.palette.error.main
      };
      break;

    case 'mono.contrast':
      colorStyle = {
        color: theme.palette.mono.contrast
      };
      break;

    case undefined:
      break;

    default:
      throw new Error("Invalid color \"".concat(color, "\""));
  }

  var wrapStyle = wrap ? {
    flexShrink: 1
  } : {};
  return _objectSpread({}, variantStyle, {}, colorStyle, {}, (0, _uiSpec.prepareFlexChildStyle)({
    center: center
  }), {}, (0, _uiSpec.prepareMarginStyle)(margin, theme), {
    textAlign: center ? 'center' : undefined
  }, wrapStyle, {}, style);
};

var _default = (0, _reactNativeElements.withTheme)(Text);

exports["default"] = _default;