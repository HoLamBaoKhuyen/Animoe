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
  Typography,
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

function getStyles(name: string, option: string, theme: Theme) {
  return {
    fontWeight:
      option.indexOf(name) === -1
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
  background?: string
  width?: string | number
  searchParams?: any
  param: string
  paramList: string[];
};
const getOption = (list: string[], searchParams: any, param: string, paramList:string[] ) => {
  return list[paramList.indexOf(searchParams.params.get(param))]
}
const SingleSelect: React.FC<SelectProps> = ({ placeholder, list, background, width, searchParams, param, paramList}) => {
  const theme = useTheme();
  const [option, setOptionName] = React.useState<string>(searchParams.params.get(param) ? getOption(list, searchParams, param, paramList )  : "");

  const handleClickChange= (event: React.ChangeEvent<HTMLInputElement>) => {
    if(option.indexOf(event.target.name) > -1){
      setOptionName(
        ""
      );
      searchParams.params.delete(param);
    }else{
      setOptionName(
        event.target.name
      );
      var indexOfOption = list ? list.indexOf(event.target.name) : -1;
      searchParams.params.set(param,paramList[indexOfOption]);
    }
    searchParams.setParams(searchParams.params);
  };
  
  return (
    <div>
      <FormControl sx={{ m: 1, width: { sm: width, xs: "100%" } }}>
        <Select
          displayEmpty
          value={option}
          input={<StyledInput sx={{
            "& .MuiInputBase-input": { background: background }
          }} />}
          renderValue={(selected) => {
            if (selected === "" || option === "") {
              return (
                <Typography
                  sx={{
                    color: theme.color._100,
                    fontSize: 19,
                    fontWeight: 500,
                  }}
                >
                  {placeholder}
                </Typography>
              );
            }

            return selected;
          }}
          MenuProps={MenuProps}
          inputProps={{ "aria-label": "Without label" }}
        >
          <MenuItem
            disabled
            value=""
            sx={{
              color: theme.color._100,
              fontSize: 19,
              fontWeight: 500,
            }}
          >
            {placeholder}
          </MenuItem>
          {list?.map((item, key) => (
            <MenuItem
              key={key}
              value={item}
              style={getStyles(item, option, theme)}
            >
              <Checkbox checked={option.indexOf(item) > -1} name={item} onChange={handleClickChange}/>
              <ListItemText
                primary={item}
                sx={{
                  color: theme.color._100,
                  fontSize: 19,
                  fontWeight: 500,
                }}
              />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

SingleSelect.defaultProps = {
  placeholder: "Select",
  list: ["Item1", "Item2", "Item3"],
  background: "rgba(100, 111, 212, 0.67)",
  width: 300
};

export default SingleSelect;
