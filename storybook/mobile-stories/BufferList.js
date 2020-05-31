import React from "react";
import {storiesOf} from "@storybook/react-native";
import BufferList from "../src/BufferList";
import Text from "../src/Text";

const buildList = (amount) => {
    let flat = [];

    for (let i = 0; i <= amount; i++) {
        flat = flat.concat({
            country: "US",
            prefix: "1",
            number: `7867861234${i}`,
        });
    }

    return flat;
}

storiesOf("BufferList", module)
    .add("flat", () => (
        <BufferList
            data={buildList(100)}
            init={5}
            identifier={({prefix, number}) => {
                return `${prefix}-${number}`;
            }}
            render={({item, index}) => {
                return <Text
                    key={index}
                >
                    +{item.prefix}-{item.number}
                </Text>
            }}
        />
    ))
    .add("section", () => (
        <BufferList
            data={[
                {
                    title: "Title 1",
                    data: buildList(150)
                },
                {
                    title: "Title 2",
                    data: buildList(100)
                }
            ]}
            init={5}
            identifier={({prefix, number}) => {
                return `${prefix}-${number}`;
            }}
            render={({item, index}) => {
                return <Text
                    key={index}
                >
                    +{item.prefix}-{item.number}
                </Text>
            }}
            header={({section: {title}}) => {
                return <Text color="red">
                    {title}
                </Text>
            }}
        />
    ))
;
