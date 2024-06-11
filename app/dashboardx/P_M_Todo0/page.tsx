"use client"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { format, parse, startOfWeek, getDay, isSameDay, isSameHour } from "date-fns";
import { enUS } from "date-fns/locale";
import Link from "next/link";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css"; // Import the calendar styles
import { dashboardSelector, getCalendarDetails } from "@/store/reducers/dashboard";
import SideMenu from "@/app/dashboard/component/SideMenu";
import "./style.css";
import { GET_CALENDAR_DETAIL_API } from "@/utils/API";
import { parseISO } from 'date-fns';

const locales = {
  "en-US": enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});


// Define months and years
const months = [
  { value: "01", label: "January" },
  { value: "02", label: "February" },
  { value: "03", label: "March" },
  { value: "04", label: "April" },
  { value: "05", label: "May" },
  { value: "06", label: "June" },
  { value: "07", label: "July" },
  { value: "08", label: "August" },
  { value: "09", label: "September" },
  { value: "10", label: "October" },
  { value: "11", label: "November" },
  { value: "12", label: "December" },
];

const years = [
  { value: "2022", label: "2022" },
  { value: "2023", label: "2023" },
  { value: "2024", label: "2024" },
  // Add more years as needed
];

export default function P_M_Todo0() {
  const dispatch = useDispatch();
  const calendarData = useSelector(dashboardSelector);

  useEffect(() => {
    dispatch(getCalendarDetails({
      from_date: "2024-06-01",
      to_date: "2024-06-30",
    }))
  }, [dispatch]);

  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [activeEventModal, setActiveEventModal] = useState();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [events, setEvents] = useState([]);
  const [eventDetail, setEventDetail] = useState(null);

  useEffect(() => {
    if (calendarData?.calendar_details) {
      setEvents(calendarData.calendar_details.map((details) => ({
        ...details,
        start: new Date(details.start),
        end: new Date(details.end),
        title: details?.job_id.jobRequest_Title
      })));
    }
  }, [setEvents, calendarData]);

  useEffect(() => {
    if (selectedYear && selectedMonth) {
      let selected_from_date = `${selectedYear}-${selectedMonth}-01`;
      let selected_to_date = `${selectedYear}-${selectedMonth}-30`;

      dispatch(getCalendarDetails({
        from_date: selected_from_date,
        to_date: selected_to_date
      }))
    }
  }, [selectedMonth, selectedYear])

  // Check for overlapping events
  const checkOverlappingEvents = () => {
    const overlaps = {};
    events.forEach((event, index) => {
      events.forEach((otherEvent, otherIndex) => {
        if (index !== otherIndex &&
          ((event.start >= otherEvent.start && event.start < otherEvent.end) ||
            (otherEvent.start >= event.start && otherEvent.start < event.end))) {
          overlaps[index] = (overlaps[index] || 0) + 1;
          overlaps[otherIndex] = (overlaps[otherIndex] || 0) + 1;
        }
      });
    });
    return overlaps;
  };

  const overlaps = checkOverlappingEvents();

  const CustomEvent = ({ event }) => {
    const isOverlapping = overlaps[events.indexOf(event)] > 1;

    const formattedStartTime = event.start.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const formattedEndTime = event.end.toLocaleString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

    const overlappingEventsCount = events.filter(
      (e) =>
        (e.start < event.end && e.end > event.start) &&
        e !== event
    ).length;

    // Check if there are overlapping events
    if (overlappingEventsCount > 0) {
      // Check if this event is the first one to render
      if (events.indexOf(event) !== events.findIndex((e) => e.start.getTime() === event.start.getTime())) {
        return null; // If not, don't render this event
      }
    }

    return (
      <>
        <div className={`calendarTopSection overflow-hidden ${isOverlapping ? "overlapping" : ""}`}>
          {overlappingEventsCount > 0 && (
            <span className="overlap-count">{overlappingEventsCount + 1}</span>
          )}
          <ul>
            <li className="text-[12px] py-1">{event.title}</li>
            <li className="text-[12px] py-1">Interviewer: {event.user_det?.handled_by.firstName} {event.user_det?.handled_by.lastName}</li>
            <li className="text-[12px] py-1">Time : {formattedStartTime} -  {formattedEndTime}</li>
            <li className="text-[12px] py-1">Via : Google Voice</li>
          </ul>
        </div>
        <div className="shadow bg-white" style={{ position: "relative" }}>
          <strong className="text-black">{event.title}</strong>
          <p>{event.start.toLocaleString()}</p>
        </div>
        {activeEventModal && <EventDetailModal />}
      </>
    );
  };


  const EventDetailModal = () => {
    if (!eventDetail) return null;
    const date = parseISO(eventDetail.start);
    const endEate = parseISO(eventDetail.end);

    const interviewDate = format(date, "do MMM yyyy");

    const startTime = format(date, 'h:mm a');
    const endTime = format(endEate, 'h:mm a');


    return (
      <div
        className=""
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "490px",
          backgroundColor: "white",
          border: "1px solid #ddd",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          padding: "20px",
          borderRadius: "8px",
          zIndex: 1000,
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          <button
            onClick={() => setActiveEventModal(null)}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "none",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
            }}
          >
            &times;
          </button>

        </div>
        <div className="flex flex-row justify-between ring-2 ring-gray-200 divide-x-[2px]">
          <div className="flex flex-col ms-2 ">
            <div className="">
              <p className="pt-4 pb-4" >Interview With: {eventDetail.desc}</p>
              <p className="pb-4" >Position: {eventDetail.job_id.jobRequest_Title}</p>
              <p className="pb-4" >Created By: {eventDetail.job_id.jobRequest_createdBy.firstName} {eventDetail.job_id.jobRequest_createdBy.lastName}</p>
              <p className="pb-4" >Interview Date: {interviewDate}</p>
              <p className="pb-4" >Interview Time: {startTime} - {endTime}</p>
              <p className="pb-4" >Interview Via: {'Google meet'}</p>
            </div>
            <div >
              <a href="path/to/resume.docx" download style={{ textDecoration: "none" }}>
                <button style={{
                  backgroundColor: "#e0e0e0",
                  padding: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                  marginBottom: "10px",
                }}>
                  <div className="flex justify-between w-full">
                    <span>
                      Resume
                    </span>

                    <img src="/image/download.png" alt="Download" style={{ width: "20px", height: "20px" }} />
                  </div>

                </button>
              </a>
              <a href="path/to/aadharcard.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <button style={{
                  backgroundColor: "#e0e0e0",
                  padding: "10px",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                  marginBottom: "10px",
                }}>
                  <div className="flex justify-between w-full">
                    <span>
                      Aadharcard
                    </span>
                    <img src="/image/download.png" alt="View" style={{ width: "20px", height: "20px" }} />

                  </div>

                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col p-4 justify-items-center justify-center ring-inset">
            <div className="border border-gray-200 p-4">
              <img src="/image/Google_Meet.png" alt="" style={{ width: "100px", height: "100px" }} />
            </div>

            <div className="pt-4 ms-4">
              <a href={eventDetail.link} target="_blank" className="inline-block">
                <button className="bg-blue-600 text-white px-5 py-2.5 border-none rounded cursor-pointer">
                  JOIN
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };



  // Handle month and year changes
  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleSelectSlot = (event) => {
    if (typeof event.start === "string") {
      event.start = new Date(event.start);
    }
    if (typeof event.end === "string") {
      event.end = new Date(event.end);
    }
    setActiveEventModal(event);
  };

  const handleSelect = async (event, e) => {
    const { start, end } = event;
    const data = await GET_CALENDAR_DETAIL_API(event.id)
    setEventDetail(data)
    setActiveEventModal(event);
    setPosition({ x: e.clientX, y: e.clientY });
  };


  return (
    <section className="">
      <div className="container-fluid my-md-5 my-4">
        <div className="row">
          <div className="col-lg-1 leftMenuWidth ps-0 position-relative">
            <SideMenu />
          </div>
          <div className="col-lg-11 pe-lg-4 ps-lg-0">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-8 projectText">
                <h1>Calendar</h1>
                <p className="mt-3">
                  Enjoy your selecting potential candidates Tracking and Management System.
                </p>
              </div>
              <div className="col-lg-4 mt-3 mt-lg-0 text-center text-lg-end">
                <Link prefetch href="/P_M_JobDescriptions1" className="btn btn-light me-3 mx-lg-2">
                  JD Assets
                </Link>
                <Link prefetch href="P_M_JobDescriptions4" className="btn btn-blue bg-[#0a66c2!important]">
                  Create New JD
                </Link>
              </div>
            </div>
            <div className="TotalEmployees shadow bg-white rounded-3 p-3 w-100 mt-4">
              <div className="md:flex align-items-center">
                <h3 className="projectManHeading">Your Todo’s</h3>
                <div className="ml-auto d-flex todoHeadingSelect">
                  <div className="month-year-picker">
                    <select value={selectedMonth} onChange={handleMonthChange}>
                      <option value="">Select Month</option>
                      {months.map((month) => (
                        <option key={month.value} value={month.value}>
                          {month.label}
                        </option>
                      ))}
                    </select>
                    <select value={selectedYear} onChange={handleYearChange}>
                      <option value="">Select Year</option>
                      {years.map((year) => (
                        <option key={year.value} value={year.value}>
                          {year.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div style={{ height: "75vh" }}>
                    <Calendar
                      className="TodoDataTable"
                      selectable
                      localizer={localizer}
                      events={events}
                      startAccessor="start"
                      endAccessor="end"
                      style={{ height: 600 }}
                      defaultView={"week"}
                      timeslots={4}
                      step={15}
                      views={{ month: true, week: true, day: true }}
                      components={{
                        event: CustomEvent,
                      }}
                      formats={{
                        dayFormat: "EEEE",
                      }}
                      onSelectSlot={handleSelectSlot}
                      onSelectEvent={handleSelect}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {activeEventModal && <EventDetailModal />} {/* Render the modal if an event is selected */}
    </section>
  );
}
