import React from 'react';
import { theme } from "../../../theme";
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { NavBarMenuItem } from "./NavBarMenuItem";
import { Box } from "@mui/material";

interface CustomSelectProps {
    defaultItem: string,
    selectItems: string[];
}

const NavBarSelect = (props: CustomSelectProps) => {
    const { defaultItem, selectItems } = props;
    const [mode, setMode] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setMode(event.target.value);
    };

    return (
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
                    onChange={handleChange}
                    displayEmpty
                    sx={{
                        fontSize: {md: 20, sm: 16, xs: 12},
                        fontWeight: 600,
                        color: theme.color._100,
                    }}
                >
                    <NavBarMenuItem
                        value=''
                        sx={{
                            fontSize: {md: 20, sm: 16, xs: 12},
                        }}
                    >
                        {defaultItem}
                    </NavBarMenuItem>
                    {selectItems.map((item) => (
                        <NavBarMenuItem
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
    );
}

export default NavBarSelect;