import { useState, useEffect } from "react";
//SVG
import { ReactComponent as Search } from "../../assets/svg/search-normal.svg";
import { ReactComponent as Close } from "../../assets/svg/closeCircle.svg";
import { ReactComponent as Setting } from "../../assets/svg/settings.svg";
import { ReactComponent as Open } from "../../assets/svg/openbook.svg";
//Components
import TableHeader from "../../components/common/tableHeader";
import SingleList from "./singlelist";
import Pagination from "../../components/common/pagination";
import {
  DownloadDissertation,
  GetAllDissertation,
  GetCollegeUni,
} from "../../services/dissertation";
//Cookie
import { Cookies } from "react-cookie";
import { GetReportSystemCount } from "../../services/dashboard";

//static data
const tableHeader = [
  {
    title: "#",
    style: "col-span-1",
  },
  // {
  //   title: " نام",
  //   style: "col-span-1",
  // },
  // {
  //   title: " نام خانوادگی",
  //   style: "col-span-",
  // },
  // {
  //   title: "شماره دانشجویی",
  //   style: "col-span-2",
  // },
  {
    title: "وضعیت",
    style: "col-span-3",
  },
  {
    title: "عنوان",
    style: "col-span-3",
  },
  {
    title: "پایان‌نامه",
    style: "col-span-1",
  },
  {
    title: "صورت جلسه",
    style: "col-span-1",
  },
  {
    title: "تغییر وضعیت",
    style: "col-span-3",
  },
];

const thesis = [
  {
    id: "1",
    name: "علی",
    family: "محجوب",
    number: "3981231096",
    title: " پایان‌نامه",
  },
  {
    id: "2",
    name: "علی",
    family: "محجوب",
    number: "3981231095",
    title: "سامانه پایان‌نامه",
  },
  {
    id: "3",
    name: "علی",
    family: "محجوب",
    number: "3981231094",
    title: "سامانه پایان‌نامه",
  },
];

const Dissertation = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isFinish, setIsFinish] = useState(false);
  const cookies = new Cookies();
  const [token, setCookie] = useState(cookies.get("token"));
  const [dataSearch, setDataSearch] = useState({});

  const updateData = (e) => {
    setDataSearch({
      ...dataSearch,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    asyncGetAllDisertation();
    asyncGetReportSystemCount();
  }, []);

  const asyncGetAllDisertation = async (num = 1) => {
    const pageSize = 5;
    const { fullName, userName, title } = dataSearch;
    console.log(num);
    setIsLoading(true);
    try {
      const response = await GetAllDissertation(
        token,
        num,
        pageSize,
        fullName,
        userName,
        title
      );
      // const response = await GetCollegeUni(token);

      //check repsonse status
      if (response.status === 200) {
        console.log(response);
        setData(response.data);
        if (response.data.length < 5) {
          setIsFinish(true);
        } else {
          setIsFinish(false);
        }
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  const asyncGetReportSystemCount = async () => {
    setIsLoading(true);
    try {
      const response = await GetReportSystemCount();
      // const response = await GetCollegeUni(token);

      //check repsonse status
      if (response.status === 200) {
        // console.log(response);
        setCount(response.data.dissertationCount);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const generateTable = () => {
    return data.length > 0 ? (
      <div className="px-2 bg-white rounded-b-md ">
        {Array.isArray(data) &&
          data.map((singleThesis, index) => (
            <SingleList
              key={index}
              index={index}
              singleThesis={singleThesis}
              lastIndex={thesis.length - 1}
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
    <div className="flex justify-center text-base mt-10">
      <div className="flex flex-col justify-center w-10/12 gap-5">
        <div className="flex flex-row items-start justify-between">
          <div className="flex pt-1 felx-col w-fit">
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
              <p className="text-xl font-bold">پایان نامه ها</p>
              <span className="text-[#2080F6] bg-[#EBF1FD] py-1 px-4 rounded-full">
                {count}
                <span className="px-2">عدد</span>
              </span>
            </div>
          </div>
          {/* <div className="flex flex-col self-end w-fit md:flex-row md:items-center">
            <span
              onClick={() => setPage(1)}
              className={`flex gap-1 px-4 cursor-pointer py-2  rounded-md flex-row-reverse ${
                page === 1 ? "text-white bg-[#2286f8]" : ""
              }`}
            >
              پایان نامه های تایید نشده
              <Open />
            </span>
            <span
              onClick={() => setPage(2)}
              className={`flex gap-1 px-4 cursor-pointer py-2  rounded-md flex-row-reverse ${
                page === 2 ? "text-white bg-[#2286f8]" : ""
              }`}
            >
              پایان نامه های تایید شده
              <Close />
            </span>
          </div> */}
        </div>

        <div className="flex flex-col items-start sm:gap-5 my-3">
          <span className="flex flex-row-reverse">
            جستجو بر اساس :
            <Setting />
          </span>
          <div className="flex flex-col items-start sm:flex-row sm:items-center sm:gap-8 ">
            <div className="flex flex-col ">
              <span>نام و نام خانوادگی</span>
              <input
                name="fullName"
                type={"text"}
                className="h-10 p-2 mb-3 bg-white border-2 rounded-md "
                onChange={updateData}
              />
            </div>
            <div className="flex flex-col">
              <span>شماره دانشجویی</span>
              <input
                name="userName"
                className="h-10 p-2 mb-3 bg-white border-2 rounded-md "
                type={"text"}
                onChange={updateData}
              />
            </div>
            <div className="flex gap-x-10">
              <button
                onClick={() => asyncGetAllDisertation()}
                className="bg-[#435bf1] flex flex-row-reverse h-10 justify-center items-center mt-3 px-6 gap-2 rounded-md text-white"
              >
                جستجو
                <Search />
              </button>
              {/* <button
                onClick={asyncGetAllUser}
                className="bg-[#435bf1] flex flex-row-reverse h-10 justify-center items-center mt-3 px-6 gap-2 rounded-md text-white"
              >
                نمایش همه
              </button> */}
            </div>
          </div>
        </div>
        <TableHeader minSize="min-w-[900px]" tableHeader={tableHeader}>
          {generateTable()}
        </TableHeader>
        <Pagination
          action={(num) => {
            asyncGetAllDisertation(num);
          }}
          setPageNumber={setPageNumber}
          pageNumber={pageNumber}
          isFinish={isFinish}
        />
      </div>
    </div>
  );
};

export default Dissertation;
