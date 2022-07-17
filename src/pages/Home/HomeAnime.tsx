import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Link,
  Popover,
  Typography,
} from "@mui/material";
import { theme } from "../../theme";
import { useGetAnimeEpisodesQuery } from "../../redux/slices/animeSlice";
import { format_episode, format_studios } from "../../helpers/format";

const HomeAnime = ({ anime }: { anime: any }) => {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const { data } = useGetAnimeEpisodesQuery(anime.mal_id);

  return (
    <Grid
      item
      flexDirection="column"
      textAlign="center"
      key={anime.mal_id}
      width={{ md: "15vw", xs: "16vw" }}
      onScroll={handlePopoverClose}
    >
      <Link
        href={`/anime/${anime.mal_id}`}
        sx={{
          ".title": {
            transition: "all 0.2s",
          },
          "&:hover": {
            ".title": {
              color: theme.color._400,
            },
          },
        }}
      >
        <Box
          aria-owns={open ? "mouse-over-popover" : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
          <img
            alt={anime.title}
            src={anime.images.jpg.large_image_url}
            height="auto"
            width="100%"
            style={{
              borderRadius: 12,
              objectFit: "cover",
            }}
          />
        </Box>

        <Typography
          className="title"
          variant="subtitle1"
          sx={{
            color: theme.color._100,
            fontSize: { md: 16, sm: 12, xs: 8 },
          }}
        >
          {anime.title}
        </Typography>
      </Link>

      <Popover
        disableScrollLock
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Card>
          <CardContent sx={{ minWidth: { md: 320, sm: 120 } }}>
            <Box display="flex" justifyContent="space-between">
              <Typography
                mr={2}
                sx={{
                  fontSize: { md: 20, sm: 16 },
                  fontWeight: 700,
                  color: theme.color.green_400,
                }}
              >
                {anime.status}
              </Typography>

              <Typography
                sx={{
                  fontSize: { md: 20, sm: 16 },
                  fontWeight: 700,
                }}
              >
                {anime.score}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: { md: 16, sm: 12 },
                fontWeight: 700,
                color: theme.color._100,
              }}
            >
              {anime.type}{" "}
              {data
                ? format_episode(anime.episodes, data.length, anime.status)
                : null}
            </Typography>
            <Typography
              mt={0.25}
              sx={{
                fontSize: { md: 16, sm: 12 },
                fontWeight: 600,
                color: theme.color._400,
              }}
            >
              {format_studios(anime.studios)}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex">
              {anime.genres.slice(0, 3).map((genre: any) => (
                <Button
                  variant="outlined"
                  disabled
                  sx={{
                    width: "fit-content",
                    p: 0,
                    border: 0,
                    ml: 1,
                    mr: 1,
                    mb: 2,
                  }}
                  key={genre.mal_id}
                >
                  <Chip key={genre.id} label={genre.name} />
                </Button>
              ))}
            </Box>
          </CardActions>
        </Card>
      </Popover>
    </Grid>
  );
};

export default HomeAnime;
