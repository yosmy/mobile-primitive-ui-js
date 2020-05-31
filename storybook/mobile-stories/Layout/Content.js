import React from "react";
import {storiesOf} from "@storybook/react-native";
import Content from "../../src/Layout/Content";
import Text from "../../src/Text";
import pizza from "../pizza.jpg";

storiesOf("Content", module)
    .add("default", () => {
        return <Content
            background="red"
        >
            <Text>Content</Text>
        </Content>
    })
    .add("scroll", () => {
        return <Content
            background="red"
        >
            <Text>Content 1</Text>
            <Text>Content 2</Text>
            <Text>Content 3</Text>
            <Text>Content 4</Text>
            <Text>Content 5</Text>
            <Text>Content 6</Text>
            <Text>Content 7</Text>
            <Text>Content 8</Text>
            <Text>Content 9</Text>
            <Text>Content 1</Text>
            <Text>Content 2</Text>
            <Text>Content 3</Text>
            <Text>Content 4</Text>
            <Text>Content 5</Text>
            <Text>Content 6</Text>
            <Text>Content 7</Text>
            <Text>Content 8</Text>
            <Text>Content 9</Text>
            <Text>Content 1</Text>
            <Text>Content 2</Text>
            <Text>Content 3</Text>
            <Text>Content 4</Text>
            <Text>Content 5</Text>
            <Text>Content 6</Text>
            <Text>Content 7</Text>
            <Text>Content 8</Text>
            <Text>Content 9</Text>
            <Text>Content 1</Text>
            <Text>Content 2</Text>
            <Text>Content 3</Text>
            <Text>Content 4</Text>
            <Text>Content 5</Text>
            <Text>Content 6</Text>
            <Text>Content 7</Text>
            <Text>Content 8</Text>
            <Text>Content 9</Text>
        </Content>
    })
    .add("no scroll", () => {
        return <Content
            background="red"
            scroll={false}
        >
            <Text>Content</Text>
        </Content>
    })
    .add("gradient", () => {
        return <Content
            border={1}
            gradient={{
                colors: ['red', 'blue']
            }}
        >
            <Text>Content</Text>
        </Content>
    })
    .add("background", () => {
        return <Content
            border={1}
            background={pizza}
        >
            <Text>Content</Text>
        </Content>
    })
;
