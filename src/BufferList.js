import React from "react";
import {FlatList, SectionList} from "react-native";
import {BufferList as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec";
import {styled} from "@yosmy/style";

const BufferList = ({
    data, identifier, init, render, header, change, end, style, ...props
}) => {
    delete props.align;
    delete props.margin;
    delete props.border;
    delete props.width;
    delete props.height;

    props = {
        keyExtractor: identifier,
        initialNumToRender: init,
        renderItem: render,
        extraData: change,
        keyboardShouldPersistTaps: "always",
        onEndReachedThreshold: end && end.threshold,
        onEndReached: end && end.onReached,
        style: style,
        ...props // key
    };

    if (data[0].data) {
        return <SectionList
            sections={data}
            renderSectionHeader={header}
            {...props}
        />
    }

    return <FlatList
        data={data}
        {...props}
    />
};

BufferList.propTypes = Spec.props;

const StyledBufferList = styled(BufferList)`
    ${props => ContainerSpec.compileAlign(props.align)}
    
    ${props => ContainerSpec.compileMargin(props.margin)}
    
    ${props => ContainerSpec.compileBorderWidth(props.border)}
    ${props => ContainerSpec.compileBorderStyle(props.border)}
    ${props => ContainerSpec.compileBorderColor(props.border)}
    ${props => ContainerSpec.compileBorderRadius(props.border)}  
      
    ${props => ContainerSpec.compileWidth(props.width)}
    ${props => ContainerSpec.compileHeight(props.height)}
`;

export default StyledBufferList;
