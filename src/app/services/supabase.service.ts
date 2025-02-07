import { Injectable, signal, computed } from "@angular/core";
import { createClient, SupabaseClient, User } from "@supabase/supabase-js";
import { environment } from "../../environments/environment";
import { Product } from "../models/product.type";
import { ProductCategory } from "../models/productCategory.type";
import { ProductConcern } from "../models/productConcern.type";

@Injectable({
  providedIn: "root",
})
export class SupabaseService {
  private supabase: SupabaseClient;
  private currentUserSignal = signal<User | null>(null);
  readonly user = computed(() => this.currentUserSignal());

  constructor() {
    this.supabase = createClient(
      environment.SUPABASE_URL,
      environment.SUPABASE_ANON_KEY,
    );

    // Check active sessions and update user accordingly
    this.supabase.auth.getSession().then(({ data: { session } }) => {
      this.currentUserSignal.set(session?.user ?? null);
    });

    // Listen for auth changes
    this.supabase.auth.onAuthStateChange((_event, session) => {
      this.currentUserSignal.set(session?.user ?? null);
    });
  }

  get auth() {
    return this.supabase.auth;
  }

  /* Sign up user */
  async signUp(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    return data;
  }

  /* Sign in user */
  async signIn(email: string, password: string) {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  }

  /* Sign out user */
  async signOut() {
    const { error } = await this.supabase.auth.signOut();
    if (error) throw error;
    this.currentUserSignal.set(null);
  }

  /* Get all products */
  async getProducts(): Promise<Product[]> {
    const { data, error } = await this.supabase.from("products").select("*");
    if (error) throw error;
    return data;
  }

  /* Get all product categories */
  async getProductCategories(): Promise<ProductCategory[]> {
    const { data, error } = await this.supabase
      .from("product_categories")
      .select("*");
    if (error) throw error;
    return data;
  }

  /* Get a product category by its slug */
  async getProductCategoryBySlug(slug: string): Promise<ProductCategory> {
    const { data, error } = await this.supabase
      .from("product_categories")
      .select("*")
      .eq("slug", slug)
      .single();
    if (error) throw error;
    return data;
  }

  /* Get all product concerns */
  async getProductConcerns(): Promise<ProductConcern[]> {
    const { data, error } = await this.supabase
      .from("product_concerns")
      .select("*");
    if (error) throw error;
    return data;
  }

  /* Get a product concern by its slug */
  async getProductConcernBySlug(slug: string): Promise<ProductConcern> {
    const { data, error } = await this.supabase
      .from("product_concerns")
      .select("*")
      .eq("slug", slug)
      .single();
    if (error) throw error;
    return data;
  }

  /* Get a product by its slug */
  async getProductBySlug(slug: string): Promise<Product> {
    const { data, error } = await this.supabase
      .from("products")
      .select("*")
      .eq("slug", slug)
      .single();
    if (error) throw error;
    return data;
  }

  /* Get products by category */
  async getProductsByCategory(categoryName: string): Promise<Product[]> {
    const { data, error } = await this.supabase
      .from("products")
      .select("*")
      .eq("category", categoryName);
    if (error) throw error;
    return data;
  }

  /* Get products by concern */
  async getProductsByConcern(concernName: string): Promise<Product[]> {
    const { data, error } = await this.supabase
      .from("products")
      .select("*")
      .eq("concern", concernName);
    if (error) throw error;
    return data;
  }

  /* Get product category by name */
  async getProductCategoryByName(name: string): Promise<ProductCategory> {
    const { data, error } = await this.supabase
      .from("product_categories")
      .select("*")
      .eq("name", name)
      .single();
    if (error) throw error;
    return data;
  }

  /* Get product concern by name */
  async getProductConcernByName(name: string): Promise<ProductConcern> {
    const { data, error } = await this.supabase
      .from("product_concerns")
      .select("*")
      .eq("name", name)
      .single();
    if (error) throw error;
    return data;
  }

  /* Update user profile */
  async updateProfile({
    id,
    firstName,
    lastName,
  }: {
    id: string;
    firstName: string;
    lastName: string;
  }) {
    const { error } = await this.supabase.from("user_profiles").upsert({
      id,
      first_name: firstName,
      last_name: lastName,
      updated_at: new Date().toISOString(),
    });

    if (error) throw error;
  }
}
