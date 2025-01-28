import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomIconComponent } from "@shared/components/custom-icon/custom-icon.component";
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-create-account-form",
  imports: [CommonModule, CustomIconComponent, ReactiveFormsModule],
  templateUrl: "./create-account-form.component.html",
  standalone: true,
})
export class CreateAccountFormComponent implements OnInit {
  submitted = false;
  firstName = new FormControl("", [Validators.required]);
  lastName = new FormControl("", [Validators.required]);
  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [Validators.required]);

  createAccountForm = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    password: this.password,
  });

  constructor() {}

  ngOnInit(): void {}
}
