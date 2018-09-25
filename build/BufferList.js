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

var BufferList = function BufferList(props) {
  var style = _objectSpread({}, (0, _uiSpec.prepareMarginStyle)(props.margin, props.theme), {}, (0, _uiSpec.prepareMobileBorderStyle)(props.border, props.theme), {}, props.style);

  return _react["default"].createElement(_reactNative.FlatList, {
    data: props.data,
    keyExtractor: props.identifier,
    initialNumToRender: props.init,
    renderItem: props.render,
    extraData: props.change,
    keyboardShouldPersistTaps: "always",
    onEndReachedThreshold: props.end && props.end.threshold,
    onEndReached: props.end && props.end.onReached,
    style: style
  });
};

BufferList.propTypes = _uiSpec.BufferListProps;

var _default = (0, _reactNativeElements.withTheme)(BufferList);

exports["default"] = _default;