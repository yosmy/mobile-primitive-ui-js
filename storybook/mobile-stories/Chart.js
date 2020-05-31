import React from "react";
import {storiesOf} from "@storybook/react-native";
import Chart from "../src/Chart";

storiesOf("Chart", module)
    .add("normal", () => (
        <Chart
            data={[
                {
                    total: 5,
                    year: 2020,
                    month: 1
                },
                {
                    total: 10,
                    year: 2020,
                    month: 2
                }
            ]}
            xAxis={{
                name: "Mes",
                dataKey: "month",
            }}
            lines={[{
                name: "Eventos",
                dataKey: "total",
                unit: "registros",
                stroke: "black"
            }]}
        />
    ))
;
