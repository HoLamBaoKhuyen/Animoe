import React, { ReactNode } from "react";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { theme } from "../../theme";
import { SEARCH_RESULTS } from "../../data/detail";
import { CustomTab } from "../Tabs/CustomTab";
import { CustomTabs } from "../Tabs/CustomTabs";
import AddIcon from '@mui/icons-material/Add';
import "../css/search_result.css";
type SearchResultsProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};
const SearchResults: React.FC<SearchResultsProps> = ({ children }) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
  };
  return (
    <Box>
      <Grid container rowSpacing={2}>
        <Grid item xs={12} zIndex={10}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Search Result for "Tokyo Ghoul"
            </Typography>
          </Box>
        </Grid>

        <CustomTabs sx={{ py: 2 }}
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
        >
            <CustomTab label="Anime" />
            <CustomTab label="Manga" />
        </CustomTabs>

        <Grid
          item
          xs={12}
          container
          columnSpacing={{ md: 15, sm: 3 }}
          rowSpacing={{ md: 2, xs: 2 }}
        >
          {SEARCH_RESULTS.map((result) => (
            <Grid item xs={12} key={result.id}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "150px",
                  background: theme.color._850,
                  borderRadius: 3,
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{ height: "90%", display: "flex", alignItems: "center", ml:"10px", my: "auto" }}
                >
                  <img
                    alt="voice_actor"
                    src={result.img.poster}
                    height="100%"
                    width="auto"
                    style={{ borderRadius: 10 }}
                  />
                  <Box ml={2}>
                    <Typography variant="h4" sx={{mb: "8px"}}>{result.name}</Typography>
                    <Typography variant="subtitle2" sx={{fontFamily: 'Poppins', color: "rgba(255, 255, 255, 0.6)"}}>
                      {result.eps}
                    </Typography>
                    <Typography variant="subtitle2" sx={{fontFamily: 'Poppins', color: "rgba(255, 255, 255, 0.6)"}}>
                      {result.scores}
                    </Typography>
                    <Typography variant="subtitle2" sx={{fontFamily: 'Poppins', color: "rgba(255, 255, 255, 0.6)"}}>
                      {result.members}
                    </Typography>
                  </Box>
                  <Box sx={{ position: "absolute",top: "5px", right: "10px", borderRadius: 10 }}>
                    <AddIcon sx={{fontSize: 35, backgroundColor: theme.color._600, borderRadius: 1 }}/>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} zIndex={10}>
          <Box sx={{ display: "flex", justifyContent: "center", my: 5}}>
            <div className="pagination">
              <a href="#">&laquo;</a>
              <a className="active" href="#">1</a>
              <a href="#">2</a>
              <a href="#">...</a>
              <a href="#">8</a>
              <a href="#">9</a>
              <a href="#">&raquo;</a>
            </div>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default SearchResults;
