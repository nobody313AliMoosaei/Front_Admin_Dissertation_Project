import { Outlet } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center -mt-10 h-screen">
      <div className="bg-[#fff] sm:p-10 px-5 py-8 h-fit rounded-lg w-[30rem] mx-8 shadow-2xl">
        <div className="flex justify-center">
          <span className="text-base font-bold text-center sm:text-2xl">
            ورود به پنل ادمین
          </span>
        </div>
        <div className="mt-8">
          <div className="flex flex-col my-5">
            <label className="text-sm sm:text-lg">نام کاربری</label>
            <input
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-lg text-sm "
              placeholder="  نام کاربری خود را وارد کنید"
              type={"text"}
            />
          </div>
          <div className="flex flex-col my-5">
            <label className="text-sm md:text-lg">رمز عبور</label>
            <input
              className="border-2 border-[#9B9B9B] focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-lg text-sm "
              placeholder="رمزعبور خود را وارد کنید"
              type={"text"}
            />
          </div>
          <button className="bg-[#003B7E] w-full sm:p-4 p-2 mt-6 rounded-md text-lg text-[#ffffff]">
            ورود به سامانه
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Login;
