import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../../services/supabase.service';

@Component({
    selector: 'app-auth',
    imports: [CommonModule, FormsModule],
    template: `
    <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm">
      <h2 class="text-2xl font-bold mb-6">{{ isSignUp ? 'Sign Up' : 'Sign In' }}</h2>
      <form (ngSubmit)="handleSubmit()">
        <div class="mb-4">
          <label class="block text-sm font-medium mb-2">Email</label>
          <input
            type="email"
            [(ngModel)]="email"
            name="email"
            class="input"
            required
          >
        </div>
        <div class="mb-6">
          <label class="block text-sm font-medium mb-2">Password</label>
          <input
            type="password"
            [(ngModel)]="password"
            name="password"
            class="input"
            required
          >
        </div>
        <button type="submit" class="btn btn-primary w-full">
          {{ isSignUp ? 'Sign Up' : 'Sign In' }}
        </button>
      </form>
      <button
        (click)="isSignUp = !isSignUp"
        class="mt-4 text-sm text-blue-500 hover:underline"
      >
        {{ isSignUp ? 'Already have an account? Sign in' : 'Need an account? Sign up' }}
      </button>
    </div>
  `
})
export class AuthComponent {
  email = '';
  password = '';
  isSignUp = false;

  constructor(private supabase: SupabaseService) {}

  async handleSubmit() {
    try {
      if (this.isSignUp) {
        await this.supabase.signUp(this.email, this.password);
      } else {
        await this.supabase.signIn(this.email, this.password);
      }
    } catch (error) {
      console.error('Authentication error:', error);
    }
  }
}