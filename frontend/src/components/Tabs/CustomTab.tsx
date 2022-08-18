import { styled, Tab } from "@mui/material";
import { theme } from "../../theme";
export const CustomTab = styled(Tab)({
  textTransform: "none",
  fontWeight: 600,
  color: theme.color._100,
  padding: 5,
  marginRight: 10,
  minHeight: 0,
  "&.MuiButtonBase-root": {
    borderRadius: 10,
  },
  "&:hover": {},
  "&:active": {
    color: theme.color.white,
  },
  "&:focus": {},
  "&.Mui-selected": {
    color: theme.color.white,
    background: theme.color._600,
  },
});
