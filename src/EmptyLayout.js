import React, {Fragment} from "react";
import {EmptyLayout as Spec} from "@yosmy/primitive-ui-spec";

const EmptyLayout = ({
    children
}) => {
    return <Fragment>
        {children}
    </Fragment>;
};

EmptyLayout.propTypes = Spec.Props;

export default EmptyLayout;