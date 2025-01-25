import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CustomIconComponent } from "@shared/components/custom-icon/custom-icon.component";
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-create-account",
  imports: [CommonModule, CustomIconComponent, RouterLink, ReactiveFormsModule],
  templateUrl: "./create-account.component.html",
  standalone: true,
})
export class CreateAccountComponent implements OnInit {
  submitted = false;
  email = new FormControl("", [Validators.required, Validators.email]);

  createAccountForm = new FormGroup({
    email: this.email,
  });

  constructor() {}

  ngOnInit(): void {}
}
