import { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchAllProducts } from "~/utils/supabase";
import ProductCard from "~/components/ProductCard";
import { Product } from "~/types/types";

export const loader: LoaderFunction = async () => {
  const products = await fetchAllProducts();
  return { products };
};

export default function Index() {
  const { products } = useLoaderData<typeof loader>();
  return (
    <main>
      <div className="container">
        <h1>Products</h1>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products.map((product: Product) => (
            <li key={product.id} className="w-full">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
