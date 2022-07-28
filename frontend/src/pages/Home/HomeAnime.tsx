import * as React from "react";
import {
  alpha,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Link,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { theme } from "../../theme";
import { format_episode, format_studios } from "../../helpers/format";
import { useEffect, useState } from "react";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

const HomeAnime = ({ anime }: { anime: any }) => {
  const [numOfCurrentEpisodes, setNumOfCurrentEpisodes] = useState<any>();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (anime.status === "Currently Airing") {
        fetch(`https://api.jikan.moe/v4/anime/${anime.mal_id}/episodes`)
          .then((response) => response.json())
          .then((json) => {
            if (json.pagination.has_next_page) {
              setNumOfCurrentEpisodes(
                json.data.length * json.pagination.last_visible_page + 5
              );
            } else {
              setNumOfCurrentEpisodes(json.data.length);
            }
          })
          .catch(console.error);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, [numOfCurrentEpisodes]);

  return (
    <Grid
      item
      flexDirection="column"
      textAlign="center"
      key={anime.mal_id}
      width={{ md: "15vw", xs: "16vw" }}
      onScroll={handlePopoverClose}
      xs={2}
      sm={3}
      md={2}
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
          sx={{
            backgroundImage: `url(${anime.images.jpg.large_image_url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: 4,
            height: "40vh",
            backgroundClip: "content-box",
          }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            px={1}
            pt={1}
            gap={1}
          >
            {numOfCurrentEpisodes ? (
              <Stack
                spacing={{ md: 0.5, xs: 0 }}
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{
                  bgcolor: alpha(theme.color._850, 0.9),
                  borderRadius: 3,
                  px: 1,
                  py: 0.5,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    fontSize: { md: 16, sm: 14, xs: 12 },
                  }}
                >
                  Ep {numOfCurrentEpisodes}
                </Typography>
              </Stack>
            ) : (
              <></>
            )}
            {anime.episodes && !numOfCurrentEpisodes ? (
              <Stack
                spacing={{ md: 0.5, xs: 0 }}
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{
                  bgcolor: alpha(theme.color._850, 0.9),
                  borderRadius: 3,
                  px: 1,
                  py: 0.5,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    fontSize: { md: 16, sm: 14, xs: 12 },
                  }}
                >
                  Ep {anime.episodes}
                </Typography>
              </Stack>
            ) : (
              <></>
            )}
            {anime.score ? (
              <Stack
                spacing={{ md: 0.5, xs: 0 }}
                direction="row"
                alignItems="center"
                justifyContent="center"
                sx={{
                  bgcolor: alpha(theme.color._850, 0.9),
                  borderRadius: 3,
                  px: 1,
                  py: 0.5,
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    fontSize: { md: 16, sm: 14, xs: 12 },
                  }}
                >
                  {anime.score}
                </Typography>
                <StarRateRoundedIcon
                  fontSize="small"
                  sx={{
                    color: theme.color.yellow,
                  }}
                />
              </Stack>
            ) : (
              <></>
            )}
          </Box>
        </Box>

        <Typography
          className="title"
          variant="subtitle1"
          sx={{
            color: theme.color._100,
            fontSize: { md: 16, sm: 14, xs: 12 },
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
          <CardContent sx={{ minWidth: { md: 250, sm: 100 } }}>
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
            </Box>
            <Typography
              sx={{
                fontSize: { md: 16, sm: 14 },
                fontWeight: 700,
                color: theme.color._100,
              }}
            >
              {anime.type}{" "}
              {format_episode(
                anime.episodes,
                numOfCurrentEpisodes,
                anime.status
              )}
            </Typography>
            <Typography
              mt={0.25}
              sx={{
                fontSize: { md: 16, sm: 14 },
                fontWeight: 600,
                color: theme.color._400,
              }}
            >
              {format_studios(anime.studios)}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex">
              {anime.genres.slice(0, 2).map((genre: any) => (
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
