"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _style = require("@yosmy/style");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Modal = function Modal(_ref) {
  var full = _ref.full,
      backdrop = _ref.backdrop,
      animation = _ref.animation,
      onClose = _ref.onClose,
      style = _ref.style,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["full", "backdrop", "animation", "onClose", "style", "children"]);

  delete props.flow;
  delete props.align;
  delete props.flex;
  delete props.margin;
  delete props.padding;
  delete props.border;
  delete props.width;
  delete props.height;
  delete props.background;
  delete props.z;
  delete props.position;
  delete props.shadow;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeModal["default"], {
    isVisible: true,
    coverScreen: full,
    onBackdropPress: onClose,
    onBackButtonPress: onClose,
    animationIn: animation && animation["in"],
    animationOut: animation && animation.out,
    backdropOpacity: backdrop && backdrop.opacity,
    backdropColor: backdrop && backdrop.color,
    style: style,
    children: children
  });
};

Modal.propTypes = _primitiveUiSpec.Modal.Props;
Modal.defaultProps = {
  backdrop: {
    opacity: 0.5,
    color: "#000000"
  }
};
var StyledModal = (0, _style.styled)(Modal)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    \n    ", "\n\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n"])), function (props) {
  return _primitiveUiSpec.Container.compileFlow(props.flow);
}, function (props) {
  return _primitiveUiSpec.Container.compileAlign(props.align);
}, function (props) {
  return _primitiveUiSpec.Container.compileFlex(props.flex);
}, function (props) {
  return _primitiveUiSpec.Container.compileWidth(props.width);
}, function (props) {
  return _primitiveUiSpec.Container.compileHeight(props.height);
}, function (props) {
  return _primitiveUiSpec.Container.compileBackground(props.background);
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
  return _primitiveUiSpec.Container.compileZ(props.z);
}, function (props) {
  return _primitiveUiSpec.Container.compilePosition(props.position);
}, function (props) {
  return _primitiveUiSpec.Container.compileShadow(props.shadow);
});
var _default = StyledModal;
exports["default"] = _default;