import { Component, Input, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-offer-selector-item",
  templateUrl: "./offer-selector-item.component.html",
  imports: [CommonModule],
  standalone: true,
})
export class OfferSelectorItemComponent {
  @Input() label!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() isSelected = false;
  @Output() select = new EventEmitter<void>();
}
