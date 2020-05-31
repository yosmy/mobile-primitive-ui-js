import React from "react";
import {storiesOf} from "@storybook/react-native";
import Text from "../src/Text";
import {Container} from "../src/Container";
import pizza from "./pizza.jpg";

storiesOf("Container", module)
    .add("flex inside column", () => (
        <Container
            flow="column"
            flex={1}
        >
            <Container
                flex={1}
            >
                <Text>Content 1</Text>
            </Container>
            <Container
                flex={1}
            >
                <Text>Content 2</Text>
            </Container>
        </Container>
    ))
    .add("flex inside row", () => (
        <Container
            flow="row"
        >
            <Container
                flex={1}
                border={1}
            >
                <Text>Content 1</Text>
            </Container>
            <Container
                flex={1}
                border={1}
            >
                <Text>Content 2</Text>
            </Container>
        </Container>
    ))
    .add("flow as row", () => (
        <Container
            flow="row"
        >
            <Text>Content 1</Text>
            <Text>Content 2</Text>
        </Container>
    ))
    .add("align as center", () => (
        <Container
            flow="row"
            align={{
                main: "center",
                cross: "center"
            }}
        >
            <Text>Content 1</Text>
            <Text>Content 2</Text>
        </Container>
    ))
    .add("align self center", () => (
        <Container
            align={{
                self: "center"
            }}
            border={1}
        >
            <Text>Content</Text>
        </Container>
    ))
    .add("align self start", () => (
        <Container
            align={{
                self: "flex-start"
            }}
            border={1}
        >
            <Text>Content</Text>
        </Container>
    ))
    .add("align self stretch", () => (
        <Container
            align={{
                self: "stretch"
            }}
            border={1}
        >
            <Text>Content</Text>
        </Container>
    ))
    .add("border", () => (
        <Container
            border={1}
        >
            <Text>Content</Text>
        </Container>
    ))
    .add("border not all", () => (
        <Container
            border={{
                bottom: {
                    width: 1,
                    color: "red"
                }
            }}
        >
            <Text>Content</Text>
        </Container>
    ))
    .add("margin", () => (
        <Container
            border={1}
            margin={8}
        >
            <Text>Content</Text>
        </Container>
    ))
    .add("padding", () => (
        <Container
            border={1}
            padding={8}
        >
            <Text>Content</Text>
        </Container>
    ))
    .add("background using color", () => (
        <Container
            background="red"
        >
            <Text>Content</Text>
        </Container>
    ))
    .add("background using imported image", () => (
        <Container
            flow="row"
            align={{
                main: "center",
                cross: "center"
            }}
            background={pizza}
        >
            <Text>Content</Text>
        </Container>
    ))
    .add("gradient", () => (
        <Container
            gradient={{
                colors: ['red', 'blue']
            }}
        >
            <Text>Content</Text>
        </Container>
    ))
    .add("width", () => (
        <Container
            border={1}
            width={100}
        >
            <Text>Content</Text>
        </Container>
    ))
    .add("height", () => (
        <Container
            border={1}
            height={100}
        >
            <Text>Content</Text>
        </Container>
    ))
    .add("shadow", () => (
        <Container
            margin={4}
            width={100}
            height={100}
            shadow={{
                // https://ethercreative.github.io/react-native-shadow-generator/
                color: "#000000",
                width: 0,
                height: 2,
                opacity: 0.23,
                radius: 2.62,
                elevation: 4
            }}
            background="red"
        >
            <Text>Content</Text>
        </Container>
    ))
    .add("onClick", () => (
        <Container
            flow="row"
            align={{
                main: "flex-start",
                cross: "center"
            }}
        >
            <Text>L</Text>
            <Container
                flow="row"
                align={{
                    main: "flex-start",
                    cross: "center"
                }}
                flex
                border={1}
                onClick={() => {
                    console.log("onClick");
                }}
            >
                <Text>Title</Text>
            </Container>
            <Text>R</Text>
        </Container>
    ))
    .add("animation", () => (
        <Container
            border={1}
            animation="bounceInRight"
        >
            <Text>Content</Text>
        </Container>
    ))
;