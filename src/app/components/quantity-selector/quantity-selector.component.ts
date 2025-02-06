import { Component, Input } from "@angular/core";

@Component({
  selector: "app-quantity-selector",
  templateUrl: "./quantity-selector.component.html",
})
export class QuantitySelectorComponent {
  @Input() quantity: number = 1;

  increment() {
    if (this.quantity < 3) {
      this.quantity++;
    }
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
