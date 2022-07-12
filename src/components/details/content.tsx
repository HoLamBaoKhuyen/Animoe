import React, { ReactNode } from "react";
import { Box, Button, Chip, Stack, Typography } from "@mui/material";
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
        <Box>
          {DETAIL_DATA.genres.map((genre, key) => (
            <Button
              variant="outlined"
              disabled
              sx={{ width: "fit-content", p: 0, border: 0, mr: 1, mb: 1 }}
              key={key}
            >
              <Chip key={genre.id} label={genre.name} />
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Content;
