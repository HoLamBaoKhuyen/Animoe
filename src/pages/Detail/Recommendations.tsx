import React, { ReactNode } from "react";
import { Box, Button, Grid, Link, Skeleton, Typography } from "@mui/material";
import { theme } from "../../theme";
import { useGetAnimeRecommendationsQuery } from "redux/slices/animeSlice";
import { useParams } from "react-router";
import AddBoxIcon from '@mui/icons-material/AddBox';

type RecommendationsProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};

const Recommendations: React.FC<RecommendationsProps> = ({ children }) => {
  const { id } = useParams();
  const { data } = useGetAnimeRecommendationsQuery(id);

  return data ? (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h4" sx={{ fontWeight: 700 }}>
          Recommendations
        </Typography>
      </Box>
      <Grid container rowSpacing={3}>
        {data.map((item: any, index: number) => (
          <Grid item xs={12} sm={6} md={4}>
            <Box
              textAlign="center"
              key={index}
              width={{ md: "15vw", xs: "16vw" }}
              sx={{ position: 'relative' }}
            >
              <Button variant="outlined" sx={{ zIndex: 10, position: 'absolute', top: 5, right: 5, border: 0, padding: 0.5, minWidth: 0, borderRadius: 2, background: theme.color._850, "&:hover": { border: 0, background: theme.color._850, color: theme.color._400 } }}>
                <AddBoxIcon />
              </Button>
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
                <Box sx={{
                  // position: 'relative',
                  "& img": { transition: 'all 0.1s', },
                  "&:hover": {
                    "& img": {
                      boxShadow: `0 4px 10px 10px ${theme.color._950}`
                    }
                  }
                }
                } >
                  <img
                    alt="recommend_anime"
                    src={item.entry.images.webp.image_url}
                    width="100%"
                    height="320px"
                    style={{ borderRadius: 10, objectFit: 'cover' }}
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
          </Grid >
        ))}
      </Grid >
    </Box >
  ) : (
    <Skeleton variant="rectangular" height="100%" />
  );
};
export default Recommendations;
