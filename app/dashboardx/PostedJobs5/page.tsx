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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// calendar filter
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import PostedJobsCard from "@/app/dashboard/component/ProjectManager/PostedJobsCard";

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

export default function PostedJobs5() {
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

  // Define an array of data objects representing each card's content
  const jobsData = [
    {
      title: "Python Developer",
      category: "Senior Developers",
      number: "303",
      percentage: "22%",
      time: "6 mins ago",
      imageSrc: "image/python.png",
      bgColor: "#D9E4EF",
    },
    {
      title: "Angular Developers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/Angularicon.png",
      bgColor: "#73A1FB",
    },

    {
      title: "Java Developers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/graphic.png",
      bgColor: "#2F73A0",
    },
    {
      title: "UX|UI Designers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/java.png",
      bgColor: "#D6D6D6",
    },

    {
      title: "Python Developer",
      category: "Senior Developers",
      number: "303",
      percentage: "22%",
      time: "6 mins ago",
      imageSrc: "image/python.png",
      bgColor: "#5E6A72",
    },
    {
      title: "Angular Developers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/Angularicon.png",
      bgColor: "#294A61",
    },

    {
      title: "Java Developers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/graphic.png",
      bgColor: "#093452",
    },
    {
      title: "UX|UI Designers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/java.png",
      bgColor: "#5E6A72",
    },
    {
      title: "Python Developer",
      category: "Senior Developers",
      number: "303",
      percentage: "22%",
      time: "6 mins ago",
      imageSrc: "image/python.png",
      bgColor: "#D9E4EF",
    },
    {
      title: "Angular Developers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/Angularicon.png",
      bgColor: "#73A1FB",
    },

    {
      title: "Java Developers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/graphic.png",
      bgColor: "#2F73A0",
    },
    {
      title: "UX|UI Designers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/java.png",
      bgColor: "#D6D6D6",
    },

    {
      title: "Python Developer",
      category: "Senior Developers",
      number: "303",
      percentage: "22%",
      time: "6 mins ago",
      imageSrc: "image/python.png",
      bgColor: "#5E6A72",
    },
    {
      title: "Angular Developers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/Angularicon.png",
      bgColor: "#294A61",
    },

    {
      title: "Java Developers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/graphic.png",
      bgColor: "#093452",
    },
    {
      title: "UX|UI Designers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/java.png",
      bgColor: "#5E6A72",
    },
    {
      title: "Python Developer",
      category: "Senior Developers",
      number: "303",
      percentage: "22%",
      time: "6 mins ago",
      imageSrc: "image/python.png",
      bgColor: "#D9E4EF",
    },
    {
      title: "Angular Developers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/Angularicon.png",
      bgColor: "#73A1FB",
    },

    {
      title: "Java Developers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/graphic.png",
      bgColor: "#2F73A0",
    },
    {
      title: "UX|UI Designers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/java.png",
      bgColor: "#D6D6D6",
    },

    {
      title: "Python Developer",
      category: "Senior Developers",
      number: "303",
      percentage: "22%",
      time: "6 mins ago",
      imageSrc: "image/python.png",
      bgColor: "#5E6A72",
    },
    {
      title: "Angular Developers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/Angularicon.png",
      bgColor: "#294A61",
    },

    {
      title: "Java Developers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/graphic.png",
      bgColor: "#093452",
    },
    {
      title: "UX|UI Designers",
      category: "Senior Developers",
      number: "250",
      percentage: "18%",
      time: "8 mins ago",
      imageSrc: "image/java.png",
      bgColor: "#5E6A72",
    },

    // Add more job data objects as needed
  ];

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
                <h1>Jobs</h1>
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
                      <h4 className="small_historyText">Posted Your Jobs</h4>
                      <Link href="/" className="mx-4" prefetch>
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
                        <MenuItem onClick={handleClose}>Today</MenuItem>
                        <MenuItem onClick={handleClose}>Week</MenuItem>
                        <MenuItem onClick={handleClose}>Month</MenuItem>
                      </Menu>
                    </div>

                    <div className="mt-3">
                      <Box className="requesttableTabs" sx={{ width: "100%" }}>
                        <div className="row border-b">
                          <div className="col-lg-9">
                            <Box>
                              <Tabs
                                value={value}
                                onChange={handleChange}
                                aria-label="basic tabs example"
                              >
                                <Tab label="Active Jobs" {...a11yProps(0)} />
                                <Tab label="Pending Jobs" {...a11yProps(1)} />
                              </Tabs>
                            </Box>
                          </div>
                        </div>
                        <CustomTabPanel className="p-0" value={value} index={0}>
                          <div className="row pb-3">
                            {jobsData.map((job, index) => (
                              <PostedJobsCard key={index} {...job} />
                            ))}
                          </div>
                        </CustomTabPanel>
                        <CustomTabPanel value={value} index={1}>
                          <div className="row pb-3">
                            {jobsData.map((job, index) => (
                              <PostedJobsCard key={index} {...job} />
                            ))}
                          </div>
                        </CustomTabPanel>
                      </Box>
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
    </section>
  );
}
