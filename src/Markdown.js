import React from 'react';
import BaseMarkdown from 'react-native-simple-markdown';
import {withTheme} from "react-native-elements";
import Container from './Container';

const Markdown = (props) => {
    return <Container
        flow='row'
        align={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
        }}
        flex
        {...props}
    >
        <BaseMarkdown styles={{
            heading1: {
                fontSize: 32,
                fontWeight: 'bold',
                marginTop: 8 * props.theme.spacing.unit,
                marginBottom: 16 * props.theme.spacing.unit
            },
            heading2: {
                fontSize: 24,
                fontWeight: 'bold',
                marginTop: 8 * props.theme.spacing.unit,
                marginBottom: 16 * props.theme.spacing.unit
            },
            heading3: {
                fontSize: 18,
                fontWeight: 'bold',
                marginTop: 8 * props.theme.spacing.unit,
                marginBottom: 16 * props.theme.spacing.unit
            },
            heading4: {
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 8 * props.theme.spacing.unit,
                marginBottom: 16 * props.theme.spacing.unit
            },
            heading5: {
                fontSize: 13,
                fontWeight: 'bold',
                marginTop: 8 * props.theme.spacing.unit,
                marginBottom: 16 * props.theme.spacing.unit
            },
            heading6: {
                fontSize: 11,
                marginTop: 8 * props.theme.spacing.unit,
                marginBottom: 16 * props.theme.spacing.unit
            },
            strong: {
                fontWeight: 'bold',
            }
        }}>
            {props.children}
        </BaseMarkdown>
    </Container>;
};

export default withTheme(Markdown);