import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Layout from "../components/layout";
import { theme } from "../theme";
import Poster from "../components/details/poster";
import Information from "../components/details/information";
import { DETAIL_DATA } from "../data/detail";
import Trailers from "../components/details/trailers";
import VoiceActors from "../components/details/voice_actors";

const DetailPage = () => {
  return (
    <Layout>
      <Container disableGutters>
        <Grid container rowSpacing={2} columnSpacing={3}>
          <Grid item xs={12}>
            <Typography variant="h2">{DETAIL_DATA.title}</Typography>
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.grey[400], fontSize: 23 }}
            >
              {DETAIL_DATA.alternative_titles.en}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Poster />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Information />
          </Grid>
        </Grid>
        <Box mt={4}>
          <Trailers />
        </Box>
        <Box mt={4}>
          <VoiceActors />
        </Box>
      </Container>
    </Layout>
  );
};
export default DetailPage;
