import { Box, Grid, Skeleton, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useGetAnimeVideosQuery } from "../../redux/slices/animeSlice";
import styles from './styles.module.css'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { theme } from "theme";
var Slider = require('react-slick').default

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,
  className: `${styles.slider_container}`,
  prevArrow:

    <ArrowBackIosNewIcon sx={{
      color: theme.color.white,
      transition: 'all 0.2s',
      fontSize: { md: 60, sm: 30, xs: 0 },
      left: -50,
      '&:hover': {
        color: theme.color.grey_300
      }
    }} />

  ,
  nextArrow: <ArrowForwardIosIcon sx={{
    color: theme.color.white,
    transition: 'all 0.2s',
    fontSize: { md: 60, sm: 30, xs: 0 },
    right: -50,
    '&:hover': {
      color: theme.color.grey_300
    }
  }} />,
};

const Trailers = () => {
  const { id } = useParams();
  const { data } = useGetAnimeVideosQuery(id);
  return data ? (
    <Box>
      <Grid
        container
        columnSpacing={{ md: 10, sm: 2, xs: 3 }}
        rowSpacing={{ md: 0, xs: 2 }}
      >
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Trailers
            </Typography>
          </Box>
        </Grid>
        <Slider {...settings}>
          {data.promo.map((video: any, index: number) => <Box key={index}
          >
            <Box sx={{
              margin: 'auto',
              padding: 1,
              width: { md: "500px", sm: "400px", xs: '300px' },
              height: { md: "320px", sm: "250px", xs: "180px" },
              borderRadius: 3,
              overflow: "hidden",
            }}>
              <ReactPlayer
                url={video.trailer.url}
                width="100%"
                height="100%"
                playing={false}
                controls={true}
                poster={video.trailer.images.medium_image_url}
              /></Box>
          </Box>)}

        </Slider>

      </Grid>
    </Box>
  ) : (
    <Skeleton variant="rectangular" height="100%" />
  );
};
export default Trailers;
