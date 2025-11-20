import { signal, Injectable } from '@angular/core';

/**
 * CART DRAWER SERVICE
 * Manages the global state of the cart drawer (open/closed) using a signal.
 */

@Injectable({
  providedIn: 'root',
})
export class CartDrawerService {
  private isCartDrawerOpen = signal(false);

  readonly isOpen = this.isCartDrawerOpen.asReadonly();

  toggleCartDrawer(): void {
    this.isCartDrawerOpen.update((current) => !current);
  }

  closeCartDrawer(): void {
    this.isCartDrawerOpen.set(false);
  }

  openCartDrawer(): void {
    this.isCartDrawerOpen.set(true);
  }
}
