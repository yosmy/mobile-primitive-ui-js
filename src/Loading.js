import React from "react";
import AppLoading from 'expo-app-loading';
import {Loading as Spec} from "@yosmy/primitive-ui-spec";

const Loading = ({
    start, onFinish, onError
}) => {
    return <AppLoading
        startAsync={start}
        onFinish={onFinish}
        onError={onError}
    />;
};

Loading.propTypes = Spec.Props;

export default Loading;