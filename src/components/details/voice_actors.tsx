import React, { ReactNode } from "react";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import { theme } from "../../theme";
import { DETAIL_DATA, VOICE_ACTORS } from "../../data/detail";

type VoiceActorsProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};
const VoiceActors: React.FC<VoiceActorsProps> = ({ children }) => {
  return (
    <Box>
      <Grid
        container
        columnSpacing={{ md: 15, sm: 3 }}
        rowSpacing={{ md: 4, xs: 2 }}
      >
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Characters & Voice Actors
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
        </Grid>
        {VOICE_ACTORS.map((actor) => (
          <Grid item xs={12} sm={6} key={actor.id}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100px",
                background: theme.color._800,
                borderRadius: 3,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{ height: "100%", display: "flex", alignItems: "center" }}
              >
                <img
                  alt="voice_actor"
                  src={actor.img.character}
                  height="100%"
                  width="auto"
                  style={{ borderRadius: 10 }}
                />
                <Box ml={2}>
                  <Typography
                    variant="body2"
                    sx={{ textDecorationLine: "underline" }}
                  >
                    {actor.character}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: 13 }}>
                    {actor.role}
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{ height: "100%", display: "flex", alignItems: "center" }}
              >
                <Box mr={2}>
                  <Typography
                    variant="body2"
                    sx={{ textDecorationLine: "underline" }}
                  >
                    {actor.actor}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: 13 }}>
                    {actor.nationality}
                  </Typography>
                </Box>
                <img
                  alt="voice_actor"
                  src={DETAIL_DATA.main_picture.medium}
                  height="100%"
                  width="auto"
                  style={{ borderRadius: 10 }}
                />
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default VoiceActors;
