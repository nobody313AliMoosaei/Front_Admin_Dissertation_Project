//SVG
import { Link } from "react-router-dom";
import { ReactComponent as Back } from "../../../../assets/svg/backward.svg";
//static data
const collage = [
  {
    label: "کامپیوتر",
    value: "کامپیوتر",
  },
  {
    label: "برق",
    value: "برق",
  },
  {
    label: "معماری",
    value: "معماری",
  },
  {
    label: "عمران",
    value: "عمران",
  },
];

const AddStudent = () => {
  return (
    <div className="w-full flex justify-center pt-10">
      <div className="flex flex-col gap-10 w-11/12">
        <div className="flex flex-col-reverse gap-y-5">
          <span className="font-bold text-xl">افزودن دانشجو</span>
          <Link to={"/admin/student"}>
            <button className="bg-[#EBF1FD] w-fit flex items-center gap-1 p-2 rounded-md text-[#2080F6]">
              <Back />
              بازگشت
            </button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 bg-white gap-x-16 gap-y-3 w-11/12 sm:w-8/12 self-center p-5 rounded-md shadow-xl">
          <div className="flex flex-col gap-1">
            <label className="font-medium">نام</label>
            <input
              placeholder="نام را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">نام خانوادگی</label>
            <input
              placeholder="نام خانوادگی را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">دانشکده</label>
            <select
              name="College"
              className="border-2 border-[#9B9B9B] rounded-md mt-1 h-10 p-1 sm:text-base text-sm "
            >
              <option disabled selected value="">
                دانشکده مورد نظر خود را انتخاب کنید
              </option>
              {collage.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">استاد راهنما</label>
            <input
              placeholder="استاد راهنما را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">شماره دانشجویی</label>
            <input
              placeholder="شماره دانشجویی را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">شماره ترم</label>
            <input
              placeholder="شماره ترم را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div>
          <button className="md:col-span-2 w-fit justify-self-end mt-5 bg-[#2080F6] text-white py-2 px-4 rounded-md hover:bg-white hover:text-[#2080F6] border-2 border-[#2080F6] duration-300 ease-in-out">
            افزودن
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStudent;