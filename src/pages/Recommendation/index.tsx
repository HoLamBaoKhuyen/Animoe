import React from "react";
import { Box, Container } from "@mui/material";
import Layout from "../../components/layout";
import RecommendPageHeader from "./RecommendPageHeader"
import RecommendPageBody from "./RecommendPageBody"
import { useSearchParams } from "react-router-dom";

const RecommendationsPage = () => {
  const [searchParams] = useSearchParams();

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
                <RecommendPageHeader/>
            </Box>
            <Box mt={0}>
                <RecommendPageBody/>
            </Box>
        </Container>
    </Layout>
  );
};
export default RecommendationsPage;
