import React, { ReactNode } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { theme } from "../../theme";
import { REVIEWS } from "../../data/detail";
import ReviewCard from "./reviewCard";

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
        {REVIEWS.map((review) => (
          <Grid item xs={6} key={review.id}>
            <ReviewCard {...review} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Reviews;
