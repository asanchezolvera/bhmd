import { Injectable, signal, computed } from "@angular/core";
import { Product } from "../models/product.type";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cartSignal = signal<Product[]>([]);

  // Public read-only computed signal
  readonly cart = computed(() => this.cartSignal());

  // Computed total items
  readonly totalItems = computed(() => this.cartSignal().length);

  // Computed total price
  readonly totalPrice = computed(() =>
    this.cartSignal().reduce((sum, item) => sum + item.price, 0),
  );

  // Add product to cart
  addProductToCart(product: Product) {
    this.cartSignal.update((items) => [...items, product]);
  }

  // Remove product from cart
  removeProductFromCart(product: Product) {
    this.cartSignal.update((items) =>
      items.filter((item) => item.id !== product.id),
    );
  }

  // Clear cart
  clearCart() {
    this.cartSignal.set([]);
  }
}
