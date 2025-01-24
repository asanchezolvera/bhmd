export interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  image_url?: string;
  is_bestseller: boolean;
  ingredients: string;
  category: string;
}
