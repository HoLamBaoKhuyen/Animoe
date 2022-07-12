import React, { ReactNode } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import { theme } from "../../theme";
import { DETAIL_DATA, STAFF } from "../../data/detail";

type StaffProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};
const Staff: React.FC<StaffProps> = ({ children }) => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }} mb={1}>
        <Typography variant="h3">Staff</Typography>
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
      <Grid
        container
        columnSpacing={{ md: 10, sm: 3 }}
        rowSpacing={{ md: 4, xs: 2 }}
      >
        {STAFF.map((s) => (
          <Grid item xs={12} sm={4} key={s.id}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "100px",
                background: theme.color._800,
                borderRadius: 3,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{ height: "100%", display: "flex", alignItems: "center" }}
              >
                <img
                  alt="voice_actor"
                  src={s.img}
                  height="100%"
                  width="auto"
                  style={{ borderRadius: 10 }}
                />
                <Box ml={2}>
                  <Typography
                    variant="body2"
                    sx={{ textDecorationLine: "underline" }}
                  >
                    {s.name}
                  </Typography>
                  <Typography variant="body2" sx={{ fontSize: 13 }}>
                    {s.role}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default Staff;
