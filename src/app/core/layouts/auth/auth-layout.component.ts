import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-auth-layout",
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./auth-layout.component.html",
  standalone: true,
})
export class AuthLayoutComponent {}
