import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { theme } from "../../theme";
import NavBar from "./NavBar";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        background: theme.color._900,
        minHeight: "100vh",
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Box sx={{ flexShrink: 0 }}>
        <NavBar />
      </Box>
      <Box sx={{ flex: '1 0 auto' }}>
        {children}</Box>
      <Box sx={{ flexShrink: 0 }}>
        <Footer /></Box>
    </Box>
  );
};
export default Layout;
