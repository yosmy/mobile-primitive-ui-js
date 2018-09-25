import React from 'react';
import {StyleSheet} from 'react-native';
import {ButtonProps, prepareFlexChildStyle, prepareMarginStyle} from '@yosmy/ui-spec'
import {Button as BaseButton, withTheme} from 'react-native-elements';
import Progress from "./Progress";

const Button = ({
    theme,
    variant, color,
    progress, disabled,
    margin, center,
    onClick,
    style, children, ...props
}) => {
    const type = buildType(variant);

    const containerStyle = buildContainerStyle(theme, center, margin, style);

    const buttonStyle = buildButtonStyle(theme, variant, color, style);

    const titleStyle = buildTitleStyle(theme, variant, color, disabled);

    let {icon, title} = buildTitleAndIcon(theme, variant, color, disabled, children);

    if (progress) {
        icon = <Progress
            size="sm"
            color="disabled"
            style={{
                marginRight: theme.spacing(2)
            }}
        />;
    }

    const onPress = buildOnPress(onClick);

    return <BaseButton
        type={type}
        icon={icon}
        title={title}
        disabled={disabled}
        onPress={onPress}
        containerStyle={containerStyle}
        buttonStyle={buttonStyle}
        titleStyle={titleStyle}
    />;
};

Button.propTypes = ButtonProps;

const buildType = (variant) => {
    switch (variant) {
        case 'contained':
            return 'solid';
        case 'outlined':
            return 'outline';
        case 'cleared':
            return 'clear';
        case undefined:
            return 'outline';
        default:
            throw new Error(`Invalid variant "${variant}"`)
    }
};

const buildTitleAndIcon = (theme, variant, color, disabled, children) => {
    let {icon, title} = resolveIconAndText(children);

    const iconProps = {
        size: 18,
        color: buildColor(theme, variant, color, disabled)
    };

    if (React.Children.count(children) === 1) {
        // Is a text?
        if (children.props.children) {
            // Get just the text
            title = children.props.children;
        }
        // Is an icon
        else {
            icon = ({...props}) => {
                return <children.type
                    {...iconProps}
                    {...children.props}
                    {...props}
                />
            };
        }
    } else if (React.Children.count(children) === 2) {
        icon = ({...props}) => {
            const child = children[0];

            return <child.type
                {...iconProps}
                {...child.props}
                style={{
                    marginRight: theme.spacing(1),
                    ...child.props.style,
                    ...props.style
                }}
                {...props}
            />
        };
        title = children[1].props.children;
    } else {
        throw new Error("Too many components inside a button");
    }

    return {
        icon: icon,
        title: title
    };
};

const buildContainerStyle = (theme, center, margin, style) => {
    return  {
        ...prepareFlexChildStyle({center: center}),
        ...prepareMarginStyle(margin, theme),
        ...style
    };
};

const buildButtonStyle = (theme, variant, color, style) => {
    return  {
        backgroundColor: buildBackground(theme, variant, color),
        ...style
    };
};

const buildTitleStyle = (theme, variant, color, disabled) => {
    return {
        color: buildColor(theme, variant, color, disabled)
    };
};

const buildOnPress = (onClick) => {
    return onClick;
};

const resolveIconAndText = (children) => {
    let icon, text;

    if (React.Children.count(children) === 1) {
        // Is a text?
        if (children.props.children) {
            // Get just the text
            text = children.props.children;
        }
        // Is an icon
        else {
            icon = children;
        }
    } else if (React.Children.count(children) === 2) {
        icon = children[0];
        text = children[1].props.children;
    } else {
        throw new Error("Too many components inside a button");
    }

    return {
        icon: icon,
        text: text
    };
};

const buildColor = (theme, variant, color, disabled) => {
    switch (color) {
        case 'primary':
            if (disabled) {
                color = theme.palette.primary.disabled;
            } else if (variant === 'contained') {
                color = theme.palette.primary.contrast;
            } else {
                color = theme.palette.primary.main;
            }

            break;
        case 'error':
            if (disabled) {
                color = theme.palette.error.disabled;
            } else if (variant === 'contained') {
                color = theme.palette.error.contrast;
            } else {
                color = theme.palette.error.main;
            }

            break;
        case 'mono':
            if (disabled) {
                color = theme.palette.mono.disabled;
            } else if (variant === 'contained') {
                color = theme.palette.mono.contrast;
            } else {
                color = theme.palette.mono.main;
            }

            break;
        case undefined:
            if (disabled) {
                color = theme.palette.primary.disabled;
            } else if (variant === 'contained') {
                color = theme.palette.primary.contrast;
            } else {
                color = theme.palette.primary.main;
            }

            break;
        default:
            throw new Error(`Invalid color "${color}"`)
    }

    return color;
};

const buildBackground = (theme, variant, color) => {
    let background;

    if (variant === 'contained') {
        switch (color) {
            case 'primary':
                background = theme.palette.primary.main;

                break;
            case 'error':
                background = theme.palette.error.main;

                break;
            case undefined:
                background = theme.palette.primary.main;

                break;
            default:
                throw new Error(`Invalid variant "${color}"`)
        }
    }

    return background;
};

const buildBorder = (theme, variant, color, disabled) => {
    let border = {};

    if (
        variant === 'contained'
        || variant === 'outlined'
    ) {
        border = {
            ...border,
            borderWidth: StyleSheet.hairlineWidth,
            borderRadius: 2
        };

        switch (color) {
            case 'primary':
                if (disabled) {
                    border = {
                        ...border,
                        borderColor: theme.palette.primary.disabled,
                    };
                } else {
                    border = {
                        ...border,
                        borderColor: theme.palette.primary.main,
                    };
                }

                break;
            case 'error':
                if (disabled) {
                    border = {
                        ...border,
                        borderColor: theme.palette.error.disabled,
                    };
                } else {
                    border = {
                        ...border,
                        borderColor: theme.palette.error.main,
                    };
                }

                break;
            case undefined:
                if (disabled) {
                    border = {
                        ...border,
                        borderColor: theme.palette.primary.disabled,
                    };
                } else {
                    border = {
                        ...border,
                        borderColor: theme.palette.primary.main,
                    };
                }

                break;
            default:
                throw new Error(`Invalid color "${color}"`)
        }
    }

    return border;
};

export default withTheme(Button);