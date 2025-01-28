import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, NavigationEnd } from "@angular/router";
import { AuthHeaderComponent } from "@src/app/features/auth-header/auth-header.component";
import { CustomIconComponent } from "@shared/components/custom-icon/custom-icon.component";
import { MegaMenuComponent } from "@src/app/features/mega-menu/mega-menu.component";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-header",
  imports: [
    CommonModule,
    AuthHeaderComponent,
    CustomIconComponent,
    MegaMenuComponent,
  ],
  templateUrl: "./header.component.html",
  standalone: true,
})
export class HeaderComponent implements OnInit {
  isMegaMenuOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isMegaMenuOpen = false;
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isMegaMenuOpen = false;
      });
  }

  toggleMegaMenu() {
    this.isMegaMenuOpen = !this.isMegaMenuOpen;
  }

  showMegaMenu() {
    this.isMegaMenuOpen = true;
  }

  closeMegaMenu() {
    this.isMegaMenuOpen = false;
  }
}
