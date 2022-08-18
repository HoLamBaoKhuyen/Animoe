import { Box, Chip, Typography } from "@mui/material";
import { theme } from "../../theme";

const Content = ({ data }: { data: any }) => {
  return (
    <Box>
      <Box mt={3}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
          }}
        >
          Synopsis
        </Typography>
        <Typography
          variant="body1"
          sx={{
            whiteSpace: "pre-line",
            color: theme.color._100,
            textAlign: "justify",
          }}
        >
          {`${data.synopsis}`}
        </Typography>
      </Box>
      {data.background ? (<Box mt={3}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
          }}
        >
          Background
        </Typography>
        <Typography
          variant="body1"
          sx={{
            whiteSpace: "pre-line",
            color: theme.color._100,
            textAlign: "justify",
          }}
        >
          {`${data.background}`}
        </Typography>
      </Box>) : <></>}
      <Box mt={3}>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 700,
          }}
        >
          Genres
        </Typography>
        <Box>
          {data.genres.map((genre: any, key: number) => (
            <Chip key={key} label={genre.name} sx={{ marginRight: 1 }} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default Content;
