import { Box, Grid, Link, Typography } from "@mui/material";
import ReactPlayer from "react-player";

const Trailers = ({ trailer }: { trailer: any }) => {
  console.log(trailer);

  return (
    <Box>
      <Grid
        container
        columnSpacing={{ md: 10, sm: 2, xs: 3 }}
        rowSpacing={{ md: 0, xs: 2 }}
      >
        <Grid item xs={12}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Trailers
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
        <Box
          sx={{
            margin: 'auto',
            width: { md: "500px", sm: "400px", xs: '300px' },
            height: { md: "320px", sm: "250px", xs: "180px" },
            borderRadius: 3,
            overflow: "hidden",
          }}
        >
          <ReactPlayer
            url={trailer.url}
            width="100%"
            height="100%"
            playing={false}
            controls={true}
            poster={trailer.images.medium_image_url}
          />
        </Box>
      </Grid>
    </Box>
  );
};
export default Trailers;
