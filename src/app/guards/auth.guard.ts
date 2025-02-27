import { inject } from "@angular/core";
import { Router, type CanActivateFn } from "@angular/router";
import { AuthStateService } from "../services/auth-state.service";

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const authState = inject(AuthStateService);

  const isAuthenticated = authState.isAuthenticated();
  if (isAuthenticated) {
    return true;
  }

  router.navigate(["/"]);
  return false;
};
