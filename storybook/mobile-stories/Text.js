import React from "react";
import {storiesOf} from "@storybook/react-native";
import Text from "../src/Text";

storiesOf("Text", module)
    .add("default", () => (
        <Text>
            Default text
        </Text>
    ))
    .add("color", () => (
        <Text
            color="red"
        >
            Text with color
        </Text>
    ))
    .add("size", () => (
        <Text
            size={32}
        >
            Text with size
        </Text>
    ))
    .add("align", () => (
        <React.Fragment>
            <Text
                align={{
                    self: "flex-start"
                }}
            >
                Left text
            </Text>
            <Text
                align={{
                    self: "center"
                }}
            >
                Center text Center text Center text Center text Center text Center text Center text Center text Center text
            </Text>
            <Text
                align={{
                    self: "flex-end"
                }}
            >
                Right text
            </Text>
        </React.Fragment>
    ))
    .add("margin", () => (
        <Text
            margin={8}
        >
            Text with margin
        </Text>
    ))
;
