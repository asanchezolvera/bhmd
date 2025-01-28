import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink } from "@angular/router";
import { CreateAccountFormComponent } from "@features/create-account/create-account-form.component";

@Component({
  selector: "app-create-account",
  imports: [CommonModule, RouterLink, CreateAccountFormComponent],
  templateUrl: "./create-account.component.html",
  standalone: true,
})
export class CreateAccountComponent {}
