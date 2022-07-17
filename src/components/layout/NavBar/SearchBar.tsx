import React, {useEffect, useState} from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { theme } from "../../../theme";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import {Divider, Link, Stack, Typography} from "@mui/material";
import {NavBarMenuItem} from "./NavBarMenuItem";
import {format_title} from "../../../helpers/format";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import {useNavigate} from "react-router-dom";

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
    const [filteredData, setFilteredData] = useState<any[]>([]);
    const [wordEntered, setWordEntered] = useState<string>("");
    const [mode, setMode] = useState("Anime");

    const navigate = useNavigate();
    const defaultItem:string = "Anime";
    const selectItems:string[] = ["Manga"];

    const handleModeChange = (event: SelectChangeEvent) => {
        setMode(event.target.value);
    };

    const handleInputChange = (event: any) => {
        setWordEntered(event.target.value);
    }

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            return navigate(`/${mode.toLowerCase()}-search`);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            fetch(`https://api.jikan.moe/v4/${mode.toLowerCase()}?q=${wordEntered}&limit=5`)
                .then((response) => response.json())
                .then((json) => {
                    const newFilter: any[] = json.data.filter((item: any) => {
                        return item.title.toLowerCase().includes(wordEntered.toLowerCase().trim());
                    })
                    if (wordEntered === "") {
                        setFilteredData([]);
                    } else {
                        setFilteredData(newFilter);
                    }
                })
                .catch(console.error);
        }, 500);
        return () => clearTimeout(timer);
    }, [wordEntered, mode]);

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    }
    return (
        <Stack>
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
                    inputProps={{
                        value: wordEntered,
                        onChange: handleInputChange,
                        onKeyPress: handleKeyPress,
                        'aria-label': 'search' }}
                    sx={{
                        fontSize: {md: 20, sm: 16, xs: 12},
                        icon: theme.color._100,
                    }}
                />
                <Divider orientation="vertical" flexItem sx={{ bgcolor: theme.color._100 }} />
                <Box>
                    <FormControl size="small"
                                 sx={{
                                     minWidth: {md: 120, sm: 100, xs: 80},
                                     "& .MuiOutlinedInput-notchedOutline": {
                                         border: "none"
                                     },
                                     "&.Mui-focused": {
                                         "& .MuiOutlinedInput-notchedOutline": {
                                             border: "none"
                                         }
                                     }
                                 }}>
                        <Select
                            MenuProps={{
                                disableAutoFocusItem: true,
                            }}
                            value={mode}
                            onChange={handleModeChange}
                            displayEmpty
                            sx={{
                                fontSize: {md: 20, sm: 16, xs: 12},
                                fontWeight: 600,
                                color: theme.color._100,
                            }}
                        >
                            <NavBarMenuItem
                                key={defaultItem}
                                value={defaultItem}
                                sx={{
                                    fontSize: {md: 20, sm: 16, xs: 12},
                                }}
                            >
                                {defaultItem}
                            </NavBarMenuItem>
                            {selectItems.map((item) => (
                                <NavBarMenuItem
                                    key={item}
                                    value={item}
                                    sx={{
                                        fontSize: {md: 20, sm: 16, xs: 12},
                                    }}
                                >
                                    {item}
                                </NavBarMenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </Search>
            <Box>
                {filteredData.length !== 0 && (
                    <Box className="dataResult"
                         sx={{
                             color: theme.color._850,
                         }}
                    >
                        {filteredData.map((item) => {
                            return (
                                <NavBarMenuItem>
                                    <Link title={item.title}
                                          key={item.mal_id}
                                          href={`/${mode.toLowerCase()}/${item.mal_id}`}
                                          onClick={clearInput}
                                    >
                                        <Box display="flex">
                                            <img alt={item.title}
                                                 src={item.images.jpg.image_url}
                                                 height="auto"
                                                 width="100%"
                                                 style={{
                                                     borderRadius: 12,
                                                     objectFit: "cover",
                                                     minWidth: 60,
                                                     maxWidth: 60,
                                                     maxHeight: 100,
                                                 }}
                                            />
                                            <Box ml={2} display="flex" flexDirection="column" justifyContent="center">
                                                <Typography
                                                    sx={{
                                                        fontSize: {md: 16, sm: 12, xs: 8},
                                                        fontWeight: 600,
                                                        color: theme.color._100,
                                                    }}
                                                >
                                                    {format_title(item.title)}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: {md: 16, sm: 12, xs: 8},
                                                        fontWeight: 600,
                                                        color: theme.color.green_400,
                                                    }}
                                                >
                                                    {item.status}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: {md: 16, sm: 12, xs: 8},
                                                        fontWeight: 600,
                                                        color: theme.color._100,
                                                    }}
                                                >
                                                    {item.type}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        fontSize: {md: 16, sm: 12, xs: 8},
                                                        fontWeight: 600,
                                                        color: theme.color._100,
                                                    }}
                                                >
                                                    {item.score}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Link>
                                </NavBarMenuItem>
                            );
                        })}
                    </Box>
                )}
            </Box>
        </Stack>
    )
}

export default SearchBar;