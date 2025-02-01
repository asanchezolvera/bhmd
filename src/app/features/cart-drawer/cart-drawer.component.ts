import { Component, inject, OnInit, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartService } from "@src/app/services/cart.service";
import { CartItemComponent } from "@src/app/features/cart-item/cart-item.component";
import { CustomIconComponent } from "@shared/components/custom-icon/custom-icon.component";

@Component({
  selector: "app-cart-drawer",
  imports: [CommonModule, CartItemComponent, CustomIconComponent],
  templateUrl: "./cart-drawer.component.html",
  standalone: true,
})
export class CartDrawerComponent implements OnInit {
  cart = inject(CartService);
  products = this.cart.cart();
  @Output() closeMenu = new EventEmitter<void>();

  onCloseMenu() {
    this.closeMenu.emit();
  }

  constructor() {}

  ngOnInit() {}
}
