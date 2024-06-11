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

interface Data {
  id: Number;
  EmpName: string;
  gender: string;
  designation: string;
  name: string;
  projectManager: string;
  joiningDate: string;
}

function createData(
  id: Number,
  name: string,
  EmpName: string,
  designation: string,
  gender: string,
  joiningDate: string,
  projectManager: string
): Data {
  return {
    id,
    name,
    EmpName,
    designation,
    gender,
    joiningDate,
    projectManager,
  };
}

const rows = [
  createData(
    1,
    "#EMP001",
    "Jhon Smith",
    "Senior Developer",
    "Male",
    "13 Feb 2024",
    "John Smith"
  ),
  createData(
    2,
    "#EMP002",
    "Jhon Smith",
    "Senior Developer",
    "female",
    "13 Feb 2024",
    "John Smith"
  ),
  createData(
    3,
    "#EMP003",
    "Jhon Smith",
    "Senior Developer",
    "Male",
    "13 Feb 2024",
    "John Smith"
  ),
  createData(
    4,
    "#EMP004",
    "Jhon Smith",
    "Senior Developer",
    "female",
    "13 Feb 2024",
    "John Smith"
  ),
  createData(
    5,
    "#EMP005",
    "Jhon Smith",
    "Senior Developer",
    "Male",
    "13 Feb 2024",
    "John Smith"
  ),
  createData(
    6,
    "#EMP006",
    "Jhon Smith",
    "Senior Developer",
    "Male",
    "13 Feb 2024",
    "John Smith"
  ),
  createData(
    7,
    "#EMP007",
    "Jhon Smith",
    "Senior Developer",
    "Male",
    "13 Feb 2024",
    "John Smith"
  ),
  createData(
    8,
    "#EMP008",
    "Jhon Smith",
    "Senior Developer",
    "Male",
    "13 Feb 2024",
    "John Smith"
  ),
  createData(
    9,
    "#EMP009",
    "Jhon Smith",
    "Senior Developer",
    "Male",
    "13 Feb 2024",
    "John Smith"
  ),
  createData(
    10,
    "#EMP010",
    "Jhon Smith",
    "Senior Developer",
    "Male",
    "13 Feb 2024",
    "John Smith"
  ),
  createData(
    11,
    "#EMP011",
    "Jhon Smith",
    "Senior Developer",
    "Male",
    "13 Feb 2024",
    "John Smith"
  ),
  createData(
    12,
    "#EMP012",
    "Jhon Smith",
    "Senior Developer",
    "Male",
    "13 Feb 2024",
    "John Smith"
  ),
  createData(
    13,
    "#EMP013",
    "Jhon Smith",
    "Senior Developer",
    "Male",
    "13 Feb 2024",
    "John Smith"
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
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Emp ID",
  },
  {
    id: "EmpName",
    numeric: false,
    disablePadding: false,
    label: "Emp Name",
  },
  {
    id: "designation",
    numeric: false,
    disablePadding: false,
    label: "Designation",
  },
  {
    id: "gender",
    numeric: false,
    disablePadding: false,
    label: "Gender",
  },
  {
    id: "projectManager",
    numeric: false,
    disablePadding: false,
    label: "Project Manager",
  },
  {
    id: "joiningDate",
    numeric: false,
    disablePadding: false,
    label: "Joining Date",
  },

  {
    id: "projectManager",
    numeric: true,
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

export default function TeamM_ProfileTable() {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("calories");
  const [selected, setSelected] = React.useState<readonly number[]>([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

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
                      {row.name}
                    </TableCell>
                    <TableCell align="left">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          padding: 0,
                        }}
                      >
                        <Avatar
                          alt={row.name}
                          src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" // Replace with the actual path to your profile image
                          sx={{
                            width: 32,
                            height: 32,
                            marginRight: 1,
                            border: "1px solid #000", // Border color and width
                            borderRadius: "50%", // Rounded border
                          }}
                        />
                        {row.EmpName}
                      </Box>
                    </TableCell>
                    <TableCell align="left">{row.designation}</TableCell>
                    <TableCell align="left">{row.gender}</TableCell>
                    <TableCell align="left">{row.projectManager}</TableCell>
                    <TableCell align="left">{row.joiningDate}</TableCell>
                    <TableCell align="center">
                      <Link href={"/TeamMember04"} prefetch>
                        <button
                          className="hover:text-blue-500 text-muted"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <i className="fa fa-eye"></i>
                        </button>
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
