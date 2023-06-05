import { useState } from "react";
import { Link } from "react-router-dom";
//SVG
import { ReactComponent as Trash } from "../../../../assets/svg/trash.svg";
import { ReactComponent as Back } from "../../../../assets/svg/backward.svg";

const EditNews = () => {
  const [imageNews, setImageNews] = useState();
  const [data, setUsers] = useState([
    {
      id: 1,
      title: " تمدید مدت تحویل پروژه",
      src: "",
      text: "تحویل پروژه به مدت یک هفته تمدید شد.",
    },
  ]);

  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col bg-white w-11/12 px-10 py-5 rounded-md gap-8 ">
        <Link to={"/admin/news"}>
          <button className="bg-[#EBF1FD] w-fit flex items-center gap-1 p-2 rounded-md text-[#2080F6]">
            <Back />
            بازگشت
          </button>
        </Link>
        <div>
          <span className="font-medium ">ویرایش خبر</span>
        </div>
        <div>
          <span className="absolute  -mt-3 mr-4 px-2 bg-white">عنوان</span>
          <input
            className="border-2 w-full h-10 p-2 rounded-md"
            placeholder="عنوان خبر جدید رو اینجا بنویس"
            defaultValue={data[0].title || ""}
          />
        </div>
        <div>
          <span className="absolute -mt-3 mr-4 px-2 bg-white">توضیحات</span>
          <textarea
            className="border-2 w-full min-h-[5rem] max-h-60 p-2 rounded-md"
            placeholder="توضیحات خبر جدید رو اینجا بنویس"
            defaultValue={data[0].text || ""}
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="imageNews"
            className="absolute -mt-5 mr-4 px-2 bg-white cursor-pointer p-2 rounded-md"
          >
            آپلود تصویر
          </label>
          {imageNews ? (
            <div className="flex items-center p-3 gap-6 w-full h-24 border-2 border-gray-300 rounded-lg cursor-pointer">
              <div
                onClick={() => setImageNews("")}
                className="flex items-center gap-1 text-black px-2 py-1 rounded-md "
              >
                <Trash />
                <span>حذف</span>
              </div>
              <span>{imageNews.name}</span>
            </div>
          ) : (
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="imageNews"
                className="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-sm text-grey-500 mr-5 py-2 px-5 rounded-lg border-0 text-md  text-white bg-gradient-to-r bg-[#435bf1]  hover:cursor-pointer hover:opacity-80 ">
                      انتخاب فایل
                    </span>
                  </p>
                </div>
                <input
                  id="imageNews"
                  accept=".jpg , .png , .jpeg"
                  type="file"
                  className="hidden"
                  onChange={(e) => setImageNews(e.target.files[0])}
                />
              </label>
            </div>
          )}
        </div>
        <button className="bg-[#435bf1] text-white w-fit self-end py-3 px-4 rounded-md">
          ویرایش خبر
        </button>
      </div>
    </div>
  );
};

export default EditNews;
