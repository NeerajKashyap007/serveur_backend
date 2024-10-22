import { log } from '@angular-devkit/build-angular/src/builders/ssr-dev-server';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  isAdmin = false;

  authentificationData = [
    { username: 'user1', password: 'user1', role: 'user' },
    { username: 'admin1', password: 'admin1', role: 'admin' },
  ]

  // authentificationData = [
  //   { username: 'user1', password: 'user1' },
  //   { username: 'admin1', password: 'admin1' },
  // ]

  // authentificateUser(username: string, password: string): boolean {
  //   const userFound = this.authentificationData.find(user => user.username === username && user.password === password);
  //   return !!userFound; // Retourne vrai si l'utilisateur est trouvé, sinon faux
  // }
  // ;

  authentificateUser(username: string, password: string): boolean {
    // Vérification simplifiée pour cet exemple    
    if (username === 'admin1' && password === 'admin1') {
      this.isAdmin = true;
      console.log('ADMIN',this.isAdmin)
      return true;
    } else if (username === 'user1' && password === 'user1') {
      this.isAdmin = false;
      console.log('USER',this.isAdmin)
      return true;
    } else {
      return false;
    }
  
  }

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
    this.isAdmin = false;
  }



  isConnected() {
    return new Promise<boolean>((resolve, reject) => {
      resolve(this.loggedIn);
    });
  }

  isAdminG() {
    return new Promise<boolean>((resolve, reject) => {
      resolve(this.isAdmin);
    });
  }

}
