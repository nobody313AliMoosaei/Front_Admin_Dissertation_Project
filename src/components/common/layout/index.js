//react-router-dom
import { Outlet } from "react-router-dom";
//PNG
import Back_graduation from "./../../../assets/image/graduation.png";

//components
import Footer from "./footer";
import Header from "./header";

const Layout = () => {
  return (
    <div className="flex flex-col relative min-h-screen bg-[#F6F7F9]">
      <Header />
      <div className="mb-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
