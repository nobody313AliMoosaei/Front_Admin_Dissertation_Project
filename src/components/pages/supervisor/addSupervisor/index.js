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

const AddSupervisor = () => {
  return (
    <div className="flex justify-center w-full pt-10">
      <div className="flex flex-col w-11/12 gap-10">
        <div className="flex flex-col-reverse gap-y-5">
          <span className="text-xl font-bold">افزودن استاد راهنما</span>
          <Link to={"/admin/supervisor"}>
            <button className="bg-[#EBF1FD] w-fit flex items-center gap-1 p-2 rounded-md text-[#2080F6]">
              <Back />
              بازگشت
            </button>
          </Link>
        </div>
        <div className="grid self-center w-11/12 grid-cols-1 p-5 bg-white rounded-md shadow-xl md:grid-cols-2 gap-x-16 gap-y-3 sm:w-8/12">
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
            <label className="font-medium">کد ملی</label>
            <input
              placeholder="کد ملی را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">کد پرسنلی</label>
            <input
              placeholder="کد پرسنلی را وارد کنید"
              className="border-2 h-10 rounded-md px-2 border-[#9B9B9B]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium">ایمیل</label>
            <input
              placeholder="ایمیل را وارد کنید"
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

export default AddSupervisor;
