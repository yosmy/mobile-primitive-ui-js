"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNativeModal = _interopRequireDefault(require("react-native-modal"));

var _uiSpec = require("@yosmy/ui-spec");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Modal = function Modal(props) {
  return _react["default"].createElement(_reactNativeModal["default"], {
    isVisible: true,
    coverScreen: typeof props.full !== 'undefined' ? props.full : true,
    onBackdropPress: props.onClose,
    onBackButtonPress: props.onClose,
    animationIn: props.animation && props.animation["in"],
    animationOut: props.animation && props.animation.out,
    backdropOpacity: props.backdrop && props.backdrop.opacity,
    backdropColor: props.backdrop && props.backdrop.color,
    style: props.style
  }, props.children);
};

Modal.propTypes = _uiSpec.ModalProps;
var _default = Modal;
exports["default"] = _default;