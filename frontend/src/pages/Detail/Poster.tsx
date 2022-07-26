import React, { ReactNode } from "react";
import { Box, Button, Typography } from "@mui/material";
import { theme } from "../../theme";

type PosterProps = {
  children?: ReactNode;
  title: string;
  type: string;
  englishTitle: string;
  image: string;
  episodes: number;
  status: string;
};

const Poster = ({ data }: { data: any }) => {
  return (
    <Box>
      <Box>
        <Box
          sx={{
            overflow: "hidden",
            px: {
              sm: 0,
              xs: 10,
            },
          }}
        >
          <img
            alt="poster"
            src={data.images.jpg.image_url}
            width="100%"
            height="100%"
            style={{ borderRadius: 10 }}
          />
        </Box>
        <Box sx={{ textAlign: "center" }} my={2}>
          <Button
            sx={{
              px: { md: 5, sm: 2, xs: 3 },
              fontSize: { md: 20, sm: 17 },
              fontWeight: 600,
            }}
          >
            Add to list
          </Button>
        </Box>
      </Box>
      <Box>
        <Typography variant="subtitle1" mt={1} fontWeight={700}>
          Information
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: theme.color._100, fontWeight: 700 }}
        >
          Type:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.color._100 }}
          >
            {data.type}
          </Typography>
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: theme.color._100, fontWeight: 700 }}
        >
          Episodes:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.color._100 }}
          >
            {data.episodes}
          </Typography>
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: theme.color._100, fontWeight: 700 }}
        >
          Status:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.color._100 }}
          >
            {data.status}
          </Typography>
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: theme.color._100, fontWeight: 700 }}
        >
          Aired:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.color._100 }}
          >
            {data.aired.from}
          </Typography>
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: theme.color._100, fontWeight: 700 }}
        >
          Premiered:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.color._100 }}
          >
            {data.season} {data.year}
          </Typography>
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: theme.color._100, fontWeight: 700 }}
        >
          Broadcast:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.color._100 }}
          >
            {data.broadcast.day} at {data.broadcast.time} (JST)
          </Typography>
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: theme.color._100, fontWeight: 700 }}
        >
          Studios:{" "}
          {data.studios.map((studio: any) => (
            <Typography
              key={studio.mal_id}
              component="span"
              variant="body1"
              sx={{ color: theme.color._100 }}
            >
              {studio.name}{" "}
            </Typography>
          ))}
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: theme.color._100, fontWeight: 700 }}
        >
          Source:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.color._100 }}
          >
            {data.source}
          </Typography>
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: theme.color._100, fontWeight: 700 }}
        >
          Rating:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.color._100, textTransform: "uppercase" }}
          >
            {data.rating}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};
export default Poster;
