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
      spacing={3}
      sx={{
        background: theme.color._850,
        borderRadius: 3,
        px: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          pr: 2,
          my: 1,
          borderRight: `1px solid ${theme.color.white}`,
        }}
      >
        <Typography variant="h3" sx={{ fontStyle: "italic" }}>
          Score:
        </Typography>
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Typography variant="h1">{DETAIL_DATA.mean}</Typography>
          <Typography variant="body2">
            {format_number(DETAIL_DATA.num_scoring_users)} users
          </Typography>
        </Box>
      </Box>

      <Typography variant="h3" sx={{ fontStyle: "italic" }} pl={1}>
        Rank{" "}
        <Typography variant="h2" component="span" sx={{ fontStyle: "normal" }}>
          #{DETAIL_DATA.rank}
        </Typography>
      </Typography>

      <Typography variant="h3" sx={{ fontStyle: "italic" }}>
        Popularity{" "}
        <Typography variant="h2" component="span" sx={{ fontStyle: "normal" }}>
          #{DETAIL_DATA.popularity}
        </Typography>
      </Typography>
      <Typography variant="h3" sx={{ fontStyle: "italic" }}>
        Members{" "}
        <Typography variant="h2" component="span" sx={{ fontStyle: "normal" }}>
          {format_number(DETAIL_DATA.num_list_users)}
        </Typography>
      </Typography>
    </Stack>
  );
};
export default Score;
