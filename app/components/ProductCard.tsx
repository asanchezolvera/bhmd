import { Link } from "@remix-run/react";
import Rating from "./Rating";
import { Product } from "~/types/types";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="w-full cursor-pointer group">
      <div className="w-100 h-48 relative rounded-md overflow-hidden group-hover:shadow-xl group-hover:-translate-y-1 group-hover:scale-[1.01] transition-all duration-300">
        {product.is_bestseller && (
          <div className="absolute top-2 left-2 px-2 py-1 text-xs font-medium rounded-sm uppercase bg-white text-slate-700">
            Best-seller
          </div>
        )}
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover shadow-sm"
          />
        ) : (
          <div className="w-full h-full bg-slate-100"></div>
        )}
      </div>
      <div className="flex flex-col justify-start items-start p-2">
        <div className="pl-[2px] pr-2 relative">
          <div className="w-full h-2 bg-rose-50 absolute left-0 bottom-0 z-10"></div>
          <span className="uppercase text-[10px] text-blue-700 font-bold tracking-wider relative z-20">
            {product.product_categories.name}
          </span>
        </div>
        <h3 className="font-serif text-blue-900 font-medium text-lg line-clamp-1 overflow-ellipsis">
          {product.name}
        </h3>
        <Rating rating={product.rating} />
        <p className="text-sm text-slate-600 line-clamp-2 overflow-ellipsis mt-1 mb-2">
          {product.description}
        </p>
        <p className="text-sm text-blue-900">
          <span className="italic font-serif font-light mr-1">from</span>
          <span className="font-semibold tracking-wide">${product.price}</span>
        </p>
      </div>
    </Link>
  );
}
