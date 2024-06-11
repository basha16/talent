import Upcomings from "@/app/dashboard/component/ProjectManager/Upcomings";
import HeadersTop from "@/app/dashboard/common/HeadersTop";
import Activity from "@/app/dashboard/component/ProjectManager/Activity";
import CalendarProject from "@/app/dashboard/component/ProjectManager/CalendarProject";
import HiringCandidates from "@/app/dashboard/component/ProjectManager/HiringCandidates";
import SideMenu from "@/app/dashboard/component/SideMenu";
import PostedJobsTop from "@/app/dashboard/component/ProjectManager/PostedJobsTop";
import Link from "next/link";
import { HOME } from "@/constants/ROUTES";

function ProjectManagerJobDescriptions(params: type) {
  const dataArray = [
    {
      id: "#py001",
      imagePath: "image/editIcon.png",
      description: "Senior Python Developers",
    },
    {
      id: "#py002",
      imagePath: "image/editIcon.png",
      description: "Junior Python Developers",
    },
    {
      id: "#py003",
      imagePath: "image/editIcon.png",
      description: "Python Engineers",
    },
    {
      id: "#py001",
      imagePath: "image/editIcon.png",
      description: "Senior Python Developers",
    },
    // Add more data objects as needed
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
                <button className="btn btn-blue">Create New JD</button>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-9">
                <div className="shadow bg-white mt-4 rounded-3 pb-3">
                  <PostedJobsTop
                    titleName="Job Descriptions Assets"
                    classTitle="text-[20px] Poppins-Regular"
                    samllText="History"
                  />

                  <div className="shadow mx-3 mb-4 mt-4 p-3">
                    <div className="d-flex">
                      <img
                        className="h-[22px] w-[22px]"
                        src="image/python.png"
                        alt=""
                      />
                      <h5 className="Poppins-Regular ms-2">
                        python developer [325 JD`s]
                      </h5>
                    </div>

                    <div className="row mx-0">
                      {dataArray.map((dataItem, index) => (
                        <div key={index} className="col-lg-3 mt-3 px-2">
                          <div className="border p-2 hover:shadow-lg">
                            <div className="d-flex justify-content-between align-items-center border-bottom pb-1">
                              <p className="text-[13px]">ID: {dataItem.id}</p>
                              <Link href={HOME} prefetch>
                                <img src={dataItem.imagePath} alt="" />
                              </Link>
                            </div>
                            <p className="py-3 text-[13px]">
                              {dataItem.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="shadow mx-3 mb-4 mt-4 p-3">
                    <div className="d-flex">
                      <img
                        className="h-[22px] w-[22px]"
                        src="image/java.png"
                        alt=""
                      />
                      <h5 className="Poppins-Regular ms-2">
                        Java Developers [ 325 JD’s]
                      </h5>
                    </div>

                    <div className="row mx-0">
                      {dataArray.map((dataItem, index) => (
                        <div key={index} className="col-lg-3 mt-3 px-2">
                          <div className="border p-2 hover:shadow-lg">
                            <div className="d-flex justify-content-between align-items-center border-bottom pb-1">
                              <p className="text-[13px]">ID: {dataItem.id}</p>
                              <Link href={HOME} prefetch>
                                <img src={dataItem.imagePath} alt="" />
                              </Link>
                            </div>
                            <p className="py-3 text-[13px]">
                              {dataItem.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="shadow mx-3 mb-4 mt-4 p-3">
                    <div className="d-flex">
                      <img
                        className="h-[22px] w-[22px]"
                        src="image/Angularicon.png"
                        alt=""
                      />
                      <h5 className="Poppins-Regular ms-2">
                        Angular Developers [ 325 JD’s]
                      </h5>
                    </div>

                    <div className="row mx-0">
                      {dataArray.map((dataItem, index) => (
                        <div key={index} className="col-lg-3 mt-3 px-2">
                          <div className="border p-2 hover:shadow-lg">
                            <div className="d-flex justify-content-between align-items-center border-bottom pb-1">
                              <p className="text-[13px]">ID: {dataItem.id}</p>
                              <Link href="" prefetch>
                                <img src={dataItem.imagePath} alt="" />
                              </Link>
                            </div>
                            <p className="py-3 text-[13px]">
                              {dataItem.description}
                            </p>
                          </div>
                        </div>
                      ))}
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

export default ProjectManagerJobDescriptions;
