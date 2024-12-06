import { useState, useEffect } from "react";
import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";

export default function ImageGallery({ src }: { src: string }) {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMainImageIndex((prevIndex) => (prevIndex + 1) % 5);
    }, 10000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full h-auto lg:h-[560px] grid grid-cols-6 gap-2 md:gap-4">
      <div className="flex flex-col justify-start items-stretch gap-2 md:gap-4 col-span-1">
        {Array.from({ length: 5 }, (_, index) => (
          <button key={index} onClick={() => setMainImageIndex(index)}>
            <img
              src={src}
              alt=""
              className={`w-full h-auto object-cover rounded-md transition-all duration-300 ${
                index === mainImageIndex
                  ? "opacity-100 cursor-default"
                  : "opacity-50 cursor-pointer hover:opacity-90"
              }`}
            />
          </button>
        ))}
      </div>
      <div className="w-full h-full overflow-hidden col-span-5 rounded-lg group relative">
        <div className="bg-white rounded-full p-2 absolute z-20 top-2 right-2 shadow-sm">
          <HiMiniMagnifyingGlassPlus size={16} className="text-slate-600" />
        </div>

        <img
          src={src}
          alt=""
          className="w-full h-full object-cover rounded-lg group-hover:scale-125 transition-all duration-300"
        />
      </div>
    </div>
  );
}
