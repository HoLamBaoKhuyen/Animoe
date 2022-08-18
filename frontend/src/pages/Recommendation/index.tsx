import * as React from "react";
import { Box, Container } from "@mui/material";
import Layout from "../../components/layout";
import RecommendationsPageHeader from "./RecommendationsPageHeader";
import RecommendationsPageBody from "./RecommendationsPageBody";
import { useGetRecentAnimeRecommendationsQuery } from "../../redux/slices/animeSlice";
import { useGetRecentMangaRecommendationsQuery } from "../../redux/slices/mangaSlice";
const RecommendationsPageUnit = ({ data, title }: any) => {
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
          <RecommendationsPageHeader title={title} />
        </Box>
        <Box mt={0}>
          <RecommendationsPageBody data={data} />
        </Box>
      </Container>
    </Layout>
  );
};

const AnimeRecommendationsPage = () => {
  const { data } = useGetRecentAnimeRecommendationsQuery(0);
  return (
    <RecommendationsPageUnit
      data={data}
      title={"Anime"}
    ></RecommendationsPageUnit>
  );
};
const MangaRecommendationsPage = () => {
  const { data } = useGetRecentMangaRecommendationsQuery(0);
  return (
    <RecommendationsPageUnit
      data={data}
      title={"Manga"}
    ></RecommendationsPageUnit>
  );
};
const RecommendationsPage = ({ type }: any) => {
  return type === "anime" ? (
    <AnimeRecommendationsPage></AnimeRecommendationsPage>
  ) : (
    <MangaRecommendationsPage></MangaRecommendationsPage>
  );
};
export default RecommendationsPage;
