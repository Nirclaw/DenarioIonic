import { CanActivateFn, Router } from '@angular/router';
import { Auth2Service } from './auth2.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(Auth2Service);
  let router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
  
};
