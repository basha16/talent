"use client";

import React, { useState } from "react";
import HeadersTop from "@/app/dashboard/common/HeadersTop";
import SideMenu from "@/app/dashboard/component/SideMenu";
import CalendarProject from "@/app/dashboard/component/ProjectManager/CalendarProject";
import Upcomings from "@/app/dashboard/component/ProjectManager/Upcomings";
import Activity from "@/app/dashboard/component/ProjectManager/Activity";
import HiringCandidates from "@/app/dashboard/component/ProjectManager/HiringCandidates";
import Link from "next/link";

function Message(props) {
  return (
    <div className={props.className}>
      <div className="row mx-0 py-2 mb-2 border-bottom align-items-center">
        <div className="col-lg-2 col-3 ps-2 pe-0">
          <img
            className="w-[50px] rounded-full h-[50px]"
            src={props.imageSrc}
            alt=""
          />
        </div>
        <div className="col-lg-7 col-6">
          <h6 className="text-[15px]">{props.name}</h6>
          <p className="text-[12px] line-clamp-1">{props.message}</p>
        </div>
        <div className="col-lg-3 col-3 pe-2 ps-0 text-end">
          <p className="text-[10px]">{props.time}</p>
          {props.count && (
            <div className=" text-white px-2 py-1 text-[10px] rounded bg-blue d-inline-block">
              <h6 className="text-[10px]">{props.count}</h6>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

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
                <h1>Messages</h1>
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
                <div className="row">
                  <div className="col-lg-5 flex col-md-6 mt-4">
                    <div className="shadow w-100 pb-2">
                      <div className="d-flex p-3 justify-content-between align-items-center">
                        <h5 className="text-[20px] Poppins-Medium">Chats</h5>
                        <h6 className="text-[14px] Poppins-Medium">
                          <Link href="#" prefetch>
                            View all
                          </Link>
                        </h6>
                      </div>
                      <hr className="mt-0" />

                      <Message
                        className="bgLightBlue"
                        imageSrc="https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png"
                        name="Angela"
                        message="Hi, Angela,  dfat......"
                        time="2.00 A.M"
                      />
                      <Message
                        className="bg-white"
                        imageSrc="https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png"
                        name="Johan"
                        message="Hi, Angela, What......"
                        time="2.00 A.M"
                        count={2}
                      />

                      <Message
                        className="bg-white"
                        imageSrc="https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png"
                        name="Rosan"
                        message="Hi, Angela, What......"
                        time="2.00 A.M"
                        count={2}
                      />

                      {/* <Message
                                                className="bgLightBlue"
                                                imageSrc="https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png"
                                                name="Angela"
                                                message="Hi, Angela,  dfat......"
                                                time="2.00 A.M"
                                            />
                                            <Message
                                                className="bg-white"
                                                imageSrc="https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png"
                                                name="Johan"
                                                message="Hi, Angela, What......"
                                                time="2.00 A.M"
                                                count={2}
                                            />

                                            <Message
                                                className="bg-white"
                                                imageSrc="https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png"
                                                name="Rosan"
                                                message="Hi, Angela, What......"
                                                time="2.00 A.M"
                                                count={2}
                                            />

                                            <Message
                                                className="bgLightBlue"
                                                imageSrc="https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png"
                                                name="Angela"
                                                message="Hi, Angela,  dfat......"
                                                time="2.00 A.M"
                                            />
                                            <Message
                                                className="bg-white"
                                                imageSrc="https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png"
                                                name="Johan"
                                                message="Hi, Angela, What......"
                                                time="2.00 A.M"
                                                count={2}
                                            /> */}

                      <Message
                        className="bg-white"
                        imageSrc="https://cdn.icon-icons.com/icons2/3150/PNG/512/user_profile_female_icon_192701.png"
                        name="Rosan"
                        message="Hi, Angela, What......"
                        time="2.00 A.M"
                        count={2}
                      />
                    </div>
                  </div>
                  <div className="col-lg-7 flex mt-4">
                    <div className="shadow w-100 pb-[80px] position-relative ">
                      <div className="row mx-0 py-2 mb-2 min-h-100 border-bottom align-items-center">
                        <div className="col-lg-2 col-3 ps-2 pe-0">
                          <img
                            className="w-[50px] rounded-full h-[50px]"
                            src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                            alt=""
                          />
                        </div>
                        <div className="col-lg-7 col-6">
                          <h6 className="text-[15px]">Angela</h6>
                          <p className="text-[12px] text-[#4BAF1C]">
                            <i
                              className="fa fa-circle text-[10px]"
                              aria-hidden="true"
                            ></i>{" "}
                            Online
                          </p>
                        </div>
                        <div className="col-lg-3 col-3 pe-2 ps-0 text-end">
                          <Link href="#" prefetch>
                            <i
                              className="fa fa-ellipsis-v"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </div>
                      </div>

                      <div className="p-3">
                        <div className="p-3 bg-[#ddd] w-[70%] mb-5">
                          <p className="">demo</p>
                        </div>

                        <div className="p-3 bg-dark w-[70%] ms-auto mb-5">
                          <p className="text-white">demo</p>
                        </div>

                        <div className="p-3 bg-[#ddd] w-[70%] mb-5">
                          <p className="">demo</p>
                        </div>
                      </div>
                      <div className="position-absolute bottom-0 right-0 left-0">
                        <input
                          type="text"
                          className="form-control rounted-0 pe-5 text-[12px] h-[70px] rounded-0"
                          placeholder="Applicant Tracking Dashboard"
                        />
                        <Link prefetch href="">
                          {" "}
                          <i
                            className="fa fa-paper-plane text-[#4CAE4E] text-[20px] position-absolute top-[24px] right-[20px]"
                            aria-hidden="true"
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-12 text-center mt-4 mb-3">
                  <button className="btnOutlineBlack btn">
                    Previous Screen
                  </button>
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
