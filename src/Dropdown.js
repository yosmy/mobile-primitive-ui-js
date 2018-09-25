import React from 'react';
import {Dropdown as BaseDropdown} from "react-native-material-dropdown";

const Dropdown = (props) => {
    return <BaseDropdown
        {...props}
        value={props.value}
        label={props.label}
        data={props.data}
        onChangeText={props.onChange}
    />;
};

export default Dropdown;