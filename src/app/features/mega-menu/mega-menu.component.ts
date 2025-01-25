import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { CategoriesService } from "@src/app/services/categories.service";
import { ConcernsService } from "@src/app/services/concerns.service";

@Component({
  selector: "app-mega-menu",
  templateUrl: "./mega-menu.component.html",
  imports: [CommonModule, RouterLink],
  standalone: true,
})
export class MegaMenuComponent implements OnInit {
  categories$ = this.categoriesService.categories$;
  concerns$ = this.concernsService.concerns$;
  @Output() closeMenu = new EventEmitter<void>();

  onCloseMenu() {
    this.closeMenu.emit();
  }

  constructor(
    private categoriesService: CategoriesService,
    private concernsService: ConcernsService,
  ) {}

  ngOnInit() {}
}
