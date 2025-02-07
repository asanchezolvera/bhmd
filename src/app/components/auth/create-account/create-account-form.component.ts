import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { SupabaseService } from "@services/supabase.service";
import { CustomIconComponent } from "@components/icon/custom-icon.component";
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-create-account-form",
  imports: [CommonModule, CustomIconComponent, ReactiveFormsModule],
  templateUrl: "./create-account-form.component.html",
  standalone: true,
})
export class CreateAccountFormComponent {
  createAccountForm: FormGroup;
  submitted = false;

  // Add getters for form controls
  get firstName() {
    return this.createAccountForm.get("firstName");
  }
  get lastName() {
    return this.createAccountForm.get("lastName");
  }
  get email() {
    return this.createAccountForm.get("email");
  }
  get password() {
    return this.createAccountForm.get("password");
  }

  constructor(
    private fb: FormBuilder,
    private supabaseService: SupabaseService,
    private router: Router,
  ) {
    this.createAccountForm = this.fb.group(
      {
        firstName: ["", [Validators.required]],
        lastName: ["", [Validators.required]],
        email: ["", [Validators.required, Validators.email]],
        password: ["", [Validators.required, Validators.minLength(8)]],
        confirmPassword: ["", [Validators.required, Validators.minLength(8)]],
      },
      {
        validators: this.passwordMatchValidator,
      },
    );
  }
  passwordMatchValidator(form: FormGroup) {
    const password = form.get("password")?.value;
    const confirmPassword = form.get("confirmPassword")?.value;

    if (password === confirmPassword) {
      return null;
    } else {
      return { passwordMismatch: true };
    }
  }

  async onSubmit() {
    this.submitted = true;
    if (this.createAccountForm.valid) {
      try {
        const { email, password, firstName, lastName } =
          this.createAccountForm.value;
        const { user } = await this.supabaseService.signUp(email, password);

        if (user) {
          // Update the user's metadata with first and last name
          await this.supabaseService.updateProfile({
            id: user.id,
            firstName,
            lastName,
          });
        }

        this.router.navigate(["/"]);
      } catch (error) {
        console.error("Error signing up:", error);
      }
    }
  }
}
