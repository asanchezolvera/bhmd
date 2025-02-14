import { Component, inject, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router, NavigationEnd } from "@angular/router";
import { CartService } from "@services/cart.service";
import { CartDrawerService } from "@services/cartDrawer.service";
import { TopHeaderComponent } from "@components/header/top-header/top-header.component";
import { CustomIconComponent } from "@components/icon/custom-icon.component";
import { ShopMegaMenuComponent } from "@components/mega-menu/shop-mega-menu/shop-mega-menu.component";
import { CartDrawerComponent } from "@components/cart/cart-drawer/cart-drawer.component";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-main-header",
  imports: [
    CommonModule,
    TopHeaderComponent,
    CustomIconComponent,
    ShopMegaMenuComponent,
    CartDrawerComponent,
  ],
  templateUrl: "./main-header.component.html",
  standalone: true,
})
export class HeaderComponent implements OnInit {
  cart = inject(CartService);
  cartDrawer = inject(CartDrawerService);
  isCartDrawerOpen = false;
  isMegaMenuOpen = false;

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

  showMegaMenu() {
    this.isMegaMenuOpen = true;
  }

  closeMegaMenu() {
    this.isMegaMenuOpen = false;
  }
}
