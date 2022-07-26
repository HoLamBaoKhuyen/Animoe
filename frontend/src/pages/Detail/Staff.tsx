import React, { ReactNode } from "react";
import { Box, Grid, Link, Typography } from "@mui/material";
import { theme } from "../../theme";
import { STAFF } from "../../data/detail";

type StaffProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};
const Staff: React.FC<StaffProps> = ({ children }) => {
  return (
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
        {STAFF.map((s) => (
          <Grid item xs={12} sm={4} key={s.id}>
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
                  alt="voice_actor"
                  src={s.img}
                  height="100%"
                  width="auto"
                  style={{ borderRadius: 10 }}
                />
                <Box ml={2}>
                  <Typography variant="body1">{s.name}</Typography>
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
