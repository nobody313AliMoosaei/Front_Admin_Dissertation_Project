//react-router-dom
import { Outlet } from "react-router-dom";
//PNG
import Back_graduation from "./../../../assets/image/graduation.png";

//components
import Header from "./header";

const Layout = () => {
  return (
    <div className="flex flex-col relative ">
      <div className="">
        <Header />
      </div>
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
