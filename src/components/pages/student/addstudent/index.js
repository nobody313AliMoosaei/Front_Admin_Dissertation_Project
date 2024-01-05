//SVG
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../../../assets/svg/backward.svg";
import { useEffect, useState } from "react";
import {
  AddNewUser,
  GetCollegeUni,
  GetTeachersByCollegeRef,
} from "../../../../services/student";
import { GetAllTeachers } from "../../../../services/supervisor";
import { Cookies } from "react-cookie";
import Loding from "../../../common/loding";
import { toast } from "react-toastify";

const AddStudent = () => {
  const [data, setData] = useState({});
  const [teachers, setTeachers] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [filterTeachers, setFilterTeachres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [token, setCookie] = useState(cookies.get("token"));

  useEffect(() => {
    asyncGetCollageList();
    // asyncGetTeacherList();
  }, []);

  //get techers
  const asyncGetTeachersByCollegeRef = async (collegeRef) => {
    setIsLoading(true);
    try {
      const response = await GetTeachersByCollegeRef(token, collegeRef);

      //check repsonse status
      if (response.status === 200) {
        setFilterTeachres([...response.data]);
        // console.log(response);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  const asyncGetTeacherList = async () => {
    setIsLoading(true);
    try {
      const response = await GetAllTeachers(token);

      //check repsonse status
      if (response.status === 200) {
        setTeachers([...response.data]);
        setFilterTeachres([...response.data]);
        // console.log(response);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

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
    // console.log(data.firstName);
    if (
      data.Teacher_1 === undefined ||
      data.CollegeRef === undefined ||
      data.Teacher_1 === "" ||
      data.CollegeRef === ""
    ) {
      toast.error("اطلاعات کاربر ناقص است");
    } else {
      setIsLoading(true);
      try {
        const response = await AddNewUser(token, data);

        //check repsonse status
        if (response.status === 200) {
          // console.log(response);
          toast.success(" دانشجو با موفیقت اضافه شد.");
          navigate(`/admin/student`);
        } else {
          //error occure
          console.log(response);
          toast.error(response.data.errorList[0]);
        }
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    }
  };

  const updateData = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const filterteachers = (e) => {
    console.log(e.target.value);
    // console.log(teachers[0].collegRef);
    // const result = teachers.filter(
    //   (item) => Number(item.collegRef) === Number(e.target.value)
    // );
    // setFilterTeachres(result);
    asyncGetTeachersByCollegeRef(e.target.value);
    updateData(e);
  };
  return (
    <div className="flex justify-center w-full pt-10">
      <div className="flex flex-col w-11/12 gap-10">
        <div className="flex flex-col-reverse gap-y-5">
          <span className="text-xl font-bold">افزودن دانشجو</span>
          <Link className="w-fit" to={"/admin/student"}>
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
          <div className="flex flex-col md:col-span-1">
            <span className="sm:text-base font-medium text-sm">دانشکده</span>
            <select
              onChange={filterteachers}
              name="CollegeRef"
              value={data.collegRef}
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
            >
              <option disabled selected value="">
                دانشکده مورد نظر خود را انتخاب کنید
              </option>
              {colleges.map((option) => (
                <option key={option.code} value={option.id}>
                  {option.title}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col md:col-span-1">
            <span className="sm:text-base font-medium text-sm">
              استاد راهنما (اجباری)
            </span>
            <select
              name="Teacher_1"
              value={data.Teacher_1}
              onChange={(e) => {
                updateData(e);
              }}
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
            >
              <option disabled selected value="" className="">
                استاد راهنما مورد نظر خود را انتخاب کنید
              </option>
              {filterTeachers.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.firstName + " "}
                  {option.lastName}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">شماره دانشجویی</label>
            <input
              name="userName"
              onChange={updateData}
              placeholder="شماره دانشجویی را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div>
          {/* <div className="flex flex-col gap-1">
            <label className="font-medium">شماره ترم</label>
            <input
            name="firstName"
            onChange={updateData}
              placeholder="شماره ترم را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">ایمیل</label>
            <input
            name="firstName"
            onChange={updateData}
              placeholder="ایمیل را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div> */}
          <div className="flex flex-col gap-1">
            <label className="font-medium">کد ملی</label>
            <input
              name="nationalCode"
              onChange={updateData}
              placeholder="کد ملی را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div>
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

export default AddStudent;
