import React from "react";
import Layout from "../../components/layout";
import {Container} from "@mui/material";
import Footer from "../../components/layout/Footer";
import NavBar from "../../components/layout/NavBar";
import HomeTopAnime from "./HomeTopAnime";
const HomePage = () => {
    return (
        <Layout>
            <NavBar />
            <Container>
                <HomeTopAnime title="TOP AIRING ANIME" filter="airing" />
                <HomeTopAnime title="TOP UPCOMING ANIME" filter="upcoming" />
                <HomeTopAnime title="MOST POPULAR ANIME" filter="bypopularity" />
            </Container>
            <Footer />
        </Layout>
    )
}

export default HomePage;