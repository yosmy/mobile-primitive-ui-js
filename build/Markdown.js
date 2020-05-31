"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNativeSimpleMarkdown = _interopRequireDefault(require("react-native-simple-markdown"));

var _Container = require("./Container");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Markdown = function Markdown(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.Container, _objectSpread(_objectSpread({
    flow: "row",
    align: {
      main: "flex-start",
      cross: "flex-start"
    },
    flex: true
  }, props), {}, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSimpleMarkdown["default"], {
      styles: {
        heading1: {
          fontSize: 32,
          fontWeight: "bold",
          marginTop: 8,
          marginBottom: 16
        },
        heading2: {
          fontSize: 24,
          fontWeight: "bold",
          marginTop: 8,
          marginBottom: 16
        },
        heading3: {
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 8,
          marginBottom: 16
        },
        heading4: {
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 8,
          marginBottom: 16
        },
        heading5: {
          fontSize: 13,
          fontWeight: "bold",
          marginTop: 8,
          marginBottom: 16
        },
        heading6: {
          fontSize: 11,
          marginTop: 8,
          marginBottom: 16
        },
        strong: {
          fontWeight: "bold"
        }
      },
      children: children
    })
  }));
};

var _default = Markdown;
exports["default"] = _default;