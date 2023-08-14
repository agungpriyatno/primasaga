import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService)
  const router = inject(Router)
  if (service.token != null) {
    return router.navigateByUrl("/home")
  }
  return true
};
