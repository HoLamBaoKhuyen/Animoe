import React, { ReactNode } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { theme } from "../../theme";
import SearchIcon from '@mui/icons-material/Search';
import  Filter  from "./Filter";
import  ContentFilter from "./ContenFilter";

type SearchToolProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};

const SearchTools: React.FC<SearchToolProps> = ({ children }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
  };
  return (
    <Box >
      <Grid container rowSpacing={2} >
        <Grid item xs={12} zIndex={10}>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 10}}>
            <Typography variant="h2" sx={{ fontWeight: 700 }}>
              Enter Word, Enter World
            </Typography>
          </Box>
        </Grid>
        
        <Grid item xs={12} zIndex={10}>
          <Box>
            <form action="/search" method="get">
              <Box sx={{display: "flex",justifyContent: "center" }}>
                <Box sx={{py: "10px", left: 50, position: "relative", color: theme.color.white}}>
                  <SearchIcon sx={{ fontSize: 40}}/> 
                </Box>
                <Box sx={{}}>
                  <input 
                      style={{ height: 60, width: 600, textIndent: 50, fontSize: 30,
                        background: "rgba(100, 111, 212, 0.47)", color:theme.color.white, borderRadius: 10 }}
                      id="header-search"
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
              sx={{ px: { md: 5, sm: 2, xs: 3 }, fontSize: { md: 30, sm: 17 }, height: 70 , backgroundColor:theme.color._700 }}
            >
              Search
            </Button>
            <Box
              sx={{ fontSize: { md: 30, sm: 17 }, height: 90, width: 90,
               position: "absolute", left: "90%", mt: 2,
               backgroundImage: "url(https://i.ibb.co/vxFVq81/Administrative-Tools.png)" }}
            >
            </Box>
          </Box>

        </Grid>
        
      </Grid>
    </Box>
  );
};

export default SearchTools;
