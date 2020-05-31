import React from "react";
import {ImageBackground, TouchableOpacity, StyleSheet, View} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import * as Animatable from 'react-native-animatable';
import {styled} from "@yosmy/style";
import {Container as Spec} from "@yosmy/primitive-ui-spec"

const Container = ({
   background, gradient, animation, animationRef, onClick, style, children, ...props
}) => {
    delete props.flow;
    delete props.align;
    delete props.flex;
    delete props.margin;
    delete props.padding;
    delete props.border;
    delete props.width;
    delete props.height;
    delete props.z;
    delete props.position;
    delete props.shadow;
    delete props.opacity;

    let Component = View;
    let customProps = {};

    background = normalizeBackground(background);

    if (background) {
        if (typeof background.image !== "undefined") {
            Component = ImageBackground;

            customProps = {
                source: typeof background.image === "string"
                    ? {uri: background.image}
                    : background.image,
                resizeMode: background.resize
            }
        } else if (typeof background.color !== "undefined") {
            style = StyleSheet.compose(
                style,
                {
                    backgroundColor: background.color,
                }
            )
        } else {
            throw new Error("No image or color for background");
        }
    } else if (gradient) {
        Component = LinearGradient;

        customProps = {
            colors: gradient.colors,
            locations: gradient.locations
        }
    }

    if (typeof onClick !== "undefined") {
        Component = TouchableOpacity;

        customProps = {
            onPress: onClick
        };
    }

    if (animation || animationRef) {
        Component = Animatable.View;

        if (animationRef) {
            customProps = {
                ref: animationRef
            };
        } else {
            customProps = {
                animation: animation
            };
        }
    }

    return <Component
        {...customProps}
        style={style}
        {...props} // key
    >
        {children}
    </Component>
};

Container.propTypes = Spec.Props;

const normalizeBackground = (background) => {
    const type = typeof background;

    switch (type) {
        case "undefined":
            break;
        // It"s a color
        case "string":
            background = {
                color: background,
            }

            break;
        // It"s an image
        case "number":
            background = {
                image: background,
                resize: "cover"
            }

            break;
        case "object":
            break;
        default:
            throw new Error(`Invalid type ${type}`);
    }

    return background;
};

const StyledContainer = styled(Container)`
    ${props => Spec.compileFlow(props.flow)}
    ${props => Spec.compileFlex(props.flex)}
    ${props => Spec.compileAlign(props.align)}

    ${props => Spec.compileWidth(props.width)}
    ${props => Spec.compileHeight(props.height)}

    ${props => Spec.compileMargin(props.margin)}
    ${props => Spec.compilePadding(props.padding)}

    ${props => Spec.compileBorderWidth(props.border)}
    ${props => Spec.compileBorderStyle(props.border)}
    ${props => Spec.compileBorderColor(props.border)}
    ${props => Spec.compileBorderRadius(props.border)}
    
    ${props => Spec.compileZ(props.z)}
    ${props => Spec.compilePosition(props.position)}
    ${props => Spec.compileShadow(props.shadow)}
    ${props => Spec.compileOpacity(props.opacity)}
`;

export {
    StyledContainer as Container,
    normalizeBackground
};
