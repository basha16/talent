"use client";
import Upcomings from "@/app/dashboard/component/ProjectManager/Upcomings";
import HeadersTop from "@/app/dashboard/common/HeadersTop";
import Activity from "@/app/dashboard/component/ProjectManager/Activity";
import CalendarProject from "@/app/dashboard/component/ProjectManager/CalendarProject";
import HiringCandidates from "@/app/dashboard/component/ProjectManager/HiringCandidates";
import SideMenu from "@/app/dashboard/component/SideMenu";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import * as React from "react";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import GaugeChart from "react-gauge-chart";
import Link from "next/link";

export default function teamMember03() {
  const Poor = {
    color: "#C7E9FF",
  };
  const Normal = {
    color: "#96DAFF",
  };
  const Medium = {
    color: "#2E94CC",
  };

  const Good = {
    color: "#0A66C2",
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
                <h1>Team Members Profile</h1>
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
                <div className="shadow bg-white mt-4 rounded-3 p-4">
                  <h5 className="text-[24px] Poppins-Medium pb-3 border-bottom">
                    General Information
                  </h5>

                  <div className="row mt-3">
                    <div className="col-lg-4 col-md-4 d-flex">
                      <div className="text-center border w-100 p-3">
                        <img
                          className="w-[150px] h-[150px] object-cover rounded-full"
                          src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                          alt=""
                        />
                        <h6 className="mt-3 text-[22ox]">Senior Developer</h6>
                        <p className="text-gray-600 mt-2">Emp ID: #PY001</p>
                      </div>
                    </div>
                    <div className="col-lg-8 col-md-8 d-flex">
                      <div className="border p-3">
                        <div className="">
                          <h5 className="text-[22px] Poppins-Medium">
                            Jhon Smith
                          </h5>
                          <h6 className="mt-3 text-[14px]">Senior Developer</h6>
                          <p className="text-gray-600 Poppins-Light text-[14px] mt-3">
                            The purpose of lorem ipsum is to create a natural
                            looking block of text (sentence, paragraph, page,
                            etc.) that doesn't distract from the layout. A
                            practice not without controversy
                          </p>
                        </div>
                        <div className="row">
                          <div className="col-lg-4 col-md-5 mt-3">
                            <div className="flex items-center">
                              <PhoneAndroidIcon />
                              <p className="ps-2 Poppins-Regular text-[14px]">
                                +1 2354854878
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-7 mt-3">
                            <div className="flex items-center">
                              <AttachEmailIcon />
                              <p className="ps-2 Poppins-Regular text-[14px]">
                                jhonsmith@gmail.com
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-5 mt-3">
                            <div className="flex items-center">
                              <CalendarMonthIcon />
                              <p className="ps-2 Poppins-Regular text-[14px]">
                                06/09/1990
                              </p>
                            </div>
                          </div>
                          <div className="col-lg-8 col-md-7 mt-3">
                            <div className="flex items-center">
                              <LocationOnIcon />
                              <p className="ps-2 Poppins-Regular text-[14px]">
                                Mr John Smith. 132, My Street, Kingston, New
                                York 12401.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                  <div className="border">
                    <h5 className="text-[24px] Poppins-Medium p-3 border-bottom">
                      Interview Performance and Resume
                    </h5>

                    <div className="row">
                      <div className="col-lg-4 border-end p-3">
                        <GaugeChart
                          colors={["#C7E9FF", "#96DAFF", "#2E94CC", "#0A66C2"]}
                          id="gauge-chart4"
                          arcsLength={[0.3, 0.3, 0.3, 0.3]}
                          percent={0.37}
                          arcPadding={0.02}
                          nrOfLevels={4}
                          needleColor="#2D2C73"
                          needleBaseColor="#2D2C73"
                          hideText={true}
                          className="mt-5"
                          arcWidth={0.6}
                          cornerRadius={0}
                        />
                        <div className="d-flex justify-content-center">
                          <div className="px-[4px!important] text-[11px] mx-1 mt-2 d-flex align-items-center">
                            <i
                              className="fa fa-square mr-1"
                              aria-hidden="true"
                              style={Poor}
                            ></i>{" "}
                            Poor
                          </div>
                          <div className="px-[4px!important] text-[11px] mx-1 mt-2 d-flex align-items-center">
                            <i
                              className="fa fa-square mr-1"
                              aria-hidden="true"
                              style={Normal}
                            ></i>{" "}
                            Normal
                          </div>
                          <div className="px-[4px!important] text-[11px] mx-1 mt-2 d-flex align-items-center">
                            <i
                              className="fa fa-square mr-1"
                              aria-hidden="true"
                              style={Medium}
                            ></i>{" "}
                            Medium
                          </div>
                          <div className="px-[4px!important] text-[11px] mx-1 mt-2 d-flex align-items-center">
                            <i
                              className="fa fa-square mr-1"
                              aria-hidden="true"
                              style={Good}
                            ></i>{" "}
                            Good
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8 px-4 py-3">
                        <table className="">
                          <tr>
                            <td className="p-2 text-[#3E3E3E]">Interviewer</td>
                            <td className="p-2 text-[#3E3E3E]">John Smith</td>
                          </tr>

                          <tr>
                            <td className="p-2 text-[#3E3E3E]">Position</td>
                            <td className="p-2 text-[#3E3E3E]">
                              Python Developer
                            </td>
                          </tr>

                          <tr>
                            <td className="p-2 text-[#3E3E3E]">Experience</td>
                            <td className="p-2 text-[#3E3E3E]">4 Years</td>
                          </tr>

                          <tr>
                            <td className="p-2 text-[#3E3E3E]">
                              Reporting Manager
                            </td>
                            <td className="p-2 text-[#3E3E3E]">Johnsmith</td>
                          </tr>

                          <tr>
                            <td className="p-2 text-[#3E3E3E]">Department</td>
                            <td className="p-2 text-[#3E3E3E]">XYZ</td>
                          </tr>
                          <tr>
                            <td className="p-2 text-[#3E3E3E]">Resume</td>

                            <td className="p-2 text-[#3E3E3E]">
                              Johnsmith_resume.pdf
                            </td>
                          </tr>
                        </table>
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
    </section>
  );
}
