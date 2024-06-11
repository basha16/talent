import Link from "next/link";
import HeadersTop from "@/app/dashboard/common/HeadersTop";
import SideMenu from "@/app/dashboard/component/SideMenu";
import ReplyIcon from "@mui/icons-material/Reply";
function ProjectManagerProfile() {
  return (
    <>
      <section className="container-fluid my-md-5 my-4">
        <div className="row">
          <div className="col-lg-1 leftMenuWidth ps-0 position-relative">
            <SideMenu />
          </div>

          <div className="col-lg-11 pe-lg-4 ps-lg-0">
            <div className="row justify-content-between  align-items-center">
              <div className="col-xl-8 col-lg-7 projectText">
                <h1>Settings</h1>
                <p className="mt-3">
                  Enjoy your selecting potential candidates Tracking and
                  Management System.
                </p>
              </div>

              <div className="col-xl-4 col-lg-5 mt-3 mt-lg-0 text-start text-lg-end">
                <Link href="/" prefetch className="btn btn-white">
                  <img src="image/back.png" alt="" className="h-[24px]" /> Go
                  Back
                  {/* <ReplyIcon/> Go Back */}
                </Link>
              </div>
            </div>

            <div className="shadow bg-white rounded-3 p-3 mt-4">
              <div className="bg-[#EDF5FF]">
                <div className="row p-3">
                  <div className="col-lg-6 col-md-6">
                    <h2 className="text-[24px]">General Information</h2>
                    <p className="text-[14px]">
                      Please fill in your valid inputs for General Information
                    </p>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="d-flex justify-content-start mt-3 mt-md-0 justify-content-md-end">
                      <button className="btn btnOutlineBlack me-2">
                        Cancel
                      </button>
                      <button className="btn btn-blue">Save</button>
                    </div>
                  </div>
                </div>
                <hr className="mt-0 mx-3" />
                <div className="row p-md-3 pb-3 align-items-center ">
                  <div className="col-lg-9 col-md-8">
                    <div className="row px-3">
                      <div className="col-lg-12 mt-3 mb-2">
                        <h5>DataTerrain Information</h5>
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your Email id"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your Last Name"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your Email id"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter your Phone Number"
                        />
                      </div>

                      <div className="col-lg-12 mt-3 mb-2">
                        <h5>Address Information</h5>
                      </div>

                      <div className="col-lg-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your Email id"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter your Phone Number"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Enter your Email id"
                        />
                      </div>
                      <div className="col-lg-6 mb-3">
                        <input
                          type="number"
                          className="form-control"
                          placeholder="Enter your Phone Number"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-3 col-md-4 text-center mt-3 mt-md-0">
                    <img
                      className="w-full px-3 px-lg-4 mb-3"
                      src="https://play-lh.googleusercontent.com/C9CAt9tZr8SSi4zKCxhQc9v4I6AOTqRmnLchsu1wVDQL0gsQ3fmbCVgQmOVM1zPru8UH=w240-h480-rw"
                    />
                    <p className="text-[16px] mt-1">Mr. John Smith</p>
                    <p className="text-[16px] mt-1">Sr. Human Resources</p>
                    <p className="text-[16px] mt-1">#EMP0013245</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ProjectManagerProfile;
