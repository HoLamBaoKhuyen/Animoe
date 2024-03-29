import * as React from "react";
import { theme } from "../../../theme";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link, Menu } from "@mui/material";
import { NavBarMenuItem } from "./NavBarMenuItem";
import { styled } from "@mui/material/styles";
import { format_navlink } from "../../../helpers/format";

const CustomPaper = styled("div")(() => ({
  background: theme.color._850,
}));

interface BasicMenuProps {
  menuName: string;
  menuItems: string[];
}

const NavBarMenu = (props: BasicMenuProps) => {
  const { menuName, menuItems } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box mr={3}>
      <Typography
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          fontSize: { md: 20, sm: 16, xs: 12 },
          fontWeight: 600,
          color: theme.color._100,
          cursor: "pointer",
          "&:hover": {
            color: theme.color.white,
          },
        }}
      >
        {menuName}
      </Typography>
      <CustomPaper>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
            autoFocusItem: false,
          }}
        >
          {menuItems.map((item) => (
            <NavBarMenuItem
              key={item}
              onClick={handleClose}
              sx={{
                fontSize: { md: 20, sm: 16, xs: 12 },
              }}
            >
              <Link href={format_navlink(item, menuName)} underline="none">
                {item}
              </Link>
            </NavBarMenuItem>
          ))}
        </Menu>
      </CustomPaper>
    </Box>
  );
};

export default NavBarMenu;
