import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../service/auth';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authservice: Auth = inject(Auth);
  const router: Router = inject(Router);

  if (authservice.isLoggedIn()) {
    return true;
  } else {
    setTimeout(() => router.navigate(['login']), 2000);
    alert('Please Login First......');
    return false;
  }
};
