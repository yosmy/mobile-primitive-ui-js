import React from 'react';
import PropTypes from "prop-types";
import {Image as BaseImage} from "react-native";
import {withTheme} from 'react-native-elements';
import {
    prepareMarginStyle,
    prepareFlexChildStyle
} from '@yosmy/ui-spec'

const Image = (props) => {
    let {theme, source, center, margin, width, height, style} = props;

    source = buildSource(source);

    const flexChildStyle = prepareFlexChildStyle({
        center: center
    });

    const marginStyle = prepareMarginStyle(
        margin,
        theme
    );

    style = {
        ...flexChildStyle,
        ...marginStyle,
        width: width,
        height: height,
        ...style,
    };

    return <BaseImage
        source={source}
        fadeDuration={0} // Removes the fade effect when showing the image
        style={style}
    />;
};

Image.propTypes = {
    source: PropTypes.any,
};

const buildSource = (source) => {
    if (typeof source === 'string') {
        source = {
            uri: source
        }
    }

    return source;
};

export default withTheme(Image);