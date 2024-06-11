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
import * as React from "react";
import TicketTable from "./TicketTable";

export default function P_M_HelpDeskSupport() {
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
                <button className="btn btn-blue bg-[#0a66c2!important]">
                  Create Ticket
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-9">
                <div className="shadow bg-white mt-4 rounded-3 pb-3">
                  <div className="row justify-between align-items-center p-3">
                    <div className="col-md-5 col-12 col-lg-5 d-flex align-items-center  mb-3 mb-md-0 ">
                      <h4 className="small_historyText">Ticket List</h4>
                      <Link href="/" className="mx-4" prefetch>
                        <img src="image/edit.png" alt="" className="h-[24px]" />
                      </Link>
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
                    <TicketTable />
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
