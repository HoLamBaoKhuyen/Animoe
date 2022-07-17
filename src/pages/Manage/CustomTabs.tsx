import { styled } from "@mui/material/styles";
import { Tab, Tabs } from "@mui/material";
import { theme } from "../../theme";

export const StyledTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
  },
});
export const StyledTab = styled(Tab)({
  color: theme.color._100,
  //   borderBottom: "1px solid #e8e8e8",
  "& .MuiTabs-indicator": {
    backgroundColor: "#1890ff",
  },
  "&.Mui-selected": {
    color: theme.palette.common.white,
    borderBottom: `3px solid ${theme.palette.common.white}`,
  },
});
