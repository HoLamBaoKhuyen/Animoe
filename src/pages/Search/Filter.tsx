import { Box, Grid, Typography } from "@mui/material";
import { theme } from "../../theme";
import { FILTER } from "../../data/detail";
import SingleSelect from "../../components/Select/SingleSelect";
import CustomDatePicker from "./CustomDatePicker";


const Filter = (props : any) => {
  const { searchParams } = props;

  return (
    <Box sx={{}}>
      <Box sx={{ display: "flex" }}>
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          Filter
        </Typography>
      </Box>
      <Box sx={{ mt: 5 }}>
        <Grid
          item
          xs={12}
          container
          columnSpacing={{ md: 15, sm: 3 }}
          rowSpacing={{ md: 4, xs: 2 }}
        >
          {FILTER.map((result) => (
            <Grid
              item
              xs={12}
              md={5}
              key={result.id}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Grid item xs={4}>
                <Typography
                  variant="h3"
                  sx={{ float: "right", py: 1, color: theme.color._100 }}
                >
                  {result.name}:
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <SingleSelect
                  placeholder={`Select ${result.typeName}`}
                  list={result.options}
                  searchParams={searchParams}
                  param = {result.typeName}
                  paramList={result.typeOptions}
                />
              </Grid>
            </Grid>
          ))}
          <Grid
            item
            xs={12}
            md={5}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid item xs={4}>
              <Typography
                variant="h3"
                sx={{ float: "right", py: 1, color: theme.color._100 }}
              >
                Start Date:
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <CustomDatePicker searchParams={searchParams} param="start_date"/>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Grid item xs={4}>
              <Typography
                variant="h3"
                sx={{ float: "right", py: 1, color: theme.color._100 }}
              >
                End Date:
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <CustomDatePicker searchParams={searchParams} param="end_date"/>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Filter;
