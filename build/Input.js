"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _uiSpec = require("@yosmy/ui-spec");

var _reactNativeElements = require("react-native-elements");

var _Container = _interopRequireDefault(require("./Container"));

var _Text = _interopRequireDefault(require("./Text"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Input = function Input(props) {
  var errorMessage = buildErrorMessage(props.error);
  var autoFocus = buildAutoFocus(props.focus);
  var autoCapitalize = buildAutoCapitalize(props.capitalize);
  var keyboardType = buildKeyboardType(props.keyboard);
  var maxLength = buildMaxLength(props.length);
  var secureTextEntry = buildSecureTextEntry(props.secure);
  var multilineProps;

  if (props.multi) {
    multilineProps = {
      multiline: true,
      numberOfLines: props.multi
    };
  }

  var onChangeText = buildOnChangeText(props.onChange);
  var leftIcon = buildLeftIcon(props.start);
  var rightIcon = buildRightIcon(props.end);
  var inputContainerStyle = buildInputContainerStyle(props.theme);
  return _react["default"].createElement(_Container["default"], {
    flow: "column",
    align: props.align,
    margin: props.margin,
    width: props.width,
    flex: props.flex,
    background: props.background,
    style: props.style
  }, _react["default"].createElement(_reactNativeElements.Input, _extends({
    testID: props.id,
    value: props.value,
    placeholder: props.placeholder,
    errorMessage: errorMessage,
    leftIcon: leftIcon,
    leftIconContainerStyle: {
      marginRight: props.theme.spacing(1)
    },
    rightIcon: rightIcon,
    autoFocus: autoFocus,
    autoCapitalize: autoCapitalize,
    keyboardType: keyboardType,
    returnKeyType: "done",
    maxLength: maxLength,
    secureTextEntry: secureTextEntry
  }, multilineProps, {
    onChangeText: onChangeText,
    inputContainerStyle: inputContainerStyle,
    errorStyle: {
      marginLeft: props.theme.spacing(1)
    },
    containerStyle: {
      paddingHorizontal: 0
    }
  }), props.children), props.help && (!Array.isArray(props.help) ? _react["default"].createElement(_Text["default"], {
    margin: {
      left: 1
    }
  }, props.help) : props.help.map(function (line, i) {
    return _react["default"].createElement(_Text["default"], {
      key: i,
      margin: {
        left: 1
      }
    }, line);
  })));
};

Input.propTypes = _uiSpec.InputProps;

var buildErrorMessage = function buildErrorMessage(error) {
  return error;
};

var buildAutoFocus = function buildAutoFocus(focus) {
  return focus;
};

var buildAutoCapitalize = function buildAutoCapitalize(capitalize) {
  if (!capitalize) {
    return "none";
  }

  return capitalize;
};

var buildMaxLength = function buildMaxLength(length) {
  return length;
};

var buildSecureTextEntry = function buildSecureTextEntry(secure) {
  return secure;
};

var buildKeyboardType = function buildKeyboardType(keyboard) {
  switch (keyboard) {
    case 'number':
      return 'number-pad';

    case 'decimal':
      return 'decimal-pad';

    case 'phone':
      return 'phone-pad';

    default:
      // Need to be undefined, to make autoCapitalize works
      // https://github.com/facebook/react-native/issues/8932#issuecomment-287013962
      return undefined;
  }
};

var buildOnChangeText = function buildOnChangeText(onChange) {
  return onChange;
};

var buildLeftIcon = function buildLeftIcon(start) {
  // Not start prop set?
  if (!start) {
    return undefined;
  }

  start = start(); // Start prop set, but sometimes is null, like a country prefix, but with no country selected yet

  if (!start) {
    return undefined;
  }

  var props = start.props; // Is a Text component?

  if (start.props.children) {
    props = _objectSpread({
      style: _objectSpread({
        // Same size as input
        fontSize: 18
      }, props.style)
    }, props);
  } else {
    props = _objectSpread({
      // Icon size
      size: 30
    }, props);
  }

  return function () {
    return _react["default"].createElement(start.type, props);
  };
};

var buildRightIcon = function buildRightIcon(end) {
  var End;
  End = end;

  if (!End) {
    return undefined;
  }

  return _react["default"].createElement(End, null);
};

var buildInputContainerStyle = function buildInputContainerStyle(theme) {
  return {
    borderColor: theme.colors.divider,
    borderBottomWidth: _reactNative.StyleSheet.hairlineWidth
  };
};

var _default = (0, _reactNativeElements.withTheme)(Input);

exports["default"] = _default;