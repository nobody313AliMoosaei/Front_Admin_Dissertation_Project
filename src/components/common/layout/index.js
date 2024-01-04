//react-router-dom
import { Outlet, useNavigate } from "react-router-dom";
//PNG
import Back_graduation from "./../../../assets/image/graduation.png";

//components
import Footer from "./footer";
import Header from "./header";
import { useEffect, useState } from "react";
import { GetRefreshToken } from "../../../services/auth";
import { Cookies } from "react-cookie";
import { toast } from "react-toastify";

const Layout = () => {
  const cookies = new Cookies();
  const token = cookies.get("token");
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    asyncRefreshToken();
  }, []);
  const asyncRefreshToken = async () => {
    const response = await GetRefreshToken(token);

    // console.log("response : ", response.status);

    if (response.data) {
      setIsLogin(true);
      console.log(response);
    } else {
      //error occurre
      navigate("/");
      toast.error("قبل از اسفاده از سایت وارد شوید.");
      console.log("response : ", response);
    }
  };
  return (
    <div className="flex flex-col relative min-h-screen bg-[#F6F7F9]">
      <Header />
      <div className="mb-24">{isLogin ? <Outlet /> : <></>}</div>
      <Footer />
    </div>
  );
};

export default Layout;
