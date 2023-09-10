import { Link } from "react-router-dom";

const SingleList = ({
  index,
  singleThesis,
  lastIndex,
  download_dissertation,
  download_sourat,
  type,
}) => {
  return (
    <div
      className={`grid grid-cols-12 gap-5 w-full ${
        index !== lastIndex ? "border-b" : ""
      } text-center justify-items-center bg-white py-3 items-center my-2 font-medium text-[#74787C]`}
    >
      <span className="col-span-1 ">{index + 1}</span>
      <span className="col-span-1 w-full truncate">{singleThesis.name}</span>
      <span className="col-span-1 w-full truncate"> {singleThesis.family}</span>
      <span className="col-span-2 w-full truncate">{singleThesis.number}</span>
      <span className="col-span-3 w-full truncate">{singleThesis.title}</span>
      <button className="text-[#4c5053] w-fit px-2 py-1 rounded-sm col-span-1">
        دانلود
      </button>
      <button className="text-[#4c5053] w-fit px-2 py-1 rounded-sm col-span-1">
        دانلود
      </button>
      <div className="col-span-2" to={``}>
        {type === "acc" ? (
          <button className="duration-200 px-4 py-2 hover:border-[#6eed2e] hover:text-[#6eed2e] text-[#717171] text-sm border-2 rounded-md">
            تایید نهایی
          </button>
        ) : (
          <button className="duration-200 px-4 py-2 hover:border-[#ED2E2E] hover:text-[#ED2E2E] text-[#717171] text-sm border-2 rounded-md">
            رد ادمین
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleList;
