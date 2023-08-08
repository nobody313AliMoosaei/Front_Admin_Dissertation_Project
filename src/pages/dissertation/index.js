import { useState, useEffect } from "react";
import { ReactComponent as Search } from "../../assets/svg/search-normal.svg";
import { ReactComponent as Close } from "../../assets/svg/closeCircle.svg";
import { ReactComponent as Setting } from "../../assets/svg/settings.svg";
import { ReactComponent as Open } from "../../assets/svg/openbook.svg";
import Tablelist from "./tablelist";

const Dissertation = () => {
  const [page, setPage] = useState(1);
  return (
    <div className="flex justify-center text-base">
      <div className="flex flex-col justify-center w-10/12 gap-6 p-5">
        <div className="flex flex-row items-start justify-between">
        <div className="flex pt-1 felx-col w-fit">
          {page === 2 ? (
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <p className="text-xl font-bold">پایان نامه های تایید شده</p>
            <span className="text-[#2080F6] bg-[#EBF1FD] py-1 px-4 rounded-full">
              100<span>دانشجو</span>
            </span>
            </div>
          ) : (
            <div className="flex flex-col gap-2 md:flex-row md:items-center">
            <p className="text-xl font-bold">پایان نامه های تایید نشده</p>
            <span className="text-[#2080F6] bg-[#EBF1FD] py-1 px-4 rounded-full">
              100<span>دانشجو</span>
            </span>
            </div>
          )}
        </div>
        <div className="flex flex-col self-end w-fit md:flex-row md:items-center">
          <span
            onClick={() => setPage(1)}
            className={`flex gap-1 px-4 cursor-pointer py-2  rounded-md flex-row-reverse ${
              page === 1 ? "text-white bg-[#2286f8]" : ""
            }`}
          >
            پایان نامه های تایید نشده
            <Open />
          </span>
          <span
            onClick={() => setPage(2)}
            className={`flex gap-1 px-4 cursor-pointer py-2  rounded-md flex-row-reverse ${
              page === 2 ? "text-white bg-[#2286f8]" : ""
            }`}
          >
            پایان نامه های تایید شده
            <Close />
          </span>
        </div>
        </div>
        
          <div className="flex flex-col items-start gap-5 ">
            <span className="flex flex-row-reverse">
              جستجو بر اساس :
              <Setting />
            </span>
            <div className="flex flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex flex-col">
                <span>عنوان</span>
                <input
                  id="title"
                  type={"text"}
                  className="w-40 h-10 p-2 mb-3 bg-white border-2 rounded-md"
                />
              </div>
              <div className="flex flex-col">
                <span>شماره دانشجویی</span>
                <input
                  id="studentNumber"
                  className="w-40 h-10 p-2 mb-3 bg-white border-2 rounded-md "
                  type={"text"}
                />
              </div>

              <button
                //onClick=
                className="bg-[#2080F6] flex flex-row-reverse h-10 justify-center items-center mt-3 px-6 gap-2 rounded-md text-white"
              >
                جستجو
                <Search />
              </button>
            </div>
          
        </div>
        {page === 2 ? <Tablelist typetab="dec"/> : <Tablelist typetab="acc"/>}
      </div>
    </div>
  );
};

export default Dissertation;
