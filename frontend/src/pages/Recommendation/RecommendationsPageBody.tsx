import React from "react";
import { Box, Grid, Pagination, PaginationItem } from "@mui/material";
import RecommendationCard from "./RecommendationCard";
import { currentPageData, maxPages } from "./RecommendationsPagePagination";
const RecommendationsPageBody = (props: any) => {
  const [page, setPage] = React.useState(1);
  const { data } = props;
  const currentData = currentPageData(data, 5, page);
  const maxPage = maxPages(data, 5);

  const handlePageChange = (event: any, value: number) => {
    setPage(value);
  };
  return data ? (
    <Box>
      <Grid container columnSpacing={{ md: 15, xs: 3 }} rowSpacing={2}>
        {currentData.map((item: any) => (
          <Grid item xs={12} key={item.mal_id}>
            <RecommendationCard {...item} />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12} zIndex={10} sx={{ my: 4 }}>
        <Box style={{ margin: "10px auto", width: "fit-content" }}>
          <Pagination
            count={maxPage}
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
    </Box>
  ) : (
    <Box></Box>
  );
};
export default RecommendationsPageBody;
