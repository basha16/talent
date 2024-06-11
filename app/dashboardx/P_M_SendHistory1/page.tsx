"use client";
import Upcomings from "@/app/dashboard/component/ProjectManager/Upcomings";
import HeadersTop from "@/app/dashboard/common/HeadersTop";
import Activity from "@/app/dashboard/component/ProjectManager/Activity";
import CalendarProject from "@/app/dashboard/component/ProjectManager/CalendarProject";
import HiringCandidates from "@/app/dashboard/component/ProjectManager/HiringCandidates";
import SideMenu from "@/app/dashboard/component/SideMenu";

import Link from "next/link";
import DateRangeIcon from "@mui/icons-material/DateRange";
import React, { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";
import AlarmOnIcon from "@mui/icons-material/AlarmOn";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

// table data
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Frozen yoghurt",
    "10.15 A.M",
    "Python developer job descriptions",
    "Python developers are professionals who specialize in using the Python programming......",
    4.0
  ),
  createData(
    "Frozen yoghurt",
    "10.15 A.M",
    "Python developer job descriptions",
    "Python developers are professionals who specialize in using the Python programming......",
    4.0
  ),
  createData(
    "Frozen yoghurt",
    "10.15 A.M",
    "Python developer job descriptions",
    "Python developers are professionals who specialize in using the Python programming......",
    4.0
  ),
  createData(
    "Frozen yoghurt",
    "10.15 A.M",
    "Python developer job descriptions",
    "Python developers are professionals who specialize in using the Python programming......",
    4.0
  ),
  createData(
    "Frozen yoghurt",
    "10.15 A.M",
    "Python developer job descriptions",
    "Python developers are professionals who specialize in using the Python programming......",
    4.0
  ),
  createData(
    "Frozen yoghurt",
    "10.15 A.M",
    "Python developer job descriptions",
    "Python developers are professionals who specialize in using the Python programming......",
    4.0
  ),
  createData(
    "Frozen yoghurt",
    "10.15 A.M",
    "Python developer job descriptions",
    "Python developers are professionals who specialize in using the Python programming......",
    4.0
  ),
  createData(
    "Frozen yoghurt",
    "10.15 A.M",
    "Python developer job descriptions",
    "Python developers are professionals who specialize in using the Python programming......",
    4.0
  ),
  createData(
    "Frozen yoghurt",
    "10.15 A.M",
    "Python developer job descriptions",
    "Python developers are professionals who specialize in using the Python programming......",
    4.0
  ),
];
// table data end

function P_M_SendHistory1(params: type) {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const handleRowSelection = (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => {
    if (event.target.checked) {
      setSelectedRows((prevSelectedRows) => [...prevSelectedRows, name]);
    } else {
      setSelectedRows((prevSelectedRows) =>
        prevSelectedRows.filter((rowName) => rowName !== name)
      );
    }
  };

  // dropdown menu
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // end

  const today = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <section className="">
      {/* ... rest of your component code */}

      <div className="container-fluid my-md-5 my-4">
        <div className="row">
          <div className="col-lg-1 leftMenuWidth ps-0 position-relative">
            <SideMenu />
          </div>

          <div className="col-lg-11 pe-lg-4 ps-lg-0">
            <div className="row justify-content-between  align-items-center">
              <div className="col-lg-8 projectText">
                <h1>Job Descriptions</h1>
                <p className="mt-3">
                  Enjoy your selecting potential candidates Tracking and
                  Management System.
                </p>
              </div>

              <div className="col-lg-4 mt-3 mt-lg-0 text-start text-lg-end">
                <Link
                  href="/P_M_JobDescriptions1"
                  className="btn btn-light me-3 mx-lg-2"
                  prefetch
                >
                  JD Assets
                </Link>
                <Link
                  prefetch
                  href="P_M_JobDescriptions4"
                  className="btn btn-blue"
                >
                  Create New JD
                </Link>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-9">
                <div className="shadow bg-white mt-4 rounded-3 pb-3">
                  <div className="row justify-between align-items-center p-3">
                    <div className="col-md-5 col-12 col-lg-5 d-flex align-items-center  mb-3 mb-md-0 ">
                      <h4 className="small_historyText">History</h4>
                      <h6 className="ms-4">
                        <Link
                          prefetch
                          className="text-blue text-[14px]"
                          href="/P_M_SendHistory1"
                        >
                          Job Descriptions Assets
                        </Link>
                        {/* <Link href="/" prefetch> */}
                        {selectedRows.length > 0 && (
                          <DeleteIcon className="text-red-500 mx-2" />
                        )}
                        {/* </Link> */}
                      </h6>
                    </div>

                    <div className="col-md-5 col-8 col-lg-5 ms-auto ps-lg-5">
                      <div className="position-relative PostedInput">
                        <input
                          className="form-control border-0 rouned-2"
                          type="text"
                          placeholder="Search......."
                        />
                        <button className="PostedSearch p-0">
                          {" "}
                          <img src="image/search.png" alt="" />
                        </button>
                      </div>
                    </div>

                    <div className="col-lg-2 col-4 col-md-2 text-end">
                      <button
                        className="text-blue hover:text-white align-items-center shadow btn btn-white px-1 px-md-3 w-100 w-lg-auto d-flex text-center justify-center"
                        id="basic-button"
                      >
                        <DateRangeIcon className="" /> Date Filter
                      </button>
                    </div>
                  </div>

                  <div className="p-3 m-3 shadow">
                    <TableContainer className="shadow-none" component={Paper}>
                      <Table
                        className="historyTable"
                        sx={{ minWidth: 650 }}
                        aria-label="simple table"
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell>
                              <Checkbox {...label} defaultChecked />
                            </TableCell>
                            <TableCell colSpan={2} align="left">
                              Today - {formattedDate}
                            </TableCell>
                            <TableCell align="left"></TableCell>
                            <TableCell align="center">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {rows.map((row) => (
                            <TableRow
                              key={row.name}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell align="left" scope="row">
                                {/* <Checkbox {...label} /> */}
                                <Checkbox
                                  {...label}
                                  checked={selectedRows.includes(row.name)}
                                  onChange={(event) =>
                                    handleRowSelection(event, row.name)
                                  }
                                />
                              </TableCell>
                              <TableCell className="w-[150px]" align="left">
                                <AlarmOnIcon className="text-[15px] me-1" />
                                {row.calories}
                              </TableCell>
                              <TableCell align="left">{row.fat}</TableCell>
                              <TableCell align="left">{row.carbs}</TableCell>
                              <TableCell align="center">
                                <Button
                                  id="basic-button"
                                  aria-controls={
                                    open ? "basic-menu" : undefined
                                  }
                                  aria-haspopup="true"
                                  aria-expanded={open ? "true" : undefined}
                                  onClick={handleClick}
                                  className="text-dark"
                                >
                                  <i
                                    className="fa fa-ellipsis-v"
                                    aria-hidden="true"
                                  ></i>
                                </Button>
                                <Menu
                                  className="tableMenuBtn"
                                  id="basic-menu"
                                  anchorEl={anchorEl}
                                  open={open}
                                  onClose={handleClose}
                                  MenuListProps={{
                                    "aria-labelledby": "basic-button",
                                  }}
                                >
                                  <MenuItem onClick={handleClose}>
                                    Demo 1
                                  </MenuItem>
                                  <MenuItem onClick={handleClose}>
                                    Demo 1
                                  </MenuItem>
                                  <MenuItem onClick={handleClose}>
                                    Demo 1
                                  </MenuItem>
                                </Menu>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-12 mt-4">
                <div className="overflow-hidden d-flex justify-center">
                  <CalendarProject />
                </div>
                <div className="mt-5">
                  <Upcomings />
                </div>

                <div className="mt-5">
                  <Activity />
                </div>

                <div className="mt-5">
                  <HiringCandidates />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default P_M_SendHistory1;
