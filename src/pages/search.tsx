import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Layout from "../components/layout";
import { theme } from "../theme";
import Poster from "../components/details/poster";
import Information from "../components/details/information";
import SearchResults from "../components/details/search_result";
import SearchTools from  "../components/details/search_tool";

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
        
        <Box  sx={{backgroundImage: "url('https://i.ibb.co/NZmWtF6/background-search.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'}}>
          <SearchTools />
        </Box>

        <Box mt={4}>
          <SearchResults />
        </Box>

      </Container>
    </Layout>
  );
};
export default DetailPage;
