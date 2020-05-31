import React from "react";
import {BlankLayout as Spec} from "@yosmy/primitive-ui-spec";
import Content from "./Layout/Content";

const BlankLayout = ({
    align, padding, grow, scroll,
    children
}) => {
    return <Content
        align={align}
        padding={padding}
        grow={grow}
        scroll={scroll}
    >
        {children}
    </Content>
};

BlankLayout.propTypes = Spec.Props;

export default BlankLayout;