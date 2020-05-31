"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeBackground = exports.Container = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _expoLinearGradient = require("expo-linear-gradient");

var Animatable = _interopRequireWildcard(require("react-native-animatable"));

var _style = require("@yosmy/style");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Container = function Container(_ref) {
  var background = _ref.background,
      gradient = _ref.gradient,
      animation = _ref.animation,
      animationRef = _ref.animationRef,
      onClick = _ref.onClick,
      style = _ref.style,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["background", "gradient", "animation", "animationRef", "onClick", "style", "children"]);

  delete props.flow;
  delete props.align;
  delete props.flex;
  delete props.margin;
  delete props.padding;
  delete props.border;
  delete props.width;
  delete props.height;
  delete props.z;
  delete props.position;
  delete props.shadow;
  delete props.opacity;
  var Component = _reactNative.View;
  var customProps = {};
  background = normalizeBackground(background);

  if (background) {
    if (typeof background.image !== "undefined") {
      Component = _reactNative.ImageBackground;
      customProps = {
        source: typeof background.image === "string" ? {
          uri: background.image
        } : background.image,
        resizeMode: background.resize
      };
    } else if (typeof background.color !== "undefined") {
      style = _reactNative.StyleSheet.compose(style, {
        backgroundColor: background.color
      });
    } else {
      throw new Error("No image or color for background");
    }
  } else if (gradient) {
    Component = _expoLinearGradient.LinearGradient;
    customProps = {
      colors: gradient.colors,
      locations: gradient.locations
    };
  }

  if (typeof onClick !== "undefined") {
    Component = _reactNative.TouchableOpacity;
    customProps = {
      onPress: onClick
    };
  }

  if (animation || animationRef) {
    Component = Animatable.View;

    if (animationRef) {
      customProps = {
        ref: animationRef
      };
    } else {
      customProps = {
        animation: animation
      };
    }
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(Component, _objectSpread(_objectSpread(_objectSpread({}, customProps), {}, {
    style: style
  }, props), {}, {
    children: children
  }));
};

Container.propTypes = _primitiveUiSpec.Container.Props;

var normalizeBackground = function normalizeBackground(background) {
  var type = _typeof(background);

  switch (type) {
    case "undefined":
      break;
    // It"s a color

    case "string":
      background = {
        color: background
      };
      break;
    // It"s an image

    case "number":
      background = {
        image: background,
        resize: "cover"
      };
      break;

    case "object":
      break;

    default:
      throw new Error("Invalid type ".concat(type));
  }

  return background;
};

exports.normalizeBackground = normalizeBackground;
var StyledContainer = (0, _style.styled)(Container)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n    ", "\n    ", "\n\n    ", "\n    ", "\n\n    ", "\n    ", "\n\n    ", "\n    ", "\n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    ", "\n"])), function (props) {
  return _primitiveUiSpec.Container.compileFlow(props.flow);
}, function (props) {
  return _primitiveUiSpec.Container.compileFlex(props.flex);
}, function (props) {
  return _primitiveUiSpec.Container.compileAlign(props.align);
}, function (props) {
  return _primitiveUiSpec.Container.compileWidth(props.width);
}, function (props) {
  return _primitiveUiSpec.Container.compileHeight(props.height);
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
}, function (props) {
  return _primitiveUiSpec.Container.compileOpacity(props.opacity);
});
exports.Container = StyledContainer;