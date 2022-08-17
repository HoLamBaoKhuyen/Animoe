import * as React from "react";
import { useState } from "react";
import { Box, Button, Typography, Grid, Stack, Link } from "@mui/material";
import { theme } from "../../theme";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { distance_between_two_dates } from "../../helpers/date";
import AddModal from "../Manage/AddModal";
const readLessStyle = {
  color: theme.color._100,
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
};

const RecommendationCard = ({ mal_id, entry, content, date, user }: any) => {
  let authToken = localStorage.getItem("Auth Token");
  const [readMore, setReadMore] = useState<boolean>(false);
  const [openAddModal, setOpenAddModal] = React.useState<number>(-1);
  const handleClickOpenAddModal = (id: any) => {
    setOpenAddModal((showId) => (showId === id ? -1 : id));
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(-1);
  };
  const handleReadMore = () => {
    setReadMore(!readMore);
  };
  const distanceTime = distance_between_two_dates(
    date ? new Date(date) : new Date(),
    new Date()
  );

  return (
    <Box
      sx={{
        minHeight: "300px",
        background: theme.color._850,
        p: 3,
        borderRadius: 4,
      }}
    >
      <Box sx={{ display: "flex" }}>
        {entry.map((item: any) => (
          <Grid item xs={12} md={6} key={item.mal_id} container>
            <Box
              sx={{
                position: "relative",
                display: "flex",
              }}
            >
              <Link href={`/anime/${item.mal_id}`}>
                <img
                  alt={item.mal_id}
                  src={item.images.jpg.image_url}
                  height="100%"
                  width="auto"
                  style={{
                    borderRadius: 12,
                    minWidth: 100,
                    maxWidth: 120,
                    minHeight: 150,
                    maxHeight: 180,
                  }}
                />
              </Link>
              <Link href={`/anime/${item.mal_id}`}>
                <Stack spacing={1} ml={2} mt={2} width={"fit-content"}>
                  <Typography variant="h4" sx={{ fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                </Stack>
              </Link>
              {authToken ? (
                <Button
                  onClick={() => handleClickOpenAddModal(item.mal_id)}
                  variant="outlined"
                  sx={{
                    position: "absolute",
                    top: "135px",
                    left: "135px",
                    minWidth: 0,
                    height: 35,
                    width: 35,
                    borderRadius: 1,
                    opacity: 0.5,
                    color: theme.color._400,
                    border: 0,
                    transition: "all 0.2s",
                    "&:hover": {
                      color: theme.color._400,
                      border: 0,
                      background: 0,
                      opacity: 1,
                    },
                  }}
                >
                  <AddBoxIcon fontSize="large" />
                </Button>
              ) : (
                <></>
              )}
              <AddModal
                open={openAddModal == item.mal_id}
                onClose={handleCloseAddModal}
                data={item}
              />
            </Box>
          </Grid>
        ))}
      </Box>
      {readMore ? (
        <Typography sx={{ color: theme.color._100 }} mt={1}>
          {content}
        </Typography>
      ) : (
        <Typography sx={readLessStyle} mt={1}>
          {content}
        </Typography>
      )}
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
      >
        <Button
          variant="outlined"
          disableRipple
          sx={{
            color: theme.color._100,
            border: 0,
            p: 0,
            fontSize: 17,
            fontWeight: 600,
            borderRadius: 1,
            "&:hover": {
              border: 0,
              color: theme.color._400,
            },
          }}
          onClick={handleReadMore}
        >
          {readMore ? "Read less" : "Read more"}
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          alignItems: "center",
          right: "0px",
        }}
      >
        <Typography
          sx={{ color: theme.color._400, px: "5px", fontSize: "18px" }}
        >
          Anime recommended by
        </Typography>
        <Link href={`#`}>
          <Typography
            variant="subtitle1"
            sx={{ color: theme.color._400, fontWeight: "600" }}
          >
            {user.username}
          </Typography>
        </Link>
        <Typography
          sx={{ color: theme.color._400, px: "5px", fontSize: "18px" }}
        >
          {distanceTime}
        </Typography>
      </Box>
    </Box>
  );
};
export default RecommendationCard;
