import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Product } from "../../models/product.type";

@Component({
  selector: "app-offer-selector",
  templateUrl: "./offer-selector.component.html",
  imports: [CommonModule],
  standalone: true,
})
export class OfferSelectorComponent {
  @Input() product!: Product;

  constructor() {}
}
