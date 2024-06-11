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

const label = { inputProps: { "aria-label": "Checkbox demo" } };
import * as React from "react";

import CandidateStatustable from "./CandidateStatustable";

export default function JobApplication0() {
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

  // calendar filter js start
  const [isCalendarVisible, setCalendarVisible] = React.useState(false);

  const toggleCalendar = () => {
    setCalendarVisible(!isCalendarVisible);
  };
  // calendar filter js end

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
                <h1>Candidate Status</h1>
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
              <div className="col-lg-12">
                <div className="shadow bg-white mt-4 rounded-3 pb-3">
                  <div className="row justify-between align-items-center p-3">
                    <div className="col-md-5 col-12 col-lg-5 d-flex align-items-center  mb-3 mb-md-0 ">
                      <h4 className="small_historyText">
                        Candidate Statust List
                      </h4>

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
                        <MenuItem onClick={handleClose}>ID #001</MenuItem>
                        <MenuItem onClick={handleClose}>ID #002</MenuItem>
                        <MenuItem onClick={handleClose}>ID #003</MenuItem>
                        <MenuItem onClick={handleClose}>ID #004</MenuItem>
                        <MenuItem onClick={handleClose}>ID #005</MenuItem>
                        <MenuItem onClick={handleClose}>ID #006</MenuItem>
                      </Menu>
                    </div>

                    <div className="mt-5">
                      <CandidateStatustable />

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


            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
