import { styled, MenuItem } from "@mui/material";
import { theme } from "../../../theme";
export const NavBarMenuItem = styled(MenuItem)({
  fontWeight: 600,
  background: theme.color._850,
  color: theme.color._100,
  "&:hover": {
    color: theme.color._400,
    background: theme.color._800,
  },
  "&:focus": {
    color: theme.color.white,
    background: theme.color._950,
  },
  "&.Mui-selected": {
    color: theme.color.white,
    background: theme.color._900,
  },
  "&.Mui-selected:hover": {
    color: theme.color._400,
    background: theme.color._800,
  },
});
