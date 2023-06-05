import { useState, useEffect } from "react";
const Pagination = ({ count }) => {
  const [indexList, setIndexList] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);
  const pageCount = Math.ceil(count / 4);
  const setPage = (number) => {
    if (number <= pageCount && number > 0) {
      setIndexList(number);
      setPageNumber(number);
    }
  };
  return (
    <div className="flex justify-around items-center">
      <button
        disabled={pageNumber === pageCount ? true : false}
        onClick={() => setPage(pageNumber + 1)}
        className={`bg-[#fff] sm:px-4 p-2 rounded-md text-lg text-[#000] disabled:cursor-not-allowed`}
      >
        بعدی
      </button>
      <div className="flex gap-2 text--lg">
        <span>صفحه</span>
        <span className="font-medium">{pageNumber}</span>
        <span>از</span>
        <span className="font-medium">{pageCount}</span>
      </div>
      <button
        disabled={pageNumber === 1 ? true : false}
        onClick={() => setPage(pageNumber - 1)}
        className="bg-[#fff] sm:px-4 p-2 rounded-md text-lg text-[#000] disabled:cursor-not-allowed"
      >
        قبلی
      </button>
    </div>
  );
};

export default Pagination;
