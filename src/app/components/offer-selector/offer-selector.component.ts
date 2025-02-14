import { Component, Input, inject, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Product } from "@models/product.type";
import { OfferSelectorItemComponent } from "./offer-selector-item/offer-selector-item.component";
import { QuantitySelectorComponent } from "../quantity-selector/quantity-selector.component";
import { CartService } from "@services/cart.service";
import { CartDrawerService } from "@services/cartDrawer.service";
type OfferType = "one-time" | "subscribe";

@Component({
  selector: "app-offer-selector",
  templateUrl: "./offer-selector.component.html",
  imports: [
    CommonModule,
    OfferSelectorItemComponent,
    QuantitySelectorComponent,
  ],
  standalone: true,
})
export class OfferSelectorComponent {
  @Input() price!: number;
  @Input() product!: Product;

  private cart = inject(CartService);
  private cartDrawer = inject(CartDrawerService);
  quantity = 1;
  selectedOffer: OfferType = "one-time";

  readonly offers = [
    {
      type: "one-time" as OfferType,
      label: "One-Time Purchase",
      price: () => this.price,
      description: "Or save 20% with a free Luxe Loyalty account.",
    },
    {
      type: "subscribe" as OfferType,
      label: "Subscribe + Save",
      price: () => this.price,
      description: "And receive this product every 30 days, automatically.",
    },
  ];

  addToCart() {
    this.cart.addProductToCart({
      ...this.product,
      quantity: this.quantity,
      price: this.selectedOffer === "subscribe" ? this.price * 0.9 : this.price,
      isSubscription: this.selectedOffer === "subscribe",
    });
    this.cartDrawer.showCartDrawer();
  }
}
