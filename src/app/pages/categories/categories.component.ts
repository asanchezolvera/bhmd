import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { SupabaseService } from "@src/app/services/supabase.service";
import { ProductCardComponent } from "@src/app/features/products/product-card.component";
import { Product } from "@src/app/models/product.type";
import { ProductCategory } from "@src/app/models/productCategory.type";

@Component({
  selector: "app-categories",
  imports: [CommonModule, ProductCardComponent],
  templateUrl: "./categories.component.html",
  standalone: true,
})
export class CategoriesComponent implements OnInit {
  category$!: Observable<ProductCategory>;
  products$!: Observable<Product[]>;

  constructor(
    private route: ActivatedRoute,
    private supabase: SupabaseService,
  ) {}

  ngOnInit() {
    this.category$ = this.route.params.pipe(
      switchMap((params) => {
        const slug = params["slug"];
        if (!slug) {
          throw new Error("Category slug is required.");
        }
        return this.supabase.getProductCategoryBySlug(slug);
      }),
    );
    this.products$ = this.category$.pipe(
      switchMap((category) => {
        return this.supabase.getProductsByCategory(category.name);
      }),
    );
  }
}
