import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthHeaderComponent } from "@src/app/features/auth-header/auth-header.component";
import { CustomIconComponent } from "@shared/components/custom-icon/custom-icon.component";
import { MegaMenuComponent } from "@src/app/features/mega-menu/mega-menu.component";

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
export class HeaderComponent {
  isMegaMenuOpen = false;

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
