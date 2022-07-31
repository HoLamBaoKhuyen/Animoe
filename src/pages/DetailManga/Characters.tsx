import { Box, Grid, IconButton, Skeleton, Typography } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { theme } from "../../theme";
import styles from './styles.module.css'
import { useParams } from "react-router";
import { useGetMangaCharactersQuery } from "redux/slices/mangaSlice";
var Slider = require('react-slick').default

const createCharacter = (list: any) => {
  if (list.length !== 0)
    return list.slice(0, 30).map((char: any, index: number) => (
      <Box py={1} pr={4} key={index}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "100px",
            background: theme.color._850,
            borderRadius: 3,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <img
              alt="character"
              src={char.character.images.webp.image_url}
              height="100%"
              width="70px"
              object-fit={"cover"}
              style={{ borderRadius: 10, objectFit: 'cover' }}
            />
            <Box ml={2}>
              <Typography variant="body1">{char.character.name}</Typography>
              <Typography variant="body2" sx={{ fontSize: 13 }}>
                {char.role}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    ))
  return (<Typography variant='h5' mt={2}>Chưa có dữ liệu</Typography>)
}

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: 0,
  slidesToShow: 1,
  speed: 500,
  rows: 3,
  slidesPerRow: 2,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesPerRow: 1, rows: 5,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesPerRow: 1, rows: 5,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesPerRow: 1, rows: 5,
      }
    }
  ],
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
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      {dots}
    </Box>
  ),
}


const Characters = () => {
  const { id } = useParams();
  const { data } = useGetMangaCharactersQuery(id);


  return data ? (
    <Box>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Characters
            </Typography>
          </Box>
        </Grid>
        <Box sx={{ width: '100%' }}>
          <Slider {...settings}>
            {createCharacter(data)}
          </Slider>
        </Box>
      </Grid>
    </Box>
  ) : (
    <Skeleton variant="rectangular" height="100%" />
  );
};
export default Characters;
