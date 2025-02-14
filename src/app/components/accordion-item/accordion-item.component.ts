import { Component, Input, inject, effect } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccordionComponent } from "@src/app/components/accordion/accordion.component";
import { CustomIconComponent } from "@src/app/components/icon/custom-icon.component";

@Component({
  selector: "app-accordion-item",
  templateUrl: "./accordion-item.component.html",
  imports: [CommonModule, CustomIconComponent],
  standalone: true,
})
export class AccordionItemComponent {
  @Input() title!: string;
  private readonly id = Math.random();
  private accordion = inject(AccordionComponent);
  isOpen = false;

  constructor() {
    effect(() => {
      this.isOpen = this.accordion.isItemOpen(this.id);
    });
  }

  toggle() {
    this.accordion.registerOpen(this.id);
  }
}
