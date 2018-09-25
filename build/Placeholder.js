"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _rnPlaceholder = require("rn-placeholder");

var _uiSpec = require("@yosmy/ui-spec");

var _Container = _interopRequireDefault(require("./Container"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Circle = function Circle(props) {
  return _react["default"].createElement(_Container["default"], {
    margin: props.margin
  }, _react["default"].createElement(_rnPlaceholder.Shine, null, _react["default"].createElement(_rnPlaceholder.PlaceholderMedia, {
    isRound: true,
    size: props.size
  })));
};

Circle.propTypes = _uiSpec.Placeholder.CircleProps;

var Line = function Line(props) {
  return _react["default"].createElement(_Container["default"], {
    margin: props.margin,
    width: props.width
  }, _react["default"].createElement(_rnPlaceholder.Shine, null, _react["default"].createElement(_rnPlaceholder.PlaceholderLine, {
    height: props.height,
    noMargin: true
  })));
};

Line.propTypes = _uiSpec.Placeholder.LineProps;
Line.defaultProps = {
  width: 100
};
var _default = {
  Circle: Circle,
  Line: Line
};
exports["default"] = _default;