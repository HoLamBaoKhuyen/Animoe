import React from "react";
import { Box, Container } from "@mui/material";
import Layout from "../../components/layout";
import SearchResults from "./SearchResult";
import SearchTools from "./SearchTool";

const DetailPage = () => {
  return (
    <Layout>
      <Box
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
          <SearchTools />
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
          <SearchResults />
        </Box>
      </Container>
    </Layout>
  );
};
export default DetailPage;