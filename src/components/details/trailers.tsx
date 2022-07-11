import React, { ReactNode } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { theme } from "../../theme";
import { DETAIL_DATA } from "../../data/detail";
import { format_string } from "../../helpers/format";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

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
      <Grid container spacing={10}>
        <Grid item xs={4}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              minHeight: "220px",
              background: `url(${DETAIL_DATA.main_picture.medium})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: 3,
              cursor: "pointer",
              transition: "all 0.5s",
              "&:hover": {
                "& .bg-hover": { display: "block" },
              },
            }}
          >
            <Box
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
            ></Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              minHeight: "220px",
              background: `url(${DETAIL_DATA.main_picture.medium})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: 3,
              cursor: "pointer",
              transition: "all 0.5s",
              "&:hover": {
                "& .bg-hover": { display: "block" },
              },
            }}
          >
            <Box
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
            ></Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box
            sx={{
              position: "relative",
              width: "100%",
              minHeight: "220px",
              background: `url(${DETAIL_DATA.main_picture.medium})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              borderRadius: 3,
              cursor: "pointer",
              transition: "all 0.5s",
              "&:hover": {
                "& .bg-hover": { display: "block" },
              },
            }}
          >
            <Box
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
            ></Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default Trailers;
