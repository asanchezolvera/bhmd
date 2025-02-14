import { Injectable, signal, computed } from "@angular/core";
import { Product } from "@models/product.type";
import { CartItem } from "@models/cartItem.type";

@Injectable({
  providedIn: "root",
})
export class CartService {
  private cartSignal = signal<CartItem[]>([]);

  // Public read-only computed signal
  readonly cart = computed(() => this.cartSignal());

  // Computed total items
  readonly totalItems = computed(() =>
    this.cartSignal().reduce((sum, item) => sum + item.quantity, 0),
  );

  // Computed total price
  readonly totalPrice = computed(() =>
    this.cartSignal().reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    ),
  );

  // Add product to cart
  addProductToCart(newItem: CartItem) {
    this.cartSignal.update((items) => {
      const existingItem = items.find(
        (item) =>
          item.id === newItem.id &&
          item.isSubscription === newItem.isSubscription,
      );
      if (existingItem) {
        return items.map((item) =>
          item === existingItem
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item,
        );
      }
      return [...items, newItem];
    });
  }

  // Remove product from cart
  removeProductFromCart(item: CartItem) {
    this.cartSignal.update((items) =>
      items.filter((cartItem) => cartItem.id !== item.id),
    );
  }

  // Update cart item quantity
  updateCartItemQuantity(item: CartItem, quantity: number) {
    this.cartSignal.update((items) =>
      items.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, quantity } : cartItem,
      ),
    );
  }

  // Clear cart
  clearCart() {
    this.cartSignal.set([]);
  }
}
