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
import { signal } from "@angular/core";

@Component({
  selector: "app-login-form",
  imports: [CommonModule, CustomIconComponent, ReactiveFormsModule],
  templateUrl: "./login-form.component.html",
  standalone: true,
})
export class LoginFormComponent {
  loginForm: FormGroup;
  submitted = signal(false);
  loading = signal(false);
  errorMessage = signal<string | null>(null);

  constructor(
    private fb: FormBuilder,
    private supabaseService: SupabaseService,
    private router: Router,
  ) {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  async onSubmit() {
    this.submitted.set(true);
    this.errorMessage.set(null);

    if (this.loginForm.valid) {
      try {
        this.loading.set(true);
        const { email, password } = this.loginForm.value;
        await this.supabaseService.signIn(email, password);
        this.router.navigate(["/"]);
      } catch (error) {
        console.error("Login failed:", error);
        this.errorMessage.set("Invalid email or password");
      } finally {
        this.loading.set(false);
      }
    }
  }
}
