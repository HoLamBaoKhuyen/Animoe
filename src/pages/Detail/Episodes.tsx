import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box, Grid, Skeleton, Typography, Pagination } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import axios from 'axios'
import usePagination from "./Pagination";
import { BASE_API, EPISODES_PER_PAGE } from "./const ";
import { theme } from "../../theme";
import { format_date } from "helpers/format";

const Episodes = (props: any) => {
  const total_eps = props.episodes ? props.episodes : "?"
  const { id } = useParams();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios(
        `${BASE_API}/anime/${id}/episodes`,
      )
      setData(result.data.data)
    }
    getData()
  }, []);

  let [page, setPage] = useState(1);
  const PER_PAGE = EPISODES_PER_PAGE;
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
        {dataPagi.currentData().map((ep: any, index: number) => <Box key={index} width='100%' my={1}>
          <Grid container sx={{ background: theme.color._850, borderRadius: 3, paddingY: 2 }} alignItems='center'>
            <Grid item xs={1} textAlign='center'>
              <Typography variant='h3'>{ep.mal_id}</Typography>
            </Grid>
            <Grid item xs={7}>
              <Typography variant='subtitle1' sx={{ color: theme.color._100 }}>{ep.title}</Typography>
              <Typography variant='body1' sx={{ color: theme.color._100 }}>{ep.title_romanji}</Typography>
              {/* <Typography variant='body1' sx={{ color: theme.color._100 }}>({ep.title_japanese})</Typography> */}
            </Grid>
            <Grid item xs={3}>
              <Typography variant='h4'>{format_date(ep.aired)}</Typography>
            </Grid>
            <Grid item xs={1} >
              <Box display='flex' alignItems={'center'} >
                <Typography variant='h3'>{ep.score}</Typography>
                <StarIcon sx={{ color: theme.color.yellow }} />
              </Box>
            </Grid>
          </Grid></Box>)}
        <Box sx={{ margin: 'auto', marginTop: 3 }}>
          <Pagination
            count={count}
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
            sx={{
              "& .Mui-selected": {
                background: theme.color._600
              }
            }}
          /></Box>
      </Grid>
    </Box>
  ) : (
    <Skeleton variant="rectangular" height="100%" />
  );
};
export default Episodes;
