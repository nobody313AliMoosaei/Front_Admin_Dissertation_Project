import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
//SVG
import { ReactComponent as Done } from "../../../assets/svg/done (2).svg";
import { ReactComponent as Close } from "../../../assets/svg/close.svg";
import { Cookies } from "react-cookie";
import {
  CahngeDissertationStatus,
  DownloadDissertation,
  DownloadFile,
  GetCollegeUni,
} from "../../../services/dissertation";
import { useEffect } from "react";
import { GetUserById } from "../../../services/supervisor";
import saveFile from "../../../helper/saveFile";
import { toast } from "react-toastify";
import Loding from "../../../components/common/loding";

const SingleList = ({
  action,
  index,
  singleThesis,
  lastIndex,
  pageNumber,
  download_dissertation,
  download_sourat,
  type,
}) => {
  // console.log(singleThesis.dissertationFileAddress.replace(/\\/g, "\\\\"));
  const [status, setStatus] = useState(singleThesis.statusDissertation);
  const [isChangeStatus, setIsChangeStatus] = useState(false);
  const [isShowModalChangeStatus, setIsShowModalChangeStatus] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const cookies = new Cookies();
  const [token, setCookie] = useState(cookies.get("token"));
  useEffect(() => {
    // asyncGetUserById();
  }, []);
  const asyncGetUserById = async () => {
    setIsLoading(true);
    try {
      const response = await GetUserById(singleThesis.studentId);

      //check repsonse status
      if (response.status === 200) {
        console.log(response);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const asyncCahngeDissertationStatus = async () => {
    setIsLoading(true);
    try {
      const response = await CahngeDissertationStatus(
        token,
        singleThesis.dissertationId,
        status
      );
      //check repsonse status
      if (response.status === 200) {
        console.log(response);
        action(pageNumber);
        toast.success(response.data.message);
        isChangeStatus(false);
      } else {
        toast.error(response.data.message);
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
    setIsShowModalChangeStatus(false);
  };
  const asyncDownloadFile = async (addressFile, fileType, fileName) => {
    console.log(addressFile);
    setIsLoading(true);
    try {
      const response = await DownloadFile(addressFile);
      if (response.status === 200) {
        console.log(response);
        // console.log(response);
        const file = new Blob([response.data], {
          type: fileType,
        });
        const url = window.URL.createObjectURL(file);
        console.log(url);
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.href = url;
        a.download = fileName;
        a.click();
        window.URL.revokeObjectURL(url);
      } else {
        //error occure
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <div>
      <div
        className={`grid grid-cols-12 gap-5 w-full ${
          index !== lastIndex ? "border-b" : ""
        } text-center justify-items-center bg-white py-3 items-center my-2 font-medium text-[#74787C]`}
      >
        <span className="col-span-1 ">{index + 1}</span>
        {/* <span className="col-span-1 w-full truncate">{singleThesis.name}</span> */}
        <span className="col-span-3 w-full truncate">
          {" "}
          {singleThesis.displayStatusDissertation}
        </span>
        {/* <span className="col-span-2 w-full truncate">
          {singleThesis.number}
        </span> */}
        <span className="col-span-3 w-full truncate">
          {singleThesis.titlePersian}
        </span>
        <button
          onClick={() =>
            asyncDownloadFile(
              singleThesis.dissertationFileAddress,
              "application/zip",
              "پایان نامه"
            )
          }
          className="text-[#4c5053] w-fit px-2 py-1 rounded-sm col-span-1"
        >
          دانلود
        </button>
        <button
          onClick={() =>
            asyncDownloadFile(
              singleThesis.proceedingsFileAddress,
              "image/png",
              "صورت جلسه"
            )
          }
          className="text-[#4c5053] w-fit px-2 py-1 rounded-sm col-span-1"
        >
          دانلود
        </button>
        <div className="flex w-full col-span-3">
          <select
            defaultvalue={singleThesis.statusDissertation || ""}
            disabled={singleThesis.statusDissertation === -3333 ? true : false}
            onChange={(event) => {
              setIsChangeStatus(true);
              setStatus(event.target.value);
            }}
            className={`border-2 w-full rounded-md cursor-pointer`}
          >
            <option selected></option>
            <option value="19">رد پایان نامه</option>
            <option
              value={"13"}
              disabled={singleThesis.statusDissertation >= 1 ? true : false}
              className={`${
                singleThesis.statusDissertation >= 1
                  ? "text-[#28b821]"
                  : "text-[#e63535]"
              } cursor-pointer`}
            >
              تایید استاد راهنما
            </option>
            <option
              value={"18"}
              className={`${
                singleThesis.statusDissertation >= 6 ||
                singleThesis.statusDissertation === 5
                  ? "text-[#28b821]"
                  : "text-[#e63535]"
              } cursor-pointer`}
              disabled={
                singleThesis.statusDissertation >= 6 ||
                singleThesis.statusDissertation === 5
                  ? true
                  : false
              }
            >
              تایید کارشناس امور پایان‌نامه
            </option>
            <option
              value={"17"}
              className={`${
                singleThesis.statusDissertation === 5
                  ? "text-[#28b821]"
                  : "text-[#e63535]"
              } cursor-pointer`}
              disabled={singleThesis.statusDissertation === 5 ? true : false}
            >
              تایید کارشناس تحصیلات تکمیلی
            </option>
          </select>
          {isChangeStatus ? (
            <div className="flex">
              <Close
                onClick={() => {
                  setIsChangeStatus(false);
                }}
                className="text-red-600 w-8 h-8"
              />
              <Done
                onClick={() => setIsShowModalChangeStatus(true)}
                className="text-green-500 w-8 h-8"
              />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      {isShowModalChangeStatus ? (
        <div className="absolute flex justify-center items-center top-0 right-0 z-50 bg-[#c0c0c08c] w-screen h-screen">
          <div className="bg-white text-lg flex flex-col gap-8 py-5 px-10 rounded-md ">
            <span>آیا از تغییر وضعیت پایان‌نامه مطمئن هستید؟</span>
            <div className="flex flex-row-reverse justify-between">
              <button
                onClick={() => setIsShowModalChangeStatus(false)}
                className="border-2 border-[#435bf1] text-[#435bf] px-4 py-1 rounded-md"
              >
                انصراف
              </button>
              <button
                onClick={asyncCahngeDissertationStatus}
                className="bg-[#435bf1] text-white px-4 py-1 rounded-md"
              >
                {isLoading ? (
                  <Loding className={"px-2 h-6"} className2={"hidden"} />
                ) : (
                  "تغییر وضعیت"
                )}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SingleList;
