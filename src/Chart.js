import React from "react";
import PropTypes from "prop-types";
import {VictoryChart, VictoryLine, VictoryVoronoiContainer} from "victory-native";

const Chart = (props) => {
    return <VictoryChart
        // https://github.com/FormidableLabs/victory-native/issues/501
        // theme={VictoryTheme.material}
        containerComponent={
            <VictoryVoronoiContainer
                labels={({datum}) => {
                    return `${props.xAxis.name.toLowerCase()} ${datum[props.xAxis.dataKey]}, ${datum[props.lines[0].dataKey]} ${props.lines[0].unit}`;
                }}
            />
        }
    >
        <VictoryLine
            style={{
                data: {
                    stroke: props.lines[0].stroke
                },
                parent: {
                    border: "1px solid #ccc"
                }
            }}
            data={props.data}
            x={props.xAxis.dataKey}
            y={props.lines[0].dataKey}
        />
        {/*<VictoryLegend*/}
        {/*style={{*/}
        {/*border: {*/}
        {/*stroke: "black"*/}
        {/*}*/}
        {/*}}*/}
        {/*data={[*/}
        {/*{*/}
        {/*name: props.lines[0].name*/}
        {/*},*/}
        {/*]}*/}
        {/*/>*/}
    </VictoryChart>
};

Chart.propTypes = {
    data: PropTypes.array,
    xAxis: PropTypes.shape({
        name: PropTypes.string.isRequired,
        dataKey: PropTypes.string.isRequired
    }).isRequired,
    lines: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        dataKey: PropTypes.string.isRequired,
        unit: PropTypes.string,
        stroke: PropTypes.string
    }).isRequired),
};

export default Chart;
