import React from "react";
import {ScrollView} from "react-native";
import {FooterLayout as Spec} from "@yosmy/primitive-ui-spec"
import SideMenu from "react-native-side-menu";
import Content from "./Layout/Content";

const FooterLayout = ({
    menu,
    align, padding, grow, scroll,
    children
}) => {
    return <SideMenu
        menu={<ScrollView
            scrollsToTop={false}
        >
            <menu.content />
        </ScrollView>}
        isOpen={menu.open}
        onChange={menu.onChange}
    >
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

FooterLayout.propTypes = Spec.Props;

export default FooterLayout;
