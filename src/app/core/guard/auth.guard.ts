import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ModalSigninService } from 'src/app/shared/services/modal-signin.service';

export const authGuard: CanActivateFn = (route, state) => {
  let service = inject(AuthService)
  let signinPop = inject(ModalSigninService)
  
  if (!service.token) {
    signinPop.open()
    return false;
  }
  return true;
};
