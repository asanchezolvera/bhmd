import { createClient } from "@supabase/supabase-js";
import * as types from "../types/types";

const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_ANON_KEY || ""
);

// Fetch all products and product categories
export async function fetchAllProducts(): Promise<types.Product[]> {
  const { data: products, error } = await supabase
    .from("products")
    .select("*, product_categories(name)");

  if (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
  return products || [];
}

// Fetch all product categories
export async function fetchAllProductCategories(): Promise<
  types.ProductCategory[]
> {
  const { data: productCategories, error } = await supabase
    .from("product_categories")
    .select("*");

  if (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
  return productCategories || [];
}

// Fetch a single product by slug
export async function fetchProductBySlug(
  slug: string
): Promise<types.Product[]> {
  const { data: product, error } = await supabase
    .from("products")
    .select("*, product_categories(name)")
    .eq("slug", slug)
    .single();

  if (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
  return product || [];
}
