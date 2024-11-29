export default function OfferSelectorOption({
  label,
  id,
  price,
  children,
}: {
  label: string;
  id: string;
  price: number;
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full ">
      <input
        type="radio"
        id={id}
        name="offer_selection"
        value={id}
        className="sr-only peer"
      />
      <label
        htmlFor={id}
        className="w-full flex flex-col justify-start items-start gap-2 p-4 border-[1px] rounded-md transition-colors duration-300 cursor-pointer border-slate-200 focus:outline-none hover:bg-slate-50 peer-checked:ring-blue-500 peer-checked:ring-1 peer-checked:border-blue-500">
        <span className="sr-only">{label}</span>
        <div className="w-full flex justify-between items-center">
          <span className="font-semibold text-sm text-slate-700">{label}</span>
          <span className="text-sm text-slate-700">${price}</span>
        </div>
        {children}
      </label>
    </div>
  );
}
