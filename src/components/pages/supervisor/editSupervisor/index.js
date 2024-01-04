//SVG
import { Link, useNavigate, useParams } from "react-router-dom";
import { ReactComponent as Back } from "../../../../assets/svg/backward.svg";
import { useState } from "react";
import { useEffect } from "react";
import {
  GetCollegeUni,
  GetUserById,
  UpdateTeacher,
} from "../../../../services/supervisor";
import Loding from "../../../common/loding";
import { Cookies } from "react-cookie";
import { toast } from "react-toastify";
import LoadingBtn from "../../../common/loadingBtn";
import LoadingBtn2 from "../../../common/loadingBtn2";
//static data
const supervisor = {
  fname: "علی",
  lname: "محجوب",
  supervisorNumber: "3981231095",
  collage: "کامپیوتر",
  email: "test@email.com",
  nationalcode: "2741445365",
};
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
const EditSupervisor = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);
  const [college, setColleges] = useState([]);
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [token, setCookie] = useState(cookies.get("token"));

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    asyncGetUserById();
    asyncGetCollageList();
  }, []);
  const asyncGetUserById = async () => {
    setIsLoading(true);
    try {
      const response = await GetUserById(id);

      //check repsonse status
      if (response.status === 200) {
        setData(response.data);
        console.log(response);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
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
  const asyncUpdateTeacher = async () => {
    setIsLoadingBtn(true);
    try {
      const response = await UpdateTeacher(token, data, id);

      //check repsonse status
      if (response.status === 200) {
        console.log(response);
        toast.success("تغییرات با موفقیت اعمال شد.");
        navigate(`/admin/supervisor`);
      } else {
        toast.error("مشکل در اعمال تغییرات");
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoadingBtn(false);
  };
  return (
    <div className="flex justify-center w-full pt-10">
      <div className="flex flex-col w-11/12 gap-10">
        <div className="flex flex-col-reverse gap-y-5">
          <span className="text-xl font-bold">ویرایش استاد راهنما</span>
          <Link to={"/admin/supervisor"}>
            <button className="bg-[#EBF1FD] w-fit flex items-center gap-1 p-2 rounded-md text-[#2080F6]">
              <Back />
              بازگشت
            </button>
          </Link>
        </div>
        {isLoading ? (
          <Loding />
        ) : (
          <div className="grid self-center w-11/12 grid-cols-1 p-5 bg-white rounded-md shadow-xl md:grid-cols-2 gap-x-16 gap-y-3 sm:w-8/12">
            <div className="flex flex-col gap-1">
              <label className="font-medium">نام</label>
              <input
                name="firsName"
                onChange={updateData}
                placeholder="نام را وارد کنید"
                className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
                defaultValue={data.firsName || ""}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium">نام خانوادگی</label>
              <input
                name="lastName"
                onChange={updateData}
                placeholder="نام خانوادگی را وارد کنید"
                className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
                defaultValue={data.lastName || ""}
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium">دانشکده</label>
              <select
                name="collegeRef"
                onChange={updateData}
                value={data.collegeRef || ""}
                className="border-2 border-[#9B9B9B] rounded-md mt-1 h-10 p-1 sm:text-base text-sm "
              >
                <option disabled selected value="">
                  دانشکده مورد نظر خود را انتخاب کنید
                </option>
                {college.map((option, index) => (
                  <option key={index} value={option.id}>
                    {option.title}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium">کد ملی</label>
              <input
                name="nationalCode"
                onChange={updateData}
                defaultValue={data.nationalCode || ""}
                placeholder="کد ملی را وارد کنید"
                className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium">کد پرسنلی</label>
              <input
                name="userName"
                onChange={updateData}
                defaultValue={data.userName || ""}
                placeholder="کد پرسنلی را وارد کنید"
                className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
              />
            </div>
            {/* <div className="flex flex-col gap-1">
              <label className="font-medium">ایمیل</label>
              <input
                name="Email"
                onChange={updateData}
                defaultValue={data.email || ""}
                placeholder="ایمیل را وارد کنید"
                className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
              />
            </div> */}
            {/* <LoadingBtn
              text={"ویرایش"}
              isLoading={isLoadingBtn}
              action={asyncUpdateTeacher}
              className={
                "bg-[#2080F6] w-fit justify-self-end mb-0 md:col-span-2"
              }
            /> */}
            <button
              onClick={asyncUpdateTeacher}
              disabled={isLoadingBtn}
              className="md:col-span-2 w-fit justify-self-end mt-5 bg-[#2080F6] text-white py-2 px-4 rounded-md hover:bg-white hover:text-[#2080F6] border-2 border-[#2080F6] duration-300 ease-in-out"
            >
              {isLoadingBtn ? (
                <Loding className={"px-2 h-6"} className2={"hidden"} />
              ) : (
                "ویرایش"
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EditSupervisor;
