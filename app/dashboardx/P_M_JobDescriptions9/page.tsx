"use client";
import Upcomings from "@/app/dashboard/component/ProjectManager/Upcomings";
import HeadersTop from "@/app/dashboard/common/HeadersTop";
import Activity from "@/app/dashboard/component/ProjectManager/Activity";
import CalendarProject from "@/app/dashboard/component/ProjectManager/CalendarProject";
import HiringCandidates from "@/app/dashboard/component/ProjectManager/HiringCandidates";
import SideMenu from "@/app/dashboard/component/SideMenu";
import * as React from "react";
import Link from "next/link";
import Checkbox from "@mui/material/Checkbox";
import HistoryTab from "@/app/dashboard/component/ProjectManager/HistoryTab";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

function P_M_JobDescriptions9(params: type) {
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
                <button className="btn btn-light me-3 mx-lg-2">
                  JD Assets
                </button>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-9">
                <div className="shadow bg-white mt-4 rounded-3 pb-3">
                  <div className="row justify-between align-items-center p-3">
                    <div className="col-md-7 col-12 col-lg-7 d-flex align-items-center  mb-3 mb-md-0 ">
                      <h4 className="small_historyText">
                        Job Descriptions ChatBot
                      </h4>
                      <h6 className="ms-4">
                        <Link
                          prefetch
                          className="text-blue text-[14px]"
                          href="/P_M_SendHistory1"
                        >
                          History
                        </Link>
                      </h6>
                    </div>

                    <div className="col-md-5 col-12 col-lg-5 ms-auto ps-lg-5">
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
                  </div>

                  <div className="row mt-3">
                    <div className="col-lg-3 col-md-4">
                      <HistoryTab />
                    </div>

                    <div className="col-lg-9 col-md-8">
                      <div className="bg-[#F9F9F9] h-100 px-3 py-4 mx-3 flex align-center">
                        <div className=" bg-white col-lg-10 col-xl-9 m-auto p-3">
                          <div className="flex justify-between items-center border-bottom mb-4 pb-3">
                            <h2 className="text-[18px] Poppins-Medium">
                              Share Via Talent Acquisition JD Board
                            </h2>
                            <Link
                              href="/"
                              prefetch
                              className="btn btn-blue w-[30px] h-[30px!important] !rounded-[50%] p-0 align-items-center justify-content-center leading-[28px!important]"
                            >
                              {" "}
                              <i className="fa fa-close"></i>
                            </Link>
                          </div>

                          <div className="blueBorder rounded px-3">
                            <div className="row items-center py-3">
                              <div className="col-2 items-center">
                                <img
                                  className="h-[50px] w-[50px] rounded-full object-cover"
                                  src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                                  alt=""
                                />
                              </div>

                              <div className="col-7">
                                <p className="text-16px">HR Manager 1</p>
                              </div>

                              <div className="col-3 text-end">
                                <Checkbox {...label} />
                              </div>
                            </div>

                            <div className="row items-center py-3">
                              <div className="col-2 items-center">
                                <img
                                  className="h-[50px] w-[50px] rounded-full object-cover"
                                  src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                                  alt=""
                                />
                              </div>

                              <div className="col-7">
                                <p className="text-16px">HR Manager 1</p>
                              </div>

                              <div className="col-3 text-end">
                                <Checkbox {...label} />
                              </div>
                            </div>

                            <div className="row items-center py-3">
                              <div className="col-2 items-center">
                                <img
                                  className="h-[50px] w-[50px] rounded-full object-cover"
                                  src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg"
                                  alt=""
                                />
                              </div>

                              <div className="col-7">
                                <p className="text-16px">HR Manager 1</p>
                              </div>

                              <div className="col-3 text-end">
                                <Checkbox {...label} />
                              </div>
                            </div>
                          </div>

                          <div className="mt-4 flex justify-center">
                            <Link
                              prefetch
                              href="/P_M_JobDescriptions10"
                              className="btn btn-blue px-3  w-[100px]"
                            >
                              SEND
                            </Link>
                          </div>
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
    </section>
  );
}

export default P_M_JobDescriptions9;
