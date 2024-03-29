import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {
  Box,
  Button,
  Grid,
  Link,
  Pagination,
  Skeleton,
  Typography,
} from "@mui/material";
import axios from "axios";
import AddBoxIcon from "@mui/icons-material/AddBox";
import usePagination from "./Pagination";
import { BASE_API, RECOMMENDATIONS_PER_PAGE } from "./const ";
import { theme } from "../../theme";
import * as React from "react";
import AddModal from "../Manage/AddModal";

const Recommendations = () => {
  let authToken = localStorage.getItem("Auth Token");
  const { id } = useParams();
  const [data, setData] = useState<any>([]);
  const [openAddModal, setOpenAddModal] = React.useState<number>(-1);
  const handleClickOpenAddModal = (id: any) => {
    setOpenAddModal((showId) => (showId === id ? -1 : id));
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(-1);
  };

  useEffect(() => {
    const getData = async () => {
      const result = await axios(`${BASE_API}/anime/${id}/recommendations`);
      setData(result.data.data);
    };
    getData();
  }, [id]);

  let [page, setPage] = useState(1);
  const PER_PAGE = RECOMMENDATIONS_PER_PAGE;

  const count = Math.ceil(data.length / PER_PAGE);
  const dataPagi = usePagination(data, PER_PAGE);

  const handleChange = (e: any, p: number) => {
    setPage(p);
    dataPagi.jump(p);
  };
  return data ? (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Recommendations
        </Typography>
      </Box>
      <Grid container rowSpacing={3} columnSpacing={{ md: 10, xs: 5 }} mt={1}>
        {dataPagi.currentData().map((item: any, index: number) => (
          <Grid item xs={12} sm={6} md={4}>
            <Box
              textAlign="center"
              key={index}
              width={{ md: "250px", xs: "200px" }}
              sx={{ position: "relative" }}
            >
              {authToken ? (
                <Button
                  onClick={() => handleClickOpenAddModal(item.entry.mal_id)}
                  variant="outlined"
                  sx={{
                    zIndex: 10,
                    position: "absolute",
                    top: 5,
                    right: 5,
                    border: 0,
                    padding: 0.5,
                    minWidth: 0,
                    borderRadius: 2,
                    opacity: 0.9,
                    color: theme.color._400,
                    bgcolor: theme.color._850,
                    transition: "all 0.2s",
                    "&:hover": {
                      color: theme.color._400,
                      bgcolor: theme.color._850,
                      border: 0,
                      opacity: 1,
                    },
                  }}
                >
                  <AddBoxIcon />
                </Button>
              ) : (
                <></>
              )}
              <AddModal
                open={openAddModal == item.entry.mal_id}
                onClose={handleCloseAddModal}
                data={item.entry}
              />
              <Link
                href={`/anime/${item.entry.mal_id}`}
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
                  sx={{
                    height: { md: "350px", sx: "300px", xs: "300px" },
                    "& img": { transition: "all 0.1s" },
                    "&:hover": {
                      "& img": {
                        boxShadow: `0 4px 10px 10px ${theme.color._950}`,
                      },
                    },
                  }}
                >
                  <img
                    alt="recommend_anime"
                    src={item.entry.images.webp.image_url}
                    width="100%"
                    height="100%"
                    style={{ borderRadius: 10, objectFit: "cover" }}
                  />
                </Box>
                <Typography
                  className="title"
                  variant="subtitle1"
                  sx={{
                    color: theme.color._100,
                    fontSize: { md: 18, sm: 15, xs: 12 },
                  }}
                >
                  {item.entry.title}
                </Typography>
              </Link>
            </Box>
          </Grid>
        ))}
        {dataPagi.currentData().length !== 0 ? (
          <Grid item xs={12}>
            <Box sx={{ margin: "auto", marginTop: 3, width: "fit-content" }}>
              <Pagination
                count={count}
                page={page}
                variant="outlined"
                shape="rounded"
                onChange={handleChange}
                sx={{
                  "& .Mui-selected": {
                    background: `${theme.color._600} !important`,
                  },
                }}
              />
            </Box>
          </Grid>
        ) : (
          <Grid item xs={12}>
            {" "}
            <Typography variant="h5">No data found.</Typography>
          </Grid>
        )}
      </Grid>
    </Box>
  ) : (
    <Skeleton variant="rectangular" height="100%" />
  );
};

export default Recommendations;
