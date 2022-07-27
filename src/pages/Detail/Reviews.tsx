import React, { ReactNode } from "react";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { REVIEWS } from "../../data/detail";
import ReviewCard from "./ReviewCard";
import { useGetAnimeReviewsQuery } from "redux/slices/animeSlice";
import { useParams } from "react-router";


type ReviewsProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};

const Reviews: React.FC<ReviewsProps> = ({ children }) => {
  const { id } = useParams();
  const { data } = useGetAnimeReviewsQuery(id);

  return data ? (
    <Box>
      <Grid container columnSpacing={{ md: 15, xs: 3 }} rowSpacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Reviews
            </Typography>
          </Box>
        </Grid>
        {data.map((review: any, index: number) => (
          <Grid item xs={12} sm={12} key={index}>
            <ReviewCard {...review} />
          </Grid>
        ))}
      </Grid>
    </Box>
  ) : (
    <Skeleton variant="rectangular" height="100%" />
  );
};
export default Reviews;
