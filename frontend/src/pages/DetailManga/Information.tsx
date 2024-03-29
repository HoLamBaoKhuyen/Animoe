import React from "react";
import Box from "@mui/material/Box";
import { CustomTab } from "../../components/Tabs/CustomTab";
import { CustomTabs } from "../../components/Tabs/CustomTabs";
import Score from "./Score";
import Content from "./Content";
import Reviews from "./Reviews";
import Recommendations from "./Recommendations";
import Relations from "./Relations";
import Characters from "./Characters";

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


export default function ScrollableTabsButtonAuto({ data }: { data: any }) {
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
        <CustomTab label="Characters" />
        <CustomTab label="Reviews" />
        <CustomTab label="Recommendations" />
      </CustomTabs>
      <TabPanel value={value} index={0}>
        <Score data={data} />
        <Content data={data} />
        <Box mt={4}>
          <Relations />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box mt={4}>
          <Characters />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box mt={4}>
          <Reviews />
        </Box>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Box mt={4}>
          <Recommendations />
        </Box>
      </TabPanel>
    </Box>
  );
}
