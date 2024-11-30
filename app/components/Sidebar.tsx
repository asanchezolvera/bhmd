import { useState, useEffect } from "react";
import { ProductCategory } from "~/types/types";

interface SidebarProps {
  categories: ProductCategory[];
  onFilterChange: (filters: {
    categories: string[];
    priceRanges: string[];
  }) => void;
}

export default function Sidebar({ categories, onFilterChange }: SidebarProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState<string[]>([]);

  const handleCategoryChange = (name: string) => {
    setSelectedCategories((prev) =>
      prev.includes(name)
        ? prev.filter((item) => item !== name)
        : [...prev, name]
    );
  };

  const handlePriceRangeChange = (range: string) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(range)
        ? prev.filter((item) => item !== range)
        : [...prev, range]
    );
  };

  useEffect(() => {
    onFilterChange({
      categories: selectedCategories,
      priceRanges: selectedPriceRanges,
    });
  }, [selectedCategories, selectedPriceRanges, onFilterChange]);

  const priceRanges = [
    {
      name: "$0 - $49",
      range: "0-49",
    },
    {
      name: "$50 - $99",
      range: "50-99",
    },
    {
      name: "$100 - $149",
      range: "100-149",
    },
    {
      name: "$150+",
      range: "150-",
    },
  ];

  return (
    <aside className="w-full">
      <h2 className="font-serif text-lg font-medium text-blue-900 mb-1">
        Shop by:
      </h2>
      <h3 className="font-semibold text-sm text-slate-500 mb-2">Categories:</h3>
      <ul className="flex flex-col gap-2">
        {categories.map((category) => (
          <li key={category.id} className="flex items-center">
            <input
              type="checkbox"
              name={category.name}
              id={category.name}
              onChange={() => handleCategoryChange(category.name)}
              checked={selectedCategories.includes(category.name)}
              className="mr-2"
            />
            <label
              htmlFor={category.name}
              className="text-sm text-slate-600 cursor-pointer select-none">
              {category.name}
            </label>
          </li>
        ))}
      </ul>
      <hr className="w-5/6 text-slate-300 my-4" />
      <h3 className="font-semibold text-sm text-slate-500 mb-2">Price:</h3>
      <ul className="flex flex-col gap-2">
        {priceRanges.map((range) => (
          <li key={range.range} className="flex items-center">
            <input
              type="checkbox"
              name={range.range}
              id={range.range}
              onChange={() => handlePriceRangeChange(range.range)}
              checked={selectedPriceRanges.includes(range.range)}
              className="mr-2"
            />
            <label
              htmlFor={range.range}
              className="text-sm text-slate-600 cursor-pointer select-none">
              {range.name}
            </label>
          </li>
        ))}
      </ul>
    </aside>
  );
}
