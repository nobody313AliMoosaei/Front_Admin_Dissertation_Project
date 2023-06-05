//SVG
import { ReactComponent as Chart } from "../../assets/svg/chart.svg";
const Dashboard = () => {
  return (
    <div className="flex justify-center mt-10 px-5 mx-auto w-full">
      <div className="flex justify-center gap-8 w-11/12 flex-wrap ">
        <div className="flex flex-col gap-3 rounded-md font-medium text-black bg-[#fff] p-3 shadow-2xl">
          <div className="flex justify-between">
            <span>دانشجویان</span>
            <span>
              100<span className="px-1">نفر</span>
            </span>
          </div>
          <Chart className="text-[#2080F6]" />
        </div>
        <div className="flex flex-col gap-3 rounded-md font-medium text-black bg-[#fff] p-3 shadow-2xl">
          <div className="flex justify-between">
            <span>استاد راهنما</span>
            <span>
              100<span>نفر</span>
            </span>
          </div>
          <Chart className="text-[#2080F6]" />
        </div>
        <div className="flex flex-col gap-3 rounded-md font-medium text-black bg-[#fff] p-3 shadow-2xl ">
          <div className="flex justify-between">
            <span>پایان‌نامه</span>
            <span>
              100<span>نفر</span>
            </span>
          </div>
          <Chart className="text-[#2080F6]" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;