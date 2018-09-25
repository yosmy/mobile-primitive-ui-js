import React from 'react';
import {
    PlaceholderMedia as BasePlaceholderMedia,
    PlaceholderLine as BasePlaceholderLine,
    Shine as PlaceholderAnimation
} from "rn-placeholder";
import {Placeholder} from "@yosmy/ui-spec";
import Container from "./Container";

const Circle = (props) => {
    return <Container
        margin={props.margin}
    >
        <PlaceholderAnimation>
            <BasePlaceholderMedia
                isRound={true}
                size={props.size}
            />
        </PlaceholderAnimation>
    </Container>
};

Circle.propTypes = Placeholder.CircleProps;

const Line = (props) => {
    return <Container
        margin={props.margin}
        width={props.width}
    >
        <PlaceholderAnimation>
            <BasePlaceholderLine height={props.height} noMargin />
        </PlaceholderAnimation>
    </Container>
};

Line.propTypes = Placeholder.LineProps;

Line.defaultProps = {
    width: 100
}

export default {
    Circle,
    Line
};