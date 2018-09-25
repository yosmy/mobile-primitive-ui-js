import React from 'react';
import {ThemeProvider, colors} from 'react-native-elements';

const normalizeTheme = (theme) => {
    return {
        ...theme,
        colors: {
            ...colors,
            primary: theme.palette.primary.main,
            error: theme.palette.error.main,
        },
        spacing: (amount) => {
            return amount * 8;
        },
    };
};

const Root = (props) => {
    let {theme, children} = props;

    theme = normalizeTheme(theme);

    return <ThemeProvider theme={theme}>
        {children}
    </ThemeProvider>
};

export default Root;