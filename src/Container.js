import React from 'react';
import {ImageBackground, TouchableOpacity, View} from "react-native";
import {withTheme} from 'react-native-elements';
import {
    prepareMobileFlexParentStyle as prepareFlexParentStyle,
    prepareFlexChildStyle,
    prepareMarginStyle,
    preparePaddingStyle,
    prepareMobileBorderStyle as prepareBorderStyle,
} from "@yosmy/ui-spec";

const Container = ({
   theme,
   flow, align, flex, left, center, right, margin, padding, border,
   width, height, background, color,
   onClick,
   style, children,
   ...props
}) => {
    let outsideStyle = {
        flex: flex ? (typeof flex === 'number' ? flex : 1) : undefined,
        ...prepareFlexChildStyle({left: left, center: center, right: right}),
        ...prepareMarginStyle(margin, theme),
        ...preparePaddingStyle(padding, theme),
        ...prepareBorderStyle(border, theme),
        ...style
    };

    const insideStyle = {
        ...prepareFlexParentStyle({
            flow: flow,
            align: align,
        }),
    };

    if (typeof width !== 'undefined') {
        if (width === 'full') {
            width = '100%';
        }

        outsideStyle = {
            ...outsideStyle,
            width: width
        }
    }

    if (typeof height !== 'undefined') {
        outsideStyle = {
            ...outsideStyle,
            height: height
        }
    }

    /* Convert background into an array */

    if (typeof background !== 'undefined' && typeof background !== 'object') {
        // It's a color?
        if (typeof background === 'string') {
            if (background.indexOf('#') === 0) {
                background = {
                    color: background,
                }
            } else {
                switch (background) {
                    case 'mono':
                    case 'mono.contrast':
                        background = {
                            color: theme.palette.mono.contrast
                        };

                        break;
                    default:
                        throw new Error(`Color "${color}" not implemented`)
                }
            }
        }
        // It's an image
        else {
            background = {
                image: background,
                resize: 'cover'
            }
        }
    }

    let component;

    if (background) {
        if (typeof background.image !== 'undefined') {
            const source = typeof background.image === 'string'
                ? {uri: background.image}
                : background.image;

            component = <ImageBackground
                source={source}
                resizeMode={background.resize}
                style={{
                    ...outsideStyle,
                    ...insideStyle,
                }}
                {...props} // key
            >
                {children}
            </ImageBackground>;
        } else if (typeof background.color !== 'undefined') {
            component = <View
                style={{
                    backgroundColor: background.color,
                    ...outsideStyle,
                    ...insideStyle,
                }}
                {...props} // key
            >
                {children}
            </View>;
        } else {
            throw new Error("No image or color for background");
        }
    } else {
        component = <View
            style={{
                ...outsideStyle,
                ...insideStyle,
            }}
            {...props} // key
        >
            {children}
        </View>
    }

    if (typeof onClick !== 'undefined') {
        const {style, children, ...componentProps} = component.props;

        component = <TouchableOpacity
            onPress={onClick}
            style={{
                ...style,
                ...outsideStyle,
            }}
        >
            <component.type
                {...componentProps}
                style={{
                    ...insideStyle,
                }}
            >
                {children}
            </component.type>
        </TouchableOpacity>;
    }

    return <component.type
        {...component.props}
    />;
};

export default withTheme(Container);