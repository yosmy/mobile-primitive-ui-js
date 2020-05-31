import React from "react";
import {storiesOf} from "@storybook/react-native";
import Gradient from "../src/Gradient";

storiesOf("Gradient", module)
    .add("default", () => (
        <Gradient
            colors={["red", "yellow"]}
            height={400}
        />
    ))
    .add("absolute", () => (
        <Gradient
            colors={["red", "yellow"]}
            height={100}
            width="100%"
            position={{
                top: 100
            }}
        />
    ))
;