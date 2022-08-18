import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  Link,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
} from "@mui/material";
import { theme } from "../../theme";
import AddBoxIcon from "@mui/icons-material/AddBox";
import "../../components/css/search_result.css";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { Skeleton } from "@mui/lab";
import { format_number, format_studios } from "../../helpers/format";
import * as React from "react";
import AddModal from "../Manage/AddModal";

const createParamsObject = (searchParams: any, page: any) => {
  return {
    params: searchParams,
    limit: 5,
    page: page,
  };
};
const getCurrentData = (searchData: any, searchParams: any, page: any) => {
  const { data } = searchData(
    createParamsObject(searchParams.params.toString(), page)
  );
  return data ? data : [];
};

const SearchResults = ({ searchParams, searchData }: any) => {
  let authToken = localStorage.getItem("Auth Token");
  const [page, setPage] = useState(1);
  const currentData = searchParams.params.get("q")
    ? getCurrentData(searchData, searchParams, page)
    : [];
  const [openAddModal, setOpenAddModal] = React.useState<number>(-1);
  const handleClickOpenAddModal = (id: any) => {
    setOpenAddModal((showId) => (showId === id ? -1 : id));
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(-1);
  };
  const handlePageChange = (event: any, value: number) => {
    setPage(value);
  };

  return currentData ? (
    <Box>
      {searchParams.params.get("q") !== null ? (
        <Grid container rowSpacing={2}>
          <Grid item xs={12} zIndex={10}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}
            >
              <Typography variant="h4" sx={{ fontWeight: 700 }}>
                Search Results for "{searchParams.params.get("q")}"
              </Typography>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            container
            columnSpacing={{ md: 15, sm: 3 }}
            rowSpacing={{ md: 2, xs: 2 }}
          >
            {currentData.map((item: any, index: any) => (
              <Grid item xs={12} key={item.mal_id}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    background: theme.color._850,
                    borderRadius: 3,
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      ml: "10px",
                      my: "auto",
                    }}
                  >
                    <Link href={`/anime/${item.mal_id}`}>
                      <Stack spacing={0.5} ml={1} my={1} width={"fit-content"}>
                        <img
                          alt={item.mal_id}
                          src={item.images.jpg.image_url}
                          height="100%"
                          width="auto"
                          style={{
                            borderRadius: 12,
                            width: 100,
                          }}
                        />
                      </Stack>
                    </Link>
                    <Link href={`/anime/${item.mal_id}`}>
                      <Stack spacing={0.5} ml={2} my={1} width={"fit-content"}>
                        <Typography variant="h4" sx={{ fontWeight: 600 }}>
                          {item.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 600, opacity: 0.7 }}
                          color={(theme) => theme.color._100}
                        >
                          {item.status}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 600, opacity: 0.7 }}
                          color={(theme) => theme.color._100}
                        >
                          {item.type} ({item.episodes} eps)
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 600, opacity: 0.7 }}
                          color={(theme) => theme.color._100}
                        >
                          {item.studios
                            ? format_studios(item.studios)
                            : item.authors.map((author: any, index: any) =>
                                index !== item.authors.length - 1
                                  ? author.name + ", "
                                  : author.name + ""
                              )}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{ fontWeight: 600, opacity: 0.7 }}
                          color={(theme) => theme.color._100}
                        >
                          {format_number(item.members)} members
                        </Typography>
                      </Stack>
                    </Link>
                    {authToken ? (
                      <Button
                        onClick={() => handleClickOpenAddModal(item.mal_id)}
                        variant="outlined"
                        sx={{
                          minWidth: 0,
                          height: 35,
                          width: 35,
                          opacity: 0.5,
                          borderRadius: 1,
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
                        style={{ position: "absolute", top: 5, right: 10 }}
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
                    {item.score ? (
                      <Stack
                        spacing={{ md: 1, xs: 0 }}
                        direction="row"
                        alignItems="center"
                        style={{ position: "absolute", bottom: 5, right: 10 }}
                      >
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: 600, fontSize: 30 }}
                          color={(theme) => theme.color._100}
                        >
                          {item.score.toFixed(2)}
                        </Typography>
                        <StarRateRoundedIcon
                          fontSize="large"
                          sx={{ color: theme.color.yellow }}
                        />
                      </Stack>
                    ) : (
                      <></>
                    )}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} zIndex={10} mb={2}>
            <Box style={{ margin: "10px auto", width: "fit-content" }}>
              <Pagination
                count={10}
                shape="rounded"
                variant="outlined"
                color="primary"
                page={page}
                onChange={handlePageChange}
                renderItem={(item) => (
                  <PaginationItem
                    {...item}
                    sx={{
                      "&.Mui-selected": {
                        backgroundColor: "#9BA3EB",
                        color: "white",
                        borderRadius: 0,
                      },
                    }}
                  />
                )}
              />
            </Box>
          </Grid>
        </Grid>
      ) : (
        <></>
      )}
    </Box>
  ) : (
    <Box>
      <Grid container rowSpacing={2}>
        <Grid item xs={12} zIndex={10}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Search Results for "{searchParams.params.get("q")}"
            </Typography>
          </Box>
        </Grid>
        <Stack spacing={2}>
          <Skeleton variant="rectangular" height={200} />
          <Skeleton variant="rectangular" height={200} />
          <Skeleton variant="rectangular" height={200} />
          <Skeleton variant="rectangular" height={200} />
          <Skeleton variant="rectangular" height={200} />
        </Stack>
      </Grid>
    </Box>
  );
};
export default SearchResults;
