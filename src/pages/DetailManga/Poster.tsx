import { Box, Button, Typography } from "@mui/material";
import { theme } from "../../theme";
import { format_studios } from "../../helpers/format";

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
          Volumes:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.color._100 }}
          >
            {data.volumes ? data.volumes : "Unknown"}
          </Typography>
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{ color: theme.color._100, fontWeight: 700 }}
        >
          Chapters:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.color._100 }}
          >
            {data.chapters ? data.chapters : "Unknown"}
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
          Published:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.color._100 }}
          >
            {data.published.string}
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
        {data.serializations.length !== 0 ? <Typography
          variant="subtitle2"
          sx={{ color: theme.color._100, fontWeight: 700 }}
        >
          Serialization:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.color._100 }}
          >
            {format_studios(data.serializations)}
          </Typography>
        </Typography> : <></>}
        {data.authors.length !== 0 ? <Typography
          variant="subtitle2"
          sx={{ color: theme.color._100, fontWeight: 700 }}
        >
          Authors:{" "}
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.color._100 }}
          >
            {format_studios(data.authors)}
          </Typography>
        </Typography> : <></>}
      </Box>
    </Box>
  );
};
export default Poster;
