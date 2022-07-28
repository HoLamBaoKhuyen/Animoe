import React from "react";
import {
    Box,
    Grid,
    Pagination,
    PaginationItem,

} from "@mui/material";
import { useGetRecentAnimeRecommendationsQuery } from "../../redux/slices/animeSlice";
import RecommendationCard from "./RecommendationCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import usePagination from "./RecommendationsPagePagination"
const RecommendationsPageBody = () => {
  const [page, setPage] = React.useState(1);
  const {data} = useGetRecentAnimeRecommendationsQuery(0);
  const dataPagi = usePagination(data, 4);
  const handlePageChange = (
    event: any,
    value: number
  ) => {
    setPage(value);
  };
  console.log(data);
  return data ?  (
    <Box>
        <Grid container columnSpacing={{ md: 15, xs: 3 }} rowSpacing={2}>
          {dataPagi.currentData(page).map((item: any) => (
            <Grid item xs={12} key={item.mal_id}>
              <RecommendationCard {...item} />
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
    </Box>
  ) : (
    <Box>
    </Box>
  );
};
export default RecommendationsPageBody;
