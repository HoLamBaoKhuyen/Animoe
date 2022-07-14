import React, { ReactNode } from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import { REVIEWS } from "../../data/detail";
import ReviewCard from "./ReviewCard";

type ReviewsProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};

const Reviews: React.FC<ReviewsProps> = ({ children }) => {
  return (
    <Box>
      <Grid container columnSpacing={{ md: 15, xs: 3 }} rowSpacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Reviews
            </Typography>
            <Box>
            <Link
            href="#"
            sx={{
              fontSize: { md: 20, sm: 18, xs: 15 },
            }}
          >
            View more
          </Link>
            </Box>
          </Box>
        </Grid>
        {REVIEWS.map((review) => (
          <Grid item xs={12} sm={6} key={review.id}>
            <ReviewCard {...review} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Reviews;
