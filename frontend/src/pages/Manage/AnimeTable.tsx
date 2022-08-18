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
  Pagination,
  Link,
  Typography,
  Grid,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { theme } from "../../theme";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
import usePagination from "../Detail/Pagination";

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

export default function AnimeTable({ plan }: any) {
  const [rows, setRows] = React.useState<any[]>([]);
  const [page, setPage] = React.useState(1);
  const [openModal, setOpenModal] = React.useState<number>(-1);
  const [openEditModal, setOpenEditModal] = React.useState<number>(-1);
  const [refreshKey, setRefreshKey] = React.useState<number>(0);
  const email = localStorage.getItem("email");
  const animesPerPage = 8;
  const count = Math.ceil(rows.length / animesPerPage);
  const rowsPagination = usePagination(rows, animesPerPage);
  let authToken = localStorage.getItem("Auth Token");

  const handleSubmit = (row: any) => {
    if (authToken) {
      const email = localStorage.getItem("email");
      fetch(
        "http://localhost:5001/animoe-7b89b/asia-southeast1/app/api/anime",
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            anime: row,
            email: email,
          }),
        }
      ).then((r) => {
        const index = rows.indexOf(row);
        if (index > -1) {
          rows.splice(index, 1);
        }
        setRows(rows);
        setRefreshKey((oldKey) => oldKey + 1);
      });
    }
  };

  const handleEditSubmit = (data: any, formData: any) => {
    if (authToken) {
      const email = localStorage.getItem("email");
      const anime = {
        id: data.id,
        image: data.image,
        title: data.title,
        status: data.status,
        type: data.type,
        episodes: data.episodes,
        year: data.year,
        season: data.season,
        progress: formData.progress,
        score: formData.score,
        producers: data.producers,
        plan: formData.status,
        isAdded: data.isAdded,
      };
      fetch(
        "http://localhost:5001/animoe-7b89b/asia-southeast1/app/api/anime",
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            oldAnime: data,
            newAnime: anime,
            email: email,
          }),
        }
      ).then((r) => {
        setRefreshKey((oldKey) => oldKey + 1);
      });
    }
  };

  React.useEffect(() => {
    fetch(
      `http://localhost:5001/animoe-7b89b/asia-southeast1/app/api/list/${plan}/anime/${email}`
    )
      .then((response) => response.json())
      .then((json) => {
        setRows(json.animes);
        console.log(rows);
      })
      .catch(console.error);
  }, [refreshKey]);

  const handleClickOpen = (id) => {
    setOpenModal((showId) => (showId === id ? -1 : id));
  };

  const handleClose = () => {
    setOpenModal(-1);
  };

  const handleClickOpenEditModal = (id) => {
    setOpenEditModal((showId) => (showId === id ? -1 : id));
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(-1);
  };

  const handlePageChange = (e: any, p: number) => {
    setPage(p);
    rowsPagination.jump(p);
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
        {rows.length !== 0 ? (
          <>
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
                {plan === "All" ? (
                  <StyledTableCell
                    className="table-title"
                    width={200}
                    sx={{ color: theme.color._100 }}
                    align="center"
                  >
                    Status
                  </StyledTableCell>
                ) : (
                  <></>
                )}
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
              {rows.map((row) => (
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
                      {row.title}
                    </Link>
                  </StyledTableCell>
                  {plan === "All" ? (
                    <StyledTableCell width={200} align="center">
                      {row.plan}
                    </StyledTableCell>
                  ) : (
                    <></>
                  )}
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
                        onClick={() => handleClickOpenEditModal(row.id)}
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
                        onClick={() => handleClickOpen(row.id)}
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
                      open={openModal == row.id}
                      onClose={handleClose}
                      data={row}
                      onSubmit={handleSubmit}
                    />

                    <EditModal
                      open={openEditModal == row.id}
                      onClose={handleCloseEditModal}
                      data={row}
                      onSubmit={handleEditSubmit}
                    />
                  </StyledTableCell>
                </TableRow>
              ))}
            </TableBody>
          </>
        ) : (
          <Box display="flex" justifyContent="flex-end">
            <Box
              flexDirection="column"
              display="flex"
              textAlign="center"
              justifyContent="center"
              ml={6}
            >
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: 40, sm: 32, xs: 24 },
                }}
              >
                Nothing here!
              </Typography>
              <Typography
                sx={{
                  fontWeight: 600,
                  fontSize: { md: 40, sm: 32, xs: 24 },
                }}
              >
                Try to add some animes to your list.
              </Typography>
            </Box>
            <img
              alt="kohaku"
              width="42%"
              height="auto"
              src="https://i.imgur.com/YtthJbA.png"
              style={{ borderRadius: 10 }}
            />
          </Box>
        )}
      </Table>
      {rowsPagination.currentData().length !== 0 ? (
        <Grid item xs={12}>
          <Box sx={{ margin: "auto", marginTop: 3, width: "fit-content" }}>
            <Pagination
              count={count}
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={handlePageChange}
              sx={{
                "& .Mui-selected": {
                  background: `${theme.color._600} !important`,
                },
              }}
            />
          </Box>
        </Grid>
      ) : (
        <></>
      )}
    </TableContainer>
  );
}
