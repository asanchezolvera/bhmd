import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "app-quantity-selector",
  templateUrl: "./quantity-selector.component.html",
})
export class QuantitySelectorComponent {
  @Input() quantity: number = 1;
  @Output() quantityChange = new EventEmitter<number>();

  increment() {
    if (this.quantity < 3) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  decrement() {
    if (this.quantity > 1) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
}
