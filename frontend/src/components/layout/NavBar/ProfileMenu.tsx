import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import BookIcon from "@mui/icons-material/Book";
import LogoutIcon from "@mui/icons-material/Logout";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { NavBarMenuItem } from "./NavBarMenuItem";
import { theme } from "../../../theme";
import { Link } from "@mui/material";
import { useNavigate } from "react-router-dom";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

interface CustomizedMenuProps {
  menuName: string;
}

export default function CustomizedMenus(props: CustomizedMenuProps) {
  const { menuName } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    localStorage.removeItem("Auth Token");
    localStorage.removeItem("email");
    navigate("/login");
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        variant="text"
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon fontSize="large" />}
        sx={{
          fontSize: { md: 20, sm: 16, xs: 12 },
          fontWeight: 600,
          color: theme.color._100,
          marginLeft: 1,
        }}
      >
        {menuName}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        disableAutoFocusItem
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <NavBarMenuItem
          key={"Anime List"}
          onClick={handleClose}
          sx={{
            fontSize: { md: 20, sm: 16, xs: 12 },
          }}
        >
          <Link href="/anime-list" underline="none">
            <PlayCircleIcon
              fontSize="large"
              style={{ color: theme.color._100 }}
            />
            Anime List
          </Link>
        </NavBarMenuItem>
        <NavBarMenuItem
          key={"Manga List"}
          onClick={handleClose}
          sx={{
            fontSize: { md: 20, sm: 16, xs: 12 },
          }}
        >
          <Link href="/manga-list" underline="none">
            <BookIcon fontSize="large" style={{ color: theme.color._100 }} />
            Manga List
          </Link>
        </NavBarMenuItem>
        <NavBarMenuItem
          key={"Logout"}
          onClick={handleLogOut}
          sx={{
            fontSize: { md: 20, sm: 16, xs: 12 },
          }}
        >
          <LogoutIcon fontSize="large" style={{ color: theme.color._100 }} />
          Logout
        </NavBarMenuItem>
      </StyledMenu>
    </div>
  );
}
