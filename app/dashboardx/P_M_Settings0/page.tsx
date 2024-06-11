"use client";

import HeadersTop from "@/app/dashboard/common/HeadersTop";
import SideMenu from "@/app/dashboard/component/SideMenu";
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HeadingText from "./HeadingText";
import ProfileText from "./ProfileText";
import GeneralInformation from "./GeneralInformation";
import SecurityInformation from "./SecurityInformation";
import AccountPreferences from "./AccountPreferences";
import ManageAccount from "./ManageAccount";
import NotificationInformation from "./NotificationInformation";
import { GET_GENERAL_SETTINGS_API, GET_SETTINGS_ACCOUNT_API, GET_SETTINGS_API, GET_SETTINGS_MANAGE_ACCOUNT_API } from "@/utils/API";
import { dashboardSelector } from "@/store/reducers/dashboard";
import { useSelector } from "react-redux";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function P_M_Settings() {
  const [value, setValue] = React.useState(0);
  const dashboardData = useSelector(dashboardSelector)
  const getAllSettingsData = async ({userId}:any) => {
    console.warn(userId)
    const response1 = await GET_SETTINGS_API()
    const response2 = await GET_SETTINGS_ACCOUNT_API()
    const response3 = GET_GENERAL_SETTINGS_API(userId)
    const response4 = await GET_SETTINGS_MANAGE_ACCOUNT_API()

    console.log(response1, "response1")
    console.log(response2, "response2")
    console.log(response3, "response3")
    console.log(response4, "response4")
  }

  useEffect(() => {
    let userId = dashboardData?.login?.user_id
    getAllSettingsData(userId)
  }, [])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
                <h1>Settings</h1>
                <p className="mt-3">
                  Enjoy your selecting potential candidates Tracking and
                  Management System.
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="shadow bg-white mt-4 rounded-3 pb-3">
                  <div className="row">
                    <div className="col-lg-3 py-4">
                      <Tabs
                        orientation="vertical"
                        variant="scrollable"
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        TabIndicatorProps={{ style: { display: "none" } }} // hide the tab indicator
                        sx={{}}
                        ScrollButtonComponent="div" // remove scroll buttons
                        className="tabSetting"
                      >
                        <Tab
                          label={<p>General Information</p>}
                          {...a11yProps(0)}
                          icon={
                            <img
                              className="h-[20px]  mr-2"
                              src={"image/GeneralInformation.png"}
                              alt="User Icon"
                            />
                          }
                          sx={{ display: "flex", alignItems: "center" }} // Align icon and text horizontally
                        />
                        <Tab
                          label={<p>Security</p>}
                          {...a11yProps(2)}
                          icon={
                            <img
                              className="h-[20px] mr-2"
                              src={"image/Security.png"}
                              alt="User Icon"
                            />
                          }
                          sx={{ display: "flex", alignItems: "center" }} // Align icon and text horizontally
                        />
                        <Tab
                          label={<p>Notifications</p>}
                          {...a11yProps(3)}
                          icon={
                            <img
                              className="h-[20px]  mr-2"
                              src={"image/Notifications.png"}
                              alt="User Icon"
                            />
                          }
                          sx={{ display: "flex", alignItems: "center" }} // Align icon and text horizontally
                        />
                        <Tab
                          label={<p>Account Preference</p>}
                          {...a11yProps(4)}
                          icon={
                            <img
                              className="h-[20px]  mr-2"
                              src={"image/AccountPreference.png"}
                              alt="User Icon"
                            />
                          }
                          sx={{ display: "flex", alignItems: "center" }} // Align icon and text horizontally
                        />

                        <Tab
                          label={<p>Manage Account</p>}
                          {...a11yProps(4)}
                          icon={
                            <img
                              className="h-[20px] mr-2"
                              src={"image/ManageAccount.png"}
                              alt="User Icon"
                            />
                          }
                          sx={{ display: "flex", alignItems: "center" }} // Align icon and text horizontally
                        />
                      </Tabs>
                    </div>
                    <div className="col-lg-9">
                      <div className="bg-[#F9F9F9]">
                        <TabPanel value={value} index={0}>
                          <HeadingText
                            mainHeadingtab="General Information"
                            SaveButton={true}
                            CancelButton={true}
                          />
                          <ProfileText />
                          <GeneralInformation />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                          <HeadingText
                            mainHeadingtab="Security Information "
                            SaveButton={false}
                            CancelButton={false}
                          />
                          <SecurityInformation />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                          <HeadingText
                            mainHeadingtab="Notifications"
                            SaveButton={false}
                            CancelButton={false}
                          />
                          <NotificationInformation />
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                          <HeadingText
                            mainHeadingtab="Account Preferences"
                            SaveButton={true}
                            CancelButton={true}
                          />
                          <AccountPreferences />
                        </TabPanel>

                        <TabPanel value={value} index={4}>
                          <HeadingText
                            mainHeadingtab="Manage Account"
                            SaveButton={true}
                            CancelButton={true}
                          />
                          <ProfileText />
                          <ManageAccount />
                        </TabPanel>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
