import React, { ReactNode } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
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
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useGetAnimeSearchQuery } from "../../redux/slices/animeSlice";
import { Skeleton } from "@mui/lab";
import { format_number } from "../../helpers/format";
const SearchResults = ({ searchQuery, searchType }: any) => {
  const [page, setPage] = React.useState(1);
  const { data } = useGetAnimeSearchQuery({strQuery: searchQuery.get("q"),limit: 5, page: page});
  const handlePageChange = (
    event: any,
    value: number
  ) => {
    setPage(value);
  };


  return data ? (
    <Box>
      <Grid container rowSpacing={2}>
        <Grid item xs={12} zIndex={10}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Search Result for "{searchQuery.get("q")}"
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
          {data.map((item: any) => (
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
                  <Link href={`/anime/${item.mal_id}`} >
                    <Stack spacing={0.5} ml={1} my={1} width={"fit-content"}>
                      <img
                        alt={item.mal_id}
                        src={item.images.jpg.image_url}
                        height="100%"
                        width="auto"
                        style={{
                          borderRadius: 12,
                          width: 80,
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
                        {format_number(item.members)} members
                      </Typography>
                    </Stack>
                  </Link>
                  <Button
                    variant="outlined"
                    sx={{
                      position: "absolute",
                      top: "5px",
                      right: "10px",
                      minWidth: 0,
                      height: 35,
                      width: 35,
                      borderRadius: 1,
                      color: theme.color._400,
                      border: 0,
                      transition: "all 0.2s",
                      "&:hover": {
                        border: 0,
                        opacity: 0.7,
                      },
                    }}
                  >
                    <AddBoxIcon fontSize="large" />
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} zIndex={10}>
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
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
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
    </Box>
  ) : (
    <Box>
      <Grid container rowSpacing={2}>
        <Grid item xs={12} zIndex={10}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 3 }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Search Results for "{searchQuery}"
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