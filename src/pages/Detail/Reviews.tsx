import React, { ReactNode, useEffect, useState } from "react";
import { useParams } from "react-router";
import { Box, Grid, Pagination, Skeleton, Typography } from "@mui/material";
import axios from "axios";
import usePagination from "./Pagination";
import ReviewCard from "./ReviewCard";
import { BASE_API, REVIEWS_PER_PAGE } from "./const ";
import { theme } from "theme";

type ReviewsProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};

const Reviews: React.FC<ReviewsProps> = ({ children }) => {
  const { id } = useParams();
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      const result = await axios(
        `${BASE_API}/anime/${id}/reviews`,
      )
      setData(result.data.data)
    }
    getData()
  }, []);

  let [page, setPage] = useState(1);
  const PER_PAGE = REVIEWS_PER_PAGE;

  const count = Math.ceil(data.length / PER_PAGE);
  const dataPagi = usePagination(data, PER_PAGE);

  const handleChange = (e: any, p: number) => {
    setPage(p);
    dataPagi.jump(p);
  };

  return data ? (
    <Box>
      <Grid container columnSpacing={{ md: 15, xs: 3 }} rowSpacing={2}>
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Reviews
            </Typography>
          </Box>
        </Grid>
        {dataPagi.currentData().map((review: any, index: number) => (
          <Grid item xs={12} sm={12} key={index}>
            <ReviewCard {...review} />
          </Grid>
        ))}
        <Box sx={{ margin: 'auto', marginTop: 3 }}>
          <Pagination
            count={count}
            page={page}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
            sx={{
              "& .Mui-selected": {
                background: theme.color._600
              }
            }}
          /></Box>
      </Grid>
    </Box>
  ) : (
    <Skeleton variant="rectangular" height="100%" />
  );
};
export default Reviews;
