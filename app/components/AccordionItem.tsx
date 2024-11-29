import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

export default function AccordionItem({
  label,
  details,
}: {
  label: string;
  details: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full flex flex-col justify-start items-stretch">
      <button onClick={() => setIsOpen(!isOpen)}>
        <div className="w-full py-2 px-4 border-b-[1px] border-slate-200 flex justify-between items-center">
          <p className="text-slate-700 font-semibold">{label}</p>
          <HiChevronDown size={16} className="text-slate-700" />
        </div>
      </button>
      {isOpen && (
        <div className="w-full p-4 bg-slate-50">
          <p className="text-sm text-slate-500">{details}</p>
        </div>
      )}
    </div>
  );
}
