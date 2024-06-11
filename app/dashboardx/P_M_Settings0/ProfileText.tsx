import Link from "next/link";

function ProfileText(params: type) {
  return (
    <>
      <div className="d-flex align-items-center py-3">
        <div className="mr-3">
          <img
            className="w-[50px] h-[50px] rounded-full"
            src="image/profileIcon.png"
            alt=""
          />
        </div>
        <div className="mr-3">
          <h3 className="text-[16px] Poppins-Regular">Bala Divya</h3>
          <p className="text-[12px] mt-1 Poppins-Regular">Executive</p>
        </div>
        <div className="ml-5">
          <Link prefetch href="" className="mx-2">
            <img className="h-[25px]" src="image/editIcon2.png" alt="" />
          </Link>
          <Link prefetch href="" className="mx-2">
            <img className="h-[25px]" src="image/deleteIcon2.png" alt="" />
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProfileText;
