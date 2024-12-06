import { useState, useEffect } from "react";
import { Form } from "@remix-run/react";
import { FiCommand } from "react-icons/fi";
import { HiMiniChevronDown } from "react-icons/hi2";
import { ProductCategory } from "~/types/types";

interface SidebarProps {
  categories: ProductCategory[];
  onFilterChange: (filters: {
    categories: string[];
    priceRanges: string[];
  }) => void;
}

export function FilterToggle({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col justify-start items-stretch w-full mb-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-2 border-b-[1px] text-slate-700 text-sm font-medium border-slate-200 flex justify-between items-center">
        <h3>{title}</h3>
        <HiMiniChevronDown
          size={16}
          className={` ${
            isOpen ? "-rotate-180" : ""
          } transition-transform duration-300`}
        />
      </button>
      {isOpen && <div className="w-full p-4">{children}</div>}
    </div>
  );
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
    <aside className="w-full flex flex-col justify-start items-stretch">
      <Form method="get" className="w-full mb-4">
        <label htmlFor="q" className="w-full h-full flex relative">
          <span className="sr-only">Search</span>
          <input
            type="search"
            name="q"
            placeholder="Search all products"
            className="input w-full peer"
          />
          <div className="absolute top-0 right-0 flex items-center gap-1 px-4 py-2 text-sm text-slate-300 opacity-100 peer-focus:opacity-0 transition-opacity duration-150">
            <FiCommand size={14} />
            <span>K</span>
          </div>
        </label>
      </Form>
      <h2 className="font-serif text-lg font-medium text-blue-900 mb-1">
        Shop by:
      </h2>
      <FilterToggle title="Categories">
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
      </FilterToggle>
      <FilterToggle title="Price">
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
      </FilterToggle>
    </aside>
  );
}
