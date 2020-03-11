import React, { useState } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import IconButton from '@material-ui/core/IconButton';
import CodeIcon from '@material-ui/icons/Code';
import Tooltip from '@material-ui/core/Tooltip';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import { CodeSection } from '../styled-components/SectionStyle.js';
import { H2 } from '../styled-components/Heading';

import { styleGenerate } from '../flexCode.js';

const Code = ({
        flex,
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
    }) => {
    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleCopy = () => {
        setOpen(true);
        styleGenerate(
            flex, 
            flexDirection, 
            flexWrap, 
            justifyContent, 
            alignItems, 
            alignContent,
        );
    }

    return (
        <CodeSection>
        <H2>Code view</H2>
            <Snackbar 
                open={open}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                onClose={handleClose}
                message="Note archived"
            >
            <Alert severity="success">
                コピーしました！
            </Alert>
            </Snackbar>
            <div id="code-view">
            <CopyToClipboard 
                text={
                    styleGenerate(
                        flex, 
                        flexDirection, 
                        flexWrap, 
                        justifyContent, 
                        alignItems, 
                        alignContent,
                    )
                } 
                onCopy={handleCopy}
            >
                <Tooltip title="Copy" placement="right">
                    <IconButton 
                        className="copy-btn"
                    >
                        <CodeIcon />
                    </IconButton>
                </Tooltip>
                </CopyToClipboard>
                <ul>
                    <li>display: <span className="property">{ flex }</span>;</li>
                    <li>flex-direction: <span className="property">{ flexDirection }</span>;</li>
                    <li>flex-wrap: <span className="property">{ flexWrap }</span>;</li>
                    <li>justify-content: <span className="property">{ justifyContent }</span>;</li>
                    <li>align-items: <span className="property">{ alignItems }</span>;</li>
                    <li>align-content: <span className="property">{ alignContent }</span>;</li>
                </ul>
            </div>
        </CodeSection>
    )
}

export default Code;
