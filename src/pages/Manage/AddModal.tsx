import React from 'react';
import { Box, Button, DialogContentText, Stack, styled, Table, TableBody, TableCell, TableRow, TextField, Typography } from '@mui/material';
import { theme } from '../../theme';
import ModalLayout from './ModalLayout';
import StyledSelect from './StyledSelect';
import CustomDatePicker from './CustomDatePicker';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    "&.MuiTableCell-root": {
        fontSize: 18,
        color: theme.color._100,
        fontWeight: 400,
        border: 0,
    }
}));

type AddModalProps = {
    open: true | false;
    title?: string;
    onClose: () => void
}




const AddModal: React.FC<AddModalProps> = ({ title, open, onClose }) => {

    return (
        <div>
            <ModalLayout open={open} title='Add anime from your list' onClose={onClose}>
                <Box sx={{ maxWidth: '900px', paddingX: { md: 4, xs: 0 } }}>
                    <Table size="small" >
                        <TableBody>
                            <TableRow
                            >
                                <StyledTableCell component="th" scope="row" align='right'>
                                    Anime title
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row" sx={{ fontWeight: `600 !important`, color: `${theme.color.white} !important` }}>
                                    Tokyo Ghoul:  “Jack”
                                </StyledTableCell>
                            </TableRow>
                            <TableRow>
                                <StyledTableCell component="th" scope="row" align='right'>
                                    Status
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <StyledSelect placeHolder='Select status' width='fit-content' list={['Watching', "Finish"]} />
                                </StyledTableCell>
                            </TableRow>
                            <TableRow>
                                <StyledTableCell component="th" scope="row" align='right'>
                                    Progress
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <TextField type={'number'} size='small' sx={{
                                        "&.MuiOutlinedInput-root": {
                                            borderColor: theme.color.white,
                                            borderRadius: '10px',

                                        },
                                        "& .MuiOutlinedInput-notchedOutline": {
                                            display: 'none'
                                        },
                                        "& .MuiInputBase-root": {
                                            overflow: 'hidden',
                                        },
                                        "& .MuiOutlinedInput-input": {
                                            padding: 0,
                                            paddingLeft: '12px',
                                            width: '50px',
                                            color: theme.color.white,
                                            background: theme.color._950,
                                            height: '30px',
                                            lineHeight: '30px',
                                            borderRadius: '10px',

                                        }
                                    }} /> / 12 eps
                                </StyledTableCell>
                            </TableRow>
                            <TableRow>
                                <StyledTableCell component="th" scope="row" align='right'>
                                    Score
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <StyledSelect placeHolder='Select score' list={['10', '9', '8', '7', '6', '5', '4', '3', '2', '1']} />
                                </StyledTableCell>
                            </TableRow>
                            <TableRow>
                                <StyledTableCell component="th" scope="row" align='right'>
                                    Start date
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <CustomDatePicker />
                                </StyledTableCell>
                            </TableRow>
                            <TableRow>
                                <StyledTableCell component="th" scope="row" align='right'>
                                    End date
                                </StyledTableCell>
                                <StyledTableCell component="th" scope="row">
                                    <CustomDatePicker />
                                </StyledTableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <Stack direction='row' spacing={2} justifyContent='center' mt={3}>
                        <Button sx={{
                            fontSize: 16, px: 1, py: 0, borderRadius: 2,
                        }} autoFocus onClick={onClose}>
                            Save
                        </Button>

                    </Stack>
                </Box>
            </ModalLayout>
        </div>
    );
}

export default AddModal