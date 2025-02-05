import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { LoginFormComponent } from "@components/auth/login/login-form.component";

@Component({
  selector: "app-login",
  imports: [CommonModule, RouterLink, LoginFormComponent],
  templateUrl: "./login.component.html",
  standalone: true,
})
export class LoginComponent {}
