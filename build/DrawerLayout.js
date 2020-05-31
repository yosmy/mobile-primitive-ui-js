"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _reactNativeSideMenu = _interopRequireDefault(require("react-native-side-menu"));

var _Content = _interopRequireDefault(require("./Layout/Content"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DrawerLayout = function DrawerLayout(_ref) {
  var header = _ref.header,
      menu = _ref.menu,
      align = _ref.align,
      padding = _ref.padding,
      grow = _ref.grow,
      scroll = _ref.scroll,
      children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeSideMenu["default"], {
    menu: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNative.ScrollView, {
      scrollsToTop: false,
      style: {
        // Workaround for using translucent on header
        paddingTop: 56
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(menu.content, {})
    }),
    isOpen: menu.open,
    onChange: menu.onChange,
    children: [header, /*#__PURE__*/(0, _jsxRuntime.jsx)(_Content["default"], {
      align: align,
      padding: padding,
      grow: grow,
      scroll: scroll,
      children: children
    })]
  });
};

DrawerLayout.propTypes = _primitiveUiSpec.DrawerLayout;
var _default = DrawerLayout;
exports["default"] = _default;