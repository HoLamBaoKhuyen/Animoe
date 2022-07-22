import React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material'
import { theme } from '../../theme';
import ModalLayout from './ModalLayout';

export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}
const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2, background: theme.color._950 }} {...other}>
            <Typography variant='subtitle1'> {children}</Typography>
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: theme.palette.common.white,
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '&.MuiDialog-root': {
        background: `rgba(255, 255, 255, 0.4)`
    },
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));


export default function CustomModal() {
    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open Modal
            </Button>
            <ModalLayout open={open} title='Delete anime from your list' onClose={handleClose}>
                <DialogContentText sx={{ color: theme.color.white }}>
                    Are you sure you want to delete
                    Spy x Family from your list?
                </DialogContentText>
                <Button sx={{
                    fontSize: 16, px: 1, py: 0, borderRadius: 2,
                    background: theme.color.red_800,
                    transition: 'all 0.2s',
                    '&:hover': {
                        background: theme.color.red_800,
                    }
                }} autoFocus onClick={handleClose}>
                    Cancel
                </Button>
                <Button sx={{ fontSize: 16, px: 1, py: 0, borderRadius: 2, background: theme.color.grey_300 }} autoFocus onClick={handleClose}>
                    Cancel
                </Button>
            </ModalLayout>
        </div>
    );
}
