"use client";
import Upcomings from "@/app/dashboard/component/ProjectManager/Upcomings";
import HeadersTop from "@/app/dashboard/common/HeadersTop";
import Activity from "@/app/dashboard/component/ProjectManager/Activity";
import CalendarProject from "@/app/dashboard/component/ProjectManager/CalendarProject";
import HiringCandidates from "@/app/dashboard/component/ProjectManager/HiringCandidates";
import SideMenu from "@/app/dashboard/component/SideMenu";
import Link from "next/link";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FilterListIcon from "@mui/icons-material/FilterList";

const label = { inputProps: { "aria-label": "Checkbox demo" } };
import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import RequestBoard from "@/app/dashboard/component/ProjectManager/RequestBoardTable";
// calendar filter
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

// modal start
import Modal from "@mui/material/Modal";
// modal end

// tabs code start
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function P_M_RequestStatus1() {
  // modal are you sure
  const [ModalAreYouopen, setOpenAreYou] = React.useState(false);
  const modalareYouSure = () => setOpenAreYou(true);
  const handleCloseAreYouSure = () => setOpenAreYou(false);
  //end modal are you sure

  // filter btn
  const [filterBtn, setfilterBtn] = React.useState<null | HTMLElement>(null);
  const open = Boolean(filterBtn);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setfilterBtn(event.currentTarget);
  };
  const handleClose = () => {
    setfilterBtn(null);
  };
  // filter btn end

  // tabls code start
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  //tabs end

  // calendar filter js start
  const [isCalendarVisible, setCalendarVisible] = React.useState(false);

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };
  // calendar filter js end

  const [selectedRows, setSelectedRows] = useState<string[]>([]); // State for selected rows

  const handleRowSelection = (selectedItems: any[]) => {
    setSelectedRows(selectedItems.map((item) => item.id)); // Update selectedRows with selected items' IDs
  };

  const handleDelete = () => {
    // Implement your delete functionality here, using the selectedRows state
    console.log("Delete button clicked for selected rows:", selectedRows);
  };

  return (
    <section className="">
      <div className="container-fluid my-md-5 my-4">
        <div className="row">
          <div className="col-lg-1 leftMenuWidth ps-0 position-relative">
            <SideMenu />
          </div>

          <div className="col-lg-11 pe-lg-4 ps-lg-0">
            <div className="row justify-content-between  align-items-center">
              <div className="col-lg-8 projectText">
                <h1>Team Expansion Request Board</h1>
                <p className="mt-3">
                  Enjoy your selecting potential candidates Tracking and
                  Management System.
                </p>
              </div>

              <div className="col-lg-4 mt-3 mt-lg-0 text-start text-lg-end">
                <button className="btn btn-blue bg-[#0a66c2!important]">
                  Assign Tasks
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-9">
                <div className="shadow bg-white mt-4 rounded-3 pb-3">
                  <div className="row justify-between align-items-center p-3">
                    <div className="col-md-5 col-12 col-lg-5 d-flex align-items-center  mb-3 mb-md-0 ">
                      <h4 className="small_historyText">TL Requests</h4>
                      <Link href="/" prefetch className="mx-4">
                        <img src="image/edit.png" alt="" className="h-[24px]" />
                      </Link>

                      <div>
                        <button
                          type="button"
                          onClick={toggleCalendar}
                          className="mx-2"
                        >
                          <img
                            src="image/calendar.png"
                            alt=""
                            className="h-[24px]"
                          />
                        </button>

                        {isCalendarVisible && (
                          <div className="caledarFilter">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DemoContainer
                                components={[
                                  "DatePicker",
                                  "MobileDatePicker",
                                  "DesktopDatePicker",
                                  "StaticDatePicker",
                                ]}
                              >
                                <DemoItem label="Form :">
                                  <DesktopDatePicker
                                    defaultValue={dayjs("2022-04-17")}
                                  />
                                </DemoItem>
                              </DemoContainer>
                            </LocalizationProvider>

                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DemoContainer
                                components={[
                                  "DatePicker",
                                  "MobileDatePicker",
                                  "DesktopDatePicker",
                                  "StaticDatePicker",
                                ]}
                              >
                                <DemoItem label="To :">
                                  <DesktopDatePicker
                                    defaultValue={dayjs("2022-04-17")}
                                  />
                                </DemoItem>
                              </DemoContainer>
                            </LocalizationProvider>

                            <button
                              type="button"
                              className="btn p-0"
                              onClick={toggleCalendar}
                            >
                              <img
                                className="h-[20px]"
                                src="image/calendarnext.png"
                                alt=""
                              />
                            </button>
                          </div>
                        )}
                      </div>
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
                      <Button
                        className="shadow btn btn-white px-1 px-md-3 w-100 w-lg-auto d-flex"
                        id="basic-button"
                        aria-controls={open ? "basic-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? "true" : undefined}
                        onClick={handleClick}
                      >
                        <FilterListIcon /> Filters
                      </Button>

                      <Menu
                        className="filterBtns"
                        id="basic-menu"
                        anchorEl={filterBtn}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          "aria-labelledby": "basic-button",
                        }}
                      >
                        <MenuItem onClick={handleClose}>#EMP001</MenuItem>
                        <MenuItem onClick={handleClose}>#EMP002</MenuItem>
                        <MenuItem onClick={handleClose}>#EMP003</MenuItem>
                      </Menu>
                    </div>

                    <div className="mt-5">
                      <Box className="requesttableTabs" sx={{ width: "100%" }}>
                        <div className="row border-b">
                          {/* Show delete button if any item is selected */}
                          {selectedRows.length > 0 && (
                            <div className="col-lg-3 order-lg-last text-right">
                              <button
                                className=" btn btn-blue btn-sm text-[14px!important]  ms-2"
                                onClick={modalareYouSure}
                              >
                                Approve
                              </button>
                              <button className="btn btnOutlineblue btn-sm text-[14px!important]  ms-2">
                                Reject
                              </button>
                              <button
                                className="btn btn-white btn-sm ms-2 text-red-500 px-1 hover:bg-white p-0"
                                onClick={handleDelete}
                              >
                                <i
                                  className="fa fa-trash fs-5 text-red-500"
                                  aria-hidden="true"
                                ></i>
                              </button>
                            </div>
                          )}
                          <div className="col-lg-9">
                            <Box>
                              <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                              >
                                <Tab label="All [360]" {...a11yProps(0)} />
                                <Tab
                                  label="Processing [178]"
                                  {...a11yProps(1)}
                                />
                                <Tab
                                  label="Completed [108]"
                                  {...a11yProps(2)}
                                />
                                <Tab label="Rejected [28]]" {...a11yProps(3)} />
                              </Tabs>
                            </Box>
                          </div>
                        </div>
                        <CustomTabPanel value={value} index={0}>
                          <RequestBoard
                            handleRowSelection={handleRowSelection}
                          />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                          <RequestBoard />
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={2}>
                          <RequestBoard />
                        </CustomTabPanel>

                        <CustomTabPanel value={value} index={3}>
                          <RequestBoard />
                        </CustomTabPanel>
                      </Box>
                      <div>
                        <div className="text-center">
                          <button
                            className="btn btnOutlineBlack mx-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Previous Page
                          </button>
                          <button
                            className="btn btn-blue mx-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Next Page
                          </button>
                        </div>
                      </div>
                    </div>
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

      {/* Are You Sure ? modal start*/}

      <div>
        <Modal
          className="modalAreYouSure"
          open={ModalAreYouopen}
          onClose={handleCloseAreYouSure}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[700px] w-[400px] bg-white border-1 border-blue-500 shadow-lg p-4">
            <div className="flex justify-between items-center border-bottom mb-4 pb-3">
              <h2 className="text-[24px] Poppins-Medium">Are You Sure ?</h2>
              <button
                onClick={handleCloseAreYouSure}
                className="btn btn-blue w-[30px] h-[30px!important] !rounded-[50%] p-0 align-items-center justify-content-center"
              >
                <i className="fa fa-close"></i>
              </button>
            </div>

            <div className="py-4">
              <Typography
                className="text-center text-[20px]"
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                Move to Job Description
              </Typography>
              <Typography
                className="mt-3"
                id="modal-modal-description"
                sx={{ mt: 2 }}
              >
                <div className="text-center">
                  <button
                    onClick={handleCloseAreYouSure}
                    className="btn btnOutlineBlack mx-2"
                  >
                    NO
                  </button>
                  <button
                    onClick={handleCloseAreYouSure}
                    className="btn btn-blue mx-2"
                  >
                    YES
                  </button>
                </div>
              </Typography>
            </div>
          </Box>
        </Modal>
      </div>
      {/* mdoal end  */}
    </section>
  );
}
