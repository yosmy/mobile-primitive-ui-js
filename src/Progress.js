import React, {useState, useRef, useEffect} from 'react';
import {ProgressProps, prepareMarginStyle} from "@yosmy/ui-spec";
import {withTheme} from 'react-native-elements';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const Progress = (props) => {
    const [fill, setFill] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        ref.current.animate(fill ? 100 : 0);
    }, [fill]);

    const tintColor = buildTintColor(props.theme, props.color);

    const size = buildSize(props.theme, props.size);

    const style = buildStyle(props.theme, props.margin, props.style);

    return <AnimatedCircularProgress
        tintColor={tintColor}
        size={size}
        width={1}
        fill={100}
        duration={3000}
        ref={ref}
        onAnimationComplete={() => {
            setFill(!fill);
        }}
        style={style}
    />;
};

Progress.propTypes = ProgressProps;

const buildTintColor = (theme, color) => {
    switch (color) {
        case 'primary':
            return theme.palette.primary.main;
        case 'contrast':
            return theme.palette.primary.contrast;
        case 'disabled':
            return theme.palette.primary.disabled;
        case undefined:
            return undefined;
        default:
            throw new Error(`Invalid color "${color}"`)
    }
};

const buildSize = (theme, size) => {
    switch (size) {
        case 'sm':
            return 10;
        case 'md':
            return 20;
        case undefined:
            return 20;
        default:
            throw new Error(`Invalid size "${size}"`)
    }
};

const buildStyle = (theme, margin, style) => {
    return {
        ...prepareMarginStyle(margin, theme),
        ...style
    }
};

export default withTheme(Progress);