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

function P_M_JobDescriptionsSix(params: type) {
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
                <Link
                  href="/P_M_JobDescriptions1"
                  prefetch
                  className="btn btn-light me-3 mx-lg-2"
                >
                  JD Assets
                </Link>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-9">
                <div className="shadow bg-white mt-4 rounded-3 px-3 py-4">
                  <div className="row">
                    <div className="col-lg-12 col-md-12">
                      <div className="bg-[#F9F9F9] h-100 px-3 py-5 mx-3 flex align-center">
                        <div className=" bg-white col-lg-10 col-xl-9 m-auto px-3 py-5">
                          <div className="text-center">
                            <img src="image/Successfully.png" alt="" />
                          </div>
                          <h3 className="text-[20px] my-4 text-center">
                            Successfully shared your job descriptions
                          </h3>
                          <div className="mt-4 flex justify-center">
                            <Link
                              prefetch
                              href="/"
                              className="btn btn-blue px-3"
                            >
                              Go to Dashboard
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

export default P_M_JobDescriptionsSix;
