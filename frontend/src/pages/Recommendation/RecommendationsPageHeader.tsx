import * as React from "react";
import { Box, Grid, Typography } from "@mui/material";

const RecommendationsPageHeader = ({ title }: any) => {
  return (
    <Box>
      <Grid item xs={12} zIndex={10}>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {title} Recommendations
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12} zIndex={10}>
        <Box sx={{ mt: 1 }}>
          <img
            src="https://i.imgur.com/7LoShm4.png"
            alt="Header 1"
            loading="lazy"
            width="100%"
            height="200px"
          />
        </Box>
      </Grid>
      <Grid item xs={12} container>
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 500, m: "auto" }}>
              If you liked
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          lg={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Box sx={{ mx: "auto" }}>
            <img
              src="https://imgur.com/OP4IQfr.png"
              alt="Header 1"
              loading="lazy"
              width="280px"
              height="230px"
            />
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          sx={{ display: "flex", justifyContent: "left", alignItems: "center" }}
        >
          <Box>
            <Typography variant="h4" sx={{ fontWeight: 500 }}>
              Then you might like
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default RecommendationsPageHeader;
