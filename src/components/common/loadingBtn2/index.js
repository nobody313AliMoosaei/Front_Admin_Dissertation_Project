const LoadingBtn2 = () => {
  return (
    <div class="flex space-x-1 justify-center items-center h-fit dark:invert">
      <span class="sr-only">Loading...</span>
      <div class="h-4 w-4 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
      <div class="h-4 w-4 bg-white rounded-full animate-bounce [animation-delay:-0.14s]"></div>
      <div class="h-4 w-4 bg-white rounded-full animate-bounce"></div>
    </div>
  );
};

export default LoadingBtn2;
