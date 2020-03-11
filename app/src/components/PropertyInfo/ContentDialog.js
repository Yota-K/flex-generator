import React, { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Content } from '../../styled-components/Content';
import { CloseButton } from '../../styled-components/Button';

const ContentDialog = ({markdown, setOpen, open}) => {
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            scroll="paper"
        >
        <DialogTitle id="scroll-dialog-title">プロパティの解説</DialogTitle>
        <DialogContent>
        <DialogContentText component="div">
            <Content dangerouslySetInnerHTML={{ __html: markdown}}></Content>
        </DialogContentText>
        </DialogContent>
        <DialogActions>
            <CloseButton onClick={handleClose}>
                閉じる
            </CloseButton>
        </DialogActions>
        </Dialog>
    )
}

export default ContentDialog;
