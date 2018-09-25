import React from 'react';
import Content from './Content';

const BlankLayout = (props) => {
    return <Content
        {...props}
        background={props.background}
        align={props.align}
        padding={props.padding}
        grow={props.grow}
    >
        {props.children}
    </Content>
};

export default BlankLayout;