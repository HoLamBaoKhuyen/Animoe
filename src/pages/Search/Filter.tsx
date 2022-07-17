import React, { ReactNode } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { theme } from "../../theme";
import {FILTER} from "../../data/detail";
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }));
type SearchResultsProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};
const Filter: React.FC<SearchResultsProps> = ({ children }) => {
    const [value, setValue] = React.useState('');
    const handleChange = (event: { target: { value: string } }) => {
        setValue(event.target.value);
    };
    return (
    <Box sx={{}}>
        <Box sx={{ display: "flex" }}>
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
                Filter
            </Typography>
        </Box>
        <Box sx={{ mt: 5 }}>
            <Grid
                item
                xs={12}
                container
                columnSpacing={{ md: 15, sm: 3 }}
                rowSpacing={{ md: 4, xs: 2 }}
            >
                {FILTER.map((result) => (
                <Grid item xs={12} md={5} key={result.id} sx={{display: "flex"}}>
                    <Grid item xs={4}>
                        <Typography variant="h3" sx={{float: "right", py: 1}}>{result.name}:</Typography>
                    </Grid>
                    <Grid item xs={8}  >
                        <Box sx={{float: "left", pl: 3 }}>
                            <select  
                                style={{height:40, minWidth: 200, paddingLeft: 10, fontSize: 20, 
                                    color:theme.color.white, backgroundColor: "rgba(100, 111, 212, 0.67)"}}>
                                
                                <option selected>Select {result.typeName}</option>
                                {result.typeOptions.map((typeOption) => (
                                    <option value="1">{typeOption}</option>
                                ))}
                            </select>
                        </Box>
                    </Grid>
                </Grid>
                ))}
                <Grid item xs={12} md={5} sx={{display: "flex"}}>
                    <Grid item xs={4}>
                        <Typography variant="h3" sx={{float: "right", py: 1}}>Start Date:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{float: "left", pl: 3 }}>
                            <input style={{ height:40, minWidth: 200, paddingLeft: 10, fontSize: 20, 
                                        color:theme.color.white, backgroundColor: "rgba(100, 111, 212, 0.67)"}} 
                                type="date" id="startDate" placeholder="Select date"/>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5} sx={{display: "flex"}}>
                    <Grid item xs={4}>
                        <Typography variant="h3" sx={{float: "right", py: 1}}>End Date:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{float: "left", pl: 3 }}>
                            <input style={{ height:40,  minWidth: 200, paddingLeft: 10, fontSize: 20, 
                                        color:theme.color.white, backgroundColor: "rgba(100, 111, 212, 0.67)"}} 
                                type="date" id="endDate" placeholder="Select date"/>
                        </Box>
                    </Grid>
                </Grid>
                {/* {FILTER.map((result) => (
                <Grid item xs={12} md={5} key={result.id} sx={{display: "flex"}}>
                    <Grid item xs={4}>
                        <Typography variant="h3" sx={{float: "right", py: 1}}>{result.name}:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <FormControl sx={{ m: 1 }} variant="standard">
                            <InputLabel htmlFor="demo-customized-select-native">{result.typeName}</InputLabel>
                            <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={value}
                                onChange={handleChange}
                                input={<BootstrapInput />}
                                placeholder="Select"
                            >
                                {result.typeOptions.map((typeOption) => (
                                    <MenuItem value="1">{typeOption}</MenuItem>
                                ))}

                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                ))} */}

            </Grid>
        </Box>
        
    </Box>
  );
};
export default Filter;
