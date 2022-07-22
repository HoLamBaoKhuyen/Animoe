import React from "react";
import { Box, Container } from "@mui/material";
import Layout from "../../components/layout";
import AnimeSearchResult from "./AnimeSearchResult";
import MangaSearchResult from "./MangaSearchResult";
import SearchTool from "./SearchTool";
import MangaSearchTool from "./MangaSearchTool";

import { useSearchParams } from "react-router-dom";

const AnimeSearchPage = () => {
  const [searchQuery] = useSearchParams();

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
          <SearchTool searchQuery={searchQuery.get("q")} />
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
          <AnimeSearchResult searchQuery={searchQuery.get("q")} />
        </Box>
      </Container>
    </Layout>
  );
};
const MangaSearchPage = () => {
  const [searchParams] = useSearchParams();

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
          <MangaSearchTool searchQuery={searchParams.get("q")} />
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
          <MangaSearchResult searchQuery={searchParams} />
        </Box>
      </Container>
    </Layout>
  );
};
export {AnimeSearchPage,MangaSearchPage};
