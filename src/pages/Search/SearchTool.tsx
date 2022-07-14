import React, { ReactNode } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { theme } from "../../theme";
import  Filter  from "./Filter";
import  ContentFilter from "./ContenFilter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

type SearchToolProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};
const SearchResults: React.FC<SearchToolProps> = ({ children }) => {

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
  };
  return (
    <Box >
      <Grid container rowSpacing={2} >
        <Grid item xs={12} zIndex={10}>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5}}>
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
              Enter Word, Enter World
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12} zIndex={10}>
          <Box>
            <form action="/search" method="get">
              <Box sx={{display: "flex",justifyContent: "center", }}>
                <Box sx={{py: "15px",left: 40, fontSize: 30, position: "relative", color: theme.color.white,}}>
                  <FontAwesomeIcon icon={faSearch}/> 
                </Box>
                <Box sx={{}}>
                  <input 
                      style={{ height: 60, width: 600, textIndent: 50, fontSize: 30,
                        background: theme.color._600, color:theme.color.white, borderRadius: 10 }}
                      id="header-search"
                      placeholder="Tokyo Ghoul"
                      type="text"
                  />
                </Box>
              </Box>
            </form>
          </Box>
        </Grid>
        <Grid item xs={12} zIndex={10}>
          <Filter/>
        </Grid>
        <Grid item xs={12} zIndex={10}>
          <ContentFilter />
        </Grid>
        <Grid item xs={12} zIndex={10}>
          <Box sx={{ display: "flex", justifyContent: "center" }} my={5}>
            <Button
              sx={{ px: { md: 5, sm: 2, xs: 3 }, fontSize: { md: 20, sm: 17 } }}
            >
              Search
            </Button>
          </Box>
        </Grid>
        
      </Grid>
    </Box>
  );
};
export default SearchResults;
