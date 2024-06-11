"use client";

import React, { useState } from "react";
import HeadersTop from "@/app/dashboard/common/HeadersTop";
import SideMenu from "@/app/dashboard/component/SideMenu";
import CalendarProject from "@/app/dashboard/component/ProjectManager/CalendarProject";
import Upcomings from "@/app/dashboard/component/ProjectManager/Upcomings";
import Activity from "@/app/dashboard/component/ProjectManager/Activity";
import HiringCandidates from "@/app/dashboard/component/ProjectManager/HiringCandidates";

export default function ProjectManagerMessages() {
  //tab end
  return (
    <section className="demo">
      <div className="container-fluid my-md-5 my-4">
        <div className="row">
          <div className="col-lg-1 ps-0 position-relative">
            <SideMenu />
          </div>

          <div className="col-lg-11 pe-lg-4 ps-lg-0">
            <div className="row justify-content-between  align-items-center">
              <div className="col-lg-8 projectText">
                <h1>Notifications</h1>
                <p className="mt-3">
                  Enjoy your selecting potential candidates Tracking and
                  Management System.
                </p>
              </div>

              <div className="col-lg-4 mt-3 mt-lg-0 text-start text-lg-end">
                <button className="btn btn-light me-3 mx-lg-2">
                  JD Assets
                </button>
                <button className="btn btn-blue">Create New JD</button>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-9">
                <div className="shadow mt-4 rounded-3 p-3">table-primary</div>
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
