import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

export default function AccordionItem({
  label,
  children,
}: {
  label: string;
  children?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col justify-start items-stretch">
      <button onClick={() => setIsOpen(!isOpen)}>
        <div className="w-full py-2 px-4 border-b-[1px] text-slate-700 border-slate-200 flex justify-between items-center">
          <p className=" font-semibold">{label}</p>
          <HiChevronDown
            size={16}
            className={` ${
              isOpen ? "-rotate-180" : ""
            } transition-transform duration-300`}
          />
        </div>
      </button>
      {isOpen && <div className="w-full">{children}</div>}
    </div>
  );
}
