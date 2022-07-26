import { Box, Grid, Skeleton, Typography } from "@mui/material";
import { useParams } from "react-router";
import { useGetAnimeCharactersQuery } from "redux/slices/animeSlice";
import { theme } from "theme";
var Slider = require('react-slick').default

const changeFormat = (list: any) => {
  let newList: any = []
  if (list && list.length !== 0) {
    list.forEach((item: { voice_actors: any[]; character: any; role: any; }) => {
      let voice_actor = item.voice_actors.filter((VA: any) => VA.language === "Japanese")
      if (voice_actor.length !== 0) {
        newList.push({ character: item.character, role: item.role, voice_actor: voice_actor[0] })

      }
    });
  }
  return newList
}

const createVoiceActors = (list: any) => {
  if (list.length !== 0)
    return list.map((actor: any) => (
      <Box py={1} pr={4}>
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
          <Box
            sx={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <img
              alt="character"
              src={actor.character.images.webp.image_url}
              height="100%"
              width="70px"
              object-fit={"cover"}
              style={{ borderRadius: 10, objectFit: 'cover' }}
            />
            <Box ml={2}>
              <Typography variant="body1">{actor.character.name}</Typography>
              <Typography variant="body2" sx={{ fontSize: 13 }}>
                {actor.role}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{ height: "100%", display: "flex", alignItems: "center" }}
          >
            <Box mr={2} textAlign={"right"}>
              <Typography variant="body1">{actor.voice_actor.person.name}</Typography>
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
              style={{ borderRadius: 10, objectFit: 'cover' }}
            />
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
  initialSlide: 1
}

const VoiceActors = () => {
  const { id } = useParams();
  const { data } = useGetAnimeCharactersQuery(id);

  const listData = changeFormat(data)



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
        <Box sx={{ width: '100%' }}>
          <Slider {...settings}>
            {createVoiceActors(listData)}
          </Slider>
        </Box>
      </Grid>
    </Box>
  ) : (
    <Skeleton variant="rectangular" height="100%" />
  );
}

export default VoiceActors 