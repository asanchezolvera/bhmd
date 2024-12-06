import { Link } from "@remix-run/react";
import { HiMiniArrowRight } from "react-icons/hi2";

export function MegaMenuCard({
  name,
  slug,
  description,
}: {
  name: string;
  slug: string;
  description: string;
}) {
  return (
    <Link
      to={`/shop/${slug}`}
      className="flex flex-col w-full h-full justify-start items-stretch group">
      <img
        src="/img/bhmd-best-sellers.webp"
        alt="Best-Sellers"
        className="w-full h-full shadow-md rounded-md object-cover"></img>
      <div className="flex flex-col justify-start items-start p-1 h-auto">
        <h4 className="font-serif text-blue-900 font-medium line-clamp-1 overflow-ellipsis">
          {name}
        </h4>
        <p className="text-sm text-slate-600">{description}</p>
      </div>
    </Link>
  );
}

export default function ShopMegaMenu() {
  const categoryLinks = [
    {
      id: "1",
      name: "Beauty from Within",
      slug: "beauty-from-within",
    },
    {
      id: "2",
      name: "Serums + Oils",
      slug: "serums-oils",
    },
    {
      id: "3",
      name: "Moisturizers",
      slug: "moisturizers",
    },
    {
      id: "4",
      name: "Eye + Lip Care",
      slug: "eye-lip-care",
    },
    {
      id: "5",
      name: "Masks + Treatments",
      slug: "masks-treatments",
    },
    {
      id: "6",
      name: "Hand + Body",
      slug: "hand-body",
    },
    {
      id: "7",
      name: "Sun Care",
      slug: "sun-care",
    },
    {
      id: "8",
      name: "Cleanse + Exfoliate",
      slug: "cleanse-exfoliate",
    },
    {
      id: "9",
      name: "Night Treatments",
      slug: "night-treatments",
    },
  ];

  const concernLinks = [
    {
      id: "1",
      name: "Acne + Blemishes",
      slug: "acne-blemishes",
    },
    {
      id: "2",
      name: "Dark Spots + Discoloration",
      slug: "dark-spots-discoloration",
    },
    {
      id: "3",
      name: "Dryness + Flakiness",
      slug: "dryness-flakiness",
    },
    {
      id: "4",
      name: "Dullness + Uneven Skin Tone",
      slug: "dullness-uneven-skin-tone",
    },
    {
      id: "5",
      name: "Loss of Firmness + Elasticity",
      slug: "loss-of-firmness-and-elasticity",
    },
    {
      id: "6",
      name: "Puffiness + Dark Circles",
      slug: "puffiness-dark-circles",
    },
    {
      id: "7",
      name: "Fine Lines + Wrinkles",
      slug: "fine-lines-wrinkles",
    },
  ];

  return (
    <div className="absolute z-90 flex justify-start items-center flex-col w-full">
      <div className="w-full bg-white p-6 shadow-xl">
        <div className="container">
          <div className="grid grid-cols-5 grid-rows-1 gap-4">
            <div className="flex flex-col justify-start items-start gap-1">
              <h3 className="font-medium mb-2 text-slate-700">
                Shop by Category
              </h3>
              <ul className="flex flex-col justify-start items-stretch gap-1">
                {categoryLinks.map((category) => (
                  <li
                    key={category.id}
                    className="group flex items-center gap-[2px]">
                    <Link
                      to={`/category/${category.slug}`}
                      className="text-sm text-slate-600 group-hover:text-blue-500 transition-colors duration-300">
                      {category.name}
                    </Link>
                    <HiMiniArrowRight
                      size={14}
                      className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <h3 className="font-medium mb-2 text-slate-700">
                Shop by Concern
              </h3>
              <ul className="flex flex-col justify-start items-stretch gap-1">
                {concernLinks.map((concern) => (
                  <li
                    key={concern.id}
                    className="group flex items-center gap-[2px]">
                    <Link
                      to={`/category/${concern.slug}`}
                      className="text-sm text-slate-600 group-hover:text-blue-500 transition-colors duration-300">
                      {concern.name}
                    </Link>
                    <HiMiniArrowRight
                      size={14}
                      className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </li>
                ))}
              </ul>
            </div>
            <MegaMenuCard
              name="Shop Best-Sellers"
              slug="best-sellers"
              description="Shop all of our best-selling products."
            />
            <MegaMenuCard
              name="Shop Award Winners"
              slug="award-winners"
              description="Find out why our products have been voted the best."
            />
            <MegaMenuCard
              name="Shop New Arrivals"
              slug="new-arrivals"
              description="Be the first to discover our latest products."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
