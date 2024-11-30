import { useState } from "react";
import { HiMiniMinus, HiMiniPlus } from "react-icons/hi2";

export default function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex justify-between items-center gap-4">
      <button
        className={`${
          quantity === 1 ? "opacity-25 pointer-events-none" : ""
        } w-12 lg:w-8 h-12 lg:h-8 bg-white flex justify-center items-center border-[1px] border-slate-200 rounded-md  hover:border-slate-500 transition-colors duration-300`}
        onClick={() => setQuantity(quantity - 1)}>
        <HiMiniMinus size={16} />
      </button>
      <p className="text-slate-700 font-semibold">Qty: {quantity}</p>
      <button
        className={`${
          quantity === 3 ? "opacity-25 pointer-events-none" : ""
        } w-12 lg:w-8 h-12 lg:h-8 bg-white flex justify-center items-center border-[1px] border-slate-200 rounded-md  hover:border-slate-500 transition-colors duration-300`}
        onClick={() => setQuantity(quantity + 1)}>
        <HiMiniPlus size={16} />
      </button>
    </div>
  );
}
