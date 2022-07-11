import React, { ReactNode } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
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
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mb={1}>
        <Typography variant="h3">Characters & Voice Actors</Typography>
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
      <Grid container columnSpacing={15} rowSpacing={4}>
        {VOICE_ACTORS.map((actor) => (
          <Grid item xs={6} key={actor.id}>
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
