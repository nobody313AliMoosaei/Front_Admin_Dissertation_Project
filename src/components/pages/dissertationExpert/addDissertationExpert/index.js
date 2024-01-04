//SVG
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../../../assets/svg/backward.svg";
import { useState } from "react";
import { useEffect } from "react";
import { Cookies } from "react-cookie";
import { GetCollegeUni } from "../../../../services/student";
import { AddNewUser } from "../../../../services/dissertationExpert";
import Loding from "../../../common/loding";
import { toast } from "react-toastify";
//static data
const collage = [
  {
    label: "کامپیوتر",
    value: "کامپیوتر",
  },
  {
    label: "برق",
    value: "برق",
  },
  {
    label: "معماری",
    value: "معماری",
  },
  {
    label: "عمران",
    value: "عمران",
  },
];

const AddDissertationExpert = () => {
  const [data, setData] = useState({});
  const [colleges, setColleges] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [token, setCookie] = useState(cookies.get("token"));

  useEffect(() => {
    asyncGetCollageList();
  }, []);

  //get college
  const asyncGetCollageList = async () => {
    setIsLoading(true);
    try {
      const response = await GetCollegeUni(token);

      //check repsonse status
      if (response.status === 200) {
        setColleges([...response.data]);
        // console.log(response);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  // send data for add New User
  const asyncAddNewUser = async () => {
    setIsLoading(true);
    try {
      const response = await AddNewUser(token, data, 7);

      //check repsonse status
      if (response.status === 200) {
        toast.success("با موفقیت ثبت شد");
        navigate(`/admin/dissertationexpert`);
        console.log(response);
      } else {
        toast.success(response.data.message);
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="flex justify-center w-full pt-10">
      <div className="flex flex-col w-11/12 gap-10">
        <div className="flex flex-col-reverse gap-y-5">
          <span className="text-xl font-bold">
            افزودن کارشناس امور پایان‌نامه
          </span>
          <Link to={"/admin/dissertationexpert"}>
            <button className="bg-[#EBF1FD] w-fit flex items-center gap-1 p-2 rounded-md text-[#2080F6]">
              <Back />
              بازگشت
            </button>
          </Link>
        </div>
        <div className="grid self-center w-11/12 grid-cols-1 p-5 bg-white rounded-md shadow-xl md:grid-cols-2 gap-x-16 gap-y-3 sm:w-8/12">
          <div className="flex flex-col gap-1">
            <label className="font-medium">نام</label>
            <input
              name="firstName"
              onChange={updateData}
              placeholder="نام را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">نام خانوادگی</label>
            <input
              name="lastName"
              onChange={updateData}
              placeholder="نام خانوادگی را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div>
          {/* <div className="flex flex-col gap-1">
            <label className="font-medium">دانشکده</label>
            <select
              name="College"
              className="border-2 border-[#9B9B9B] rounded-md mt-1 h-10 p-1 sm:text-base text-sm "
            >
              <option disabled selected value="">
                دانشکده مورد نظر خود را انتخاب کنید
              </option>
              {collage.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div> */}
          <div className="flex flex-col gap-1">
            <label className="font-medium"> کدملی</label>
            <input
              name="nationalCode"
              onChange={updateData}
              placeholder="کدملی  را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium"> کدپرسنلی</label>
            <input
              name="userName"
              onChange={updateData}
              placeholder=" کدپرسنلی را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div>
          {/* <div className="flex flex-col gap-1">
            <label className="font-medium">ایمیل</label>
            <input
            name=""
            onChange={updateData}
              placeholder="ایمیل را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div> */}
          <button
            onClick={asyncAddNewUser}
            className="md:col-span-2 w-fit justify-self-end mt-5 bg-[#2080F6] text-white py-2 px-4 rounded-md hover:bg-white hover:text-[#2080F6] border-2 border-[#2080F6] duration-300 ease-in-out"
          >
            {isLoading ? (
              <Loding className2={"hidden"} className={"h-6 px-1"} />
            ) : (
              "افزودن"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDissertationExpert;
