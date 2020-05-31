import React from "react";
import {Text as BaseText} from "react-native";
import {styled} from "@yosmy/style";
import {Text as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec"

const Text = ({
    style, children, ...props
}) => {
    delete props.flex;
    delete props.margin;
    delete props.padding;
    delete props.border;
    delete props.width;
    delete props.background;
    delete props.wrap;
    delete props.color;
    delete props.size;

    return <BaseText
        style={style}
        {...props} // key
    >
        {children}
    </BaseText>;
};

Text.propTypes = Spec.Props;

// If the rounded border is not visible, try applying overflow: "hidden" as well.
// https://reactnative.dev/docs/view-style-props#borderradius
// https://github.com/facebook/react-native/issues/10807#issuecomment-274291147

const StyledText = styled(Text)`
    ${props => Spec.compileTextAlign(props.align)}
    ${props => ContainerSpec.compileAlign(props.align)}
    ${props => ContainerSpec.compileMargin(props.margin)}
    ${props => ContainerSpec.compilePadding(props.padding)}
    ${props => ContainerSpec.compileWidth(props.width)}
    
    ${props => ContainerSpec.compileBorderWidth(props.border)}
    ${props => ContainerSpec.compileBorderStyle(props.border)}
    ${props => ContainerSpec.compileBorderColor(props.border)}

    ${props => ContainerSpec.compileBorderRadius(props.border)}
    ${props => props.border && props.border.radius && `overflow: hidden`}

    ${props => ContainerSpec.compileBackground(props.background)}
    ${props => Spec.compileWrap(props.wrap)}
    ${props => Spec.compileColor(props.color)}
    ${props => Spec.compileSize(props.size)}
`;

export default StyledText;