import { Link } from "react-router-dom";
import { useState } from "react";
//SVG
import { ReactComponent as Search } from "../../assets/svg/search-normal.svg";
//Components
import Pagination from "../../components/common/pagination";
import TableHeadersupervisor from "../../components/common/tableHeadersupervisor";
import SingleSupervisorCard from "../../components/pages/supervisor/singleSupervisorCard";

//static data
const tableHeader = [
  {
    title: "#",
    style: "col-span-1",
  },
  {
    title: " نام",
    style: "col-span-1",
  },
  {
    title: " نام خانوادگی",
    style: "col-span-2",
  },
  {
    title: "کد پرسنلی",
    style: "col-span-2",
  },
  {
    title: "دانشکده",
    style: "col-span-2",
  },
];

const supervisors = [
  {
    id: 1,
    fname: "علی",
    lname: "محجوب",
    supervisorNumber: "3981231095",
    collage: "کامپیوتر",
  },
  {
    id: 2,
    fname: "علی",
    lname: "موسایی",
    supervisorNumber: "3981231102",
    collage: "کامپیوتر",
  },
  {
    id: 3,
    fname: "میلاد",
    lname: "زاهد",
    supervisorNumber: "3981231061",
    collage: "کامپیوتر",
  },
];

const Supervisor = () => {
  const generateTable = () => {
    return supervisors.length ? (
      <div className="px-2 bg-white rounded-b-md">
        {supervisors.map((singlesupervisorr, index) => (
          <SingleSupervisorCard
            key={index}
            index={index}
            singleSupervisor={singlesupervisorr}
            lastIndex={supervisors.length - 1}
          />
        ))}
        <Pagination count={supervisors.length} />
      </div>
    ) : (
      <span className="self-center p-5 my-5 bg-orange-300 rounded-md w-fit">
        متاسفانه هیچ داده ای یافت نشد!
      </span>
    );
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col w-9/12 gap-6">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-10">
            <h2 className="text-xl font-semibold "> اطلاعات استاد راهنما </h2>
            <span className="text-[#2080F6] bg-[#EBF1FD] py-1 px-4 rounded-full">
              100<span>استاد راهنما</span>
            </span>
          </div>
          <Link className="self-end" to={"add"}>
            <button className="bg-[#435bf1] duration-300 ease-in-out text-white px-5 py-2 rounded-md hover:bg-white hover:text-[#435bf1] border-2 border-[#435bf1]">
              افزودن استاد راهنما
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-start sm:flex-row sm:items-center sm:gap-8">
          <div className="flex flex-col">
            <span>نام خانوادگی</span>
            <input
              id="title"
              type={"text"}
              className="h-10 p-2 mb-3 bg-white border-2 rounded-md "
            />
          </div>
          <div className="flex flex-col">
            <span>کد پرسنلی</span>
            <input
              id="supervisorNumber"
              className="h-10 p-2 mb-3 bg-white border-2 rounded-md "
              type={"text"}
            />
          </div>
          <div>
            <button
              //   onClick={searchHandler}
              className="bg-[#435bf1] flex flex-row-reverse h-10 justify-center items-center mt-3 px-6 gap-2 rounded-md text-white"
            >
              جستجو
              <Search />
            </button>
          </div>
        </div>
        <TableHeadersupervisor
          // meta={meta}
          tableHeader={tableHeader}
          minSize="min-w-[900px]"
        >
          {generateTable()}
        </TableHeadersupervisor>
      </div>
    </div>
  );
};

export default Supervisor;
