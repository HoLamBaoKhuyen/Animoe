import * as React from "react";
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
    backgroundColor: theme.color._950,
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: 500,
    width: "200px",
    borderRadius: "10px",

    "&:hover": {
      border: "none",
    },
    "& .MuiOutlinedInput-input": {
      padding: "0 0 0 12px",
      height: "30px",
      lineHeight: "30px",
      "&input.MuiOutlinedInput-input": {
        display: "none !important",
      },
    },
    "& .MuiButtonBase-root": {
      color: theme.palette.common.white,
    },
  },
}));

export default function CustomDatePicker() {
  const [value, setValue] = React.useState<Date | null>(null);

  return (
    <ThemeProvider theme={datepickerTheme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          value={value}
          inputFormat="dd/MM/yyyy"
          mask="__/__/___"
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => (
            <StyledTextField
              InputLabelProps={{ color: "success" }}
              fullWidth
              {...params}
              sx={{ width: { sm: 300, xs: "100%" } }}
            />
          )}
        />
      </LocalizationProvider>
    </ThemeProvider>
  );
}
