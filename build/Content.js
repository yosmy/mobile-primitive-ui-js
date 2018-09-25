"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactNative = require("react-native");

var _src = require("@yosmy/ui-spec/src");

var _reactNativeElements = require("react-native-elements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import * as Progress from 'react-native-progress';
var Content = function Content(props) {
  var children;

  if (props.scroll) {
    children = _react["default"].createElement(_reactNative.ScrollView, {
      keyboardShouldPersistTaps: "always"
    }, props.children);
  } else {
    children = _react["default"].createElement(_reactNative.View, null, props.children);
  }

  return _react["default"].createElement(_reactNative.KeyboardAvoidingView // KeyboardAvoidingView is just a normal <View /> component with paddingBottom
  , {
    contentContainerStyle: {
      flexGrow: props.grow === true ? 1 : undefined,
      // Needed for stuff like floating buttons located at bottom
      justifyContent: props.align ? props.align.justifyContent : undefined,
      alignItems: props.align ? props.align.alignItems : undefined // opacity: progress ? 0.5 : undefined,

    },
    behavior: _reactNative.Platform.select({
      android: 'height',
      ios: 'padding'
    }),
    style: _objectSpread({
      flex: props.flex,
      height: props.height,
      backgroundColor: props.background
    }, (0, _src.preparePaddingStyle)(props.padding, props.theme)) // pointerEvents={progress ? 'none' : 'auto'}

  }, children);
};

Content.propTypes = {
  grow: _propTypes["default"].bool,
  scroll: _propTypes["default"].bool,
  align: _src.AlignProp,
  padding: _src.PaddingProp,
  background: _propTypes["default"].string,
  height: _propTypes["default"].number,
  onKeyboardShow: _propTypes["default"].func,
  // (height)
  onKeyboardHide: _propTypes["default"].func // ()

};

var _default = (0, _reactNativeElements.withTheme)(Content);

exports["default"] = _default;