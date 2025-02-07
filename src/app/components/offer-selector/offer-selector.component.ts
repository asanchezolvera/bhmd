import { Component, Input, signal } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OfferSelectorItemComponent } from "./offer-selector-item/offer-selector-item.component";
import { QuantitySelectorComponent } from "../quantity-selector/quantity-selector.component";

type OfferType = "one-time" | "subscribe";

@Component({
  selector: "app-offer-selector",
  templateUrl: "./offer-selector.component.html",
  imports: [
    CommonModule,
    OfferSelectorItemComponent,
    QuantitySelectorComponent,
  ],
  standalone: true,
})
export class OfferSelectorComponent {
  @Input() price!: number;
  selectedOffer = signal<OfferType>("one-time");

  constructor() {}
}
