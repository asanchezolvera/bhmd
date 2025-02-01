import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, NavigationEnd } from "@angular/router";
import { CartService } from "@src/app/services/cart.service";
import { AuthHeaderComponent } from "@src/app/features/auth-header/auth-header.component";
import { CustomIconComponent } from "@shared/components/custom-icon/custom-icon.component";
import { MegaMenuComponent } from "@src/app/features/mega-menu/mega-menu.component";
import { CartDrawerComponent } from "@src/app/features/cart-drawer/cart-drawer.component";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-header",
  imports: [
    CommonModule,
    AuthHeaderComponent,
    CustomIconComponent,
    MegaMenuComponent,
    CartDrawerComponent,
  ],
  templateUrl: "./header.component.html",
  standalone: true,
})
export class HeaderComponent implements OnInit {
  cart = inject(CartService);
  isMegaMenuOpen = false;
  isCartDrawerOpen = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.isMegaMenuOpen = false;
    this.isCartDrawerOpen = false;
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.isMegaMenuOpen = false;
        this.isCartDrawerOpen = false;
      });
  }

  toggleMegaMenu() {
    this.isMegaMenuOpen = !this.isMegaMenuOpen;
  }

  toggleCartDrawer() {
    this.isCartDrawerOpen = !this.isCartDrawerOpen;
  }

  showMegaMenu() {
    this.isMegaMenuOpen = true;
  }

  showCartDrawer() {
    this.isCartDrawerOpen = true;
  }

  closeMegaMenu() {
    this.isMegaMenuOpen = false;
  }

  closeCartDrawer() {
    this.isCartDrawerOpen = false;
  }
}
