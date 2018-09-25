"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNativeSimpleMarkdown = _interopRequireDefault(require("react-native-simple-markdown"));

var _reactNativeElements = require("react-native-elements");

var _Container = _interopRequireDefault(require("./Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Markdown = function Markdown(props) {
  return _react["default"].createElement(_Container["default"], _extends({
    flow: "row",
    align: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },
    flex: true
  }, props), _react["default"].createElement(_reactNativeSimpleMarkdown["default"], {
    styles: {
      heading1: {
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 8 * props.theme.spacing.unit,
        marginBottom: 16 * props.theme.spacing.unit
      },
      heading2: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 8 * props.theme.spacing.unit,
        marginBottom: 16 * props.theme.spacing.unit
      },
      heading3: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 8 * props.theme.spacing.unit,
        marginBottom: 16 * props.theme.spacing.unit
      },
      heading4: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8 * props.theme.spacing.unit,
        marginBottom: 16 * props.theme.spacing.unit
      },
      heading5: {
        fontSize: 13,
        fontWeight: 'bold',
        marginTop: 8 * props.theme.spacing.unit,
        marginBottom: 16 * props.theme.spacing.unit
      },
      heading6: {
        fontSize: 11,
        marginTop: 8 * props.theme.spacing.unit,
        marginBottom: 16 * props.theme.spacing.unit
      },
      strong: {
        fontWeight: 'bold'
      }
    }
  }, props.children));
};

var _default = (0, _reactNativeElements.withTheme)(Markdown);

exports["default"] = _default;