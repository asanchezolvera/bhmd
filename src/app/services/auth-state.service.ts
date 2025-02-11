import { Injectable, computed, signal } from "@angular/core";
import { Router } from "@angular/router";
import { SupabaseService } from "./supabase.service";
import { User } from "@supabase/supabase-js";

@Injectable({
  providedIn: "root",
})
export class AuthStateService {
  private authLoadingSignal = signal<boolean>(true);
  private currentUserSignal = signal<User | null>(null);

  readonly isLoading = computed(() => this.authLoadingSignal());
  readonly currentUser = computed(() => this.currentUserSignal());
  readonly isAuthenticated = computed(() => !!this.currentUserSignal());

  constructor(
    private supabaseService: SupabaseService,
    private router: Router,
  ) {
    this.initializeAuth();
  }

  // Initialization and session management
  private async initializeAuth() {
    try {
      // Check for existing session on app load
      const {
        data: { session },
      } = await this.supabaseService.auth.getSession();
      this.currentUserSignal.set(session?.user ?? null);
    } finally {
      this.authLoadingSignal.set(false);
    }

    // Listen for auth changes
    this.supabaseService.auth.onAuthStateChange((_event, session) => {
      this.currentUserSignal.set(session?.user ?? null);
    });
  }

  async logout() {
    await this.supabaseService.signOut();
    this.router.navigate(["/login"]);
  }
}
