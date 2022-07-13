import React from "react";
import Box from "@mui/material/Box";
import { CustomTab } from "../../components/tabs/CustomTab";
import { Typography } from "@mui/material";
import { CustomTabs } from "../../components/tabs/CustomTabs";
import Score from "./Score";
import Content from "./Content";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

export default function ScrollableTabsButtonAuto() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <CustomTabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <CustomTab label="Details" />
        <CustomTab label="Characters & Staff" />
        <CustomTab label="Reviews" />
        <CustomTab label="Recommendations" />
        <CustomTab label="Videos" />
        <CustomTab label="Forum" />
        <CustomTab label="Pictures" />
      </CustomTabs>
      <TabPanel value={value} index={0}>
        <Score />
        <Content />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography>Characters & Staff</Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography> Reviews</Typography>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Typography> Recommendations</Typography>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Typography> Videos</Typography>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Typography> Forum</Typography>
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Typography> Pictures</Typography>
      </TabPanel>
    </Box>
  );
}
