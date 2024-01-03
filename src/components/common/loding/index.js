const Loding = ({ className, className2 }) => {
  return (
    <div className={`flex ${className} justify-center items-center gap-3`}>
      <div
        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      >
        <span class="!absolute text-black !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
      <span className={` ${className2} font-medium`}>
        {" "}
        ... Loading please wait
      </span>
    </div>
  );
};

export default Loding;
