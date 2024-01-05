import { useState } from "react";
import { useEffect } from "react";
//SVG
import { Link } from "react-router-dom";
import { ReactComponent as Chart } from "../../assets/svg/chart.svg";
//Services
import {
  AddNewCollege,
  GetCollegeUni,
  GetReportSystemCount,
} from "../../services/dashboard";
import Loding from "../../components/common/loding";
import { GetAllstatus } from "../../services/common";
import TableHeader from "../../components/common/tableHeader";
import SingleListCollege from "./singlelistCollege";
import { Cookies } from "react-cookie";
import { toast } from "react-toastify";
const tableHeader = [
  {
    title: "#",
    style: "col-span-2",
  },
  {
    title: " نام دانشکده",
    style: "col-span-7",
  },
  {
    title: " ",
    style: "col-span-3",
  },
];
const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAddCollege, setIsAddCollege] = useState(false);
  const [data, setData] = useState([]);
  const [dataCollege, setDataCollege] = useState([]);
  const [dataCollegeAdd, setDataCollegeAdd] = useState({});
  const cookies = new Cookies();

  useEffect(() => {
    asyncGetReportSystemCount();
    asyncGetCollegeUni();
  }, []);
  const updateData = (e) => {
    setDataCollegeAdd({
      ...dataCollegeAdd,
      [e.target.name]: e.target.value,
    });
  };

  const asyncGetReportSystemCount = async () => {
    setIsLoading(true);
    try {
      const response = await GetReportSystemCount();
      // const response2 = await GetAllstatus();

      //check repsonse status
      if (response.status === 200) {
        // console.log(response);
        setData(response.data);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  const asyncGetCollegeUni = async () => {
    setIsLoading(true);
    try {
      const response = await GetCollegeUni();
      // const response2 = await GetAllstatus();

      //check repsonse status
      if (response.status === 200) {
        // console.log(response);
        setDataCollege(response.data);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  const asyncAddNewCollege = async () => {
    const token = cookies.get("token");
    const { title, dsr, code } = dataCollegeAdd;
    // const code = dataCollege[dataCollege.length - 1].code + 1;
    setIsLoading(true);
    try {
      const response = await AddNewCollege(token, title, dsr, code);
      // const response2 = await GetAllstatus();

      //check repsonse status
      if (response.status === 200) {
        console.log(response);
        toast.success(response.data.message);
        setIsAddCollege(false);
        asyncGetCollegeUni();
        // setData(response.data);
      } else {
        toast.error(response.data.errorList[0]);
        // console.log(response);
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const generateTable = () => {
    return dataCollege.length > 0 ? (
      <div className="px-2 bg-white rounded-b-md ">
        {dataCollege.map((singleThesis, index) => (
          <SingleListCollege
            action={() => asyncGetCollegeUni()}
            key={index}
            index={index}
            singleData={singleThesis}
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
    <div className="flex flex-col items-center justify-center mt-10 px-5 mx-auto w-full">
      <div className="w-10/12 flex flex-col gap-8 items-center ">
        {isLoading ? (
          <Loding />
        ) : (
          <div className="flex justify-center gap-10 lg:w-10/12 w-11/12 flex-wrap ">
            <Link to={"student"}>
              <div className="flex flex-col gap-3 rounded-md font-medium text-black bg-[#fff] p-3 shadow-2xl">
                <div className="flex justify-between">
                  <span>دانشجویان</span>
                  <span>
                    {data.studentCount}
                    <span className="px-1">نفر</span>
                  </span>
                </div>
                <Chart className="text-[#2080F6]" />
              </div>
            </Link>
            <Link to={"dissertation"}>
              <div className="flex flex-col gap-3 rounded-md font-medium text-black bg-[#fff] p-3 shadow-2xl ">
                <div className="flex justify-between">
                  <span>پایان‌نامه</span>
                  <span>
                    {data.dissertationCount}
                    <span></span>
                  </span>
                </div>
                <Chart className="text-[#2080F6]" />
              </div>
            </Link>
            <Link to={"supervisor"}>
              <div className="flex flex-col gap-3 rounded-md font-medium text-black bg-[#fff] p-3 shadow-2xl">
                <div className="flex justify-between">
                  <span>استاد راهنما</span>
                  <span>
                    {data.teachersCount}
                    <span>نفر</span>
                  </span>
                </div>
                <Chart className="text-[#2080F6]" />
              </div>
            </Link>

            {/* <Link to={"dissertationexpert"}>
            <div className="flex flex-col gap-3 rounded-md font-medium text-black bg-[#fff] p-3 shadow-2xl ">
              <div className="flex justify-between">
                <span>کارشناس امور پایان‌نامه </span>
                <span>
                  100<span>نفر</span>
                </span>
              </div>
              <Chart className="text-[#2080F6]" />
            </div>
          </Link>
          <Link to={"graduateexpert"}>
            <div className="flex flex-col gap-3 rounded-md font-medium text-black bg-[#fff] p-3 shadow-2xl ">
              <div className="flex justify-between">
                <span>کارشناس تحصیلات تکمیلی</span>
                <span>
                  100<span>نفر</span>
                </span>
              </div>
              <Chart className="text-[#2080F6]" />
            </div>
          </Link> */}
          </div>
        )}
        <div className="flex flex-col max-w-full gap-6  mt-3 rounded-md font-medium text-black bg-[#fff] p-3">
          <div className="w-full flex justify-between">
            <span>تنظیمات دانشکده : </span>
            <button
              onClick={() => setIsAddCollege(true)}
              className="border-2 border-[#435bf1] py-1 px-3 rounded-md text-[#435bf1]"
            >
              افزودن دانشکده
            </button>
          </div>
          <TableHeader minSize="min-w-[500px]" tableHeader={tableHeader}>
            {isLoading ? <Loding /> : generateTable()}
          </TableHeader>
        </div>
      </div>
      {isAddCollege ? (
        <div className="fixed flex justify-center items-center w-full h-full z-10 bg-[#76767694] top-0 right-0">
          <div className="flex flex-col bg-white p-5 rounded-sm w-8/12">
            <div className="flex flex-col-reverse gap-y-5">
              <span className="text-xl font-bold">افزودن دانشکده</span>
              <button
                onClick={() => setIsAddCollege(false)}
                className="bg-[#EBF1FD] w-fit flex items-center gap-1 p-2 rounded-md text-[#2080F6]"
              >
                بازگشت
              </button>
            </div>
            <div className="grid self-center w-full grid-cols-1 p-5 bg-white rounded-md md:grid-cols-2 gap-x-16 gap-y-3">
              <span className="col-span-2">
                <span className="font-bold mx-1 text-red-500">نکته :</span>
                صورتی که کد دانشکده صفر یا خالی وارد شود به صورت خودکار در سیستم
                تنظیم میشود.
              </span>
              <div className="flex flex-col gap-1">
                <label className="font-medium">عنوان</label>
                <input
                  name="title"
                  onChange={updateData}
                  placeholder="عنوان را وارد کنید"
                  className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-medium">توضیحات</label>
                <input
                  name="dsr"
                  onChange={updateData}
                  placeholder="توضیحات را وارد کنید"
                  className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label className="font-medium">کد دانشکده</label>
                <input
                  name="code"
                  onChange={updateData}
                  placeholder="کد دانشکده را وارد کنید"
                  className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
                />
              </div>
              <button
                onClick={asyncAddNewCollege}
                className="md:col-span-2 w-fit justify-self-end mt-5 bg-[#2080F6] text-white py-2 px-4 rounded-md hover:bg-white hover:text-[#2080F6] border-2 border-[#2080F6] duration-300 ease-in-out"
              >
                افزودن
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dashboard;
