import React from "react";
import {storiesOf} from "@storybook/react-native";
import LinePlaceholder from "../src/LinePlaceholder";

storiesOf("LinePlaceholder", module)
    .add("default", () => (
        <LinePlaceholder />
    ))
    .add("width", () => (
        <LinePlaceholder
            width={80}
        />
    ))
    .add("margin", () => (
        <LinePlaceholder
            margin={8}
        />
    ))
;
