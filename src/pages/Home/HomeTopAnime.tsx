import React from "react";
import { Box, Grid, Link, Skeleton, Typography } from "@mui/material";
import { useGetTopFiveAnimeQuery } from "../../redux/slices/animeSlice";
import HomeAnime from "./HomeAnime";

interface HomeTopAnimeProps {
  title: string;
  filter: string;
}

const HomeTopAnime = (props: HomeTopAnimeProps) => {
  const { title, filter } = props;
  const { data } = useGetTopFiveAnimeQuery(filter);

  return data ? (
    <Box>
      <Box
        mt={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: 800, fontSize: { md: 20, sm: 18, xs: 15 } }}
        >
          {title}
        </Typography>
        <Link
          href="#"
          sx={{
            fontSize: { md: 20, sm: 18, xs: 15 },
          }}
        >
          View more
        </Link>
      </Box>
      <Grid
        container
        display="flex"
        justifyContent="space-between"
        mt={2}
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((item: any) => (
          <HomeAnime anime={item} />
        ))}
      </Grid>
    </Box>
  ) : (
    <>
      <Box
        mt={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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
        <Skeleton variant="rectangular" height={340} />
      </Box>
    </>
  );
};

export default HomeTopAnime;
