import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
//SVG
import { ReactComponent as Hamburger } from "./../../../../assets/svg/hamburger.svg";
import { ReactComponent as CloseCircle } from "./../../../../assets/svg/closeCircle.svg";
import { ReactComponent as Profile } from "./../../../../assets/svg//profile-circle2.svg";

//PNG
import Logo from "./../../../../assets/image/logo.png";
import ModalExit from "../../modalExit";
const Header = () => {
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const [isOpenModalExit, setIsOpenModalExit] = useState(false);
  const [params, setParams] = useState(window.location.pathname);

  const changeBackground = () => {
    setParams(window.location.pathname);
  };
  useEffect(() => {
    window.addEventListener("click", changeBackground);
  }, []);

  const toggleNavbarStatusHandler = () => {
    setIsOpenNavbar(!isOpenNavbar);
  };

  return (
    <div
      className={`w-full rounded-none px-5 bg-white shadow-[0_2px_7px_0px_rgba(6,23,48,0.1)]`}
    >
      <div className="flex justify-between items-center container mx-auto">
        <Link className="block w-10 h-10 md:w-16 md:h-16 mb-3" to={""}>
          <img src={Logo} alt="LOGo" />
        </Link>
        <div className="hidden xl:flex justify-center gap-x-5 grow">
          <Link to={"/admin"}>
            <span
              className={`flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer ${
                params === "/admin" ? "border-b-2 border-[#003B7E]" : ""
              }`}
            >
              داشبورد
            </span>
          </Link>
          <Link to={"/admin/student"}>
            <span
              className={`flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer ${
                params === "/admin/student" ? "border-b-2 border-[#003B7E]" : ""
              }`}
            >
              دانشجو
            </span>
          </Link>{" "}
          <span
            className={`flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer ${
              params === "/admin/supervisor"
                ? "border-b-2 border-[#003B7E]"
                : ""
            }`}
          >
            استاد راهنما
          </span>
          <Link to={"dissertationexpert"}>
            <span
              className={`flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer ${
                params === "/admin/dissertationexpert"
                  ? "border-b-2 border-[#003B7E]"
                  : ""
              }`}
            >
              کارشناس امور پایان نامه
            </span>
          </Link>
          <Link to={"graduateexpert"}>
            <span
              className={`flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer ${
                params === "/admin/graduateexpert"
                  ? "border-b-2 border-[#003B7E]"
                  : ""
              }`}
            >
              کارشناس تحصیلات تکمیلی
            </span>
          </Link>
          <Link to={"news"}>
            <span
              className={`flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer ${
                params === "/admin/news" ? "border-b-2 border-[#003B7E]" : ""
              }`}
            >
              اخبار
            </span>
          </Link>
        </div>
        <div className="flex justify-left items-center gap-x-7 xl:gap-x-10 py-3 text-[#52575C]">
          <button
            onClick={toggleNavbarStatusHandler}
            className="block xl:hidden  rounded-lg"
          >
            <Hamburger />
          </button>
          <div className="group">
            <Profile className="hidden xl:block w-10 h-10" />
            <div className="group-hover:flex flex-col hidden  absolute bg-white py-3 px-5 left-4 gap-y-2 shadow-xl border-2 rounded-md">
              <span className="hover:cursor-pointer">پروفایل</span>
              <span
                onClick={() => setIsOpenModalExit(true)}
                className="hover:cursor-pointer"
              >
                خروج
              </span>
            </div>
          </div>
        </div>

        {/* mobile view Navbar */}
        <div
          onClick={toggleNavbarStatusHandler}
          className={`${
            isOpenNavbar ? "left-0" : "left-full"
          } duration-200 z-[90] fixed block xl:hidden bg-black bg-opacity-70 backdrop-blur-sm top-0 right-0 bottom-0 left-0 overflow-hidden`}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-9/12 sm:w-7/12 md:w-5/12 h-full bg-white"
          >
            <div className="w-full flex flex-col items-center gap-y-5 p-5 sm:p-10 text-[#52575C]">
              <button onClick={toggleNavbarStatusHandler} className="self-end">
                <CloseCircle />
              </button>
              {/* <Link
                    className="w-16 h-16 md:w-24 md:h-24"
                    onClick={toggleNavbarStatusHandler}
                    to={"/"}
                  >
                    <img src={Logo} alt="mahak" />
                  </Link> */}
              <div className="self-start flex flex-col items-start gap-y-10 my-10">
                <Link to={"/admin"}>
                  <span
                    className={`flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer`}
                  >
                    داشبورد
                  </span>
                </Link>
                <Link to={"/admin/student"}>
                  <span
                    className={`flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer`}
                  >
                    دانشجو
                  </span>
                </Link>{" "}
                <span
                  className={`flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer`}
                >
                  استاد راهنما
                </span>
                <span
                  className={`flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer`}
                >
                  کارشناس امور پایان نامه
                </span>
                <span
                  className={`flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer`}
                >
                  کارشناس تحصیلات تکمیلی
                </span>
                <Link to={"news"}>
                  <span
                    className={`flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer`}
                  >
                    اخبار
                  </span>
                </Link>
                <span
                  className={`flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer`}
                >
                  پروفایل
                </span>
                <span
                  onClick={() => setIsOpenModalExit(true)}
                  className={`flex items-center gap-x-2 hover:text-[#003B7E] duration-150 hover:cursor-pointer`}
                >
                  خروج
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isOpenModalExit ? (
        <ModalExit closeOpenModalExit={() => setIsOpenModalExit(false)} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
