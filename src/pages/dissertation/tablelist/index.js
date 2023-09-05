import { useState, useEffect } from "react";
import SingleList from "../singlelist";
import Pagination from "../../../components/common/pagination";
const Dissertation = ({ check, typetab }) => {
  const thesis = [
    {
      id: "1",
      name: "علی",
      family: "محجوب",
      number: "3981231096",
      title: " پایان‌نامه",
    },
    {
      id: "2",
      name: "علی",
      family: "محجوب",
      number: "3981231095",
      title: "سامانه پایان‌نامه",
    },
    {
      id: "3",
      name: "علی",
      family: "محجوب",
      number: "3981231094",
      title: "سامانه پایان‌نامه",
    },
  ];
  return (
    <div className="w-full">
      <div className="bg-white min-h-[19rem] p-4 my-5 rounded-md  overflow-x-auto ">
        <div className="grid grid-cols-8  font-medium bg-[#F8F9FA] min-w-[900px]  p-3 rounded-sm ">
          <span className="col-span-1">#</span>
          <span className="">نام</span>
          <span className="">نام خانوادگی</span>
          <span className="">شماره دانشجویی</span>
          <span className="">عنوان</span>
          <span className="">پایان نامه </span>
          <span className="">صورت جلسه </span>
        </div>
        {thesis.length ? (
          Array.isArray(thesis) &&
          thesis.map((item, index) => (
            <SingleList
              check={check}
              key={index}
              id={item.id}
              name={item.name}
              family={item.family}
              number={item.number}
              title={item.title}
              type={typetab}
            />
          ))
        ) : (
          <div className="m-10 justify-items-center">
            <span className="self-center p-5 my-5 bg-orange-300 rounded-md w-fit">
              متاسفانه هیچ داده ای یافت نشد!
            </span>
          </div>
        )}
        {/* <Pagination count={thesis.length} /> */}
      </div>
    </div>
  );
};

export default Dissertation;
