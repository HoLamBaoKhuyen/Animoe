import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Layout from "../../components/layout";
import SearchResults from "../../components/details/search_result";
import SearchTools from "../../components/details/search_tool";
import Footer from "../../components/layout/Footer";

const DetailPage = () => {
  return (
    <Layout>
      <Box  sx={{backgroundImage: "url('https://i.ibb.co/NZmWtF6/background-search.jpg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'}}>
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
      <Footer />
    </Layout>
  );
};
export default DetailPage;
