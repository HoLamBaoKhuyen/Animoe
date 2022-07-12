import React, { ReactNode } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { theme } from "../../theme";
import { DETAIL_DATA, REVIEWS } from "../../data/detail";
import ReviewCard from "./reviewCard";

type RecommendationsProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};

const Top5 = (list: any) => {
  let top5list = [];
  for (let i = 0; i < list.length; i++) {
    top5list.push(
      <Box textAlign="center">
        <img
          alt="recommend_anime"
          src={list.node.main_picture.large}
          width="200px"
          height="auto"
          style={{ borderRadius: 10 }}
        />
        <Typography variant="subtitle1" sx={{ color: theme.color._100 }}>
          {list.node.title}
        </Typography>
      </Box>
    );
  }
  return top5list;
};

const Recommendations: React.FC<RecommendationsProps> = ({ children }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mb={1}>
        <Typography variant="h3">Recommendations</Typography>
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
      <Box display="flex" justifyContent="space-between">
        {DETAIL_DATA.recommendations.slice(0, 5).map((item) => (
          <Box textAlign="center" key={item.node.id}>
            <img
              alt="recommend_anime"
              src={item.node.main_picture.large}
              width="210px"
              height="auto"
              style={{ borderRadius: 10 }}
            />
            <Typography variant="subtitle1" sx={{ color: theme.color._100 }}>
              {item.node.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Recommendations;
