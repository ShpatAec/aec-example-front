import React, {useEffect} from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useGeTableData} from "../../lib/api-hooks";
import {FetchState} from "../../types";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

function stableSort<T>(array: readonly T[]) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  return stabilizedThis.map((el) => el[0]);
}

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function TableComponent() {
  const [tableData, fetchState, getTableData] = useGeTableData();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  useEffect(() => {
    getTableData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - tableData.length) : 0;

  return (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg dark:text-gray-300">
        {fetchState === FetchState.LOADING && <p>Fetching posts...</p>}
        {fetchState === FetchState.ERROR && (
            <>
              <p>Oops! Something went wrong. Please try again.</p>
            </>
        )}
        {fetchState === FetchState.SUCCESS && (
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} className="dark:bg-gray-600" aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Product name</StyledTableCell>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell align="right">Category</StyledTableCell>
                <StyledTableCell align="right">Price</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {stableSort(tableData)
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    return (
                            <StyledTableRow key={index}>
                              <StyledTableCell component="th" scope="row" className="dark:text-gray-300">
                                {row.title}
                              </StyledTableCell>
                              <StyledTableCell className="dark:text-gray-300">{row.description}</StyledTableCell>
                              <StyledTableCell align="right" className="dark:text-gray-300">{row.category}</StyledTableCell>
                              <StyledTableCell align="right" className="dark:text-gray-300">{row.price}</StyledTableCell>
                            </StyledTableRow>
                    );
                  })
              }
              {emptyRows > 0 && (
                  <TableRow
                      style={{
                        height: 33 * emptyRows,
                      }}
                  >
                    <TableCell colSpan={6} />
                  </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
            className="dark:text-gray-300"
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={tableData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
        )}
    </div>
  );
}