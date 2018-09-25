"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _uiSpec = require("@yosmy/ui-spec");

var _reactNativeSideMenu = _interopRequireDefault(require("react-native-side-menu"));

var _Content = _interopRequireDefault(require("./Content"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var window = _reactNative.Dimensions.get('window');

var styles = _reactNative.StyleSheet.create({
  menu: {
    flex: 1,
    height: window.height
  }
});

var FooterLayout = function FooterLayout(props) {
  return _react["default"].createElement(_reactNativeSideMenu["default"], {
    menu: _react["default"].createElement(_reactNative.ScrollView, {
      scrollsToTop: false,
      style: _objectSpread({}, props.menu.style)
    }, _react["default"].createElement(props.menu.content, null)),
    isOpen: props.menu.open,
    onChange: props.menu.onChange
  }, _react["default"].createElement(props.header, null), _react["default"].createElement(_Content["default"], {
    background: props.background,
    align: props.align,
    padding: props.padding,
    grow: props.grow
  }, props.children));
};

FooterLayout.propTypes = _uiSpec.FooterLayoutProps;
var _default = FooterLayout;
exports["default"] = _default;