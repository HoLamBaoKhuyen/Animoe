import React from "react";
import {Box, Grid, Link, Skeleton, Typography, Stack } from "@mui/material";
import { theme } from "../../theme";
import { useGetTopFiveAnimeQuery } from "../../redux/slices/animeSlice";

interface HomeTopAnimeProps {
    title: string,
    filter: string
}

const HomeTopAnime = (props: HomeTopAnimeProps) => {
    const { title, filter } = props;
    const { data } = useGetTopFiveAnimeQuery(filter);

    return data ? (
        <Box>
            <Box mt={2} display="flex" justifyContent="space-between" alignItems='center'>
                <Typography variant="h3" sx={{ fontWeight: 800, fontSize: { md: 20, sm: 18, xs: 15 }, }}>
                    {title}
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
            <Box display="flex" justifyContent="space-between" mt={2}>
                {data.map((item: any) => (
                        <Link
                        href={`anime/${item.mal_id}`}
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
                        <Stack spacing={1}
                               textAlign="center"
                               key={item.mal_id}
                               width={{md: "15vw", xs: "16vw"}}
                        >
                            <Grid item md={12} sm={10} xs={8} height={{md: 340, sm: 220, xs: 100}}>
                                <img
                                    alt={item.title}
                                    src={item.images.jpg.image_url}
                                    width="100%"
                                    height="100%"
                                    style={{borderRadius: 12}}/>
                            </Grid>

                            <Grid textAlign="center">
                                <Typography
                                    className="title"
                                    variant="subtitle1"
                                    sx={{
                                        color: theme.color._100,
                                        fontSize: {md: 16, sm: 12, xs: 8},
                                    }}
                                >
                                    {item.title}
                                </Typography>
                            </Grid>
                        </Stack>
                    </Link>
                ))}
            </Box>
        </Box>
    ) : (
        <>
            <Box mt={2}
                 sx={{
                     display: 'flex',
                     alignItems: 'center',
                     justifyContent: 'space-between',
                 }}
            >
                <Typography variant="h3" sx={{ fontWeight: 800 }}>
                    {title}
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
            <Box display="flex" justifyContent="space-between" mt={2}>
                <Skeleton variant='rectangular' height={340} />
            </Box>
        </>
    )
}

export default HomeTopAnime;