import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Product } from "../../models/product.type";
import { OfferSelectorItemComponent } from "./offer-selector-item/offer-selector-item.component";
@Component({
  selector: "app-offer-selector",
  templateUrl: "./offer-selector.component.html",
  imports: [CommonModule, OfferSelectorItemComponent],
  standalone: true,
})
export class OfferSelectorComponent {
  constructor() {}
}
