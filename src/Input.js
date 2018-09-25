import React from 'react';
import {StyleSheet} from 'react-native';
import {
    InputProps,
} from '@yosmy/ui-spec';
import {Input as BaseInput, withTheme} from 'react-native-elements';
import Container from "./Container";
import Text from "./Text";

const Input = (props) => {
    const errorMessage = buildErrorMessage(props.error);

    const autoFocus = buildAutoFocus(props.focus);

    const autoCapitalize = buildAutoCapitalize(props.capitalize);

    const keyboardType = buildKeyboardType(props.keyboard);

    const maxLength = buildMaxLength(props.length);

    const secureTextEntry = buildSecureTextEntry(props.secure);

    let multilineProps;
    if (props.multi) {
        multilineProps = {
            multiline: true,
            numberOfLines: props.multi
        };
    }

    const onChangeText = buildOnChangeText(props.onChange);

    const leftIcon = buildLeftIcon(props.start);

    const rightIcon = buildRightIcon(props.end);

    const inputContainerStyle = buildInputContainerStyle(props.theme);

    return <Container
        flow='column'
        align={props.align}
        margin={props.margin}
        width={props.width}
        flex={props.flex}
        background={props.background}
        style={props.style}
    >
        <BaseInput
            testID={props.id}
            value={props.value}
            placeholder={props.placeholder}
            errorMessage={errorMessage}
            leftIcon={leftIcon}
            leftIconContainerStyle={{
                marginRight: props.theme.spacing(1),
            }}
            rightIcon={rightIcon}
            autoFocus={autoFocus}
            autoCapitalize={autoCapitalize}
            keyboardType={keyboardType}
            returnKeyType="done"
            maxLength={maxLength}
            secureTextEntry={secureTextEntry}
            {...multilineProps}
            onChangeText={onChangeText}
            inputContainerStyle={inputContainerStyle}
            errorStyle={{
                marginLeft: props.theme.spacing(1),
            }}
            containerStyle={{
                paddingHorizontal: 0
            }}
        >
            {props.children}
        </BaseInput>
        {props.help && (!Array.isArray(props.help)
                ? <Text
                    margin={{
                        left: 1
                    }}
                >
                    {props.help}
                </Text>
                : props.help.map((line, i) => {
                    return <Text
                        key={i}
                        margin={{
                            left: 1
                        }}
                    >
                        {line}
                    </Text>
                })
        )}
    </Container>
};

Input.propTypes = InputProps;

const buildErrorMessage = (error) => {
    return error;
};

const buildAutoFocus = (focus) => {
    return focus;
};

const buildAutoCapitalize = (capitalize) => {
    if (!capitalize) {
        return "none";
    }

    return capitalize;
};

const buildMaxLength = (length) => {
    return length;
};

const buildSecureTextEntry = (secure) => {
    return secure;
};

const buildKeyboardType = (keyboard) => {
    switch (keyboard) {
        case 'number':
            return 'number-pad';
        case 'decimal':
            return 'decimal-pad';
        case 'phone':
            return 'phone-pad';
        default:
            // Need to be undefined, to make autoCapitalize works
            // https://github.com/facebook/react-native/issues/8932#issuecomment-287013962
            return undefined;
    }
};

const buildOnChangeText = (onChange) => {
    return onChange;
};

const buildLeftIcon = (start) => {
    // Not start prop set?
    if (!start) {
        return undefined;
    }

    start = start();

    // Start prop set, but sometimes is null, like a country prefix, but with no country selected yet
    if (!start) {
        return undefined;
    }

    let props = start.props;

    // Is a Text component?
    if (start.props.children) {
        props = {
            style: {
                // Same size as input
                fontSize: 18,
                ...props.style
            },
            ...props
        };
    } else {
        props = {
            // Icon size
            size: 30,
            ...props
        }
    }

    return () => {
        return <start.type {...props} />
    };
};

const buildRightIcon = (end) => {
    let End;

    End = end;

    if (!End) {
        return undefined;
    }

    return <End />;
};

const buildInputContainerStyle = (theme) => {
    return  {
        borderColor: theme.colors.divider,
        borderBottomWidth: StyleSheet.hairlineWidth,
    };
};

export default withTheme(Input);
