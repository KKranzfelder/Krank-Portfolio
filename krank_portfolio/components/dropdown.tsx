const Dropdown = function() {
  return (
    <div className="relative h-min w-screen group trasition-transform ease-in-ease-out backdrop-blur-lg">
    <div className="bg-purple-300 h-min w-screen cursor-pointer z-50 absolute group-hover:translate-y-3 group-hover:transition-transform">
      <span className="text-white text-center block [text-shadow:2px 2px #fdba74] group-hover:hidden">Like what you see?</span>
      <div className="w-0 h-0 border-t-[6px] border-b-0 border-x-[3px] border-t-white border-x-transparent border-solid mx-auto group-hover:hidden"></div>
      <span className="hidden group-hover:block text-center text-white text-3xl">Check out my Resume!</span>
    </div>
    <div className="bg-red-300 h-5 w-screen cursor-pointer z-40 absolute group-hover:translate-y-2 group-hover:transition-transform"></div>
    <div className="bg-orange-300 h-5 w-screen cursor-pointer z-30 absolute group-hover:translate-y-1 group-hover:transition-transform"></div>
    <div className="bg-blue-300 h-5 w-screen cursor-pointer z-20 absolute"></div>
    </div>
  );
};

export default Dropdown;