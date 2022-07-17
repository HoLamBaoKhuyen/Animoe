import React, { ReactNode } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { theme } from "../../theme";
import { SEARCH_RESULTS } from "../../data/detail";
import AddIcon from '@mui/icons-material/Add';
import { CustomTab } from "../../components/Tabs/CustomTab";
import { CustomTabs } from "../../components/Tabs/CustomTabs";
import "../../components/css/search_result.css";

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
                  <Button  variant="text" sx={{ position: "absolute",top: "5px", right: "10px", minWidth: 0,
                     height: 35, width: 35, borderRadius: 1, backgroundColor: "rgba(100, 111, 212, 0.67)"}}>
                    <AddIcon sx={{fontSize: 30, color: theme.color.black}}/>
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} zIndex={10}>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 5}}>
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
