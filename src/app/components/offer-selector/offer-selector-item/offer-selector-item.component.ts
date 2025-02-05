import { Component, Input } from "@angular/core";

@Component({
  selector: "app-offer-selector-item",
  templateUrl: "./offer-selector-item.component.html",
  standalone: true,
})
export class OfferSelectorItemComponent {
  @Input() label!: string;
}
