import React from "react";
import {Image as BaseImage, TouchableOpacity} from "react-native";
import {Image as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec"
import {styled} from "@yosmy/style";

const Image = ({
   source, resize, onClick, style, ...props
}) => {
    delete props.flow;
    delete props.align;
    delete props.margin;
    delete props.border;
    delete props.width;
    delete props.height;

    source = buildSource(source);

    let image = <BaseImage
        source={source}
        resizeMode={resize}
        fadeDuration={0} // Removes the fade effect when showing the image
        style={style}
    />;

    if (onClick) {
        image = <TouchableOpacity
            onPress={onClick}
            activeOpacity={0.8}
        >
            {image}
        </TouchableOpacity>;
    }

    return image;
};

Image.propTypes = Spec.Props;

Image.defaultProps = {
    resize: "cover"
}

const buildSource = (source) => {
    if (typeof source === "string") {
        source = {
            uri: source
        }
    }

    return source;
};

const StyledImage = styled(Image)`
    ${props => ContainerSpec.compileFlex(props.flex)}
    ${props => ContainerSpec.compileAlign(props.align)}
    ${props => ContainerSpec.compileMargin(props.margin)}
    ${props => ContainerSpec.compileBorderWidth(props.border)}
    ${props => ContainerSpec.compileBorderColor(props.border)}
    ${props => ContainerSpec.compileBorderRadius(props.border)}
    ${props => ContainerSpec.compileWidth(props.width)}
    ${props => ContainerSpec.compileHeight(props.height)}
`;

export default StyledImage;