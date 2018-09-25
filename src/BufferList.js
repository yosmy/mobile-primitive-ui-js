import React from 'react';
import {FlatList} from 'react-native';
import {
    BufferListProps,
    prepareMarginStyle,
    prepareMobileBorderStyle as prepareBorderStyle,
} from '@yosmy/ui-spec';
import {withTheme} from 'react-native-elements';

const BufferList = (props) => {
    const style = {
        ...prepareMarginStyle(props.margin, props.theme),
        ...prepareBorderStyle(props.border, props.theme),
        ...props.style
    };

    return <FlatList
        data={props.data}
        keyExtractor={props.identifier}
        initialNumToRender={props.init}
        renderItem={props.render}
        extraData={props.change}
        keyboardShouldPersistTaps="always"
        onEndReachedThreshold={props.end && props.end.threshold}
        onEndReached={props.end && props.end.onReached}
        style={style}
    />
};

BufferList.propTypes = BufferListProps;

export default withTheme(BufferList);
