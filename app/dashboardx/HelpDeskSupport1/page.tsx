"use client";
import Upcomings from "@/app/dashboard/component/ProjectManager/Upcomings";
import Activity from "@/app/dashboard/component/ProjectManager/Activity";
import CalendarProject from "@/app/dashboard/component/ProjectManager/CalendarProject";
import HiringCandidates from "@/app/dashboard/component/ProjectManager/HiringCandidates";
import SideMenu from "@/app/dashboard/component/SideMenu";
import Link from "next/link";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FilterListIcon from "@mui/icons-material/FilterList";

import * as React from "react";
import TicketTable from "./TicketTable";

import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CreateTicketModal from "./CreateTicketModal";
import { useDispatch, useSelector } from "react-redux";
import { dashboardSelector, getTicketList } from "@/store/reducers/dashboard";

export default function CandidatesStatus0() {
  // filter btn
  const [filterBtn, setfilterBtn] = React.useState<null | HTMLElement>(null);

  const dispatch = useDispatch()
  const dashboardData = useSelector(dashboardSelector)


  React.useEffect(() => {
    dispatch(getTicketList())
  }, [])

  const open = Boolean(filterBtn);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setfilterBtn(event.currentTarget);
  };
  const handleClose = () => {
    setfilterBtn(null);
  };
  // filter btn end

  // calendar filter js start
  const [isCalendarVisible, setCalendarVisible] = React.useState(false);

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };
  // calendar filter js end

  // ticketModal

  const [openTicketListModal, setTicketList] = React.useState(false);
  const Ticket_ListOpenModal = () => setTicketList(true);
  const handleTicketModalClose = () => setTicketList(false);

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
                <h1>Help Desk Support</h1>
                <p className="mt-3">
                  Enjoy your selecting potential candidates Tracking and
                  Management System.
                </p>
              </div>

              <div className="col-lg-4 mt-3 mt-lg-0 text-start text-lg-end">
                <button
                  onClick={Ticket_ListOpenModal}
                  className="btn btn-blue bg-[#0a66c2!important]"
                >
                  Create Ticket
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-9">
                <div className="shadow bg-white mt-4 rounded-3 pb-3">
                  <div className="row justify-between align-items-center p-3">
                    <div className="col-md-5 col-12 col-lg-5 d-flex align-items-center  mb-3 mb-md-0 ">
                      <h4 className="small_historyText">
                        Ticket List{" "}
                        {/* <button
                          className="btn-blue px-1"
                          onClick={Ticket_ListOpenModal}
                        >
                          openmodal
                        </button> */}
                      </h4>
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
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </Menu>
                    </div>
                  </div>

                  <div className="p-3">
                    <TicketTable dashboardData={dashboardData} />
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

      <Modal
        open={openTicketListModal}
        onClose={handleTicketModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="customModal shadow bg-white mt-4 rounded-3 pb-3 col-lg-7">
          <div className="d-flex justify-content-between mb-3 align-items-center ">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <h4 className="small_historyText">Create Ticket</h4>
            </Typography>
            <button onClick={handleTicketModalClose}>
              <img className="h-[30px]" src="image/closeModal.png" alt="" />
            </button>
          </div>
          <CreateTicketModal />
        </Box>
      </Modal>
    </section>
  );
}
