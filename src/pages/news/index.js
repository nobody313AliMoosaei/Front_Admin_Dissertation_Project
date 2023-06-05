import { useState } from "react";
import { Link } from "react-router-dom";

//SVG
import { ReactComponent as Search } from "../../assets/svg/search-normal.svg";
import NewsImage from "../../assets/image/news.png";
//Components
import Pagination from "../../components/common/pagination";
import TableHeader from "../../components/common/tableHeader";
import SingleNews from "../../components/pages/news/singleNews";

const News = () => {
  const [data, setUsers] = useState([
    {
      id: 1,
      title: " تمدید مدت تحویل پروژه",
      src: NewsImage,
      text: "تحویل پروژه به مدت یک هفته تمدید شد.",
    },
    {
      id: 2,
      title: "زمان دفاع از پایان‌نامه",
      src: "",
      text: "تاریخ دفاع از پایان‌نامه ها در کانال تگرام مشخص شد.",
    },
  ]);
  const [meta, setMeta] = useState({});
  const tableHeader = [
    {
      title: "#",
      style: "col-span-1",
    },
    {
      title: " عکس",
      style: "col-span-2",
    },
    {
      title: " عنوان",
      style: "col-span-2",
    },
    {
      title: "توضیحات",
      style: "col-span-4",
    },
  ];
  const generateTable = () => {
    return data.length ? (
      <div className="bg-white px-2 rounded-md">
        {data.map((singleNews, index) => (
          <SingleNews
            key={index}
            index={index}
            id={singleNews.id}
            singleNews={singleNews}
          />
        ))}
      </div>
    ) : (
      <span className="bg-orange-300 w-fit mt-5 self-center p-5 rounded-md">
        متاسفانه هیچ داده ای یافت نشد!
      </span>
    );
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-8 w-11/12">
        <Link className="self-end mt-10" to={"add"}>
          <button className="bg-[#435bf1] text-white w-fit self-end py-3 px-4 rounded-md">
            ایجاد خبر جدید
          </button>
        </Link>
        <div className="bg-white p-4 rounded-md ">
          <div className="flex items-center w-full border-2 border-[#CBCBCB] rounded-md p-1 px-5">
            <input
              className="w-full h-10 focus:outline-none text-lg"
              placeholder="خبر مورد نظر خود را جستجو کنید."
            />
            <Search className="text-black cursor-pointer" />
          </div>
        </div>
        <TableHeader
          meta={meta}
          tableHeader={tableHeader}
          minSize="min-w-[900px]"
        >
          {generateTable()}
        </TableHeader>
        {data.length > 0 ? <Pagination count={data.length} /> : <></>}
      </div>
    </div>
  );
};

export default News;
