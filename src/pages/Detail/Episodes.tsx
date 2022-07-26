import { Box, Grid, Skeleton, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import { theme } from "../../theme";
import { useGetAnimeEpisodesQuery } from "redux/slices/animeSlice";
import { useParams } from "react-router";

const Episodes = () => {
  const { id } = useParams();
  const { data } = useGetAnimeEpisodesQuery(id);

  return data && data.data ? (
    <Box>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Episodes (25//25)
            </Typography>
          </Box>
        </Grid>
        {data.data.map((ep: any, index: number) => <Box key={index}>
          <Grid container sx={{ background: theme.color._850, borderRadius: 3 }} alignItems='center'>
            <Grid item xs={1} textAlign='center'>
              <Typography variant='h3'>1</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='subtitle1' sx={{ color: theme.color._100 }}>To You Two Thousand Years Later</Typography>
              <Typography variant='body1' sx={{ color: theme.color._100 }}>Ni Sen-Nen-Go no Kimi e (二千年後の君へ)</Typography>

            </Grid>
            <Grid item xs={3}>
              <Typography variant='h3'>Apr 7, 2013</Typography>
            </Grid>
            <Grid item xs={2} >
              <Box display='flex' alignItems={'center'} justifyContent='center'>
                <Typography variant='h3'>4.8</Typography>
                <StarIcon sx={{ color: theme.color.yellow }} />
              </Box>
            </Grid>
          </Grid></Box>)}
      </Grid>
    </Box>



  ) : (
    <Skeleton variant="rectangular" height="100%" />
  );
};
export default Episodes;
