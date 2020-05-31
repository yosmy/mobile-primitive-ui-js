import React from "react";
import {storiesOf} from "@storybook/react-native";
import Progress from "../src/Progress";

storiesOf("Progress", module)
    .add("default", () => (
        <Progress />
    ))
    .add("align", () => (
        <Progress
            align={{
                self: "center"
            }}
        />
    ))
    .add("color", () => (
        <Progress 
            color="red" 
        />
    ))
    .add("size", () => (
        <Progress 
            size={20} 
        />
    ))
;
