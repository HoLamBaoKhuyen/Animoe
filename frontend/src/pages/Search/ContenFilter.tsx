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


const ContentFilter = ( {searchParams} : any) => {
  const [option, setOptionName] = React.useState<string[]>([]);

  const handleChange = (event: any) => {
    const {
      target: { name, value },
    } = event;
    const oldParam = searchParams.params.get('genres') ? searchParams.params.get('genres') : "";
    var oldOptions = option;
    if(option.indexOf(event.target.name) > -1){
      oldOptions.splice(option.indexOf(event.target.name),1);
      setOptionName(
        oldOptions
      );
      searchParams.params.set('genres', oldParam.replace(event.target.value + ',' , ""));
      if(oldParam.replace(event.target.value + ',' , "") == ""){
        searchParams.params.delete('genres');
      }
    }else{
      oldOptions.splice(option.length,0,event.target.name);
      setOptionName(
        oldOptions
      );
      searchParams.params.set('genres', oldParam + event.target.value + ',' );
    }
    searchParams.setParams(searchParams.params);
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
                  sx={{ mx: 3, overflowY: "scroll", height: 245 }}
                  component="fieldset"
                  variant="standard"
                >
                  {result.options ? result.options.map((item,key) => (
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={option.indexOf(item) > -1}
                            sx={{
                              color: `${theme.color._100} `,
                              "&.Mui-checked": {
                                color: `${theme.color._800} !important`,
                              },
                            }}
                            onChange={handleChange}
                            name={item}
                            value={result.typeOptions[key]}
                            icon={<SquareRoundedIcon />}
                          />
                        }
                        label={item}
                      />
                    </FormGroup>
                  )) : ""}
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
