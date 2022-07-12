import React, { ReactNode } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { theme } from "../../theme";
import { DETAIL_DATA, TRAILERS } from "../../data/detail";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
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
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mb={1}>
        <Typography variant="h3">Trailers</Typography>
        <Button
          variant="outlined"
          sx={{
            border: 0,
            color: theme.palette.common.white,
            padding: `0 10px`,
            fontWeight: 400,
            "&:hover": { border: 0 },
          }}
        >
          View more
        </Button>
      </Box>
      <Grid container spacing={{ md: 10, sm: 2, xs: 3 }}>
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
