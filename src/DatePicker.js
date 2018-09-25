import React from 'react';
import BaseDatePicker from "react-native-datepicker";

const DatePicker = (props) => {
    return <BaseDatePicker
        date={props.value}
        mode={props.mode || "date"}
        placeholder={props.placeholder || "Selecciona la fecha"}
        format={props.format}
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        onChange={props.onChange}
    />;
};

export default DatePicker;