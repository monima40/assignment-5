const Loading = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center bg-white px-4">

      {/* Animated Loader */}
      <div className="relative flex items-center justify-center">
        <div className="h-20 w-20 rounded-full border-4 border-pink-100 border-t-pink-500 border-r-purple-500 animate-spin" />

        <div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-[#ff6048] via-pink-500 to-purple-600 shadow-lg shadow-purple-200">
          <span className="text-xl font-extrabold text-white">
            DS
          </span>
        </div>
      </div>

      {/* Loading Title */}
      <h2 className="mt-7 text-2xl font-bold tracking-tight text-gray-900">
        Building Your{" "}
        <span className="bg-linear-to-r from-[#ff6048] via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Dev Stack
        </span>
      </h2>

      <p className="mt-2 text-center text-sm text-gray-500 sm:text-base">
        Exploring technologies for your next project...
      </p>

      {/* Animated Dots */}
      <div className="mt-5 flex items-center gap-2">
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-[#ff6048]" />
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-pink-500 [animation-delay:150ms]" />
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-purple-600 [animation-delay:300ms]" />
      </div>

      <p className="mt-4 text-xs font-medium tracking-widest text-gray-400 uppercase">
        Please wait a moment
      </p>
    </div>
  );
};

export default Loading;
