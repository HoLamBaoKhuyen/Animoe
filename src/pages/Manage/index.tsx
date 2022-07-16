import React from "react";
import Layout from "../../components/layout";
import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import { StyledTab, StyledTabs } from "./CustomTabs";

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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ManagePage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Box sx={{ width: "100%" }}>
        <Box>
          <StyledTabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            scrollButtons
            allowScrollButtonsMobile
          >
            <StyledTab label="All anime" {...a11yProps(0)} />
            <StyledTab label="Currently watching" {...a11yProps(1)} />
            <StyledTab label="Completed" {...a11yProps(2)} />
            <StyledTab label="On hold" {...a11yProps(3)} />
            <StyledTab label="Dropped" {...a11yProps(4)} />
            <StyledTab label="Plan to watch" {...a11yProps(5)} />
          </StyledTabs>
        </Box>
        <TabPanel value={value} index={0}>
          All anime
        </TabPanel>
        <TabPanel value={value} index={1}>
          Currently watching
        </TabPanel>
        <TabPanel value={value} index={2}>
          Completed
        </TabPanel>
        <TabPanel value={value} index={3}>
          On hold
        </TabPanel>
        <TabPanel value={value} index={4}>
          Dropped
        </TabPanel>
        <TabPanel value={value} index={5}>
          Plan to watch
        </TabPanel>
      </Box>
    </Layout>
  );
};

export default ManagePage;
