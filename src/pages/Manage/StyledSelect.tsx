import React from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  styled,
  InputBase,
  Typography,
} from "@mui/material";
import { theme } from "../../theme";

const StyledInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    position: "relative",
    color: theme.palette.common.white,
    fontSize: 16,
    padding: "0 0 0 12px",
    height: '30px',
    lineHeight: '30px',
    borderRadius: 3,
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },
}));
const CreateList = (list: any) => {
  return list.map((item: any, index: number) => (
    <MenuItem key={index} value={item} >
      {item}
    </MenuItem>
  ));
};
type SelectProps = {
  list?: string[];
  label?: string;
  placeHolder?: string;
  width?: string | number
};
const StyledSelect: React.FC<SelectProps> = ({ list, label, placeHolder, width }) => {
  const [value, setValue] = React.useState("-1");

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value);
  };

  return (
    <FormControl
      sx={{
        minWidth: 120,
        width: width,
        "&:hover": {
          "& .MuiInputBase": {
            outline: "none",
          },
        },
      }}
      size="small"
    >
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={value}
        label="Age"
        onChange={handleChange}
        defaultValue={"2"}
        sx={{
          background: theme.color._950,
          borderRadius: 2,
          fontWeight: 500,
        }}
        input={<StyledInput />}
      >
        {placeHolder && <MenuItem value={"-1"} disabled>
          <Typography
            sx={{
              color: theme.palette.grey[400],
              opacity: 0.6,
              fontSize: 16,
              lineHeight: '30px',
              fontWeight: 500,
            }}
          >
            {placeHolder}
          </Typography> </MenuItem>}
        {CreateList(list)}
      </Select>
    </FormControl>
  );
};

StyledSelect.defaultProps = {
  list: ["Item1", "Item2", "Item3"],
  label: "Label",
  placeHolder: "Vui lòng chọn",
  width: 200
};
export default StyledSelect;
