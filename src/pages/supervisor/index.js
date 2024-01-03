import { Link } from "react-router-dom";
import { useState } from "react";
//SVG
import { ReactComponent as Search } from "../../assets/svg/search-normal.svg";
import { ReactComponent as Setting } from "../../assets/svg/settings.svg";
//Components
import Pagination from "../../components/common/pagination";
import SingleSupervisorCard from "../../components/pages/supervisor/singleSupervisorCard";
import TableHeader from "../../components/common/tableHeader";
import { Cookies } from "react-cookie";
import { useEffect } from "react";
import {
  GetAllTeachers,
  GetCollegeUni,
  GetTeachersByCollegeRef,
} from "../../services/supervisor";
import Loding from "../../components/common/loding";
import { GetUserInRole } from "../../services/dissertationExpert";
//static data
const tableHeader = [
  {
    title: "#",
    style: "col-span-1",
  },
  {
    title: " نام",
    style: "col-span-2",
  },
  {
    title: " نام خانوادگی",
    style: "col-span-2",
  },
  {
    title: "کدملی",
    style: "col-span-2",
  },
  {
    title: "دانشکده",
    style: "col-span-2",
  },
  {
    title: "غیر فعال",
    style: "col-span-1",
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
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [college, setColleges] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [CollegeRef, setCollegeRef] = useState("");
  const cookies = new Cookies();
  const [token, setCookie] = useState(cookies.get("token"));

  useEffect(() => {
    // asyncGetAllTeachers();
    asyncGetUserInRole();
    asyncGetCollageList();
  }, []);
  const asyncGetUserInRole = async () => {
    setIsLoading(true);
    try {
      const response = await GetUserInRole(token, 3);
      // const response = await GetCollegeUni(token);

      //check repsonse status
      if (response.status === 200) {
        console.log(response);
        setData(response.data);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  const asyncGetAllTeachers = async () => {
    const value = 1;
    setIsLoading(true);
    try {
      // const response = await GetAllDissertation(token, page, pageSize);
      const response = await GetAllTeachers(token, value);

      //check repsonse status
      if (response.status === 200) {
        console.log(response);
        setData(response.data);
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
  const asyncGetTeachersByCollegeRef = async () => {
    setIsLoading(true);
    try {
      const response = await GetTeachersByCollegeRef(token, CollegeRef);

      //check repsonse status
      if (response.status === 200) {
        console.log(response);
        setData(response.data);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const generateTable = () => {
    return data.length ? (
      <div className="px-2 bg-white rounded-b-md">
        {data.map((singlesupervisorr, index) => (
          <SingleSupervisorCard
            key={index}
            index={index}
            singleSupervisor={singlesupervisorr}
            lastIndex={data.length - 1}
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
        <div className="flex flex-col items-start gap-5 my-3">
          <span className="flex flex-row-reverse">
            جستجو بر اساس :
            <Setting />
          </span>
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-8">
            <div className="flex flex-col gap-1">
              <label className="font-medium">دانشکده</label>
              <select
                name="collegeRef"
                onChange={(e) => setCollegeRef(e.target.value)}
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
            <button
              onClick={asyncGetTeachersByCollegeRef}
              className="bg-[#2080F6] flex flex-row-reverse h-10 justify-center items-center mt-3 px-6 gap-2 rounded-md text-white"
            >
              جستجو
              <Search />
            </button>
          </div>
        </div>
        <TableHeader
          // meta={meta}
          tableHeader={tableHeader}
          minSize="min-w-[900px]"
        >
          {isLoading ? <Loding /> : generateTable()}
        </TableHeader>
        {/* {supervisors.length > 0 ? (
          <Pagination count={supervisors.length} />
        ) : (
          <></>
        )} */}
      </div>
    </div>
  );
};

export default Supervisor;
