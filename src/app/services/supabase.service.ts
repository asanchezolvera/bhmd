import { Injectable } from "@angular/core";
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { environment } from "../../environments/environment";
import { Product } from "../models/product.type";
import { ProductCategory } from "../models/productCategory.type";
import { ProductConcern } from "../models/productConcern.type";
import { from, Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      environment.SUPABASE_URL,
      environment.SUPABASE_ANON_KEY,
    );
  }

  get auth() {
    return this.supabase.auth;
  }

  async signUp(email: string, password: string) {
    return await this.supabase.auth.signUp({ email, password });
  }

  async signIn(email: string, password: string) {
    return await this.supabase.auth.signInWithPassword({ email, password });
  }

  async signOut() {
    return await this.supabase.auth.signOut();
  }

  /* Get all products */
  getProducts(): Observable<Product[]> {
    return from(this.supabase.from("products").select("*")).pipe(
      map((response) => response.data as Product[]),
    );
  }

  /* Get all product categories */
  getProductCategories(): Observable<ProductCategory[]> {
    return from(this.supabase.from("product_categories").select("*")).pipe(
      map((response) => response.data as ProductCategory[]),
    );
  }

  /* Get a product category by its slug */
  getProductCategoryBySlug(slug: string): Observable<ProductCategory> {
    return from(
      this.supabase
        .from("product_categories")
        .select("*")
        .eq("slug", slug)
        .single(),
    ).pipe(map((response) => response.data as ProductCategory));
  }

  /* Get all product concerns */
  getProductConcerns(): Observable<ProductConcern[]> {
    return from(this.supabase.from("product_concerns").select("*")).pipe(
      map((response) => response.data as ProductConcern[]),
    );
  }

  /* Get a product by its slug */
  getProductBySlug(slug: string): Observable<Product> {
    return from(
      this.supabase.from("products").select("*").eq("slug", slug).single(),
    ).pipe(map((response) => response.data as Product));
  }

  /* Get products by category */
  getProductsByCategory(categoryName: string): Observable<Product[]> {
    return from(
      this.supabase.from("products").select("*").eq("category", categoryName),
    ).pipe(map((response) => response.data as Product[]));
  }
}
