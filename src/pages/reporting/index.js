import { useState } from "react";
//SVG
import { ReactComponent as Exel } from "./../../assets/svg/icons8-excel.svg";
import { ExportExcel } from "../../services/reporting";
import Loding from "../../components/common/loding";
//Services
const Reporting = () => {
  const [isLoading, setIsLoading] = useState(false);

  const asyncDownloadFile = async (id, fileName) => {
    setIsLoading(true);
    try {
      const response = await ExportExcel(id);
      if (response.status === 200) {
        // console.log(response);
        const file = new Blob([response.data], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        });
        const url = window.URL.createObjectURL(file);
        // console.log(url);
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <div className="w-full h-full flex justify-center">
      <div className="w-10/12 flex flex-col gap-5 mt-20 bg-white px-5 py-10 rounded-md">
        <span className="font-bold text-xl"> دانلود گزارشها</span>
        {isLoading ? (
          <Loding />
        ) : (
          <div className="flex flex-col gap-5">
            <div
              onClick={() => asyncDownloadFile(20, "جدول نقش های سیستم")}
              className="flex items-center text-xl w-fit cursor-pointer hover:text-[#4a82d2]"
            >
              <Exel className="w-10 h-10" />
              <span>جدول نقش های سیستم</span>
            </div>
            <div
              onClick={() => asyncDownloadFile(21, "جدول تمام کاربران سیستم")}
              className="flex items-center text-xl w-fit cursor-pointer hover:text-[#4a82d2]"
            >
              <Exel className="w-10 h-10" />
              <span>جدول تمام کاربران سیستم</span>
            </div>
            <div
              onClick={() => asyncDownloadFile(22, "جدول تمام کامنت های سیستم")}
              className="flex items-center text-xl w-fit cursor-pointer hover:text-[#4a82d2]"
            >
              <Exel className="w-10 h-10" />
              <span>جدول تمام کامنت های سیستم</span>
            </div>
            <div
              onClick={() =>
                asyncDownloadFile(23, "جدول تمام پایان نامه های سیستم")
              }
              className="flex items-center text-xl w-fit cursor-pointer hover:text-[#4a82d2]"
            >
              <Exel className="w-10 h-10" />
              <span>جدول تمام پایان نامه های سیستم</span>
            </div>
            <div
              onClick={() => asyncDownloadFile(24, "جدول تمام لاگ های سیستم")}
              className="flex items-center text-xl w-fit cursor-pointer hover:text-[#4a82d2]"
            >
              <Exel className="w-10 h-10" />
              <span>جدول تمام لاگ های سیستم</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Reporting;
