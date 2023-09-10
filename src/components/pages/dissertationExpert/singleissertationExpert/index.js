import { useState } from "react";
import { Link } from "react-router-dom";

//Component
import DeleteExpertModal from "../deleteExpert";

const SingleDessertationExpert = ({
  singleDissertationExpert,
  index,
  lastIndex,
}) => {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  return (
    <>
      <div
        className={`grid grid-cols-12 gap-5 w-full ${
          index !== lastIndex ? "border-b" : ""
        } text-center justify-items-center bg-white py-3 items-center  my-2 font-medium text-[#74787C]`}
      >
        <span className="col-span-1 text-center">{index + 1}</span>
        <span className="w-full col-span-1 truncate">
          {singleDissertationExpert.fname}
        </span>
        <span className="w-full col-span-2 truncate">
          {singleDissertationExpert.lname}
        </span>
        <span className="w-full col-span-2 truncate">
          {singleDissertationExpert.personaliCode}
        </span>
        <span className="w-full col-span-2 truncate">
          {singleDissertationExpert.nationalCode}
        </span>
        <span className="w-full col-span-2 truncate">
          {singleDissertationExpert.collage}
        </span>
        <div className="flex flex-wrap items-center justify-center col-span-2 gap-2">
          <button
            onClick={() => setIsShowDeleteModal(true)}
            className="duration-200 px-4 py-2 hover:border-[#ED2E2E] hover:text-[#ED2E2E] text-[#717171] text-sm border-2 rounded-md "
          >
            حذف
          </button>
          <Link
            to={`edit/id=${singleDissertationExpert.id}`}
            className="duration-200 px-4 py-2 hover:border-[#F4B740] hover:text-[#F4B740] text-[#717171] text-sm border-2 rounded-md"
          >
            ویرایش
          </Link>
          {/* <Link
          //   to={`/commites/detail/${singleDissertationExpert.id}`}
          >
            <button className="duration-200 px-4 py-2 hover:border-[#00BA88] hover:text-[#00BA88] text-[#717171] text-sm border-2 rounded-md">
              جزئیات
            </button>
          </Link> */}
        </div>
        {isShowDeleteModal && (
          <DeleteExpertModal
            id={singleDissertationExpert.id}
            name={
              singleDissertationExpert.fname +
              " " +
              singleDissertationExpert.lname
            }
            isShowModal={isShowDeleteModal}
            closeModalHandler={() => setIsShowDeleteModal(false)}
          />
        )}
      </div>
    </>
  );
};

export default SingleDessertationExpert;
