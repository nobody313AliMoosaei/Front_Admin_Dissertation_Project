import { useState } from "react";

const Profile = () => {
  const [isOpenmodalEdit, setIsOpenmodalEdit] = useState(false);
  const toggleModslStatusHandler = () => {
    setIsOpenmodalEdit(!isOpenmodalEdit);
  };
  const information = [
    {
      name: "علی",
      family: "محجوب",
      userName: "12365498",
      password: "1235469844",
      Email: "ali@gamil.com",
    },
  ];

  return (
    <div>
      <div className="flex justify-center mt-10 gap-0 rounded-md">
        <div className="w-10/12 bg-[#fff] p-8 flex flex-col justify-center ">
          <div className="mb-3 text-[#003B7E] font-medium">
            <span>اطلاعات ادمین</span>
          </div>
          <div className="grid lg:grid-cols-3 lg:gap-y-8 lg:gap-x-3 md:grid-cols-2 gap-y-8 gap-x-6 sm:grid-cols-1 ">
            <div>
              <span className="font-medium">نام :</span>
              <span>{information[0].name}</span>
            </div>
            <div>
              <span className="font-medium">نام خانوادگی :</span>
              <span>{information[0].family}</span>
            </div>
            <div>
              <span className="font-medium">نام کاربری :</span>
              <span>{information[0].password}</span>
            </div>
            <div>
              <span className="font-medium">رمز عبور :</span>
              <span>{information[0].userName}</span>
            </div>
            <div>
              <span className="font-medium">ایمیل :</span>
              <span>{information[0].Email}</span>
            </div>
          </div>
          <button
            onClick={toggleModslStatusHandler}
            className="text-[#003B7E] bg-[#5e81d128] w-fit self-end px-3 py-1 mt-5 rounded-md"
          >
            ویرایش
          </button>
        </div>
      </div>
      <div
        className={`w-[100vw] h-[100vh] bg-[#504f4f99] top-0 right-0 absolute text-center flex justify-center items-center ${
          isOpenmodalEdit ? "" : "hidden"
        } `}
      >
        <div className="bg-[#fff] w-[40rem] flex flex-col items-center p-8 gap-0 rounded-md">
          <div className="mb-3 text-[#003B7E] font-medium">
            <span className="text-lg font-bold">اطلاعات ادمین</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-x-8 gap-x-2 md:gap-y-6 gap-y-2 w-full">
            <div className="flex flex-col">
              <span className="sm:text-base self-start font-medium text-sm">
                نام{" "}
              </span>
              <input
                value={information[0].name}
                className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
                placeholder="نام خود را وارد کنید"
                type={"text"}
                required
              />
            </div>
            <div className="flex flex-col">
              <span className="sm:text-base self-start font-medium text-sm">
                نام خانوادگی
              </span>
              <input
                required
                value={information[0].family}
                className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
                placeholder=" نام‌خانوادگی خود را وارد کنید"
                type={"text"}
              />
            </div>
            <div className="flex flex-col">
              <span className="sm:text-base self-start font-medium text-sm">
                نام کاربری
              </span>
              <input
                required
                value={information[0].password}
                className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
                placeholder=" شماره دانشجویی خود را وارد کنید"
                type={"text"}
              />
            </div>
            <div className="flex flex-col">
              <span className="sm:text-base self-start font-medium text-sm">
                رمز عبور
              </span>
              <input
                required
                value={information[0].userName}
                className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
                placeholder=" شماره دانشجویی خود را وارد کنید"
                type={"text"}
              />
            </div>
            <div className="md:col-span-2 flex flex-col">
              <span className="sm:text-base self-start font-medium text-sm">
                ایمیل{" "}
              </span>
              <input
                value={information[0].Email}
                className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-base text-sm "
                placeholder="ایمیل خود را وارد کنید"
                type={"text"}
                required
              />
            </div>
          </div>
          <div className="self-end flex gap-5">
            <button
              onClick={toggleModslStatusHandler}
              className="text-[#003B7E] bg-[#5e81d128] w-fit self-end px-3 py-1 mt-5 rounded-md"
            >
              ذخیره تغییرات
            </button>
            <button
              onClick={toggleModslStatusHandler}
              className="text-[#003B7E] bg-[#5e81d128] w-fit self-end px-3 py-1 mt-5 rounded-md"
            >
              بستن
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
