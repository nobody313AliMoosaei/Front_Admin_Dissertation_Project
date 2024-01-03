import { useState } from "react";
import { Cookies } from "react-cookie";
import { DeleteCollege } from "../../../services/dashboard";

const SingleListCollege = ({ index, singleData }) => {
  const [isShowDelete, setIsShowDelete] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const cookies = new Cookies();

  const asyncDeleteCollege = async () => {
    const token = cookies.get("token");
    setIsLoading(true);
    try {
      const response = await DeleteCollege(token, singleData.code);
      // const response2 = await GetAllstatus();

      //check repsonse status
      if (response.status === 200) {
        setIsShowDelete(false);
        console.log(response);
      } else {
        //error occure
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  return (
    <>
      <div className="grid grid-cols-8 my-3 font-medium text-[#74787C] ">
        <span className="col-span-1 text-center">{index + 1}</span>
        <span className="col-span-5 text-center">{singleData.title}</span>
        <button
          onClick={() => setIsShowDelete(true)}
          className="border-2 w-fit bg-[#435bf1] py-1 px-5 rounded-md text-[#fff]"
        >
          حذف
        </button>
      </div>
      {isShowDelete ? (
        <div className="absolute flex justify-center items-center w-full h-full z-10 bg-[#76767694] top-0 right-0">
          <div className="flex flex-col gap-5 bg-white p-5 rounded-sm px-16 py-5">
            <span className="text-center ">
              آیا از حذف دانشکده مطمئن هستید؟
            </span>
            <div className="flex flex-row-reverse justify-between">
              <button
                onClick={asyncDeleteCollege}
                className="border-2 w-fit bg-[#435bf1] py-1 px-5 rounded-md text-[#fff]"
              >
                حذف
              </button>
              <button
                onClick={() => setIsShowDelete(false)}
                className="border-2 w-fit border-[#435bf1] py-1 px-5 rounded-md text-[#435bf1]"
              >
                لغو
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default SingleListCollege;
