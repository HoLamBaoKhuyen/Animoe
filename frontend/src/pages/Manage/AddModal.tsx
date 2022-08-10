import * as React from "react";
import {
  Box,
  Button,
  Stack,
  styled,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
} from "@mui/material";
import { theme } from "../../theme";
import ModalLayout from "./ModalLayout";
import StyledSelect from "./StyledSelect";
import { SelectChangeEvent } from "@mui/material/Select";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  "&.MuiTableCell-root": {
    fontSize: 18,
    color: theme.color._100,
    fontWeight: 400,
    border: 0,
  },
}));

type AddModalProps = {
  open: true | false;
  data?: any;
  onClose: () => void;
  onSubmit?: any;
};

const AddModal: React.FC<AddModalProps> = ({
  data,
  open,
  onClose,
  onSubmit,
}) => {
  const [status, setStatus] = React.useState<string>("-1");
  const [progress, setProgress] = React.useState<string>("");
  const [score, setScore] = React.useState<string>("-1");

  const handleStatus = (e: any) => {
    setStatus(e.target.value);
  };

  const handleScore = (e: any) => {
    setScore(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = {
      status: status,
      progress: `${progress}/${data.episodes}`,
      score: score,
    };
    onSubmit(formData);
  };

  return (
    <div>
      <ModalLayout open={open} title="Add anime to your list" onClose={onClose}>
        <Box sx={{ maxWidth: "900px", paddingX: { md: 4, xs: 0 } }}>
          <form onSubmit={handleSubmit}>
            <Table size="small">
              <TableBody>
                <TableRow>
                  <StyledTableCell component="th" scope="row" align="right">
                    Anime title
                  </StyledTableCell>
                  <StyledTableCell
                    component="th"
                    scope="row"
                    sx={{
                      fontWeight: `600 !important`,
                      color: `${theme.color.white} !important`,
                    }}
                  >
                    {data.title}
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell component="th" scope="row" align="right">
                    Status
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <StyledSelect
                      value={status}
                      handleChange={handleStatus}
                      placeHolder="Select status"
                      width="fit-content"
                      list={[
                        "Watching",
                        "Completed",
                        "On-hold",
                        "Dropped",
                        "Plan to watch",
                      ]}
                    />
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell component="th" scope="row" align="right">
                    Progress
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <TextField
                      onChange={(e) => setProgress(e.target.value)}
                      type="number"
                      size="small"
                      sx={{
                        "&.MuiOutlinedInput-root": {
                          borderColor: theme.color.white,
                          borderRadius: "10px",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          display: "none",
                        },
                        "& .MuiInputBase-root": {
                          overflow: "hidden",
                        },
                        "& .MuiOutlinedInput-input": {
                          padding: 0,
                          paddingLeft: "12px",
                          width: "50px",
                          color: theme.color.white,
                          background: theme.color._950,
                          height: "30px",
                          lineHeight: "30px",
                          borderRadius: "10px",
                        },
                      }}
                    />{" "}
                    / {data.episodes} eps
                  </StyledTableCell>
                </TableRow>
                <TableRow>
                  <StyledTableCell component="th" scope="row" align="right">
                    Score
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    <StyledSelect
                      value={score}
                      handleChange={handleScore}
                      placeHolder="Select score"
                      list={["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]}
                    />
                  </StyledTableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Stack direction="row" spacing={2} justifyContent="center" mt={3}>
              <Button
                type="submit"
                sx={{
                  fontSize: 16,
                  px: 1,
                  py: 0,
                  borderRadius: 2,
                }}
                autoFocus
                onClick={onClose}
              >
                Save
              </Button>
            </Stack>
          </form>
        </Box>
      </ModalLayout>
    </div>
  );
};

export default AddModal;
