import React, { ReactNode } from "react";
import { Box, Button, Typography } from "@mui/material";
import { theme } from "../../theme";
import { format_string, format_studios } from "../../helpers/format";

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
            {data.aired.string}
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
            {format_string(data.season)} {data.year}
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
        {data.producers.length !== 0 ? (<Typography
          variant="subtitle2"
          sx={{ color: theme.color._100, fontWeight: 700 }}
        >
          Producers:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.color._100 }}
          >
            {format_studios(data.producers)}
          </Typography>
        </Typography>) : <></>}
        {data.licensors.length !== 0 ? (<Typography
          variant="subtitle2"
          sx={{ color: theme.color._100, fontWeight: 700 }}
        >
          Licensors:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.color._100 }}
          >
            {format_studios(data.licensors)}
          </Typography>
        </Typography>) : <></>}
        {data.studios.length !== 0 ? (<Typography
          variant="subtitle2"
          sx={{ color: theme.color._100, fontWeight: 700 }}
        >
          Studios:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.color._100 }}
          >
            {format_studios(data.studios)}
          </Typography>
        </Typography>
        ) : <></>}
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
        {data.demographics.length !== 0 ? (<Typography
          variant="subtitle2"
          sx={{ color: theme.color._100, fontWeight: 700 }}
        >
          Demographic:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.color._100 }}
          >
            {format_studios(data.demographics)}
          </Typography>
        </Typography>) : <></>}
        <Typography
          variant="subtitle2"
          sx={{ color: theme.color._100, fontWeight: 700 }}
        >
          Rating:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.color._100 }}
          >
            {data.rating}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};
export default Poster;
