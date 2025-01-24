import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SupabaseService } from "../../services/supabase.service";
import { ProductCardComponent } from "@features/products/product-card.component";
import { Observable } from "rxjs";

@Component({
  selector: "app-products",
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: "./products.component.html",
})
export class ProductsComponent implements OnInit {
  products$!: Observable<any>;

  constructor(private supabase: SupabaseService) {}

  async ngOnInit() {
    this.products$ = this.supabase.getProducts();
  }
}
