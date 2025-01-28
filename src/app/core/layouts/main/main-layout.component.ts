import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "@shared/components/header/header.component";
import { FooterComponent } from "@shared/components/footer/footer.component";

@Component({
  selector: "app-main-layout",
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: "./main-layout.component.html",
  standalone: true,
})
export class MainLayoutComponent {}
