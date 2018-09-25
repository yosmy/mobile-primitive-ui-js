import React from 'react';
import PropTypes from 'prop-types';
import {KeyboardAvoidingView, Platform, ScrollView, View} from 'react-native';
// import {Keyboard} from 'react-native';
import {AlignProp, PaddingProp, preparePaddingStyle} from "@yosmy/ui-spec/src";
import {withTheme} from 'react-native-elements';
// import * as Progress from 'react-native-progress';

const Content = (props) => {
    let children;

    if (props.scroll) {
        children = <ScrollView
            keyboardShouldPersistTaps="always"
        >
            {props.children}
        </ScrollView>;
    } else {
        children = <View>
            {props.children}
        </View>;
    }

    return <KeyboardAvoidingView // KeyboardAvoidingView is just a normal <View /> component with paddingBottom
        contentContainerStyle={{
            flexGrow: props.grow === true ? 1 : undefined, // Needed for stuff like floating buttons located at bottom
            justifyContent: props.align ? props.align.justifyContent : undefined,
            alignItems: props.align ? props.align.alignItems : undefined,
            // opacity: progress ? 0.5 : undefined,
        }}
        behavior={Platform.select({ android: 'height', ios: 'padding' })}
        style={{
            flex: props.flex,
            height: props.height,
            backgroundColor: props.background,
            ...preparePaddingStyle(props.padding, props.theme),
        }}
        // pointerEvents={progress ? 'none' : 'auto'}
    >
        {/*{progress && <Progress.Circle*/}
        {/*    indeterminate*/}
        {/*    size={20}*/}
        {/*    style={{*/}
        {/*        position: 'absolute',*/}
        {/*        top: '5%',*/}
        {/*        right: '5%',*/}
        {/*        zIndex: 999*/}
        {/*    }}*/}
        {/*/>}*/}
        {/*{progress && <Progress.Bar*/}
        {/*    indeterminate*/}
        {/*    borderRadius={0}*/}
        {/*    borderWidth={1}*/}
        {/*    style={{*/}
        {/*        position: 'absolute',*/}
        {/*        top: '5%',*/}
        {/*        zIndex: 999,*/}
        {/*        alignSelf: 'center'*/}
        {/*    }}*/}
        {/*/>}*/}
        {children}
    </KeyboardAvoidingView>
};

Content.propTypes = {
    grow: PropTypes.bool,
    scroll: PropTypes.bool,
    align: AlignProp,
    padding: PaddingProp,
    background: PropTypes.string,
    height: PropTypes.number,
    onKeyboardShow: PropTypes.func, // (height)
    onKeyboardHide: PropTypes.func, // ()
};

export default withTheme(Content);