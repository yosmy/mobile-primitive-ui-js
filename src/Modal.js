import React from "react";
import BaseModal from "react-native-modal";
import {Modal as Spec, Container as ContainerSpec} from "@yosmy/primitive-ui-spec"
import {styled} from "@yosmy/style";

const Modal = ({
    full, backdrop, animation, onClose,
    style, children, ...props
}) => {
    delete props.flow;
    delete props.align;
    delete props.flex;
    delete props.margin;
    delete props.padding;
    delete props.border;
    delete props.width;
    delete props.height;
    delete props.background;
    delete props.z;
    delete props.position;
    delete props.shadow;

    return <BaseModal
        isVisible={true}
        coverScreen={full}
        onBackdropPress={onClose}
        onBackButtonPress={onClose}
        animationIn={animation && animation.in}
        animationOut={animation && animation.out}
        backdropOpacity={backdrop && backdrop.opacity}
        backdropColor={backdrop && backdrop.color}
        style={style}
    >
        {children}
    </BaseModal>;
};

Modal.propTypes = Spec.Props;

Modal.defaultProps = {
    backdrop: {
        opacity: 0.5,
        color: "#000000"
    }
}

const StyledModal = styled(Modal)`
    ${props => ContainerSpec.compileFlow(props.flow)}
    ${props => ContainerSpec.compileAlign(props.align)}
    ${props => ContainerSpec.compileFlex(props.flex)}
    
    ${props => ContainerSpec.compileWidth(props.width)}
    ${props => ContainerSpec.compileHeight(props.height)}
    
    ${props => ContainerSpec.compileBackground(props.background)}

    ${props => ContainerSpec.compileMargin(props.margin)}
    ${props => ContainerSpec.compilePadding(props.padding)}

    ${props => ContainerSpec.compileBorderWidth(props.border)}
    ${props => ContainerSpec.compileBorderStyle(props.border)}
    ${props => ContainerSpec.compileBorderColor(props.border)}
    ${props => ContainerSpec.compileBorderRadius(props.border)}
    
    ${props => ContainerSpec.compileZ(props.z)}
    ${props => ContainerSpec.compilePosition(props.position)}
    ${props => ContainerSpec.compileShadow(props.shadow)}
`;


export default StyledModal;