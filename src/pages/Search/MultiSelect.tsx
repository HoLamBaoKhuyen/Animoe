import React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import {
  Checkbox,
  FormControl,
  InputBase,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const StyledInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 5,
    position: "relative",
    color: theme.palette.common.white,
    backgroundColor: "rgba(100, 111, 212, 0.67)",
    fontSize: 18,
    fontWeight: 500,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
  },
}));

type SelectProps = {
  placeholder?: string;
  list: string[];
};
const MultipleSelect: React.FC<SelectProps> = ({ placeholder, list }) => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: { sm: 300, xs: "100%" } }}>
        <Select
          multiple
          displayEmpty
          value={personName}
          onChange={handleChange}
          input={<StyledInput />}
          renderValue={(selected) => {
            if (selected.length === 0) {
              return <em>{placeholder}</em>;
            }

            return selected.join(", ");
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem disabled value="">
            <em>{placeholder}</em>
          </MenuItem>
          {list.map((item, key) => (
            <MenuItem
              key={key}
              value={item}
              style={getStyles(item, personName, theme)}
            >
              <Checkbox checked={personName.indexOf(item) > -1} />
              <ListItemText primary={item} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

MultipleSelect.defaultProps = {
  placeholder: "Select",
  list: ["Item1", "Item2", "Item3"],
};

export default MultipleSelect;
