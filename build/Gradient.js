"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _expoLinearGradient = require("expo-linear-gradient");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _style = require("@yosmy/style");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Gradient = function Gradient(_ref) {
  var colors = _ref.colors,
      locations = _ref.locations,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["colors", "locations", "style"]);

  delete props.width;
  delete props.height;
  delete props.position;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_expoLinearGradient.LinearGradient, {
    colors: colors,
    locations: locations,
    style: style
  });
};

Gradient.propTypes = {
  colors: _propTypes["default"].array.isRequired,
  locations: _propTypes["default"].array,
  position: _primitiveUiSpec.Container.PositionProp
};
var StyledGradient = (0, _style.styled)(Gradient)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n    ", "\n\n    ", "\n"])), function (props) {
  return _primitiveUiSpec.Container.compileWidth(props.width);
}, function (props) {
  return _primitiveUiSpec.Container.compileHeight(props.height);
}, function (props) {
  return _primitiveUiSpec.Container.compilePosition(props.position);
});
var _default = StyledGradient;
exports["default"] = _default;