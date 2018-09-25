import React from 'react';
import {Dimensions, ScrollView, StyleSheet} from 'react-native';
import {DrawerLayoutProps} from "@yosmy/ui-spec";
import {withTheme} from 'react-native-elements';
import SideMenu from 'react-native-side-menu';
import Content from './Content';

const window = Dimensions.get('window');

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        height: window.height,
    },
});

const DrawerLayout = (props) => {
    return <SideMenu
        menu={<ScrollView
            scrollsToTop={false}
            style={{
                // Workaround for using translucent on header
                paddingTop: 56,
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

DrawerLayout.propTypes = DrawerLayoutProps;

export default withTheme(DrawerLayout);