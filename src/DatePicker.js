import React from "react";
import PropTypes from "prop-types";
import BaseDatePicker from "react-native-datepicker";

const DatePicker = ({
    value, format, onChange
}) => {
    return <BaseDatePicker
        date={value}
        mode="date"
        placeholder="Selecciona la fecha"
        format={format}
        confirmBtnText="Confirmar"
        cancelBtnText="Cancelar"
        onChange={onChange}
    />;
};

DatePicker.propTypes = {
    value: PropTypes.string,
    format: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default DatePicker;