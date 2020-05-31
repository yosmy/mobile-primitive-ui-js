import React from "react";
import {PlaceholderLine as BasePlaceholderLine, Shine as PlaceholderAnimation} from "rn-placeholder";
import {styled} from "@yosmy/style";
import {LinePlaceholder as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec"

const LinePlaceholder = ({
    style, ...props
}) => {
    delete props.margin;
    delete props.width;
    delete props.height;

    return <PlaceholderAnimation
        {...props} // key
    >
        <BasePlaceholderLine
            noMargin
            style={style}
        />
    </PlaceholderAnimation>
};

LinePlaceholder.propTypes = Spec.Props;

const StyledLinePlaceholder = styled(LinePlaceholder)`
    ${props => ContainerSpec.compileMargin(props.margin)}
    
    ${props => ContainerSpec.compileWidth(props.width)}
    ${props => ContainerSpec.compileHeight(props.height)}
`;

export default StyledLinePlaceholder;