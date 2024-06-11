"use client";
import Upcomings from "@/app/dashboard/component/ProjectManager/Upcomings";
import HeadersTop from "@/app/dashboard/common/HeadersTop";
import Activity from "@/app/dashboard/component/ProjectManager/Activity";
import CalendarProject from "@/app/dashboard/component/ProjectManager/CalendarProject";
import HiringCandidates from "@/app/dashboard/component/ProjectManager/HiringCandidates";
import SideMenu from "@/app/dashboard/component/SideMenu";
import React, { useState } from "react";
import Modal from "react-modal";

import Button from "@mui/material/Button";
const label = { inputProps: { "aria-label": "Checkbox demo" } };
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Link from "next/link";

export default function InterviewForm01() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalIsOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalIsOpen(false);
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
                <h1>Candidates</h1>
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
                  <div className="row justify-between align-items-center p-3 ">
                    <div className="col-md-5 col-12 col-lg-8 d-flex align-items-center  mb-3 mb-md-0 ">
                      <h4 className="small_historyText">Interview Mark Form</h4>
                    </div>

                    <div className="col-lg-2 col-4 col-md-2 text-end">
                      <Button className="shadow btn btn-white px-1 px-md-3 w-100 w-lg-auto d-flex">
                        Later
                      </Button>
                    </div>

                    <div className="mt-5">
                      <div className="row">
                        <div className="col-lg-4 col-md-4 mb-4">
                          <TextField
                            className="w-100"
                            required
                            id="CandidateName"
                            label="Candidate Name"
                            defaultValue="John Smith"
                          />
                        </div>

                        <div className="col-lg-4 col-md-4 mb-4">
                          <TextField
                            className="w-100"
                            required
                            id="CandidateName"
                            label="Position"
                            defaultValue="Python Developer"
                          />
                        </div>

                        <div className="col-lg-4 col-md-4 mb-4">
                          <TextField
                            className="w-100"
                            required
                            id="CandidateName"
                            label="HR Manager Name"
                            defaultValue="Jasmine"
                          />
                        </div>

                        <div className="col-lg-4 col-md-4 mb-4">
                          <TextField
                            className="w-100"
                            required
                            id="CandidateName"
                            label="Interviewer Name"
                            defaultValue="Stella"
                          />
                        </div>

                        <div className="col-lg-4 col-md-4 mb-4">
                          <TextField
                            className="w-100"
                            required
                            id="CandidateName"
                            type="date"
                            defaultValue="09/02/2024r"
                          />
                        </div>

                        <div className="col-lg-4 col-md-4 mb-4">
                          <TextField
                            className="w-100"
                            required
                            id="CandidateName"
                            label="Start Time"
                            defaultValue="10:15 A.M"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="row">
                            <div className="col-lg-6 col-md-4 mb-4">
                              <TextField
                                className="w-100"
                                required
                                id="CandidateName"
                                label="End Time"
                                defaultValue="10:15 A.M"
                              />
                            </div>

                            <div className="col-lg-6 col-md-4 mb-4">
                              <TextField
                                className="w-100"
                                required
                                id="CandidateName"
                                label="Enter your Mark 1"
                              />
                            </div>

                            <div className="col-lg-6 col-md-4 mb-4">
                              <TextField
                                className="w-100"
                                required
                                id=""
                                label="Enter your Mark 2 (Optional)"
                              />
                            </div>

                            <div className="col-lg-6 col-md-6 mb-4">
                              <TextField
                                className="w-100"
                                required
                                id=""
                                label="Enter your Mark 3 (Optional)"
                              />
                            </div>

                            <div className="col-lg-6 col-md-6 mb-4">
                              <TextField
                                className="w-100"
                                required
                                id="CandidateName"
                                label="Enter your Mark 4 (Optional)"
                              />
                            </div>

                            <div className="col-lg-6 col-md-4 mb-4">
                              <TextField
                                className="w-100"
                                required
                                id="CandidateName"
                                label="Enter your Mark 5 (Optional)"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-4 mb-4">
                          <TextField
                            id="outlined-multiline-flexible"
                            label="Type your descriptions ... "
                            multiline
                            className="w-100"
                            maxRows={8}
                            rows={7.7}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 text-center mb-4">
                      <button
                        className="btn btn-blue py-3 h-100"
                        onClick={openModal}
                      >
                        SUBMIT YOUR INPUTS
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal component */}
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
              >
                <div className="">
                  <div className="shadow col-lg-10 bg-white mt-8 rounded-3 px-3 py-4">
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
                                href="/"
                                prefetch
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
              </Modal>

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
