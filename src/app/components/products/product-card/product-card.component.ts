import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { BestsellerComponent } from "@components/bestseller/bestseller.component";
import { Product } from "@models/product.type";
@Component({
  selector: "app-product-card",
  imports: [CommonModule, RouterLink, BestsellerComponent],
  templateUrl: "./product-card.component.html",
  standalone: true,
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
}
