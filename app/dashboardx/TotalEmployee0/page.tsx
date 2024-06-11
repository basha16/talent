"use client";
import Upcomings from "@/app/dashboard/component/ProjectManager/Upcomings";
import HeadersTop from "@/app/dashboard/common/HeadersTop";
import Activity from "@/app/dashboard/component/ProjectManager/Activity";
import CalendarProject from "@/app/dashboard/component/ProjectManager/CalendarProject";
import HiringCandidates from "@/app/dashboard/component/ProjectManager/HiringCandidates";
import SideMenu from "@/app/dashboard/component/SideMenu";

import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import FilterListIcon from "@mui/icons-material/FilterList";

import TeamCards from "./TeamCards";
import Link from "next/link";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function TotalEmployee0(_params: type) {
  useEffect(() => {}, []);

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

  //tabls Team Members
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
  const [value, tabsTeamMembers] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    tabsTeamMembers(newValue);
  };

  //tabs Team Members end

  return (
    <section className="">
      {/* ... rest of your component code */}

      <div className="container-fluid my-md-5 my-4">
        <div className="row">
          {/* <div className="col-lg-1 leftMenuWidth ps-0 position-relative">
                        <SideMenu /> 
                    </div>*/}

          <div className="col-lg-11 pe-lg-4 ps-lg-0">
            <div className="row justify-content-between  align-items-center">
              <div className="col-lg-8 projectText">
                <h1>Teams</h1>
                <p className="mt-3">
                  Enjoy your selecting potential candidates Tracking and
                  Management System.
                </p>
              </div>

              <div className="col-lg-4 mt-3 mt-lg-0 text-start text-lg-end">
                <Link
                  prefetch
                  href="/P_M_JobDescriptions1"
                  className="btn btn-light me-3 mx-lg-2"
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
                  <Box sx={{ width: "100%" }}>
                    <div className="row justify-between align-items-center p-3">
                      <div className="col-md-5 col-12 col-lg-5 d-flex align-items-center  mb-3 mb-md-0 ">
                        {/* <h4 className="small_historyText">History</h4> */}
                        <Box>
                          <Tabs
                            value={value}
                            onChange={handleChange}
                            aria-label="basic tabs example"
                            className="totalEmployeeTab"
                          >
                            <Tab label="Team Members" {...a11yProps(0)} />
                            <Tab
                              label="Number of Vaccanices"
                              {...a11yProps(1)}
                            />
                          </Tabs>
                        </Box>
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
                  </Box>

                  <div className="">
                    <CustomTabPanel value={value} index={0}>
                      <TeamCards />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                      <TeamCards />
                    </CustomTabPanel>
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

export default TotalEmployee0;
