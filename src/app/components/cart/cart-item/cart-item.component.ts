import { Component, inject, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartService } from "@services/cart.service";
import { Product } from "@models/product.type";
import { CustomIconComponent } from "../../icon/custom-icon.component";

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  standalone: true,
  imports: [CommonModule, CustomIconComponent],
})
export class CartItemComponent {
  cart = inject(CartService);
  @Input({ required: true }) item!: Product;
}
