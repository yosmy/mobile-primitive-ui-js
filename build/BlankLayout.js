"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _Content = _interopRequireDefault(require("./Layout/Content"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var BlankLayout = function BlankLayout(_ref) {
  var align = _ref.align,
      padding = _ref.padding,
      grow = _ref.grow,
      scroll = _ref.scroll,
      children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Content["default"], {
    align: align,
    padding: padding,
    grow: grow,
    scroll: scroll,
    children: children
  });
};

BlankLayout.propTypes = _primitiveUiSpec.BlankLayout.Props;
var _default = BlankLayout;
exports["default"] = _default;