import { Outlet } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center ">
      <div className="bg-[#fff] sm:p-10 px-5 py-8 rounded-lg w-[30rem] mx-8">
        <div className="flex justify-center">
          <span className="sm:text-2xl text-base text-center font-bold">
            ورود به سامانه ثبت پایان نامه
          </span>
        </div>
        <div className="mt-8">
          <div className="flex flex-col my-5">
            <sapn className="sm:text-lg text-sm">نام کاربری</sapn>
            <input
              className="border-2 focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 border-[#9B9B9B] rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-lg text-sm "
              placeholder="  نام کاربری خود را وارد کنید"
              type={"text"}
            />
          </div>
          <div className="flex flex-col my-5">
            <sapn className="md:text-lg text-sm">رمز عبور</sapn>
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
