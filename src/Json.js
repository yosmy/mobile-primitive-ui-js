import React from "react";
import JSONTree from 'react-native-json-tree'
import {Container as ContainerSpec, Json as Spec} from "@yosmy/primitive-ui-spec";
import {styled} from "@yosmy/style";

const Json = ({
    style, children, ...props
}) => {
    delete props.margin;

    return <JSONTree
        {...props} // key
        data={children}
    />
};

Json.propTypes = Spec.Props;

const StyledJson = styled(Json)`
    ${props => ContainerSpec.compileMargin(props.margin)}
`;

export default StyledJson;