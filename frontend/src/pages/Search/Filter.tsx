import React, { ReactNode } from "react";
import { Box, Grid, Typography } from "@mui/material";
import { theme } from "../../theme";
import { FILTER } from "../../data/detail";
import MultipleSelect from "../../components/Select/MultiSelect";
import CustomDatePicker from "./CustomDatePicker";

type SearchResultsProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};
const Filter: React.FC<SearchResultsProps> = ({ children }) => {
  const [value, setValue] = React.useState("");
  const handleChange = (event: { target: { value: string } }) => {
    setValue(event.target.value);
  };
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
                <MultipleSelect
                  placeholder={`Select ${result.typeName}`}
                  list={result.typeOptions}
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
              <CustomDatePicker />
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
              <CustomDatePicker />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default Filter;
