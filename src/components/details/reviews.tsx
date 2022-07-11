import React, { ReactNode } from "react";
import { Avatar, Box, Button, Grid, Link, Typography } from "@mui/material";
import { theme } from "../../theme";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

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
          <Box
            sx={{
              minHeight: "200px",
              background: theme.color._850,
              p: 3,
              borderRadius: 4,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="Avatar User"
                  src="https://api-cdn.myanimelist.net/images/anime/10/47347.jpg"
                  sx={{ width: 60, height: 60 }}
                />
                <Box ml={2}>
                  <Typography
                    variant="subtitle1"
                    sx={{ color: theme.color._100 }}
                  >
                    Sorrowful
                  </Typography>
                  <Typography variant="body2" sx={{ color: theme.color._100 }}>
                    Oct 2, 2014
                  </Typography>
                </Box>
              </Box>
              <Typography variant="h1" sx={{ color: theme.color.green_400 }}>
                10
              </Typography>
            </Box>
            <Typography sx={{ color: theme.color._100 }} mt={1}>
              Oh dear Shingeki no Kyojin, where do I even begin. If you've
              talked with your friends about anime, then the couple anime that
              everyone talks about are Naruto, Bleach, One Piece, Dragon Ball,
              and... Shingeki no Kyojin. What's the difference between Shingeki
              and the rest? Shingeki only has 25 episodes so far yet it's on par
              in popularity with the other...
            </Typography>
            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
            >
              <Button
                variant="outlined"
                sx={{
                  color: theme.color._100,
                  border: 0,
                  p: 0,
                  fontSize: 18,
                  fontWeight: 500,
                  "&:hover": {
                    border: 0,
                    textDecoration: "underline",
                  },
                }}
              >
                Read more
              </Button>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="subtitle1"
                  sx={{ color: theme.color._100 }}
                >
                  1580
                </Typography>
                <Box sx={{ color: theme.color._400 }} ml={1}>
                  <ThumbUpIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Reviews;
