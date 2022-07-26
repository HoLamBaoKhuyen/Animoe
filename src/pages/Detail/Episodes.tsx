import { useEffect, useState } from "react";
import { Box, Grid, Skeleton, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { useGetAnimeEpisodesQuery } from "redux/slices/animeSlice";
import { useParams } from "react-router";
import { Pagination } from "@material-ui/lab";
import usePagination from "./Pagination";
import { theme } from "../../theme";
import { DETAIL_DATA, VOICE_ACTORS as data } from "data/detail";


const Episodes = (props: any) => {
  const { id } = useParams();
  // const { data } = useGetAnimeEpisodesQuery(id);
  const total_eps = props.episodes ? props.episodes : "?"

  let [page, setPage] = useState(1);
  const PER_PAGE = 2;

  const count = Math.ceil(data.length / PER_PAGE);
  const dataPagi = usePagination(data, PER_PAGE);

  const handleChange = (e: any, p: number) => {
    setPage(p);
    dataPagi.jump(p);
  };



  return data ? (
    <Box>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Episodes ({data.length}/{total_eps})
            </Typography>
          </Box>
        </Grid>
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
        {dataPagi.currentData().map((ep: any, index: number) => <Box key={index} width='100%' my={1}>
          <Grid container sx={{ background: theme.color._850, borderRadius: 3 }} alignItems='center'>
            <Grid item xs={1} textAlign='center'>
              <Typography variant='h3'>{ep.mal_id}{index}</Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography variant='subtitle1' sx={{ color: theme.color._100 }}>{ep.title}</Typography>
              <Typography variant='body1' sx={{ color: theme.color._100 }}>{ep.title_romanji}</Typography>
              <Typography variant='body1' sx={{ color: theme.color._100 }}>({ep.title_japanese})</Typography>
            </Grid>
            <Grid item xs={2}>
              <Typography variant='h3'>{ep.aired}</Typography>
            </Grid>
            <Grid item xs={2} >
              <Box display='flex' alignItems={'center'} justifyContent='center'>
                <Typography variant='h3'>{ep.score}</Typography>
                <StarIcon sx={{ color: theme.color.yellow }} />
              </Box>
            </Grid>
          </Grid></Box>)}
        <Pagination
          count={count}
          size="large"
          page={page}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Grid>
    </Box>
  ) : (
    <Skeleton variant="rectangular" height="100%" />
  );
};
export default Episodes;
