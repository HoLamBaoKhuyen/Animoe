import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Layout from "../components/layout";
import { theme } from "../theme";
import Poster from "../components/details/poster";
import Information from "../components/details/information";
import { DETAIL_DATA } from "../data/detail";
import Trailers from "../components/details/trailers";
import VoiceActors from "../components/details/voice_actors";
import Staff from "../components/details/staff";
import Theme from "../components/details/theme";
import Reviews from "../components/details/reviews";
import Recommendations from "../components/details/recommendations";

const DetailPage = () => {
  return (
    <Layout>
      <Container
        disableGutters
        sx={{
          paddingX: {
            sm: 3,
            xs: 2,
          },
        }}
      >
        <Grid container rowSpacing={2} columnSpacing={{ md: 4, sm: 2 }}>
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{ fontSize: { md: 32, sm: 28, xs: 22 } }}
            >
              {DETAIL_DATA.title}
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: theme.palette.grey[400],
                fontSize: { md: 23, xs: 18 },
              }}
            >
              {DETAIL_DATA.alternative_titles.en}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3} md={3}>
            <Poster />
          </Grid>
          <Grid item xs={12} sm={9} md={9}>
            <Information />
          </Grid>
        </Grid>
        <Box mt={4}>
          <Trailers />
        </Box>
        <Box mt={4}>
          <VoiceActors />
        </Box>
        <Box mt={4}>
          <Staff />
        </Box>
        <Box mt={4}>
          <Theme />
        </Box>
        <Box mt={4}>
          <Reviews />
        </Box>
        <Box mt={4} pb={10}>
          <Recommendations />
        </Box>
      </Container>
    </Layout>
  );
};
export default DetailPage;
