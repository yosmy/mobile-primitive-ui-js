import React, {useState} from "react";
import {storiesOf} from "@storybook/react-native";
import {Container} from "../src/Container";
import Modal from "../src/Modal";
import Input from "../src/Input";
import Text from "../src/Text";

const Launcher = () => {
    const [modal, setModal] = useState(false);

    return <React.Fragment>
        <Container
            onClick={() => {
                setModal(true);
            }}
        >
            <Text>Open</Text>
        </Container>
        {modal && <Modal
            backdrop={{
                opacity: 0.5,
                color: "#000000"
            }}
            onClose={() => {
                setModal(false);
            }}
        >
            <Input placeholder="Placeholder" />
            <Input placeholder="Placeholder" />
            <Input placeholder="Placeholder" />
            <Input placeholder="Placeholder" />
        </Modal>}
    </React.Fragment>
}

storiesOf("Modal", module)
    .add("normal", () => (
        <Launcher />
    ))
;
