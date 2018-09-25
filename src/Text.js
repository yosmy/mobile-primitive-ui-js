import React from 'react';
import {Text as BaseText} from "react-native";
import {TextProps, prepareFlexChildStyle, prepareMarginStyle} from '@yosmy/ui-spec'
import {withTheme} from 'react-native-elements';

const Text = (props) => {
    const style = buildStyle(
        props.theme,
        props.variant,
        props.color,
        props.center,
        props.margin,
        props.wrap,
        props.style
    );

    return <BaseText
        style={style}
        {...props}
    />;
};

Text.propTypes = TextProps;

const buildStyle = (theme, variant, color, center, margin, wrap, style) => {
    let variantStyle = {};
    switch (variant) {
        case 'h1':
            variantStyle = {
                fontSize: 48,
            };

            break;
        case 'h2':
            variantStyle = {
                fontSize: 30,
            };

            break;
        case 'title':
            variantStyle = {
                fontSize: 16,
            };

            break;
        case 'menu':
            variantStyle = {
                fontSize: 18,
                // fontWeight: 'bold'
            };

            break;
        case 'bold':
            variantStyle = {
                fontWeight: 'bold'
            };

            break;
        case 'caption':
            variantStyle = {
                fontSize: 12,
                lineHeight: 20,
                marginVertical: 2,
                letterSpacing: 0.4,
                color: theme.palette.light
            };

            break;
        case undefined:
            break;
        default:
            throw new Error(`Invalid variant "${variant}"`)
    }

    let colorStyle = {};
    switch (color) {
        case 'primary':
        case 'primary.main':
            colorStyle = {
                color: theme.palette.primary.main
            };

            break;
        case 'contrast':
        case 'primary.contrast':
            colorStyle = {
                color: theme.palette.primary.contrast
            };

            break;
        case 'mono':
        case 'mono.main':
            colorStyle = {
                color: theme.palette.mono.main
            };

            break;
        case 'error':
        case 'error.main':
            colorStyle = {
                color: theme.palette.error.main
            };

            break;
        case 'mono.contrast':
            colorStyle = {
                color: theme.palette.mono.contrast
            };

            break;
        case undefined:
            break;
        default:
            throw new Error(`Invalid color "${color}"`)
    }

    let wrapStyle = wrap
        ? {
            flexShrink: 1
        }
        : {};

    return {
        ...variantStyle,
        ...colorStyle,
        ...prepareFlexChildStyle({center: center}),
        ...prepareMarginStyle(margin, theme),
        textAlign: center ? 'center' : undefined,
        ...wrapStyle,
        ...style,
    }
};

export default withTheme(Text);