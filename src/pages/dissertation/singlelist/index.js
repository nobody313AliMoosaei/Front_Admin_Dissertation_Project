import { Link } from "react-router-dom";

const SingleList = ({ id, name, family, number, title ,download_dissertation,download_sourat,type}) => {
  return (
    <div className="grid grid-cols-8 p-3 rounded-sm ">
      <span className="col-span-1">{id}</span>
      <span className="">{name}</span>
      <span className=""> {family}</span>
      <span className="lg:col-span-1">{number}</span>
      <span className="col-span-1 truncate ">{title}</span>
        <button className="text-[#4c5053] w-fit px-2 py-1 rounded-sm">
         دانلود
        </button>
        <button className="text-[#4c5053] w-fit px-2 py-1 rounded-sm col-span-1">
         دانلود
        </button>
      <Link to={``}>
        
          {type==="acc" ?
          (
            <button className="text-[#2080F6] bg-[#EBF1FD] w-fit justify-self-end px-2 py-1 rounded-sm col-span-1 sm:col-span-1">
         تایید نهایی
        </button>
          ) :
          (
<button className="text-[#f62020] bg-[#fde2e2] w-fit justify-self-end px-2 py-1 rounded-sm col-span-1 sm:col-span-1">
         رد ادمین
        </button>
          )
}
        
      </Link>
    </div>
  );
};

export default SingleList;
