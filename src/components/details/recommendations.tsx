import React, { ReactNode } from "react";
import { Box, Button, Link, Typography } from "@mui/material";
import { theme } from "../../theme";
import { DETAIL_DATA } from "../../data/detail";

type RecommendationsProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};

const Recommendations: React.FC<RecommendationsProps> = ({ children }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Recommendations
        </Typography>
        <Box>
          <Link
            href="#"
            sx={{
              fontFamily: "Poppins",
              textDecoration: "none",
              color: theme.color._100,
              fontSize: { md: 20, sm: 18, xs: 15 },
              fontWeight: 500,
              "&:hover": {
                color: theme.palette.common.white,
              },
            }}
          >
            View more
          </Link>
        </Box>
      </Box>

      <Box display="flex" justifyContent="space-between">
        {DETAIL_DATA.recommendations.slice(0, 5).map((item) => (
          <Box
            textAlign="center"
            key={item.node.id}
            width={{ md: "15vw", xs: "18vw" }}
            // height={{ md: "400px" }}
          >
            <img
              alt="recommend_anime"
              src={item.node.main_picture.large}
              width="100%"
              height="auto"
              style={{ borderRadius: 10 }}
            />
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.color._100,
                fontSize: { md: 18, sm: 15, xs: 12 },
              }}
            >
              {item.node.title}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default Recommendations;
