import React from "react";
import PropTypes from "prop-types";
import {View} from "react-native";

const Header = ({
    start, center, end
}) => {
    return <View
        style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center"
        }}
    >
        <View
            style={{
                flex: 1,
                alignItems: "flex-start"
            }}
        >
            {start}
        </View>
        <View
            style={{
                flex: 1,
                alignItems: "center"
            }}
        >
            {center}
        </View>
        <View
            style={{
                flex: 1,
                alignItems: "flex-end"
            }}
        >
            {end}
        </View>
    </View>
};

Header.propTypes = {
    start: PropTypes.element,
    center: PropTypes.element,
    end: PropTypes.element,
};

export default Header;