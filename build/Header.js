"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _uiSpec = require("@yosmy/ui-spec");

var _reactNativeElements = require("react-native-elements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Header = function Header(props) {
  var leftComponent = buildLeftComponent(props.left);
  var centerComponent = buildCenterComponent(props.center);
  var rightComponent = buildRightComponent(props.right);
  return _react["default"].createElement(_reactNativeElements.Header, {
    leftComponent: leftComponent,
    centerComponent: centerComponent,
    rightComponent: rightComponent,
    statusBarProps: {
      // Fix high header
      translucent: true
    }
  });
};

Header.propTypes = _uiSpec.HeaderProps;

var buildLeftComponent = function buildLeftComponent(left) {
  return left;
};

var buildCenterComponent = function buildCenterComponent(center) {
  return center;
};

var buildRightComponent = function buildRightComponent(right) {
  return right;
};

var _default = Header;
exports["default"] = _default;