import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, styled, Box, Button, Stack } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import { theme } from '../../theme';

const rows = [{
    id: 1,
    image: "https://cdn.myanimelist.net/images/anime/1889/123307.webp",
    title: "Spy x Family",
    score: 9,
    type: 'TV',
    progress: '1/12',

}, {
    id: 2,
    image: "https://cdn.myanimelist.net/images/anime/1889/123307.webp",
    title: "Spy x Family",
    score: 9,
    type: 'TV',
    progress: '1/12',

}, {
    id: 3,
    image: "https://cdn.myanimelist.net/images/anime/1889/123307.webp",
    title: "Spy x Family",
    score: 9,
    type: 'TV',
    progress: '1/12',

}, {
    id: 4,
    image: "https://cdn.myanimelist.net/images/anime/1889/123307.webp",
    title: "Spy x Family",
    score: 9,
    type: 'TV',
    progress: '1/12',

}, {
    id: 5,
    image: "https://cdn.myanimelist.net/images/anime/1889/123307.webp",
    title: "Spy x Family",
    score: 9,
    type: 'TV',
    progress: '1/12',

}, {
    id: 6,
    image: "https://cdn.myanimelist.net/images/anime/1889/123307.webp",
    title: "Spy x Family",
    score: 9,
    type: 'TV',
    progress: '1/12',

}, {
    id: 7,
    image: "https://cdn.myanimelist.net/images/anime/1889/123307.webp",
    title: "Spy x Family",
    score: 9,
    type: 'TV',
    progress: '1/12',

}]

export const StyledTableCell = styled(TableCell)({
    "&.MuiTableCell-root": {
        color: theme.palette.common.white,
        fontWeight: 500,
        border: 0,
        fontSize: 18,
        paddingY: 1,
        "&.table-title": {
            color: theme.color._100
        }
    },
});
export default function TableContent() {
    return (
        <TableContainer component={Paper} sx={{ borderRadius: 2 }}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell className='table-title' width={150} align="center"></StyledTableCell>
                        <StyledTableCell className='table-title' width={350} sx={{ color: theme.color._100 }}>Title</StyledTableCell>
                        <StyledTableCell className='table-title' width={120} align="center" sx={{ color: theme.color._100 }}>Score</StyledTableCell>
                        <StyledTableCell className='table-title' width={120} align="center" sx={{ color: theme.color._100 }}>Type</StyledTableCell>
                        <StyledTableCell className='table-title' width={120} align="center" sx={{ color: theme.color._100 }}>Progress</StyledTableCell>
                        <StyledTableCell className='table-title' width={150} align="center" sx={{ color: theme.color._100 }}>Action</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}

                        >
                            <StyledTableCell width={150} align="center" component="th" scope="row">
                                <img alt='poster' src={row.image} height='100px' width='auto' style={{ borderRadius: 10 }} />
                            </StyledTableCell>
                            <StyledTableCell width={350} >{row.title}</StyledTableCell>
                            <StyledTableCell width={120} align="center">{row.score}</StyledTableCell>
                            <StyledTableCell width={120} align="center">{row.type}</StyledTableCell>
                            <StyledTableCell width={120} align="center">{row.progress}</StyledTableCell>
                            <StyledTableCell width={150} align="center" >
                                <Stack direction='row' spacing={3} justifyContent='center'>
                                    <Button sx={{
                                        minWidth: 0, p: 0, width: 35, height: 35, borderRadius: 1,
                                        backgroundColor: theme.color.green_800,
                                        transition: 'all 0.1s',
                                        "&:hover": {
                                            backgroundColor: theme.color.green_800,
                                            opacity: 0.6
                                        }
                                    }}><CreateIcon fontSize='small' /></Button>
                                    <Button sx={{
                                        minWidth: 0, p: 0, width: 35, height: 35, borderRadius: 1,
                                        backgroundColor: theme.color.red_800,
                                        transition: 'all 0.1s',
                                        "&:hover": {
                                            backgroundColor: theme.color.red_800,
                                            opacity: 0.6
                                        }
                                    }}> <DeleteIcon fontSize='small' /></Button>
                                </Stack>
                            </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}
