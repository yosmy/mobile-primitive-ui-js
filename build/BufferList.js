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

var BufferList = function BufferList(_ref) {
  var data = _ref.data,
      identifier = _ref.identifier,
      init = _ref.init,
      render = _ref.render,
      header = _ref.header,
      change = _ref.change,
      end = _ref.end,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["data", "identifier", "init", "render", "header", "change", "end", "style"]);

  delete props.align;
  delete props.margin;
  delete props.border;
  delete props.width;
  delete props.height;
  props = _objectSpread({
    keyExtractor: identifier,
    initialNumToRender: init,
    renderItem: render,
    extraData: change,
    keyboardShouldPersistTaps: "always",
    onEndReachedThreshold: end && end.threshold,
    onEndReached: end && end.onReached,
    style: style
  }, props);

  if (data[0].data) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.SectionList, _objectSpread({
      sections: data,
      renderSectionHeader: header
    }, props));
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.FlatList, _objectSpread({
    data: data
  }, props));
};

BufferList.propTypes = _primitiveUiSpec.BufferList.props;
var StyledBufferList = (0, _style.styled)(BufferList)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n    \n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "  \n      \n    ", "\n    ", "\n"])), function (props) {
  return _primitiveUiSpec.Container.compileAlign(props.align);
}, function (props) {
  return _primitiveUiSpec.Container.compileMargin(props.margin);
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
var _default = StyledBufferList;
exports["default"] = _default;