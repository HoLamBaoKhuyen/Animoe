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
      }}
    >
      <NavBar />
      {children}
      <Footer />
    </Box>
  );
};
export default Layout;
