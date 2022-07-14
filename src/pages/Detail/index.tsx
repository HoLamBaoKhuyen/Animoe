import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Layout from "../../components/layout";
import { theme } from "../../theme";
import Poster from "./Poster";
import Information from "./Information";
import { DETAIL_DATA } from "../../data/detail";
import Trailers from "./Trailers";
import VoiceActors from "./VoiceActors";
import Staff from "./Staff";
import Theme from "./Theme";
import Reviews from "./Reviews";
import Recommendations from "./Recommendations";
import Footer from "../../components/layout/Footer";
import NavBar from "../../components/layout/NavBar";

const DetailPage = () => {
  return (
    <Layout>
      <NavBar />
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
        <Box mt={4}>
          <Recommendations />
        </Box>
      </Container>
      <Footer />
    </Layout>
  );
};
export default DetailPage;
