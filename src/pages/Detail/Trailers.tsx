import React, { ReactNode } from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import { TRAILERS } from "../../data/detail";
import ReactPlayer from "react-player";

type TrailersProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};
const Trailers: React.FC<TrailersProps> = ({ children }) => {
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
        {TRAILERS.map((trailer) => (
          <Grid item xs={12} sm={4} key={trailer.id}>
            <Box
              sx={{
                position: "relative",
                maxWidth: { md: "400px", xs: "300px" },
                height: { md: "220px", sm: "150px", xs: "180px" },
                borderRadius: 3,
                overflow: "hidden",
                // "&:hover": {
                //   "& .bg-hover": { display: "block" },
                // },
              }}
            >
              <ReactPlayer
                url={trailer.src}
                width="100%"
                height="100%"
                playing={false}
                controls={true}
              />
              {/* <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                  color: theme.palette.common.white,
                  display: "flex",
                  alignItems: "center",
                  border: `2px solid ${theme.palette.common.white}`,
                  width: "fit-content",
                  px: 3,
                  py: 1,
                  borderRadius: 2,
                  background: `rgba(0,0,0,0.2)`,
                  zIndex: 10,
                }}
              >
                <PlayCircleOutlineIcon />
                <Typography variant="subtitle2">Play</Typography>
              </Box>
              <Typography
                variant="h4"
                sx={{ position: "absolute", bottom: 10, left: 10, zIndex: 10 }}
              >
                PV1
              </Typography>
              <Box
                className="bg-hover"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  background: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5))`,
                  width: "100%",
                  minHeight: "220px",
                  display: "none",
                }}
              ></Box> */}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Trailers;
