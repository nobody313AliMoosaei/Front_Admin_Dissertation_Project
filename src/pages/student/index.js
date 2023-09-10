import { Link } from "react-router-dom";
//SVG
import { ReactComponent as Search } from "../../assets/svg/search-normal.svg";
import { ReactComponent as Setting } from "../../assets/svg/settings.svg";
//Components
import Pagination from "../../components/common/pagination";
import TableHeader from "../../components/common/tableHeader";
import SingleStudentCard from "../../components/pages/student/singleStudentCard";

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
    title: "شماره دانشجویی",
    style: "col-span-2",
  },
  {
    title: "دانشکده",
    style: "col-span-1",
  },
  {
    title: "استاد راهنما",
    style: "col-span-2",
  },
];

const students = [
  {
    id: 1,
    fname: "علی",
    lname: "محجوب",
    studentNumber: "3981231095",
    collage: "کامپیوتر",
    supervisor: "استاد صفخانی",
  },
  {
    id: 2,
    fname: "علی",
    lname: "موسایی",
    studentNumber: "3981231102",
    collage: "کامپیوتر",
    supervisor: "استاد صفخانی",
  },
  {
    id: 3,
    fname: "میلاد",
    lname: "زاهد",
    studentNumber: "3981231061",
    collage: "کامپیوتر",
    supervisor: "استاد صفخانی",
  },
];

const Student = () => {
  const generateTable = () => {
    return students.length ? (
      <div className="px-2 bg-white rounded-b-md">
        {students.map((singleStudent, index) => (
          <SingleStudentCard
            key={index}
            index={index}
            singleStudent={singleStudent}
            lastIndex={students.length - 1}
          />
        ))}
      </div>
    ) : (
      <span className="self-center p-5 my-5 bg-orange-300 rounded-md w-fit">
        متاسفانه هیچ داده ای یافت نشد!
      </span>
    );
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col w-10/12 gap-5">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div className="flex items-center gap-10">
            <h2 className="text-xl font-semibold "> اطلاعات دانشجو</h2>
            <span className="text-[#2080F6] bg-[#EBF1FD] py-1 px-4 rounded-full">
              100<span>دانشجو</span>
            </span>
          </div>
          <Link className="self-end" to={"add"}>
            <button className="bg-[#435bf1] duration-300 ease-in-out text-white px-5 py-2 rounded-md hover:bg-white hover:text-[#435bf1] border-2 border-[#435bf1]">
              افزودن دانشجو
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-start sm:gap-5 my-3">
          <span className="flex flex-row-reverse">
            جستجو بر اساس :
            <Setting />
          </span>
          <div className="flex flex-col items-start sm:flex-row sm:items-center sm:gap-8 ">
            <div className="flex flex-col ">
              <span>نام خانوادگی</span>
              <input
                id="title"
                type={"text"}
                className="h-10 p-2 mb-3 bg-white border-2 rounded-md "
              />
            </div>
            <div className="flex flex-col">
              <span>شماره دانشجویی</span>
              <input
                id="studentNumber"
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
        </div>
        <TableHeader
          // meta={meta}
          tableHeader={tableHeader}
          minSize="min-w-[900px]"
        >
          {generateTable()}
        </TableHeader>
        {students.length > 0 ? <Pagination count={students.length} /> : <></>}
      </div>
    </div>
  );
};

export default Student;
