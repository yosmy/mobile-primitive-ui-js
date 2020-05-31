import React from "react";
import {Dropdown as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec";
import {Picker} from '@react-native-picker/picker';
import {styled} from "@yosmy/style";

const Dropdown = ({
    value, data, onChange, style, ...props
}) => {
    delete props.margin;

    return <Picker
        selectedValue={value}
        onValueChange={onChange}
        style={style}
        {...props} // key
    >
        {data.map(({label, value}, i) => {
            return <Picker.Item
                key={i}
                label={label}
                value={value}
            />
        })}
    </Picker>;
};

Dropdown.propTypes = Spec.Props;

const StyledDropdown = styled(Dropdown)`
    ${props => ContainerSpec.compileMargin(props.margin)}
`;

export default StyledDropdown;