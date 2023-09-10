import { Link } from "react-router-dom";
//SVG
import { ReactComponent as Search } from "../../assets/svg/search-normal.svg";
import { ReactComponent as Setting } from "../../assets/svg/settings.svg";
//Components
import Pagination from "../../components/common/pagination";
import TableHeader from "../../components/common/tableHeader";
import SingleDessertationExpert from "../../components/pages/dissertationExpert/singleissertationExpert";

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
    title: "کد ملی",
    style: "col-span-2",
  },
  {
    title: "دانشکده",
    style: "col-span-2",
  },
];

const dissertationExpert = [
  {
    id: 1,
    fname: "علی",
    lname: "محجوب",
    personaliCode: "88784521",
    nationalCode: "5840062911",
    collage: "کامپیوتر",
  },
  {
    id: 2,
    fname: "علی",
    lname: "موسایی",
    personaliCode: "88784521",
    nationalCode: "4569876988",
    collage: "کامپیوتر",
  },
  {
    id: 3,
    fname: "میلاد",
    lname: "زاهد",
    personaliCode: "88784521",
    nationalCode: "1236544987",
    collage: "کامپیوتر",
  },
];

const DissertationExpert = () => {
  const generateTable = () => {
    return dissertationExpert.length ? (
      <div className="bg-white px-2 rounded-b-md">
        {dissertationExpert.map((singleDissertationExpert, index) => (
          <SingleDessertationExpert
            key={index}
            index={index}
            singleDissertationExpert={singleDissertationExpert}
            lastIndex={dissertationExpert.length - 1}
          />
        ))}
      </div>
    ) : (
      <span className="bg-orange-300 w-fit self-center p-5 rounded-md my-5">
        متاسفانه هیچ داده ای یافت نشد!
      </span>
    );
  };

  return (
    <div className="mt-10 flex justify-center">
      <div className="w-10/12 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row gap-8 sm:items-center justify-between">
          <div className="flex items-center gap-10">
            <h2 className="text-xl font-semibold ">
              {" "}
              اطلاعات کارشناس امور پایان‌نامه
            </h2>
            <span className="text-[#2080F6] bg-[#EBF1FD] py-1 px-4 rounded-full">
              100<span className="px-1">کارشناس</span>
            </span>
          </div>
          <Link className="self-end" to={"add"}>
            <button className="bg-[#435bf1] duration-300 ease-in-out text-white px-5 py-2 rounded-md hover:bg-white hover:text-[#435bf1] border-2 border-[#435bf1]">
              افزودن
            </button>
          </Link>
        </div>
        <div className="flex flex-col items-start sm:gap-5">
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
              <span> کد ملی</span>
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
        {dissertationExpert.length > 0 ? (
          <Pagination count={dissertationExpert.length} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default DissertationExpert;
