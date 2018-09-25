"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactNativeElements = require("react-native-elements");

var _uiSpec = require("@yosmy/ui-spec");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Container = function Container(_ref) {
  var theme = _ref.theme,
      flow = _ref.flow,
      align = _ref.align,
      flex = _ref.flex,
      left = _ref.left,
      center = _ref.center,
      right = _ref.right,
      margin = _ref.margin,
      padding = _ref.padding,
      border = _ref.border,
      width = _ref.width,
      height = _ref.height,
      background = _ref.background,
      color = _ref.color,
      onClick = _ref.onClick,
      style = _ref.style,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["theme", "flow", "align", "flex", "left", "center", "right", "margin", "padding", "border", "width", "height", "background", "color", "onClick", "style", "children"]);

  var outsideStyle = _objectSpread({
    flex: flex ? typeof flex === 'number' ? flex : 1 : undefined
  }, (0, _uiSpec.prepareFlexChildStyle)({
    left: left,
    center: center,
    right: right
  }), {}, (0, _uiSpec.prepareMarginStyle)(margin, theme), {}, (0, _uiSpec.preparePaddingStyle)(padding, theme), {}, (0, _uiSpec.prepareMobileBorderStyle)(border, theme), {}, style);

  var insideStyle = _objectSpread({}, (0, _uiSpec.prepareMobileFlexParentStyle)({
    flow: flow,
    align: align
  }));

  if (typeof width !== 'undefined') {
    if (width === 'full') {
      width = '100%';
    }

    outsideStyle = _objectSpread({}, outsideStyle, {
      width: width
    });
  }

  if (typeof height !== 'undefined') {
    outsideStyle = _objectSpread({}, outsideStyle, {
      height: height
    });
  }
  /* Convert background into an array */


  if (typeof background !== 'undefined' && _typeof(background) !== 'object') {
    // It's a color?
    if (typeof background === 'string') {
      if (background.indexOf('#') === 0) {
        background = {
          color: background
        };
      } else {
        switch (background) {
          case 'mono':
          case 'mono.contrast':
            background = {
              color: theme.palette.mono.contrast
            };
            break;

          default:
            throw new Error("Color \"".concat(color, "\" not implemented"));
        }
      }
    } // It's an image
    else {
        background = {
          image: background,
          resize: 'cover'
        };
      }
  }

  var component;

  if (background) {
    if (typeof background.image !== 'undefined') {
      var source = typeof background.image === 'string' ? {
        uri: background.image
      } : background.image;
      component = _react["default"].createElement(_reactNative.ImageBackground, _extends({
        source: source,
        resizeMode: background.resize,
        style: _objectSpread({}, outsideStyle, {}, insideStyle)
      }, props), children);
    } else if (typeof background.color !== 'undefined') {
      component = _react["default"].createElement(_reactNative.View, _extends({
        style: _objectSpread({
          backgroundColor: background.color
        }, outsideStyle, {}, insideStyle)
      }, props), children);
    } else {
      throw new Error("No image or color for background");
    }
  } else {
    component = _react["default"].createElement(_reactNative.View, _extends({
      style: _objectSpread({}, outsideStyle, {}, insideStyle)
    }, props), children);
  }

  if (typeof onClick !== 'undefined') {
    var _component$props = component.props,
        _style = _component$props.style,
        _children = _component$props.children,
        componentProps = _objectWithoutProperties(_component$props, ["style", "children"]);

    component = _react["default"].createElement(_reactNative.TouchableOpacity, {
      onPress: onClick,
      style: _objectSpread({}, _style, {}, outsideStyle)
    }, _react["default"].createElement(component.type, _extends({}, componentProps, {
      style: _objectSpread({}, insideStyle)
    }), _children));
  }

  return _react["default"].createElement(component.type, component.props);
};

var _default = (0, _reactNativeElements.withTheme)(Container);

exports["default"] = _default;