import React from "react";
import {PlaceholderMedia as BasePlaceholderMedia, Shine as PlaceholderAnimation} from "rn-placeholder";
import {styled} from "@yosmy/style";
import {CirclePlaceholder as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec"

const CirclePlaceholder = ({
    size, style, ...props
}) => {
    delete props.margin;

    return <PlaceholderAnimation
        {...props} // key
    >
        <BasePlaceholderMedia
            isRound={true}
            size={size}
            style={style}
        />
    </PlaceholderAnimation>
};

CirclePlaceholder.propTypes = Spec.Props;

const StyledCirclePlaceholder = styled(CirclePlaceholder)`
    ${props => ContainerSpec.compileMargin(props.margin)}
`;

export default StyledCirclePlaceholder;