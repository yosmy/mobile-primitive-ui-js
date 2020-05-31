"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeSafeAreaContext = require("react-native-safe-area-context");

var _expoLinearGradient = require("expo-linear-gradient");

var _style = require("@yosmy/style");

var _Container = require("../Container");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Content = function Content(_ref) {
  var gradient = _ref.gradient,
      background = _ref.background,
      scroll = _ref.scroll,
      style = _ref.style,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["gradient", "background", "scroll", "style", "children"]);

  delete props.align;
  delete props.margin;
  delete props.padding;
  delete props.border;
  delete props.height;

  if (scroll) {
    children = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
      keyboardShouldPersistTaps: "always",
      style: {
        flex: 1
      },
      children: children
    });
  }

  var insets = (0, _reactNativeSafeAreaContext.useSafeAreaInsets)(); // KeyboardAvoidingView is just a normal <View /> component with paddingBottom
  // https://reactnative.dev/docs/keyboardavoidingview#behavior
  // https://github.com/facebook/react-native/blob/master/Libraries/Components/Keyboard/KeyboardAvoidingView.js
  // https://stackoverflow.com/a/58385319/5257802

  children = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.KeyboardAvoidingView, {
    behavior: _reactNative.Platform.select({
      android: "height",
      ios: "padding"
    }),
    keyboardVerticalOffset: insets.top,
    style: _reactNative.StyleSheet.compose(style, {
      flex: 1
    }),
    children: children
  });

  if (gradient) {
    children = /*#__PURE__*/(0, _jsxRuntime.jsx)(_expoLinearGradient.LinearGradient, {
      colors: gradient.colors,
      style: {
        flex: 1
      },
      children: children
    });
  }

  background = (0, _Container.normalizeBackground)(background);

  if (background && typeof background.image !== "undefined") {
    children = /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ImageBackground, {
      source: typeof background.image === "string" ? {
        uri: background.image
      } : background.image,
      resizeMode: background.resize,
      style: {
        width: "100%",
        // Mandatory for ImageBackground
        flex: 1
      },
      children: children
    });
  }

  return children;
};

Content.propTypes = _primitiveUiSpec.Layout.Content.Props;
Content.defaultProps = {
  scroll: true
};
var StyledContent = (0, _style.styled)(Content)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n    \n    ", "\n    ", "\n    \n    ", "\n    ", "\n    ", "\n    \n    ", "\n"])), function (props) {
  return _primitiveUiSpec.Container.compileAlign(props.align);
}, function (props) {
  return _primitiveUiSpec.Container.compileMargin(props.margin);
}, function (props) {
  return _primitiveUiSpec.Container.compilePadding(props.padding);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderStyle(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderColor(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileBorderRadius(props.border);
}, function (props) {
  return _primitiveUiSpec.Container.compileHeight(props.height);
});
var _default = StyledContent;
exports["default"] = _default;