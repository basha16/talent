"use client";
import Upcomings from "@/app/dashboard/component/ProjectManager/Upcomings";
import HeadersTop from "@/app/dashboard/common/HeadersTop";
import Activity from "@/app/dashboard/component/ProjectManager/Activity";
import CalendarProject from "@/app/dashboard/component/ProjectManager/CalendarProject";
import HiringCandidates from "@/app/dashboard/component/ProjectManager/HiringCandidates";
import SideMenu from "@/app/dashboard/component/SideMenu";
import * as React from "react";
import Link from "next/link";
import StraightIcon from "@mui/icons-material/Straight";
import HistoryTab from "@/app/dashboard/component/ProjectManager/HistoryTab";

const JobDescription = ({ key, title, smallTitle }: any) => {
  return (
    <Link
      href="/P_M_JobDescriptions5"
      key={key}
      className="col-lg-4 mt-3 px-1"
      prefetch
    >
      <div className="border border-color-[red] bg-[#fff] hover:bg-blue-100 p-2">
        <p className="text-[11px] Poppins-SemiBold leading-[13px]">{title}</p>
        <p className="text-[10px] mt-2 Poppins-Light leading-[13px]">
          {smallTitle}
        </p>
      </div>
    </Link>
  );
};

function P_M_JobDescriptionsFour(params: type) {
  const jobDescriptionsData = [
    {
      key: 1,
      title: "Python developer job descriptions",
      smallTitle: "Please add Django, next.js and html, css",
    },
    {
      key: 2,
      title: "Python developer job descriptions",
      smallTitle: "Please add Django, next.js and html, css",
    },
    {
      key: 3,
      title: "Python developer job descriptions",
      smallTitle: "Please add Django, next.js and html, css",
    },
    {
      key: 4,
      title: "Python developer job descriptions",
      smallTitle: "Please add Django, next.js and html, css",
    },
    {
      key: 5,
      title: "Python developer job descriptions",
      smallTitle: "Please add Django, next.js and html, css",
    },
    {
      key: 6,
      title: "Python developer job descriptions",
      smallTitle: "Please add Django, next.js and html, css",
    },
  ];

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
                    <div className="col-lg-3">
                      <HistoryTab />
                    </div>

                    <div className="col-lg-9">
                      <div className="bg-[#F9F9F9] p-3 mx-3">
                        <h5 className="text-center">
                          Welcome Talent Acquisition board chatbot
                        </h5>
                        <div className="md:mt-[100px] mt-[50px] text-center">
                          <img src="image/chatBot.png" alt="" />
                        </div>
                        <h5 className="text-center mt-2">
                          Which types of job description need?
                        </h5>

                        <div className="row mx-0 mt-4">
                          {jobDescriptionsData.map((job) => (
                            <JobDescription
                              key={job.key}
                              title={job.title}
                              smallTitle={job.smallTitle}
                            />
                          ))}
                        </div>

                        <div className="mt-5 mb-3 mx-3 position-relative">
                          <input
                            type="text"
                            className="form-control rounded-0 text-[16px] Poppins-Regular"
                            placeholder="Please enter your notes or questions or chat"
                          />
                          <button className="bg-[#DBEAF3] hover:bg-blue-400 px-3 py-2 position-absolute top-[1px] right-0">
                            <StraightIcon />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6 mt-4">
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

export default P_M_JobDescriptionsFour;
