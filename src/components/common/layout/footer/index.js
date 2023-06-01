import { useState, useEffect } from "react";
const Footer = () => {
  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, []);
  let today = new Date().toLocaleDateString("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  let time = dateState.toLocaleString("fa-IR", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });
  //   console.log(new Date().getHours());
  return (
    <div className="fixed bottom-0 w-full rounded-none p-5 bg-white shadow-[0_2px_7px_0px_rgba(6,23,48,0.1)]">
      <div className="flex justify-around flex-col items-center gap-5 sm:flex-row">
        <div className="">
          <p>
            کاربر عزیز{" "}
            <span className="text-red-500 font-medium">علی محجوب</span> خوش
            آمدید
          </p>
        </div>
        <div className="flex ">
          <div className="border-l-2 border-[#EEEEF2] px-3">
            <span className=" font-medium">تاریخ: </span>
            <span className="">{today}</span>
          </div>
          <div className="px-3">{time}</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
