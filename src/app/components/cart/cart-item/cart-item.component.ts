import { Component, inject, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartService } from "@services/cart.service";
import { CartItem } from "@models/cartItem.type";
import { CustomIconComponent } from "../../icon/custom-icon.component";

@Component({
  selector: "app-cart-item",
  templateUrl: "./cart-item.component.html",
  standalone: true,
  imports: [CommonModule, CustomIconComponent],
})
export class CartItemComponent {
  cart = inject(CartService);
  @Input({ required: true }) item!: CartItem;

  updateQuantity(event: Event) {
    const quantity = parseInt((event.target as HTMLSelectElement).value);
    this.cart.updateCartItemQuantity(this.item, quantity);
  }
}
