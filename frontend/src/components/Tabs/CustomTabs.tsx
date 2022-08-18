import { styled, Tabs } from "@mui/material";

export const CustomTabs = styled(Tabs)({
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& .MuiTabs-flexContainer": {
    justifyContent: 'flex-start'
  }
});
