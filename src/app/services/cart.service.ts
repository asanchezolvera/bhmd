import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private items = new BehaviorSubject<CartItem[]>([]);

  getItems() {
    return this.items.asObservable();
  }

  addItem(item: CartItem) {
    const currentItems = this.items.value;
    const existingItem = currentItems.find(i => i.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
      this.items.next([...currentItems]);
    } else {
      this.items.next([...currentItems, { ...item, quantity: 1 }]);
    }
  }

  removeItem(itemId: string) {
    const currentItems = this.items.value;
    this.items.next(currentItems.filter(item => item.id !== itemId));
  }

  clearCart() {
    this.items.next([]);
  }
}