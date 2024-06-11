import * as React from "react";
import { alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";

import { visuallyHidden } from "@mui/utils";
import Link from "next/link";
import { useSelector } from "react-redux";
import { dashboardSelector } from "@/store/reducers/dashboard";

interface Data {
  jobId: Number;
  Name: string;
  Position: string;
  A1stLevel: Number;
  A2stLevel: Number;
  A3stLevel: Number;
  A4stLevel: Number;
  TotalMarks: string;
  Status: string;
  Actions: string;
}

function createData(
  jobId: Number,
  Name: string,
  Position: string,
  A1stLevel: Number,
  A2stLevel: Number,
  A3stLevel: Number,
  A4stLevel: Number,
  TotalMarks: string,
  Status: string,
  Actions: string
): Data {
  return {
    jobId,
    Name,
    Position,
    A1stLevel,
    A2stLevel,
    A3stLevel,
    A4stLevel,
    TotalMarks,
    Status,
    Actions,
  };
}

const rows = [
  createData(
    "#001",
    "Jhon Smith",
    "Designer",
    "0/1",
    "0/2",
    "0/3",
    "0/4",
    "13 Feb 2024"
  ),
  createData(
    "#002",
    "Jhon Smith",
    "Angular Developer",
    "0/1",
    "0/2",
    "0/3",
    "0/4",
    "13 Feb 2024"
  ),
  createData(
    "#003",
    "Jhon Smith",
    "Senior Developer",
    "0/1",
    "0/2",
    "0/3",
    "0/4",
    "13 Feb 2024"
  ),
  createData(
    "#004",
    "Jhon Smith",
    "Senior Developer",
    "0/1",
    "0/2",
    "0/3",
    "0/4",
    "13 Feb 2024"
  ),
  createData(
    "#005",
    "Jhon Smith",
    "Senior Developer",
    "0/1",
    "0/2",
    "0/3",
    "0/4",
    "13 Feb 2024"
  ),
  createData(
    "#006",
    "Jhon Smith",
    "Senior Developer",
    "0/1",
    "0/2",
    "0/3",
    "0/4",
    "13 Feb 2024"
  ),
  createData(
    "#007",
    "Jhon Smith",
    "Senior Developer",
    "0/1",
    "0/2",
    "0/3",
    "0/4",
    "13 Feb 2024"
  ),
  createData(
    "#008",
    "Jhon Smith",
    "Senior Developer",
    "0/1",
    "0/2",
    "0/3",
    "0/4",
    "13 Feb 2024"
  ),
  createData(
    "#009",
    "Jhon Smith",
    "Senior Developer",
    "0/1",
    "0/2",
    "0/3",
    "0/4",
    "13 Feb 2024"
  ),
  createData(
    "#010",
    "Jhon Smith",
    "Senior Developer",
    "0/1",
    "0/2",
    "0/3",
    "0/4",
    "13 Feb 2024"
  ),
  createData(
    "#011",
    "Jhon Smith",
    "Senior Developer",
    "0/1",
    "0/2",
    "0/3",
    "0/4",
    "13 Feb 2024"
  ),
  createData(
    "#012",
    "Jhon Smith",
    "Senior Developer",
    "0/1",
    "0/2",
    "0/3",
    "0/4",
    "13 Feb 2024"
  ),
  createData(
    "#013",
    "Jhon Smith",
    "Senior Developer",
    "0/1",
    "0/2",
    "0/3",
    "0/4",
    "13 Feb 2024"
  ),
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  disablePadding: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: "jobId",
    numeric: false,
    disablePadding: false,
    label: "Job ID",
  },
  {
    id: "Name",
    numeric: false,
    disablePadding: false,
    label: "Name",
  },
  {
    id: "Position",
    numeric: false,
    disablePadding: false,
    label: "Position",
  },
  {
    id: "A1stLevel",
    numeric: false,
    disablePadding: false,
    label: "1st Level",
  },
  {
    id: "A2stLevel",
    numeric: false,
    disablePadding: false,
    label: "2st Level",
  },
  {
    id: "A3stLevel",
    numeric: false,
    disablePadding: false,
    label: "3st Level",
  },
  {
    id: "A4stLevel",
    numeric: false,
    disablePadding: false,
    label: "4st Level",
  },

  {
    id: "TotalMarks",
    numeric: false,
    disablePadding: false,
    label: "TotalMarks",
  },
  {
    id: "Status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },

  {
    id: "Actions",
    numeric: false,
    disablePadding: false,
    label: "Actions",
  },
];

interface EnhancedTableProps {
  numSelected: number;
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead sx={{ backgroundColor: "#F5F5F5" }}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={{ whiteSpace: "nowrap" }} // Apply white-space: nowrap; to table header cells
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

export default function InterviewCandidateTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("calories");
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const dashboardData = useSelector(dashboardSelector);

  const rows = dashboardData?.candidate_status_list;

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: readonly number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const visibleRows = React.useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage
      ),
    [order, orderBy, page, rowsPerPage]
  );



  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ whiteSpace: "nowrap" }} // Apply white-space: nowrap; to table rows
                    // sx={{ cursor: 'pointer' }}
                    onMouseDown={(e) => e.preventDefault()} // Disable row selection on mouse down
                  >
                    <TableCell component="th" id={labelId} scope="row">
                      {row?.job_details?.id}
                    </TableCell>
                    <TableCell align="left"> {row?.candidate_details?.candidate_firstName +" "+row?.candidate_details?.candidate_lastName}</TableCell>
                    <TableCell align="left">{row.Position}ABC(static) </TableCell>
                    <TableCell align="left">{row?.meeting_details[0]?.status}</TableCell>
                    <TableCell align="left">{row?.meeting_details[1]?.status}</TableCell>
                    <TableCell align="left">{row?.meeting_details[2]?.status}</TableCell>
                    <TableCell align="left">{row?.meeting_details[3]?.status}</TableCell>
                    <TableCell align="left">{row.TotalMarks} 0(static)</TableCell>
                    <TableCell align="left">
                      {row.Status}
                      <button className="hover:bg-[#1d7b1c26] text-[#108F0E] px-2 py-1 rounded bg-[#0EAD0B26]">
                        Hired
                      </button>
                    </TableCell>
                    <TableCell align="center">
                      <Link prefetch href="/CandidatesStatus3">
                        <i className="fa fa-eye"></i>
                      </Link>
                    </TableCell>
                  </TableRow>
                );
              })}

              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="d-lg-flex justify-between align-item-center">
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <div className="text-center m-2 order-lg-first">
            <button className="btn btnOutlineBlack mx-1">Previous Page</button>
            <button className="btn btn-blue mx-1">Next Page</button>
          </div>
        </div>
      </Paper>
    </Box>
  );
}
