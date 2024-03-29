import React from "react";
import TextField from "@mui/material/TextField";
import { ThemeProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { theme } from "../../theme";
import { styled } from "@mui/material/styles";
import { datepickerTheme } from "./theme";

const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(100, 111, 212, 0.67)",
    color: theme.palette.common.white,
    borderRadius: 5,
    fontSize: 19,
    fontWeight: 500,
    "&:hover": {
      border: "none",
    },
    "& .MuiOutlinedInput-input": {
      padding: "10px 26px 10px 12px",
      "&input.MuiOutlinedInput-input": {
        display: "none !important",
      },
    },
    "& .MuiButtonBase-root": {
      color: theme.palette.common.white,
    },
  },
}));

export default function CustomDatePicker({searchParams,param}:any) {
  const [value, setValue] = React.useState<Date | null>(searchParams.params.get(param) ? new Date(searchParams.params.get(param)) : null);
  
  return (
    <ThemeProvider theme={datepickerTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={value}
          inputFormat="dd/MM/yyyy"
          mask="__/__/___"
          onChange={(newValue) => {
            setValue(newValue);
            searchParams.params.set(param,newValue ? newValue.toISOString().split('T')[0] : "");
            searchParams.setParams(searchParams.params);
          }}
          renderInput={(params) => (
            <StyledTextField
              InputLabelProps={{ color: "success" }}
              fullWidth
              {...params}
              sx={{ m: 1, width: { sm: 300, xs: "100%" } }}
            />
          )}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
