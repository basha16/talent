"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import GaugeChart from "react-gauge-chart";
import Upcomings from "@/app/dashboard/component/ProjectManager/Upcomings";
import Activity from "@/app/dashboard/component/ProjectManager/Activity";
import CalendarProject from "@/app/dashboard/component/ProjectManager/CalendarProject";
import HiringCandidates from "@/app/dashboard/component/ProjectManager/HiringCandidates";
import SideMenu from "@/app/dashboard/component/SideMenu";

import TotalEmployeesGraph from "@/app/dashboard/component/ProjectManager/TotalEmployeesGraph";
import { GET_CANDIDATE_DETAILS_API } from "@/utils/API";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function CandidatesStatus3({ params }: any) {


  const getCandidateDetails = async () => {
    const response = await GET_CANDIDATE_DETAILS_API(params?.id)
    console.log(response)
  }

  useEffect(() => {
    getCandidateDetails();
  }, [])
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

  const TotalMarks = {
    color: "#0B74AD",
  };
  const None = {
    color: "#E6E6E6",
  };


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
              <div className="col-lg-8 mx-auto">
                <div className="shadow bg-white mt-4 rounded-3 p-3">
                  <div className="flex justify-between items-center border-bottom pb-3">
                    <h2 className="text-[22px] Poppins-Medium">
                      Interview Candidate Status
                    </h2>
                    <a
                      className="btn btn-blue w-[30px] h-[30px!important] !rounded-[50%] p-0 align-items-center justify-content-center leading-[28px!important]"
                      href="/"
                    >
                      <i className="fa fa-close"></i>
                    </a>
                  </div>

                  <div className="border-t border-l border-b border-r border-[#0B74AD] rounded mt-4">
                    <div className="row mx-0">
                      <div className="col-lg-7 px-0  lg:border-r  border-[#0B74AD]">
                        <table className="table h-100">
                          <tr>
                            <th className="px-3 py-2 text-[#0A66C2]  border-b border-r border-[#0B74AD] text-center">
                              Details #1
                            </th>
                            <th className="px-3 py-2 text-[#0A66C2] border-b border-[#0B74AD] text-center">
                              Details #2
                            </th>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 lg:border-r  border-[#0B74AD]">
                              Candidate Name:
                            </td>
                            <td className="px-3 py-2">John Smith</td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 lg:border-r  border-[#0B74AD]">
                              Applied Position:
                            </td>
                            <td className="px-3 py-2">
                              Senior Python Developer
                            </td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 lg:border-r  border-[#0B74AD]">
                              Interviewer Name:
                            </td>
                            <td className="px-3 py-2 ">Stella</td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 lg:border-r  border-[#0B74AD]">
                              Applied Portal:
                            </td>
                            <td className="px-3 py-2">LinkedIn</td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 lg:border-r  border-[#0B74AD]">
                              Application Received Date:
                            </td>
                            <td className="px-3 py-2">05 Jul 2023</td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 lg:border-r  border-[#0B74AD]">
                              1st Level:
                            </td>
                            <td className="px-3 py-2">
                              <span className="text-blue p-0 border-bottom-0">
                                7/10
                              </span>
                              , Time: 20 Mins
                            </td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 lg:border-r  border-[#0B74AD]">
                              2nd Level:
                            </td>
                            <td className="px-3 py-2">
                              <span className="text-blue p-0 border-bottom-0">
                                6/10
                              </span>
                              , Time: 20 Mins
                            </td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 lg:border-r  border-[#0B74AD]">
                              3rd Level:
                            </td>
                            <td className="px-3 py-2">
                              <span className="text-blue p-0  border-bottom-0">
                                3/10
                              </span>
                              , Time: 25 Mins
                            </td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 lg:border-r  border-[#0B74AD]">
                              Status:
                            </td>
                            <td className="px-3 py-2 text-[#F5C961]">Active</td>
                          </tr>
                          <tr>
                            <td className="px-3 py-2 lg:border-r  border-[#0B74AD]">
                              ....
                            </td>
                            <td className="px-3 py-2">....</td>
                          </tr>
                        </table>
                      </div>
                      <div className="col-lg-5 px-0 text-center Details ">
                        <table className="table">
                          <tr>
                            <th className="px-3 py-[13px] text-[#0A66C2] border-b border-[#0B74AD] text-center">
                              Details #3
                            </th>
                          </tr>
                          <tr>
                            <td className="py-4 px-3">
                              <div className="text-center w-100">
                                <div className="w-[180px] mx-auto">
                                  <TotalEmployeesGraph
                                    totalEmloyeesCount={16}
                                    height={100}
                                    width={100}
                                    count={2}
                                    color={"#0B74AD"}
                                    className=" dddddddddd"
                                  />
                                </div>
                                <div className="d-flex justify-content-center">
                                  <div className="mx-2 px-[4px!important] text-[15px]"> <i
                                    className="fa fa-square"
                                    aria-hidden="true"
                                    style={TotalMarks}
                                  ></i>{" "}
                                    Total Marks</div>
                                  <div className="mx-2 px-[4px!important] text-[15px]">
                                    <i
                                      className="fa fa-square"
                                      aria-hidden="true"
                                      style={None}
                                    ></i>{" "}
                                    None
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td className=" border-t border-[#0B74AD] ">
                              <div className="col-lg-10 mx-auto">
                                <GaugeChart
                                  colors={[
                                    "#C7E9FF",
                                    "#96DAFF",
                                    "#2E94CC",
                                    "#0A66C2",
                                  ]}
                                  id="gauge-chart4"
                                  arcsLength={[0.3, 0.3, 0.3, 0.3]}
                                  percent={0.37}
                                  arcPadding={0.02}
                                  nrOfLevels={4}
                                  needleColor="#2D2C73"
                                  needleBaseColor="#2D2C73"
                                  hideText={true}
                                  className="mt-2"
                                  arcWidth={0.6}
                                  cornerRadius={0}
                                />
                                <div className="d-flex justify-content-center">
                                  <div className="px-[4px!important] text-[15px] mx-1 mt-2 d-flex align-items-center">
                                    <i
                                      className="fa fa-square mr-1"
                                      aria-hidden="true"
                                      style={Poor}
                                    ></i>{" "}
                                    Poor
                                  </div>
                                  <div className="px-[4px!important] text-[15px] mx-1 mt-2 d-flex align-items-center">
                                    <i
                                      className="fa fa-square mr-1"
                                      aria-hidden="true"
                                      style={Normal}
                                    ></i>{" "}
                                    Normal
                                  </div>
                                  <div className="px-[4px!important] text-[15px] mx-1 mt-2 d-flex align-items-center">
                                    <i
                                      className="fa fa-square mr-1"
                                      aria-hidden="true"
                                      style={Medium}
                                    ></i>{" "}
                                    Medium
                                  </div>
                                  <div className="px-[4px!important] text-[15px] mx-1 mt-2 d-flex align-items-center">
                                    <i
                                      className="fa fa-square mr-1"
                                      aria-hidden="true"
                                      style={Good}
                                    ></i>{" "}
                                    Good
                                  </div>
                                </div>
                              </div>
                            </td>
                          </tr>

                          <td></td>
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

export default CandidatesStatus3;
