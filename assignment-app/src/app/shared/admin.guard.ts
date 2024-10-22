import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "./auth.service";
import {inject} from "@angular/core";

export const adminGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);

  let router = inject(Router);


  return authService.isAdminG()
    .then( authenticated => {
      if (authenticated) {
        console.log('Vous êtes un administrateur, navigation autorisée')
        return true;
      } else {
        console.log('Vous n\'êtes pas un administrateur, navigation refusée')
        router.navigate(['/home']);
        return false;
      }
    })
};
