import { Box, Grid, IconButton, Skeleton, Typography } from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { useParams } from "react-router";
import { useGetAnimeCharactersQuery } from "redux/slices/animeSlice";
import { theme } from "theme";
import styles from "./styles.module.css";
var Slider = require("react-slick").default;

const changeFormat = (list: any) => {
  let newList: any = [];
  if (list && list.length !== 0) {
    list.forEach((item: { voice_actors: any[]; character: any; role: any }) => {
      let voice_actor = item.voice_actors.filter(
        (VA: any) => VA.language === "Japanese"
      );
      if (voice_actor.length !== 0) {
        newList.push({
          character: item.character,
          role: item.role,
          voice_actor: voice_actor[0],
        });
      }
    });
  }
  return newList;
};

const createVoiceActors = (list: any) => {
  if (list.length !== 0)
    return list.slice(0, 30).map((actor: any, index: number) => (
      <Box py={1} pr={4} key={index}>
        <Box
          sx={{
            width: "100%",
            height: "100px",
            background: theme.color._850,
            borderRadius: 3,
            display: "flex !important",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
            <img
              alt="character"
              src={actor.character.images.webp.image_url}
              height="100%"
              width="70px"
              object-fit={"cover"}
              style={{ borderRadius: 10, objectFit: "cover" }}
            />
            <Box ml={2}>
              <Typography variant="body1">{actor.character.name}</Typography>
              <Typography variant="body2" sx={{ fontSize: 13 }}>
                {actor.role}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
            <Box mr={2} textAlign={"right"}>
              <Typography variant="body1">
                {actor.voice_actor.person.name}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: 13 }}>
                {actor.voice_actor.language}
              </Typography>
            </Box>
            <img
              alt="voice_actor"
              src={actor.voice_actor.person.images.jpg.image_url}
              height="100%"
              width="70px"
              object-fit={"cover"}
              style={{ borderRadius: 10, objectFit: "cover" }}
            />
          </Box>
        </Box>
      </Box>
    ));
  return (
    <Typography variant="h5" mt={2}>
      No data found.
    </Typography>
  );
};
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
  dotsClass: `${styles.styled_dots}`,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesPerRow: 1,
        rows: 5,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesPerRow: 1,
        rows: 5,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesPerRow: 1,
        rows: 5,
      },
    },
  ],
  customPaging: function (i: any) {
    return (
      <IconButton>
        <FiberManualRecordIcon sx={{ fontSize: 18 }} />
      </IconButton>
    );
  },
  appendDots: (dots: any) => (
    <Box sx={{ display: "flex", justifyContent: "center" }}>{dots}</Box>
  ),
};

const VoiceActors = () => {
  const { id } = useParams();
  const { data } = useGetAnimeCharactersQuery(id);

  const listData = changeFormat(data);

  return listData ? (
    <Box>
      <Grid container rowSpacing={2}>
        <Grid item xs={12} zIndex={10}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Characters & Voice Actors
            </Typography>
          </Box>
        </Grid>
        <Box sx={{ width: "100%" }}>
          <Slider {...settings}>{createVoiceActors(listData)}</Slider>
        </Box>
      </Grid>
    </Box>
  ) : (
    <Skeleton variant="rectangular" height="100%" />
  );
};

export default VoiceActors;
