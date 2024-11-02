import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedIn = false;

  loggedAsAdmin = false;

  authenticationData = [
    {
      login: 'user1',
      password: 'user1',
      role: 'user'
    },
    {
      login: 'admin1',
      password: 'admin1',
      role: 'admin'
    },
  ]

  logIn() {
    this.loggedIn = true;
  }

  newLogIn(username: string, password: string) {
    this.authenticationData.map((el) => {
      if (el.password === password && el.login === username) {
        this.loggedIn = true;
        if (el.role === 'admin') {
          this.loggedAsAdmin = true;
        }
      }
    })
  }

  logOut() {
    this.loggedIn = false;
    this.loggedAsAdmin = false;
  }

  isLogged() {
    return new Promise<boolean>((resolve, reject) => {
      resolve(this.loggedIn);
    });
  }

  isAdmin() {
    return new Promise<boolean>((resolve, reject) => {
      resolve(this.loggedAsAdmin);
    });
  }

  constructor() { }
}
