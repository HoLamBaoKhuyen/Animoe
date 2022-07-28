import React from 'react';
import { Box, Button, DialogContentText, Stack, Typography } from '@mui/material';
import { theme } from '../../theme';
import ModalLayout from './ModalLayout';

type DeleteModalProps = {
    open: true | false;
    title?: string;
    onClose: () => void
}

const DeleteModal: React.FC<DeleteModalProps> = ({ title, open, onClose }) => {

    return (
        <div>
            <ModalLayout open={open} title='Delete anime from your list' onClose={onClose}>
                <Box sx={{ maxWidth: '350px' }}>
                    <DialogContentText sx={{ color: theme.color.white, paddingTop: 2 }}>
                        Are you sure you want to delete <Typography component='span' sx={{ fontWeight: 600 }}>{title}</Typography> from your list?
                    </DialogContentText>
                    <Stack direction='row' spacing={2} justifyContent='center' mt={3}>
                        <Button sx={{
                            fontSize: 16, px: 1, py: 0, borderRadius: 2,
                            background: theme.color.red_800,
                            transition: 'all 0.2s',
                            '&:hover': {
                                background: theme.color.red_800,
                            }
                        }} autoFocus onClick={onClose}>
                            Delete
                        </Button>
                        <Button sx={{
                            fontSize: 16,
                            px: 1, py: 0,
                            borderRadius: 2,
                            background: theme.color.grey_300
                        }}
                            autoFocus onClick={onClose}>
                            Cancel
                        </Button>
                    </Stack>
                </Box>
            </ModalLayout>
        </div>
    );
}

export default DeleteModal