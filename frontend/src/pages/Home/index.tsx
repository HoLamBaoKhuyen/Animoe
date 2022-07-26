import React from "react";
import Layout from "../../components/layout";
import { Box, Container } from "@mui/material";
import HomeTopAnime from "./HomeTopAnime";
const HomePage = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        <HomeTopAnime title="TOP AIRING ANIME" filter="airing" />
        <HomeTopAnime title="TOP UPCOMING ANIME" filter="upcoming" />
        <HomeTopAnime title="MOST POPULAR ANIME" filter="bypopularity" />
        <Box mb={8} />
      </Container>
    </Layout>
  );
};

export default HomePage;
