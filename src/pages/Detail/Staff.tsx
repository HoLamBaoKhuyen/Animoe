import { Box, Grid, IconButton, Skeleton, Typography } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { theme } from "../../theme";
import styles from './styles.module.css'
import { useGetAnimeStaffQuery } from "redux/slices/animeSlice";
import { useParams } from "react-router";
import { format_string_array } from "helpers/format";
var Slider = require('react-slick').default

const createStaff = (list: any) => {
  if (list.length !== 0)
    return list.slice(0, 60).map((staff: any) => (
      <Box py={1} pr={4}>
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
              alt="staff"
              src={staff.person.images.jpg.image_url}
              height="100%"
              width="70px"
              object-fit={"cover"}
              style={{ borderRadius: 10, objectFit: 'cover' }}
            />
            <Box ml={2}>
              <Typography variant="body1">{staff.person.name}</Typography>
              <Typography variant="body2" sx={{ fontSize: 13 }}>
                {format_string_array(staff.positions)}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    ))
  return (<></>)
}

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: 0,
  slidesToShow: 2,
  speed: 500,
  rows: 3,
  slidesPerRow: 1,
  dots: true,
  arrows: false,
  initialSlide: 1,
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


const Staff = () => {
  const { id } = useParams();
  const { data } = useGetAnimeStaffQuery(id);


  return data ? (
    <Box>
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Staff
            </Typography>
          </Box>
        </Grid>
        <Box sx={{ width: '100%' }}>
          <Slider {...settings}>
            {createStaff(data)}
          </Slider>
        </Box>
      </Grid>
    </Box>
  ) : (
    <Skeleton variant="rectangular" height="100%" />
  );
};
export default Staff;
