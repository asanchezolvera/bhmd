import { HiMiniStar } from "react-icons/hi2";

export default function Rating({
  rating,
  isSmall,
}: {
  rating: number;
  isSmall: boolean;
}) {
  const filledStars = Math.min(Math.max(rating, 0), 5);
  const stars = Array.from({ length: 5 }, (_, index) => (
    <HiMiniStar
      key={index}
      className={`h-auto ${isSmall ? "w-3" : "w-4"} ${
        index < filledStars ? "text-rose-300" : "text-slate-100"
      }`}
    />
  ));
  const floatRating = rating.toPrecision(2);
  return (
    <div className="flex gap-1 items-center">
      <div className="flex">{stars}</div>
      <span className={`${isSmall ? "text-xs" : "text-sm"} text-slate-500`}>
        ({floatRating} | 134 reviews)
      </span>
    </div>
  );
}
