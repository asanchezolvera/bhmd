export interface Databse {
  public: {
    Tables: {
      products: {
        Row: Product;
      };
      product_categories: {
        Row: ProductCategory;
      };
    };
  };
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  category_id: string;
  description: string;
  price: number;
  rating: number;
  image_url: string;
  is_bestseller: boolean;
  product_categories: {
    name: string;
  };
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
}

export interface Announcement {
  id: number;
  text: string;
}
