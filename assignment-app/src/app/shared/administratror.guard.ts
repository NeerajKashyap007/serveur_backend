import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";

export const administratrorGuard: CanActivateFn = (route, state) => {

  let authService = inject(AuthService);

  let router = inject(Router);

  return authService.isAdmin()
    .then( authenticated => {
      return authService.loggedIn && authenticated;
    })
};
