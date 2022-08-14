import * as React from "react";
import Layout from "../../components/layout";
import { Box, Container, Grid, Typography } from "@mui/material";
import { StyledTab, StyledTabs } from "./CustomTabs";
import { theme } from "../../theme";
import StyledSelect from "../../components/Select/StyledSelect";
import TableContent from "./TableContent";
import { useNavigate } from "react-router-dom";
import { format_string } from "../../helpers/format";

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
      {value === index && <Box sx={{ pt: 3 }}>{children}</Box>}
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
  const [types, setTypes] = React.useState<string[]>([]);
  const [seasons, setSeasons] = React.useState<string[]>([]);
  const [statuses, setStatuses] = React.useState<string[]>([]);
  const [years, setYears] = React.useState<string[]>([]);
  const [producers, setProducers] = React.useState<string[]>([]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const getTypes = () => {
    fetch(
      `http://localhost:5001/animoe-7b89b/asia-southeast1/app/api/types/anime`
    )
      .then((response) => response.json())
      .then((json) => {
        setTypes(json.types);
      })
      .catch(console.error);
  };

  const getSeasons = () => {
    fetch(
      `http://localhost:5001/animoe-7b89b/asia-southeast1/app/api/seasons/anime`
    )
      .then((response) => response.json())
      .then((json) => {
        const seasons = json.seasons;
        setSeasons(seasons.map((season: string) => format_string(season)));
      })
      .catch(console.error);
  };

  const getStatuses = () => {
    fetch(
      `http://localhost:5001/animoe-7b89b/asia-southeast1/app/api/statuses/anime`
    )
      .then((response) => response.json())
      .then((json) => {
        setStatuses(json.statuses);
      })
      .catch(console.error);
  };

  const getYears = (email: string | null) => {
    fetch(
      `http://localhost:5001/animoe-7b89b/asia-southeast1/app/api/years/anime/${email}`
    )
      .then((response) => response.json())
      .then((json) => {
        setYears(json.years);
      })
      .catch(console.error);
  };

  const getProducers = (email: string | null) => {
    fetch(
      `http://localhost:5001/animoe-7b89b/asia-southeast1/app/api/producers/anime/${email}`
    )
      .then((response) => response.json())
      .then((json) => {
        setProducers(json.producers);
      })
      .catch(console.error);
  };

  const navigate = useNavigate();
  React.useEffect(() => {
    let authToken = localStorage.getItem("Auth Token");

    if (!authToken) {
      navigate("/login");
    }
    let email = localStorage.getItem("email");
    getTypes();
    getSeasons();
    getStatuses();
    getProducers(email);
    getYears(email);
  }, []);

  return (
    <Layout>
      <Container sx={{ background: theme.color._800, borderRadius: 3 }}>
        <Box sx={{ width: "100%" }} px={5} py={2} mb={4}>
          <Box>
            <StyledTabs
              variant="scrollable"
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
            <Grid container spacing={3} mt={1}>
              <Grid item xs={12} sm={4} md={2}>
                <StyledSelect
                  placeHolder="Select status"
                  width={"100%"}
                  list={statuses}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <StyledSelect
                  placeHolder="Select year"
                  width={"100%"}
                  list={years}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <StyledSelect
                  placeHolder="Select season"
                  width={"100%"}
                  list={seasons}
                />
              </Grid>
              <Grid item xs={12} sm={4} md={2}>
                <StyledSelect
                  placeHolder="Select type"
                  width={"100%"}
                  list={types}
                />
              </Grid>
              <Grid item xs={12} sm={8} md={4}>
                <StyledSelect
                  placeHolder="Select producer"
                  width={"100%"}
                  list={producers}
                />
              </Grid>
            </Grid>
          </Box>
          <TabPanel value={value} index={0}>
            <TableContent />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography variant="body1">Currently watching</Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <Typography variant="body1">Completed</Typography>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <Typography variant="body1">On hold</Typography>
          </TabPanel>
          <TabPanel value={value} index={4}>
            <Typography variant="body1">Dropped</Typography>
          </TabPanel>
          <TabPanel value={value} index={5}>
            <Typography variant="body1">Plan to watch</Typography>
          </TabPanel>
        </Box>
      </Container>
    </Layout>
  );
};

export default ManagePage;
