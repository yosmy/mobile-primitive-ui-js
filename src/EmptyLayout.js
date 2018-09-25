import React from 'react';
import {withTheme} from 'react-native-elements';

const EmptyLayout = ({children, ...props}) => {
    return <React.Fragment>
        {children}
    </React.Fragment>;
};

export default withTheme(EmptyLayout);