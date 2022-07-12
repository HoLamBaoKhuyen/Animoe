import React, { ReactNode } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { theme } from "../../theme";
import { format_number } from "../../helpers/format";
import { DETAIL_DATA } from "../../data/detail";

type ScoreProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};
const Score: React.FC<ScoreProps> = ({ children }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      spacing={{ md: 3, sm: 2, xs: 1 }}
      sx={{
        background: theme.color._850,
        borderRadius: 3,
        px: 2,
      }}
    >
      <Box
        sx={{
          display: { md: "flex", xs: "block" },
          alignItems: "center",
          pr: 2,
          my: 1,
          borderRight: `1px solid ${theme.color.white}`,
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontStyle: "italic", fontSize: { md: 24, sm: 16, xs: 15 } }}
        >
          Score:
        </Typography>
        <Box
          sx={{
            textAlign: "center",
            display: { md: "block", xs: "flex" },
          }}
        >
          <Typography
            variant="h1"
            sx={{ fontSize: { md: 45, sm: 26, xs: 20 } }}
          >
            {DETAIL_DATA.mean}
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontSize: { md: 15, xs: 0 }, fontWeight: 200 }}
          >
            {format_number(DETAIL_DATA.num_scoring_users)} users
          </Typography>
        </Box>
      </Box>

      <Typography
        variant="h3"
        sx={{ fontStyle: "italic", fontSize: { md: 24, sm: 16, xs: 15 } }}
        pl={1}
      >
        Rank{" "}
        <Typography
          variant="h2"
          component="span"
          sx={{ fontStyle: "normal", fontSize: { md: 32, sm: 26, xs: 20 } }}
        >
          #{DETAIL_DATA.rank}
        </Typography>
      </Typography>

      <Typography
        variant="h3"
        sx={{ fontStyle: "italic", fontSize: { md: 24, sm: 16, xs: 15 } }}
      >
        Popularity{" "}
        <Typography
          variant="h2"
          component="span"
          sx={{ fontStyle: "normal", fontSize: { md: 32, sm: 26, xs: 20 } }}
        >
          #{DETAIL_DATA.popularity}
        </Typography>
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontStyle: "italic", fontSize: { md: 24, sm: 16, xs: 15 } }}
      >
        Members{" "}
        <Typography
          variant="h2"
          component="span"
          sx={{ fontStyle: "normal", fontSize: { md: 32, sm: 26, xs: 20 } }}
        >
          {format_number(DETAIL_DATA.num_list_users)}
        </Typography>
      </Typography>
    </Stack>
  );
};
export default Score;
