import { Cookies, useCookies } from "react-cookie";
import { Link } from "react-router-dom";

const ModalExit = ({ closeOpenModalExit }) => {
  const [cookies, setCookie, removeCookie] = useCookies([
    "token",
    "role",
    "fullName",
  ]);
  return (
    <div className="fixed z-[100] flex justify-center items-center w-full h-screen bg-[#b9b9b983] top-0 right-0">
      <div className="bg-white px-6 py-4 flex flex-col gap-5 rounded-md">
        <span className="text-black font-medium">
          آیا میخاهید از حساب خود خارج شوید؟
        </span>
        <div className="flex justify-between">
          <button
            onClick={() => closeOpenModalExit()}
            className="border-2 bg-[#003B7E] border-[#003B7E] px-2 rounded-sm text-white "
          >
            انصراف
          </button>
          <Link to={"/admin/logout"}>
            <button className="border-2 border-[#003B7E] px-2 rounded-sm text-[#003B7E] ">
              خروج
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalExit;
