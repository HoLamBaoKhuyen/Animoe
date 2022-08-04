import React, { ReactNode } from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import { theme } from "../../theme";
import { OPENING } from "../../data/detail";

type ThemeProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};
const Theme: React.FC<ThemeProps> = ({ children }) => {
  return (
    <Box>
      <Grid container spacing={{ md: 15, sm: 3 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Opening Theme
          </Typography>
          {OPENING.map((song, key) => (
            <Box
              key={song.id}
              sx={{
                color: theme.palette.common.white,
                display: "flex",
                alignItems: "center",
              }}
              my={2}
            >
              <HeadphonesIcon fontSize="large" />
              <Typography variant="body1" sx={{ color: theme.color._100 }}>
                {key + 1}: <Link href="#">{song.name}</Link> by {song.singer}{" "}
                (eps {song.eps})
              </Typography>
            </Box>
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Ending Theme
          </Typography>
          {OPENING.map((song, key) => (
            <Box
              key={song.id}
              sx={{
                color: theme.palette.common.white,
                display: "flex",
                alignItems: "center",
              }}
              my={2}
            >
              <HeadphonesIcon fontSize="large" />
              <Typography variant="body1" sx={{ color: theme.color._100 }}>
                {key + 1}: <Link href="#">{song.name}</Link> by {song.singer}{" "}
                (eps {song.eps})
              </Typography>
            </Box>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};
export default Theme;
