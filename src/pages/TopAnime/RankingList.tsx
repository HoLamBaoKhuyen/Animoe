import {
  Button,
  Card,
  CardContent,
  Grid,
  IconButton,
  Link,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import {
  useGetFilterRankingQuery,
  useGetTypeRankingQuery,
} from "../../redux/slices/animeSlice";
import AddBoxIcon from "@mui/icons-material/AddBox";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { theme } from "../../theme";

const List = ({ data }: { data: Array<any> }) => {
  return (
    <Stack spacing={2}>
      {data.map((item: any, index: number) => {
        return (
          <Card key={item.mal_id}>
            <CardContent style={{ display: "flex", alignItems: "center" }}>
              <Grid
                container
                spacing={2}
                alignItems="center"
                textAlign="center"
                position="relative"
              >
                <Grid item xs={12} sm={2} md={1}>
                  {index < 3 ? (
                    <i
                      className="fa-solid fa-crown"
                      style={{
                        color:
                          index === 0
                            ? theme.color.gold
                            : index === 1
                            ? theme.palette.grey[500]
                            : theme.color.bronze,
                        fontSize: 65,
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Poppins",
                          color: "white",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%,0)",
                          fontSize: 25,
                          fontWeight: 600,
                        }}
                      >
                        {index + 1}
                      </span>
                    </i>
                  ) : (
                    <i
                      className="fa-solid fa-medal"
                      style={{
                        color: theme.color._600,
                        fontSize: 70,
                        position: "relative",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Poppins",
                          color: "white",
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%,-20%)",
                          fontSize: 25,
                          fontWeight: 600,
                          background: theme.color._600,
                          padding: 6,
                          borderRadius: "50%",
                        }}
                      >
                        {index + 1}
                      </span>
                    </i>
                  )}
                </Grid>
                <Grid item xs={12} sm={2} md={1}>
                  <Link href={`/anime/${item.mal_id}`}>
                    <img
                      alt="Poster"
                      src={item.images.jpg.image_url}
                      width="100%"
                      style={{ borderRadius: 10 }}
                    />
                  </Link>
                </Grid>
                <Grid item xs={12} sm={7} md={9} textAlign="left">
                  <Link href={`/anime/${item.mal_id}`}>
                    <Stack spacing={1} width={"fit-content"}>
                      <Typography variant="h4" sx={{ fontWeight: 600 }}>
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, opacity: 0.7 }}
                        color={(theme) => theme.color._100}
                      >
                        {item.episodes}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, opacity: 0.7 }}
                        color={(theme) => theme.color._100}
                      >
                        {item.duration}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ fontWeight: 600, opacity: 0.7 }}
                        color={(theme) => theme.color._100}
                      >
                        {item.status}
                      </Typography>
                    </Stack>
                  </Link>
                </Grid>
                <Button
                  variant="outlined"
                  sx={{
                    color: theme.color._400,
                    border: 0,
                    minWidth: 0,
                    padding: 0,
                    borderRadius: 1,
                    opacity: 0.5,
                    transition: "all 0.2s",
                    "&:hover": {
                      color: theme.color._400,
                      border: 0,
                      background: 0,
                      opacity: 1,
                    },
                  }}
                  style={{ position: "absolute", top: 5, right: -10 }}
                >
                  <AddBoxIcon fontSize="large" />
                </Button>
                <Stack
                  spacing={{ md: 1, xs: 0 }}
                  direction="row"
                  alignItems="center"
                  style={{ position: "absolute", bottom: -10, right: 0 }}
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: 600, fontSize: 25 }}
                    color={(theme) => theme.color._100}
                  >
                    {item.score}
                  </Typography>
                  <StarRateRoundedIcon
                    fontSize="large"
                    sx={{ color: theme.color.yellow }}
                  />
                </Stack>
              </Grid>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
};

export const TypeRankingList = ({ type }: { type: string }) => {
  const { data } = useGetTypeRankingQuery(type);
  console.log(data);
  return data ? (
    <List data={data} />
  ) : (
    <Stack spacing={2}>
      <Skeleton variant="rectangular" height={200} />
      <Skeleton variant="rectangular" height={200} />
      <Skeleton variant="rectangular" height={200} />
      <Skeleton variant="rectangular" height={200} />
      <Skeleton variant="rectangular" height={200} />
    </Stack>
  );
};

export const FilterRankingList = ({ filter }: { filter: string }) => {
  const { data } = useGetFilterRankingQuery(filter);
  console.log(data);
  return data ? (
    <List data={data} />
  ) : (
    <Stack spacing={2}>
      <Skeleton variant="rectangular" height={200} />
      <Skeleton variant="rectangular" height={200} />
      <Skeleton variant="rectangular" height={200} />
      <Skeleton variant="rectangular" height={200} />
      <Skeleton variant="rectangular" height={200} />
    </Stack>
  );
};
