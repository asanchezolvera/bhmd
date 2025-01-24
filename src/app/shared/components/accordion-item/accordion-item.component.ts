import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomIconComponent } from "@shared/components/custom-icon/custom-icon.component";

@Component({
  selector: "app-accordion-item",
  standalone: true,
  templateUrl: "./accordion-item.component.html",
  imports: [CommonModule, CustomIconComponent],
})
export class AccordionItemComponent {
  @Input() title!: string;
  @Input() isOpen = false;
}
