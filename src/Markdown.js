import React from "react";
import BaseMarkdown from "react-native-simple-markdown";
import {Container} from "./Container";

const Markdown = ({
    children, ...props
}) => {
    return <Container
        flow="row"
        align={{
            main: "flex-start",
            cross: "flex-start",
        }}
        flex
        {...props}
    >
        <BaseMarkdown
            styles={{
                heading1: {
                    fontSize: 32,
                    fontWeight: "bold",
                    marginTop: 8,
                    marginBottom: 16
                },
                heading2: {
                    fontSize: 24,
                    fontWeight: "bold",
                    marginTop: 8,
                    marginBottom: 16
                },
                heading3: {
                    fontSize: 18,
                    fontWeight: "bold",
                    marginTop: 8,
                    marginBottom: 16
                },
                heading4: {
                    fontSize: 16,
                    fontWeight: "bold",
                    marginTop: 8,
                    marginBottom: 16
                },
                heading5: {
                    fontSize: 13,
                    fontWeight: "bold",
                    marginTop: 8,
                    marginBottom: 16
                },
                heading6: {
                    fontSize: 11,
                    marginTop: 8,
                    marginBottom: 16
                },
                strong: {
                    fontWeight: "bold",
                }
            }}
        >
            {children}
        </BaseMarkdown>
    </Container>;
};

export default Markdown;