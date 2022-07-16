import React, { ReactNode } from "react";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { theme } from "../../theme";
import {FILTER} from "../../data/detail";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faSearch } from "@fortawesome/free-solid-svg-icons";

type SearchResultsProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};
const Filter: React.FC<SearchResultsProps> = ({ children }) => {

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
  };
  return (
    <Box>
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
                                style={{height:40, minWidth: 200, paddingLeft: 10, borderRadius: 10, fontSize: 20, 
                                    color:theme.color.white, backgroundColor: "rgba(100, 111, 212, 0.67)"}}>
                                
                                <option selected>Select {result.name}</option>
                                {result.type.map((type) => (
                                    <option value="1">{type}</option>
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
                            <input style={{ height:40, minWidth: 200, paddingLeft: 10, borderRadius: 10, fontSize: 20, 
                                        color:theme.color.white, backgroundColor: "rgba(100, 111, 212, 0.67)"}} 
                                type="date" id="startDate" placeholder="Select Date"/>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={5} sx={{display: "flex"}}>
                    <Grid item xs={4}>
                        <Typography variant="h3" sx={{float: "right", py: 1}}>End Date:</Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{float: "left", pl: 3 }}>
                            <input style={{ height:40,  minWidth: 200, paddingLeft: 10, borderRadius: 10, fontSize: 20, 
                                        color:theme.color.white, backgroundColor: "rgba(100, 111, 212, 0.67)"}} 
                                type="date" id="endDate" placeholder="Select Date"/>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
        
    </Box>
  );
};
export default Filter;
