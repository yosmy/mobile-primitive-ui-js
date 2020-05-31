import React from "react";
import {styled} from "@yosmy/style";
import {Button as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec";
import {Container} from "./Container";

const Button = ({
    color, progress, onClick, style, children, ...props
}) => {
    delete props.align;
    delete props.margin;
    delete props.padding;
    delete props.border;

    return <Container
        flow="row"
        onClick={onClick}
        style={style}
        {...props} // key
    >
        {children}
    </Container>
};

Button.propTypes = Spec.Props;

const StyledButton = styled(Button)`
    ${props => ContainerSpec.compileAlign({
        main: "center",
        cross: "center",
        ...props.align
    })}
    
    ${props => ContainerSpec.compileMargin(props.margin)}
    
    ${props => ContainerSpec.compilePadding(props.padding)}
    
    ${props => ContainerSpec.compileBorderWidth(props.border)}
    ${props => ContainerSpec.compileBorderStyle(props.border)}
    ${props => ContainerSpec.compileBorderColor(props.border)}
    ${props => ContainerSpec.compileBorderRadius(props.border)}
`;

export default StyledButton;