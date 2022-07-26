import React, { ReactNode } from "react";
import { Box, Grid, Link, Skeleton, Typography } from "@mui/material";
import { theme } from "../../theme";
import { DETAIL_DATA, VOICE_ACTORS } from "../../data/detail";
import { useGetAnimeCharactersQuery } from "redux/slices/animeSlice";
import { useParams } from "react-router";

const VoiceActors = () => {
  const { id } = useParams();
  const { data } = useGetAnimeCharactersQuery(id);
  return data ? (
    <Box>
      <Grid container rowSpacing={2}>
        <Grid item xs={12} zIndex={10}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Characters & Voice Actors
            </Typography>
            <Box>
              <Link
                href="#"
                sx={{
                  fontSize: { md: 20, sm: 18, xs: 15 },
                }}
              >
                View more
              </Link>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          container
          columnSpacing={{ md: 15, sm: 3 }}
          rowSpacing={{ md: 4, xs: 2 }}
        >
          {data.map((actor: any, index: number) => (
            actor.voice_actors.slice(0, 2).map((VA: any, key: number) => (<Grid item xs={12} sm={6} key={index}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100px",
                  background: theme.color._850,
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
                    src={actor.character.images.webp.image_url}
                    height="100%"
                    width="70px"
                    object-fit={"cover"}
                    style={{ borderRadius: 10, objectFit: 'cover' }}
                  />
                  <Box ml={2}>
                    <Typography variant="body1">{actor.character.name}</Typography>
                    <Typography variant="body2" sx={{ fontSize: 13 }}>
                      {actor.role}
                    </Typography>
                  </Box>
                </Box>
                <Box
                  sx={{ height: "100%", display: "flex", alignItems: "center" }}
                >
                  <Box mr={2} textAlign={"right"}>
                    <Typography variant="body1">{VA.person.name}</Typography>
                    <Typography variant="body2" sx={{ fontSize: 13 }}>
                      {VA.language}
                    </Typography>
                  </Box>
                  <img
                    alt="voice_actor"
                    src={VA.person.images.jpg.image_url}
                    height="100%"
                    width="70px"
                    object-fit={"cover"}
                    style={{ borderRadius: 10, objectFit: 'cover' }}
                  />
                </Box>
              </Box>
            </Grid>))
          ))}
        </Grid>
      </Grid>
    </Box>
  ) : (
    <Skeleton variant="rectangular" height="100%" />
  );
};
export default VoiceActors;
