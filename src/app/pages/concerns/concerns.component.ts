import { Component, OnInit, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { SupabaseService } from "@services/supabase.service";
import { ProductCardComponent } from "@components/products/product-card/product-card.component";
import { Product } from "@models/product.type";
import { ProductConcern } from "@models/productConcern.type";

@Component({
  selector: "app-concerns",
  imports: [CommonModule, ProductCardComponent],
  templateUrl: "./concerns.component.html",
  standalone: true,
})
export class ConcernsComponent implements OnInit {
  concern = signal<ProductConcern | null>(null);
  products = signal<Product[]>([]);

  constructor(
    private route: ActivatedRoute,
    private supabase: SupabaseService,
  ) {
    this.route.params.subscribe((params) => {
      if (params["slug"]) {
        this.loadConcernData(params["slug"]);
      }
    });
  }

  async loadConcernData(slug: string) {
    const concern = await this.supabase.getProductConcernBySlug(slug);
    this.concern.set(concern);

    const products = await this.supabase.getProductsByConcern(concern.name);
    this.products.set(products);
  }

  async ngOnInit() {}
}
