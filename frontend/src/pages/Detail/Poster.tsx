import { Box, Button, Chip, Typography } from "@mui/material";
import { theme } from "../../theme";
import { format_string, format_studios } from "../../helpers/format";
import AddModal from "../Manage/AddModal";
import * as React from "react";

const Poster = ({ data }: { data: any }) => {
  const [isAddedAnime, setAddedAnime] = React.useState<boolean>();
  const [openAddModal, setOpenAddModal] = React.useState<boolean>(false);

  let authToken = localStorage.getItem("Auth Token");

  const getFormData = (formData: any) => {
    if (authToken) {
      const email = localStorage.getItem("email");
      const anime = {
        id: data.mal_id,
        image: data.images.jpg.image_url,
        title: data.title,
        status: data.status,
        type: data.type,
        episodes: data.episodes,
        year: data.year,
        season: data.season,
        progress: formData.progress,
        score: formData.score,
        producers: data.producers,
        plan: formData.status,
      };
      fetch(
        "http://localhost:5001/animoe-7b89b/asia-southeast1/app/api/anime",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            anime: anime,
            email: email,
          }),
        }
      ).then((response) => {
        setAddedAnime(true);
      });
    }
  };

  const handleClickOpenAddModal = () => {
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  };

  React.useEffect(() => {
    if (authToken) {
      const email = localStorage.getItem("email");
      fetch(
        `http://localhost:5001/animoe-7b89b/asia-southeast1/app/api/anime/${data.title}/${email}`,
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
        .then((response) => response.json())
        .then((json) => {
          setAddedAnime(json.isAdded);
        })
        .catch(console.error);
    }
  }, [isAddedAnime]);

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
            src={data.images.jpg.large_image_url}
            width="100%"
            height="100%"
            style={{ borderRadius: 10 }}
          />
        </Box>
        <Box
          sx={{ textAlign: "center" }}
          display="flex"
          justifyContent="center"
          my={2}
        >
          {isAddedAnime ? (
            <Box
              sx={{
                width: "fit-content",
                bgcolor: theme.color._850,
                borderRadius: 10,
                py: 1,
              }}
            >
              <Typography
                sx={{
                  cursor: "default",
                  px: { md: 3, sm: 2, xs: 2 },
                  fontSize: { md: 20, sm: 17 },
                  fontWeight: 600,
                }}
              >
                Added in your list
              </Typography>
            </Box>
          ) : (
            <Button
              onClick={handleClickOpenAddModal}
              sx={{
                px: { md: 5, sm: 2, xs: 3 },
                fontSize: { md: 20, sm: 17 },
                fontWeight: 600,
              }}
            >
              Add to list
            </Button>
          )}

          <AddModal
            open={openAddModal}
            onClose={handleCloseAddModal}
            data={data}
            onSubmit={getFormData}
          />
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
        {data.producers.length !== 0 ? (
          <Typography
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
          </Typography>
        ) : (
          <></>
        )}
        {data.licensors.length !== 0 ? (
          <Typography
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
          </Typography>
        ) : (
          <></>
        )}
        {data.studios.length !== 0 ? (
          <Typography
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
        ) : (
          <></>
        )}
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
        {data.demographics.length !== 0 ? (
          <Typography
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
          </Typography>
        ) : (
          <></>
        )}
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
