import React from "react";
import { Box, Container } from "@mui/material";
import Layout from "../../components/layout";
import SearchResult from "./SearchResult";
import SearchTool from "./SearchTool";
import { useGetAnimeSearchQuery } from "../../redux/slices/animeSlice";
import { useGetMangaSearchQuery } from "redux/slices/mangaSlice";
import { useSearchParams } from "react-router-dom";

const SearchPageUnit = (props: any) => {
  const { searchParams, searchType, searchData} = props;
  
  return (
    <Layout>
      <Box
        mt={4}
        sx={{
          backgroundImage:
            "url('https://cdn.donmai.us/original/b5/ed/__bai_darker_than_black__b5edc31979f1fa6b7984f74ed47f4624.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container
          disableGutters
          sx={{
            paddingX: {
              sm: 3,
              xs: 2,
            },
          }}
        >
          <SearchTool searchParams={searchParams} searchType={searchType}/>
        </Container>
      </Box>
      <Container
        disableGutters
        sx={{
          paddingX: {
            sm: 3,
            xs: 2,
          },
        }}
      >
        <Box mt={4}>
          <SearchResult searchParams={searchParams} searchData={searchData}/>
        </Box>
      </Container>
    </Layout>
  );
}

const AnimeSearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <SearchPageUnit searchParams={{params: searchParams, setParams: setSearchParams}} searchType="/anime-search" searchData={useGetAnimeSearchQuery} />
  );
};
const MangaSearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <SearchPageUnit searchParams={{params: searchParams, setParams: setSearchParams}} searchType="/manga-search" searchData={useGetMangaSearchQuery} />
  );
};
const SearchPage = ({type}:any) => {
  return type === "anime" ? ( <AnimeSearchPage></AnimeSearchPage> ) : ( <MangaSearchPage></MangaSearchPage> );
};
export default SearchPage;
