//SVG
import { Link } from "react-router-dom";
import { ReactComponent as Chart } from "../../assets/svg/chart.svg";
const Dashboard = () => {
  return (
    <div className="flex justify-center mt-10 px-5 mx-auto w-full">
      <div className="flex justify-center gap-10 lg:w-10/12 w-11/12 flex-wrap ">
        <Link to={"student"}>
          <div className="flex flex-col gap-3 rounded-md font-medium text-black bg-[#fff] p-3 shadow-2xl">
            <div className="flex justify-between">
              <span>دانشجویان</span>
              <span>
                100<span className="px-1">نفر</span>
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
                100<span>نفر</span>
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
                100<span>نفر</span>
              </span>
            </div>
            <Chart className="text-[#2080F6]" />
          </div>
        </Link>
        <Link to={"dissertationexpert"}>
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
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
