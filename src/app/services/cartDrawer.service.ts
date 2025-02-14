import { Injectable, signal } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class CartDrawerService {
  private isCartDrawerOpen = signal(false);
  readonly cartDrawerOpen = this.isCartDrawerOpen.asReadonly();

  toggleCartDrawer() {
    this.isCartDrawerOpen.update((state) => !state);
  }

  showCartDrawer() {
    this.isCartDrawerOpen.set(true);
  }

  closeCartDrawer() {
    this.isCartDrawerOpen.set(false);
  }
}
