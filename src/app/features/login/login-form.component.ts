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
  selector: "app-login-form",
  imports: [CommonModule, CustomIconComponent, ReactiveFormsModule],
  templateUrl: "./login-form.component.html",
  standalone: true,
})
export class LoginFormComponent implements OnInit {
  submitted = false;
  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [Validators.required]);

  loginForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  constructor() {}

  ngOnInit(): void {}
}
