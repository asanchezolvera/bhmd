import { useState, useEffect } from "react";
import { HiMiniChevronLeft, HiMiniChevronRight } from "react-icons/hi2";
import { Announcement } from "~/types/types";

const announcements: Announcement[] = [
  {
    id: 1,
    text: "Free shipping on all orders over $50",
  },
  {
    id: 2,
    text: "Free 20-piece gift when you spend at least $75",
  },
  {
    id: 3,
    text: "Save 20% on your first order with code BHMD20",
  },
];

export default function HelloBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % announcements.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center bg-rose-50 py-2">
      <div className="container">
        <div className="flex justify-between items-center w-100 lg:max-w-4xl lg:mx-auto">
          <button
            onClick={() =>
              setIndex(
                (prev) =>
                  (prev - 1 + announcements.length) % announcements.length
              )
            }>
            <HiMiniChevronLeft
              size={16}
              className="text-slate-500 hover:text-slate-700 transition-colors duration-300"
            />
          </button>
          <p className="text-sm text-slate-700 text-center">
            {announcements[index].text}
          </p>
          <button
            onClick={() =>
              setIndex((prev) => (prev + 1) % announcements.length)
            }>
            <HiMiniChevronRight
              size={16}
              className="text-slate-500 hover:text-slate-700 transition-colors duration-300"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
