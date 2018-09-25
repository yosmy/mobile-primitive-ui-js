"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _uiSpec = require("@yosmy/ui-spec");

var _reactNativeElements = require("react-native-elements");

var _Progress = _interopRequireDefault(require("./Progress"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = function Button(_ref) {
  var theme = _ref.theme,
      variant = _ref.variant,
      color = _ref.color,
      progress = _ref.progress,
      disabled = _ref.disabled,
      margin = _ref.margin,
      center = _ref.center,
      onClick = _ref.onClick,
      style = _ref.style,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["theme", "variant", "color", "progress", "disabled", "margin", "center", "onClick", "style", "children"]);

  var type = buildType(variant);
  var containerStyle = buildContainerStyle(theme, center, margin, style);
  var buttonStyle = buildButtonStyle(theme, variant, color, style);
  var titleStyle = buildTitleStyle(theme, variant, color, disabled);

  var _buildTitleAndIcon = buildTitleAndIcon(theme, variant, color, disabled, children),
      icon = _buildTitleAndIcon.icon,
      title = _buildTitleAndIcon.title;

  if (progress) {
    icon = _react["default"].createElement(_Progress["default"], {
      size: "sm",
      color: "disabled",
      style: {
        marginRight: theme.spacing(2)
      }
    });
  }

  var onPress = buildOnPress(onClick);
  return _react["default"].createElement(_reactNativeElements.Button, {
    type: type,
    icon: icon,
    title: title,
    disabled: disabled,
    onPress: onPress,
    containerStyle: containerStyle,
    buttonStyle: buttonStyle,
    titleStyle: titleStyle
  });
};

Button.propTypes = _uiSpec.ButtonProps;

var buildType = function buildType(variant) {
  switch (variant) {
    case 'contained':
      return 'solid';

    case 'outlined':
      return 'outline';

    case 'cleared':
      return 'clear';

    case undefined:
      return 'outline';

    default:
      throw new Error("Invalid variant \"".concat(variant, "\""));
  }
};

var buildTitleAndIcon = function buildTitleAndIcon(theme, variant, color, disabled, children) {
  var _resolveIconAndText = resolveIconAndText(children),
      icon = _resolveIconAndText.icon,
      title = _resolveIconAndText.title;

  var iconProps = {
    size: 18,
    color: buildColor(theme, variant, color, disabled)
  };

  if (_react["default"].Children.count(children) === 1) {
    // Is a text?
    if (children.props.children) {
      // Get just the text
      title = children.props.children;
    } // Is an icon
    else {
        icon = function icon(_ref2) {
          var props = _extends({}, _ref2);

          return _react["default"].createElement(children.type, _extends({}, iconProps, children.props, props));
        };
      }
  } else if (_react["default"].Children.count(children) === 2) {
    icon = function icon(_ref3) {
      var props = _extends({}, _ref3);

      var child = children[0];
      return _react["default"].createElement(child.type, _extends({}, iconProps, child.props, {
        style: _objectSpread({
          marginRight: theme.spacing(1)
        }, child.props.style, {}, props.style)
      }, props));
    };

    title = children[1].props.children;
  } else {
    throw new Error("Too many components inside a button");
  }

  return {
    icon: icon,
    title: title
  };
};

var buildContainerStyle = function buildContainerStyle(theme, center, margin, style) {
  return _objectSpread({}, (0, _uiSpec.prepareFlexChildStyle)({
    center: center
  }), {}, (0, _uiSpec.prepareMarginStyle)(margin, theme), {}, style);
};

var buildButtonStyle = function buildButtonStyle(theme, variant, color, style) {
  return _objectSpread({
    backgroundColor: buildBackground(theme, variant, color)
  }, style);
};

var buildTitleStyle = function buildTitleStyle(theme, variant, color, disabled) {
  return {
    color: buildColor(theme, variant, color, disabled)
  };
};

var buildOnPress = function buildOnPress(onClick) {
  return onClick;
};

var resolveIconAndText = function resolveIconAndText(children) {
  var icon, text;

  if (_react["default"].Children.count(children) === 1) {
    // Is a text?
    if (children.props.children) {
      // Get just the text
      text = children.props.children;
    } // Is an icon
    else {
        icon = children;
      }
  } else if (_react["default"].Children.count(children) === 2) {
    icon = children[0];
    text = children[1].props.children;
  } else {
    throw new Error("Too many components inside a button");
  }

  return {
    icon: icon,
    text: text
  };
};

var buildColor = function buildColor(theme, variant, color, disabled) {
  switch (color) {
    case 'primary':
      if (disabled) {
        color = theme.palette.primary.disabled;
      } else if (variant === 'contained') {
        color = theme.palette.primary.contrast;
      } else {
        color = theme.palette.primary.main;
      }

      break;

    case 'error':
      if (disabled) {
        color = theme.palette.error.disabled;
      } else if (variant === 'contained') {
        color = theme.palette.error.contrast;
      } else {
        color = theme.palette.error.main;
      }

      break;

    case 'mono':
      if (disabled) {
        color = theme.palette.mono.disabled;
      } else if (variant === 'contained') {
        color = theme.palette.mono.contrast;
      } else {
        color = theme.palette.mono.main;
      }

      break;

    case undefined:
      if (disabled) {
        color = theme.palette.primary.disabled;
      } else if (variant === 'contained') {
        color = theme.palette.primary.contrast;
      } else {
        color = theme.palette.primary.main;
      }

      break;

    default:
      throw new Error("Invalid color \"".concat(color, "\""));
  }

  return color;
};

var buildBackground = function buildBackground(theme, variant, color) {
  var background;

  if (variant === 'contained') {
    switch (color) {
      case 'primary':
        background = theme.palette.primary.main;
        break;

      case 'error':
        background = theme.palette.error.main;
        break;

      case undefined:
        background = theme.palette.primary.main;
        break;

      default:
        throw new Error("Invalid variant \"".concat(color, "\""));
    }
  }

  return background;
};

var buildBorder = function buildBorder(theme, variant, color, disabled) {
  var border = {};

  if (variant === 'contained' || variant === 'outlined') {
    border = _objectSpread({}, border, {
      borderWidth: _reactNative.StyleSheet.hairlineWidth,
      borderRadius: 2
    });

    switch (color) {
      case 'primary':
        if (disabled) {
          border = _objectSpread({}, border, {
            borderColor: theme.palette.primary.disabled
          });
        } else {
          border = _objectSpread({}, border, {
            borderColor: theme.palette.primary.main
          });
        }

        break;

      case 'error':
        if (disabled) {
          border = _objectSpread({}, border, {
            borderColor: theme.palette.error.disabled
          });
        } else {
          border = _objectSpread({}, border, {
            borderColor: theme.palette.error.main
          });
        }

        break;

      case undefined:
        if (disabled) {
          border = _objectSpread({}, border, {
            borderColor: theme.palette.primary.disabled
          });
        } else {
          border = _objectSpread({}, border, {
            borderColor: theme.palette.primary.main
          });
        }

        break;

      default:
        throw new Error("Invalid color \"".concat(color, "\""));
    }
  }

  return border;
};

var _default = (0, _reactNativeElements.withTheme)(Button);

exports["default"] = _default;