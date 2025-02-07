import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SupabaseService } from "@services/supabase.service";
import { ProductCardComponent } from "@components/products/product-card/product-card.component";
import { Product } from "@models/product.type";

@Component({
  selector: "app-products",
  imports: [CommonModule, ProductCardComponent],
  templateUrl: "./products.component.html",
  standalone: true,
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];

  constructor(private supabase: SupabaseService) {}

  async ngOnInit() {
    this.products = await this.supabase.getProducts();
  }
}
