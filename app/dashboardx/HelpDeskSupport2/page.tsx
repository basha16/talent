"use client";
import Upcomings from "@/app/dashboard/component/ProjectManager/Upcomings";
import HeadersTop from "@/app/dashboard/common/HeadersTop";
import Activity from "@/app/dashboard/component/ProjectManager/Activity";
import CalendarProject from "@/app/dashboard/component/ProjectManager/CalendarProject";
import HiringCandidates from "@/app/dashboard/component/ProjectManager/HiringCandidates";
import SideMenu from "@/app/dashboard/component/SideMenu";
import React, { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const label = { inputProps: { "aria-label": "Checkbox demo" } };
import TextField from "@mui/material/TextField";

export default function HelpDeskSupport2() {
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
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
                                <h1>Project Manager</h1>
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
                            <div className="col-lg-7 mx-auto">
                                <div className="shadow bg-white mt-4 rounded-3 pb-3">
                                    <div className="row justify-between align-items-center p-3 ">
                                        <div className="col-md-5 col-12 col-lg-8 d-flex align-items-center  mb-3 mb-md-0 ">
                                            <h4 className="small_historyText">
                                                Create Ticket
                                            </h4>
                                        </div>

                                        <div className="col-lg-2 col-4 col-md-2 text-end">

                                        </div>
                                    </div>

                                    <hr className="mt-0" />

                                    <div className="mt-2 p-3">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-4 mb-4">
                                                <FormControl fullWidth className="bg-gray-100">
                                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={age}
                                                        label="Age"
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>

                                            <div className="col-lg-6 col-md-4 mb-4">
                                                <FormControl fullWidth className="bg-gray-100">
                                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                                    <Select
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={age}
                                                        label="Age"
                                                        onChange={handleChange}
                                                    >
                                                        <MenuItem value={10}>Ten</MenuItem>
                                                        <MenuItem value={20}>Twenty</MenuItem>
                                                        <MenuItem value={30}>Thirty</MenuItem>
                                                    </Select>
                                                </FormControl>
                                            </div>
                                            <div className="col-md-12 mb-3 mt-2">
                                                <TextField className='bg-gray-100' fullWidth label="Enter your Last name" id="fullWidth" />
                                            </div>
                                            <div className="col-lg-12 col-md-12 mb-4">
                                                <TextField
                                                    id="outlined-multiline-flexible"
                                                    label="Multiline"
                                                    multiline
                                                    className="w-100 bg-gray-100"
                                                    maxRows={8}
                                                    rows={4.4}
                                                />
                                            </div>

                                            <div className="col-lg-12 col-md-12 text-center mt-3">
                                                <button className="btn btnOutlineBlack me-3 mx-lg-2">Cancel</button>
                                                <button className="btn btn-blue me-3 mx-lg-2">Save</button>
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
