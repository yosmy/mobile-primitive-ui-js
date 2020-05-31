import React from "react";
import {TextInput} from "react-native";
import {Container as ContainerSpec, Input as Spec} from "@yosmy/primitive-ui-spec";
import {styled} from "@yosmy/style";

const Input = ({
    id, value, placeholder, focus, keyboard, length, multi, secure, capitalize,
    onChange, style, children, ...props
}) => {
    delete props.align;
    delete props.margin;
    delete props.padding;
    delete props.border;
    delete props.width;

    return <TextInput
        testID={id}
        value={value}
        placeholder={placeholder}
        autoFocus={focus}
        keyboardType={buildKeyboardType(keyboard)}
        returnKeyType="done"
        maxLength={length}
        multiline={multi ? true : undefined}
        numberOfLines={multi ? multi : undefined}
        secureTextEntry={secure}
        autoCapitalize={capitalize}
        onChangeText={onChange}
        style={style}
        {...props} // key
    />
};

Input.propTypes = Spec.Props;

Input.defaultProps = {
    capitalize: "none"
};

const buildKeyboardType = (keyboard) => {
    switch (keyboard) {
        case "number":
            return "number-pad";
        case "decimal":
            return "decimal-pad";
        case "phone":
            return "phone-pad";
        default:
            // Need to be undefined, to make autoCapitalize works
            // https://github.com/facebook/react-native/issues/8932#issuecomment-287013962
            return undefined;
    }
};

const StyledInput = styled(Input)`
    ${props => ContainerSpec.compileAlign(props.align)}
    ${props => ContainerSpec.compileMargin(props.margin)}
    ${props => ContainerSpec.compilePadding(props.padding)}
    
    ${props => ContainerSpec.compileBorderWidth(props.border)}
    ${props => ContainerSpec.compileBorderStyle(props.border)}
    ${props => ContainerSpec.compileBorderColor(props.border)}
    ${props => ContainerSpec.compileBorderRadius(props.border)}
    
    ${props => ContainerSpec.compileWidth(props.width)}
    ${props => ContainerSpec.compileHeight(props.height)}
`;

export default StyledInput;
