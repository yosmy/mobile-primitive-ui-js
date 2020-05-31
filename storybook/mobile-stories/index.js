import {getStorybookUI, configure} from "@storybook/react-native";

import "../rn-addons";

configure(() => {
    require("./Layout/Content");
    require("./Layout/Header");
    require("./BufferList");
    require("./Chart");
    require("./CirclePlaceholder");
    require("./Container");
    require("./Gradient");
    require("./Image");
    require("./Input");
    require("./LinePlaceholder");
    require("./Modal");
    require("./Progress");
    require("./Text");
}, module);

const StorybookUIRoot = getStorybookUI({
    asyncStorage: null
});

export default StorybookUIRoot;