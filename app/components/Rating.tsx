import { HiMiniStar } from "react-icons/hi2";

export default function Rating({ rating }: { rating: number }) {
  const filledStars = Math.min(Math.max(rating, 0), 5);
  const stars = Array.from({ length: 5 }, (_, index) => (
    <HiMiniStar
      key={index}
      className={`w-3 h-auto ${
        index < filledStars ? "text-rose-300" : "text-slate-100"
      }`}
    />
  ));
  const floatRating = rating.toPrecision(2);
  return (
    <div className="flex gap-1 items-center">
      <div className="flex">{stars}</div>
      <span className="text-xs text-slate-500">
        ({floatRating} | 134 reviews)
      </span>
    </div>
  );
}
