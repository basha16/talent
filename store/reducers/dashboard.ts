"use client";
import { ACCESS_TOKEN } from "@/constants/ENVIRONMENT_VARIABLES";
import {
  GET_ACTIVITIES_API,
  GET_CALENDAR_DETAILS_API,
  GET_CANDIDATE_STATUS_API,
  GET_HIRED_API,
  GET_INTERVIEW_AND_HIRED_DETAILS_API,
  GET_POSTED_JOB_Active_LISTS_API,
  GET_POSTED_JOB_LISTS_API,
  GET_TICKET_LIST_API,
  GET_TODAY_MEETING_DETAILS_API,
  GET_UPCOMINGS_API,
  INVENTORY_ASSETS_API,
  LOGIN_API,
  LOGOUT_API,
  NOTIFICATIONS_API,
  USER_ACCOUNT_MANAGEMENT_ACCOUNT_API,
} from "@/utils/API";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import Cookies from "js-cookie"; // Import the js-cookie library

// Helper function to handle common async thunk logic
const createAsyncThunkHandler = (apiFunction?:any, propName?:any, onLoginSuccess?:any) =>
  createAsyncThunk(`dashboard/${propName}`, async (data: any) => {
    try {
      // Call the API function with provided data
      let response;
      if (data) {
        response = await apiFunction(data);
      } else {
        response = await apiFunction();
      }

      // If there's a login success callback, call it with the response
      if (onLoginSuccess && propName === "login") {
        onLoginSuccess(response);
      }

      return response;
    } catch (error) {
      // Handle error
      console.error(`${propName} failed:`, error);
      throw error;
    }
  }) as any;

// Define async thunks using the helper function
export const getCandidateStatusList = createAsyncThunkHandler(
  GET_CANDIDATE_STATUS_API,
  "candidate_status_list"
) as any;

export const getInterviewAndHiredDetails = createAsyncThunkHandler(
  GET_INTERVIEW_AND_HIRED_DETAILS_API,
  "interview_and_hired_details"
) as any;

export const getPostedJobList = createAsyncThunkHandler(
  GET_POSTED_JOB_LISTS_API,
  "posted_job_list"
) as any;

export const getPostedJobActiveList = createAsyncThunkHandler(
  GET_POSTED_JOB_Active_LISTS_API,
  "posted_job_active_list"
) as any;

export const getCalendarDetails = createAsyncThunkHandler(
  GET_CALENDAR_DETAILS_API,
  "calendar_details"
) as any;


export const getTodayMeetingDetailsList = createAsyncThunkHandler(
  GET_TODAY_MEETING_DETAILS_API,
  "today_meeting_details_list"
) as any;

export const getActivities = createAsyncThunkHandler(
  GET_ACTIVITIES_API,
  "activities_list"
) as any;

export const getUpcomings = createAsyncThunkHandler(
  GET_UPCOMINGS_API,
  "upcomings_list"
) as any;

export const getHirings = createAsyncThunkHandler(
  GET_HIRED_API,
  "hirings_list"
) as any;
export const userlogin = createAsyncThunkHandler(
  LOGIN_API,
  "login",
  (response) => {
    // Assuming response contains session information such as user data, access token, etc.
    const { access_token, user_email, user_id, refresh_token } = response;
    // Store user data and access token in cookies
    Cookies.set(
      ACCESS_TOKEN,
      JSON.stringify({ access_token, user_email, user_id, refresh_token })
    );
  }
) as any;

export const getTicketList = createAsyncThunkHandler(
  GET_TICKET_LIST_API,
  "ticket_List"
) as any;

export const userLogout = createAsyncThunkHandler(LOGOUT_API, "logout") as any;

export const userAccountManagementAccount = createAsyncThunkHandler(
  USER_ACCOUNT_MANAGEMENT_ACCOUNT_API,
  "user_account_management"
) as any;

export const inventoryAssets = createAsyncThunkHandler(
  INVENTORY_ASSETS_API,
  "inventory_Assets"
) as any;

export const getNotifications = createAsyncThunkHandler(
  NOTIFICATIONS_API,
  "notification_list"
) as any;


const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    candidate_status_list: [],
    interview_and_hired_details: {},
    posted_job_list: [],
    posted_job_active_list: [],
    today_meeting_details_list: [],
    activities_list: [],
    upcomings_list: [],
    hirings_list: [],
    ticket_List: [],
    inventory_Assets: [],
    notification_list: [],
    login: {},
    logout: {},
    user_account_management: {},
    loading: false,
    calendar_details:[]
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) =>
          action.type.startsWith("dashboard/") &&
          action.type.endsWith("/pending"),
        (state) => {
          state.loading = true;
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("dashboard/") &&
          action.type.endsWith("/fulfilled"),
        (state, action) => {
          state.loading = false;
          const propName = action.type.split("/")[1]; // Extract property name from action type
        }
      )
      .addMatcher(
        (action) =>
          action.type.startsWith("dashboard/") &&
          action.type.endsWith("/rejected"),
        (state) => {
          state.loading = false;
        }
      );
  },
});

export const dashboardSelector = (state: any) => state.dashboard;
export default dashboardSlice.reducer;
