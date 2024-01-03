import { Cookies } from "react-cookie";
import { Link } from "react-router-dom";

const ModalExit = ({ closeOpenModalExit }) => {
  const cookies = new Cookies();
  return (
    <div className="fixed z-[100] flex justify-center items-center w-full h-screen bg-[#b9b9b983] top-0 right-0">
      <div className="bg-white px-6 py-4 flex flex-col gap-5 rounded-md">
        <span className="text-black font-medium">
          آیا میخاهید از حساب خود خارج شوید؟
        </span>
        <div className="flex justify-between">
          <button
            onClick={() => closeOpenModalExit()}
            className="border-2 bg-[#ED2E2E] border-[#ED2E2E] px-2 rounded-sm text-white "
          >
            انصراف
          </button>
          <Link
            onClick={() => {
              cookies.remove("token", { path: "/" });
              cookies.remove("fullName", { path: "/" });
            }}
            to={"/"}
          >
            <button className="border-2 border-[#ED2E2E] px-2 rounded-sm text-[#ED2E2E] ">
              خروج
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ModalExit;
