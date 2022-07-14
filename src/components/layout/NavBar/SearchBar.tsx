import React from "react";
import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { theme } from "../../../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Divider } from "@mui/material";
import NavBarSelect from "./NavBarSelect";

const Search = styled(Box)(() => ({
    position: 'relative',
    borderRadius: 12,
    display: 'flex',
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(() => ({
    marginLeft: theme.spacing(2),
    marginRight: 0,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.color._100,
}));

const StyledInputBase = styled(InputBase)(() => ({
    color: theme.color._100,
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 1),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const SearchBar = () => {
    return (
        <Search sx={{
            border: 2,
            borderColor: theme.color._100,
        }}
        >
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                sx={{
                    fontSize: {md: 20, sm: 16, xs: 12},
                    icon: theme.color._100,
                }}
            />
            <Divider orientation="vertical" flexItem sx={{ bgcolor: theme.color._100 }} />
            <NavBarSelect defaultItem="All" selectItems={["Anime", "Manga"]} />
        </Search>
    )
}

export default SearchBar;