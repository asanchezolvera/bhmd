import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { CategoriesService } from "@src/app/services/categories.service";
import { ConcernsService } from "@src/app/services/concerns.service";

@Component({
  selector: "app-shop-mega-menu",
  templateUrl: "./shop-mega-menu.component.html",
  imports: [CommonModule, RouterLink],
  standalone: true,
})
export class ShopMegaMenuComponent implements OnInit {
  @Output() closeMenu = new EventEmitter<void>();
  isMenuOpen = true;

  onCloseMenu() {
    this.closeMenu.emit();
  }

  constructor(
    protected categoriesService: CategoriesService,
    protected concernsService: ConcernsService,
  ) {}

  ngOnInit() {}
}
