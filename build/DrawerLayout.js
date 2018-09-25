"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _uiSpec = require("@yosmy/ui-spec");

var _reactNativeElements = require("react-native-elements");

var _reactNativeSideMenu = _interopRequireDefault(require("react-native-side-menu"));

var _Content = _interopRequireDefault(require("./Content"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var window = _reactNative.Dimensions.get('window');

var styles = _reactNative.StyleSheet.create({
  menu: {
    flex: 1,
    height: window.height
  }
});

var DrawerLayout = function DrawerLayout(props) {
  return _react["default"].createElement(_reactNativeSideMenu["default"], {
    menu: _react["default"].createElement(_reactNative.ScrollView, {
      scrollsToTop: false,
      style: {
        // Workaround for using translucent on header
        paddingTop: 56
      }
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

DrawerLayout.propTypes = _uiSpec.DrawerLayoutProps;

var _default = (0, _reactNativeElements.withTheme)(DrawerLayout);

exports["default"] = _default;