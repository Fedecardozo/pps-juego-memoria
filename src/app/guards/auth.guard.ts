import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auhService: UserService = inject(UserService);
  const router: Router = inject(Router);

  if (auhService.correo) {
    router.navigateByUrl('/home');
  }

  return true;
};
