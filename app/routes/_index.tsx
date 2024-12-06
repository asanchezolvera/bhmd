import { useState, useCallback } from "react";
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchAllProducts, fetchAllProductCategories } from "~/utils/supabase";
import Sidebar from "~/components/Sidebar";
import ProductCard from "~/components/ProductCard";
import { Product } from "~/types/types";

export const loader: LoaderFunction = async () => {
  const products = await fetchAllProducts();
  const productCategories = await fetchAllProductCategories();
  return { products, productCategories };
};

export default function Index() {
  const { products, productCategories } = useLoaderData<typeof loader>();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const handleFilterChange = useCallback(
    ({
      categories,
      priceRanges,
    }: {
      categories: string[];
      priceRanges: string[];
    }) => {
      const filtered = products.filter((product: Product) => {
        const categoryMatch =
          categories.length === 0 ||
          categories.includes(product.product_categories.name);
        const priceRangeMatch =
          priceRanges.length === 0 ||
          priceRanges.some((range) => {
            const [min, max] = range.split("-");
            const minPrice = parseInt(min, 10);
            const maxPrice = max ? parseInt(max, 10) : Infinity;
            return product.price >= minPrice && product.price <= maxPrice;
          });
        return categoryMatch && priceRangeMatch;
      });
      setFilteredProducts(filtered);
    },
    [products]
  );

  return (
    <main>
      <section className="py-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-auto-rows-min gap-4">
            <div className="col-span-1 p-6">
              <Sidebar
                categories={productCategories}
                onFilterChange={handleFilterChange}
              />
            </div>
            <ul className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-2 lg:grid-cols-3 grid-auto-rows-min gap-x-4 gap-y-6">
              {filteredProducts.map((product: Product) => (
                <li key={product.id}>
                  <ProductCard key={product.id} product={product} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
