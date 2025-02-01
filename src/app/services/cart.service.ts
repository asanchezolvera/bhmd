import { Injectable, signal } from "@angular/core";
import { Product } from "../models/product.type";

@Injectable({
  providedIn: "root",
})
export class CartService {
  cart = signal<Product[]>([]);

  addProductToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }

  removeProductFromCart(product: Product) {
    this.cart.set(this.cart().filter((item) => item.id !== product.id));
  }
}
