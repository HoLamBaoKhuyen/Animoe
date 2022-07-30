import { Box, Grid, Link, Skeleton, Typography } from "@mui/material";
import { useParams } from "react-router";
import { useGetAnimeRelationsQuery } from "redux/slices/animeSlice";
import { theme } from "theme";
import Relation from "./Relation";

const createRelated = (list: any) => {
  var buffer = [];
  for (var i = 0; i < list.length; i++) {
    buffer.push(<Link href={`/${list[i].type}/${list[i].mal_id}`}><Typography variant='body2'>{list[i].name}</Typography></Link>);
  }
  return buffer;
}

const Relations = () => {
  const { id } = useParams();
  const { data } = useGetAnimeRelationsQuery(id);


  return data ? (
    <Box>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Related
            </Typography>
          </Box>
        </Grid>
        <Box sx={{ width: '100%' }}>
          <Grid container>
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
