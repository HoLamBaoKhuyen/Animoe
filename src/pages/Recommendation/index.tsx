import React from "react";
import { Box, Container } from "@mui/material";
import Layout from "../../components/layout";
import RecommendationsPageHeader from "./RecommendationsPageHeader"
import RecommendationsPageBody from "./RecommendationsPageBody"

const AnimeRecommendationsPage = () => {
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
            <Box mt={0}>
                <RecommendationsPageHeader/>
            </Box>
            <Box mt={0}>
                <RecommendationsPageBody/>
            </Box>
        </Container>
    </Layout>
  );
};
const MangaRecommendationsPage = () => {
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
              <Box mt={0}>
                  <RecommendationsPageHeader/>
              </Box>
              <Box mt={0}>
                  <RecommendationsPageBody/>
              </Box>
          </Container>
      </Layout>
    );
};
export {AnimeRecommendationsPage, MangaRecommendationsPage};
