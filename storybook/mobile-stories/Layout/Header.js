import React from "react";
import {storiesOf} from "@storybook/react-native";
import Header from "../../src/Layout/Header";
import Text from "../../src/Text";

storiesOf("Header", module)
    .add("default", () => {
        return <Header
            start={<Text>Start</Text>}
            center={<Text>Center</Text>}
            end={<Text>End</Text>}
        />
    })
;
