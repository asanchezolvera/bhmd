export default function OfferSelectorOption({
  label,
  id,
  price,
  children,
  isDefault,
}: {
  label: string;
  id: string;
  price: number;
  isDefault?: boolean;
  children?: React.ReactNode;
}) {
  const discountPrice = id === "1" ? (price * 0.8).toFixed(0) : null;

  return (
    <div className="w-full">
      <input
        type="radio"
        id={id}
        name="offer_selection"
        value={id}
        defaultChecked={isDefault}
        className="sr-only peer"
      />
      <label
        htmlFor={id}
        className="w-full flex flex-col justify-start items-start gap-2 p-4 border-[1px] rounded-md transition-all duration-300 cursor-pointer border-slate-200 opacity-65 hover:opacity-100 focus:outline-none peer-checked:opacity-100 peer-checked:ring-blue-500 peer-checked:ring-2 peer-checked:border-transparent">
        <span className="sr-only">{label}</span>
        <div className="w-full flex justify-between items-center">
          <span className="font-semibold text-sm text-slate-700">{label}</span>
          <div className="flex justify-end items-center gap-1">
            {discountPrice && (
              <span className="text-sm text-slate-700">${discountPrice}</span>
            )}
            <span
              className={`text-sm text-slate-700 ${
                discountPrice ? "line-through text-slate-300" : ""
              }`}>
              ${price}
            </span>
          </div>
        </div>
        {children && <div>{children}</div>}
      </label>
    </div>
  );
}
