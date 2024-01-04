//SVG
import { Link, useNavigate, useParams } from "react-router-dom";
import { ReactComponent as Back } from "../../../../assets/svg/backward.svg";
import { GetUserById } from "../../../../services/dissertationExpert";
import { useEffect } from "react";
import { useState } from "react";
import { Cookies } from "react-cookie";
import { toast } from "react-toastify";
import { UpdateUser } from "../../../../services/student";
import LoadingBtn2 from "../../../common/loadingBtn2";
import Loding from "../../../common/loding";
//static data
const dissertationexpert = {
  id: 1,
  fname: "علی",
  lname: "محجوب",
  personaliCode: "88784521",
  nationalCode: "5840062911",
  collage: "کامپیوتر",
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
const EditDissertationExpert = () => {
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
  }, []);
  const asyncGetUserById = async () => {
    setIsLoading(true);
    console.log(id);
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
  const asyncUpdateUser = async () => {
    setIsLoadingBtn(true);
    try {
      const response = await UpdateUser(token, data, id);
      //check repsonse status
      if (response.status === 200) {
        console.log(response);
        navigate(`/admin/dissertationexpert`);
        toast.success("تغییرات با موفقیت اعمال شد.");
      } else {
        //error occure
        toast.error("مشکل در اعمال تغییرات");
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
          <span className="text-xl font-bold">
            ویرایش کارشناس امور پایان‌نامه
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
          {/* <div className="flex flex-col gap-1">
            <label className="font-medium">دانشکده</label>
            <select
              name="College"
              defaultValue={data.collage || ""}
              className="border-2 border-[#9B9B9B] rounded-md mt-1 h-10 p-1 sm:text-base text-sm "
            >
              <option disabled selected defaultValue={""}>
                دانشکده مورد نظر خود را انتخاب کنید
              </option>
              {collage.map((option) => (
                <option key={option.value} defaultValue={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div> */}
          <div className="flex flex-col gap-1">
            <label className="font-medium">کد پرسنلی </label>
            <input
              name="userName"
              onChange={updateData}
              placeholder="کد پرسنلی را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
              defaultValue={data.userName || ""}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">کد ملی</label>
            <input
              name="nationalCode"
              onChange={updateData}
              placeholder="کد ملی را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
              defaultValue={data.nationalCode || ""}
            />
          </div>
          {/* <div className="flex flex-col gap-1">
            <label className="font-medium">ایمیل</label>
            <input
            name=""
            onChange={updateData}
              placeholder="ایمیل را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
              defaultValue={data.email || ""}
            />
          </div> */}
          <button
            onClick={asyncUpdateUser}
            disabled={isLoadingBtn}
            className="md:col-span-2 w-fit justify-self-end mt-5 bg-[#2080F6] text-white p-2 rounded-md hover:bg-white hover:text-[#2080F6] border-2 border-[#2080F6] duration-300 ease-in-out"
          >
            {isLoadingBtn ? (
              <Loding className={"px-7 h-6"} className2={"hidden"} />
            ) : (
              "دخیره تغییرات"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditDissertationExpert;
