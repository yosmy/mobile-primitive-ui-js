import React from "react";
import {storiesOf} from "@storybook/react-native";
import CirclePlaceholder from "../src/CirclePlaceholder";

storiesOf("CirclePlaceholder", module)
    .add("default", () => (
        <CirclePlaceholder />
    ))
    .add("size", () => (
        <CirclePlaceholder
            size={100}
        />
    ))
    .add("margin", () => (
        <CirclePlaceholder
            margin={8}
        />
    ))
;
