import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { theme } from "../../theme";

type LayoutProps = {
  children: ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        background: theme.color._900,
        minHeight: "100vh",
      }}
    >
      {children}
    </Box>
  );
};
export default Layout;
