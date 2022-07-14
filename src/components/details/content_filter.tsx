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
        <Box sx={{ mt: 5 }}>
            <Grid
                item
                xs={12}
                container
                columnSpacing={{ md: 10, sm: 3 }}
                rowSpacing={{ md: 4, xs: 2 }}
            >
                {CONTENT_FILTER.map((result) => (
                <Grid item xs={12} md={3} key={result.id} sx={{display: "flex"}}>
                    <Box sx={{width: 200, display: "inline", backgroundColor: theme.color._600, borderRadius: 3}}>
                        <Box>
                            <Typography variant="h4" sx={{py:1,pl:3}}>{result.name}</Typography>
                        </Box>
                        <Box>
                            <hr/>
                        </Box>
                        {result.type.map((type) => (
                            <Box sx={{pl: 2, display: "flex", justifyContent: "left"}}>
                                <input type="checkbox" id={type} value={type}/>
                                <Typography variant="body1" sx={{pl:2}}>{type}</Typography>
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
