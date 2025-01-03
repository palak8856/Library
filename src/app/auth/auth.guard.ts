import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const role = authService.getRole();
  if (role) {
    const requiredRole = route.data['role'];
    if (!requiredRole || role === requiredRole) {
      return true;
    }
  }

  router.navigate(['login'], { replaceUrl: true });
  return false;
};
