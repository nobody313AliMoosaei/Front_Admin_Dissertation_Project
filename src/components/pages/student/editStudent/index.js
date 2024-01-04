//SVG
import { Link, useNavigate, useParams } from "react-router-dom";
import { ReactComponent as Back } from "../../../../assets/svg/backward.svg";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";
import { GetAllTeachers, GetUserById } from "../../../../services/supervisor";
import {
  GetCollegeUni,
  GetTeachersByCollegeRef,
  UpdateUser,
} from "../../../../services/student";
import { toast } from "react-toastify";
import Loding from "../../../common/loding";
//static data
const student = {
  fname: "علی",
  lname: "محجوب",
  studentNumber: "3981231095",
  collage: "کامپیوتر",
  supervisor: "استاد صفخانی",
  nationalcode: "2745554123",
  email: "test@email.com",
  term: 7,
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
const EditStudent = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingBtn, setIsLoadingBtn] = useState(false);
  const [teachers, setTeachers] = useState([]);
  const [colleges, setColleges] = useState([]);
  const [filterTeachers, setFilterTeachres] = useState([]);
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
    asyncGetTeacherList();
  }, []);

  const asyncGetUserById = async () => {
    setIsLoading(true);
    try {
      const response = await GetUserById(id);

      //check repsonse status
      if (response.status === 200) {
        setData(response.data);
        console.log(response);
        asyncGetTeachersByCollegeRef(response.data.collegeRef);
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
        // console.log(response);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  const filterteachers = (e) => {
    // const result = teachers.filter(
    //   (item) => Number(item.collegRef) === Number(e.target.value)
    // );
    // setFilterTeachres(result);
    asyncGetTeachersByCollegeRef(e.target.value);
    updateData(e);
  };

  const asyncUpdateUser = async () => {
    setIsLoading(true);
    try {
      const response = await UpdateUser(token, data, id);
      //check repsonse status
      if (response.status === 200) {
        console.log(response);
        toast.success("تغییرات با موفقیت اعمال شد.");
        navigate(`/admin/student`);
      } else {
        //error occure
        toast.error("مشکل در اعمال تغییرات");
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <div className="flex justify-center w-full pt-10">
      <div className="flex flex-col w-11/12 gap-10">
        <div className="flex flex-col-reverse gap-y-5">
          <span className="text-xl font-bold">ویرایش دانشجو</span>
          <Link to={"/admin/student"}>
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
              defaultValue={data.firsName || ""}
              placeholder="نام را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">نام خانوادگی</label>
            <input
              name="lastName"
              onChange={updateData}
              defaultValue={data.lastName || ""}
              placeholder="نام خانوادگی را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">دانشکده</label>
            <select
              name="collegeRef"
              onChange={filterteachers}
              value={data.collegeRef || ""}
              className="border-2 border-[#9B9B9B] rounded-md mt-1 h-10 p-1 sm:text-base text-sm "
            >
              <option disabled selected defaultValue={""}>
                دانشکده مورد نظر خود را انتخاب کنید
              </option>
              {colleges.map((option, index) => (
                <option key={index} value={option.id}>
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
              name="teachersName"
              defaultValue={data.teachersName || ""}
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
              defaultValue={data.userName || ""}
              placeholder="شماره دانشجویی را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div>
          {/* <div className="flex flex-col gap-1">
            <label className="font-medium">شماره ترم</label>
            <input
            name=""
            onChange={updateData}
            defaultValue={data. || ""}
              placeholder="شماره ترم را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
              defaultValue={student.term || ""}
            />
          </div> */}
          {/* <div className="flex flex-col gap-1">
            <label className="font-medium">ایمیل</label>
            <input
            name=""
            onChange={updateData}
            defaultValue={data. || ""}
              placeholder="ایمیل را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
              defaultValue={student.email || ""}
            />
          </div> */}
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
          <button
            onClick={asyncUpdateUser}
            className="md:col-span-2 w-fit justify-self-end mt-5 bg-[#2080F6] text-white p-2 rounded-md hover:bg-white hover:text-[#2080F6] border-2 border-[#2080F6] duration-300 ease-in-out"
          >
            {isLoading ? (
              <Loding className={"px-8 h-6"} className2={"hidden"} />
            ) : (
              "دخیره تغییرات"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditStudent;
