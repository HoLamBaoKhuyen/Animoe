import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { useParams } from "react-router";
import { useGetMangaRelationsQuery } from "redux/slices/mangaSlice";
import { theme } from "theme";
import Relation from "./Relation";

const Relations = () => {
  const { id } = useParams();
  const { data } = useGetMangaRelationsQuery(id);

  return data ? (
    <Box>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Related Anime
            </Typography>
          </Box>
        </Grid>
        <Box sx={{ width: '100%' }}>
          <Grid container columnSpacing={1} rowSpacing={5}>
            {data.map((anime: any, index: number) =>
            (<Grid item xs={12} sm={4} md={3} key={index}>
              <Typography variant='subtitle1' sx={{ color: theme.color._100 }}>• {anime.relation}:</Typography>
              <Relation data={anime.entry} />
            </Grid>))
            }
          </Grid>
        </Box>
      </Grid>
    </Box>
  ) : (
    <Skeleton variant="rectangular" height="100%" />
  );
};
export default Relations;
