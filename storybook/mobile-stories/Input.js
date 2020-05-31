import React from "react";
import {storiesOf} from "@storybook/react-native";
import Input from "../src/Input";

storiesOf("Input", module)
    .add("default", () => (
        <Input />
    ))
    .add("with width", () => (
        <Input
            border={1}
            width={100}
        />
    ))
    .add("without width", () => (
        <Input
            border={1}
        />
    ))
    .add("with placeholder", () => (
        <Input
            placeholder="This is a placeholder"
        />
    ))
    .add("with capitalize words", () => (
        <Input
            capitalize="words"
        />
    ))
    .add("with secure", () => (
        <Input
            secure
        />
    ))
    .add("onChange", () => (
        <Input
            onChange={() => {
                console.log("onChange");
            }}
        />
    ))
;