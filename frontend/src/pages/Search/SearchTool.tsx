import * as React from "react";
import { Box, Button, Grid, InputBase, Typography } from "@mui/material";
import { theme } from "../../theme";
import SearchIcon from "@mui/icons-material/Search";
import Filter from "./Filter";
import ContentFilter from "./ContenFilter";
import Slide from "@mui/material/Slide";
import FormControlLabel from "@mui/material/FormControlLabel";

const SearchTool = (props: any) => {
  const { searchParams, searchType } = props;
  const [checked, setChecked] = React.useState(false);
  const [wordEntered, setWordEntered] = React.useState(
    searchParams ? searchParams.params.get("q") : ""
  );

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWordEntered(event.target.value);
    if (event.target.value == "") {
      searchParams.params.delete("q");
    } else {
      searchParams.params.set("q", event.target.value);
    }
    searchParams.params.setParams(searchParams.params);
  };

  const handleReloadPage = (event: any) => {
    window.location.reload();
  };

  return (
    <Box>
      <form action={searchType} method="get">
        <Grid container rowSpacing={2}>
          <Grid item xs={12} zIndex={10}>
            <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
              <Typography variant="h2" sx={{ fontWeight: 700 }}>
                Enter Word, Enter World
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} zIndex={10} sx={{ mb: 5 }}>
            <Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{
                    py: "10px",
                    position: "relative",
                    left: 50,
                    color: theme.color.white,
                  }}
                >
                  <SearchIcon sx={{ fontSize: 40 }} />
                </Box>
                <Box sx={{ textAlign: "center" }}>
                  <InputBase
                    inputProps={{
                      name: "q",
                      id: "q",
                      value: wordEntered,
                      "aria-label": "search",
                    }}
                    onChange={handleInputChange}
                    sx={{
                      height: 60,
                      width: { sm: 600, xs: "auto" },
                      textIndent: 50,
                      fontSize: 30,
                      borderRadius: 2,
                      background: "rgba(100, 111, 212, 0.47)",
                      color: theme.color.white,
                      pl: 7,
                    }}
                    id="header-search"
                    type="text"
                    placeholder="Search..."
                  />
                </Box>
              </Box>
            </Box>
            <FormControlLabel
              control={
                <Button
                  sx={{
                    fontSize: { md: 30, xs: 17 },
                    height: 90,
                    width: 90,
                    position: "absolute",
                    left: "80%",
                    backgroundColor: "transparent",
                    backgroundImage:
                      "url(https://i.ibb.co/vxFVq81/Administrative-Tools.png)",
                    boxShadow: 0,
                    transition: "all 0.2s",
                    "&:hover": {
                      backgroundColor: "transparent",
                      opacity: 0.6,
                    },
                  }}
                  onClick={handleChange}
                  className="AdminTool"
                  style={{ display: checked ? "none" : "block" }}
                />
              }
              label=""
            />
          </Grid>

          <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <Grid item xs={12} zIndex={10}>
              <Filter searchParams={searchParams} />
            </Grid>
          </Slide>
          <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <Grid item xs={12} zIndex={10}>
              <ContentFilter searchParams={searchParams} />
            </Grid>
          </Slide>
          <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <Grid item xs={12} zIndex={10}>
              <Box sx={{ display: "flex", justifyContent: "center" }} my={5}>
                <Button
                  sx={{
                    px: { md: 5, sm: 2, xs: 3 },
                    fontSize: { md: 30, sm: 17 },
                    fontWeight: 700,
                    height: 70,
                    borderRadius: 5,
                    boxShadow: 0,
                    "&:hover": {
                      boxShadow: 0,
                    },
                  }}
                  onClick={handleReloadPage}
                >
                  Search
                </Button>
                <FormControlLabel
                  control={
                    <Button
                      sx={{
                        fontSize: { md: 30, xs: 17 },
                        height: 90,
                        width: 90,
                        position: "absolute",
                        mt: 2,
                        left: "80%",
                        backgroundColor: "transparent",
                        backgroundImage:
                          "url(https://i.ibb.co/vxFVq81/Administrative-Tools.png)",
                        boxShadow: 0,
                        transition: "all 0.2s",
                        "&:hover": {
                          boxShadow: 0,
                          backgroundColor: "transparent",
                          opacity: 0.6,
                        },
                      }}
                      onClick={handleChange}
                    />
                  }
                  label=""
                />
              </Box>
            </Grid>
          </Slide>
        </Grid>
      </form>
    </Box>
  );
};

export default SearchTool;
