import { Box, Grid, IconButton, Skeleton, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";
import { useGetAnimeVideosQuery } from "../../redux/slices/animeSlice";
import styles from './styles.module.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


var Slider = require('react-slick').default

const settings = {
  centerPadding: 2,
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  className: `${styles.slider_trailer}`,
  dotsClass: `${styles.styled_dots}`,
  customPaging: function (i: any) {
    return (
      <IconButton>
        <FiberManualRecordIcon sx={{ fontSize: 18 }} />
      </IconButton>

    );
  },
  appendDots: (dots: any) => (
    <Box
      sx={{ display: 'flex', justifyContent: 'center', left: -30 }}
    >
      {dots}
    </Box>
  ),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      }
    },
  ],
};

const Trailers = () => {
  const { id } = useParams();
  const { data } = useGetAnimeVideosQuery(id);
  return data && data.promo.length !== 0 ? (
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
        <Grid item xs={12}>
          <Slider {...settings}>
            {data.promo.map((video: any, index: number) => <Box key={index} sx={{
              width: { md: "500px", sm: "400px", xs: '300px' },
              height: { md: "280px", sm: "200px", xs: "180px" },
            }}
            >
              <ReactPlayer
                url={video.trailer.url}
                width="90%"
                height="100%"
                playing={false}
                controls={true}
                poster={video.trailer.images.medium_image_url}
              />
            </Box>)}
          </Slider>
        </Grid>
      </Grid>
    </Box >
  ) : (
    <Skeleton variant="rectangular" height="100%" />
  );
};
export default Trailers;
