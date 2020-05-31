import React from "react";
import {ScrollView} from "react-native";
import {DrawerLayout as Spec} from "@yosmy/primitive-ui-spec";
import SideMenu from "react-native-side-menu";
import Content from "./Layout/Content";

const DrawerLayout = ({
    header, menu,
    align, padding, grow, scroll,
    children
}) => {
    return <SideMenu
        menu={<ScrollView
            scrollsToTop={false}
            style={{
                // Workaround for using translucent on header
                paddingTop: 56,
            }}
        >
            <menu.content />
        </ScrollView>}
        isOpen={menu.open}
        onChange={menu.onChange}
    >
        {header}
        <Content
            align={align}
            padding={padding}
            grow={grow}
            scroll={scroll}
        >
            {children}
        </Content>
    </SideMenu>
};

DrawerLayout.propTypes = Spec;

export default DrawerLayout;