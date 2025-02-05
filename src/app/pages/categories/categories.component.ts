import { Component, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { SupabaseService } from "@services/supabase.service";
import { ProductCardComponent } from "@components/products/product-card/product-card.component";
import { Product } from "@models/product.type";
import { ProductCategory } from "@models/productCategory.type";

@Component({
  selector: "app-categories",
  imports: [CommonModule, ProductCardComponent],
  templateUrl: "./categories.component.html",
  standalone: true,
})
export class CategoriesComponent implements OnInit {
  category = signal<ProductCategory | null>(null);
  products = signal<Product[]>([]);

  constructor(
    private route: ActivatedRoute,
    private supabase: SupabaseService,
  ) {}

  async ngOnInit() {
    const slug = this.route.snapshot.params["slug"];
    if (!slug) {
      throw new Error("Category slug is required.");
    }
    const category = await this.supabase.getProductCategoryBySlug(slug);
    this.category.set(category);

    const products = await this.supabase.getProductsByCategory(category.name);
    this.products.set(products);
  }
}
