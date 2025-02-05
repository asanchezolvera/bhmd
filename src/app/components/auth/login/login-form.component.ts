import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { SupabaseService } from "@services/supabase.service";
import { CustomIconComponent } from "@src/app/components/icon/custom-icon.component";
import {
  ReactiveFormsModule,
  FormBuilder,
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
export class LoginFormComponent {
  submitted = false;
  email = new FormControl("", [Validators.required, Validators.email]);
  password = new FormControl("", [Validators.required]);

  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private supabaseService: SupabaseService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  async onSubmit() {
    if (this.loginForm.valid) {
      try {
        const { email, password } = this.loginForm.value;
        await this.supabaseService.signIn(email, password);
        this.router.navigate(["/"]);
      } catch (error) {
        console.error("Login failed:", error);
      }
    }
  }
}
