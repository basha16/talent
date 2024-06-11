"use client";
import Upcomings from "@/app/dashboard/component/ProjectManager/Upcomings";
import HeadersTop from "@/app/dashboard/common/HeadersTop";
import Activity from "@/app/dashboard/component/ProjectManager/Activity";
import CalendarProject from "@/app/dashboard/component/ProjectManager/CalendarProject";
import HiringCandidates from "@/app/dashboard/component/ProjectManager/HiringCandidates";
import SideMenu from "@/app/dashboard/component/SideMenu";
import * as React from "react";
import Link from "next/link";
import HistoryTab from "@/app/dashboard/component/ProjectManager/HistoryTab";

function P_M_JobDescriptionsFive(params: type) {
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
                <h1>Job Descriptions ChatBot</h1>
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
                          className="text-blue text-[14px]"
                          prefetch
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
                      <div className="bg-[#F9F9F9] h-100 p-3 mx-3 flex align-center">
                        <div className="bg-white col-lg-12 col-xl-11 m-auto p-3">
                          <div className="flex justify-between items-center border-bottom mb-4 pb-3">
                            <h2 className="text-[18px] Poppins-Medium">
                              Talent Acquisition
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
                          <div className="row mt-5">
                            <div className="col-lg-6 col-12 col-md-6">
                              <div className="blueBorder p-3">
                                <div className="flex justify-between">
                                  <p className="text-blue text-[13px] Poppins-Regular">
                                    <img src="image/question.png" alt="" /> Ask
                                    your Questions
                                  </p>
                                </div>
                                <p className="text-[12px] mt-2 leading-[17px]">
                                  Talent Acquisition can answer questions, help
                                  your job descriptions only.
                                </p>
                              </div>
                            </div>

                            <div className="col-lg-6 col-12 col-md-6">
                              <div className="blueBorder p-3">
                                <div className="flex justify-between">
                                  <p className="text-red-500 text-[13px] Poppins-Regular">
                                    <img src="image/personal.png" alt="" />{" "}
                                    Don’t ask your personal info!
                                  </p>
                                </div>
                                <p className="text-[12px] mt-2 leading-[17px]">
                                  Talent Acquisition can answer questions, help
                                  your job descriptions only.
                                </p>
                              </div>
                            </div>
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

export default P_M_JobDescriptionsFive;
