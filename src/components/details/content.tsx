import React, { ReactNode } from "react";
import { Box, Chip, Stack, Typography } from "@mui/material";
import { theme } from "../../theme";
import { DETAIL_DATA } from "../../data/detail";

type ContentProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};

const Content: React.FC<ContentProps> = ({ children }) => {
  return (
    <Box>
      <Box mt={3}>
        <Typography variant="subtitle1">Synopsis</Typography>
        <Typography
          variant="body1"
          sx={{ whiteSpace: "pre-line", color: theme.color._100 }}
        >
          {`${DETAIL_DATA.synopsis}`}
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="subtitle1">Background</Typography>
        <Typography
          variant="body1"
          sx={{ whiteSpace: "pre-line", color: theme.color._100 }}
        >
          {`${DETAIL_DATA.background}`}
        </Typography>
      </Box>
      <Box mt={3}>
        <Typography variant="subtitle1">Genres</Typography>
        <Stack direction="row" spacing={1}>
          {DETAIL_DATA.genres.map((genre) => (
            <Box>
              <Chip key={genre.id} label={genre.name} />
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
export default Content;
