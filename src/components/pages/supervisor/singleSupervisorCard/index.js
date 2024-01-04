import { useState } from "react";
import { Link } from "react-router-dom";

//Component
import DeleteSupervisorModal from "../deleteSupervisor";
import { Cookies } from "react-cookie";
import { DeActiveUser } from "../../../../services/student";
import DeleteStudentModal from "../../student/deleteStudent";
import { toast } from "react-toastify";

const SingleSuperviserCard = ({
  singleSupervisor,
  index,
  lastIndex,
  action,
}) => {
  const [enabled, setEnabled] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const cookies = new Cookies();
  const [token, setCookie] = useState(cookies.get("token"));

  const asyncDeActiveUser = async () => {
    setIsLoading(true);
    try {
      const response = await DeActiveUser(token, singleSupervisor.userId);

      //check repsonse status
      if (response.status === 200) {
        // console.log(response.data);
        toast.success("تغییرات با موفقیت ثبت شد.");
        setIsShowDeleteModal(false);
        action();
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
    setIsShowDeleteModal(false);
  };
  return (
    <>
      <div
        className={`grid grid-cols-12 w-full ${
          index !== lastIndex ? "border-b" : ""
        } text-center justify-items-center bg-white py-3 items-center  my-2 font-medium text-[#74787C]`}
      >
        <span className="col-span-1 ">{index + 1}</span>
        <span className="w-full col-span-2 truncate">
          {singleSupervisor.firsName || singleSupervisor.firstName}
        </span>
        <span className="w-full col-span-2 truncate">
          {singleSupervisor.lastName}
        </span>
        <span className="w-full col-span-2 truncate">
          {singleSupervisor.nationalCode}
        </span>
        <span className="w-full col-span-2 truncate">
          {singleSupervisor.collegeName || singleSupervisor.college}
        </span>
        <div className="flex">
          <label class="inline-flex relative items-center mr-5 cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={
                singleSupervisor.active === undefined
                  ? enabled
                  : !singleSupervisor.active
              }
              readOnly
            />
            <div
              onClick={() => {
                setIsShowDeleteModal(true);
                setEnabled(!enabled);
                console.log(singleSupervisor.active === undefined);
              }}
              className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#435bf1]"
            ></div>
          </label>
        </div>

        <div className="flex flex-wrap items-center justify-center col-span-2 gap-2">
          {/* <button
            onClick={() => setIsShowDeleteModal(true)}
            className="duration-200 px-4 py-2 hover:border-[#ED2E2E] hover:text-[#ED2E2E] text-[#717171] text-sm border-2 rounded-md "
          >
            حذف
          </button> */}
          <Link
            to={`edit/${singleSupervisor.userId}`}
            className="duration-200 px-4 py-2 hover:border-[#F4B740] hover:text-[#F4B740] text-[#717171] text-sm border-2 rounded-md"
          >
            ویرایش
          </Link>
          {/* <Link
          //   to={`/commites/detail/${singleSupervisor.id}`}
          >
            <button className="duration-200 px-4 py-2 hover:border-[#00BA88] hover:text-[#00BA88] text-[#717171] text-sm border-2 rounded-md">
              جزئیات
            </button>
          </Link> */}
        </div>
        {isShowDeleteModal && (
          <DeleteStudentModal
            id={singleSupervisor.userId}
            name={singleSupervisor.firsName + " " + singleSupervisor.lastName}
            isShowModal={isShowDeleteModal}
            action={asyncDeActiveUser}
            active={singleSupervisor.active}
          />
        )}
      </div>
    </>
  );
};

export default SingleSuperviserCard;
