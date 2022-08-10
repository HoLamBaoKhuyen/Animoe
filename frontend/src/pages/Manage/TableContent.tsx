// @ts-nocheck
import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  Box,
  Button,
  Stack,
  PaginationItem,
  Pagination,
  Link,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { theme } from "../../theme";
import DeleteModal from "./DeleteModal";
import AddModal from "./AddModal";

export const StyledTableCell = styled(TableCell)({
  "&.MuiTableCell-root": {
    color: theme.palette.common.white,
    fontWeight: 500,
    border: 0,
    fontSize: 18,
    paddingY: 1,
    "&.table-title": {
      color: theme.color._100,
    },
  },
});

export default function TableContent() {
  const [rows, setRows] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [openAddModal, setOpenAddModal] = React.useState<boolean>(false);
  const email = sessionStorage.getItem("email");

  React.useEffect(() => {
    fetch(
      `http://localhost:5001/animoe-7b89b/asia-southeast1/app/api/list/anime/${email}`
    )
      .then((response) => response.json())
      .then((json) => {
        setRows(json.animes);
      })
      .catch(console.error);
  }, [rows]);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  const handleClickOpenAddModal = () => {
    setOpenAddModal(true);
  };

  const handleCloseAddModal = () => {
    setOpenAddModal(false);
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <TableContainer>
      <Table
        sx={{
          minWidth: 650,
          backgroundColor: theme.color._850,
          borderRadius: 2,
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <StyledTableCell
              className="table-title"
              width={150}
              align="center"
            ></StyledTableCell>
            <StyledTableCell
              className="table-title"
              width={350}
              sx={{ color: theme.color._100 }}
            >
              Title
            </StyledTableCell>
            <StyledTableCell
              className="table-title"
              width={120}
              align="center"
              sx={{ color: theme.color._100 }}
            >
              Score
            </StyledTableCell>
            <StyledTableCell
              className="table-title"
              width={120}
              align="center"
              sx={{ color: theme.color._100 }}
            >
              Type
            </StyledTableCell>
            <StyledTableCell
              className="table-title"
              width={120}
              align="center"
              sx={{ color: theme.color._100 }}
            >
              Progress
            </StyledTableCell>
            <StyledTableCell
              className="table-title"
              width={150}
              align="center"
              sx={{ color: theme.color._100 }}
            >
              Action
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows ? (
            rows.map((row) => (
              <TableRow key={row.id}>
                <StyledTableCell
                  width={150}
                  align="center"
                  component="th"
                  scope="row"
                >
                  <Link href={`/anime/${row.id}`}>
                    <img
                      alt="poster"
                      src={row.image}
                      height="100px"
                      width="auto"
                      style={{ borderRadius: 10 }}
                    />
                  </Link>
                </StyledTableCell>

                <StyledTableCell width={350}>
                  <Link
                    href={`/anime/${row.id}`}
                    sx={{ color: theme.color.white }}
                  >
                    {row.title}{" "}
                  </Link>
                </StyledTableCell>

                <StyledTableCell width={120} align="center">
                  {row.score}
                </StyledTableCell>
                <StyledTableCell width={120} align="center">
                  {row.type}
                </StyledTableCell>
                <StyledTableCell width={120} align="center">
                  {row.progress}
                </StyledTableCell>
                <StyledTableCell width={150} align="center">
                  <Stack direction="row" spacing={3} justifyContent="center">
                    <Button
                      onClick={() => handleClickOpenAddModal()}
                      sx={{
                        minWidth: 0,
                        p: 0,
                        width: 35,
                        height: 35,
                        borderRadius: 1,
                        backgroundColor: theme.color.green_800,
                        transition: "all 0.1s",
                        "&:hover": {
                          backgroundColor: theme.color.green_800,
                          opacity: 0.6,
                        },
                      }}
                    >
                      <CreateIcon fontSize="small" />
                    </Button>
                    <Button
                      onClick={() => handleClickOpen()}
                      sx={{
                        minWidth: 0,
                        p: 0,
                        width: 35,
                        height: 35,
                        borderRadius: 1,
                        backgroundColor: theme.color.red_800,
                        transition: "all 0.1s",

                        "&:hover": {
                          backgroundColor: theme.color.red_800,
                          opacity: 0.6,
                        },
                      }}
                    >
                      <DeleteIcon fontSize="small" />
                    </Button>
                  </Stack>
                  {/* Modal */}
                  <DeleteModal
                    open={openModal}
                    onClose={handleClose}
                    title={row.title}
                  />
                  <AddModal
                    open={openAddModal}
                    onClose={handleCloseAddModal}
                    data={row}
                  />
                </StyledTableCell>
              </TableRow>
            ))
          ) : (
            <></>
          )}
        </TableBody>
      </Table>
      <Box style={{ margin: "auto", width: "fit-content", marginTop: 20 }}>
        <Pagination
          count={10}
          shape="rounded"
          variant="outlined"
          color="primary"
          page={page}
          onChange={handlePageChange}
          renderItem={(item) => (
            <PaginationItem
              components={{
                previous: ArrowBackIosNewIcon,
                next: ArrowForwardIosIcon,
              }}
              {...item}
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#9BA3EB",
                  color: "white",
                  borderRadius: 0,
                },
              }}
            />
          )}
        />
      </Box>
    </TableContainer>
  );
}
