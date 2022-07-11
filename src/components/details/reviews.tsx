import React, { ReactNode } from "react";
import { Avatar, Box, Button, Grid, Link, Typography } from "@mui/material";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import { theme } from "../../theme";
import { OPENING } from "../../data/detail";

type ReviewsProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};
const Reviews: React.FC<ReviewsProps> = ({ children }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mb={1}>
        <Typography variant="h3">Reviews</Typography>
        <Button
          variant="outlined"
          sx={{
            border: 0,
            color: theme.palette.common.white,
            padding: `0 10px`,
            fontWeight: 400,
            "&:hover": { border: 0 },
          }}
        >
          View more
        </Button>
      </Box>
      <Grid container spacing={15}>
        <Grid item xs={6}>
          <Box sx={{ minHeight: "300px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="Avatar User"
                  src="https://api-cdn.myanimelist.net/images/anime/10/47347.jpg"
                  sx={{ width: 60, height: 60 }}
                />
                <Box ml={2}>
                  <Typography variant="subtitle1">Sorrowful</Typography>
                  <Typography variant="body2">Oct 2, 2014</Typography>
                </Box>
              </Box>
              <Typography variant="h1">10</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Reviews;
