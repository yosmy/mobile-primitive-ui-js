import React from "react";
import PropTypes from "prop-types";
import {LinearGradient} from "expo-linear-gradient";
import {Container as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec"
import {styled} from "@yosmy/style";

const Gradient = ({
    colors, locations, style, ...props
}) => {
    delete props.width;
    delete props.height;
    delete props.position;

    return <LinearGradient
        colors={colors}
        locations={locations}
        style={style}
    />
};

Gradient.propTypes = {
    colors: PropTypes.array.isRequired,
    locations: PropTypes.array,
    position: ContainerSpec.PositionProp
};

const StyledGradient = styled(Gradient)`
    ${props => Spec.compileWidth(props.width)}
    ${props => Spec.compileHeight(props.height)}

    ${props => Spec.compilePosition(props.position)}
`;

export default StyledGradient;