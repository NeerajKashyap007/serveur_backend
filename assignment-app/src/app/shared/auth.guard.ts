import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "./auth.service";
import {inject} from "@angular/core";
import {MatSnackBar} from "@angular/material/snack-bar";

export const authGuard: CanActivateFn = (route, state) => {

  let authService = inject(AuthService);

  let router = inject(Router);

  let snackbar = inject(MatSnackBar)

  return authService.isLogged()
    .then( authenticated => {
      if (authenticated) {
        return true;
      } else {
        snackbar.open("Veuillez vous connecter d'abord !", 'Fermer', {

        })
        router.navigate(['/home']);
        return false;
      }
    })

};
