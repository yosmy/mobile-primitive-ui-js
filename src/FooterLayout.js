import React from 'react';
import {Dimensions, ScrollView, StyleSheet} from 'react-native';
import {FooterLayoutProps} from "@yosmy/ui-spec"
import SideMenu from 'react-native-side-menu';
import Content from './Content';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        height: window.height,
    },
});

const FooterLayout = (props) => {
    return <SideMenu
        menu={<ScrollView
            scrollsToTop={false}
            style={{
                ...props.menu.style,
            }}
        >
            <props.menu.content />
        </ScrollView>}
        isOpen={props.menu.open}
        onChange={props.menu.onChange}
    >
        {<props.header />}
        <Content
            background={props.background}
            align={props.align}
            padding={props.padding}
            grow={props.grow}
        >
            {props.children}
        </Content>
    </SideMenu>
};

FooterLayout.propTypes = FooterLayoutProps;

export default FooterLayout;
