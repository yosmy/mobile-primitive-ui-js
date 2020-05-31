import React, {useState, useRef, useEffect} from "react";
import {StyleSheet} from 'react-native';
import {AnimatedCircularProgress} from "react-native-circular-progress";
import {Container as ContainerSpec, Progress as Spec} from "@yosmy/primitive-ui-spec"
import {styled} from "@yosmy/style";

const Progress = ({
    size, color, style, ...props
}) => {
    delete props.align;
    delete props.margin;

    const [fill, setFill] = useState(null);
    const ref = useRef(null);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        ref.current.animate(fill ? 100 : 0);
    }, [fill]);

    // Fix to avoid warning "Invalid prop style of type array, expected object"
    style = StyleSheet.flatten(style);

    return <AnimatedCircularProgress
        tintColor={color}
        size={size}
        width={1}
        fill={100}
        duration={3000}
        ref={ref}
        onAnimationComplete={() => {
            setFill(!fill);
        }}
        style={style}
        {...props} // key
    />;
};

Progress.propTypes = Spec.Props;

Progress.defaultProps = {
    size: 10
};

const StyledProgress = styled(Progress)`
    ${props => ContainerSpec.compileAlign(props.align)}
    
    ${props => ContainerSpec.compileMargin(props.margin)}
`;

export default StyledProgress;

// import React, {useRef} from "react";
// import PropTypes from "prop-types";
// import {Animated, Easing} from "react-native";
// import {ProgressProps} from "@yosmy/primitive-ui-spec";
// import {Svg, Path} from "react-native-svg";
//
// const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
//     const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
//
//     return {
//         x: centerX + radius * Math.cos(angleInRadians),
//         y: centerY + radius * Math.sin(angleInRadians),
//     };
// }
//
// const circlePath = (x, y, radius, startAngle, endAngle) => {
//     const start = polarToCartesian(x, y, radius, endAngle * 0.9999);
//     const end = polarToCartesian(x, y, radius, startAngle);
//     const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
//     const d = ["M", start.x, start.y, "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y];
//
//     return d.join(" ");
// };
//
// const Draw = ({
//                   size,
//                   end,
//                   color
//               }) => {
//     return <Svg width={size * 2} height={size * 2}>
//         <Path
//             d={circlePath(
//                 size,
//                 size,
//                 size - 1,
//                 0,
//                 end
//             )}
//             stroke={color}
//             strokeWidth={1}
//             strokeLinecap="butt"
//             fill="transparent"
//         />
//     </Svg>;
// };
//
// Draw.propTypes = {
//     size: PropTypes.number.isRequired,
//     end: PropTypes.number.isRequired,
//     color: PropTypes.string.isRequired
// };
//
// const AnimatedDraw = Animated.createAnimatedComponent(Draw);
//
// const Progress = () => {
//     const end = useRef(new Animated.Value(0)).current;
//
//     Animated.timing(end, {
//         toValue: 360,
//         duration: 500
//     }).start();
//
//     return <AnimatedDraw
//         end={end}
//         color="#FFFFFF"
//     />;
// };
//
// Progress.propTypes = ProgressProps;
//
// Progress.defaultProps = {
//     size: 10,
// };
//
// export default Progress;