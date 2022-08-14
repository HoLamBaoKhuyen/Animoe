import React from "react";
import { Box, Container } from "@mui/material";
import Layout from "../../components/layout";
import RecommendationsPageHeader from "./RecommendationsPageHeader"
import RecommendationsPageBody from "./RecommendationsPageBody"
import { useGetRecentAnimeRecommendationsQuery } from "../../redux/slices/animeSlice";
import { useGetRecentMangaRecommendationsQuery } from "../../redux/slices/mangaSlice";
const RecommendationsPage  = ({data}:any) => {
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
                    <RecommendationsPageBody data={data}/>
                </Box>
            </Container>
        </Layout>
      );

}

const AnimeRecommendationsPage = () => {
  const {data} = useGetRecentAnimeRecommendationsQuery(0);
  return (
    <RecommendationsPage data={data}></RecommendationsPage>
  );
};
const MangaRecommendationsPage = () => {
    const {data} = useGetRecentMangaRecommendationsQuery(0);
    return (
        <RecommendationsPage data={data}></RecommendationsPage>
    );
};
export {AnimeRecommendationsPage, MangaRecommendationsPage};
