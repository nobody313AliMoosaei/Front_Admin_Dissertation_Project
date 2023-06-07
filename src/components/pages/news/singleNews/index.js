import { useState } from "react";
import { Link } from "react-router-dom";

//Components
import DeleteNewsModal from "../deleteNews";

const SingleNews = ({ singleNews, index, id, page }) => {
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  return (
    <>
      <div className="grid grid-cols-12 w-full border-b-2 border-[#CBCBCB] text-center justify-items-center bg-white p-2 items-center  my-2 font-medium text-[#74787C]">
        <span className="col-span-1">{index + 1}</span>
        <img
          className="col-span-2 border bg-slate-500 w-3/4 h-14 rounded-md "
          src={singleNews.src}
        />
        <span className="col-span-2 truncate">{singleNews.title}</span>
        <span className="col-span-4 truncate">{singleNews.text}</span>
        <div className="col-span-3 flex items-center gap-2 justify-around">
          <button
            onClick={() => setIsShowDeleteModal(true)}
            className="px-2 py-1 text-[#717171] border-2 border-[#717171] rounded-md "
          >
            حذف
          </button>
          <Link to={`edit/id=${singleNews.id}`}>
            <button className="px-2 py-1 text-[#717171] border-2 border-[#717171] rounded-md">
              ویرایش
            </button>
          </Link>
          <Link to={""}>
            <button className="px-2 py-1 text-[#717171] border-2 border-[#717171] rounded-md">
              جزئیات
            </button>
          </Link>
        </div>
      </div>
      <div>
        {isShowDeleteModal && (
          <DeleteNewsModal
            id={singleNews.id}
            name={singleNews.title}
            isShowModal={isShowDeleteModal}
            closeModalHandler={() => setIsShowDeleteModal(false)}
          />
        )}
      </div>
    </>
  );
};

export default SingleNews;
