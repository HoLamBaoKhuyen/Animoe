import React, { ReactNode } from "react";
import { Box, Button, Typography } from "@mui/material";
import { theme } from "../../theme";
import { DETAIL_DATA } from "../../data/detail";
import { format_string } from "../../helpers/format";

type PosterProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};
const Poster: React.FC<PosterProps> = ({ children }) => {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            borderRadius: 4,
            overflow: "hidden",
            height: "400px",
            width: "100%",
            backgroundImage: `url(${DETAIL_DATA.main_picture.large})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Box>
        <Box sx={{ textAlign: "center" }} my={2}>
          <Button sx={{ px: { md: 5, xs: 3 } }}>Add to list</Button>
        </Box>
      </Box>
      <Box>
        <Typography variant="subtitle1" mt={1}>
          Information
        </Typography>
        <Typography variant="subtitle2" sx={{ color: theme.color._100 }}>
          Type:{" "}
          <Typography
            component="span"
            variant="body2"
            sx={{ color: theme.color._100 }}
          >
            {format_string(DETAIL_DATA.media_type)}
          </Typography>
        </Typography>
        <Typography variant="subtitle2" sx={{ color: theme.color._100 }}>
          Episodes:{" "}
          <Typography
            component="span"
            variant="body2"
            sx={{ color: theme.color._100 }}
          >
            {DETAIL_DATA.num_episodes}
          </Typography>
        </Typography>
        <Typography variant="subtitle2" sx={{ color: theme.color._100 }}>
          Status:{" "}
          <Typography
            component="span"
            variant="body2"
            sx={{ color: theme.color._100 }}
          >
            {format_string(DETAIL_DATA.status)}
          </Typography>
        </Typography>
        <Typography variant="subtitle2" sx={{ color: theme.color._100 }}>
          Aired:{" "}
          <Typography
            component="span"
            variant="body2"
            sx={{ color: theme.color._100 }}
          >
            {DETAIL_DATA.start_date}
          </Typography>
        </Typography>
        <Typography variant="subtitle2" sx={{ color: theme.color._100 }}>
          Premiered:{" "}
          <Typography
            component="span"
            variant="body2"
            sx={{ color: theme.color._100 }}
          >
            {format_string(DETAIL_DATA.start_season.season)}{" "}
            {DETAIL_DATA.start_season.year}
          </Typography>
        </Typography>
        <Typography variant="subtitle2" sx={{ color: theme.color._100 }}>
          Broadcast:{" "}
          <Typography
            component="span"
            variant="body2"
            sx={{ color: theme.color._100 }}
          >
            {format_string(DETAIL_DATA.broadcast.day_of_the_week)}s at{" "}
            {DETAIL_DATA.broadcast.start_time} (JST)
          </Typography>
        </Typography>
        <Typography variant="subtitle2" sx={{ color: theme.color._100 }}>
          Studios:{" "}
          {DETAIL_DATA.studios.map((studio) => (
            <Typography
              key={studio.id}
              component="span"
              variant="body2"
              sx={{ color: theme.color._100 }}
            >
              {studio.name}{" "}
            </Typography>
          ))}
        </Typography>
        <Typography variant="subtitle2" sx={{ color: theme.color._100 }}>
          Source:{" "}
          <Typography
            component="span"
            variant="body2"
            sx={{ color: theme.color._100 }}
          >
            {format_string(DETAIL_DATA.source)}
          </Typography>
        </Typography>
        <Typography variant="subtitle2" sx={{ color: theme.color._100 }}>
          Rating:{" "}
          <Typography
            component="span"
            variant="body2"
            sx={{ color: theme.color._100, textTransform: "uppercase" }}
          >
            {DETAIL_DATA.rating}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};
export default Poster;
