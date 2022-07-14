import React from "react";
import Layout from "../../components/layout";
import {Box, Container, Link, Typography} from "@mui/material";
import Footer from "../../components/layout/Footer";
import NavBar from "../../components/layout/NavBar";
import {DETAIL_DATA} from "../../data/detail";
import {theme} from "../../theme";

const HomePage = () => {
    return (
        <Layout>
            <NavBar />
            <Container>
                <Box mt={4}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography variant="h3" sx={{ fontWeight: 800 }}>
                        TOP AIRING ANIME
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Link
                        href="#"
                        sx={{
                            fontSize: { md: 20, sm: 18, xs: 15 },
                        }}
                    >
                        View more
                    </Link>
                </Box>
                <Box display="flex" justifyContent="space-between" mt={2} pb={10}>
                    {DETAIL_DATA.recommendations.slice(0, 5).map((item) => (
                        <Box
                            textAlign="center"
                            key={item.node.id}
                            width={{ md: "15vw", xs: "16vw" }}
                            // height={{ md: "400px" }}
                        >
                            <Link
                                href="#"
                                sx={{
                                    ".title": {
                                        transition: "all 0.2s",
                                    },
                                    "&:hover": {
                                        ".title": {
                                            color: theme.color._400,
                                        },
                                    },
                                }}
                            >
                                <img
                                    alt="recommend_anime"
                                    src={item.node.main_picture.large}
                                    width="100%"
                                    height="auto"
                                    style={{ borderRadius: 10 }}
                                />
                                <Typography
                                    className="title"
                                    variant="subtitle1"
                                    sx={{
                                        color: theme.color._100,
                                        fontSize: { md: 18, sm: 15, xs: 12 },
                                    }}
                                >
                                    {item.node.title}
                                </Typography>
                            </Link>
                        </Box>
                    ))}
                </Box>
            </Container>
            <Footer />
        </Layout>
    )
}

export default HomePage;