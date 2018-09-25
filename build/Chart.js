"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _victoryNative = require("victory-native");

var _reactNativeElements = require("react-native-elements");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Chart = function Chart(props) {
  return _react["default"].createElement(_victoryNative.VictoryChart // https://github.com/FormidableLabs/victory-native/issues/501
  // theme={VictoryTheme.material}
  , {
    containerComponent: _react["default"].createElement(_victoryNative.VictoryVoronoiContainer, {
      labels: function labels(_ref) {
        var datum = _ref.datum;
        return "".concat(props.xAxis.name.toLowerCase(), " ").concat(datum[props.xAxis.dataKey], ", ").concat(datum[props.lines[0].dataKey], " ").concat(props.lines[0].unit);
      }
    })
  }, _react["default"].createElement(_victoryNative.VictoryLine, {
    style: {
      data: {
        stroke: props.lines[0].stroke
      },
      parent: {
        border: "1px solid #ccc"
      }
    },
    data: props.data,
    x: props.xAxis.dataKey,
    y: props.lines[0].dataKey
  }));
};

Chart.propTypes = {
  data: _propTypes["default"].array,
  xAxis: _propTypes["default"].shape({
    name: _propTypes["default"].string.isRequired,
    dataKey: _propTypes["default"].string.isRequired
  }).isRequired,
  lines: _propTypes["default"].arrayOf(_propTypes["default"].shape({
    name: _propTypes["default"].string.isRequired,
    dataKey: _propTypes["default"].string.isRequired,
    unit: _propTypes["default"].string,
    stroke: _propTypes["default"].string
  }).isRequired)
};

var _default = (0, _reactNativeElements.withTheme)(Chart);

exports["default"] = _default;