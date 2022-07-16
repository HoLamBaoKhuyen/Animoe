import React, { ReactNode } from "react";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { theme } from "../../theme";
import { CONTENT_FILTER } from "../../data/detail";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faSearch } from "@fortawesome/free-solid-svg-icons";

type SearchResultsProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};
const ContentFilter: React.FC<SearchResultsProps> = ({ children }) => {

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
  };
  return (
    <Box>
        <Box sx={{ display: "flex", mt: 3 }}>
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
                Content Filter
            </Typography>
        </Box>
        <Box sx={{ mt: 5, width: "90%"}}>
            <Grid
                item
                xs={12}
                container
                columnSpacing={{ md: 10, sm: 3 }}
                rowSpacing={{ md: 4, xs: 2 }}
            >
                {CONTENT_FILTER.map((result) => (
                <Grid item xs={12} md={3} key={result.id} sx={{display: "flex"}}>
                    <Box sx={{width: 222, height: 322, display: "inline", borderRadius: 3,
                    backgroundColor: "rgba(100, 111, 212, 0.75)",}}>
                        <Box>
                            <Typography variant="h4" sx={{fontWeight: 700,py:1,pl:3}}>{result.name}</Typography>
                        </Box>
                        <Box>
                            <hr/>
                        </Box>
                        {result.type.map((type) => (
                            <Box sx={{pl: 2, pt:1, display: "flex", justifyContent: "left"}}>
                                <input type="checkbox" id={type} value={type} style={{height: "20px", width: "20px"}}/>
                                <Typography variant="subtitle2" sx={{pl:1, color: "rgba(255, 255, 255, 0.7)"}}>{type}</Typography>
                            </Box>
                        ))}
                    </Box>
                   
                </Grid>
                ))}
            </Grid>
        </Box>
    </Box>
  );
};
export default ContentFilter;
