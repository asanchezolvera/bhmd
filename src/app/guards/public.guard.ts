import { inject } from "@angular/core";
import { Router, type CanActivateFn } from "@angular/router";
import { AuthStateService } from "../services/auth-state.service";

export const publicGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authState = inject(AuthStateService);

  const isAuthenticated = authState.isAuthenticated();
  if (isAuthenticated) {
    router.navigate(["/"]);
    return false;
  }
  return true;
};
