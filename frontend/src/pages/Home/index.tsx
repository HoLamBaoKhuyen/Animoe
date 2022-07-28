import * as React from "react";
import Layout from "../../components/layout";
import { Box, Container } from "@mui/material";
import HomeTopAnime from "./HomeTopAnime";
const HomePage = () => {
  return (
    <Layout>
      <Container maxWidth="md">
        <HomeTopAnime title="TOP AIRING ANIME" filter="airing" />
        <HomeTopAnime title="MOST POPULAR ANIME" filter="bypopularity" />
        <HomeTopAnime title="MOST FAVORITE ANIME" filter="favorite" />
        <Box mb={8} />
      </Container>
    </Layout>
  );
};

export default HomePage;
