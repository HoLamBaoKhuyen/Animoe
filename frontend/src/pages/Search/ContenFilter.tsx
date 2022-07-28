import * as React from "react";
import { ReactNode } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Typography,
} from "@mui/material";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import { theme } from "../../theme";
import { CONTENT_FILTER } from "../../data/detail";

type SearchResultsProps = {
  children?: ReactNode;
  title?: string;
  englistTitle?: string;
  image?: string;
};
const ContentFilter: React.FC<SearchResultsProps> = ({ children }) => {
  const [state, setState] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(!state);
  };
  return (
    <Box>
      <Box sx={{ display: "flex", mt: 3 }}>
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          Content Filter
        </Typography>
      </Box>
      <Box sx={{ mt: 5, width: "100%" }}>
        <Grid
          item
          xs={12}
          container
          columnSpacing={{ md: 10, sm: 3 }}
          rowSpacing={{ md: 2, xs: 2 }}
        >
          {CONTENT_FILTER.map((result) => (
            <Grid
              item
              xs={12}
              lg={3}
              sm={6}
              key={result.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  width: 222,
                  height: 322,
                  display: "inline",
                  borderRadius: 3,
                  backgroundColor: "rgba(100, 111, 212, 0.75)",
                }}
              >
                <Box
                  sx={{
                    borderBottom: `1px solid ${theme.palette.common.white}`,
                  }}
                  py={1}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: 700, py: 1, pl: 3 }}
                  >
                    {result.name}
                  </Typography>
                </Box>

                <FormControl
                  sx={{ mx: 3 }}
                  component="fieldset"
                  variant="standard"
                >
                  {result.type.map((type) => (
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{
                              color: `${theme.color._100} `,
                              "&.Mui-checked": {
                                color: `${theme.color._800} !important`,
                              },
                            }}
                            icon={<SquareRoundedIcon />}
                          />
                        }
                        label={type}
                      />
                    </FormGroup>
                  ))}
                </FormControl>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};
export default ContentFilter;
