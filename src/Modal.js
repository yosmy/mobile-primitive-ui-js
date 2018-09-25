import React from 'react';
import BaseModal from "react-native-modal";
import {ModalProps} from '@yosmy/ui-spec'

const Modal = (props) => {
    return <BaseModal
        isVisible={true}
        coverScreen={typeof props.full !== 'undefined' ? props.full : true}
        onBackdropPress={props.onClose}
        onBackButtonPress={props.onClose}
        animationIn={props.animation && props.animation.in}
        animationOut={props.animation && props.animation.out}
        backdropOpacity={props.backdrop && props.backdrop.opacity}
        backdropColor={props.backdrop && props.backdrop.color}
        style={props.style}
    >
        {props.children}
    </BaseModal>;
};

Modal.propTypes = ModalProps;

export default Modal;