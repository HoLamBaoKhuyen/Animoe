//@ts-nocheck
import * as React from "react";
import { theme } from "../../../theme";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Button, Container } from "@mui/material";
import NavBarMenu from "./NavBarMenu";
import { NavBarMenuItem } from "./NavBarMenuItem";
import SearchBar from "./SearchBar";
import CustomizedMenus from "./ProfileMenu";
import { format_email } from "../../../helpers/format";

const NavBar = () => {
  const authToken = localStorage.getItem("Auth Token");
  const email = localStorage.getItem("email");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    ></Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      disableAutoFocusItem={true}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <NavBarMenuItem>
        <NavBarMenu
          menuName="Anime"
          menuItems={[
            "Anime Search",
            "Top Anime",
            "Most Popular",
            "Most Favorite",
            "Recommendations",
          ]}
        />
      </NavBarMenuItem>

      <NavBarMenuItem>
        <NavBarMenu
          menuName="Manga"
          menuItems={[
            "Manga Search",
            "Top Manga",
            "Most Popular",
            "Most Favorite",
            "Recommendations",
          ]}
        />
      </NavBarMenuItem>

      {/*<NavBarMenuItem>*/}
      {/*  <Typography*/}
      {/*    sx={{*/}
      {/*      fontSize: { sm: 16, xs: 12 },*/}
      {/*      fontWeight: 600,*/}
      {/*      color: theme.color._100,*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    Forum*/}
      {/*  </Typography>*/}
      {/*</NavBarMenuItem>*/}
      {authToken ? (
        <CustomizedMenus menuName={format_email(email)} />
      ) : (
        <>
          <NavBarMenuItem>
            <Typography
              component="a"
              href="/login"
              sx={{
                fontSize: { sm: 16, xs: 12 },
                fontWeight: 600,
                color: theme.color._100,
                textDecoration: "none",
              }}
            >
              Log In
            </Typography>
          </NavBarMenuItem>

          <NavBarMenuItem>
            <Typography
              component="a"
              href="/signup"
              sx={{
                fontSize: { sm: 16, xs: 12 },
                fontWeight: 600,
                color: theme.color._100,
                textDecoration: "none",
              }}
            >
              Sign Up
            </Typography>
          </NavBarMenuItem>
        </>
      )}
    </Menu>
  );

  return (
    <Container disableGutters>
      <Box
        sx={{
          flexGrow: 1,
          py: 2,
          bgcolor: theme.color._900,
        }}
      >
        <Toolbar>
          <Typography
            variant="h2"
            noWrap
            component="a"
            href="/"
            sx={{
              fontSize: { md: 40, sm: 32 },
              display: { xs: "none", sm: "block" },
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Animoe
          </Typography>

          <SearchBar />

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
            }}
          >
            <NavBarMenu
              menuName="Anime"
              menuItems={[
                "Anime Search",
                "Top Anime",
                "Most Popular",
                "Most Favorite",
                "Recommendations",
              ]}
            />
            <NavBarMenu
              menuName="Manga"
              menuItems={[
                "Manga Search",
                "Top Manga",
                "Most Popular",
                "Most Favorite",
                "Recommendations",
              ]}
            />
            {/*<Typography*/}
            {/*  sx={{*/}
            {/*    fontSize: { md: 20, sm: 16 },*/}
            {/*    fontWeight: 600,*/}
            {/*    color: theme.color._100,*/}
            {/*    cursor: "pointer",*/}
            {/*    "&:hover": {*/}
            {/*      color: theme.color.white,*/}
            {/*    },*/}
            {/*  }}*/}
            {/*>*/}
            {/*  Forum*/}
            {/*</Typography>*/}
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          {authToken ? (
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <CustomizedMenus menuName={format_email(email)} />
            </Box>
          ) : (
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
              }}
            >
              <Typography
                component="a"
                href="/login"
                sx={{
                  px: { md: 3, sm: 2 },
                  fontSize: { md: 20, sm: 16 },
                  fontWeight: 600,
                  color: theme.color._100,
                  bgcolor: theme.color._900,
                  textDecoration: "none",
                }}
              >
                Log In
              </Typography>
              <Button
                href="/signup"
                sx={{
                  px: { md: 3, sm: 2 },
                  fontSize: { md: 20, sm: 16 },
                  fontWeight: 600,
                  color: theme.color.white,
                }}
              >
                Sign Up
              </Button>
            </Box>
          )}

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
            >
              <MenuIcon sx={{ color: theme.color._100 }} />
            </IconButton>
          </Box>
        </Toolbar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </Container>
  );
};
export default NavBar;
