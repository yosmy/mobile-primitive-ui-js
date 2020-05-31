import React from "react";
import {ImageBackground, KeyboardAvoidingView, Platform, ScrollView, StyleSheet} from "react-native";
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {LinearGradient} from "expo-linear-gradient";
import {styled} from "@yosmy/style";
import {normalizeBackground} from "../Container";
import {Layout as LayoutSpec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec";

const Content = ({
    gradient, background, scroll, style, children, ...props
}) => {
    delete props.align;
    delete props.margin;
    delete props.padding;
    delete props.border;
    delete props.height;

    if (scroll) {
        children = <ScrollView
            keyboardShouldPersistTaps="always"
            style={{
                flex: 1
            }}
        >
            {children}
        </ScrollView>;
    }

    const insets = useSafeAreaInsets();

    // KeyboardAvoidingView is just a normal <View /> component with paddingBottom
    // https://reactnative.dev/docs/keyboardavoidingview#behavior
    // https://github.com/facebook/react-native/blob/master/Libraries/Components/Keyboard/KeyboardAvoidingView.js
    // https://stackoverflow.com/a/58385319/5257802
    children = <KeyboardAvoidingView
        behavior={Platform.select({
            android: "height",
            ios: "padding"
        })}
        keyboardVerticalOffset={insets.top}
        style={StyleSheet.compose(style, {flex: 1})}
    >
        {children}
    </KeyboardAvoidingView>

    if (gradient) {
        children = <LinearGradient
            colors={gradient.colors}
            style={{
                flex: 1
            }}
        >
            {children}
        </LinearGradient>;
    }

    background = normalizeBackground(background);

    if (background && typeof background.image !== "undefined") {
        children = <ImageBackground
            source={typeof background.image === "string"
                ? {uri: background.image}
                : background.image
            }
            resizeMode={background.resize}
            style={{
                width: "100%", // Mandatory for ImageBackground
                flex: 1
            }}
        >
            {children}
        </ImageBackground>;
    }

    return children;
};

Content.propTypes = LayoutSpec.Content.Props;

Content.defaultProps = {
    scroll: true
};

const StyledContent = styled(Content)`
    ${props => ContainerSpec.compileAlign(props.align)}
    
    ${props => ContainerSpec.compileMargin(props.margin)}
    ${props => ContainerSpec.compilePadding(props.padding)}
    
    ${props => ContainerSpec.compileBorderStyle(props.border)}
    ${props => ContainerSpec.compileBorderColor(props.border)}
    ${props => ContainerSpec.compileBorderRadius(props.border)}
    
    ${props => ContainerSpec.compileHeight(props.height)}
`;

export default StyledContent;