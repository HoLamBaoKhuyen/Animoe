import { Box, Grid, Link, Skeleton, Typography } from "@mui/material";
import { theme } from "../../theme";
import { STAFF } from "../../data/detail";
import { useGetAnimeStaffQuery } from "redux/slices/animeSlice";
import { useParams } from "react-router";
import { format_string_array, format_studios } from "helpers/format";


const Staff = () => {
  const { id } = useParams();
  const { data } = useGetAnimeStaffQuery(id);


  return data ? (
    <Box>
      <Grid
        container
        columnSpacing={{ md: 10, sm: 3 }}
        rowSpacing={{ md: 0, xs: 2 }}
      >
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Staff
            </Typography>
            <Box>
              <Link
                href="#"
                sx={{
                  fontSize: { md: 20, sm: 18, xs: 15 },
                }}
              >
                View more
              </Link>
            </Box>
          </Box>
        </Grid>
        {data.map((staff: any, index: number) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100px",
                background: theme.color._850,
                borderRadius: 3,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{ height: "100%", display: "flex", alignItems: "center" }}
              >
                <img
                  alt="staff"
                  src={staff.person.images.jpg.image_url}
                  height="100%"
                  width="70px"
                  object-fit={"cover"}
                  style={{ borderRadius: 10, objectFit: 'cover' }}
                />
                <Box ml={2}>
                  <Typography variant="body1">{staff.person.name}</Typography>
                  <Typography variant="body2" sx={{ fontSize: 13 }}>
                    {format_string_array(staff.positions)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  ) : (
    <Skeleton variant="rectangular" height="100%" />
  );
};
export default Staff;
