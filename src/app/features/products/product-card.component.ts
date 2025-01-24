import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { Product } from "../../models/product.type";

@Component({
  selector: "app-product-card",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./product-card.component.html",
})
export class ProductCardComponent {
  @Input() product!: Product;
}
