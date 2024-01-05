import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

//cookie
import { useCookies } from "react-cookie";
import { toast } from "react-toastify";
import LoadingBtn from "../../common/loadingBtn";

const Login = () => {
  const [cookies, setCookie] = useCookies(["token", "fullName"]);
  const navigate = useNavigate();

  const [error, setError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [dataLogin, setDataLogin] = useState({});
  const updateData = (e) => {
    setDataLogin({
      ...dataLogin,
      [e.target.name]: e.target.value,
    });
  };

  const asyncPostUserData = async () => {
    setIsLoading(true);
    setError({});

    const { userName, password } = dataLogin;
    axios
      .post("http://doc-rajaee.ir/API/v1/Login", {
        userName: userName,
        password: password,
      })
      .then((response) => {
        // console.log(response);
        if (response.status === 200) {
          console.log(response);
          if (response.data.role === "Administrator") {
            setCookie("token", response.data.token, { path: "/" });
            setCookie("fullName", response.data.fullName, { path: "/" });
            toast.success("با موفقیت وارد شدید");
            navigate(`/admin`);
          } else {
            toast.error("اطلاعات وارد شده صحیح نمیباشد");
          }
        } else {
          //error occurre
          console.log("response : ", response);
        }
      })
      .catch((error) => {
        toast.error(error.response.data.errors.message);
        // console.log(error.response.data.errors.message);
        setIsLoading(false);
        if (error.response) {
          console.log(error.response);
          console.log("server responded");
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };

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
              name="userName"
              onChange={updateData}
            />
          </div>
          <div className="flex flex-col my-5">
            <label className="text-sm md:text-lg">رمز عبور</label>
            <input
              className="border-2 border-[#9B9B9B] focus:ring focus:ring-[#003B7E] focus:outline-none focus:border-0 rounded-md mt-1 sm:h-12 h-10 p-1 sm:text-lg text-sm "
              placeholder="رمزعبور خود را وارد کنید"
              type={"password"}
              name="password"
              onChange={updateData}
            />
          </div>
          <LoadingBtn
            className={"bg-[#003B7E] w-full"}
            action={asyncPostUserData}
            isLoading={isLoading}
            text="ورود به سامانه"
          />
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Login;
