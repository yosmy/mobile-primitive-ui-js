import React from 'react';
import {
    HeaderProps,
} from '@yosmy/ui-spec';
import {Header as BaseHeader} from 'react-native-elements';

const Header = (props) => {
    const leftComponent = buildLeftComponent(props.left);

    const centerComponent = buildCenterComponent(props.center);

    const rightComponent = buildRightComponent(props.right);

    return <BaseHeader
        leftComponent={leftComponent}
        centerComponent={centerComponent}
        rightComponent={rightComponent}
        statusBarProps={{
            // Fix high header
            translucent: true
        }}
    />
};

Header.propTypes = HeaderProps;

const buildLeftComponent = (left) => {
    return left;
};

const buildCenterComponent = (center) => {
    return center;
};

const buildRightComponent = (right) => {
    return right;
};

export default Header;