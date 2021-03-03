"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactNative = require("react-native");

var _reactNativeCircularProgress = require("react-native-circular-progress");

var _primitiveUiSpec = require("@yosmy/primitive-ui-spec");

var _style = require("@yosmy/style");

var _jsxRuntime = require("react/jsx-runtime");

var _templateObject;

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Progress = function Progress(_ref) {
  var size = _ref.size,
      color = _ref.color,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ["size", "color", "style"]);

  delete props.align;
  delete props.margin;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      fill = _useState2[0],
      setFill = _useState2[1];

  var ref = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if (!ref.current) {
      return;
    }

    ref.current.animate(fill ? 100 : 0);
  }, [fill]); // Fix to avoid warning "Invalid prop style of type array, expected object"

  style = _reactNative.StyleSheet.flatten(style);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeCircularProgress.AnimatedCircularProgress, _objectSpread({
    tintColor: color,
    size: size,
    width: 1,
    fill: 100,
    duration: 3000,
    ref: ref,
    onAnimationComplete: function onAnimationComplete() {
      setFill(!fill);
    },
    style: style
  }, props));
};

Progress.propTypes = _primitiveUiSpec.Progress.Props;
Progress.defaultProps = {
  size: 10
};
var StyledProgress = (0, _style.styled)(Progress)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    ", "\n    \n    ", "\n"])), function (props) {
  return _primitiveUiSpec.Container.compileAlign(props.align);
}, function (props) {
  return _primitiveUiSpec.Container.compileMargin(props.margin);
});
var _default = StyledProgress; // import React, {useRef} from "react";
// import PropTypes from "prop-types";
// import {Animated, Easing} from "react-native";
// import {ProgressProps} from "@yosmy/primitive-ui-spec";
// import {Svg, Path} from "react-native-svg";
//
// const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
//     const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
//
//     return {
//         x: centerX + radius * Math.cos(angleInRadians),
//         y: centerY + radius * Math.sin(angleInRadians),
//     };
// }
//
// const circlePath = (x, y, radius, startAngle, endAngle) => {
//     const start = polarToCartesian(x, y, radius, endAngle * 0.9999);
//     const end = polarToCartesian(x, y, radius, startAngle);
//     const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
//     const d = ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y];
//
//     return d.join(" ");
// };
//
// const Draw = ({
//                   size,
//                   end,
//                   color
//               }) => {
//     return <Svg width={size * 2} height={size * 2}>
//         <Path
//             d={circlePath(
//                 size,
//                 size,
//                 size - 1,
//                 0,
//                 end
//             )}
//             stroke={color}
//             strokeWidth={1}
//             strokeLinecap="butt"
//             fill="transparent"
//         />
//     </Svg>;
// };
//
// Draw.propTypes = {
//     size: PropTypes.number.isRequired,
//     end: PropTypes.number.isRequired,
//     color: PropTypes.string.isRequired
// };
//
// const AnimatedDraw = Animated.createAnimatedComponent(Draw);
//
// const Progress = () => {
//     const end = useRef(new Animated.Value(0)).current;
//
//     Animated.timing(end, {
//         toValue: 360,
//         duration: 500
//     }).start();
//
//     return <AnimatedDraw
//         end={end}
//         color="#FFFFFF"
//     />;
// };
//
// Progress.propTypes = ProgressProps;
//
// Progress.defaultProps = {
//     size: 10,
// };
//
// export default Progress;

exports["default"] = _default;