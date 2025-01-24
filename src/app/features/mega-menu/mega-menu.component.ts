import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategoriesService } from "@src/app/services/categories.service";
import { ConcernsService } from "@src/app/services/concerns.service";

@Component({
  selector: "app-mega-menu",
  templateUrl: "./mega-menu.component.html",
  imports: [CommonModule],
  standalone: true,
})
export class MegaMenuComponent implements OnInit {
  categories$ = this.categoriesService.categories$;
  concerns$ = this.concernsService.concerns$;

  constructor(
    private categoriesService: CategoriesService,
    private concernsService: ConcernsService,
  ) {}

  ngOnInit() {}
}
