import { Component, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartService } from "@src/app/services/cart.service";
import { CartItemComponent } from "@src/app/components/cart/cart-item/cart-item.component";
import { CustomIconComponent } from "@src/app/components/icon/custom-icon.component";
import { CartDrawerService } from "@src/app/services/cartDrawer.service";

@Component({
  selector: "app-cart-drawer",
  imports: [CommonModule, CartItemComponent, CustomIconComponent],
  templateUrl: "./cart-drawer.component.html",
  standalone: true,
})
export class CartDrawerComponent {
  protected cart = inject(CartService);
  protected cartDrawer = inject(CartDrawerService);

  readonly items = this.cart.cart();

  onCloseMenu() {
    this.cartDrawer.closeCartDrawer();
  }
}
