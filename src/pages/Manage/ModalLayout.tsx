import React from 'react';
import { Dialog, DialogContent, DialogTitle, IconButton, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/material'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '&.MuiDialog-root': {

        '& .MuiBackdrop-root': { background: 'rgba(255,255,255,0.05)', }
    },
    "& .MuiDialog-paper": {
        borderRadius: 10, boxShadow: `0 2px 10px 1px ${theme.palette.grey[900]}`,
    },
    "& .MuiDialogTitle-root": {
        paddingLeft: { sm: theme.spacing(3), xs: theme.spacing(1) },
    },
    '& .MuiDialogContent-root': {
        padding: { sm: theme.spacing(3), xs: theme.spacing(1) }
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));
type ModalLayoutProps = {
    title: string
    open: true | false
    children?: React.ReactNode;
    onClose: () => void;
}

const ModalLayout: React.FC<ModalLayoutProps> = ({ title, children, open, onClose }) => {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));


    return (
        <div>
            <BootstrapDialog
                fullScreen={fullScreen}
                open={open}
                onClose={onClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle sx={{ m: 0, p: 2, background: theme.color._950 }}>
                    <Typography variant='subtitle1'> {title}</Typography>
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
                <DialogContent >
                    {children}
                </DialogContent>
            </BootstrapDialog>
        </div >
    );
}

export default ModalLayout 