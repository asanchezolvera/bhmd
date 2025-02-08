import { Component, signal } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-accordion",
  imports: [CommonModule],
  standalone: true,
  templateUrl: "./accordion.component.html",
})
export class AccordionComponent {
  private openItemId = signal<number | null>(null);

  registerOpen(id: number) {
    const isCurrentlyOpen = this.openItemId() === id;
    this.openItemId.set(isCurrentlyOpen ? null : id);
    return this.openItemId() === id;
  }

  isItemOpen(id: number) {
    return this.openItemId() === id;
  }
}
